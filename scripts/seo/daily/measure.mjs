// 매일 SEO 측정 — 정해진 방법으로만 잰다(판단은 하지 않는다). 결과는 ~/.lettie-seo-daily/measure/<날짜>.json, 요약은 history.tsv 한 줄.
//   node scripts/seo/daily/measure.mjs [--no-serp] [--pages]
// 재는 것: 서치 콘솔 날짜별 확정치·색인 수·수동 조치/보안, 구글·빙 고정 검색어 순위, 사이트맵 전 쪽과 핵심 쪽의 크롤러 시점 점검,
// robots.txt, 구글 검색 상태 대시보드(코어·스팸 업데이트). 월요일(또는 --pages)엔 3개월 쪽별 표도 저장한다.
import { mkdirSync, writeFileSync, appendFileSync, existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { gscDays, gscIndex, gscIssues, gscPages } from './gsc.mjs';
import { serp } from './serp.mjs';
import { sleep } from './cdp.mjs';

const SITE = 'https://lettie-dating.com';
const STATE = join(homedir(), '.lettie-seo-daily');
const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' });
const args = new Set(process.argv.slice(2));
mkdirSync(join(STATE, 'measure'), { recursive: true });

const UA = 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

// 고정 검색어 — 바꾸면 이전 날짜와 비교가 끊긴다. 바꿀 땐 history 에 적을 것.
const GOOGLE_PANEL = [
  ['lettie pen pal app', 'en', 'us', 'brand'],
  ['lettie penpals and letters', 'en', 'us', 'brand'],
  ['레티 펜팔', 'ko', 'kr', 'brand'],
  ['pen pal app', 'en', 'us', 'generic'],
  ['what is a pen pal', 'en', 'us', 'generic'],
  ['pen pal letter statistics', 'en', 'us', 'data'],
  ['slowly alternatives', 'en', 'us', 'generic'],
  ['펜팔 어플', 'ko', 'kr', 'generic'],
  ['편지 첫문장', 'ko', 'kr', 'generic'],
];
const BING_PANEL = [
  ['lettie pen pal app', 'en', 'us', 'brand'],
  ['pen pal letter statistics', 'en', 'us', 'data'],
  ['what is a pen pal', 'en', 'us', 'generic'],
];
// 사이트맵에서 빠져도 잡히도록 따로 보는 핵심 쪽 — 반드시 200·index·자기 canonical
const KEY_PAGES = ['', '/en', '/penpal-app', '/en/penpal-app', '/en/letter-stats', '/letter-stats', '/en/letter-map', '/blog/how-to-start-penpal', '/blog/what-is-a-pen-pal', '/en/blog/what-is-a-pen-pal', '/en/blog/best-penpal-apps-2026'];

const errors = [];
const safe = async (label, fn) => { try { return await fn(); } catch (e) { errors.push(`${label}: ${e.message}`); return null; } };

async function crawlCheck(path) {
  const url = SITE + path;
  try {
    const r = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
    const html = await r.text();
    const robots = (html.match(/<meta name="robots" content="([^"]*)"/i) || [])[1] || '';
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1] || '';
    const xRobots = r.headers.get('x-robots-tag') || '';
    const norm = (u) => u.replace(/\/$/, '');
    const problems = [];
    if (r.status !== 200) problems.push(`status ${r.status}`);
    if (/noindex/i.test(robots) || /noindex/i.test(xRobots)) problems.push('noindex');
    if (canonical && norm(canonical) !== norm(url)) problems.push(`canonical→${canonical}`);
    if (!/<h1/i.test(html)) problems.push('h1 없음');
    return { path, status: r.status, problems };
  } catch (e) {
    return { path, status: 0, problems: [`fetch 실패 ${e.message}`] };
  }
}

async function pool(items, n, fn) {
  const out = []; let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

const m = { date: today, measuredAt: new Date().toISOString() };

// 1) 크롤러 시점 — 사이트맵 전 쪽 + 핵심 쪽 + robots.txt
m.crawl = await safe('crawl', async () => {
  const sm = await (await fetch(`${SITE}/sitemap.xml`, { signal: AbortSignal.timeout(20000) })).text();
  const paths = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1].replace(SITE, ''));
  const all = await pool(paths, 6, crawlCheck);
  const keys = await pool(KEY_PAGES, 6, crawlCheck);
  const robotsTxt = await (await fetch(`${SITE}/robots.txt`, { signal: AbortSignal.timeout(20000) })).text();
  const notFound = await fetch(`${SITE}/__seo-daily-404-check`, { signal: AbortSignal.timeout(20000) }).then((r) => r.status).catch(() => 0);
  return {
    sitemapCount: paths.length,
    sitemapProblems: all.filter((x) => x.problems.length),
    keyProblems: keys.filter((x) => x.problems.length),
    robotsBlocksAll: /^Disallow:\s*\/\s*$/m.test(robotsTxt),
    robotsHasSitemap: /Sitemap:\s*https:\/\/lettie-dating\.com\/sitemap\.xml/.test(robotsTxt),
    notFoundStatus: notFound,
  };
});

// 2) 구글 검색 상태 대시보드 — 최근 120일 순위 관련 사건
m.googleUpdates = await safe('status', async () => {
  const j = await (await fetch('https://status.search.google.com/incidents.json', { signal: AbortSignal.timeout(20000) })).json();
  const cut = Date.now() - 120 * 864e5;
  return j.filter((x) => Date.parse(x.begin) > cut).map((x) => ({ name: x.external_desc, begin: x.begin.slice(0, 10), end: x.end ? x.end.slice(0, 10) : null, ongoing: !x.end }));
});

// 3) 서치 콘솔
m.gsc = {};
m.gsc.days = await safe('gsc days', () => gscDays(35));
m.gsc.index = await safe('gsc index', () => gscIndex());
m.gsc.issues = await safe('gsc issues', () => gscIssues());
const d = m.gsc.days || [];
const sum = (a, k) => a.reduce((s, x) => s + x[k], 0);
const last7 = d.slice(-7), prev7 = d.slice(-14, -7);
// 날짜 표가 14일 넘게 안 읽혔으면 7일 비교를 내지 않는다(틀린 「앞 7일」로 회복 신호가 켜지지 않게)
if (d.length && d.length < 14) errors.push(`gsc days: ${d.length}일치만 읽힘 — 7일 비교 생략`);
m.gsc.summary = d.length >= 14 ? {
  latestDate: d.at(-1).date,
  latest: d.at(-1),
  last7: { clicks: sum(last7, 'clicks'), impressions: sum(last7, 'impressions'), avgImpressions: +(sum(last7, 'impressions') / Math.max(1, last7.length)).toFixed(1) },
  prev7: { clicks: sum(prev7, 'clicks'), impressions: sum(prev7, 'impressions'), avgImpressions: +(sum(prev7, 'impressions') / Math.max(1, prev7.length)).toFixed(1) },
} : null;

// 4) 쪽별 3개월 표 — 월요일, 또는 7일 넘게 없을 때, 또는 --pages
const pageFiles = readdirSync(join(STATE, 'measure')).filter((f) => f.startsWith('pages-')).sort();
const lastPages = pageFiles.at(-1)?.slice(6, 16);
const weekday = new Date(`${today}T12:00:00+09:00`).getUTCDay();
if (args.has('--pages') || weekday === 1 || !lastPages || (Date.parse(today) - Date.parse(lastPages)) / 864e5 >= 7) {
  const pages = await safe('gsc pages', () => gscPages(90));
  if (pages?.length) {
    writeFileSync(join(STATE, 'measure', `pages-${today}.tsv`), pages.map((p) => `${p.page}\t${p.clicks}\t${p.impressions}`).join('\n') + '\n');
    m.pagesTable = `pages-${today}.tsv (${pages.length}쪽)`;
  }
}

// 5) 검색 결과 순위 — 자동화 크롬이 막히면(캡차) 그날 구글 나머지는 건너뛴다
if (!args.has('--no-serp')) {
  m.serp = { google: [], bing: [] };
  let blocked = false;
  for (const [q, hl, gl, kind] of GOOGLE_PANEL) {
    if (blocked) { m.serp.google.push({ q, kind, skipped: true }); continue; }
    const r = await safe(`google ${q}`, () => serp('google', q, hl, gl));
    if (r?.blocked) blocked = true;
    m.serp.google.push(r ? { q, kind, position: r.position, ourUrl: r.ourUrl, storeListed: r.storeListed, blocked: r.blocked, top3: r.results.slice(0, 3) } : { q, kind, error: true });
    await sleep(4000 + Math.random() * 4000);
  }
  for (const [q, hl, gl, kind] of BING_PANEL) {
    const r = await safe(`bing ${q}`, () => serp('bing', q, hl, gl));
    m.serp.bing.push(r ? { q, kind, position: r.position, ourUrl: r.ourUrl } : { q, kind, error: true });
    await sleep(3000);
  }
}

m.errors = errors;
writeFileSync(join(STATE, 'measure', `${today}.json`), JSON.stringify(m, null, 1));

// history.tsv — 하루 한 줄 (같은 날 다시 재면 줄이 늘지만 판단은 마지막 줄)
const H = join(STATE, 'history.tsv');
if (!existsSync(H)) writeFileSync(H, ['재측정일', 'GSC최신일', '최신일노출', '최신일클릭', '7일노출', '7일클릭', '앞7일노출', '색인', '미색인', '구글브랜드순위', '구글일반1쪽수', '빙브랜드순위', '사이트맵쪽', '크롤문제', '진행중업데이트'].join('\t') + '\n');
const s = m.gsc.summary;
const brand = m.serp?.google?.filter((x) => x.kind === 'brand').map((x) => x.position ?? '-').join('/') ?? '';
const generic1 = m.serp?.google?.filter((x) => x.kind !== 'brand' && x.position).length ?? '';
const bingBrand = m.serp?.bing?.find((x) => x.kind === 'brand')?.position ?? '-';
const crawlIssues = m.crawl ? m.crawl.sitemapProblems.length + m.crawl.keyProblems.length + (m.crawl.robotsBlocksAll ? 1 : 0) + (m.crawl.notFoundStatus === 404 ? 0 : 1) : 'ERR';
const ongoing = (m.googleUpdates || []).filter((x) => x.ongoing).map((x) => x.name).join(', ') || '-';
appendFileSync(H, [today, s?.latestDate ?? '-', s?.latest.impressions ?? '-', s?.latest.clicks ?? '-', s?.last7.impressions ?? '-', s?.last7.clicks ?? '-', s?.prev7.impressions ?? '-', m.gsc.index?.indexed ?? '-', m.gsc.index?.notIndexed ?? '-', brand, generic1, bingBrand, m.crawl?.sitemapCount ?? '-', crawlIssues, ongoing].join('\t') + '\n');

// 요약 출력 (에이전트·로그용)
console.log(`# ${today} SEO 측정`);
console.log(`GSC 확정치 최신 ${s?.latestDate}: 노출 ${s?.latest.impressions}·클릭 ${s?.latest.clicks} | 최근 7일 노출 ${s?.last7.impressions}(하루 ${s?.last7.avgImpressions})·클릭 ${s?.last7.clicks} | 앞 7일 노출 ${s?.prev7.impressions}`);
console.log(`색인 ${m.gsc.index?.indexed} / 미색인 ${m.gsc.index?.notIndexed} ${JSON.stringify(m.gsc.index?.reasons ?? {})} | 수동 조치 ${m.gsc.issues?.manualActionsOk ? '없음' : '확인 필요'}·보안 ${m.gsc.issues?.securityOk ? '없음' : '확인 필요'}`);
console.log(`크롤러: 사이트맵 ${m.crawl?.sitemapCount}쪽, 문제 ${m.crawl?.sitemapProblems.length}·핵심 쪽 문제 ${m.crawl?.keyProblems.length}·robots 전체 차단 ${m.crawl?.robotsBlocksAll}·404 응답 ${m.crawl?.notFoundStatus}`);
for (const p of [...(m.crawl?.sitemapProblems || []), ...(m.crawl?.keyProblems || [])]) console.log(`  ! ${p.path || '/'} ${p.problems.join(', ')}`);
console.log(`구글 업데이트: ${(m.googleUpdates || []).map((x) => `${x.name} ${x.begin}~${x.end ?? '진행 중'}`).join(' · ') || '없음'}`);
if (m.serp) {
  console.log('구글: ' + m.serp.google.map((x) => `「${x.q}」 ${x.skipped ? '건너뜀' : x.error ? '오류' : x.position ?? '없음'}`).join(' · '));
  console.log('빙: ' + m.serp.bing.map((x) => `「${x.q}」 ${x.error ? '오류' : x.position ?? '없음'}`).join(' · '));
}
if (m.pagesTable) console.log(`쪽별 표 저장: ${m.pagesTable}`);
if (errors.length) console.log(`측정 오류: ${errors.join(' | ')}`);

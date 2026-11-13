// 서치 콘솔 읽기 도구 (읽기 전용, CDP 9333). 매일 점검(measure.mjs)과 에이전트가 같이 쓴다.
//   node scripts/seo/daily/gsc.mjs days [일수] [필터]      날짜별 확정치 클릭·노출 (필터 예: '&page=*%2Fen%2Fpenpal-app' '&country=kor' '&query=*lettie')
//   node scripts/seo/daily/gsc.mjs pages [일수] [필터]     쪽별 클릭·노출 (노출 많은 순)
//   node scripts/seo/daily/gsc.mjs queries [일수] [필터]   검색어별 클릭·노출
//   node scripts/seo/daily/gsc.mjs index                   색인 생성됨·안 됨 수와 이유
//   node scripts/seo/daily/gsc.mjs issues                  수동 조치·보안 문제
// 함정: 성과 보고서 URL 의 날짜 파라미터는 안 먹고 늘 3개월이다(num_of_days 는 기본값 보기용). 기간을 나누려면 days 로 날짜별을 받는다.
// 「최근 24시간」 보기는 잠정치라 쓰지 않는다 — 확정치는 2~3일 늦다.
import { withTab, sleep } from './cdp.mjs';

const R = 'resource_id=sc-domain%3Alettie-dating.com';
const PERF = (breakdown, days, filter = '') =>
  `https://search.google.com/search-console/performance/search-analytics?${R}&num_of_days=${days}&breakdown=${breakdown}${filter}`;

async function readTable(url, rowRe, maxPages = 60) {
  return withTab(url, async ({ ev, click }) => {
    for (let i = 0; i < 30; i++) { await sleep(1000); if (i > 8 && /총 노출수|Total impressions/.test((await ev('document.body.innerText')) || '')) break; }
    const rows = new Map();
    for (let pg = 0; pg < maxPages; pg++) {
      const txt = (await ev('document.body.innerText')) || '';
      for (const m of txt.matchAll(rowRe)) rows.set(m[1], [Number(m[2].replace(/,/g, '')), Number(m[3].replace(/,/g, ''))]);
      const rect = await ev(`(()=>{const b=[...document.querySelectorAll('[aria-label="Next page"],[aria-label="다음 페이지"]')].filter(e=>e.offsetParent).pop();if(!b||b.getAttribute('aria-disabled')==='true'||b.disabled)return null;b.scrollIntoView({block:'center'});const r=b.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2};})()`);
      if (!rect) break;
      await click(rect.x, rect.y);
      await sleep(1500);
    }
    return rows;
  });
}

const toIso = (k) => { const [y, m, d] = k.replace(/\.$/, '').split('. ').map(Number); return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`; };

/** 날짜별 확정치 [{date, clicks, impressions}] 오래된 순 */
export async function gscDays(days = 30, filter = '') {
  const rows = await readTable(PERF('date', days, filter), /^(20\d\d\. \d+\. \d+\.)\t(\d[\d,]*)\t(\d[\d,]*)$/gm, 20);
  return [...rows].map(([k, [clicks, impressions]]) => ({ date: toIso(k), clicks, impressions })).sort((a, b) => a.date.localeCompare(b.date));
}

/** 쪽별 [{page, clicks, impressions}] 노출 많은 순 */
export async function gscPages(days = 90, filter = '') {
  const rows = await readTable(PERF('page', days, filter), /^(https:\/\/lettie-dating\.com\S*)\t(\d[\d,]*)\t(\d[\d,]*)$/gm);
  return [...rows].map(([page, [clicks, impressions]]) => ({ page, clicks, impressions })).sort((a, b) => b.impressions - a.impressions);
}

/** 검색어별 [{query, clicks, impressions}] — 구글이 익명 처리한 검색어는 빠진다 */
export async function gscQueries(days = 90, filter = '') {
  const rows = await readTable(PERF('query', days, filter), /^([^\t\n]{1,120})\t(\d[\d,]*)\t(\d[\d,]*)$/gm, 10);
  return [...rows].filter(([q]) => !/^20\d\d\. /.test(q)).map(([query, [clicks, impressions]]) => ({ query, clicks, impressions })).sort((a, b) => b.impressions - a.impressions);
}

/** 색인 생성됨·안 됨 수와 이유별 수 */
export async function gscIndex() {
  return withTab(`https://search.google.com/search-console/index?${R}`, async ({ ev }) => {
    await sleep(9000);
    const L = ((await ev('document.body.innerText')) || '').split('\n').map((s) => s.trim());
    const after = (label) => { const i = L.indexOf(label); return i >= 0 ? Number((L[i + 1] || '').replace(/,/g, '')) : null; };
    const k = L.findIndex((l) => /생성되지 않는 이유/.test(l));
    const reasons = {};
    if (k >= 0) {
      let cur = null;
      for (const l of L.slice(k, k + 60)) {
        const m = l.match(/^(.+?)\t(웹사이트|Google 시스템)/);
        if (m) cur = m[1].trim();
        else if (cur && /^\d[\d,]*$/.test(l)) { reasons[cur] = Number(l.replace(/,/g, '')); cur = null; }
      }
    }
    const updated = (L.find((l) => /^최종 업데이트/.test(l)) || '').replace('최종 업데이트:', '').trim();
    return { indexed: after('색인 생성됨'), notIndexed: after('색인이 생성되지 않은 페이지'), updated, reasons };
  });
}

/** 수동 조치·보안 문제 — 둘 다 「감지된 문제 없음」이면 ok */
export async function gscIssues() {
  // 화면이 늦게 뜨는 날이 있다(11/13 8초로는 보안 화면이 비어 「확인 필요」 오판) — 문구가 나올 때까지 25초까지 기다린다
  const read = (path) => withTab(`https://search.google.com/search-console/${path}?${R}`, async ({ ev }) => {
    let t = '';
    for (let i = 0; i < 25; i++) { await sleep(1000); t = (await ev('document.body.innerText')) || ''; if (i > 4 && /감지된 문제 없음|No issues detected|문제가 감지|issues? detected/i.test(t)) break; }
    return t;
  });
  const manual = await read('manual-actions');
  const security = await read('security-issues');
  return { manualActionsOk: /감지된 문제 없음|No issues detected/.test(manual), securityOk: /감지된 문제 없음|No issues detected/.test(security) };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [cmd = 'days', a, b] = process.argv.slice(2);
  if (cmd === 'days') for (const r of await gscDays(a || 30, b)) console.log(`${r.date}\t${r.clicks}\t${r.impressions}`);
  else if (cmd === 'pages') for (const r of await gscPages(a || 90, b)) console.log(`${r.page}\t${r.clicks}\t${r.impressions}`);
  else if (cmd === 'queries') for (const r of await gscQueries(a || 90, b)) console.log(`${r.query}\t${r.clicks}\t${r.impressions}`);
  else if (cmd === 'index') console.log(JSON.stringify(await gscIndex(), null, 1));
  else if (cmd === 'issues') console.log(JSON.stringify(await gscIssues()));
  else { console.error('명령: days|pages|queries|index|issues'); process.exit(2); }
}

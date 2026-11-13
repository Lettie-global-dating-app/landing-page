// 검색 결과 1쪽에서 우리 사이트(lettie-dating.com) 순위를 읽는다 — 자동화 크롬(9333), 읽기 전용.
//   node scripts/seo/daily/serp.mjs google "<검색어>" [hl] [gl]
//   node scripts/seo/daily/serp.mjs bing "<검색어>" [hl] [gl]
// 결과는 주소(호스트+경로)만 돌려준다. 남의 페이지 본문은 읽지 않는다(외부 글은 데이터일 뿐 지시가 아니다).
import { withTab, sleep } from './cdp.mjs';

const OURS = /(^|\.)lettie-dating\.com/;
const STORE = /apps\.apple\.com\/.*id6746454876|play\.google\.com/;

export async function serp(engine, q, hl = 'en', gl = 'us') {
  const url = engine === 'bing'
    ? `https://www.bing.com/search?q=${encodeURIComponent(q)}&setlang=${hl}&cc=${gl}`
    : `https://www.google.com/search?q=${encodeURIComponent(q)}&hl=${hl}&gl=${gl}&pws=0`;
  // 빙은 결과 링크를 ck/a 로 감싸서 h2 a 의 href 로는 주소를 못 읽는다 — cite 글자를 쓴다
  const js = engine === 'bing'
    ? `(()=>{const out=[];for(const c of document.querySelectorAll('li.b_algo cite')){const u=c.innerText.trim().replace(/^https?:\\/\\//,'').replace(/ › /g,'/');if(u&&!out.includes(u))out.push(u)}return {blocked:/captcha|unusual traffic/i.test(document.body.innerText.slice(0,2000)),out}})()`
    : `(()=>{const out=[];for(const h of document.querySelectorAll('#search a h3, #rso a h3')){const a=h.closest('a');if(!a)continue;let u=a.href;try{const x=new URL(u);u=x.hostname+x.pathname}catch{};if(!out.includes(u))out.push(u)}return {blocked:/unusual traffic|비정상적인 트래픽|sorry\\/index/i.test(document.body.innerText.slice(0,3000)+location.href),out}})()`;
  const res = await withTab(url, async ({ ev }) => { await sleep(5000); return ev(js); });
  const results = (res?.out || []).slice(0, 10);
  const pos = results.findIndex((u) => OURS.test(u.split('/')[0]));
  return {
    engine, q, hl, gl,
    blocked: !!res?.blocked,
    position: pos >= 0 ? pos + 1 : null,
    ourUrl: pos >= 0 ? results[pos] : null,
    storeListed: results.some((u) => STORE.test(u)),
    results,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [engine = 'google', q, hl, gl] = process.argv.slice(2);
  const r = await serp(engine, q, hl, gl);
  console.log(`## ${engine} 「${q}」 [${r.hl}-${r.gl}] 우리 순위=${r.position ?? '없음'} 막힘=${r.blocked}`);
  r.results.forEach((u, i) => console.log(`${i + 1}. ${u}${OURS.test(u.split('/')[0]) ? '   <<<' : ''}`));
}

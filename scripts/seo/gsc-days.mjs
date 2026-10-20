// GSC 실적 날짜별 표(클릭·노출)를 CDP Chrome(9333, 구글 로그인)으로 다음 쪽을 눌러 가며 전부 읽는다 — 읽기 전용. node scripts/seo/gsc-days.mjs [일수]
// 「최근 24시간」 보기는 잠정치(현지 시각·덜 모인 시간)라 노출이 크게 낮게 나온다. 추세는 이 날짜별 확정치로 본다 (2026-10-20).
const PORT = 9333; const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const days = process.argv[2] || 90;
const url = `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Alettie-dating.com&num_of_days=${days}&breakdown=date`;
const t = await (await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl); let id = 0; const p = new Map();
await new Promise((r) => (ws.onopen = r));
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && p.has(d.id)) { p.get(d.id)(d.result); p.delete(d.id); } };
const send = (method, params = {}) => new Promise((r) => { const i = ++id; p.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (js) => (await send('Runtime.evaluate', { expression: js, returnByValue: true }))?.result?.value;
for (let i = 0; i < 30; i++) { await sleep(1000); if (/총 노출수/.test(await ev('document.body.innerText')) && i > 8) break; }
const rows = new Map();
for (let pg = 0; pg < 20; pg++) {
  const txt = await ev('document.body.innerText');
  for (const m of txt.matchAll(/^(20\d\d\. \d+\. \d+\.)\t(\d[\d,]*)\t(\d[\d,]*)$/gm)) rows.set(m[1], [m[2], m[3]]);
  const rect = await ev(`(()=>{const b=[...document.querySelectorAll('[aria-label="Next page"],[aria-label="다음 페이지"]')].filter(e=>e.offsetParent).pop();if(!b||b.getAttribute('aria-disabled')==='true'||b.disabled)return null;b.scrollIntoView({block:'center'});const r=b.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2};})()`);
  if (!rect) break;
  for (const type of ['mouseMoved','mousePressed','mouseReleased']) await send('Input.dispatchMouseEvent', { type, x: rect.x, y: rect.y, button: 'left', clickCount: 1 });
  await sleep(1500);
}
for (const [d, [c, i]] of [...rows].sort((a, b) => new Date(a[0].replace(/\. /g, '-').replace(/\.$/, '')) - new Date(b[0].replace(/\. /g, '-').replace(/\.$/, '')))) console.log(`${d}\t${c}\t${i}`);
ws.close(); await fetch(`http://127.0.0.1:${PORT}/json/close/${t.id}`).catch(() => {});

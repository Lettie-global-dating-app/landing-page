// 자동화 크롬(CDP 9333, ~/.lettie-chrome — 구글 로그인됨)에서 새 탭을 열어 읽고 닫는 도우미. 읽기 전용으로만 쓴다.
// 프로필을 지우거나 다시 복사하지 말 것 — 로그인은 복사로 안 옮겨진다.
export const PORT = 9333;
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function withTab(url, fn) {
  const t = await (await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' })).json();
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d.result); pending.delete(d.id); } };
  // 응답이 안 오는 호출이 전체를 멈추지 않게 8초에서 끊는다 (11/13 색인 화면에서 멈춤)
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); setTimeout(() => { if (pending.has(i)) { pending.delete(i); r(null); } }, 8000); });
  const ev = async (js) => (await send('Runtime.evaluate', { expression: js, returnByValue: true }))?.result?.value;
  const click = async (x, y) => { for (const type of ['mouseMoved', 'mousePressed', 'mouseReleased']) await send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1 }); };
  try {
    return await fn({ ev, click, send });
  } finally {
    try { ws.close(); } catch {}
    await fetch(`http://127.0.0.1:${PORT}/json/close/${t.id}`).catch(() => {});
  }
}

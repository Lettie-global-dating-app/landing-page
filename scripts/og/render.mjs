#!/usr/bin/env node
/**
 * 언어별 OG 이미지(public/og/<lang>.png, 1200×630)를 홈 문구에서 그린다 (2026-10-04).
 *
 * 예전 이미지는 손으로 한 번 찍은 것이라 "28개 언어 · 150+개국 · 진짜 사람" 같은 옛 사실이 그대로 남아 있었다.
 * 이제 문구는 src/i18n/home/<lang>.ts 의 h1a·h1b·footer.tag·free·stats, 숫자는 src/data/facts.ts·letterMap.ts 에서 읽는다.
 * 그림은 자동화 크롬(CDP 9333)의 **새 브라우저 컨텍스트**에서 찍는다 — 기존 탭·쿠키는 건드리지 않는다.
 * PIL 은 데바나가리·벵골·타이 글자 결합을 못 하므로 브라우저로 그린다.
 *
 * 사용: node scripts/og/render.mjs [lang ...]   (인자가 없으면 홈 문구가 있는 모든 언어)
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const PORT = process.env.CDP_PORT || 9333;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const facts = readFileSync(join(ROOT, 'src/data/facts.ts'), 'utf8');
const letterMap = readFileSync(join(ROOT, 'src/data/letterMap.ts'), 'utf8');
const LANGS_ROUNDED = facts.match(/languagesRounded:\s*'([^']+)'/)[1];
const COUNTRIES = letterMap.match(/export const COMMUNITY = \{[^}]*countries:\s*(\d+)/)[1];

const str = (src, key) => {
  const m = src.match(new RegExp(`\\b${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
  if (!m) throw new Error(`no ${key}`);
  return m[1].replace(/\\'/g, "'");
};

function copyFor(lang) {
  const src = readFileSync(join(ROOT, `src/i18n/home/${lang}.ts`), 'utf8');
  const statsBlock = src.slice(src.indexOf('stats: ['), src.indexOf('howTitle'));
  const tuples = [...statsBlock.matchAll(/\[\s*([^,\]]+?)\s*,\s*'((?:[^'\\]|\\.)*)'\s*\]/g)].map((m) => [m[1], m[2]]);
  if (tuples.length !== 3) throw new Error(`${lang}: stats ${tuples.length}`);
  const stats = tuples.map(([v, label]) => {
    const value = v.includes('languagesRounded') ? LANGS_ROUNDED : v.includes('COMMUNITY.countries') ? COUNTRIES : v.replace(/^'|'$/g, '');
    return [value, label];
  });
  const footer = src.slice(src.indexOf('footer:'));
  return { h1a: str(src, 'h1a'), h1b: str(src, 'h1b'), free: str(src, 'free'), tag: str(footer, 'tag'), stats };
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function html(lang, c) {
  const file = (p) => pathToFileURL(join(ROOT, 'public', p)).href;
  const stat = ([v, l]) => `<div class="stat"><b>${esc(v)}</b><span>${esc(l)}</span></div>`;
  const rtl = ['ar', 'fa', 'ur'].includes(lang);
  return `<!doctype html><html lang="${lang}"${rtl ? ' dir="rtl"' : ''}><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0}
  html,body{width:1200px;height:630px;overflow:hidden}
  body{background:radial-gradient(120% 90% at 30% 20%,#1B3160 0%,#102040 45%,#0A142C 100%);color:#F5ECD8;
    font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Hiragino Sans","PingFang SC","Helvetica Neue",sans-serif;position:relative}
  .stars{position:absolute;inset:0;background-image:radial-gradient(1.4px 1.4px at 12% 18%,#FFEAA7aa,transparent),radial-gradient(1px 1px at 33% 72%,#FFEAA766,transparent),
    radial-gradient(1.2px 1.2px at 58% 12%,#FFEAA788,transparent),radial-gradient(1px 1px at 47% 44%,#FFEAA755,transparent),radial-gradient(1.6px 1.6px at 88% 8%,#FFEAA799,transparent),
    radial-gradient(1px 1px at 92% 64%,#FFEAA766,transparent),radial-gradient(1.2px 1.2px at 6% 88%,#FFEAA777,transparent),radial-gradient(1px 1px at 66% 90%,#FFEAA755,transparent)}
  .left{position:absolute;left:72px;top:116px;width:640px}
  .brand{display:flex;align-items:center;gap:16px;font-size:34px;font-weight:800;letter-spacing:-.5px}
  .brand img{width:56px;height:56px;border-radius:14px}
  h1{margin-top:34px;font-size:52px;line-height:1.16;font-weight:800;letter-spacing:-1px}
  h1 em{font-style:normal;color:#FFEAA7;display:block}
  .bar{margin-top:30px;width:88px;height:6px;border-radius:3px;background:#F97159}
  .sub{margin-top:26px;font-size:21px;font-weight:600;color:#B8BFD3}
  .stats{margin-top:28px;display:flex;gap:12px}
  .stat{border:1px solid #2E4374;background:#13234699;border-radius:16px;padding:14px 18px;min-width:140px;max-width:200px}
  .stat b{display:block;font-size:26px;color:#FFEAA7;font-weight:800;font-family:ui-monospace,Menlo,monospace}
  .stat span{display:block;margin-top:4px;font-size:13px;line-height:1.3;color:#C9CFDD}
  .phone{position:absolute;right:58px;top:52px;width:300px;height:620px;border-radius:44px;background:#0B1530;border:2px solid #2B3D68;
    box-shadow:0 30px 80px -20px #000c;transform:rotate(-5deg);overflow:hidden;padding:10px}
  .phone img{width:100%;height:100%;object-fit:cover;border-radius:34px}
  [dir=rtl] .left{left:auto;right:72px}
  [dir=rtl] .phone{right:auto;left:58px;transform:rotate(5deg)}
  [dir=rtl] .stat b{direction:ltr;text-align:right}
  </style></head><body><div class="stars"></div>
  <div class="left">
    <div class="brand"><img src="${file('lettie-icon.png')}">Lettie</div>
    <h1>${esc(c.h1a)}<em>${esc(c.h1b)}</em></h1>
    <div class="bar"></div>
    <div class="sub">${esc(c.tag)} · ${esc(c.free)}</div>
    <div class="stats">${c.stats.map(stat).join('')}</div>
  </div>
  <div class="phone"><img src="${file(`v2/key-${lang}-s1.jpg`)}"></div>
  </body></html>`;
}

async function cdp() {
  const v = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json();
  const ws = new WebSocket(v.webSocketDebuggerUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let id = 0; const pend = new Map();
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { const [res, rej] = pend.get(d.id); pend.delete(d.id); d.error ? rej(new Error(d.error.message)) : res(d.result); } };
  const send = (method, params = {}, sessionId) => new Promise((res, rej) => { const i = ++id; pend.set(i, [res, rej]); ws.send(JSON.stringify({ id: i, method, params, ...(sessionId ? { sessionId } : {}) })); });
  return { ws, send };
}

const langs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(join(ROOT, 'src/i18n/home')).filter((f) => f.endsWith('.ts')).map((f) => f.slice(0, -3));

const { ws, send } = await cdp();
const { browserContextId } = await send('Target.createBrowserContext', { disposeOnDetach: true });
const { targetId } = await send('Target.createTarget', { url: 'about:blank', browserContextId });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false }, sessionId);
const tmp = join(ROOT, 'scripts/og/.card.html');
try {
  for (const lang of langs) {
    const c = copyFor(lang);
    writeFileSync(tmp, html(lang, c));
    await send('Page.navigate', { url: pathToFileURL(tmp).href }, sessionId);
    await sleep(900);
    await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true }, sessionId);
    const { data } = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } }, sessionId);
    writeFileSync(join(ROOT, `public/og/${lang}.png`), Buffer.from(data, 'base64'));
    console.log(`public/og/${lang}.png  ${c.h1a} ${c.h1b}`);
  }
} finally {
  await send('Target.disposeBrowserContext', { browserContextId }).catch(() => {});
  ws.close();
}
process.exit(0);

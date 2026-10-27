import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { STRINGS, countryCenter, countryName, fetchSharedLetter, fill, stampSrc, uiLangOf } from '@/lib/letterShare';

/**
 * 공유 미리보기 그림 (2026-10-27, 대표: 「미리보기도 예쁘게」). 카카오톡·메신저에 링크를 붙이면 이 그림이 뜬다.
 * 앱 공유 카드와 같은 밤하늘 + 도트 지구(보낸 나라 표식) + 픽셀 봉투·우표·캐릭터. 글자는 공유한 사람의 앱 언어.
 * 본문은 넣지 않는다 — 열어 보고 싶게, 그리고 미리보기에 남의 글이 통째로 돌지 않게.
 */
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lettie';

const ROOT = process.cwd();
const C = { sky0: '#0A142C', sky1: '#102040', ink: '#F1EADB', ink2: '#B8BFD3', sand: '#CFA86C', star: '#FFEAA7', paper: '#F5ECD8', deep: '#E7D9B9', edge: '#B99E6E', seal: '#D9473A', leaf: '#5FBE63' };

/** 미리보기 글꼴에 있는 글자만(라틴·한글). 아니면 이름 없이 그린다 — 두부(□)가 찍히는 것보다 낫다. */
const drawable = (t: string) => /^[ -ɏ -⁯가-힣ㄱ-ㅣ]*$/.test(t);

async function dataUri(src: string): Promise<string | null> {
  try {
    if (src.startsWith('/')) {
      const buf = await readFile(join(ROOT, 'public', src));
      return `data:image/png;base64,${buf.toString('base64')}`;
    }
    const r = await fetch(src);
    if (!r.ok) return null;
    return `data:image/png;base64,${Buffer.from(await r.arrayBuffer()).toString('base64')}`;
  } catch {
    return null;
  }
}

/** 별 + 도트 지구를 SVG 한 장으로 (satori 는 수천 개 div 보다 SVG 그림 하나가 빠르다). */
async function skySvg(center: [number, number]): Promise<string> {
  const dots: number[][] = JSON.parse(await readFile(join(ROOT, 'public', 'letter', 'land-dots.json'), 'utf8'));
  const R = 330,
    cx = 990,
    cy = 390;
  const rad = (d: number) => (d * Math.PI) / 180;
  const p0 = rad(Math.max(-28, Math.min(32, center[0] * 0.75))),
    l0 = rad(center[1] - 8);
  const sp0 = Math.sin(p0),
    cp0 = Math.cos(p0);
  let out = '';
  // 별 (고정 씨앗)
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 120; i++) {
    const s = rnd() < 0.15 ? 4 : 2;
    out += `<rect x="${Math.floor(rnd() * 1200)}" y="${Math.floor(rnd() * 630)}" width="${s}" height="${s}" fill="${C.star}" fill-opacity="${(0.25 + rnd() * 0.5).toFixed(2)}"/>`;
  }
  out += `<defs><radialGradient id="g" cx="0.35" cy="0.3" r="0.75"><stop offset="0" stop-color="#26487F"/><stop offset="0.65" stop-color="#16305E"/><stop offset="1" stop-color="#0B1733"/></radialGradient></defs>`;
  out += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="url(#g)" stroke="#2E4C86" stroke-width="3"/>`;
  const d = 6;
  for (const [lat, lon] of dots) {
    const p = rad(lat),
      dl = rad(lon) - l0;
    const z = sp0 * Math.sin(p) + cp0 * Math.cos(p) * Math.cos(dl);
    if (z <= 0.04) continue;
    const x = cx + Math.cos(p) * Math.sin(dl) * R;
    const y = cy - (cp0 * Math.sin(p) - sp0 * Math.cos(p) * Math.cos(dl)) * R;
    const k = Math.min(1, z * 1.6);
    out += `<rect x="${Math.round(x - d / 2)}" y="${Math.round(y - d / 2)}" width="${d}" height="${d}" fill="${k > 0.75 ? C.leaf : k > 0.45 ? '#4FA557' : '#3B7F4A'}"/>`;
  }
  const mp = rad(center[0]),
    ml = rad(center[1]) - l0;
  const mx = cx + Math.cos(mp) * Math.sin(ml) * R;
  const my = cy - (cp0 * Math.sin(mp) - sp0 * Math.cos(mp) * Math.cos(ml)) * R;
  const u = 6;
  out += `<rect x="${mx - 4 * u}" y="${my - 4 * u}" width="${8 * u}" height="${8 * u}" fill="none" stroke="${C.star}" stroke-opacity="0.6" stroke-width="4"/>`;
  out += `<rect x="${mx - u / 2}" y="${my - u * 2.5}" width="${u}" height="${u * 5}" fill="${C.star}"/><rect x="${mx - u * 2.5}" y="${my - u / 2}" width="${u * 5}" height="${u}" fill="${C.star}"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" shape-rendering="crispEdges">${out}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/** 앱 EnvelopePainter 20×14 격자를 SVG 로. */
function envelopeSvg(): string {
  const r = (x: number, y: number, f: string, w = 1, h = 1) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}"/>`;
  let o = `<rect x="1" y="1" width="19" height="13" fill="#000" fill-opacity="0.35"/>` + r(0, 0, C.paper, 19, 13) + r(0, 0, C.edge, 19, 1) + r(0, 12, C.edge, 19, 1) + r(0, 0, C.edge, 1, 13) + r(18, 0, C.edge, 1, 13);
  for (let i = 0; i < 7; i++) o += `<rect x="${2 + i}" y="${1 + i}" width="${15 - 2 * i}" height="1" fill="${C.deep}" fill-opacity="0.45"/>`;
  for (let i = 0; i < 8; i++) o += r(1 + i, 1 + i, C.deep) + r(17 - i, 1 + i, C.deep);
  o += r(8, 6, C.seal) + r(10, 6, C.seal) + r(8, 7, C.seal, 3, 1) + r(9, 8, C.seal) + r(8, 6, '#FF8A7E');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 20 14" shape-rendering="crispEdges">${o}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

export default async function OgImage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const letter = await fetchSharedLetter(token);
  const lang = uiLangOf(letter?.lang ?? null);
  const s = STRINGS[lang];
  const name = letter?.author.nickname ?? '';
  const place = letter ? countryName(letter.author.countryCode, lang) ?? '' : '';
  const title = name && drawable(name) ? (place && drawable(place) ? fill(s.title, { name, place }) : fill(s.titleNoPlace, { name })) : lang === 'ko' ? '편지가 도착했어요' : 'A letter for you';
  const charKey = letter?.author.characterKey ?? 'lettie_f1';
  const charSrc = letter?.author.characterImageUrl ?? (charKey.startsWith('gen_') ? `https://dearglobe.s3.ap-northeast-2.amazonaws.com/characters/${charKey}.png` : `/letter/char/${/^lettie_[fm][1-8]$/.test(charKey) ? charKey : 'lettie_f1'}.png`);

  const [bold, medium, pixel, sky, character, stamp] = await Promise.all([
    readFile(join(ROOT, 'src/assets/og-fonts/Pretendard-Bold-og.otf')),
    readFile(join(ROOT, 'src/assets/og-fonts/Pretendard-Medium-og.otf')),
    readFile(join(ROOT, 'src/assets/og-fonts/Galmuri11-og.ttf')),
    skySvg(countryCenter(letter?.author.countryCode ?? null)),
    dataUri(charSrc),
    dataUri(stampSrc(letter?.stamp ?? 'season')),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: 'flex', position: 'relative', background: `linear-gradient(180deg, ${C.sky1} 0%, ${C.sky0} 100%)` }}>
        <img src={sky} width={1200} height={630} style={{ position: 'absolute', left: 0, top: 0 }} />
        <div style={{ position: "absolute", left: 72, top: 64, display: "flex", flexDirection: "column", width: 560 }}>
          <div style={{ fontFamily: 'Galmuri', fontSize: 26, letterSpacing: 4, color: C.sand }}>LETTIE · AIR MAIL</div>
          <div style={{ marginTop: 18, fontFamily: 'Pretendard', fontWeight: 700, fontSize: 60, lineHeight: 1.22, color: C.ink, letterSpacing: -1.5 }}>{title}</div>
          <div style={{ marginTop: 16, fontFamily: 'Pretendard', fontWeight: 500, fontSize: 30, color: C.ink2 }}>{s.ogLine}</div>
        </div>
        {character && <img src={character} width={230} height={230} style={{ position: 'absolute', left: 52, top: 372 }} />}
        <div style={{ position: 'absolute', left: 280, top: 352, display: 'flex', transform: 'rotate(-6deg)' }}>
          <img src={envelopeSvg()} width={400} height={280} />
          {stamp && <img src={stamp} width={88} height={110} style={{ position: 'absolute', right: 26, top: 22, transform: 'rotate(8deg)' }} />}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Pretendard', data: bold, weight: 700, style: 'normal' },
        { name: 'Pretendard', data: medium, weight: 500, style: 'normal' },
        { name: 'Galmuri', data: pixel, weight: 400, style: 'normal' },
      ],
    },
  );
}

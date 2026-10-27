'use client';

/**
 * 웹 편지 무대 (2026-10-27, 대표: 「들어가면 뿅 퐁 하면서 열리고 나오고」「번역 기능도」「레티 도트 느낌 애니메이션」).
 *
 * 1. 도착: 별이 깜빡이는 밤하늘, 보낸 사람 나라를 앞에 둔 도트 지구에서 봉투가 날아와 앞에 내려앉는다.
 * 2. 열기: 봉투를 누르면 뿅·뿅·뿅(앱 우표 뽑기와 같은 박자) → 퐁! 인장이 튀어 오르고 덮개가 젖혀지며 편지지가 솟는다.
 * 3. 읽기: 크림색 편지지가 펼쳐지고 우표가 쾅 찍힌다. 번역은 앱처럼 픽셀 반짝임이 지나간 뒤 글이 바뀐다.
 * 효과음은 앱 assets/v2/sfx 그대로. 브라우저는 누르기 전에는 소리를 못 내므로 봉투를 누르는 순간 소리를 깨운다.
 */
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './letter.module.css';
import {
  APP_LANGS,
  APP_STORE_URL,
  PLAY_URL,
  RTL_LANGS,
  type SharedLetter,
  type Strings,
  type Translated,
  characterSrc,
  fill,
  stampSrc,
} from '@/lib/letterShare';

type Platform = 'ios' | 'android' | 'other';
type Props = {
  letter: SharedLetter | null;
  token: string;
  viewerLang: string;
  ui: string;
  strings: Strings;
  place: string | null;
  center: [number, number];
  platform: Platform;
};

const C = {
  sky0: '#0A142C',
  sky1: '#102040',
  line: '#2C4478',
  paper: '#F5ECD8',
  paperLight: '#FFFDF6',
  deep: '#E7D9B9',
  edge: '#B99E6E',
  ink3: '#76695A',
  seal: '#D9473A',
  sealLight: '#FF8A7E',
  leaf: '#5FBE63',
  sea: '#3E7ED6',
  sand: '#CFA86C',
  star: '#FFEAA7',
};

const reduceMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ── 소리 ────────────────────────────────────────────────────────────
const SFX = ['draw_blip_1', 'draw_blip_2', 'draw_blip_3', 'draw_pop', 'draw_fanfare', 'stamp_thud', 'stamp_whoosh', 'translate_twinkle'] as const;
type Sfx = (typeof SFX)[number];

/** 웹 오디오로 미리 받아 둔다 — iOS 사파리는 누른 순간 깨운 컨텍스트로만 나중 소리를 낸다. */
function useSound() {
  const [on, setOn] = useState(true);
  const onRef = useRef(true);
  const ctx = useRef<AudioContext | null>(null);
  const raw = useRef<Partial<Record<Sfx, Promise<ArrayBuffer>>>>({});
  const buffers = useRef<Partial<Record<Sfx, AudioBuffer>>>({});

  useEffect(() => {
    try {
      if (localStorage.getItem('lettie_sound') === 'off') {
        setOn(false);
        onRef.current = false;
      }
    } catch {}
    for (const s of SFX) raw.current[s] = fetch(`/letter/sfx/${s}.mp3`).then((r) => r.arrayBuffer()).catch(() => new ArrayBuffer(0));
  }, []);

  /** 누르는 순간 불러야 한다. */
  const unlock = useCallback(async () => {
    if (ctx.current) return;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const c = new AC();
    ctx.current = c;
    c.resume().catch(() => {});
    await Promise.all(
      SFX.map(async (s) => {
        try {
          const data = await raw.current[s];
          if (data && data.byteLength) buffers.current[s] = await c.decodeAudioData(data.slice(0));
        } catch {}
      }),
    );
  }, []);

  const play = useCallback((s: Sfx, volume = 0.55) => {
    const c = ctx.current;
    const b = buffers.current[s];
    if (!onRef.current || !c || !b) return;
    const src = c.createBufferSource();
    const g = c.createGain();
    g.gain.value = volume;
    src.buffer = b;
    src.connect(g).connect(c.destination);
    src.start();
  }, []);

  const toggle = useCallback(() => {
    const next = !onRef.current;
    onRef.current = next;
    setOn(next);
    try {
      localStorage.setItem('lettie_sound', next ? 'on' : 'off');
    } catch {}
    if (next) void unlock();
  }, [unlock]);

  return { on, toggle, unlock, play };
}

// ── 별 ──────────────────────────────────────────────────────────────
function StarSky() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const g = cv.getContext('2d')!;
    const still = reduceMotion();
    let w = 0,
      h = 0,
      dpr = 1,
      raf = 0;
    type Star = { x: number; y: number; s: number; p: number; v: number };
    let stars: Star[] = [];
    let shoot: { x: number; y: number; t: number } | null = null;
    let nextShoot = performance.now() + 2500;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      const n = Math.round((w * h) / 5200);
      // 앱 공유 카드와 같은 고정 씨앗 느낌: 매번 다른 하늘이어도 밀도는 같다
      stars = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, s: Math.random() < 0.15 ? 2 : 1, p: Math.random() * Math.PI * 2, v: 0.6 + Math.random() * 1.6 }));
    };
    const frame = (now: number) => {
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);
      for (const st of stars) {
        const a = still ? 0.55 : 0.25 + 0.5 * (0.5 + 0.5 * Math.sin(st.p + (now / 1000) * st.v));
        g.fillStyle = `rgba(255,234,167,${a.toFixed(3)})`;
        g.fillRect(Math.floor(st.x), Math.floor(st.y), st.s, st.s);
      }
      // 별똥별: 픽셀 꼬리를 끌며 대각선으로
      if (!still) {
        if (!shoot && now > nextShoot) shoot = { x: Math.random() * w * 0.7 + w * 0.2, y: Math.random() * h * 0.35, t: now };
        if (shoot) {
          const k = (now - shoot.t) / 900;
          if (k >= 1) {
            shoot = null;
            nextShoot = now + 5000 + Math.random() * 6000;
          } else {
            for (let i = 0; i < 9; i++) {
              const d = k * 160 - i * 6;
              if (d < 0) continue;
              g.fillStyle = `rgba(255,234,167,${((1 - i / 9) * (1 - k)).toFixed(3)})`;
              g.fillRect(Math.floor(shoot.x - d), Math.floor(shoot.y + d * 0.5), 2, 2);
            }
          }
        }
        raf = requestAnimationFrame(frame);
      }
    };
    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas ref={ref} className={styles.stars} aria-hidden />;
}

// ── 도트 지구 ─────────────────────────────────────────────────────────
let dotsPromise: Promise<number[][]> | null = null;
const loadDots = () => (dotsPromise ??= fetch('/letter/land-dots.json').then((r) => r.json()));

const rad = (d: number) => (d * Math.PI) / 180;

/** 앱 lib/v2/globe 와 같은 정사영. 보낸 사람 나라를 앞에 두고 좌우로 천천히 흔들린다. 표식 위치(캔버스 비율)를 돌려준다. */
function drawGlobe(g: CanvasRenderingContext2D, size: number, dots: number[][], lat0: number, lon0: number, mark: [number, number], now: number) {
  const R = size * 0.46;
  const cx = size / 2,
    cy = size / 2;
  g.clearRect(0, 0, size, size);
  // 바다: 왼쪽 위가 밝은 남색 구
  const grad = g.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
  grad.addColorStop(0, '#26487F');
  grad.addColorStop(0.65, '#16305E');
  grad.addColorStop(1, '#0B1733');
  g.fillStyle = grad;
  g.beginPath();
  g.arc(cx, cy, R, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#2E4C86';
  g.lineWidth = Math.max(1, size / 260);
  g.stroke();

  const p0 = rad(lat0),
    l0 = rad(lon0);
  const sp0 = Math.sin(p0),
    cp0 = Math.cos(p0);
  const d = Math.max(2, Math.round(size / 118));
  for (const [lat, lon] of dots) {
    const p = rad(lat),
      dl = rad(lon) - l0;
    const cp = Math.cos(p),
      sp = Math.sin(p);
    const z = sp0 * sp + cp0 * cp * Math.cos(dl);
    if (z <= 0.04) continue;
    const x = cp * Math.sin(dl);
    const y = cp0 * sp - sp0 * cp * Math.cos(dl);
    // 가장자리로 갈수록 바다색에 묻힌다
    const k = Math.min(1, z * 1.6);
    g.fillStyle = k > 0.75 ? C.leaf : k > 0.45 ? '#4FA557' : '#3B7F4A';
    g.fillRect(Math.round(cx + x * R - d / 2), Math.round(cy - y * R - d / 2), d, d);
  }

  // 보낸 곳 표식: 깜빡이는 픽셀 별
  const mp = rad(mark[0]),
    ml = rad(mark[1]) - l0;
  const mz = sp0 * Math.sin(mp) + cp0 * Math.cos(mp) * Math.cos(ml);
  const mx = cx + Math.cos(mp) * Math.sin(ml) * R;
  const my = cy - (cp0 * Math.sin(mp) - sp0 * Math.cos(mp) * Math.cos(ml)) * R;
  if (mz > 0) {
    const u = Math.max(2, Math.round(size / 120));
    const pulse = (now / 600) % 1;
    g.strokeStyle = `rgba(255,234,167,${(1 - pulse) * 0.8})`;
    g.lineWidth = u * 0.8;
    const rr = u * (2 + pulse * 5);
    g.strokeRect(Math.round(mx - rr), Math.round(my - rr), Math.round(rr * 2), Math.round(rr * 2));
    g.fillStyle = C.star;
    g.fillRect(Math.round(mx - u / 2), Math.round(my - u * 2.5), u, u * 5);
    g.fillRect(Math.round(mx - u * 2.5), Math.round(my - u / 2), u * 5, u);
    g.fillStyle = '#FFFFFF';
    g.fillRect(Math.round(mx - u / 2), Math.round(my - u / 2), u, u);
  }
  return { x: mx / size, y: my / size };
}

function Globe({ center, onMarker, className }: { center: [number, number]; onMarker?: (p: { x: number; y: number }) => void; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const markerCb = useRef(onMarker);
  markerCb.current = onMarker;
  useEffect(() => {
    const cv = ref.current!;
    const g = cv.getContext('2d')!;
    let raf = 0;
    let alive = true;
    const still = reduceMotion();
    // 위아래로는 너무 기울이지 않는다 (남극·북극 나라도 지구가 보이게)
    const lat0 = Math.max(-28, Math.min(32, center[0] * 0.75));
    loadDots().then((dots) => {
      if (!alive) return;
      const start = performance.now();
      let reported = false;
      const frame = (now: number) => {
        const size = cv.clientWidth;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        if (cv.width !== Math.round(size * dpr)) {
          cv.width = Math.round(size * dpr);
          cv.height = Math.round(size * dpr);
        }
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        const sway = still ? 0 : Math.sin((now - start) / 4200) * 9 + 6;
        const m = drawGlobe(g, size, dots, lat0, center[1] - sway, center, now);
        if (!reported) {
          reported = true;
          markerCb.current?.(m);
        }
        if (!still) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    });
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, [center]);
  return <canvas ref={ref} className={className ?? styles.globe} aria-hidden />;
}

// ── 픽셀 봉투 ─────────────────────────────────────────────────────────
/** 앱 EnvelopePainter 와 같은 20×14 격자. 위로 8칸은 젖혀진 덮개와 솟는 편지지 자리. */
function EnvelopeArt({ opened = false, sealGone = false }: { opened?: boolean; sealGone?: boolean }) {
  const px = (x: number, y: number, fill: string, w = 1, h = 1, key?: string) => <rect key={key ?? `${x},${y},${w},${h},${fill}`} x={x} y={y} width={w + 0.02} height={h + 0.02} fill={fill} />;
  return (
    <svg viewBox="0 -8 20 22" className={`${styles.envelopeSvg} ${opened ? styles.opened : ''}`} aria-hidden>
      {/* 젖혀진 덮개 (뒤) */}
      <g className={styles.flapOpen}>
        {Array.from({ length: 7 }, (_, i) => px(1 + i, -1 - i, C.deep, 17 - 2 * i, 1))}
        {Array.from({ length: 7 }, (_, i) => px(1 + i, -1 - i, C.edge))}
        {Array.from({ length: 7 }, (_, i) => px(17 - i, -1 - i, C.edge))}
      </g>
      {/* 편지지 (몸통 뒤에 숨어 있다가 솟는다) */}
      <g className={styles.paperPeek}>
        {px(3, 1, C.paperLight, 13, 11)}
        {px(3, 1, C.deep, 13, 1)}
        {px(5, 3, C.ink3, 9, 1)}
        {px(5, 5, C.ink3, 7, 1)}
        {px(5, 7, C.ink3, 8, 1)}
        {px(12, 0, C.seal, 2, 1)}
      </g>
      {/* 그림자 + 몸통 + 테두리 */}
      <rect x={1} y={1} width={19} height={13} fill="rgba(0,0,0,0.33)" />
      {px(0, 0, C.paper, 19, 13)}
      {px(0, 0, C.edge, 19, 1)}
      {px(0, 12, C.edge, 19, 1)}
      {px(0, 0, C.edge, 1, 13)}
      {px(18, 0, C.edge, 1, 13)}
      {/* 닫힌 덮개 V */}
      <g className={styles.flapClosed}>
        {Array.from({ length: 7 }, (_, i) => px(2 + i, 1 + i, `rgba(231,217,185,0.45)`, 15 - 2 * i, 1))}
        {Array.from({ length: 8 }, (_, i) => px(1 + i, 1 + i, C.deep))}
        {Array.from({ length: 8 }, (_, i) => px(17 - i, 1 + i, C.deep))}
      </g>
      {/* 하트 인장 */}
      {!sealGone || opened ? (
        <g className={sealGone ? styles.sealPop : undefined}>
          {px(8, 6, C.seal)}
          {px(10, 6, C.seal)}
          {px(8, 7, C.seal, 3, 1)}
          {px(9, 8, C.seal)}
          {px(8, 6, C.sealLight)}
        </g>
      ) : null}
    </svg>
  );
}

function TinyEnvelope() {
  return (
    <svg viewBox="0 0 10 8" aria-hidden>
      <rect x={1} y={1} width={9} height={7} fill="rgba(0,0,0,0.35)" />
      <rect x={0} y={0} width={9} height={7} fill={C.paper} />
      <rect x={0} y={0} width={9} height={1} fill={C.edge} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={1 + i} y={1 + i} width={1} height={1} fill={C.edge} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={`r${i}`} x={7 - i} y={1 + i} width={1} height={1} fill={C.edge} />
      ))}
      <rect x={4} y={4} width={1} height={1} fill={C.seal} />
    </svg>
  );
}

/** 10×10 도트 지구 (소개 줄 아이콘). */
function TinyGlobe() {
  const rows = ['...####...', '.##LL###..', '#LLL##LL##', '#LL###LLL#', '##L####LL#', '###LL###L#', '#####LL###', '.####L###.', '..######..', '...####...'];
  return (
    <svg viewBox="0 0 10 10" aria-hidden>
      {rows.flatMap((r, y) => [...r].map((ch, x) => (ch === '.' ? null : <rect key={`${x},${y}`} x={x} y={y} width={1.02} height={1.02} fill={ch === 'L' ? C.leaf : C.sea} />)))}
    </svg>
  );
}

// ── 픽셀 조각 ─────────────────────────────────────────────────────────
const BURST = [C.seal, C.sand, C.star, C.leaf, C.paper, C.sea];

function burst(host: HTMLElement, x: number, y: number, n: number, power: number) {
  if (reduceMotion()) return;
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div');
    el.className = styles.particle;
    const s = Math.random() < 0.3 ? 8 : Math.random() < 0.5 ? 6 : 4;
    el.style.width = el.style.height = `${s}px`;
    el.style.background = BURST[i % BURST.length];
    el.style.left = `${x - s / 2}px`;
    el.style.top = `${y - s / 2}px`;
    host.appendChild(el);
    const a = (Math.PI * 2 * i) / n + Math.random() * 0.5;
    const r = power * (0.55 + Math.random() * 0.6);
    const dx = Math.cos(a) * r,
      dy = Math.sin(a) * r - power * 0.35;
    // 픽셀답게 계단식으로 움직인다
    el.animate(
      [
        { transform: 'translate(0,0)', opacity: 1 },
        { transform: `translate(${dx * 0.6}px, ${dy * 0.6}px)`, opacity: 1, offset: 0.45 },
        { transform: `translate(${dx}px, ${dy + power * 0.5}px)`, opacity: 0 },
      ],
      { duration: 620 + Math.random() * 280, easing: 'steps(9, end)', fill: 'forwards' },
    ).onfinish = () => el.remove();
  }
}

// ── 번역 반짝임 (앱 TranslateFx 와 같은 결) ────────────────────────────────
function runShimmer(cv: HTMLCanvasElement, until: () => boolean): Promise<void> {
  return new Promise((resolve) => {
    const g = cv.getContext('2d')!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = cv.clientWidth,
      h = cv.clientHeight;
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cell = 8;
    const cols = Math.ceil(w / cell),
      rows = Math.ceil(h / cell);
    const seed = Array.from({ length: cols * rows }, () => Math.random());
    const colors = [C.sea, C.sand, C.star, C.leaf];
    const t0 = performance.now();
    let doneAt = 0;
    const frame = (now: number) => {
      const t = (now - t0) / 1000;
      g.clearRect(0, 0, w, h);
      // 왼쪽에서 오른쪽으로 물결 — 번역이 오면 마지막 한 번을 지나가고 끝난다
      const sweep = (t * 1.25) % 1.6;
      if (!doneAt && until() && sweep > 1.2) doneAt = now;
      const fade = doneAt ? Math.max(0, 1 - (now - doneAt) / 280) : 1;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const phase = c / cols + seed[i] * 0.25 - 0.1;
          const k = 1 - Math.abs(sweep - 0.2 - phase) * 4;
          if (k <= 0) continue;
          g.globalAlpha = Math.min(0.85, k) * fade;
          g.fillStyle = colors[i % colors.length];
          g.fillRect(c * cell + 1, r * cell + 1, cell - 2, cell - 2);
        }
      g.globalAlpha = 1;
      if (doneAt && fade <= 0) {
        g.clearRect(0, 0, w, h);
        resolve();
        return;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  });
}

// ── 아이콘 ─────────────────────────────────────────────────────────────
function SoundIcon({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 10 10" aria-hidden>
      <rect x={1} y={4} width={2} height={3} fill="currentColor" />
      <rect x={3} y={3} width={1} height={5} fill="currentColor" />
      <rect x={4} y={2} width={1} height={7} fill="currentColor" />
      {on ? (
        <>
          <rect x={6} y={4} width={1} height={3} fill="currentColor" />
          <rect x={8} y={3} width={1} height={5} fill="currentColor" />
        </>
      ) : (
        <>
          <rect x={6} y={4} width={1} height={1} fill="currentColor" />
          <rect x={8} y={4} width={1} height={1} fill="currentColor" />
          <rect x={7} y={5} width={1} height={1} fill="currentColor" />
          <rect x={6} y={6} width={1} height={1} fill="currentColor" />
          <rect x={8} y={6} width={1} height={1} fill="currentColor" />
        </>
      )}
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
    </svg>
  );
}

function Postmark({ city, date }: { city: string; date: string }) {
  return (
    <svg viewBox="0 0 64 64" className={styles.postmark} aria-hidden>
      <circle cx={32} cy={32} r={29} fill="none" stroke="currentColor" strokeWidth={2} />
      <circle cx={32} cy={32} r={21} fill="none" stroke="currentColor" strokeWidth={1.4} />
      <path id="pm-arc" d="M 9 32 A 23 23 0 0 1 55 32" fill="none" />
      <text fontFamily="Galmuri11, monospace" fontSize={7} fill="currentColor" letterSpacing={0.5}>
        <textPath href="#pm-arc" startOffset="50%" textAnchor="middle">
          {city.toUpperCase().slice(0, 14)}
        </textPath>
      </text>
      <text x={32} y={36} fontFamily="Galmuri11, monospace" fontSize={8} fill="currentColor" textAnchor="middle">
        {date}
      </text>
      <text x={32} y={48} fontFamily="Galmuri11, monospace" fontSize={6} fill="currentColor" textAnchor="middle">
        AIR MAIL
      </text>
    </svg>
  );
}

// ── 화면 ───────────────────────────────────────────────────────────────
type Phase = 'arrive' | 'idle' | 'opening' | 'leaving' | 'read';

export default function LetterExperience({ letter, token, viewerLang, ui, strings: s, place, center, platform }: Props) {
  const sound = useSound();
  const [phase, setPhase] = useState<Phase>('arrive');
  const [squash, setSquash] = useState(0);
  const [sealGone, setSealGone] = useState(false);
  const [opened, setOpened] = useState(false);
  const flyer = useRef<HTMLDivElement>(null);
  const slot = useRef<HTMLDivElement>(null);
  const globeBox = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);

  const name = letter?.author.nickname || 'Lettie';
  const title = place ? fill(s.title, { name, place }) : fill(s.titleNoPlace, { name });

  // 도착: 지구 위 표식에서 봉투가 작게 떠올라 곡선을 그리며 앞으로 날아온다
  const fly = useCallback((m: { x: number; y: number }) => {
    const el = flyer.current,
      box = globeBox.current,
      host = slot.current;
    if (!el || !box || !host) return;
    if (reduceMotion()) {
      setPhase('idle');
      return;
    }
    const gb = box.getBoundingClientRect(),
      eb = el.getBoundingClientRect(),
      hb = host.getBoundingClientRect();
    const sx = gb.left + gb.width * m.x - (eb.left + eb.width / 2);
    const sy = gb.top + gb.height * m.y - (eb.top + eb.height * 0.62);
    const cx = sx * 0.35,
      cy = Math.min(sy, 0) - 90;
    const N = 14;
    const frames: Keyframe[] = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const e = 1 - Math.pow(1 - t, 2.2);
      const x = (1 - e) * (1 - e) * sx + 2 * (1 - e) * e * cx;
      const y = (1 - e) * (1 - e) * sy + 2 * (1 - e) * e * cy;
      const sc = 0.12 + 0.88 * Math.pow(e, 1.4);
      frames.push({ transform: `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${sc.toFixed(3)}) rotate(${(-28 * (1 - e) - 3).toFixed(1)}deg)`, opacity: t < 0.08 ? t / 0.08 : 1 });
      // 지나간 자리에 별가루
      if (i > 0 && i < N) {
        const dot = document.createElement('div');
        dot.className = styles.trail;
        dot.style.left = `${eb.left - hb.left + eb.width / 2 + x}px`;
        dot.style.top = `${eb.top - hb.top + eb.height * 0.62 + y}px`;
        dot.style.opacity = '0';
        host.appendChild(dot);
        dot.animate([{ opacity: 0 }, { opacity: 0.9, offset: 0.1 }, { opacity: 0, transform: 'translateY(6px)' }], { duration: 700, delay: 1100 * t, easing: 'steps(5, end)', fill: 'forwards' }).onfinish = () => dot.remove();
      }
    }
    const a = el.animate(frames, { duration: 1200, easing: 'linear', fill: 'both' });
    a.onfinish = () => {
      // 먼저 자리를 잡고(불투명) 다음 프레임에 애니메이션을 걷는다 — 반대로 하면 한 프레임 사라진다
      setPhase('idle');
      requestAnimationFrame(() => a.cancel());
      burst(host, eb.left - hb.left + eb.width / 2, eb.top - hb.top + eb.height * 0.75, 10, 46);
    };
  }, []);

  const open = useCallback(async () => {
    if (phase !== 'idle' && phase !== 'arrive') return;
    setPhase('opening');
    await sound.unlock();
    const host = slot.current!;
    const r = host.getBoundingClientRect();
    const cx = r.width / 2,
      cy = r.height * 0.7;
    if (reduceMotion()) {
      setOpened(true);
      setPhase('read');
      return;
    }
    // 뿅 · 뿅 · 뿅
    for (let i = 0; i < 3; i++) {
      setSquash((n) => n + 1);
      sound.play((['draw_blip_1', 'draw_blip_2', 'draw_blip_3'] as const)[i], 0.5);
      burst(host, cx + (i - 1) * 40, cy, 5, 26);
      await sleep(300);
    }
    // 퐁!
    setSealGone(true);
    sound.play('draw_pop', 0.7);
    burst(host, cx, cy - 10, 28, 110);
    await sleep(110);
    setOpened(true);
    sound.play('stamp_whoosh', 0.45);
    await sleep(820);
    setPhase('leaving');
    await sleep(420);
    setPhase('read');
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    await sleep(560);
    sound.play('stamp_thud', 0.6);
  }, [phase, sound]);

  if (!letter) return <Gone s={s} platform={platform} sound={sound} />;

  const showStage = phase !== 'read';
  return (
    <main className={styles.root} lang={ui.replace('_', '-')} dir={RTL_LANGS.includes(ui) ? 'rtl' : undefined}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" precedence="default" />
      <StarSky />
      <div className={styles.column} ref={top}>
        <TopBar s={s} sound={sound} />
        {showStage ? (
          <section className={`${styles.stage} ${phase === 'leaving' ? styles.stageLeaving : ''}`}>
            <div className={styles.globeWrap} ref={globeBox}>
              <Globe center={center} onMarker={fly} />
            </div>
            <div className={styles.envelopeSlot} ref={slot}>
              {/* 물러날 때는 투명해지지 않고 아래로 떨어진다 — 반투명 종이가 남색 위에서 회색 판처럼 보였다 */}
              <div ref={flyer} style={{ opacity: phase === 'arrive' ? 0 : 1, transition: phase === 'leaving' ? 'transform 380ms cubic-bezier(0.5, 0, 0.9, 0.4)' : undefined, transform: phase === 'leaving' ? 'translateY(110vh) rotate(8deg)' : undefined }}>
                <div className={phase === 'idle' ? styles.floating : undefined}>
                  <div key={squash} className={squash ? styles.squash : undefined}>
                    <button type="button" className={styles.envelopeBtn} onClick={open} disabled={phase !== 'idle' && phase !== 'arrive'} aria-label={s.openAria}>
                      <EnvelopeArt opened={opened} sealGone={sealGone} />
                      {!opened && <img className={styles.stampOnEnvelope} src={stampSrc(letter.stamp)} alt="" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.stageText}>
              <div className={styles.eyebrow}>{s.eyebrow}</div>
              <h1 className={styles.stageTitle}>{title}</h1>
              <div className={styles.from}>
                <img src={characterSrc(letter.author.characterKey, letter.author.characterImageUrl)} alt="" />
                {[letter.author.city, place].filter(Boolean).join(' · ')}
              </div>
              {(phase === 'idle' || phase === 'arrive') && (
                <div className={styles.hint} style={{ marginTop: 18, visibility: phase === 'idle' ? 'visible' : 'hidden' }}>
                  <span className={styles.hintArrow}>▲</span>
                  {s.tapHint}
                </div>
              )}
            </div>
          </section>
        ) : (
          <LetterView letter={letter} token={token} viewerLang={viewerLang} s={s} place={place} platform={platform} sound={sound} />
        )}
      </div>
    </main>
  );
}

type SoundApi = ReturnType<typeof useSound>;

function TopBar({ s, sound }: { s: Strings; sound: SoundApi }) {
  return (
    <div className={styles.topbar}>
      <Link className={styles.brand} href="/">
        <img src="/lettie-icon.png" alt="" />
        Lettie
      </Link>
      <button type="button" className={styles.soundBtn} onClick={sound.toggle} aria-label={sound.on ? s.soundOff : s.soundOn} aria-pressed={sound.on}>
        <SoundIcon on={sound.on} />
      </button>
    </div>
  );
}

function storeHref(platform: Platform, token: string) {
  if (platform === 'android')
    // 앱이 있으면 그 편지로 바로, 없으면 플레이 스토어로
    return `intent://lettie-dating.com/open/letter/${token}#Intent;scheme=https;package=com.dearglobe.dearglobe;S.browser_fallback_url=${encodeURIComponent(PLAY_URL)};end`;
  if (platform === 'ios') return APP_STORE_URL;
  return '#get';
}

function LetterView({ letter, token, viewerLang, s, place, platform, sound }: { letter: SharedLetter; token: string; viewerLang: string; s: Strings; place: string | null; platform: Platform; sound: SoundApi }) {
  const [shown, setShown] = useState<'original' | 'translated'>('original');
  const [target, setTarget] = useState(() => (letter.language && letter.language === viewerLang ? (viewerLang === 'en' ? 'ko' : 'en') : viewerLang));
  const [cache, setCache] = useState<Record<string, Translated>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const fx = useRef<HTMLCanvasElement>(null);

  const langName = useCallback(
    (code: string) => {
      try {
        return new Intl.DisplayNames([viewerLang.replace('_', '-')], { type: 'language' }).of(code.replace('_', '-')) ?? code;
      } catch {
        return code;
      }
    },
    [viewerLang],
  );
  const langOptions = useMemo(() => APP_LANGS.map((c) => ({ c, n: langName(c) })).sort((a, b) => a.n.localeCompare(b.n)), [langName]);

  const translate = useCallback(
    async (to: string) => {
      if (busy) return;
      setError(false);
      if (cache[to]) {
        setShown('translated');
        return;
      }
      setBusy(true);
      sound.play('translate_twinkle', 0.45);
      let got: Translated | null = null;
      const req = fetch(`/api/letter/${encodeURIComponent(token)}/translate?to=${encodeURIComponent(to)}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((j: Translated | null) => (got = j))
        .catch(() => null);
      let settled = false;
      void req.then(() => (settled = true));
      if (fx.current && !reduceMotion()) await runShimmer(fx.current, () => settled);
      else await req;
      setBusy(false);
      if (!got) {
        setError(true);
        return;
      }
      const t = got as Translated;
      setCache((c) => ({ ...c, [to]: t }));
      setShown('translated');
    },
    [busy, cache, sound, token],
  );

  const tr = cache[target];
  const prompt = shown === 'translated' && tr ? tr.prompt : letter.prompt;
  const body = shown === 'translated' && tr ? tr.body : letter.body;
  const paragraphs = body.split(/\n{2,}/);
  const when = new Date(/[zZ]|[+-]\d\d:?\d\d$/.test(letter.publishedAt) ? letter.publishedAt : letter.publishedAt + 'Z');
  const dateText = new Intl.DateTimeFormat(viewerLang.replace('_', '-'), { dateStyle: 'long' }).format(when);
  const markDate = new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short' }).format(when).toUpperCase();
  const cityLine = [letter.author.city, place].filter(Boolean).join(' · ');

  return (
    <section className={styles.letterArea}>
      <div className={styles.mini}>
        <span className={styles.eyebrow}>{s.eyebrow}</span>
      </div>
      <article className={styles.card}>
        <img className={styles.cardStamp} src={stampSrc(letter.stamp)} alt="" />
        <Postmark city={letter.author.city ?? 'LETTIE'} date={markDate} />
        <header className={styles.cardHead}>
          <div className={styles.avatar}>
            <img src={characterSrc(letter.author.characterKey, letter.author.characterImageUrl)} alt="" />
          </div>
          <div>
            <div className={styles.name}>{letter.author.nickname}</div>
            {cityLine && <div className={styles.place}>{cityLine}</div>}
          </div>
        </header>
        <div className={styles.rule} />
        {prompt && <div className={styles.prompt}>{prompt}</div>}
        <div className={styles.bodyBox}>
          <div className={`${styles.body} ${styles.reveal}`} key={shown + target}>
            {paragraphs.map((p, i) => (
              <p key={i} style={{ margin: i ? '14px 0 0' : 0, animationDelay: `${120 + i * 110}ms` }}>
                {p}
              </p>
            ))}
          </div>
          <canvas ref={fx} className={styles.fxCanvas} aria-hidden />
        </div>
        {letter.imageUrl && <img className={styles.photo} src={letter.imageUrl} alt="" />}
        <div className={styles.tools}>
          {(
            <button type="button" className={styles.translateBtn} disabled={busy} onClick={() => (shown === 'translated' ? setShown('original') : translate(target))}>
              <TranslateIcon />
              {busy ? s.translating : shown === 'translated' ? s.original : `${s.translate} · ${langName(target)}`}
            </button>
          )}
          {shown === 'translated' && (
            <select
                aria-label={s.language}
                className={styles.langSelect}
                value={target}
                onChange={(e) => {
                  setTarget(e.target.value);
                  void translate(e.target.value);
                }}
              >
                {langOptions.map((o) => (
                  <option key={o.c} value={o.c}>
                    {o.n}
                  </option>
                ))}
              </select>
          )}
        </div>
        {error && <div className={styles.error}>{s.translateFail}</div>}
        {shown === 'translated' && !error && <div className={styles.note}>{fill(s.translatedNote, { lang: langName(target) })}</div>}
        <div className={styles.meta}>{fill(s.released, { date: dateText })}</div>
      </article>
      <Reply s={s} token={token} platform={platform} />
    </section>
  );
}

function Reply({ s, token, platform }: { s: Strings; token: string; platform: Platform }) {
  return (
    <div className={styles.reply}>
      <div className={styles.eyebrow}>{s.replyEyebrow}</div>
      <a className={styles.cta} href={storeHref(platform, token)}>
        <TinyEnvelope />
        {s.replyCta}
      </a>
      <div className={styles.ctaHint}>{s.replyHint}</div>
      {platform === 'ios' && <div className={styles.ctaHint}>{s.iosHaveApp}</div>}
      <div className={styles.stores} id="get">
        <a className={styles.store} href={APP_STORE_URL}>
          App Store
        </a>
        <a className={styles.store} href={PLAY_URL}>
          Google Play
        </a>
      </div>
      <div className={styles.about}>
        <div className={styles.aboutItem}>
          <TinyEnvelope />
          {s.about1}
        </div>
        <div className={styles.aboutItem}>
          <TinyGlobe />
          {s.about2}
        </div>
        <div className={styles.aboutItem}>
          <img src="/letter/stamps/stamp_kr.png" alt="" />
          {s.about3}
        </div>
      </div>
      <footer className={styles.footer}>
        <strong>Lettie</strong>
        <span>{s.tagline}</span>
      </footer>
    </div>
  );
}

function Gone({ s, platform, sound }: { s: Strings; platform: Platform; sound: SoundApi }) {
  return (
    <main className={styles.root}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" precedence="default" />
      <StarSky />
      <div className={styles.column}>
        <TopBar s={s} sound={sound} />
        <section className={styles.gone}>
          <div style={{ width: 160 }}>
            <EnvelopeArt />
          </div>
          <h1>{s.goneTitle}</h1>
          <p>{s.goneBody}</p>
          <a className={styles.cta} href={platform === 'android' ? PLAY_URL : platform === 'ios' ? APP_STORE_URL : '#get'}>
            {s.getApp}
          </a>
          <div className={styles.stores} id="get" style={{ width: '100%' }}>
            <a className={styles.store} href={APP_STORE_URL}>
              App Store
            </a>
            <a className={styles.store} href={PLAY_URL}>
              Google Play
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

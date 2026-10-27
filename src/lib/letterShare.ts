/**
 * 웹으로 공유한 편지 (2026-10-27, 대표: 「앱에서 그대로 쓰되 쓰고 나서 웹으로 공유」).
 *
 * 앱에서 띄운 편지를 `https://lettie-dating.com/open/letter/{token}` 으로 공유한다.
 * 앱이 있는 사람은 이 주소가 앱 링크라 바로 앱의 그 편지로 가고, 앱이 없는 사람만 이 웹 페이지를 본다.
 * 데이터는 서버 공개 API(`/api/v2/public/letters/{token}`) — 이메일·회원 번호는 오지 않는다.
 * 사용자 글이라 검색에는 내보내지 않는다(noindex) — 10/19 사이트 전체 노출 급락 뒤 얇은 글을 늘리지 않기로 했다.
 */
import centers from './countryCenters.json';
import { LETTER_STRINGS_I18N } from './letterShareStrings';

export const API_BASE = process.env.LETTIE_API_BASE || 'https://lettie.co.kr';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6746454876';
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe';
export const SHARE_BASE = 'https://lettie-dating.com/open/letter/';

export type SharedLetter = {
  token: string;
  lang: string | null;
  prompt: string;
  body: string;
  imageUrl: string | null;
  stamp: string;
  publishedAt: string;
  language: string | null;
  author: {
    nickname: string;
    characterKey: string;
    characterImageUrl: string | null;
    countryCode: string | null;
    city: string | null;
    titleKey: string | null;
  };
  replyable: boolean;
  openInAppUrl: string;
};

export type Translated = { to: string; prompt: string; body: string; sourceLang: string | null };

/** 검토·개발용 견본. 운영에서는 LETTIE_SHARE_DEMO=1 일 때만 열린다. */
export const demoEnabled = () => process.env.NODE_ENV !== 'production' || process.env.LETTIE_SHARE_DEMO === '1';

const DEMO: Record<string, SharedLetter> = {
  demo: {
    token: 'demo',
    lang: 'ko',
    prompt: '지금 창밖에는 뭐가 보이나요?',
    body:
      '창밖에는 비가 그친 골목이 보여요. 가로등 아래 고양이 한 마리가 젖은 발을 털고 있고, 건너편 빵집은 내일 아침에 낼 빵을 굽느라 아직 불이 켜져 있어요.\n\n' +
      '서울은 요즘 밤이 길어졌어요. 퇴근길에 붕어빵을 사 먹는 게 하루 중 제일 좋은 순간이에요. 붕어빵을 아세요? 물고기 모양인데 안에 팥이 들어 있어요.\n\n' +
      '당신 창밖에는 지금 뭐가 보여요? 거기도 밤인가요, 아니면 막 아침이 왔나요?',
    imageUrl: null,
    stamp: 'kr',
    publishedAt: '2026-10-27T11:20:00',
    language: 'ko',
    author: { nickname: '하늘', characterKey: 'lettie_f3', characterImageUrl: null, countryCode: 'KR', city: 'Seoul', titleKey: 'traveler' },
    replyable: true,
    openInAppUrl: SHARE_BASE + 'demo',
  },
  'demo-en': {
    token: 'demo-en',
    lang: 'en',
    prompt: 'What can you see outside your window right now?',
    body:
      "Right now there's a lemon tree, a neighbour's red scooter and a strip of sea between two roofs. Lisbon is all hills, so every window gets a little piece of the river if you lean far enough.\n\n" +
      "It's almost midnight and the trams have stopped. Someone downstairs is practising the guitar, badly but with a lot of heart.\n\n" +
      "What's outside your window? I'd love to picture it.",
    imageUrl: null,
    stamp: 'season',
    publishedAt: '2026-10-26T22:40:00',
    language: 'en',
    author: { nickname: 'Inês', characterKey: 'lettie_f6', characterImageUrl: null, countryCode: 'PT', city: 'Lisbon', titleKey: null },
    replyable: true,
    openInAppUrl: SHARE_BASE + 'demo-en',
  },
};

const DEMO_TRANSLATIONS: Record<string, Record<string, Translated>> = {
  demo: {
    en: {
      to: 'en',
      sourceLang: 'ko',
      prompt: 'What can you see outside your window right now?',
      body:
        "Outside my window there's an alley where the rain has just stopped. A cat under the streetlight is shaking off its wet paws, and the bakery across the street still has its lights on, baking tomorrow morning's bread.\n\n" +
        "Nights have grown long in Seoul lately. Buying bungeoppang on the way home from work is the best moment of my day. Do you know bungeoppang? It's shaped like a fish and filled with red bean paste.\n\n" +
        "What do you see outside your window right now? Is it night there too, or has morning just arrived?",
    },
  },
  'demo-en': {
    ko: {
      to: 'ko',
      sourceLang: 'en',
      prompt: '지금 창밖에는 뭐가 보이나요?',
      body:
        '지금은 레몬 나무 한 그루, 이웃집 빨간 스쿠터, 그리고 두 지붕 사이로 바다가 한 줄 보여요. 리스본은 온통 언덕이라 몸을 충분히 내밀면 어느 창에서든 강이 조금씩 보여요.\n\n' +
        '자정이 다 됐고 트램은 멈췄어요. 아래층 누군가가 기타를 연습하는데, 서툴지만 마음은 가득 담겼어요.\n\n' +
        '당신 창밖에는 뭐가 있나요? 그려 보고 싶어요.',
    },
  },
};

/** 서버에서 공유 편지를 받는다. 없거나 내려간 편지면 null. 서버가 아직 공개 API 를 모르면(배포 전) 견본만 동작한다. */
export async function fetchSharedLetter(token: string): Promise<SharedLetter | null> {
  if (!/^[A-Za-z0-9-]{4,32}$/.test(token)) return null;
  if (demoEnabled() && DEMO[token]) return DEMO[token];
  try {
    const res = await fetch(`${API_BASE}/api/v2/public/letters/${encodeURIComponent(token)}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return (await res.json()) as SharedLetter;
  } catch {
    return null;
  }
}

export async function fetchTranslation(token: string, to: string, viewerIp: string | null): Promise<{ status: number; data?: Translated }> {
  if (demoEnabled() && DEMO[token]) {
    const t = DEMO_TRANSLATIONS[token]?.[to] ?? DEMO_TRANSLATIONS[token]?.[token === 'demo' ? 'en' : 'ko'];
    return t ? { status: 200, data: { ...t, to } } : { status: 404 };
  }
  const res = await fetch(`${API_BASE}/api/v2/public/letters/${encodeURIComponent(token)}/translate?to=${encodeURIComponent(to)}`, {
    headers: viewerIp ? { 'X-Lettie-Viewer-Ip': viewerIp } : {},
    cache: 'no-store',
  });
  if (!res.ok) return { status: res.status };
  return { status: 200, data: (await res.json()) as Translated };
}

// ── 그림 ─────────────────────────────────────────────────────────

const S3 = 'https://dearglobe.s3.ap-northeast-2.amazonaws.com';

/** 앱 CharacterAvatar 와 같은 규칙: 기본 캐릭터(lettie_*)는 앱 그림, 만든 캐릭터(gen_*)는 S3. */
export function characterSrc(key: string, url: string | null): string {
  if (url) return url;
  if (key.startsWith('gen_')) return `${S3}/characters/${key}.png`;
  if (/^lettie_[fm][1-8]$/.test(key) || key === 'postoffice') return `/letter/char/${key}.png`;
  return '/letter/char/lettie_f1.png';
}

/** 앱 StampView 와 같은 규칙: 그림 우표(c_xx · p_xxxxxxxx)는 S3, kr·br 는 앱 그림, 나머지(계절·도트 g_)는 계절 우표. */
export function stampSrc(key: string): string {
  if (/^c_[a-z]{2}$/.test(key) || /^p_[0-9a-f]{8}$/.test(key)) return `${S3}/stamps/${key}.png`;
  if (key === 'kr') return '/letter/stamps/stamp_kr.png';
  if (key === 'br') return '/letter/stamps/stamp_br.png';
  return '/letter/stamps/stamp_season.png';
}

/** 나라 가운데 [위도, 경도] — 도트 지구가 그 나라를 앞에 두고 돈다. */
export function countryCenter(code: string | null): [number, number] {
  const c = code ? (centers as Record<string, number[]>)[code.toUpperCase()] : undefined;
  return c ? [c[0], c[1]] : [20, 0];
}

export function countryName(code: string | null, lang: string): string | null {
  if (!code) return null;
  try {
    return new Intl.DisplayNames([lang.replace('_', '-')], { type: 'region' }).of(code.toUpperCase()) ?? null;
  } catch {
    return null;
  }
}

// ── 언어 ─────────────────────────────────────────────────────────

/** 앱이 번역할 수 있는 언어(앱 kAppLanguageCodes). 번역 목표는 이 중 하나. */
export const APP_LANGS = [
  'ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'ar', 'hi', 'id', 'it', 'ru', 'th', 'tr', 'vi',
  'pl', 'nl', 'fil', 'bn', 'ur', 'fa', 'uk', 'ms', 'sw', 'ro', 'el', 'cs',
  'ca', 'da', 'fi', 'sv', 'nb', 'hu', 'hr', 'sk', 'sl', 'bg', 'sr', 'lt', 'lv', 'et', 'is', 'sq', 'mk', 'be',
  'eu', 'gl', 'he', 'zh_TW', 'af', 'zu', 'ta', 'te', 'kn', 'ml', 'mr', 'gu', 'pa', 'or', 'ne', 'si', 'am',
  'my', 'km', 'lo', 'mn', 'ka', 'hy', 'az', 'kk', 'ky', 'uz',
];

/** 브라우저 언어 태그 → 앱 언어 코드 (앱 appLangCode 와 같은 별칭). */
export function appLangOf(tag: string): string | null {
  const [base, ...rest] = tag.trim().toLowerCase().split(/[-_]/);
  if (!base) return null;
  if (base === 'zh') return rest.some((r) => ['tw', 'hk', 'mo', 'hant'].includes(r)) ? 'zh_TW' : 'zh';
  const c = ({ iw: 'he', no: 'nb', nn: 'nb', tl: 'fil', in: 'id' } as Record<string, string>)[base] ?? base;
  return APP_LANGS.includes(c) ? c : null;
}

/** Accept-Language 에서 처음 맞는 앱 언어. */
export function viewerLangFrom(acceptLanguage: string | null): string | null {
  if (!acceptLanguage) return null;
  for (const part of acceptLanguage.split(',')) {
    const c = appLangOf(part.split(';')[0]);
    if (c) return c;
  }
  return null;
}

/** 화면 글자 언어: 표에 있는 앱 언어(72개)면 그 말, 없으면 영어. */
export type UiLang = string;
export const uiLangOf = (lang: string | null): UiLang => (lang && STRINGS[lang] ? lang : 'en');

/** 오른쪽에서 왼쪽으로 쓰는 말. */
export const RTL_LANGS = ['ar', 'fa', 'ur', 'he'];

const BASE = {
  ko: {
    eyebrow: '하늘 우편 · AIR MAIL',
    title: '%name님이 %place에서 띄운 편지',
    titleNoPlace: '%name님이 띄운 편지',
    tapHint: '봉투를 눌러 열어 보세요',
    openAria: '봉투 열기',
    translate: '번역 보기',
    translating: '번역하는 중…',
    original: '원문 보기',
    language: '언어',
    translateFail: '지금은 번역할 수 없어요. 잠시 뒤 다시 시도해 주세요.',
    translatedNote: '%lang로 번역했어요',
    replyEyebrow: '답장은 레티 앱에서',
    replyCta: '이 편지에 답장하기',
    replyHint: '앱을 받은 뒤 이 링크를 다시 누르면 이 편지가 바로 열려요',
    iosHaveApp: '레티가 이미 있다면 Safari에서 이 링크를 열어 주세요',
    released: '%date에 띄운 편지',
    about1: '거리만큼 날아가는 편지',
    about2: '70개 넘는 언어로 번역',
    about3: '나라마다 다른 우표',
    tagline: '느린 편지로 세계 친구를 만나요',
    goneTitle: '이 편지는 이제 하늘에 없어요',
    goneBody: '쓴 사람이 편지를 내렸어요. 레티에서 다른 편지를 주워 보세요.',
    getApp: '레티 받기',
    soundOn: '소리 켜기',
    soundOff: '소리 끄기',
    ogTitle: '%name님의 편지 · Lettie',
    ogDesc: '“%prompt” — 봉투를 열어 읽어 보세요',
    ogDescNoPrompt: '%place에서 띄운 편지예요. 봉투를 열어 읽어 보세요',
    ogLine: '봉투를 열어 읽어 보세요',
  },
  en: {
    eyebrow: 'AIR MAIL',
    title: 'A letter from %name in %place',
    titleNoPlace: 'A letter from %name',
    tapHint: 'Tap the envelope to open it',
    openAria: 'Open the envelope',
    translate: 'Translate',
    translating: 'Translating…',
    original: 'Show original',
    language: 'Language',
    translateFail: "Can't translate right now. Please try again in a moment.",
    translatedNote: 'Translated into %lang',
    replyEyebrow: 'Reply in the Lettie app',
    replyCta: 'Reply to this letter',
    replyHint: 'After installing, tap this link again and the letter opens in the app',
    iosHaveApp: 'Already have Lettie? Open this link in Safari',
    released: 'Released %date',
    about1: 'Letters fly as far as the distance',
    about2: 'Translated into 70+ languages',
    about3: 'A stamp for every country',
    tagline: 'Make friends around the world with slow letters',
    goneTitle: 'This letter has left the sky',
    goneBody: 'The writer took it down. Find other letters on Lettie.',
    getApp: 'Get Lettie',
    soundOn: 'Sound on',
    soundOff: 'Sound off',
    ogTitle: "%name's letter · Lettie",
    ogDesc: '“%prompt” — open the envelope to read it',
    ogDescNoPrompt: 'A letter released in %place. Open the envelope to read it',
    ogLine: 'Open the envelope to read it',
  },
} as const;

export type Strings = { [K in keyof (typeof BASE)['ko']]: string };

/** 한국어·영어 + 나머지 앱 언어(letterShareStrings.ts, 대표 승인 뒤 번역 2026-10-27). 빠진 칸은 영어로. */
export const STRINGS: Record<string, Strings> = Object.fromEntries(
  Object.entries({ ...LETTER_STRINGS_I18N, ...BASE } as Record<string, Partial<Strings>>).map(([k, v]) => [k, { ...BASE.en, ...v } as Strings]),
);

export function fill(s: string, vars: Record<string, string>): string {
  return s.replace(/%(\w+)/g, (m, k) => vars[k] ?? m);
}

/**
 * 방문자 언어 자동 선택 (2026-10-04).
 *
 * 한국어가 루트(`/`)라 외국인도 한국어 페이지에 먼저 떨어졌고, 하위 페이지엔 한/영 토글뿐이었다.
 * 미들웨어가 브라우저 언어(Accept-Language)로 그 사람 언어 페이지로 보낸다.
 * - 직접 고른 언어(쿠키)가 브라우저 언어보다 우선이다. 고르는 순간 쿠키를 남긴다.
 * - 검색·미리보기 봇은 보내지 않는다 — 한국어 루트가 그대로 색인되어야 하고, hreflang 이 언어별 URL 을 안내한다.
 * - 랜딩에 없는 언어는 x-default 와 같은 영어로 보낸다.
 *
 * 의존성 없는 순수 함수만 둔다 (미들웨어·클라이언트 컴포넌트·노드 테스트가 같이 쓴다).
 */

export const LANG_COOKIE = 'lettie_lang';
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** 모든 언어에 같은 경로가 있는 한국어 루트 페이지. 나머지 하위 페이지는 한국어·영어 두 벌뿐이다. */
export const FULLY_LOCALIZED_PATHS = ['/', '/faq'] as const;

const BOT_UA =
  /bot\b|bot\/|crawl|spider|slurp|google|bing|yandex|baidu|yeti|daum|duckduck|facebookexternalhit|meta-externalagent|embedly|preview|kakaotalk-scrap|whatsapp|headless|lighthouse|pagespeed|gptbot|claude|perplexity|anthropic|curl\/|wget|python|node-fetch|go-http|axios/i;

export function isBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) return true;
  return BOT_UA.test(userAgent);
}

/**
 * Accept-Language → 지원 언어 하나. 헤더가 없으면 null(아무 데도 보내지 않는다).
 * 지원 언어가 하나도 안 맞으면 [fallback].
 * 예: "ja-JP,ja;q=0.9,en;q=0.8" → ja, "zh-TW" → zh, "th-TH" → en
 */
export function pickLocale(
  acceptLanguage: string | null | undefined,
  supported: readonly string[],
  fallback: string,
): string | null {
  if (!acceptLanguage || !acceptLanguage.trim()) return null;
  const tags = acceptLanguage
    .split(',')
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
      const weight = q ? Number(q.slice(2)) : 1;
      return { lang: tag.trim().toLowerCase().split('-')[0], weight: Number.isFinite(weight) ? weight : 0, i };
    })
    .filter((t) => t.lang && t.lang !== '*' && t.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.i - b.i);
  for (const t of tags) if (supported.includes(t.lang)) return t.lang;
  return fallback;
}

/** 한국어 루트 경로 → 그 언어로 자동 이동할 곳. 번역이 없는 하위 페이지는 영어판으로. */
export function autoTarget(koPath: string, locale: string, rootLocale = 'ko'): string {
  const path = koPath === '' ? '/' : koPath;
  if (locale === rootLocale) return path;
  const suffix = path === '/' ? '' : path;
  if (locale === 'en') return `/en${suffix}`;
  return (FULLY_LOCALIZED_PATHS as readonly string[]).includes(path) ? `/${locale}${suffix}` : `/en${suffix}`;
}

/** 지금 경로에서 언어 접두사를 떼어 한국어 루트 기준 경로로. "/ja/faq" → "/faq", "/en" → "/" */
export function basePath(pathname: string, locales: readonly string[]): string {
  const trimmed = pathname.replace(/\/+$/, '') || '/';
  const m = trimmed.match(/^\/([a-z]{2})(\/.*)?$/);
  if (m && locales.includes(m[1])) return m[2] || '/';
  return trimmed;
}

/**
 * 언어 메뉴에서 직접 고를 때 갈 곳. 그 언어로 같은 페이지가 있으면 그 페이지, 없으면 그 언어의 홈.
 * (자동 이동과 다르다 — 직접 일본어를 골랐으면 영어 글보다 일본어 홈이 맞다.)
 */
export function pickTarget(base: string, locale: string, rootLocale = 'ko'): string {
  const suffix = base === '/' ? '' : base;
  if (locale === rootLocale) return base;
  if (locale === 'en') return `/en${suffix}`;
  return (FULLY_LOCALIZED_PATHS as readonly string[]).includes(base) ? `/${locale}${suffix}` : `/${locale}`;
}

export function langCookie(locale: string): string {
  return `${LANG_COOKIE}=${locale}; Path=/; Max-Age=${LANG_COOKIE_MAX_AGE}; SameSite=Lax`;
}

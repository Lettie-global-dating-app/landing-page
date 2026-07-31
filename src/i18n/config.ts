/**
 * 랜딩 다국어 설정.
 *
 * 한국어는 루트(`/`)에 그대로 둔다. 이미 색인된 URL 이라 `/ko` 로 옮기면
 * 기존 순위를 버리게 된다. 나머지 언어는 `/[locale]` 아래로 붙인다.
 * `/en` 도 기존 경로 그대로 유지되므로 색인 손실이 없다.
 */
export const LOCALES = ['en', 'es', 'pt', 'ja', 'fr', 'zh', 'de', 'hi', 'id', 'ru', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

/** 루트(`/`)가 담당하는 언어. 경로 접두사가 없다. */
export const ROOT_LOCALE = 'ko';

export const SITE_URL = 'https://lettie-dating.com';

/** hreflang 에 쓰는 값. 지역까지 좁히지 않고 언어 단위로 잡는다. */
export const HREFLANG: Record<string, string> = {
  ko: 'ko', en: 'en', es: 'es', pt: 'pt', ja: 'ja', fr: 'fr',
  zh: 'zh', de: 'de', hi: 'hi', id: 'id', ru: 'ru', it: 'it',
};

export const OG_LOCALE: Record<string, string> = {
  ko: 'ko_KR', en: 'en_US', es: 'es_ES', pt: 'pt_BR', ja: 'ja_JP', fr: 'fr_FR',
  zh: 'zh_CN', de: 'de_DE', hi: 'hi_IN', id: 'id_ID', ru: 'ru_RU', it: 'it_IT',
};

/** 언어 전환 링크에 쓰는 표기. 각 언어를 그 언어로 적는다. */
export const LOCALE_NAMES: Record<string, string> = {
  ko: '한국어', en: 'English', es: 'Español', pt: 'Português', ja: '日本語',
  fr: 'Français', zh: '中文', de: 'Deutsch', hi: 'हिन्दी', id: 'Bahasa Indonesia',
  ru: 'Русский', it: 'Italiano',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** 해당 언어 페이지의 절대 URL. 한국어만 접두사가 없다. */
export function urlFor(locale: string, path = ''): string {
  const suffix = path.startsWith('/') ? path : path ? `/${path}` : '';
  return locale === ROOT_LOCALE
    ? `${SITE_URL}${suffix}`
    : `${SITE_URL}/${locale}${suffix}`;
}

/** 모든 언어의 대체 링크. Next 의 alternates.languages 에 그대로 넣는다. */
export function languageAlternates(path = ''): Record<string, string> {
  const map: Record<string, string> = { [ROOT_LOCALE]: urlFor(ROOT_LOCALE, path) };
  for (const l of LOCALES) map[l] = urlFor(l, path);
  map['x-default'] = urlFor(ROOT_LOCALE, path);
  return map;
}

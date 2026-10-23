import { HREFLANG, SITE_URL } from '@/i18n/config';
import { ARTICLES } from './all';
import { ARTICLE_PATH, ARTICLE_SLUGS, type Article, type ArticleSlug } from './types';

export function getArticle(locale: string, slug: string): Article | null {
  return (ARTICLES[locale] as Record<string, Article> | undefined)?.[slug] ?? null;
}

/**
 * 2026-10-23 정리 — 10/19(PT)부터 구글 노출이 사이트 전체로 하루 만에 95% 꺼졌다(기술 문제·수동 조치 없음, docs/seo-drop-2026-10-19.md).
 * 자기 앱을 1위에 둔 비교 글을 27개 언어로 찍어 둔 것과 언어마다 같은 일반 글이 가장 큰 의심이라:
 *  - MERGED_TO_EN: 다국어판을 없애고 영어판으로 308 (next.config.ts). 한국어·영어 원본만 남는다.
 *  - NOINDEX_LOCALIZED: 다국어판은 사람에게는 그대로 보이고 검색에서만 뺀다(noindex·sitemap·hreflang 제외).
 * 언어별 홈·FAQ·앱 소개(penpal-app)·시작하기(getting-started)는 앱 사용자에게 필요한 안내라 색인에 둔다.
 */
export const MERGED_TO_EN: readonly ArticleSlug[] = ['best-penpal-apps-2026', 'slowly-alternatives-2026'];
export const NOINDEX_LOCALIZED: readonly ArticleSlug[] = ['writing-tips'];

/** 이 글이 실제로 있는 언어 (한국어·영어 제외). 영어판으로 합친 글은 없다. */
export function articleLocales(slug: ArticleSlug): string[] {
  if (MERGED_TO_EN.includes(slug)) return [];
  return Object.keys(ARTICLES).filter((l) => ARTICLES[l]?.[slug]);
}

/** 검색에 내보내는 언어판 — sitemap·hreflang·llms.txt 는 이것만 쓴다 */
export function indexedArticleLocales(slug: ArticleSlug): string[] {
  return NOINDEX_LOCALIZED.includes(slug) ? [] : articleLocales(slug);
}

export function slugForPath(path: string): ArticleSlug | null {
  return (ARTICLE_SLUGS as readonly ArticleSlug[]).find((s) => ARTICLE_PATH[s] === path) ?? null;
}

/** 한국어·영어 원본 + 이 글이 있는 모든 언어의 hreflang. 다국어 글 페이지가 쓴다. */
export function articleAlternates(slug: ArticleSlug): Record<string, string> {
  const path = ARTICLE_PATH[slug];
  const map: Record<string, string> = { ko: `${SITE_URL}${path}`, en: `${SITE_URL}/en${path}` };
  for (const l of indexedArticleLocales(slug)) map[HREFLANG[l] ?? l] = `${SITE_URL}/${l}${path}`;
  map['x-default'] = `${SITE_URL}/en${path}`;
  return map;
}

/**
 * 한국어·영어 원본 페이지가 자기 hreflang 에 더할 다국어판 (경로로 찾는다).
 * 한쪽만 가리키면 검색엔진이 무시하므로 원본도 다국어판을 가리켜야 한다.
 */
export function localizedArticleAlternatesForPath(path: string): Record<string, string> {
  const slug = slugForPath(path);
  if (!slug) return {};
  const map: Record<string, string> = {};
  for (const l of indexedArticleLocales(slug)) map[HREFLANG[l] ?? l] = `${SITE_URL}/${l}${path}`;
  return map;
}

/** 이 언어에 이 경로의 글이 있으면 그 언어 경로, 없으면 null */
export function localizedPathIfExists(locale: string, path: string): string | null {
  const slug = slugForPath(path);
  return slug && getArticle(locale, slug) ? `/${locale}${path}` : null;
}

export { ARTICLE_PATH, ARTICLE_SLUGS };
export type { Article, ArticleSlug };

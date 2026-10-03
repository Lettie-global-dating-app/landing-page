import { HREFLANG, SITE_URL } from '@/i18n/config';
import { ARTICLES } from './all';
import { ARTICLE_PATH, ARTICLE_SLUGS, type Article, type ArticleSlug } from './types';

export function getArticle(locale: string, slug: string): Article | null {
  return (ARTICLES[locale] as Record<string, Article> | undefined)?.[slug] ?? null;
}

/** 이 글이 실제로 있는 언어 (한국어·영어 제외) */
export function articleLocales(slug: ArticleSlug): string[] {
  return Object.keys(ARTICLES).filter((l) => ARTICLES[l]?.[slug]);
}

export function slugForPath(path: string): ArticleSlug | null {
  return (ARTICLE_SLUGS as readonly ArticleSlug[]).find((s) => ARTICLE_PATH[s] === path) ?? null;
}

/** 한국어·영어 원본 + 이 글이 있는 모든 언어의 hreflang. 다국어 글 페이지가 쓴다. */
export function articleAlternates(slug: ArticleSlug): Record<string, string> {
  const path = ARTICLE_PATH[slug];
  const map: Record<string, string> = { ko: `${SITE_URL}${path}`, en: `${SITE_URL}/en${path}` };
  for (const l of articleLocales(slug)) map[HREFLANG[l] ?? l] = `${SITE_URL}/${l}${path}`;
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
  for (const l of articleLocales(slug)) map[HREFLANG[l] ?? l] = `${SITE_URL}/${l}${path}`;
  return map;
}

/** 이 언어에 이 경로의 글이 있으면 그 언어 경로, 없으면 null */
export function localizedPathIfExists(locale: string, path: string): string | null {
  const slug = slugForPath(path);
  return slug && getArticle(locale, slug) ? `/${locale}${path}` : null;
}

export { ARTICLE_PATH, ARTICLE_SLUGS };
export type { Article, ArticleSlug };

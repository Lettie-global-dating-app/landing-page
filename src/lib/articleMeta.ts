import type { Metadata } from 'next';
import { OG_LOCALE, SITE_URL, urlFor } from '@/i18n/config';
import { ARTICLE_DATE, ARTICLE_PATH, type ArticleSlug } from '@/data/articles/types';
import { articleAlternates, getArticle } from '@/data/articles/lookup';

/** 다국어 글 페이지의 메타데이터. alternates 는 한/영 원본 + 이 글이 있는 모든 언어. */
export function articleMetadata(locale: string, slug: ArticleSlug): Metadata {
  const a = getArticle(locale, slug);
  if (!a) return {};
  const url = urlFor(locale, ARTICLE_PATH[slug]);
  const image = `${SITE_URL}/og/${locale}.png`;
  return {
    metadataBase: new URL(SITE_URL),
    // 제목에 이미 Lettie 가 있으면 붙이지 않는다 ("… | Lettie | Lettie" 방지)
    title: { absolute: a.title.includes('Lettie') ? a.title : `${a.title} | Lettie` },
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: url, languages: articleAlternates(slug) },
    openGraph: {
      type: 'article',
      locale: OG_LOCALE[locale],
      url,
      siteName: 'Lettie',
      title: a.title,
      description: a.description,
      publishedTime: ARTICLE_DATE,
      modifiedTime: ARTICLE_DATE,
      images: [{ url: image, width: 1200, height: 630, alt: a.title }],
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.description, images: [image] },
  };
}

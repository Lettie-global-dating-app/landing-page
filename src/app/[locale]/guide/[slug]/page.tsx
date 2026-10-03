import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalizedArticle from '@/components/LocalizedArticle';
import { articleLocales, getArticle } from '@/data/articles/lookup';
import { articleMetadata } from '@/lib/articleMeta';
import type { ArticleSlug } from '@/data/articles/types';

type Props = { params: Promise<{ locale: string; slug: string }> };

/** 다국어로 쓴 가이드(시작하기·편지 쓰는 법). 나머지 가이드는 next.config 가 영어판으로 보낸다. */
const GUIDES: ArticleSlug[] = ['getting-started', 'writing-tips'];

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.flatMap((slug) => articleLocales(slug).map((locale) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!GUIDES.includes(slug as ArticleSlug)) return {};
  return articleMetadata(locale, slug as ArticleSlug);
}

export default async function LocalizedGuide({ params }: Props) {
  const { locale, slug } = await params;
  if (!GUIDES.includes(slug as ArticleSlug)) notFound();
  const article = getArticle(locale, slug);
  if (!article) notFound();
  return <LocalizedArticle locale={locale} slug={slug as ArticleSlug} article={article} />;
}

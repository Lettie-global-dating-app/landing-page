import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalizedArticle from '@/components/LocalizedArticle';
import { articleLocales, getArticle } from '@/data/articles/lookup';
import { articleMetadata } from '@/lib/articleMeta';

type Props = { params: Promise<{ locale: string }> };

/** 「펜팔 앱이란」 다국어판. 한국어 /penpal-app · 영어 /en/penpal-app 은 기존 페이지가 맡는다. */
export function generateStaticParams() {
  return articleLocales('penpal-app').map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return articleMetadata(locale, 'penpal-app');
}

export default async function LocalizedPenpalApp({ params }: Props) {
  const { locale } = await params;
  const article = getArticle(locale, 'penpal-app');
  if (!article) notFound();
  return <LocalizedArticle locale={locale} slug="penpal-app" article={article} />;
}

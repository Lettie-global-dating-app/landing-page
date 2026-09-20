import { notFound } from 'next/navigation';
import Home2 from '@/components/Home2';
import { isLocale } from '@/i18n/config';

// 2.0 홈. 한국어(/)·영어(/en)와 같은 구조로, 문구만 src/i18n/home/<locale>.ts 에서 온다.
export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <Home2 lang={locale} />;
}

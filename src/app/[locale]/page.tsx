import { notFound } from 'next/navigation';
import Home2 from '@/components/Home2';
import { isLocale, urlFor } from '@/i18n/config';
import { getHomeCopy } from '@/i18n/home';
import { APP_ID, SITE_ID } from '@/lib/schema';

// 2.0 홈. 한국어(/)·영어(/en)와 같은 구조로, 문구만 src/i18n/home/<locale>.ts 에서 온다.
// 홈 WebPage 구조화 데이터는 여기서만 낸다 — 레이아웃에 두면 FAQ·글 페이지에도 "홈" WebPage 가 붙었다 (2026-10-06).
export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  const t = getHomeCopy(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${urlFor(locale)}#webpage`,
            url: urlFor(locale),
            name: `Lettie — ${t.h1a} ${t.h1b}`,
            inLanguage: locale,
            isPartOf: { '@id': SITE_ID },
            about: { '@id': APP_ID },
          }),
        }}
      />
      <Home2 lang={locale} />
    </>
  );
}

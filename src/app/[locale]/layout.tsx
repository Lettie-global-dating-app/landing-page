import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCALES, OG_LOCALE, SITE_URL, isLocale, languageAlternates, urlFor } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { getHomeCopy } from '@/i18n/home';
import { seoDesc } from '@/lib/seo';
import { APP_ID, SITE_ID } from '@/lib/schema';

// 한국어(루트)와 영어(/en)는 기존 라우트가 그대로 담당한다.
// 이미 색인된 경로를 건드리지 않기 위해서다. 여기서는 새로 추가하는 언어만 만든다.
const NEW_LOCALES = LOCALES.filter((l) => l !== 'en');

export function generateStaticParams() {
  return NEW_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = getDictionary(locale);
  const h = getHomeCopy(locale);
  const url = urlFor(locale);
  // 제목·설명·OG 이미지는 그 언어로 만든다. 링크를 공유했을 때 미리보기가 그 언어로 뜨게 하기 위해서다.
  const title = `Lettie — ${h.h1a} ${h.h1b}`;
  const description = seoDesc(h.sub);
  const ogImage = `${SITE_URL}/og/${locale}.png`;
  const alternateLocale = Object.entries(OG_LOCALE).filter(([k]) => k !== locale).map(([, v]) => v);

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title, template: `%s | Lettie` },
    description,
    keywords: [...t.meta.keywords],
    alternates: {
      canonical: url,
      languages: languageAlternates(),
    },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      alternateLocale,
      url,
      siteName: 'Lettie',
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title, type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    appLinks: {
      ios: {
        app_store_id: '6746454876',
        url: 'https://apps.apple.com/app/id6746454876',
      },
      android: {
        package: 'com.dearglobe.dearglobe',
        url: 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();

  const t = getDictionary(locale);

  return (
    <>
      {/*
        <html> 은 루트 레이아웃만 렌더하므로 lang 은 여기서 바꿀 수 없다.
        루트에서 headers() 로 처리하면 사이트 전체가 동적 렌더링이 되어
        TTFB 를 잃는다. 정적 생성을 지키고 렌더 시점에 보정한다.
        언어 판별의 실제 신호는 hreflang 과 본문이 담당한다.
      */}
      <script
        dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='${locale}';` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${urlFor(locale)}#webpage`,
            url: urlFor(locale),
            name: `Lettie — ${getHomeCopy(locale).h1a} ${getHomeCopy(locale).h1b}`,
            inLanguage: locale,
            isPartOf: { '@id': SITE_ID },
            about: { '@id': APP_ID },
          }),
        }}
      />
      {children}
    </>
  );
}

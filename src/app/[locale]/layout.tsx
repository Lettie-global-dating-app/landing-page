import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCALES, OG_LOCALE, SITE_URL, isLocale, languageAlternates, urlFor } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

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
  const url = urlFor(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: t.meta.title, template: `%s | Lettie` },
    description: t.meta.description,
    keywords: [...t.meta.keywords],
    alternates: {
      canonical: url,
      languages: languageAlternates(),
    },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      url,
      siteName: 'Lettie',
      title: t.meta.title,
      description: t.meta.description,
      images: [
        {
          url: `${SITE_URL}/lettie-og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Lettie - Global Penpal App',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: [`${SITE_URL}/lettie-og-image.png`],
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
            '@type': 'MobileApplication',
            name: 'Lettie',
            applicationCategory: 'SocialNetworkingApplication',
            operatingSystem: ['iOS', 'Android'],
            description: t.meta.description,
            url: urlFor(locale),
            downloadUrl: 'https://apps.apple.com/app/id6746454876',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', category: 'Free' },
            publisher: { '@type': 'Organization', name: 'Lettie' },
          }),
        }}
      />
      {children}
    </>
  );
}

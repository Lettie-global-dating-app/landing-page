import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { SITE_URL, isLocale, OG_LOCALE } from '@/i18n/config';
import { FAQ_LOCALES, faqAlternates, getFaq } from '@/data/localizedFaq';

/**
 * 언어별 FAQ.
 *
 * hreflang 은 **FAQ 가 실제로 있는 언어끼리만** 잇는다. 한국어(/faq)와 영어(/en/faq)는
 * 기존 페이지가 담당하므로 함께 넣고, 그 외에는 `FAQ_LOCALES` 에 있는 언어만 넣는다.
 * 없는 언어를 가리키면 404 를 제출하는 셈이다.
 */

export function generateStaticParams() {
  return FAQ_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const faq = getFaq(locale);
  if (!faq) return {};

  const url = `${SITE_URL}/${locale}/faq`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: `${faq.title} | Lettie` },
    description: faq.description,
    keywords: faq.keywords,
    alternates: { canonical: url, languages: faqAlternates() },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      url,
      siteName: 'Lettie',
      title: faq.title,
      description: faq.description,
      images: [{ url: `${SITE_URL}/lettie-og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: faq.title,
      description: faq.description,
      images: [`${SITE_URL}/lettie-og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export default async function LocaleFaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const faq = getFaq(locale);
  if (!faq) notFound();

  const url = `${SITE_URL}/${locale}/faq`;

  // 가시 텍스트와 같은 배열에서 생성한다 — 어긋날 수 없다.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Lettie', item: `${SITE_URL}/${locale}` },
      { '@type': 'ListItem', position: 2, name: faq.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between md:pr-40">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <Image src="/lettie-icon.png" alt="Lettie" className="w-10 h-10 rounded-2xl" width={40} height={40} priority />
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </Link>
          <Link href={`/${locale}`} className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Lettie
          </Link>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">{faq.title}</h1>
          <p className="text-xl text-gray-600 mb-10">{faq.subtitle}</p>

          <div className="space-y-6">
            {faq.items.map((it) => (
              <div key={it.q} className="rounded-xl bg-gray-50 p-6">
                <h2 className="font-semibold text-gray-800 mb-2 text-lg">{it.q}</h2>
                <p className="text-gray-600 leading-relaxed">{it.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com/app/id6746454876"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

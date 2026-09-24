import Link from 'next/link';
import { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { koEnAlternates } from '@/i18n/config';
import { APP_ID, SITE_ID } from '@/lib/schema';
import GuideArticle, { GuideSection, GuideTable, GuideCallout } from '@/components/GuideArticle';

/**
 * "pen pal app" / "pen pal app download" 질의의 랜딩 (GSC 28일 노출 1위 페이지, 2026-09-24 재작성).
 * 숫자는 운영 DB 기준일을 붙여서만 쓴다. 배달 시간은 서버 DeliveryTimeService 의 거리 구간 그대로.
 */
const UPDATED = '2026-09-24';
const URL = 'https://lettie-dating.com/en/penpal-app';
const APP_STORE = 'https://apps.apple.com/app/id6746454876';
const PLAY = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe';

const TITLE = 'Pen Pal App: Free Download for iOS & Android | Lettie';
const DESC =
  'Lettie is a free pen pal app. Letters take 1–24 hours to arrive depending on distance, and translate into 28 languages. On iOS and Android.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['pen pal app', 'pen pal app download', 'free pen pal app', 'pen pal app with translation', 'penpal app', 'best pen pal app'],
  alternates: { canonical: URL, languages: koEnAlternates('/penpal-app') },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'Lettie',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://lettie-dating.com/og/en.png', width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'Is Lettie a free pen pal app?',
    a: 'Yes. Writing, reading and replying to letters, translating them, and the 16 base characters are free on iOS and Android. Optional gems and the Lettie Plus subscription add extras such as more letters per day, unlimited back-and-forth with one person, stamp draws and a custom-drawn character.',
  },
  {
    q: 'Where can I download the Lettie pen pal app?',
    a: 'Lettie is on the Apple App Store for iPhone and on Google Play for Android. Search for "Lettie" or use the store links on this page.',
  },
  {
    q: 'How long does a letter take to arrive on Lettie?',
    a: 'It depends on the distance between the two countries: 1–2 hours within one country, 3–6 hours under 3,000 km, 6–12 hours under 8,000 km, and 12–24 hours for anything farther.',
  },
  {
    q: 'Do I need to speak English to use Lettie?',
    a: 'No. Every letter has a translate button covering 28 languages, and the original stays next to the translation, so you can write in your own language.',
  },
  {
    q: 'How many people use Lettie?',
    a: 'Lettie is small: 798 people in 77 countries had signed up as of September 24, 2026. The app is built by one developer in Seoul.',
  },
  {
    q: 'How is Lettie different from Slowly?',
    a: 'Both deliver letters by distance. Lettie adds picking up letters strangers released (Discover), free built-in translation in 28 languages, and pixel characters drawn from a written description.',
  },
];

function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a href={APP_STORE} className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
        Download on the App Store
      </a>
      <a href={PLAY} className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">
        Get it on Google Play
      </a>
    </div>
  );
}

export default function PenpalAppPage() {
  // 앱 엔티티는 루트 레이아웃의 @graph 가 한 번만 선언한다. 이 페이지는 그 앱에 관한 페이지다.
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${URL}#webpage`,
    url: URL,
    inLanguage: 'en',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': APP_ID },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <GuideArticle
        locale="en"
        path="/penpal-app"
        parent={null}
        title="Lettie: a free pen pal app for iPhone and Android"
        subtitle="Write letters to people in other countries, in your own language."
        answer={
          <>
            <strong>Lettie is a free pen pal app for iPhone and Android.</strong> Each letter takes the real distance to arrive, from about an
            hour inside one country to up to a day across the world, and translates into 28 languages with one tap.
          </>
        }
        cta={<StoreButtons />}
        icon={<Mail className="w-8 h-8" />}
        accent="from-blue-500 to-indigo-500"
        updated={UPDATED}
        published="2025-06-11"
        faqs={FAQS}
      >
        <GuideSection title="What you can do in the app">
          <GuideTable
            head={['Feature', 'What it does']}
            rows={[
              ['Letters by distance', 'A letter flies across a globe and arrives 30 minutes to 24 hours later, depending on the distance between the two countries.'],
              ['Discover', 'Pick up letters strangers released into the sky and reply to the ones that speak to you.'],
              ['Translation', 'A translate button in every letter, 28 languages, free, with the original shown beside it.'],
              ['Profiles', 'You start as a pixel character (16 free ones) instead of a photo. Describe your look and one is drawn for you.'],
              ['Stamps', 'Each country your letters reach adds a stamp to your album and paints the globe.'],
              ['Introductions', 'A few introduction cards a day. No swiping, no scores.'],
            ]}
          />
        </GuideSection>

        <GuideSection title="How long a letter takes">
          <p>
            Delivery time comes from the distance between the two countries&apos; centre points. These are the bands the app uses, as of {UPDATED}.
            See <Link href="/en/blog/letter-delivery-time-by-distance" className="text-blue-600 underline">delivery times by city</Link> for examples.
          </p>
          <GuideTable
            head={['Distance', 'Delivery time']}
            rows={[
              ['Same country', '1–2 hours'],
              ['Under 3,000 km', '3–6 hours'],
              ['3,000–8,000 km', '6–12 hours'],
              ['Over 8,000 km', '12–24 hours'],
            ]}
          />
        </GuideSection>

        <GuideSection title="What is free and what is optional">
          <GuideTable
            head={['Free', 'Optional (gems or Lettie Plus)']}
            rows={[
              ['Write, read and reply to letters', 'More letters released per day'],
              ['Translate any letter into 28 languages', 'Unlimited back-and-forth with one person'],
              ['16 base pixel characters', 'A custom character drawn from your description'],
              ['Discover: new envelopes every 8 hours', 'Stamp draws and extra envelopes'],
            ]}
          />
          <GuideCallout title="Honest size check">
            Lettie is a small community: 798 people in 77 countries as of September 24, 2026. Replies can take a while, which is part of the idea.
          </GuideCallout>
        </GuideSection>

        <GuideSection title="Compared with other pen pal apps">
          <p>
            If you are choosing between apps, read <Link href="/en/blog/lettie-vs-slowly" className="text-blue-600 underline">Lettie vs Slowly</Link> and{' '}
            <Link href="/en/blog/best-penpal-apps-2026" className="text-blue-600 underline">the best pen pal apps in 2026</Link>. Both list what each app does
            better, including where Lettie is weaker.
          </p>
        </GuideSection>
      </GuideArticle>
    </>
  );
}

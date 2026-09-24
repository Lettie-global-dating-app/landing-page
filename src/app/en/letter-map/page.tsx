import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Globe } from 'lucide-react';
import { koEnAlternates } from '@/i18n/config';
import GuideArticle, { GuideSection, GuideTable } from '@/components/GuideArticle';
import { COUNTRY_EN as C, LETTER_MAP as D } from '@/data/letterMap';

const URL = 'https://lettie-dating.com/en/letter-map';
const TITLE = `Where Lettie's Letters Go: ${D.letters} Letters, ${D.countries} Countries`;
const DESC = `Every letter one person sent another on Lettie, June 2025 to September 2026: ${D.letters} letters between ${D.countries} countries, the busiest routes, and how it was counted.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['pen pal statistics', 'pen pal countries', 'where pen pals write from', 'Lettie letter map', 'pen pal app data'],
  alternates: { canonical: URL, languages: koEnAlternates('/letter-map') },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: 'Lettie', locale: 'en_US', type: 'article',
    images: [{ url: `https://lettie-dating.com${D.image}`, width: 2400, height: 1500 }] },
};

const FAQS = [
  { q: 'How many letters have people exchanged on Lettie?', a: `${D.letters} letters were sent from one person to another on Lettie between June 2025 and September 2026, counted on ${D.asOf}. Letters written by the app's AI characters and developer test accounts are not included.` },
  { q: 'Which countries write the most letters on Lettie?', a: `The United States (${D.byCountry[0][1]} letters sent or received), South Korea (${D.byCountry[1][1]}) and Türkiye (${D.byCountry[2][1]}) lead, as of ${D.asOf}.` },
  { q: 'What is the busiest pen pal route on Lettie?', a: `United Arab Emirates to Türkiye and South Korea to the United States are tied at 17 letters each, counting both directions, as of ${D.asOf}.` },
];

export default function LetterMapPage() {
  return (
    <GuideArticle
      locale="en"
      path="/letter-map"
      parent={null}
      title={`Where Lettie's letters go`}
      subtitle={`${D.letters} letters between people in ${D.countries} countries, June 2025 to September 2026.`}
      answer={<><strong>{D.letters} letters were exchanged between people on Lettie across {D.countries} countries</strong> from June 2025 to September 2026 ({D.international} between two countries, {D.domestic} within one). Counted from the app database on {D.asOf}.</>}
      icon={<Globe className="w-8 h-8" />}
      accent="from-blue-500 to-indigo-500"
      updated={D.asOf}
      published={D.asOf}
      faqs={FAQS}
    >
      <Image src={D.image} alt={`Map of ${D.letters} letters between ${D.countries} countries on Lettie`} width={2400} height={1500} className="w-full h-auto rounded-2xl" />
      <GuideSection title="Busiest routes">
        <GuideTable head={['Route', 'Letters (both directions)']} rows={D.routes.map(([a, b, n]) => [`${C[a] ?? a} – ${C[b] ?? b}`, String(n)])} />
      </GuideSection>
      <GuideSection title="Letters by country">
        <GuideTable head={['Country', 'Letters sent or received']} rows={D.byCountry.map(([c, n]) => [C[c] ?? c, String(n)])} />
        <p>Letters within one country: {D.within.map(([c, n]) => `${C[c] ?? c} ${n}`).join(', ')}.</p>
      </GuideSection>
      <GuideSection title="How this was counted">
        <p>
          Source: Lettie&apos;s own database, queried on {D.asOf}. Only letters one human user sent to another are counted, grouped by the sender&apos;s and
          recipient&apos;s country. Letters by the app&apos;s AI characters and by developer test accounts are excluded, which is why the numbers are small.
          Lines on the map are great-circle routes between country centre points. The community is small, and this page is updated as it grows.
        </p>
        <p>
          How long each of these letters took depends on distance: see <Link href="/en/blog/letter-delivery-time-by-distance" className="text-blue-600 underline">delivery times by city</Link>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}

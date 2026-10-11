import Link from 'next/link';
import { Metadata } from 'next';
import { BarChart3 } from 'lucide-react';
import { koEnAlternates } from '@/i18n/config';
import { ORG_ID } from '@/lib/schema';
import GuideArticle, { GuideSection, GuideTable } from '@/components/GuideArticle';
import { COUNTRY_EN as C, enMonth } from '@/data/letterMap';
import { LETTER_STATS as S, WEEKDAY_EN, busiestDay } from '@/data/letterStats';

/**
 * 레티 편지 통계 (2026-10-11) — 레티 DB 에서만 나오는 숫자를 기준일·표본·정의와 함께 공개한다(1차 소스).
 * 숫자는 전부 src/data/letterStats.ts 에서 읽는다. 손으로 쓴 숫자를 두지 않는다.
 */
const URL = 'https://lettie-dating.com/en/letter-stats';
const PERIOD = `${enMonth(S.period.from)} to ${enMonth(S.period.to)}`;
const [BUSY_DAY, BUSY_PCT] = busiestDay();
const hour12 = (h: number) => `${h % 12 || 12} ${h < 12 ? 'a.m.' : 'p.m.'}`;

const TITLE = `Pen Pal Letter Statistics: ${S.letters} Letters from ${S.countries} Countries | Lettie`;
const DESC = `How long pen pal letters are, when people write them, how long replies take and how first letters open, from ${S.letters} letters on Lettie (${PERIOD}).`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['pen pal statistics', 'pen pal letter length', 'how long should a pen pal letter be', 'when do people write letters', 'pen pal reply time', 'how to start a pen pal letter data'],
  alternates: { canonical: URL, languages: koEnAlternates('/letter-stats') },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: 'Lettie', locale: 'en_US', type: 'article', images: ['/og/en.png'] },
};

const FAQS = [
  { q: 'How long is a typical pen pal letter?', a: `On Lettie the median letter is ${S.length.median} characters, about the length of one short paragraph. Half of all letters fall between ${S.length.p25} and ${S.length.p75} characters (${S.letters} letters, counted ${S.asOf}).` },
  { q: 'When do people write pen pal letters?', a: `${S.time.night22to2}% of letters on Lettie are written between 10 p.m. and 2 a.m. local time, and the busiest single hour is ${hour12(S.time.peakHour)}. ${WEEKDAY_EN[BUSY_DAY]} is the busiest day with ${BUSY_PCT}% of letters (${S.time.sample} letters from single-time-zone countries).` },
  { q: 'How fast do pen pals reply?', a: `When a reply comes on Lettie, the median time from a letter arriving to the reply being written is ${S.reply.medianHours} hours; ${S.reply.within24h}% are written within a day (${S.reply.n} replies).` },
  { q: 'How do most people start a first letter to a pen pal?', a: `In ${S.openers.latin.n} first letters written in Latin script on Lettie, ${S.openers.latin.hello}% open with "Hello", ${S.openers.latin.hi}% with "Hi" and ${S.openers.latin.hey}% with "Hey". Only ${S.openers.latin.dear}% start with "Dear".` },
];

const datasetLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Lettie pen pal letter statistics',
  description: DESC,
  url: URL,
  creator: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  datePublished: S.asOf,
  dateModified: S.asOf,
  temporalCoverage: `${S.period.from}/${S.period.to}`,
  isAccessibleForFree: true,
  inLanguage: 'en',
  measurementTechnique: 'Aggregated from the Lettie app database; human-written letters only, AI characters and test accounts excluded.',
  variableMeasured: ['letter length (characters)', 'local hour and weekday a letter was written', 'delivery time (hours)', 'time to reply (hours)', 'first word of a first letter'],
};

export default function LetterStatsPage() {
  return (
    <GuideArticle
      locale="en"
      path="/letter-stats"
      parent={null}
      title="Pen pal letter statistics"
      subtitle={`What ${S.letters} letters from ${S.countries} countries say about how people write, ${PERIOD}.`}
      answer={
        <>
          <strong>The median pen pal letter on Lettie is {S.length.median} characters long, {S.time.night22to2}% are written between 10 p.m. and 2 a.m., and replies that come are written a median {S.reply.medianHours} hours after the letter lands.</strong>{' '}
          From {S.letters} human-written letters across {S.countries} countries, counted on {S.asOf}.
        </>
      }
      icon={<BarChart3 className="w-8 h-8" />}
      accent="from-amber-500 to-orange-500"
      updated={S.asOf}
      published={S.asOf}
      faqs={FAQS}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />

      <GuideSection title="How long letters are">
        <p>
          The median letter is <strong>{S.length.median} characters</strong>. A quarter are shorter than {S.length.p25} and a quarter longer than {S.length.p75}. First letters and replies are about the same length.
          Countries with at least 20 letters:
        </p>
        <GuideTable head={['Sender country', 'Median length (characters)', 'Letters']} rows={S.length.byCountry.map(([c, m, n]) => [C[c] ?? c, String(m), String(n)])} />
        <p>
          Character counts depend on the script: Korean packs more meaning into each character than English, so a shorter Korean letter is not a shorter message.
        </p>
      </GuideSection>

      <GuideSection title="When people write">
        <GuideTable
          head={['Local time', 'Share of letters']}
          rows={[
            ['6 a.m. – noon', `${S.time.morning6to12}%`],
            ['Noon – 6 p.m.', `${S.time.afternoon12to18}%`],
            ['6 p.m. – 10 p.m.', `${S.time.evening18to22}%`],
            ['10 p.m. – 2 a.m.', `${S.time.night22to2}%`],
            ['2 a.m. – 6 a.m.', `${S.time.late2to6}%`],
          ]}
        />
        <p>
          The busiest hour is <strong>{hour12(S.time.peakHour)}</strong>, and <strong>{WEEKDAY_EN[BUSY_DAY]}</strong> is the busiest day ({BUSY_PCT}% of letters).
          Weekdays range from {Math.min(...S.time.weekday.slice(0, 5).map(([, p]) => p))}% to {Math.max(...S.time.weekday.slice(0, 5).map(([, p]) => p))}%.
        </p>
      </GuideSection>

      <GuideSection title="How long letters take, and how long replies take">
        <GuideTable
          head={['', 'Median', 'Range', 'Letters']}
          rows={[
            ['Delivery within one country', `${S.delivery.domestic.median} h`, `up to ${S.delivery.domestic.max} h`, String(S.delivery.domestic.n)],
            ['Delivery between countries', `${S.delivery.international.median} h`, `${S.delivery.international.min} – ${S.delivery.international.max} h`, String(S.delivery.international.n)],
            ['From arrival to reply written', `${S.reply.medianHours} h`, `${S.reply.within1h}% within 1 h · ${S.reply.within24h}% within 24 h`, String(S.reply.n)],
          ]}
        />
        <p>
          Delivery is set by distance on purpose (see <Link href="/en/blog/letter-delivery-time-by-distance" className="text-blue-600 underline">delivery times by city</Link>). Reply times only count letters that got a reply.
        </p>
      </GuideSection>

      <GuideSection title="How first letters open">
        <GuideTable
          head={['First word', 'Share of first letters (Latin script)']}
          rows={[
            ['Hello', `${S.openers.latin.hello}%`],
            ['Hi', `${S.openers.latin.hi}%`],
            ['Hey', `${S.openers.latin.hey}%`],
            ['I …', `${S.openers.latin.i}%`],
            ['Dear', `${S.openers.latin.dear}%`],
          ]}
        />
        <p>
          Almost half of these first letters ({S.openers.latin.hello + S.openers.latin.hi + S.openers.latin.hey}%) open with Hello, Hi or Hey, which is one reason a first line that starts with a scene stands out. Ideas:{' '}
          <Link href="/en/blog/how-to-start-penpal" className="text-blue-600 underline">30 first lines for a pen pal letter</Link>.
        </p>
      </GuideSection>

      <GuideSection title="How this was counted">
        <p>
          Source: Lettie&apos;s own database, queried on {S.asOf}. {S.letters} letters written by people between {PERIOD}: letters in conversations and letters released for strangers to pick up.
          Letters by the app&apos;s AI characters, developer and test accounts, deleted letters and accounts without a valid country are excluded. Only the first 60 characters of first letters
          were read, by a script, to count first words; no letter text is published.
        </p>
        <p>
          Writing times use the sender&apos;s local time, so only countries with a single time zone are counted ({S.time.sample} letters). Delivery times cover letters written since Lettie 2.0
          (15 September 2026). The community is small, so treat these as a snapshot; this page is updated as it grows. Where the letters go is on the{' '}
          <Link href="/en/letter-map" className="text-blue-600 underline">letter map</Link>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}

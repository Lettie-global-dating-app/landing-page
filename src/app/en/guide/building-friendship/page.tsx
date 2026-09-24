import { koEnAlternates } from '@/i18n/config';
import { Heart, Clock, Link2, Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import GuideArticle, { GuideSection, GuideTable, GuideCallout } from '@/components/GuideArticle';

const UPDATED = '2026-08-28';

export const metadata: Metadata = {
  title: { absolute: 'How to Keep a Pen Pal Friendship Going | Lettie' },
  description:
    'Why most pen pal correspondences die between the third and fifth letter, and the habits that carry a friendship past that point and into years.',
  keywords: [
    'how to keep a pen pal',
    'pen pal friendship',
    'long distance friendship',
    'pen pal stopped replying',
    'maintaining correspondence',
  ],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/building-friendship',
    languages: koEnAlternates('/guide/building-friendship'),
  },
  openGraph: {
    title: 'How to Keep a Pen Pal Friendship Going | Lettie',
    description: 'Why correspondences die at the third letter, and the habits that carry them into years.',
    url: 'https://lettie-dating.com/en/guide/building-friendship',
    siteName: 'Lettie',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://lettie-dating.com/lettie-og-image.png', width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'Why do pen pal friendships stop after a few letters?',
    a: 'Because the introductions run out. The first two letters have obvious content — who you are, where you live, what you do. By the third, both people have to invent a reason to write, and without a running subject or a reply rhythm most correspondences end there.',
  },
  {
    q: 'How often should I write to a pen pal?',
    a: 'Consistency matters more than frequency. A reliable letter every week sustains a friendship better than four letters in one week followed by a month of silence, because the other person can build the correspondence into their routine.',
  },
  {
    q: 'What do I write about once the introductions are over?',
    a: 'Keep one running thread — a book, a recipe, a season, a project, a city you are both curious about. A continuing subject means neither person ever starts from a blank page, which is the actual cause of most abandoned correspondences.',
  },
  {
    q: 'My pen pal stopped replying. Should I write again?',
    a: 'One short follow-up after two or three weeks is reasonable and often works, because most silences are ordinary life rather than rejection. If there is no answer to that, let it go without a second follow-up.',
  },
  {
    q: 'Can an online pen pal become a real friend?',
    a: 'Yes, and correspondence has a structural advantage: it selects for people who will spend time on you, and it builds understanding before appearance or convenience enters. Many pen pal friendships outlast local friendships formed in the same period.',
  },
];

export default function BuildingFriendshipPage() {
  return (
    <GuideArticle
      locale="en"
      path="/guide/building-friendship"
      title="How to Keep a Pen Pal Friendship Going"
      subtitle="Why correspondences die at the third letter, and what carries them past it"
      accent="from-rose-400 to-rose-600"
      icon={<Heart className="w-8 h-8" />}
      updated={UPDATED}
      faqs={FAQS}
      answer={
        <>
          Most pen pal correspondences end between the <strong>third and fifth letter</strong>, when the
          introductions run out and neither person has established a rhythm. What carries a friendship past that
          point is not better writing — it is a running subject and a predictable reply schedule.
        </>
      }
    >
      <GuideSection title="The third-letter problem" icon={<Clock className="w-6 h-6 text-rose-500" />}>
        <p>
          The first two letters write themselves. There is a person you know nothing about, so everything is
          new: where you live, what you do, why you signed up. The content is supplied by the situation.
        </p>
        <p>
          By the third letter that supply is gone. Both people now have to <em>choose</em> something to say, and
          choosing is much harder than answering. This is the single point at which most correspondences end,
          and it is almost never about the other person losing interest.
        </p>
        <GuideTable
          head={['Letter', 'What supplies the content', 'Risk']}
          rows={[
            ['1–2', 'Introductions; everything is new', 'Low — the situation writes the letter'],
            ['3–5', 'Nothing automatic; you must choose a subject', 'Highest — most correspondences end here'],
            ['6–15', 'Shared history and running threads', 'Low — you now have things to continue'],
            ['16+', 'The friendship itself', 'Low — silence becomes a pause, not an ending'],
          ]}
        />
      </GuideSection>

      <GuideSection title="Three habits that carry it through" icon={<Link2 className="w-6 h-6 text-rose-500" />}>
        <GuideCallout title="What sustained correspondences have in common">
          <p>
            <strong>A running thread.</strong> One continuing subject you both return to — a book you are
            reading in parallel, a recipe swap, the progress of a season in two hemispheres, a project one of
            you is building. It is the difference between a blank page and a bookmark.
          </p>
          <p>
            <strong>A rhythm rather than inspiration.</strong> Decide roughly how often you write and hold to it.
            A dependable weekly letter builds a friendship faster than an occasional brilliant one, because
            reliability is what lets someone else invest.
          </p>
          <p>
            <strong>Answer the last question first.</strong> Opening with a direct answer to what they asked
            proves the letter was read and removes the blank-page problem for you at the same time.
          </p>
        </GuideCallout>
      </GuideSection>

      <GuideSection title="What deepens a correspondence" icon={<Sparkles className="w-6 h-6 text-rose-500" />}>
        <p>
          There is a predictable progression in letters that become friendships. Early letters describe
          circumstances: where you live, what you do. Later letters describe reactions: what you thought about
          something, what annoyed you, what you are unsure about.
        </p>
        <p>
          The shift from circumstances to reactions is what turns correspondence into friendship, and it usually
          has to be started by one person. Saying something slightly unresolved — a decision you are stuck on,
          a thing you changed your mind about — gives the other person permission to do the same.
        </p>
        <p>
          This is where letters have an advantage over messaging. A letter is read once, in full, by someone who
          chose to sit down with it. That is a different kind of attention than a notification receives, and
          people write differently into it.
        </p>
      </GuideSection>

      <GuideSection title="When someone stops replying">
        <p>
          Silence in correspondence is usually ordinary life: exams, work, illness, a bad month. Because letters
          are slower than messages, a two-week gap carries none of the meaning a two-week gap in chat would.
        </p>
        <GuideTable
          head={['Situation', 'Reasonable response']}
          rows={[
            ['No reply for 1–2 weeks', 'Nothing. This is a normal letter interval'],
            ['No reply for 3+ weeks', 'One short, low-pressure note. No guilt, no questions about the silence'],
            ['No reply to the follow-up', 'Let it go. A second follow-up puts the other person in debt'],
            ['They return after months', 'Continue as if it were normal — because it is'],
          ]}
        />
        <p>
          A correspondence that ends is not a failure of yours. Most people write to several correspondents and
          keep one or two; that ratio is normal and says nothing about the letters you sent.
        </p>
      </GuideSection>

      <GuideSection title="Distance as a feature">
        <p>
          Long-distance friendship is usually framed as a compromised version of the local kind. Correspondence
          suggests otherwise. A pen pal cannot meet you for convenience, cannot be a friend by proximity, and
          gains nothing socially from knowing you. The only reason the friendship exists is that both people
          keep choosing to spend attention on it.
        </p>
        <p>
          That filter is why pen pal friendships often outlast local ones formed in the same period, and why
          people describe correspondents as knowing things about them that nearby friends do not.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}

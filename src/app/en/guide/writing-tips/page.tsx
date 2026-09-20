import Link from 'next/link';
import { koEnAlternates } from '@/i18n/config';
import { BookOpen, PenLine, MessageCircleQuestion, Repeat } from 'lucide-react';
import { Metadata } from 'next';
import GuideArticle, { GuideSection, GuideTable, GuideCallout } from '@/components/GuideArticle';

const UPDATED = '2026-08-28';

export const metadata: Metadata = {
  title: 'What to Write in a Pen Pal Letter - Writing Tips | Lettie',
  description:
    'What to write in your first pen pal letter, how long it should be, and the question habit that keeps a correspondence alive past the third exchange.',
  keywords: [
    'what to write in a pen pal letter',
    'first pen pal letter',
    'pen pal letter examples',
    'letter writing tips',
    'how to write a pen pal',
  ],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/writing-tips',
    languages: koEnAlternates('/guide/writing-tips'),
  },
  openGraph: {
    title: 'What to Write in a Pen Pal Letter - Writing Tips | Lettie',
    description:
      'What to write in your first letter, how long it should be, and the habit that keeps a correspondence alive.',
    url: 'https://lettie-dating.com/en/guide/writing-tips',
    siteName: 'Lettie',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://lettie-dating.com/lettie-og-image.png', width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'What should I write in my first pen pal letter?',
    a: 'Write three things: one specific detail about your daily life, one thing you noticed in their profile, and one open question for them. Keep the first letter to 150–300 words. Longer first letters get fewer replies because they leave the reader nothing to ask about.',
  },
  {
    q: 'How long should a pen pal letter be?',
    a: 'A first letter works best at 150–300 words. Once a correspondence is established, 300–600 words is a comfortable range. Length matters less than whether the letter ends with something the other person can answer.',
  },
  {
    q: 'Why do my pen pal conversations die after two or three letters?',
    a: 'Almost always because the letters trade summaries instead of specifics. "I like music" cannot be replied to; "I have been relearning a song on guitar for three weeks and still cannot play the bridge" can. End every letter with one genuine question.',
  },
  {
    q: 'What should I avoid writing to a new pen pal?',
    a: 'Avoid your full address, workplace, financial details, and identity documents in early letters. Also avoid interview-style lists of questions with no personal detail of your own, which read as a form rather than a letter.',
  },
  {
    q: 'Do I need perfect grammar to write to a pen pal?',
    a: 'No. Pen pal correspondence is one of the few forms of writing where imperfect grammar carries no penalty, because both people are usually writing outside their first language. On Lettie every letter is also translated across 28 languages, so meaning survives grammar mistakes.',
  },
];

export default function WritingTipsPage() {
  return (
    <GuideArticle
      locale="en"
      path="/guide/writing-tips"
      title="What to Write in a Pen Pal Letter"
      subtitle="How to open, how much to say, and the habit that keeps letters coming back"
      accent="from-purple-400 to-purple-600"
      icon={<BookOpen className="w-8 h-8" />}
      updated={UPDATED}
      faqs={FAQS}
      answer={
        <>
          A first pen pal letter should contain three things: one specific detail from your daily life,
          one thing you noticed about the other person, and one open question. Keep it to{' '}
          <strong>150–300 words</strong>. The most common reason a correspondence dies is not bad writing —
          it is a letter that leaves the reader nothing to answer.
        </>
      }
    >
      <GuideSection title="The three-part structure" icon={<PenLine className="w-6 h-6 text-purple-500" />}>
        <p>
          Almost every letter that gets a reply does the same three things, in roughly this order. It is not a
          formula so much as a way of making sure the letter is a conversation rather than an announcement.
        </p>
        <GuideTable
          head={['Part', 'What it does', 'Example opening']}
          rows={[
            [
              'A specific detail',
              'Gives the reader something concrete to picture and react to',
              '“It rained all week here, so I have been reading on the floor by the window.”',
            ],
            [
              'A response to them',
              'Proves you read their profile or last letter, not a template',
              '“You mentioned you cook to unwind — what did you make this week?”',
            ],
            [
              'An open question',
              'Hands the conversation back and gives them a place to start',
              '“What does an ordinary Tuesday look like where you live?”',
            ],
          ]}
        />
        <p>
          The order can change. The third part cannot be skipped. A letter without a question asks the other
          person to invent a reason to write back, and most people will not.
        </p>
      </GuideSection>

      <GuideSection title="Specific beats interesting" icon={<MessageCircleQuestion className="w-6 h-6 text-purple-500" />}>
        <p>
          New writers tend to worry that their life is not interesting enough to describe. This is almost never
          the problem. The problem is that summaries cannot be replied to, while specifics can.
        </p>
        <GuideTable
          head={['Summary (hard to answer)', 'Specific (easy to answer)']}
          rows={[
            ['“I like music.”', '“I have been relearning one song on guitar for three weeks and still cannot play the bridge.”'],
            ['“The food here is good.”', '“There is a stall near my station that only sells one dish, and there is a queue by 11am.”'],
            ['“Work has been busy.”', '“I have been at work late all week, so I have started eating dinner at 10pm like a student again.”'],
            ['“I want to learn English.”', '“I understand films fine but freeze when someone asks me a question in person.”'],
          ]}
        />
        <p>
          The right-hand column is not more interesting than the left. It is more <em>answerable</em>. Every one
          of those sentences hands the reader an obvious thing to say back.
        </p>
      </GuideSection>

      <GuideSection title="What the first letter should not do" icon={<Repeat className="w-6 h-6 text-purple-500" />}>
        <GuideCallout title="Four common first-letter mistakes">
          <p>
            <strong>Writing 800 words.</strong> A long first letter reads as pressure and leaves nothing to
            discover. Save the long letters for the fifth exchange, when they will be welcome.
          </p>
          <p>
            <strong>Asking a list of questions with nothing of your own.</strong> Five questions and no personal
            detail reads like a form. Two questions and one story reads like a person.
          </p>
          <p>
            <strong>Apologising for your English.</strong> It is the most common opening line in international
            correspondence and it sets a defensive tone. Nobody on the other side is grading you.
          </p>
          <p>
            <strong>Sharing identifying details early.</strong> Your full address, workplace, and documents are
            not first-letter material. See the{' '}
            <Link className="text-blue-600 underline" href="/en/guide/safety-privacy">
              safety and privacy guide
            </Link>{' '}
            for what to hold back and for how long.
          </p>
        </GuideCallout>
      </GuideSection>

      <GuideSection title="Writing across a language barrier">
        <p>
          When you and your correspondent do not share a first language, a few habits make a large difference.
          Short sentences survive translation better than long ones. Idioms usually do not — “it is raining cats
          and dogs” becomes nonsense in most languages, while “it has rained every day this week” does not.
        </p>
        <p>
          Concrete nouns travel further than abstract ones. Describing a specific meal, street, or object gives
          the reader something that lands in any language, whereas describing a mood often does not.
        </p>
        <p>
          On Lettie every letter is translated across 28 languages, so you can write in the language you think
          in and be read in the language they think in. That removes the grammar penalty, but it does not remove
          the idiom problem — writing plainly is still the thing that helps most.
        </p>
      </GuideSection>

      <GuideSection title="Keeping it going past the third letter">
        <p>
          Most correspondences that fail do so between the third and fifth exchange, once the introductions are
          finished and neither person has established a rhythm. Three habits carry a correspondence through that
          point.
        </p>
        <GuideTable
          head={['Habit', 'Why it works']}
          rows={[
            [
              'Answer the last question first',
              'It signals the previous letter was read, and removes the blank-page problem for you',
            ],
            [
              'Keep one running thread',
              'A book, a recipe, a season, a project — a continuing subject means you never start from nothing',
            ],
            [
              'Reply on a rhythm, not on inspiration',
              'A predictable reply every few days beats a brilliant reply once a month, because the other person can rely on it',
            ],
          ]}
        />
        <p>
          A correspondence that reaches the fifth letter usually keeps going for months. The work is almost all
          at the beginning.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}

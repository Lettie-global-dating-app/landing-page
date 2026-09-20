import { koEnAlternates } from '@/i18n/config';
import { Languages, GraduationCap, Timer, NotebookPen } from 'lucide-react';
import { Metadata } from 'next';
import GuideArticle, { GuideSection, GuideTable, GuideCallout } from '@/components/GuideArticle';

const UPDATED = '2026-08-28';

export const metadata: Metadata = {
  title: 'Learning a Language With a Pen Pal - Does It Work? | Lettie',
  description:
    'Why writing letters builds different language skills than chat apps, what a pen pal can and cannot teach you, and how to use correspondence alongside study.',
  keywords: [
    'learn a language with a pen pal',
    'language exchange by letter',
    'pen pal language learning',
    'writing practice foreign language',
    'language exchange partner',
  ],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/language-learning',
    languages: koEnAlternates('/guide/language-learning'),
  },
  openGraph: {
    title: 'Learning a Language With a Pen Pal - Does It Work? | Lettie',
    description: 'What letter writing teaches that chat apps cannot, and how to combine it with study.',
    url: 'https://lettie-dating.com/en/guide/language-learning',
    siteName: 'Lettie',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://lettie-dating.com/lettie-og-image.png', width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'Can you actually learn a language through a pen pal?',
    a: 'A pen pal reliably builds written production, vocabulary retention, and cultural register. It does not build listening comprehension or speaking fluency, because neither is exercised. Correspondence works best alongside listening and speaking practice rather than as a replacement for them.',
  },
  {
    q: 'Is writing letters better than a chat app for language learning?',
    a: 'They train different things. Chat trains fast recall of short, simple phrases. Letters train sentence construction, connectives, and paragraph-level structure, because you have time to build a sentence you could not produce in real time. Learners aiming at writing or exams benefit more from letters.',
  },
  {
    q: 'Should I write in my target language or my own?',
    a: 'Write in your target language, and add a short paragraph in your own for the parts you cannot yet express. Writing exclusively in your own language removes the practice; writing exclusively in the target language often makes people give up when the topic gets interesting.',
  },
  {
    q: 'Should my pen pal correct my mistakes?',
    a: 'Only if you ask, and only for patterns rather than every error. Full correction of every sentence discourages most learners and turns a friendship into a lesson. Asking for the two or three mistakes that repeat is more useful than a marked-up letter.',
  },
  {
    q: 'How long does it take to see progress writing to a pen pal?',
    a: 'Learners typically notice easier sentence construction after roughly ten to fifteen exchanges, because the same everyday vocabulary recurs and becomes automatic. Progress in correspondence shows up as writing speed before it shows up as accuracy.',
  },
];

export default function LanguageLearningPage() {
  return (
    <GuideArticle
      locale="en"
      path="/guide/language-learning"
      title="Learning a Language With a Pen Pal"
      subtitle="What correspondence teaches, what it cannot, and how to combine it with study"
      accent="from-sky-400 to-sky-600"
      icon={<Languages className="w-8 h-8" />}
      updated={UPDATED}
      faqs={FAQS}
      answer={
        <>
          A pen pal reliably builds three things: <strong>written production, vocabulary retention, and
          cultural register</strong>. It does not build listening or speaking, because neither is exercised.
          Correspondence is best used alongside listening and speaking practice, not instead of them.
        </>
      }
    >
      <GuideSection title="What letters train that chat does not" icon={<GraduationCap className="w-6 h-6 text-sky-500" />}>
        <p>
          Language exchange usually means a chat app, and chat is genuinely useful — but it trains a narrow
          skill. Because messages are fast and short, the sentences you produce are the ones you can already
          produce instantly. You practise what you know.
        </p>
        <p>
          A letter removes the time pressure. You can attempt a sentence structure you have only read, look up
          the connective you need, and revise before sending. That is the mechanism by which written correspondence
          moves a learner past their conversational ceiling.
        </p>
        <GuideTable
          head={['Skill', 'Chat app', 'Letters']}
          rows={[
            ['Fast recall of set phrases', 'Strong', 'Weak'],
            ['Sentence construction beyond your current level', 'Weak', 'Strong'],
            ['Connectives and paragraph structure', 'Rare', 'Constant'],
            ['Vocabulary retention', 'Moderate', 'Strong — words return across letters in context'],
            ['Listening comprehension', 'None', 'None'],
            ['Speaking fluency', 'None', 'None'],
          ]}
        />
        <p>
          The last two rows are the honest limitation. No amount of writing will train your ear. If your goal is
          conversation, correspondence should sit alongside listening practice, not replace it.
        </p>
      </GuideSection>

      <GuideSection title="How to write when you are not fluent yet" icon={<NotebookPen className="w-6 h-6 text-sky-500" />}>
        <GuideCallout title="A structure that works at any level">
          <p>
            <strong>Write the target-language part first, before looking anything up.</strong> Whatever you can
            produce unaided is your real level, and it is what improves fastest with use.
          </p>
          <p>
            <strong>Then add what you had to look up, marked as such.</strong> Noting the two or three phrases
            you needed help with turns each letter into a short, personal vocabulary list.
          </p>
          <p>
            <strong>Finish in your own language if the topic outgrows you.</strong> Abandoning an interesting
            thought because you cannot yet express it is the most common reason learners quit correspondence.
          </p>
          <p>
            <strong>Ask for pattern corrections, not full corrections.</strong> “Which mistake do I make most?”
            produces something you can act on. A fully marked-up letter usually produces discouragement.
          </p>
        </GuideCallout>
      </GuideSection>

      <GuideSection title="Register: the thing textbooks miss" icon={<Timer className="w-6 h-6 text-sky-500" />}>
        <p>
          Textbooks teach a neutral, slightly formal register that native speakers rarely use with friends.
          Correspondence exposes you to how someone your age actually writes to someone they like — the
          contractions, the abbreviations, the point at which they drop formal address.
        </p>
        <p>
          This matters more in some languages than others. In Korean and Japanese, the choice of speech level is
          not decoration but grammar, and it shifts as a relationship changes. In German, French, and Spanish,
          the moment a correspondent switches to the informal second person is a real social signal. No textbook
          can time that for you; a correspondent demonstrates it.
        </p>
      </GuideSection>

      <GuideSection title="Using translation without wasting the practice">
        <p>
          Translation is often treated as cheating in language learning. In correspondence it is closer to a
          safety net: it determines whether a conversation can continue when your level runs out.
        </p>
        <p>
          On Lettie every letter is translated across 28 languages, which means a beginner and a native speaker
          can hold a real conversation from the first letter rather than after a year of study. The practice
          value depends on how you use it — write your attempt first and treat the translation as the check, and
          you keep the learning. Write only in your own language and let the translation carry everything, and
          you have a friendship rather than a lesson, which is a legitimate thing to want.
        </p>
      </GuideSection>

      <GuideSection title="A realistic timeline">
        <GuideTable
          head={['Stage', 'What usually changes']}
          rows={[
            ['Letters 1–5', 'Vocabulary for your own routine becomes automatic; letters still take a long time to write'],
            ['Letters 6–15', 'Writing speed roughly halves; the same everyday words stop needing lookup'],
            ['Letters 16–30', 'Sentence structure becomes varied; you start writing things you never studied explicitly'],
            ['Beyond 30', 'Register and idiom settle; mistakes become fewer but stop being the main measure of progress'],
          ]}
        />
        <p>
          Progress in correspondence shows up as speed before it shows up as accuracy. If your letters are
          getting faster to write, the method is working even when the mistakes are still there.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}

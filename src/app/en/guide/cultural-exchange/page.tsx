import { koEnAlternates } from '@/i18n/config';
import { Globe, Compass, MessagesSquare, Utensils } from 'lucide-react';
import { Metadata } from 'next';
import GuideArticle, { GuideSection, GuideTable, GuideCallout } from '@/components/GuideArticle';

const UPDATED = '2026-08-28';

export const metadata: Metadata = {
  title: { absolute: 'Cultural Exchange With a Pen Pal: What to Ask | Lettie' },
  description:
    'The questions that produce real answers about another country, the ones that produce brochures, and how to handle disagreement across cultures by letter.',
  keywords: [
    'cultural exchange pen pal',
    'questions to ask a foreign pen pal',
    'learn about another culture',
    'international pen pal questions',
    'cross cultural friendship',
  ],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/cultural-exchange',
    languages: koEnAlternates('/guide/cultural-exchange'),
  },
  openGraph: {
    title: 'Cultural Exchange With a Pen Pal - What to Ask | Lettie',
    description: 'Questions that produce real answers about another country, and ones that produce brochures.',
    url: 'https://lettie-dating.com/en/guide/cultural-exchange',
    siteName: 'Lettie',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://lettie-dating.com/lettie-og-image.png', width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'What questions should I ask a pen pal about their country?',
    a: 'Ask about their own routine rather than their country in general. "What did you eat for breakfast?" produces a real answer; "What is the food like in your country?" produces a tourist brochure. Specific, personal, everyday questions are the ones that yield genuine cultural detail.',
  },
  {
    q: 'How do I avoid stereotyping my pen pal?',
    a: 'Treat them as one person from a place, not a representative of it. Asking someone to explain their entire country puts them in an impossible position, and the answer will either be a generalisation or a correction. Ask what they do, not what people there do.',
  },
  {
    q: 'What topics are risky with an international pen pal?',
    a: 'Politics, religion, and history involving their country are not forbidden, but they need an established relationship first. Territorial disputes, wars within living memory, and contested history carry meanings you may not be able to see from outside.',
  },
  {
    q: 'What if my pen pal says something I strongly disagree with?',
    a: 'Ask a question before making a judgement. Letters have a built-in advantage here: the delay between reading and replying means you never respond at peak reaction, and disagreement expressed as curiosity rarely ends a correspondence.',
  },
  {
    q: 'Do cultural differences make pen pal friendships harder?',
    a: 'They make the early letters slower and the later ones more interesting. The friction is mostly in indirect areas — how directly people decline, how much emotion is normal in writing — rather than in the visible customs people worry about in advance.',
  },
];

export default function CulturalExchangePage() {
  return (
    <GuideArticle
      locale="en"
      path="/guide/cultural-exchange"
      title="Cultural Exchange With a Pen Pal"
      subtitle="The questions that get real answers, and the ones that get a brochure"
      accent="from-amber-400 to-amber-600"
      icon={<Globe className="w-8 h-8" />}
      updated={UPDATED}
      faqs={FAQS}
      answer={
        <>
          To learn what another country is actually like, ask about your correspondent’s{' '}
          <strong>own routine</strong>, not their country. “What did you eat for breakfast?” produces a real
          answer. “What is the food like in your country?” produces a tourist brochure, because nobody can
          summarise a nation without flattening it.
        </>
      }
    >
      <GuideSection title="Small questions, real answers" icon={<Compass className="w-6 h-6 text-amber-500" />}>
        <p>
          The instinct with a foreign correspondent is to ask large questions, because large questions feel
          respectful of the distance. They produce the worst answers. Asked to describe a whole country, anyone
          will either generalise or refuse — and the resulting letter tells you nothing you could not have read
          on a travel site.
        </p>
        <GuideTable
          head={['Produces a brochure', 'Produces a real answer']}
          rows={[
            ['“What is the food like there?”', '“What did you eat for breakfast today?”'],
            ['“What are the people like?”', '“What did you and your friends argue about recently?”'],
            ['“What are your traditions?”', '“What is the last holiday you actually enjoyed, and what did you do?”'],
            ['“How is the education system?”', '“What time did you leave school, and what did you do after?”'],
            ['“Is it expensive there?”', '“What does a coffee cost near you, and is that considered a lot?”'],
          ]}
        />
        <p>
          Everything in the right-hand column is answerable from memory, in one sentence, without speaking for
          anyone else. That is why those questions produce detail while the left-hand column produces summary.
        </p>
      </GuideSection>

      <GuideSection title="Where the real differences show up" icon={<Utensils className="w-6 h-6 text-amber-500" />}>
        <p>
          People prepare for the visible differences — food, festivals, dress — and those turn out to be the
          easy part. The friction in cross-cultural correspondence is almost always in something less visible.
        </p>
        <GuideCallout title="Four differences that actually cause misreadings">
          <p>
            <strong>How directly people decline.</strong> In some correspondence cultures “that sounds
            difficult” is a clear no. In others, only an explicit no is a no. Most early misunderstandings between
            correspondents are a soft refusal read as agreement.
          </p>
          <p>
            <strong>How much emotion belongs in writing.</strong> Warmth that reads as friendly in one language
            can read as excessive in another, and restraint that reads as polite can read as cold. Neither
            person is doing anything wrong.
          </p>
          <p>
            <strong>Reply speed as a signal.</strong> A three-day reply is attentive in one place and slow in
            another. Saying your own habit out loud early — “I usually write on weekends” — removes years of
            silent misreading.
          </p>
          <p>
            <strong>Forms of address.</strong> In Korean and Japanese, speech level is grammar, not decoration.
            In German, French, and Spanish, the shift to the informal second person is a real social event. If
            you are unsure, asking is always safe and usually welcomed.
          </p>
        </GuideCallout>
      </GuideSection>

      <GuideSection title="Difficult topics" icon={<MessagesSquare className="w-6 h-6 text-amber-500" />}>
        <p>
          Politics, religion, and history are not forbidden subjects between correspondents — they are among the
          most rewarding once a relationship exists. What they require is sequence. These subjects go badly in
          letter two and well in letter twenty, for the same reason they go badly with a stranger at a party and
          well with a friend.
        </p>
        <p>
          Some subjects carry weight that is invisible from outside: territorial disputes, wars within living
          memory, contested borders, and the histories of colonisation. Your correspondent may have family
          history in them. Approaching these as questions rather than positions is not timidity; it is the only
          way to learn anything.
        </p>
        <p>
          Letters have a structural advantage here that conversation does not. There is a delay between reading
          something that provokes you and replying to it, so you never respond at peak reaction. Disagreement
          expressed as curiosity — asking how someone came to a view before assessing it — very rarely ends a
          correspondence.
        </p>
      </GuideSection>

      <GuideSection title="What you actually take away">
        <p>
          People expect cultural exchange to deliver facts about a country, and it does deliver some. But the
          durable result is different: after enough letters, a place stops being a category and becomes a person
          you know. News from that country reads differently afterwards, permanently.
        </p>
        <p>
          That is a slower outcome than a list of customs, and it is the one people describe years later. It
          also runs in both directions — your own routine, which seems unremarkable to you, is the foreign
          material your correspondent is learning from.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}

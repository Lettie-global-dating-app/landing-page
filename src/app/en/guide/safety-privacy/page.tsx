import { koEnAlternates } from '@/i18n/config';
import { Shield, AlertTriangle, Lock, Eye } from 'lucide-react';
import { Metadata } from 'next';
import GuideArticle, { GuideSection, GuideTable, GuideCallout } from '@/components/GuideArticle';

const UPDATED = '2026-08-28';

export const metadata: Metadata = {
  title: 'Is Pen Palling Safe? Privacy Rules That Work | Lettie',
  description:
    'What to share and what to hold back with an online pen pal, the warning signs of a romance scam, and when contact details are safe to exchange.',
  keywords: [
    'is pen palling safe',
    'pen pal safety',
    'pen pal scam warning signs',
    'online pen pal privacy',
    'romance scam signs',
  ],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/safety-privacy',
    languages: koEnAlternates('/guide/safety-privacy'),
  },
  openGraph: {
    title: 'Is Pen Palling Safe? Privacy Rules That Work | Lettie',
    description: 'What to share, what to hold back, and how to recognise a romance scam early.',
    url: 'https://lettie-dating.com/en/guide/safety-privacy',
    siteName: 'Lettie',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://lettie-dating.com/lettie-og-image.png', width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'Is having an online pen pal safe?',
    a: 'Writing to a stranger is safe as long as you control what identifies you. The risk in pen pal correspondence is almost never physical; it is disclosure. Keep your full name, address, workplace, financial details, and identity documents out of the correspondence until trust is established, and the remaining risk is small.',
  },
  {
    q: 'What personal information should I never share with a pen pal?',
    a: 'Never share your home address, financial or banking details, identity documents, passwords or verification codes, or intimate photographs. These are the items used in fraud and coercion, and no genuine correspondent needs them.',
  },
  {
    q: 'When is it safe to exchange contact details with a pen pal?',
    a: 'After enough exchanges that you can recognise the person’s writing and their story has stayed consistent. Lettie uses five letters as its default threshold before contact exchange is offered, which is long enough for inconsistencies to surface.',
  },
  {
    q: 'What are the warning signs of a pen pal romance scam?',
    a: 'The reliable signals are: a request for money in any form, unusually fast declarations of love, pressure to move to a private channel immediately, refusal to do a live video call, and a story that changes between letters. Any request for money is disqualifying on its own.',
  },
  {
    q: 'Should I use my real name with a pen pal?',
    a: 'A first name is fine and makes the correspondence feel human. A full legal name is not necessary early on, because a full name plus a city is often enough to locate someone online.',
  },
];

export default function SafetyPrivacyPage() {
  return (
    <GuideArticle
      locale="en"
      path="/guide/safety-privacy"
      title="Is Pen Palling Safe?"
      subtitle="What to share, what to hold back, and how to spot a scam early"
      accent="from-emerald-400 to-emerald-600"
      icon={<Shield className="w-8 h-8" />}
      updated={UPDATED}
      faqs={FAQS}
      answer={
        <>
          Writing to a stranger is safe as long as you control what identifies you. The risk in pen pal
          correspondence is almost never physical — it is <strong>disclosure</strong>. Keep your address,
          workplace, financial details, and identity documents out of the letters until trust is established,
          and the remaining risk is small.
        </>
      }
    >
      <GuideSection title="The disclosure ladder" icon={<Lock className="w-6 h-6 text-emerald-500" />}>
        <p>
          Personal information is not a single switch. It is a ladder, and the useful question is not “can I
          trust this person” but “what does this particular detail let someone do?” Sharing your city is
          harmless. Sharing your street is not.
        </p>
        <GuideTable
          head={['Information', 'When it is reasonable', 'Why']}
          rows={[
            ['First name', 'Immediately', 'Makes correspondence human and identifies almost nobody on its own'],
            ['Country and city', 'Immediately', 'Necessary context for any cross-border friendship'],
            ['Interests, job field, daily routine', 'Early', 'The substance of correspondence; low identifying value in isolation'],
            ['Social media handle', 'After several exchanges', 'Links the correspondence to your real-world network and photos'],
            ['Full name, employer, neighbourhood', 'Only once trust is established', 'Combined, these locate you precisely'],
            ['Home address', 'Only for exchanging physical mail, with care', 'Highest-consequence disclosure; irreversible once given'],
            ['Financial details, ID documents, passwords', 'Never', 'No genuine correspondent has any use for them'],
          ]}
        />
        <p>
          The bottom row has no exceptions. Every legitimate pen pal relationship in the world can be conducted
          without either person seeing the other’s bank details or passport.
        </p>
      </GuideSection>

      <GuideSection title="Warning signs worth acting on" icon={<AlertTriangle className="w-6 h-6 text-emerald-500" />}>
        <p>
          Romance and friendship fraud follows recognisable patterns, because the same scripts are reused at
          scale. These are the signals that reliably distinguish a scam from an awkward but genuine
          correspondent.
        </p>
        <GuideCallout title="Stop and disengage if you see these">
          <p>
            <strong>Any request for money.</strong> Emergencies, customs fees, hospital bills, travel costs to
            visit you, investment opportunities. This is disqualifying on its own, regardless of how plausible
            the story is or how long you have been writing.
          </p>
          <p>
            <strong>Declarations of love within days.</strong> Fraud runs on a schedule because the operator has
            many targets. Genuine attachment across letters is slow, and slowness is the point.
          </p>
          <p>
            <strong>Immediate pressure to move off-platform.</strong> A correspondent who insists on a private
            channel in the first exchanges is usually trying to escape moderation and reporting.
          </p>
          <p>
            <strong>Refusal to ever do a live video call.</strong> A consistent excuse over months, when the
            relationship is otherwise intense, is a strong signal the person is not who they claim.
          </p>
          <p>
            <strong>A story that shifts.</strong> Ages, job, city, or family details that change between letters
            are the most common tell. Rereading old letters is the cheapest fraud check there is.
          </p>
        </GuideCallout>
        <p>
          None of these require certainty before acting. You owe a stranger nothing, and disengaging from a
          correspondence costs you only a correspondence.
        </p>
      </GuideSection>

      <GuideSection title="Why a letter threshold helps" icon={<Eye className="w-6 h-6 text-emerald-500" />}>
        <p>
          Most platforms let two people exchange contact details in the first minute. That speed is precisely
          what fraud depends on, because a scripted operator’s story survives a short conversation but not a
          long one.
        </p>
        <p>
          Lettie does not offer contact exchange until five letters have been exchanged. The threshold is not
          about romance pacing; it is a fraud filter. Five letters is long enough that inconsistencies surface
          and short enough that genuine correspondents are not obstructed.
        </p>
        <p>
          Lettie also starts without profile photographs, so the first impression is what someone writes rather
          than how they look. As a side effect, the most common fraud material — a stolen photograph — carries
          no advantage.
        </p>
      </GuideSection>

      <GuideSection title="Practical habits">
        <GuideTable
          head={['Habit', 'What it protects against']}
          rows={[
            ['Reread old letters before trusting a new claim', 'Shifting stories, the most common fraud tell'],
            ['Reverse image search any photo you are sent', 'Stolen identity photos, which are usually reused'],
            ['Keep the correspondence on-platform until trust is real', 'Loss of moderation, reporting, and evidence'],
            ['Never send photographs you would not want forwarded', 'Sextortion, which relies on material you supplied'],
            ['Report rather than only blocking', 'Blocking protects you; reporting protects the next person'],
          ]}
        />
        <p>
          If you have already sent money or documents, stop contact and report it to your bank and to your
          national fraud authority. Speed matters more than embarrassment — recovery is sometimes possible in
          the first hours and rarely possible later.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}

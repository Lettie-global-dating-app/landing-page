import Link from 'next/link';
import { faqAlternates } from '@/data/localizedFaq';
import Image from 'next/image';
import { ChevronDown, HelpCircle, Mail, Shield, Globe, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Lettie Pen Pal App',
  description: 'Answers to frequently asked questions about Lettie pen pal app usage, letter exchange, safety features, and more',
  keywords: ['Lettie FAQ', 'pen pal app guide', 'letter app questions', 'pen pal help', 'Lettie support'],
  alternates: {
    canonical: 'https://lettie-dating.com/en/faq',
    languages: faqAlternates(),
  },
};

const faqCategories = [
  {
    title: 'Getting Started',
    icon: Mail,
    questions: [
      {
        q: 'What is Lettie?',
        a: 'Lettie is a global pen pal app for exchanging letters with people around the world. Letters fly across a globe and take as long as the distance to arrive, and you can read them translated into 28 languages. Profiles start as pixel characters instead of photos, so the focus is on what someone writes.'
      },
      {
        q: 'How do I get started?',
        a: 'Download the app and create a simple profile to get started right away. Set your interests and languages you want to learn, and you\'ll receive personalized pen pal recommendations.'
      },
      {
        q: 'Is it free to use?',
        a: 'Lettie offers basic features for free. You can write letters, receive them, and reply for free. Premium features are available with an additional subscription if desired.'
      }
    ]
  },
  {
    title: 'Letter Exchange',
    icon: Globe,
    questions: [
      {
        q: 'How often can I send letters?',
        a: 'There\'s no limit on sending letters. You can write and send as many letters as you like. However, we recommend maintaining appropriate intervals considering your pen pal\'s response speed.'
      },
      {
        q: 'What if I receive a letter in another language?',
        a: 'Lettie provides automatic translation. You can easily understand letters written in other languages. If you want to learn the language, you can view both the original and translated versions.'
      },
      {
        q: 'My letter wasn\'t delivered. What should I do?',
        a: 'Please check your network connection. If the problem persists, contact our customer service through the app or email us at ggprgrkjh@naver.com.'
      }
    ]
  },
  {
    title: 'Safety & Privacy',
    icon: Shield,
    questions: [
      {
        q: 'Is my personal information safe?',
        a: 'Lettie prioritizes user privacy. All data is encrypted and stored securely, and personal information is not shared with third parties without user consent.'
      },
      {
        q: 'When can I exchange contact details?',
        a: 'There is no fixed rule — whenever both of you want to. Because letters take real time to travel, you naturally get time to know each other first. Keep contact details inside the app until you are sure, and you can report or block anyone at any time.'
      },
      {
        q: 'I received inappropriate content. How do I report it?',
        a: 'You can immediately report by pressing the report button on any letter or user profile. The Lettie team will review within 24 hours and take appropriate action.'
      },
      {
        q: 'Is there a blocking feature?',
        a: 'Yes, you can block specific users at any time. Blocked users can no longer send letters or view your profile.'
      }
    ]
  },
  {
    title: 'How a letter travels',
    icon: Globe,
    questions: [
      {
        q: 'Why doesn\'t my letter arrive straight away?',
        a: 'Because it actually flies. Lettie computes the delivery time from the real distance between the two cities, so a letter to a nearby country lands in a few hours and one to the other side of the world takes about a day. While you wait you can watch it move across the globe.'
      },
      {
        q: 'What is Discover?',
        a: 'Discover is where letters other people released float as envelopes. On the free plan three new envelopes arrive every eight hours, and you can get more with gems or by watching an advert once a day. Lettie Plus swipes through every letter that is floating.'
      },
      {
        q: 'What are stamps for?',
        a: 'Every country you exchange letters with adds its stamp to your album. You can also draw a random pixel stamp with gems, and the stamp you pick is the one that appears on the letters you send and on the greetings you leave.'
      },
      {
        q: 'Can I make my own character?',
        a: 'Yes. Describe how you look in words — no photograph — and Lettie draws it in the same art style. It costs gems, and Lettie Plus includes one free drawing a week. The 16 default characters are always free to switch between.'
      },
      {
        q: 'What is a stopover greeting?',
        a: 'When your letter passes over another city, people there can leave one line of greeting. The greetings and their stamps arrive together with your letter.'
      },
      {
        q: 'Why do we have to take turns?',
        a: 'By default a conversation takes turns: you write again once your letter has been answered. Once two people have exchanged more than five letters they can unlock unlimited conversation with gems, and Lettie Plus has every conversation unlimited from the start.'
      }
    ]
  },
  {
    title: 'Finding Pen Pals',
    icon: Users,
    questions: [
      {
        q: 'What countries can I pen pal with?',
        a: 'Letters are not limited by country. Discover shows envelopes people in other countries have released; pick one up, reply, and a conversation starts. Every country you exchange letters with is painted on your globe and adds its stamp to your album.'
      },
      {
        q: 'How do I find pen pals with similar interests?',
        a: 'Pick up to three interests in your profile. Letters that share an interest with you come first in Discover, and the Matching tab brings you a few cards a day, drawn from people who have been active recently.'
      },
      {
        q: 'Is there an age restriction?',
        a: 'Lettie is for people aged 16 and above. You set your gender and age in your profile, and you choose who Matching brings you — the opposite gender, the same, or everyone.'
      }
    ]
  }
];

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap(category =>
      category.questions.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    )
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between md:pr-40">
            <Link href="/en" className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <Image
                  src="/lettie-icon.png"
                  alt="Lettie App Icon"
                  className="w-10 h-10 rounded-2xl"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gray-800">Lettie</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/en/blog" className="text-gray-600 hover:text-blue-500 transition-colors">Blog</Link>
              <Link href="/en/faq" className="text-blue-500 font-semibold">FAQ</Link>
              <Link href="/en/guide" className="text-gray-600 hover:text-blue-500 transition-colors">Guide</Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to your questions about using Lettie
          </p>
        </section>

        {/* FAQ Categories */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-8 h-8 text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((item, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {item.q}
                        </h3>
                        <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Have More Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you couldn&apos;t find your answer in the FAQ, feel free to contact us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ggprgrkjh@naver.com"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <Link
                href="/en/guide"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                View Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start with Lettie Today
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Connect with friends worldwide through letters and build genuine relationships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import Link from 'next/link';
import { APP_ID, SITE_ID } from '@/lib/schema';
import { koEnAlternates } from '@/i18n/config';
import Image from 'next/image';
import { Mail, Globe, Shield, Heart, Star, Download, Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pen Pal App Lettie | Letters That Fly Across a Globe, 28 Languages',
  description: 'Looking for a pen pal app? Lettie is a pen pal app for exchanging letters with friends from 150+ countries. Start for free today!',
  keywords: ['pen pal app', 'letter app', 'global pen pal app', 'free pen pal app', 'safe pen pal app', 'pen pal app with translation'],
  alternates: {
    canonical: 'https://lettie-dating.com/en/penpal-app',
    languages: koEnAlternates('/penpal-app'),
  },
};

const features = [
  {
    icon: Shield,
    title: 'Safe Pen Pal App',
    description: 'Start without photos, and report or block anyone at any time'
  },
  {
    icon: Globe,
    title: 'Global Pen Pal App',
    description: 'Connect with friends from 150+ countries worldwide'
  },
  {
    icon: Heart,
    title: 'Genuine Relationships',
    description: 'Focus on inner qualities, not appearances'
  },
  {
    icon: Mail,
    title: 'Convenient Features',
    description: 'All features you need: auto-translation, letter notifications, and more'
  }
];

const comparisons = [
  { feature: 'Safety', lettie: true, others: false },
  { feature: 'Global Network', lettie: true, others: false },
  { feature: 'Free to Use', lettie: true, others: false },
  { feature: 'Auto Translation', lettie: true, others: false },
  { feature: 'Privacy Protection', lettie: true, others: false },
  { feature: 'Delivery time by distance', lettie: true, others: false },
];

export default function PenpalAppPage() {
  // 앱 엔티티는 루트 레이아웃의 @graph 가 한 번만 선언한다. 이 페이지는 그 앱에 관한 페이지다.
  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://lettie-dating.com/en/penpal-app#webpage',
    url: 'https://lettie-dating.com/en/penpal-app',
    inLanguage: 'en',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': APP_ID },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between md:pr-40">
            <Link href="/en" className="flex items-center space-x-3">
              <Image
                src="/lettie-icon.png"
                alt="Lettie Pen Pal App Icon"
                className="w-10 h-10 rounded-2xl"
                width={40}
                height={40}
                priority
              />
              <span className="text-2xl font-bold text-gray-800">Lettie</span>
            </Link>
            <a
              href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Download App
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="font-semibold">2.0 · Slow letters</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            The <span className="text-blue-500">Pen Pal App</span> Where Letters Fly
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Exchange letters with people in 150+ countries<br />
            Letters take as long as the distance, and translate into 28 languages
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              <Download className="w-6 h-6" />
              Download Free
            </a>
          </div>

          {/* App Screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {['sky', 'discover', 'letter', 'post-office', 'character'].map((screen) => (
              <div key={screen} className="relative h-48 md:h-64 bg-white rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={`/v2/app-${screen}.png`}
                  alt={`Lettie Pen Pal App Screenshot`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Why Lettie Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What kind of pen pal app is Lettie?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Pen Pal App Comparison
            </h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Lettie</th>
                    <th className="py-4 px-6 text-center">Other Apps</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-6 font-semibold text-gray-800">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {item.lettie ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {item.others ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* User Stats */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Amazing Numbers of Lettie Pen Pal App
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">28</div>
                <div className="opacity-90">Languages translated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="opacity-90">Connected Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1–24h</div>
                <div className="opacity-90">Delivery, by distance</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">16</div>
                <div className="opacity-90">Free base characters</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Lettie Pen Pal App FAQ
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Q: Is Lettie pen pal app really free?
              </h3>
              <p className="text-gray-600">
                A: Yes, all basic features are free. You can write letters, receive them, and reply for free—all core pen pal app features.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Q: What makes it different from other pen pal apps?
              </h3>
              <p className="text-gray-600">
                A: Lettie starts with pixel characters instead of photos, and letters take real time to travel, so you get to know each other before sharing anything. You can report or block anyone at any time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Q: Who uses this pen pal app?
              </h3>
              <p className="text-gray-600">
                A: Users of all ages from around the world use it for language learning, cultural exchange, making new friends, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Start with Lettie Pen Pal App Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A pen pal app that starts with one letter<br />
              Friends from around the world are waiting for you
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Image src="/lettie-icon.png" alt="Pen Pal App" width={24} height={24} className="rounded" />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Image src="/lettie-icon.png" alt="Pen Pal App" width={24} height={24} className="rounded" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

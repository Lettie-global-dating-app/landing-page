import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, Shield, Heart, Star, Download, Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '펜팔앱 추천 1위 - Lettie | 안전한 글로벌 펜팔 앱',
  description: '펜팔앱을 찾고 계신가요? Lettie는 전 세계 150개국 친구들과 안전하게 편지를 주고받을 수 있는 최고의 펜팔앱입니다. 지금 무료로 시작하세요!',
  keywords: ['펜팔앱', '펜팔 앱', '펜팔 어플', '편지 앱', '글로벌 펜팔앱', '무료 펜팔앱', '안전한 펜팔앱', '펜팔앱 추천'],
  alternates: {
    canonical: 'https://lettie-dating.com/penpal-app',
  },
};

const features = [
  {
    icon: Shield,
    title: '안전한 펜팔앱',
    description: '5통 편지 후 연락처 교환 시스템으로 안전한 펜팔앱 환경 제공'
  },
  {
    icon: Globe,
    title: '글로벌 펜팔앱',
    description: '150개국 이상의 친구들과 연결되는 진정한 글로벌 펜팔앱'
  },
  {
    icon: Heart,
    title: '진실한 관계',
    description: '외모가 아닌 내면으로 시작하는 특별한 펜팔앱'
  },
  {
    icon: Mail,
    title: '편리한 기능',
    description: '자동 번역, 편지 알림 등 펜팔앱에 필요한 모든 기능'
  }
];

const comparisons = [
  { feature: '안전성', lettie: true, others: false },
  { feature: '글로벌 네트워크', lettie: true, others: false },
  { feature: '무료 사용', lettie: true, others: false },
  { feature: '자동 번역', lettie: true, others: false },
  { feature: '프라이버시 보호', lettie: true, others: false },
  { feature: '검증된 사용자', lettie: true, others: false },
];

export default function PenpalAppPage() {
  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Lettie - 최고의 펜팔앱',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: ['iOS', 'Android'],
    description: '전 세계 친구들과 안전하게 편지를 주고받는 최고의 펜팔앱',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '10000'
    }
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
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/lettie-icon.png"
                alt="Lettie 펜팔앱 아이콘"
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
              펜팔앱 다운로드
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="font-semibold">펜팔앱 추천 1위</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            최고의 <span className="text-blue-500">펜팔앱</span> Lettie
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            전 세계 150개국 친구들과 안전하게 편지를 주고받는 펜팔앱<br />
            10만 명이 선택한 믿을 수 있는 펜팔앱입니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              <Download className="w-6 h-6" />
              펜팔앱 무료 다운로드
            </a>
          </div>

          {/* App Screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {['letter-writing', 'conversation-detail', 'letter-feed', 'contact-exchange', 'brand-screen'].map((screen) => (
              <div key={screen} className="relative h-48 md:h-64 bg-white rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={`/${screen}.png`}
                  alt={`펜팔앱 Lettie 스크린샷`}
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
            왜 Lettie가 최고의 펜팔앱인가요?
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
              펜팔앱 비교
            </h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <th className="py-4 px-6 text-left">기능</th>
                    <th className="py-4 px-6 text-center">Lettie 펜팔앱</th>
                    <th className="py-4 px-6 text-center">타 펜팔앱</th>
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
              펜팔앱 Lettie의 놀라운 숫자들
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">100,000+</div>
                <div className="opacity-90">활성 사용자</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="opacity-90">연결된 국가</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000,000+</div>
                <div className="opacity-90">교환된 편지</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5.0</div>
                <div className="opacity-90">평균 평점</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            펜팔앱 Lettie FAQ
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Q: Lettie 펜팔앱은 정말 무료인가요?
              </h3>
              <p className="text-gray-600">
                A: 네, 기본 기능은 모두 무료입니다. 편지 작성, 받기, 답장 등 핵심 펜팔앱 기능을 무료로 이용할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Q: 다른 펜팔앱과 뭐가 다른가요?
              </h3>
              <p className="text-gray-600">
                A: Lettie는 5통 편지 후 연락처 교환 시스템으로 안전성을 보장하고, 사진 없이 시작해 진정한 내면의 소통을 추구하는 펜팔앱입니다.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Q: 어떤 사람들이 이 펜팔앱을 사용하나요?
              </h3>
              <p className="text-gray-600">
                A: 전 세계 다양한 연령대 사용자들이 언어 학습, 문화 교류, 새로운 친구 만들기 등의 목적으로 사용합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              지금 바로 펜팔앱 Lettie를 시작하세요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              많은 사용자가 선택한 최고의 펜팔앱<br />
              전 세계 친구들이 당신을 기다리고 있습니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Image src="/lettie-icon.png" alt="펜팔앱" width={24} height={24} className="rounded" />
                App Store에서 펜팔앱 다운로드
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Image src="/lettie-icon.png" alt="펜팔앱" width={24} height={24} className="rounded" />
                Google Play에서 펜팔앱 다운로드
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
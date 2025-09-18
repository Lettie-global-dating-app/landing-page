import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Globe, Heart, Shield, Users, Mail, ArrowRight, Languages, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '펜팔 완벽 가이드 - 글로벌 친구 만들기의 모든 것 | Lettie',
  description: '펜팔 시작 방법, 편지 작성 팁, 문화 교류 가이드, 언어 학습법 등 성공적인 펜팔을 위한 완벽한 가이드',
  keywords: ['펜팔 가이드', '편지 작성법', '글로벌 친구 만들기', '언어 교환', '문화 교류', '펜팔 에티켓', '국제 친구'],
  alternates: {
    canonical: 'https://lettie-dating.com/guide',
  },
};

const guideCategories = [
  {
    id: 'getting-started',
    title: '펜팔 시작하기',
    description: '첫 펜팔을 시작하는 방법과 기본 에티켓',
    icon: Mail,
    color: 'from-blue-400 to-blue-600',
    guides: [
      '프로필 작성 완벽 가이드',
      '첫 편지 작성법',
      '펜팔 찾기 팁',
      '안전한 펜팔 시작하기'
    ]
  },
  {
    id: 'writing-tips',
    title: '편지 작성 마스터',
    description: '매력적이고 의미 있는 편지 작성 노하우',
    icon: BookOpen,
    color: 'from-purple-400 to-purple-600',
    guides: [
      '흥미로운 주제 선정법',
      '감정 표현하기',
      '스토리텔링 기법',
      '편지 구성과 형식'
    ]
  },
  {
    id: 'cultural-exchange',
    title: '문화 교류',
    description: '다양한 문화 이해하고 교류하기',
    icon: Globe,
    color: 'from-green-400 to-green-600',
    guides: [
      '각국의 편지 문화',
      '문화적 감수성 기르기',
      '명절과 기념일 인사',
      '음식 문화 공유하기'
    ]
  },
  {
    id: 'language-learning',
    title: '언어 학습',
    description: '펜팔을 통한 효과적인 언어 학습법',
    icon: Languages,
    color: 'from-yellow-400 to-yellow-600',
    guides: [
      '언어 교환 파트너 찾기',
      '효과적인 언어 학습 전략',
      '번역 도구 활용법',
      '원어민 표현 배우기'
    ]
  },
  {
    id: 'building-friendship',
    title: '우정 쌓기',
    description: '지속 가능한 펜팔 관계 만들기',
    icon: Heart,
    color: 'from-red-400 to-red-600',
    guides: [
      '신뢰 관계 구축하기',
      '공감과 이해하기',
      '갈등 해결법',
      '장기적 관계 유지 팁'
    ]
  },
  {
    id: 'safety-privacy',
    title: '안전과 프라이버시',
    description: '안전한 펜팔을 위한 필수 지침',
    icon: Shield,
    color: 'from-indigo-400 to-indigo-600',
    guides: [
      '개인정보 보호하기',
      '안전한 소통 가이드',
      '위험 신호 알아차리기',
      'Lettie 안전 기능 활용'
    ]
  }
];

const quickTips = [
  {
    title: '정기적으로 답장하기',
    description: '일정한 주기로 편지를 주고받으면 관계가 더욱 돈독해집니다.'
  },
  {
    title: '사진과 그림 활용하기',
    description: '시각적 요소는 편지를 더욱 생동감 있게 만들어줍니다.'
  },
  {
    title: '질문으로 대화 이어가기',
    description: '상대방에 대한 호기심을 표현하면 대화가 자연스럽게 이어집니다.'
  },
  {
    title: '문화 차이 존중하기',
    description: '서로의 문화를 이해하고 존중하는 태도가 중요합니다.'
  }
];

export default function GuidePage() {
  // HowTo 구조화 데이터
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '성공적인 펜팔 시작하기',
    description: '전 세계 친구들과 편지로 소통하며 의미 있는 관계를 만드는 방법',
    image: 'https://lettie-dating.com/lettie-og-image.png',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'KRW',
      value: '0'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Lettie 앱'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        text: 'Lettie 앱을 다운로드하고 프로필을 작성합니다',
        name: '앱 설치 및 가입'
      },
      {
        '@type': 'HowToStep',
        text: '관심사와 언어를 설정하여 맞춤 펜팔을 찾습니다',
        name: '펜팔 찾기'
      },
      {
        '@type': 'HowToStep',
        text: '첫 편지를 작성하여 대화를 시작합니다',
        name: '첫 편지 작성'
      },
      {
        '@type': 'HowToStep',
        text: '정기적으로 편지를 주고받으며 관계를 발전시킵니다',
        name: '관계 발전'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <Image
                  src="/lettie-icon.png"
                  alt="Lettie 앱 아이콘"
                  className="w-10 h-10 rounded-2xl"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gray-800">Lettie</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">홈</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-500 transition-colors">블로그</Link>
              <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
              <Link href="/guide" className="text-blue-500 font-semibold">가이드</Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            펜팔 완벽 가이드
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            전 세계 친구들과 편지로 소통하며<br />
            의미 있는 관계를 만들어가는 모든 방법
          </p>
        </section>

        {/* Guide Categories Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guideCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {category.guides.map((guide, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{guide}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/guide/${category.id}`}
                      className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all"
                    >
                      자세히 보기 <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              펜팔 성공을 위한 꿀팁
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Lettie로 펜팔 시작하기 4단계
            </h2>
            <div className="space-y-8">
              {[
                { step: 1, title: '프로필 설정', desc: '나를 표현하는 매력적인 프로필을 작성하세요', icon: Users },
                { step: 2, title: '펜팔 찾기', desc: '관심사가 맞는 전 세계 친구를 찾아보세요', icon: Globe },
                { step: 3, title: '편지 작성', desc: '진심을 담은 첫 편지로 대화를 시작하세요', icon: Mail },
                { step: 4, title: '우정 발전', desc: '꾸준한 소통으로 진정한 친구가 되어보세요', icon: Heart }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                    <Icon className="w-8 h-8 text-blue-500 flex-shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              펜팔 팁과 소식 받기
            </h2>
            <p className="text-lg mb-8 opacity-95">
              매주 펜팔 가이드와 Lettie 업데이트를 이메일로 받아보세요
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="submit"
                className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                구독하기
              </button>
            </form>
          </div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              지금 바로 펜팔을 시작하세요
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              가이드를 읽으셨다면, 이제 실제로 시작해볼 시간입니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                App Store에서 다운로드
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Google Play에서 다운로드
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
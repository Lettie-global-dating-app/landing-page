import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp, HelpCircle, Mail, Shield, Globe, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - 자주 묻는 질문 | Lettie 펜팔 앱',
  description: 'Lettie 펜팔 앱 사용법, 편지 교환 방법, 안전 기능 등에 대한 자주 묻는 질문과 답변',
  keywords: ['Lettie FAQ', '펜팔 앱 사용법', '편지 앱 질문', '펜팔 가이드', 'Lettie 도움말'],
  alternates: {
    canonical: 'https://lettie-dating.com/faq',
  },
};

const faqCategories = [
  {
    title: '시작하기',
    icon: Mail,
    questions: [
      {
        q: 'Lettie는 어떤 앱인가요?',
        a: 'Lettie는 전 세계 사람들과 편지를 주고받으며 진실한 관계를 만들어가는 글로벌 펜팔 앱입니다. 사진 없이 시작하여 내면에 집중하고, 5통의 편지를 주고받은 후 연락처를 교환할 수 있습니다.'
      },
      {
        q: '어떻게 시작하나요?',
        a: '앱을 다운로드하고 간단한 프로필을 작성하면 바로 시작할 수 있습니다. 관심사와 배우고 싶은 언어를 설정하면 맞춤형 펜팔을 추천받을 수 있습니다.'
      },
      {
        q: '무료로 사용할 수 있나요?',
        a: 'Lettie는 기본 기능을 무료로 제공합니다. 편지 작성, 받기, 답장하기 등 핵심 기능을 무료로 이용할 수 있으며, 프리미엄 기능을 원하시면 추가 구독이 가능합니다.'
      }
    ]
  },
  {
    title: '편지 교환',
    icon: Globe,
    questions: [
      {
        q: '편지는 얼마나 자주 보낼 수 있나요?',
        a: '편지 전송에는 제한이 없습니다. 원하는 만큼 자유롭게 편지를 작성하고 보낼 수 있습니다. 다만, 상대방의 답장 속도를 고려하여 적절한 간격을 유지하는 것을 권장합니다.'
      },
      {
        q: '다른 언어로 된 편지를 받으면 어떻게 하나요?',
        a: 'Lettie는 자동 번역 기능을 제공합니다. 다른 언어로 작성된 편지도 쉽게 이해할 수 있으며, 언어 학습을 원한다면 원문과 번역문을 함께 볼 수 있습니다.'
      },
      {
        q: '편지가 전달되지 않았어요. 어떻게 하나요?',
        a: '네트워크 연결을 확인해주세요. 문제가 지속되면 앱 내 고객센터로 문의하시거나 ggprgrkjh@naver.com으로 이메일을 보내주세요.'
      }
    ]
  },
  {
    title: '안전 및 프라이버시',
    icon: Shield,
    questions: [
      {
        q: '개인정보는 안전한가요?',
        a: 'Lettie는 사용자의 개인정보 보호를 최우선으로 합니다. 모든 데이터는 암호화되어 저장되며, 개인정보는 사용자의 동의 없이 제3자와 공유되지 않습니다.'
      },
      {
        q: '5통 규칙이 뭔가요?',
        a: '안전한 교류를 위해 5통의 편지를 주고받은 후에만 연락처 교환이 가능합니다. 이는 서로를 충분히 알아가는 시간을 보장하고, 스팸이나 부적절한 접근을 방지합니다.'
      },
      {
        q: '부적절한 내용을 받았어요. 어떻게 신고하나요?',
        a: '각 편지나 사용자 프로필에서 신고 버튼을 눌러 즉시 신고할 수 있습니다. Lettie 팀이 24시간 내에 검토하여 적절한 조치를 취합니다.'
      },
      {
        q: '차단 기능이 있나요?',
        a: '네, 언제든지 특정 사용자를 차단할 수 있습니다. 차단된 사용자는 더 이상 편지를 보낼 수 없으며, 프로필도 볼 수 없습니다.'
      }
    ]
  },
  {
    title: '펜팔 찾기',
    icon: Users,
    questions: [
      {
        q: '어떤 나라 사람들과 펜팔할 수 있나요?',
        a: 'Lettie는 전 세계 150개국 이상의 사용자들이 활동하고 있습니다. 특정 국가나 언어를 선택하여 펜팔을 찾을 수도 있고, 랜덤으로 매칭받을 수도 있습니다.'
      },
      {
        q: '관심사가 비슷한 펜팔을 어떻게 찾나요?',
        a: '프로필에서 관심사를 설정하면 AI가 비슷한 관심사를 가진 펜팔을 추천해드립니다. 음악, 영화, 스포츠, 여행 등 다양한 카테고리에서 선택할 수 있습니다.'
      },
      {
        q: '나이 제한이 있나요?',
        a: 'Lettie는 만 17세 이상부터 이용 가능합니다. 미성년자 보호를 위해 연령 확인 절차를 거치며, 연령대별 매칭 옵션을 제공합니다.'
      }
    ]
  }
];

export default function FAQPage() {
  // FAQPage 구조화 데이터
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

      {/* Header */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
              <Link href="/faq" className="text-blue-500 font-semibold">FAQ</Link>
              <Link href="/guide" className="text-gray-600 hover:text-blue-500 transition-colors">가이드</Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            자주 묻는 질문
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lettie 사용에 대한 궁금증을 해결해드립니다
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
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              FAQ에서 답을 찾지 못하셨다면, 언제든지 문의해주세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ggprgrkjh@naver.com"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                이메일 문의
              </a>
              <Link
                href="/guide"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                가이드 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              지금 Lettie를 시작하세요
            </h2>
            <p className="text-lg mb-8 opacity-95">
              전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                App Store에서 다운로드
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Google Play에서 다운로드
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
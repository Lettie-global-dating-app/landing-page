import Link from 'next/link';
import { faqAlternates } from '@/data/localizedFaq';
import Image from 'next/image';
import { ChevronDown, HelpCircle, Mail, Shield, Globe, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - 자주 묻는 질문 | Lettie 펜팔 앱',
  description: 'Lettie 펜팔 앱 사용법, 편지 교환 방법, 안전 기능 등에 대한 자주 묻는 질문과 답변',
  keywords: ['Lettie FAQ', '펜팔 앱 사용법', '편지 앱 질문', '펜팔 가이드', 'Lettie 도움말'],
  alternates: {
    canonical: 'https://lettie-dating.com/faq',
    languages: faqAlternates(),
  },
};

const faqCategories = [
  {
    title: '시작하기',
    icon: Mail,
    questions: [
      {
        q: 'Lettie는 어떤 앱인가요?',
        a: 'Lettie는 전 세계 사람들과 편지를 주고받는 글로벌 펜팔 앱입니다. 편지는 지구본 위를 날아가 거리만큼 시간이 걸려 도착하고, 28개 언어로 번역해 읽을 수 있습니다. 사진 대신 픽셀 캐릭터로 시작해 내면에 집중합니다.'
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
        a: '편지를 열면 번역 버튼이 있습니다. 28개 언어로 번역해 보여 주고, 원문과 번역문을 나란히 볼 수 있습니다. 앱 화면도 28개 언어를 지원합니다.'
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
        q: '연락처는 언제 교환할 수 있나요?',
        a: '정해진 규칙은 없습니다. 두 사람이 원할 때 교환하면 됩니다. 다만 편지가 거리만큼 시간이 걸려 오가는 구조라 서로를 알아 갈 시간이 자연스럽게 생깁니다. 확신이 들기 전에는 연락처를 앱 밖으로 내보내지 말고, 불편한 상대는 언제든 신고·차단할 수 있습니다.'
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
    title: '편지가 날아가는 방식',
    icon: Globe,
    questions: [
      {
        q: '편지가 바로 도착하지 않는다던데요?',
        a: '네. 편지는 지구본 위를 실제로 날아갑니다. 두 도시 사이의 거리로 걸리는 시간을 계산해서, 가까운 나라는 몇 시간, 지구 반대편은 하루쯤 걸려 도착합니다. 기다리는 동안 지구본에서 편지가 어디쯤 가고 있는지 볼 수 있습니다.'
      },
      {
        q: '발견은 뭔가요?',
        a: '다른 사람들이 띄운 편지가 봉투로 떠 있는 곳입니다. 무료로 쓰면 8시간마다 봉투 세 장이 새로 오고, 하루 한 번 광고를 보거나 젬을 쓰면 더 받을 수 있습니다. Lettie Plus 는 떠 있는 편지 전체를 넘겨 봅니다.'
      },
      {
        q: '우표는 어디에 쓰나요?',
        a: '편지를 주고받은 나라마다 그 나라 우표가 우표첩에 모입니다. 젬으로 무작위 픽셀 우표를 뽑을 수도 있고, 고른 우표는 내가 보내는 편지와 경유지 인사에 붙습니다.'
      },
      {
        q: '나만의 캐릭터를 만들 수 있나요?',
        a: '사진 없이 글로 생김새를 적으면 같은 그림체로 그려 줍니다. 젬으로 만들 수 있고, Lettie Plus 는 일주일에 한 번 무료입니다. 기본 캐릭터 16종은 언제든 무료로 바꿀 수 있습니다.'
      },
      {
        q: '경유지 인사는 뭔가요?',
        a: '내 편지가 다른 도시 위를 지날 때, 그 도시 사람들이 한 줄씩 인사를 남길 수 있습니다. 편지가 도착하면 지나온 도시들의 인사와 우표가 함께 도착합니다.'
      },
      {
        q: '대화가 번갈아 쓰기라던데요?',
        a: '기본은 번갈아 쓰기입니다. 내가 보낸 편지의 답장을 받아야 다음 편지를 씁니다. 서로 다섯 통 넘게 주고받은 사이는 젬으로 무제한 대화를 열 수 있고, Lettie Plus 는 모든 대화가 처음부터 무제한입니다.'
      }
    ]
  },
  {
    title: '펜팔 찾기',
    icon: Users,
    questions: [
      {
        q: '어떤 나라 사람들과 펜팔할 수 있나요?',
        a: '편지는 나라를 가리지 않습니다. 발견 탭에는 다른 나라 사람들이 띄운 편지가 떠 있고, 마음에 드는 편지를 주워 답장하면 대화가 시작됩니다. 편지를 주고받은 나라는 지구본에 색으로 칠해지고 그 나라의 우표가 우표첩에 모입니다.'
      },
      {
        q: '관심사가 비슷한 펜팔을 어떻게 찾나요?',
        a: '프로필에 관심사를 세 개까지 고르면, 발견에서 관심사가 겹치는 편지가 앞쪽에 보입니다. 매칭 탭에서는 하루에 몇 장씩 카드가 오는데 최근에 활동한 사람 위주로 옵니다.'
      },
      {
        q: '나이 제한이 있나요?',
        a: '만 16세 이상부터 쓸 수 있습니다. 프로필에서 성별과 나이를 정할 수 있고, 매칭에서 만날 상대의 성별(이성·동성·모두)도 고를 수 있습니다.'
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
          <nav className="flex items-center justify-between md:pr-40">
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
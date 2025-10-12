import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, User, Heart, Shield, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '펜팔 시작하기 완벽 가이드 | Lettie',
  description: '첫 펜팔을 시작하는 방법부터 기본 에티켓까지, Lettie와 함께 성공적인 펜팔을 시작하세요',
  keywords: ['펜팔 시작', '첫 편지', '펜팔 프로필', '펜팔 에티켓', 'Lettie 사용법'],
  alternates: {
    canonical: 'https://lettie-dating.com/guide/getting-started',
  },
};

export default function GettingStartedGuidePage() {
  // BreadcrumbList 구조화 데이터
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://lettie-dating.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '가이드',
        item: 'https://lettie-dating.com/guide',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '펜팔 시작하기',
        item: 'https://lettie-dating.com/guide/getting-started',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/lettie-icon.png"
              alt="Lettie"
              className="w-10 h-10 rounded-2xl"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </Link>
          <Link
            href="/guide"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            가이드 메인으로
          </Link>
        </nav>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              펜팔 시작하기
            </h1>
            <p className="text-xl text-gray-600">
              첫 펜팔을 시작하는 방법과 기본 에티켓을 알아보세요
            </p>
          </div>

          <div className="space-y-12">
            {/* 프로필 작성 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-blue-500" />
                프로필 작성 완벽 가이드
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">좋은 프로필의 요소</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>진실된 자기소개:</strong> 꾸미지 않은 진짜 당신의 모습을 보여주세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>관심사 명확히:</strong> 취미, 좋아하는 것들을 구체적으로 적어주세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>펜팔 목적:</strong> 언어 교환, 문화 교류, 친구 만들기 등 목적을 밝혀주세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>언어 능력:</strong> 사용 가능한 언어와 수준을 표시하세요</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">💡 프로필 작성 팁</h3>
                  <p>
                    &ldquo;저는 한국에 사는 28살 직장인입니다&rdquo; 보다는
                    &ldquo;저는 서울에서 그래픽 디자이너로 일하며, 주말에는 카페 탐방과 독립영화 보기를 좋아하는 28살입니다&rdquo;
                    처럼 구체적이고 생동감 있게 작성해보세요.
                  </p>
                </div>
              </div>
            </section>

            {/* 첫 편지 작성법 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-500" />
                첫 편지 작성법
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">1. 따뜻한 인사로 시작하기</h3>
                  <p className="text-gray-600">
                    &ldquo;안녕하세요! 당신의 프로필을 읽고 꼭 편지를 보내고 싶었어요.&rdquo;
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">2. 자연스러운 자기소개</h3>
                  <p className="text-gray-600">
                    간단하면서도 기억에 남을 만한 자기소개를 해주세요. 너무 길지 않게 2-3문장이 적당합니다.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">3. 공통 관심사 언급</h3>
                  <p className="text-gray-600">
                    상대방 프로필에서 발견한 공통 관심사나 흥미로운 점을 언급하면 대화가 자연스럽게 이어집니다.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">4. 질문으로 마무리</h3>
                  <p className="text-gray-600">
                    &ldquo;당신의 나라에서 가장 좋아하는 계절은 언제인가요?&rdquo; 같은 답하기 쉬운 질문으로 대화를 이어가세요.
                  </p>
                </div>
              </div>
            </section>

            {/* 펜팔 찾기 팁 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-500" />
                펜팔 찾기 팁
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">✅ 좋은 펜팔 선택 기준</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 비슷한 관심사를 가진 사람</li>
                    <li>• 활발하게 활동하는 사용자</li>
                    <li>• 프로필이 성실하게 작성된 사람</li>
                    <li>• 편지 스타일이 맞는 사람</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">❌ 피해야 할 신호</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 너무 개인적인 정보를 빨리 요구</li>
                    <li>• 프로필이 불성실하거나 모호함</li>
                    <li>• 답장이 너무 짧고 성의 없음</li>
                    <li>• 부적절한 내용의 편지</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 안전한 펜팔 시작하기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                안전한 펜팔 시작하기
              </h2>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">🔒 안전 수칙</h3>
                <ol className="space-y-3 text-gray-600">
                  <li>
                    <strong>1. 개인정보 보호:</strong> 주소, 전화번호, 금융 정보 등은 절대 초기에 공유하지 마세요
                  </li>
                  <li>
                    <strong>2. 5통 규칙 활용:</strong> Lettie의 5통 편지 후 연락처 교환 시스템을 신뢰하세요
                  </li>
                  <li>
                    <strong>3. 직감 신뢰:</strong> 불편한 느낌이 들면 대화를 중단하고 신고하세요
                  </li>
                  <li>
                    <strong>4. 천천히 진행:</strong> 서두르지 말고 충분히 서로를 알아가세요
                  </li>
                </ol>
              </div>
            </section>

            {/* 다음 단계 */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">다음 단계</h2>
              <p className="mb-6">
                이제 펜팔을 시작할 준비가 되셨나요?
                Lettie에서 전 세계 친구들과 특별한 인연을 만들어보세요!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                  className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow text-center"
                >
                  App Store에서 시작하기
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                  className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow text-center"
                >
                  Google Play에서 시작하기
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guide"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            가이드 메인
          </Link>
          <Link
            href="/guide/writing-tips"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            다음: 편지 작성 마스터
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
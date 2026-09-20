import Link from 'next/link';
import { koEnAlternates } from '@/i18n/config';
import Image from 'next/image';
import { ArrowLeft, Globe, Heart, Users, Calendar, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문화 교류 가이드 - 다양한 문화 이해하기 | Lettie',
  description: '펜팔을 통해 세계 각국의 문화를 이해하고 교류하는 방법. 문화적 감수성을 기르고 글로벌 친구를 만드세요',
  keywords: ['문화 교류', '글로벌 문화', '펜팔 문화', '세계 문화', '국제 교류'],
  alternates: {
    canonical: 'https://lettie-dating.com/guide/cultural-exchange',
    languages: koEnAlternates('/guide/cultural-exchange'),
  },
};

export default function CulturalExchangeGuidePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://lettie-dating.com' },
      { '@type': 'ListItem', position: 2, name: '가이드', item: 'https://lettie-dating.com/guide' },
      { '@type': 'ListItem', position: 3, name: '문화 교류', item: 'https://lettie-dating.com/guide/cultural-exchange' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between md:pr-40">
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
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              문화 교류
            </h1>
            <p className="text-xl text-gray-600">
              다양한 문화를 이해하고 교류하는 펜팔의 즐거움
            </p>
          </div>

          <div className="space-y-12">
            {/* 각국의 편지 문화 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-green-500" />
                각국의 편지 문화
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🇯🇵 일본</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 계절 인사를 매우 중요하게 생각합니다</li>
                    <li>• 정중한 표현과 겸손한 태도를 선호합니다</li>
                    <li>• 서중견문(여름), 연하장(새해) 문화가 있습니다</li>
                    <li>• 상대방을 배려하는 표현을 자주 사용합니다</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🇺🇸 미국</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 캐주얼하고 친근한 어조를 선호합니다</li>
                    <li>• 직접적이고 솔직한 표현을 사용합니다</li>
                    <li>• 개인적인 경험과 의견 공유를 좋아합니다</li>
                    <li>• 유머와 농담을 자연스럽게 섞습니다</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🇫🇷 프랑스</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 예술적이고 감성적인 표현을 즐깁니다</li>
                    <li>• 철학적 주제나 깊은 대화를 선호합니다</li>
                    <li>• 격식 있는 인사말로 시작합니다</li>
                    <li>• 문학, 예술, 음식 이야기를 좋아합니다</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🇧🇷 브라질</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 매우 따뜻하고 친근한 인사를 합니다</li>
                    <li>• 가족과 친구 이야기를 자주 나눕니다</li>
                    <li>• 감정 표현이 풍부하고 열정적입니다</li>
                    <li>• 축제와 음악, 춤 문화를 공유합니다</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">💡 문화별 편지 작성 팁</h3>
                <p className="text-gray-600">
                  각 나라의 문화적 특성을 이해하되, 상대방 개인의 성향도 중요합니다.
                  처음에는 격식을 갖춰 시작하고, 점차 상대방의 스타일에 맞춰가세요.
                  문화적 차이는 대화의 좋은 주제가 될 수 있습니다!
                </p>
              </div>
            </section>

            {/* 문화적 감수성 기르기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-green-500" />
                문화적 감수성 기르기
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">존중과 이해의 자세</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>판단하지 말고 이해하기:</strong> &ldquo;우리나라와 다르네&rdquo;가 아닌 &ldquo;흥미롭네, 더 알고 싶어&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>호기심 갖기:</strong> 왜 그런 문화가 생겼는지 배경을 물어보세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>공통점 찾기:</strong> 차이점보다 공통점에서 연결고리를 찾아보세요</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">⚠️ 주의해야 할 주제들</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">민감한 주제</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 정치적 견해 강요</li>
                        <li>• 종교적 신념 비판</li>
                        <li>• 역사적 갈등</li>
                        <li>• 민족/인종 관련 편견</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">대신 이런 접근을</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• &ldquo;당신 나라에서는 어떻게 생각해?&rdquo;</li>
                        <li>• &ldquo;그 문화에 대해 더 알려줘&rdquo;</li>
                        <li>• &ldquo;나는 이렇게 배웠는데...&rdquo;</li>
                        <li>• &ldquo;서로 다른 점이 흥미로워&rdquo;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 명절과 기념일 인사 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-green-500" />
                명절과 기념일 인사
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🎉 세계의 주요 명절</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-1">서양</h4>
                      <ul className="space-y-0.5 text-gray-600">
                        <li>• 크리스마스 (12/25)</li>
                        <li>• 새해 (1/1)</li>
                        <li>• 부활절 (3-4월)</li>
                        <li>• 추수감사절 (11월)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-1">동양</h4>
                      <ul className="space-y-0.5 text-gray-600">
                        <li>• 설날 (음력 1/1)</li>
                        <li>• 추석 (음력 8/15)</li>
                        <li>• 단오 (음력 5/5)</li>
                        <li>• 중추절 (중국)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-700 mb-1">기타</h4>
                      <ul className="space-y-0.5 text-gray-600">
                        <li>• 라마단 (이슬람)</li>
                        <li>• 디왈리 (인도)</li>
                        <li>• 하누카 (유대)</li>
                        <li>• 송크란 (태국)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">💌 명절 인사 예시</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="italic bg-white rounded-lg p-3">
                      &ldquo;다음 주가 추수감사절이라고 들었어요! 가족들과 특별한 계획이 있나요?&rdquo;
                    </p>
                    <p className="italic bg-white rounded-lg p-3">
                      &ldquo;라마단 기간이라고 들었어요. 건강 잘 챙기시고, 의미 있는 시간 보내세요.&rdquo;
                    </p>
                    <p className="italic bg-white rounded-lg p-3">
                      &ldquo;설날이 다가오네요! 한국의 설날 전통에 대해 알려주실래요?&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 음식 문화 공유하기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-500" />
                음식 문화 공유하기
              </h2>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🍜 음식으로 문화 나누기</h3>
                  <p className="text-gray-600 mb-4">
                    음식은 문화를 가장 쉽고 재미있게 공유할 수 있는 주제입니다.
                    서로의 일상 음식부터 특별한 날 먹는 음식까지, 다양한 이야기를 나눠보세요!
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-purple-700 mb-2">공유하면 좋은 것들</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 오늘 먹은 점심 메뉴</li>
                        <li>• 가장 좋아하는 음식</li>
                        <li>• 집에서 만든 요리 사진</li>
                        <li>• 특별한 날 먹는 음식</li>
                        <li>• 간단한 레시피 교환</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-purple-700 mb-2">대화 시작 질문</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• &ldquo;아침은 보통 뭘 먹어?&rdquo;</li>
                        <li>• &ldquo;너희 나라 대표 음식은?&rdquo;</li>
                        <li>• &ldquo;이 요리 만들어본 적 있어?&rdquo;</li>
                        <li>• &ldquo;특별한 날 먹는 음식이 있어?&rdquo;</li>
                        <li>• &ldquo;길거리 음식 좋아해?&rdquo;</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🥘 레시피 교환 팁</h3>
                  <ol className="space-y-2 text-gray-600">
                    <li>1. 간단하고 구하기 쉬운 재료의 요리부터 시작</li>
                    <li>2. 단계별로 명확하게 설명하고 사진 첨부</li>
                    <li>3. 현지에서 구하기 어려운 재료는 대체품 제안</li>
                    <li>4. 만들어본 후기와 사진을 서로 공유</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 문화 교류 활동 아이디어 */}
            <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">문화 교류 활동 아이디어</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">📸 포토 챌린지</h3>
                  <ul className="text-sm space-y-1 opacity-95">
                    <li>• 하루 일상 사진 교환</li>
                    <li>• 동네 풍경 공유</li>
                    <li>• 계절별 변화 기록</li>
                    <li>• 전통 의상 소개</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">🎵 문화 공유</h3>
                  <ul className="text-sm space-y-1 opacity-95">
                    <li>• 좋아하는 음악 추천</li>
                    <li>• 영화/드라마 소개</li>
                    <li>• 책 교환 독서</li>
                    <li>• 전통 게임 설명</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">🎓 언어 교환</h3>
                  <ul className="text-sm space-y-1 opacity-95">
                    <li>• 하루 한 단어 가르치기</li>
                    <li>• 속담이나 관용구 설명</li>
                    <li>• 간단한 인사말 배우기</li>
                    <li>• 재미있는 표현 공유</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">🌍 가상 여행</h3>
                  <ul className="text-sm space-y-1 opacity-95">
                    <li>• 동네 명소 소개</li>
                    <li>• 가상 도시 투어</li>
                    <li>• 숨은 맛집 추천</li>
                    <li>• 여행 팁 공유</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guide/writing-tips"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            이전: 편지 작성 마스터
          </Link>
          <Link
            href="/guide/language-learning"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            다음: 언어 학습
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
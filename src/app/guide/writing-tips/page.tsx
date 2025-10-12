import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, PenTool, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '편지 작성 마스터 가이드 | Lettie',
  description: '매력적이고 의미 있는 편지 작성법을 배워보세요. 흥미로운 주제 선정부터 감정 표현까지 완벽 가이드',
  keywords: ['편지 작성법', '펜팔 편지', '편지 쓰기', '감정 표현', '스토리텔링'],
  alternates: {
    canonical: 'https://lettie-dating.com/guide/writing-tips',
  },
};

export default function WritingTipsGuidePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://lettie-dating.com' },
      { '@type': 'ListItem', position: 2, name: '가이드', item: 'https://lettie-dating.com/guide' },
      { '@type': 'ListItem', position: 3, name: '편지 작성 마스터', item: 'https://lettie-dating.com/guide/writing-tips' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              편지 작성 마스터
            </h1>
            <p className="text-xl text-gray-600">
              매력적이고 의미 있는 편지 작성의 모든 노하우
            </p>
          </div>

          <div className="space-y-12">
            {/* 흥미로운 주제 선정법 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-500" />
                흥미로운 주제 선정법
              </h2>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">대화를 이끄는 주제들</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">일상 & 문화</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 오늘 가장 인상 깊었던 순간</li>
                        <li>• 당신 나라의 독특한 문화</li>
                        <li>• 좋아하는 음식과 그 이유</li>
                        <li>• 최근 다녀온 여행지</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">깊이 있는 대화</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 인생의 전환점이 된 사건</li>
                        <li>• 꿈과 목표에 대한 이야기</li>
                        <li>• 가장 소중한 가치관</li>
                        <li>• 영감을 준 책이나 영화</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">💡 주제 선정 팁</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>상대방의 관심사를 기반으로 주제 확장하기</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>계절이나 명절 등 시의적절한 주제 활용하기</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>&apos;만약에&apos; 질문으로 상상력 자극하기</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 감정 표현하기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-purple-500" />
                감정 표현하기
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">진솔한 감정 전달법</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <strong>구체적인 묘사:</strong> &ldquo;기분이 좋았어요&rdquo;보다는
                      &ldquo;마치 구름 위를 걷는 것 같은 기분이었어요&rdquo;처럼 표현해보세요.
                    </p>
                    <p>
                      <strong>오감 활용:</strong> 그때의 소리, 냄새, 촉감 등을 함께 전달하면
                      더욱 생생한 감정이 전달됩니다.
                    </p>
                    <p>
                      <strong>솔직한 마음:</strong> 완벽하지 않아도 괜찮습니다.
                      진실한 마음이 가장 아름다운 편지를 만듭니다.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">긍정적 감정 표현</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 감사함을 구체적으로 표현하기</li>
                      <li>• 상대방의 장점 칭찬하기</li>
                      <li>• 기쁜 일 함께 나누기</li>
                      <li>• 희망과 기대 공유하기</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">어려운 감정 다루기</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 힘든 일도 솔직하게 나누기</li>
                      <li>• 위로와 공감 표현하기</li>
                      <li>• 함께 해결책 찾아가기</li>
                      <li>• 서로 응원하고 격려하기</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 스토리텔링 기법 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <PenTool className="w-6 h-6 text-purple-500" />
                스토리텔링 기법
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">재미있는 이야기 구성법</h3>
                  <ol className="space-y-3 text-gray-600">
                    <li>
                      <strong>1. 도입부 (Hook):</strong> 호기심을 자극하는 첫 문장으로 시작하세요.
                      <div className="mt-1 text-sm italic">&ldquo;오늘 지하철에서 믿을 수 없는 일이 일어났어요...&rdquo;</div>
                    </li>
                    <li>
                      <strong>2. 배경 설정:</strong> 언제, 어디서, 누구와 함께였는지 간단히 설명하세요.
                    </li>
                    <li>
                      <strong>3. 전개와 클라이맥스:</strong> 사건의 핵심을 생생하게 전달하세요.
                    </li>
                    <li>
                      <strong>4. 결말과 교훈:</strong> 이 경험에서 느낀 점이나 배운 점을 공유하세요.
                    </li>
                  </ol>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">✨ 스토리를 빛나게 하는 요소들</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>대화 활용:</strong> 실제 대화를 인용하면 더욱 생동감 있어요</li>
                    <li>• <strong>감각적 묘사:</strong> 그때의 분위기를 오감으로 전달해보세요</li>
                    <li>• <strong>감정의 변화:</strong> 처음과 끝의 감정 변화를 보여주세요</li>
                    <li>• <strong>유머 첨가:</strong> 적절한 유머는 편지를 더욱 즐겁게 만들어요</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 편지 구성과 형식 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-purple-500" />
                편지 구성과 형식
              </h2>
              <div className="space-y-4">
                <div className="border-2 border-purple-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">이상적인 편지 구조</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">인사와 안부</h4>
                        <p className="text-gray-600 text-sm">따뜻한 인사와 상대방의 안부를 묻는 것으로 시작</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">이전 편지에 대한 답변</h4>
                        <p className="text-gray-600 text-sm">상대방의 질문에 답하고 이야기에 반응하기</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">새로운 이야기</h4>
                        <p className="text-gray-600 text-sm">나의 일상, 경험, 생각을 공유</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">질문과 마무리</h4>
                        <p className="text-gray-600 text-sm">대화를 이어갈 질문과 따뜻한 마무리 인사</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">📝 편지 길이 가이드</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>첫 편지:</strong> 200-300자 정도로 부담 없이</li>
                    <li>• <strong>일반 편지:</strong> 300-500자로 충실하게</li>
                    <li>• <strong>깊은 대화:</strong> 500자 이상도 좋아요</li>
                    <li>• <strong>중요한 것:</strong> 길이보다는 진정성!</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 실전 예시 */}
            <section className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">실전 편지 예시</h2>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="mb-3 italic">
                  &ldquo;안녕하세요 Emma! 지난 편지에서 말씀하신 파리의 크리스마스 마켓 이야기 정말 흥미로웠어요.
                  반짝이는 조명들 사이를 걸으며 뱅쇼를 마시는 모습이 그려지네요.
                </p>
                <p className="mb-3 italic">
                  서울도 요즘 겨울 준비로 분주해요. 어제는 첫눈이 내렸는데,
                  아침에 창문을 열자 온 세상이 하얗게 변해있더라고요.
                  커피를 마시며 눈 내리는 걸 한참 바라봤어요.
                </p>
                <p className="italic">
                  프랑스의 겨울은 어떤가요? 당신이 가장 좋아하는 겨울 추억이 있다면 들려주세요!&rdquo;
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guide/getting-started"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            이전: 펜팔 시작하기
          </Link>
          <Link
            href="/guide/cultural-exchange"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            다음: 문화 교류
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
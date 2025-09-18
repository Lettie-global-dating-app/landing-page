import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Languages, BookOpen, MessageCircle, Target, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '언어 학습 가이드 - 펜팔로 외국어 마스터하기 | Lettie',
  description: '펜팔을 통한 효과적인 언어 학습법. 실전 회화부터 문법까지, 자연스럽게 외국어를 익히는 방법',
  keywords: ['언어 학습', '언어 교환', '외국어 공부', '펜팔 언어', '언어 교환 파트너'],
  alternates: {
    canonical: 'https://lettie-dating.com/guide/language-learning',
  },
};

export default function LanguageLearningGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              언어 학습
            </h1>
            <p className="text-xl text-gray-600">
              펜팔을 통한 효과적인 언어 학습 전략
            </p>
          </div>

          <div className="space-y-12">
            {/* 언어 교환 파트너 찾기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-yellow-500" />
                언어 교환 파트너 찾기
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">이상적인 언어 교환 파트너</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>상호 학습 의지:</strong> 서로의 언어를 배우고자 하는 열정이 있는 사람</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>비슷한 언어 수준:</strong> 너무 큰 실력 차이는 대화를 어렵게 만들 수 있어요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>인내심과 이해심:</strong> 실수를 이해하고 친절하게 교정해주는 사람</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>정기적인 소통:</strong> 꾸준히 편지를 주고받을 수 있는 사람</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">프로필에 명시하면 좋은 것</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 현재 언어 수준 (초급/중급/고급)</li>
                      <li>• 학습 목표 (일상회화/비즈니스/시험)</li>
                      <li>• 선호하는 주제 (취미/문화/시사)</li>
                      <li>• 교정 받기 원하는 정도</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">첫 메시지 예시</h4>
                    <p className="text-gray-600 text-sm italic">
                      "안녕하세요! 저는 한국어를 가르치고 영어를 배우고 싶은 대학생입니다.
                      현재 영어는 중급 수준이고, 일상 회화를 더 자연스럽게 하고 싶어요.
                      서로 도우며 언어를 배워갈 수 있으면 좋겠습니다!"
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 효과적인 언어 학습 전략 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-yellow-500" />
                효과적인 언어 학습 전략
              </h2>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">레벨별 학습 방법</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium text-gray-800 mb-1">🌱 초급 (Beginner)</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 간단한 인사와 자기소개로 시작</li>
                        <li>• 일상 생활 단어와 표현 익히기</li>
                        <li>• 짧은 문장으로 천천히 소통</li>
                        <li>• 번역기 활용하되 점차 줄여가기</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium text-gray-800 mb-1">🌿 중급 (Intermediate)</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 다양한 주제로 대화 확장</li>
                        <li>• 관용구와 속담 배우기</li>
                        <li>• 문법 오류 교정 요청하기</li>
                        <li>• 뉴스나 문화 이야기 나누기</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium text-gray-800 mb-1">🌳 고급 (Advanced)</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 복잡한 주제 토론하기</li>
                        <li>• 뉘앙스와 어감 차이 이해</li>
                        <li>• 유머와 은유 표현 사용</li>
                        <li>• 원어민 수준의 자연스러움 추구</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">50/50 규칙 활용하기</h3>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 mb-3">
                      편지의 절반은 학습 중인 언어로, 나머지 절반은 모국어로 작성하는 방법입니다.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3 text-sm">
                      <p className="text-gray-700 mb-2"><strong>예시:</strong></p>
                      <p className="italic text-gray-600">
                        "Hello! How was your weekend? I went to a beautiful park with my friends...
                        (영어로 작성)
                      </p>
                      <p className="italic text-gray-600 mt-2">
                        주말에 간 공원이 정말 아름다웠어요. 벚꽃이 만개해서...
                        (한국어로 작성)"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 번역 도구 활용법 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-yellow-500" />
                번역 도구 활용법
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">현명한 번역기 사용법</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">✅ 올바른 사용</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 모르는 단어 확인용</li>
                        <li>• 작성한 문장 검토용</li>
                        <li>• 문법 구조 이해용</li>
                        <li>• 표현의 자연스러움 체크</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">❌ 피해야 할 사용</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 전체 문장 복사-붙여넣기</li>
                        <li>• 번역기에만 의존하기</li>
                        <li>• 문맥 고려 없이 사용</li>
                        <li>• 학습 없이 결과만 사용</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">💡 추천 학습 도구</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>사전 앱:</strong> 단어의 정확한 의미와 용법 확인</li>
                    <li>• <strong>문법 체커:</strong> Grammarly 등으로 문법 오류 확인</li>
                    <li>• <strong>발음 사전:</strong> Forvo 등으로 원어민 발음 듣기</li>
                    <li>• <strong>예문 검색:</strong> 실제 사용 예시 찾아보기</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 원어민 표현 배우기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Languages className="w-6 h-6 text-yellow-500" />
                원어민 표현 배우기
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">자연스러운 표현 익히기</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-yellow-700 mb-2">일상 표현 노트 만들기</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        펜팔이 사용한 자연스러운 표현을 모아두세요:
                      </p>
                      <div className="bg-gray-50 rounded p-2 text-sm">
                        <p className="text-gray-700">• "That's a bummer" = 아쉽네요</p>
                        <p className="text-gray-700">• "I'm all ears" = 잘 듣고 있어요</p>
                        <p className="text-gray-700">• "It rings a bell" = 어렴풋이 기억나요</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-yellow-700 mb-2">문화적 맥락 이해하기</h4>
                      <p className="text-gray-600 text-sm">
                        단순 번역이 아닌, 그 표현이 사용되는 상황과 뉘앙스를 함께 배우세요.
                        펜팔에게 "이 표현은 언제 사용해?" 라고 물어보는 것도 좋은 방법입니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">실수를 통한 학습</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>실수 환영하기:</strong> "Feel free to correct my mistakes!"</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>교정 요청하기:</strong> "Is this expression natural?"</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>피드백 감사하기:</strong> "Thanks for the correction!"</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 언어 학습 활동 */}
            <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">재미있는 언어 학습 활동</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">📝 일기 교환</h3>
                  <p className="text-sm opacity-95">
                    매일 3-5문장씩 일기를 써서 교환하고, 서로 교정해주기
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">🎯 단어 챌린지</h3>
                  <p className="text-sm opacity-95">
                    매주 주제를 정해 관련 단어 10개씩 가르쳐주기
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">📚 스토리 릴레이</h3>
                  <p className="text-sm opacity-95">
                    번갈아가며 이야기를 이어가며 창의적 글쓰기 연습
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">🎬 미디어 추천</h3>
                  <p className="text-sm opacity-95">
                    영화, 드라마, 팟캐스트를 추천하고 감상 나누기
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">💪 학습 동기 유지 팁</h3>
                <ul className="text-sm space-y-1 opacity-95">
                  <li>• 작은 목표 설정하기 (주 3회 편지 쓰기 등)</li>
                  <li>• 진전 사항 기록하고 축하하기</li>
                  <li>• 펜팔과 함께 언어 학습 목표 공유하기</li>
                  <li>• 실수를 두려워하지 않고 꾸준히 도전하기</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guide/cultural-exchange"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            이전: 문화 교류
          </Link>
          <Link
            href="/guide/building-friendship"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            다음: 우정 쌓기
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
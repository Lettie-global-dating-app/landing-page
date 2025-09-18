import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Users, Sparkles, MessageSquare, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우정 쌓기 가이드 - 지속 가능한 펜팔 관계 | Lettie',
  description: '펜팔과 진정한 우정을 쌓는 방법. 신뢰 구축부터 갈등 해결까지, 오래 지속되는 펜팔 관계의 비결',
  keywords: ['펜팔 우정', '펜팔 관계', '친구 만들기', '신뢰 구축', '장기 펜팔'],
  alternates: {
    canonical: 'https://lettie-dating.com/guide/building-friendship',
  },
};

export default function BuildingFriendshipGuidePage() {
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
            <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              우정 쌓기
            </h1>
            <p className="text-xl text-gray-600">
              지속 가능한 펜팔 관계 만들기의 모든 것
            </p>
          </div>

          <div className="space-y-12">
            {/* 신뢰 관계 구축하기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-red-500" />
                신뢰 관계 구축하기
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">신뢰의 기초 다지기</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>일관성 유지:</strong>
                        <p className="text-sm mt-1">규칙적으로 편지를 주고받으며 안정적인 관계를 형성하세요</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>약속 지키기:</strong>
                        <p className="text-sm mt-1">답장 시기나 약속한 내용을 성실히 이행하세요</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>진실성:</strong>
                        <p className="text-sm mt-1">과장하지 않고 있는 그대로의 모습을 보여주세요</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>개인 경계 존중:</strong>
                        <p className="text-sm mt-1">상대방이 불편해하는 주제는 피하고 프라이버시를 존중하세요</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-pink-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">신뢰를 쌓는 행동</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 이전 편지 내용 기억하고 언급하기</li>
                      <li>• 중요한 날짜 챙기기 (생일, 시험 등)</li>
                      <li>• 어려운 시기에 응원과 지지 보내기</li>
                      <li>• 좋은 소식 함께 축하하기</li>
                      <li>• 실수했을 때 솔직히 사과하기</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">신뢰를 깨는 행동</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 갑자기 연락 끊기</li>
                      <li>• 거짓말이나 과장하기</li>
                      <li>• 비밀 공유한 내용 함부로 다루기</li>
                      <li>• 일방적인 요구만 하기</li>
                      <li>• 상대방 감정 무시하기</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 공감과 이해하기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-red-500" />
                공감과 이해하기
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">깊은 공감 표현하기</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-blue-700 mb-2">공감의 단계</h4>
                      <ol className="space-y-2 text-gray-600 text-sm">
                        <li><strong>1단계:</strong> "그랬구나" - 단순 인지</li>
                        <li><strong>2단계:</strong> "힘들었겠다" - 감정 인식</li>
                        <li><strong>3단계:</strong> "나라도 그 상황에서는 똑같이 느꼈을 거야" - 감정 이입</li>
                        <li><strong>4단계:</strong> "내가 어떻게 도와줄 수 있을까?" - 적극적 지지</li>
                      </ol>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-blue-700 mb-2">공감 표현 예시</h4>
                      <div className="space-y-2 text-gray-600 text-sm italic">
                        <p>"시험에서 좋은 결과를 못 받아서 속상하겠네. 열심히 준비했는데 기대만큼 안 나오면 정말 실망스러울 거야."</p>
                        <p>"새로운 도시에서 적응하는 게 쉽지 않겠다. 모든 게 낯설고 외로울 때도 있을 텐데, 정말 대단해!"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">💡 이해의 폭 넓히기</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>판단 보류:</strong> 상대방의 선택이나 의견을 즉시 판단하지 마세요</li>
                    <li>• <strong>호기심 갖기:</strong> "왜 그렇게 생각하게 됐어?" 같은 질문으로 깊이 이해하기</li>
                    <li>• <strong>차이 인정:</strong> 서로 다른 배경과 경험을 가졌음을 인정하고 존중하기</li>
                    <li>• <strong>적극적 경청:</strong> 편지를 꼼꼼히 읽고 행간의 의미까지 파악하기</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 갈등 해결법 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-red-500" />
                갈등 해결법
              </h2>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">건강한 갈등 해결 과정</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">감정 진정시키기</h4>
                        <p className="text-gray-600 text-sm">화가 난 상태에서 편지 쓰지 않기. 하루 정도 시간을 두고 차분해진 후 작성</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">상황 객관적으로 설명</h4>
                        <p className="text-gray-600 text-sm">"너 때문에"가 아닌 "이런 상황에서 나는 이렇게 느꼈어" 방식으로 표현</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">서로의 입장 이해하기</h4>
                        <p className="text-gray-600 text-sm">상대방의 의도와 나의 해석이 다를 수 있음을 인정</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">함께 해결책 찾기</h4>
                        <p className="text-gray-600 text-sm">앞으로 비슷한 상황을 피하기 위한 방법 함께 논의</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">오해를 푸는 대화법</h3>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm mb-2"><strong>예시:</strong></p>
                    <p className="text-gray-600 text-sm italic">
                      "지난 편지에서 내 이야기에 답변이 없어서 조금 서운했어.
                      혹시 내가 쓴 내용이 불편했거나, 아니면 너무 바빴던 건지 궁금해.
                      우리가 서로를 더 잘 이해할 수 있도록 솔직하게 이야기해줬으면 좋겠어."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 장기적 관계 유지 팁 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-red-500" />
                장기적 관계 유지 팁
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">오래 지속되는 펜팔의 비결</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">관계 발전시키기</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 함께 성장하는 목표 설정</li>
                        <li>• 새로운 활동 함께 도전</li>
                        <li>• 서로의 변화 응원하기</li>
                        <li>• 특별한 프로젝트 진행</li>
                        <li>• 미래 계획 공유하기</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">관계 유지하기</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 정기적인 소통 리듬 찾기</li>
                        <li>• 특별한 날 챙기기</li>
                        <li>• 서프라이즈 편지 보내기</li>
                        <li>• 추억 회상하며 공유하기</li>
                        <li>• 감사 인사 자주 표현</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">단계별 관계 발전</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👋</span>
                      <div>
                        <strong className="text-gray-800">1-3개월:</strong>
                        <span className="text-gray-600 text-sm ml-2">서로 알아가기, 공통 관심사 찾기</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🤝</span>
                      <div>
                        <strong className="text-gray-800">3-6개월:</strong>
                        <span className="text-gray-600 text-sm ml-2">신뢰 쌓기, 깊은 대화 나누기</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💫</span>
                      <div>
                        <strong className="text-gray-800">6-12개월:</strong>
                        <span className="text-gray-600 text-sm ml-2">진정한 친구되기, 서로 의지하기</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌟</span>
                      <div>
                        <strong className="text-gray-800">1년 이상:</strong>
                        <span className="text-gray-600 text-sm ml-2">평생 친구, 실제 만남 계획</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 특별한 활동 제안 */}
                <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">함께하면 좋은 특별 활동</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>📚 같은 책 읽고 독후감 나누기</li>
                      <li>🎬 같은 영화 보고 감상 공유</li>
                      <li>🎯 30일 챌린지 함께 도전</li>
                      <li>📷 일주일 사진 일기 교환</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>🎨 그림 그려서 선물하기</li>
                      <li>🎵 플레이리스트 만들어 공유</li>
                      <li>✉️ 실제 손편지 보내기</li>
                      <li>🎁 작은 선물 교환하기</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guide/language-learning"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            이전: 언어 학습
          </Link>
          <Link
            href="/guide/safety-privacy"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            다음: 안전과 프라이버시
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
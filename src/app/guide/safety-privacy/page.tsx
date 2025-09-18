import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Shield, Lock, AlertTriangle, Eye, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '안전과 프라이버시 가이드 - 안전한 펜팔 | Lettie',
  description: '펜팔을 안전하게 즐기는 방법. 개인정보 보호부터 위험 신호 알아차리기까지, 안전한 펜팔을 위한 필수 가이드',
  keywords: ['펜팔 안전', '개인정보 보호', '온라인 안전', '펜팔 프라이버시', '안전한 소통'],
  alternates: {
    canonical: 'https://lettie-dating.com/guide/safety-privacy',
  },
};

export default function SafetyPrivacyGuidePage() {
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
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              안전과 프라이버시
            </h1>
            <p className="text-xl text-gray-600">
              안전한 펜팔을 위한 필수 지침과 보호 방법
            </p>
          </div>

          <div className="space-y-12">
            {/* 개인정보 보호하기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-indigo-500" />
                개인정보 보호하기
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">🔒 절대 공유하면 안 되는 정보</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>주민등록번호, 여권번호</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>정확한 집 주소</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>계좌번호, 카드번호</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>비밀번호, PIN 번호</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>직장/학교의 구체적 위치</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>가족의 개인정보</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>일정이나 루틴 정보</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">❌</span>
                        <span>민감한 의료 정보</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">✅ 안전하게 공유 가능한 정보</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">초기 단계</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 이름 (닉네임 가능)</li>
                        <li>• 대략적인 지역 (도시 수준)</li>
                        <li>• 나이대</li>
                        <li>• 취미와 관심사</li>
                        <li>• 일반적인 직업 분야</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">관계 발전 후</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 소셜 미디어 계정</li>
                        <li>• 이메일 주소</li>
                        <li>• 메신저 ID</li>
                        <li>• 전화번호 (신중히 결정)</li>
                        <li>• 더 구체적인 개인 이야기</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 안전한 소통 가이드 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-indigo-500" />
                안전한 소통 가이드
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Lettie의 안전 기능 활용하기</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>5통 규칙:</strong>
                        <p className="text-sm mt-1">5통의 편지를 주고받은 후에만 연락처 교환이 가능합니다. 충분히 서로를 알아가세요.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>점진적 프로필 공개:</strong>
                        <p className="text-sm mt-1">사진이 천천히 선명해지는 시스템으로 외모보다 내면에 집중할 수 있습니다.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>신고 및 차단:</strong>
                        <p className="text-sm mt-1">불편한 상황이 발생하면 즉시 신고하고 차단할 수 있습니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">단계별 관계 발전 가이드</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📮</span>
                        <strong className="text-gray-800">1-5통: 탐색 단계</strong>
                      </div>
                      <p className="text-gray-600 text-sm">
                        기본적인 관심사와 일상 공유. 개인정보는 최소한으로 유지
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🤝</span>
                        <strong className="text-gray-800">5통 이후: 신뢰 구축</strong>
                      </div>
                      <p className="text-gray-600 text-sm">
                        더 깊은 대화 시작. 연락처 교환 가능하지만 신중하게 결정
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">💫</span>
                        <strong className="text-gray-800">지속적인 교류: 친구 단계</strong>
                      </div>
                      <p className="text-gray-600 text-sm">
                        충분한 신뢰가 쌓인 후 더 개인적인 정보 공유 고려
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 위험 신호 알아차리기 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-indigo-500" />
                위험 신호 알아차리기
              </h2>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">⚠️ 주의해야 할 레드플래그</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-medium text-gray-800 mb-2">너무 빠른 친밀감</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 첫 편지부터 과도한 애정 표현</li>
                        <li>• 급하게 개인정보 요구</li>
                        <li>• 지나치게 개인적인 질문</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-medium text-gray-800 mb-2">금전적 요구</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 어떤 이유로든 돈을 요구</li>
                        <li>• 선물이나 기프트카드 요청</li>
                        <li>• 투자나 사업 제안</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-medium text-gray-800 mb-2">일관성 없는 정보</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 이전 말과 모순되는 내용</li>
                        <li>• 구체적인 질문 회피</li>
                        <li>• 신원 확인 거부</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-medium text-gray-800 mb-2">압박과 조종</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 죄책감 유발하는 말</li>
                        <li>• 다른 친구와의 교류 제한</li>
                        <li>• 감정적 협박이나 위협</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">대처 방법</h3>
                  <ol className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-yellow-700">1.</span>
                      <span><strong>직감 신뢰하기:</strong> 불편한 느낌이 들면 바로 대화 중단</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-yellow-700">2.</span>
                      <span><strong>증거 보관:</strong> 의심스러운 메시지는 스크린샷 저장</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-yellow-700">3.</span>
                      <span><strong>즉시 신고:</strong> Lettie 신고 기능 활용 또는 고객센터 연락</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-yellow-700">4.</span>
                      <span><strong>차단하기:</strong> 더 이상의 접촉 차단</span>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Lettie 안전 기능 활용 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-indigo-500" />
                Lettie 안전 기능 활용
              </h2>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Lettie가 제공하는 보호 기능</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-indigo-700 mb-2">프라이버시 보호</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 실명 공개 선택권</li>
                        <li>• 프로필 공개 범위 설정</li>
                        <li>• 사진 단계적 공개 시스템</li>
                        <li>• 위치 정보 보호</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-indigo-700 mb-2">안전 도구</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 24시간 신고 시스템</li>
                        <li>• 즉시 차단 기능</li>
                        <li>• AI 기반 위험 감지</li>
                        <li>• 안전 팁 정기 제공</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">긴급 상황 대처</h3>
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <p className="text-gray-700 mb-2"><strong>위협을 받거나 위험을 느낄 때:</strong></p>
                    <ol className="space-y-1 text-gray-600 text-sm">
                      <li>1. 즉시 대화 중단 및 차단</li>
                      <li>2. Lettie 고객센터 신고 (ggprgrkjh@naver.com)</li>
                      <li>3. 심각한 위협의 경우 경찰 신고 (112)</li>
                      <li>4. 모든 증거 자료 보관</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* 안전한 펜팔 체크리스트 */}
            <section className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">안전한 펜팔 체크리스트</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-yellow-300">매일 체크하기</h3>
                  <ul className="space-y-2 text-sm opacity-95">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>개인정보 노출 여부 확인</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>불편한 메시지 즉시 신고</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>의심스러운 요구 거절</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-yellow-300">정기적으로 점검</h3>
                  <ul className="space-y-2 text-sm opacity-95">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>프라이버시 설정 확인</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>차단 목록 관리</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>안전 가이드 재확인</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-center font-semibold">
                  &ldquo;안전은 즐거운 펜팔의 첫걸음입니다. 서로를 존중하며 건강한 관계를 만들어가세요!&rdquo;
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guide/building-friendship"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            이전: 우정 쌓기
          </Link>
          <Link
            href="/guide"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2"
          >
            가이드 메인으로
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
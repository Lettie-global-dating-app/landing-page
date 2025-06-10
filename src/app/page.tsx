import { Mail, Globe, Heart, Shield, Star, Users, ArrowRight, Download} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const appStoreUrl = "https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
  const privacyPolicyUrl = "https://relic-baboon-412.notion.site/Lettie-1fc766a8bb4680458932ea6a238e97b9"
  const termsOfServiceUrl = "https://relic-baboon-412.notion.site/silverithm-13c766a8bb468082b91ddbd2dd6ce45d"
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Lettie App Icon */}
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
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">기능</a>
            <a href="#app-preview" className="text-gray-600 hover:text-blue-500 transition-colors">앱 미리보기</a>
            <a href="#recommended" className="text-gray-600 hover:text-blue-500 transition-colors">추천 대상</a>
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              다운로드
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            전 세계 친구들과 편지로 소통하며
            <span className="text-blue-500 block">진실한 관계를 만들어가는</span>
            글로벌 펜팔 앱
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            전 세계와 연결되는 특별한 경험<br />
            Lettie는 편지를 통해 전 세계 사람들과 진정한 소통을 나누는 새로운 방식의 데이팅앱입니다.<br />
            사진이나 외모가 아닌, 마음과 생각으로 시작하는 특별한 인연을 만나보세요.
          </p>
          
          {/* App Store Rating */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-semibold">5.0</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 text-sm">App Store</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg inline-flex items-center"
            >
              <Download className="mr-2 w-5 h-5" />
              App Store에서 다운로드
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </a>
            <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
              더 알아보기
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">무료 다운로드</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">iOS 13.0+</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">앱 내 구입</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">개발자: junhyeong kim</span>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots Grid */}
      <section id="app-preview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">앱 미리보기</h2>
          {/* 5개의 모바일 스크린샷 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* 1. 편지 작성 화면 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/letter-writing.png" 
                  alt="Lettie 앱의 편지 작성 화면 - 감성적인 편지 작성 인터페이스" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">서두르지 않고 천천히,<br />서로의 진짜 모습을 알아가세요</p>
            </div>

            {/* 2. 대화 상세 화면 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/conversation-detail.png" 
                  alt="Lettie 앱의 대화 상세 화면 - 점진적 프로필 공개 시스템" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">편지를 교환할 때마다<br />상대방의 프로필이 뚜렷해져요</p>
            </div>

            {/* 3. 연락처 교환 완료 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/contact-exchange.png" 
                  alt="Lettie 앱의 연락처 교환 완료 화면 - 5통 편지 후 안전한 연락처 교환" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">5번의 진솔한 편지 후,<br />연락처를 교환해요</p>
            </div>

            {/* 4. 편지 목록 화면 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/letter-feed.png" 
                  alt="Lettie 앱의 편지 목록 화면 - 전 세계 사용자들의 편지 피드" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">마음에 드는 편지들 발견하고<br />의미 있는 대화를 시작하세요</p>
            </div>

            {/* 5. 브랜드 화면 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/brand-screen.png" 
                  alt="Lettie 앱의 브랜드 소개 화면 - 진심이 담긴 편지 문화" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">진심이 담긴 편지<br />시작되는 인연</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Lettie의 특별한 기능</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Mail className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">편지 교환 시스템</h3>
              <p className="text-gray-600">전 세계 사람들과 진심이 담긴 편지를 주고받으며 진정한 소통을 경험하세요</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">점진적 프로필 공개</h3>
              <p className="text-gray-600">편지를 주고받을수록 상대방의 사진이 점점 선명해져 외모가 아닌 마음으로 시작하는 만남</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">안전한 연락처 교환</h3>
              <p className="text-gray-600">5통의 편지로 충분히 알아간 후 안전하고 신뢰할 수 있는 연락처 교환</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">글로벌 문화 교류</h3>
              <p className="text-gray-600">한국, 일본, 미국, 유럽 등 전 세계 사용자들과 다양한 문화를 나누는 소통</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Star className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">젬 시스템</h3>
              <p className="text-gray-600">더 많은 편지를 열어보고 작성할 수 있는 재미있는 포인트 시스템</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Heart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">감성적인 디자인</h3>
              <p className="text-gray-600">편지 쓰기의 아날로그 감성을 살린 아름답고 세련된 사용자 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section id="recommended" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">이런 분들께 추천합니다</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">전 세계 친구들과 진정한 소통을 원하는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">외국어 연습과 문화 교류에 관심 있는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">깊이 있는 대화와 진실한 관계를 추구하는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">새로운 방식의 만남을 경험하고 싶은 분</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-8">
              <Image 
                src="/lettie-icon.png" 
                alt="Lettie 앱 아이콘" 
                className="w-8 h-8 rounded-xl"
                width={32}
                height={32}
                priority
              />
            </div>
            <span className="text-2xl font-bold">Lettie</span>
          </div>
          <div className="text-center text-gray-400 space-y-4">
            <p>© 2025 Lettie Inc. All rights reserved.</p>
            <p>전 세계와 편지로 소통하는 특별한 만남과 인연</p>
            <div className="flex items-center justify-center space-x-6 pt-4 flex-wrap">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                App Store
              </a>
              <a
                href={privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                개인정보 처리방침
              </a>
              <a
                href={termsOfServiceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                서비스 이용약관
              </a>
              <span className="text-gray-500">소셜 네트워킹</span>
              <span className="text-gray-500">개발자: junhyeong kim</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

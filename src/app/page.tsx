import { Mail, Globe, Heart, Shield, Star, Users, ArrowRight, Download} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu'

export default function Home() {
  const appStoreUrl = "https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
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
            <Link href="/blog" className="text-gray-600 hover:text-blue-500 transition-colors">블로그</Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-500 transition-colors">가이드</Link>
            <Link href="/stories" className="text-gray-600 hover:text-blue-500 transition-colors">스토리</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              다운로드
            </a>
          </div>
          <MobileMenu />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <Mail className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">편지로 시작하는 진실한 만남</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            전 세계 친구들과
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              편지로 소통하는
            </span>
            <br />
            <span className="text-gray-800">글로벌 펜팔 앱</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            사진이나 외모가 아닌, 마음과 생각으로 시작하는 특별한 인연.
            <br className="hidden md:block" />
            Lettie에서 전 세계 친구들과 진정한 소통을 경험하세요.
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
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg inline-flex items-center"
            >
              <Download className="mr-2 w-5 h-5" />
              Google Play에서 다운로드
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">무료 다운로드</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">iOS 13.0+ / Android 5.0+</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">앱 내 구입</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">개발자: junhyeong kim</span>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots Grid */}
      <section id="app-preview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">앱 미리보기</h2>
          {/* 6개의 모바일 스크린샷 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {/* 1. 스크린샷 1427 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1427@3x.png"
                  alt="Lettie 앱 스크린샷 1"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">서두르지 않고 천천히,<br />서로의 진짜 모습을 알아가세요</p>
            </div>

            {/* 2. 스크린샷 1428 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1428@3x.png"
                  alt="Lettie 앱 스크린샷 2"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">편지를 교환할 때마다<br />상대방의 프로필이 뚜렷해져요</p>
            </div>

            {/* 3. 스크린샷 1432 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1432@3x.png"
                  alt="Lettie 앱 스크린샷 3"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">5번의 진솔한 편지 후,<br />연락처를 교환해요</p>
            </div>

            {/* 4. 스크린샷 1433 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1433@3x.png"
                  alt="Lettie 앱 스크린샷 4"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">마음에 드는 편지들 발견하고<br />의미 있는 대화를 시작하세요</p>
            </div>

            {/* 5. 스크린샷 1434 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1434@3x.png"
                  alt="Lettie 앱 스크린샷 5"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">전 세계 사람들과<br />진실한 연결을 경험하세요</p>
            </div>

            {/* 6. 스크린샷 1435 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1435@3x.png"
                  alt="Lettie 앱 스크린샷 6"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">진심이 담긴 편지로<br />시작되는 인연</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Lettie의 특별한 기능</h2>
            <p className="text-lg text-gray-600 font-light">편지로 시작하는 새로운 만남의 방식</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100/50">
              <Mail className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">편지 교환 시스템</h3>
              <p className="text-gray-600">전 세계 사람들과 진심이 담긴 편지를 주고받으며 진정한 소통을 경험하세요</p>
            </div>
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-purple-100/50">
              <Shield className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">점진적 프로필 공개</h3>
              <p className="text-gray-600">편지를 주고받을수록 상대방의 사진이 점점 선명해져 외모가 아닌 마음으로 시작하는 만남</p>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-emerald-100/50">
              <Users className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">안전한 연락처 교환</h3>
              <p className="text-gray-600">5통의 편지로 충분히 알아간 후 안전하고 신뢰할 수 있는 연락처 교환</p>
            </div>
            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-amber-100/50">
              <Globe className="w-12 h-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">글로벌 문화 교류</h3>
              <p className="text-gray-600">한국, 일본, 미국, 유럽 등 전 세계 사용자들과 다양한 문화를 나누는 소통</p>
            </div>
            <div className="group bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-rose-100/50">
              <Star className="w-12 h-12 text-rose-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">젬 시스템</h3>
              <p className="text-gray-600">더 많은 편지를 열어보고 작성할 수 있는 재미있는 포인트 시스템</p>
            </div>
            <div className="group bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-violet-100/50">
              <Heart className="w-12 h-12 text-violet-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">감성적인 디자인</h3>
              <p className="text-gray-600">편지 쓰기의 아날로그 감성을 살린 아름답고 세련된 사용자 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Blog Posts Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">펜팔 시작하기 가이드</h2>
          <p className="text-center text-gray-600 mb-12">전 세계 친구들과 소통하는 방법을 알아보세요</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/blog/how-to-start-penpal" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">첫 편지 작성 가이드</h3>
              <p className="text-gray-600 mb-4">성공적인 펜팔을 시작하는 완벽한 첫 편지 작성법</p>
              <span className="text-blue-500 font-semibold">자세히 보기 →</span>
            </Link>
            <Link href="/blog/penpal-culture-guide" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">세계 각국의 편지 문화</h3>
              <p className="text-gray-600 mb-4">나라마다 다른 편지 문화와 글로벌 에티켓 알아보기</p>
              <span className="text-purple-500 font-semibold">자세히 보기 →</span>
            </Link>
            <Link href="/blog/language-exchange-tips" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">언어 교환 팁</h3>
              <p className="text-gray-600 mb-4">펜팔을 통한 효과적인 언어 학습 방법</p>
              <span className="text-green-500 font-semibold">자세히 보기 →</span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold text-lg">
              모든 블로그 포스트 보기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guide Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">완벽한 펜팔을 위한 가이드</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/guide/getting-started" className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl hover:shadow-lg transition-shadow">
              <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">펜팔 시작하기</h3>
                <p className="text-sm text-gray-600">첫 펜팔을 위한 완벽 가이드</p>
              </div>
            </Link>
            <Link href="/guide/writing-tips" className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl hover:shadow-lg transition-shadow">
              <Heart className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">편지 작성 마스터</h3>
                <p className="text-sm text-gray-600">매력적인 편지 쓰는 법</p>
              </div>
            </Link>
            <Link href="/guide/cultural-exchange" className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-teal-100 rounded-xl hover:shadow-lg transition-shadow">
              <Globe className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">문화 교류</h3>
                <p className="text-sm text-gray-600">세계 문화 이해하기</p>
              </div>
            </Link>
            <Link href="/guide/language-learning" className="flex items-start gap-4 p-6 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl hover:shadow-lg transition-shadow">
              <Star className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">언어 학습</h3>
                <p className="text-sm text-gray-600">펜팔로 외국어 마스터하기</p>
              </div>
            </Link>
            <Link href="/guide/building-friendship" className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-50 to-rose-100 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">우정 쌓기</h3>
                <p className="text-sm text-gray-600">지속 가능한 펜팔 관계</p>
              </div>
            </Link>
            <Link href="/guide/safety-privacy" className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl hover:shadow-lg transition-shadow">
              <Shield className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">안전과 프라이버시</h3>
                <p className="text-sm text-gray-600">안전한 펜팔 즐기기</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section id="recommended" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
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

            {/* 주요 페이지 링크 */}
            <div className="flex items-center justify-center space-x-6 pt-2 flex-wrap">
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">블로그</Link>
              <Link href="/guide" className="text-gray-400 hover:text-white transition-colors">가이드</Link>
              <Link href="/stories" className="text-gray-400 hover:text-white transition-colors">스토리</Link>
              <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            </div>

            {/* 앱 다운로드 및 정책 링크 */}
            <div className="flex items-center justify-center space-x-6 pt-2 flex-wrap">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                App Store
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Google Play
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
            </div>

            <div className="pt-2">
              <span className="text-gray-500">소셜 네트워킹 | 개발자: junhyeong kim</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

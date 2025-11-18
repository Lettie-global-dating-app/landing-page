import { Mail, Globe, Heart, Shield, Star, Users, ArrowRight } from 'lucide-react'
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
      <section className="relative container mx-auto px-4 py-24 md:py-32 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-100/40 via-purple-100/40 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide">편지로 시작하는 진실한 만남</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-8 leading-tight tracking-tight animate-fade-in-up animation-delay-100">
            전 세계 친구들과
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent pb-2">
              편지로 소통하는
            </span>
            <br />
            <span className="text-gray-800">글로벌 펜팔 앱</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-up animation-delay-200">
            사진이나 외모가 아닌, <span className="font-medium text-gray-800">마음과 생각</span>으로 시작하는 특별한 인연.
            <br className="hidden md:block" />
            Lettie에서 전 세계 친구들과 <span className="font-medium text-gray-800">진정한 소통</span>을 경험하세요.
          </p>

          {/* App Store Rating */}
          <div className="flex items-center justify-center mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-800 font-bold text-lg">5.0</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-medium">App Store</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center min-w-[240px] justify-center"
            >
              <svg className="w-6 h-6 mr-3 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              App Store
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center min-w-[240px] justify-center"
            >
              <svg className="w-6 h-6 mr-3 fill-current text-green-600" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
              Google Play
            </a>
          </div>

          <div className="text-sm text-gray-500 animate-fade-in-up animation-delay-500">
            <span className="bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full mr-2 border border-gray-100">무료 다운로드</span>
            <span className="bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full mr-2 border border-gray-100">iOS 13.0+ / Android 5.0+</span>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots Grid */}
      <section id="app-preview" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Lettie 미리보기</h2>
            <p className="text-xl text-gray-600 font-light">마음이 통하는 순간을 디자인하다</p>
          </div>

          {/* 6개의 모바일 스크린샷 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
            {[
              { src: "/1427@3x.png", text: "서두르지 않고 천천히,\n서로의 진짜 모습을 알아가세요" },
              { src: "/1428@3x.png", text: "편지를 교환할 때마다\n상대방의 프로필이 뚜렷해져요" },
              { src: "/1432@3x.png", text: "5번의 진솔한 편지 후,\n연락처를 교환해요" },
              { src: "/1433@3x.png", text: "마음에 드는 편지들 발견하고\n의미 있는 대화를 시작하세요" },
              { src: "/1434@3x.png", text: "전 세계 사람들과\n진실한 연결을 경험하세요" },
              { src: "/1435@3x.png", text: "진심이 담긴 편지로\n시작되는 인연" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative w-full max-w-[280px] transition-transform duration-500 group-hover:-translate-y-4">
                  {/* Phone Frame Effect */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] shadow-2xl transform scale-[1.02] translate-y-1"></div>
                  <Image
                    src={item.src}
                    alt={`Lettie 앱 스크린샷 ${index + 1}`}
                    className="relative w-full h-auto rounded-[2.2rem] border-[6px] border-gray-900 z-10"
                    width={390}
                    height={844}
                    loading="lazy"
                  />
                  {/* Reflection/Gloss */}
                  <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-20"></div>
                </div>
                <p className="text-sm text-gray-600 mt-8 text-center font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKSIvPjwvc3ZnPg==')] opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Lettie의 특별한 기능</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              편지 쓰기의 아날로그 감성을<br className="md:hidden" /> 디지털 경험으로 재해석했습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Mail className="w-10 h-10 text-blue-600" />,
                title: "편지 교환 시스템",
                desc: "전 세계 사람들과 진심이 담긴 편지를 주고받으며 진정한 소통을 경험하세요",
                color: "blue"
              },
              {
                icon: <Shield className="w-10 h-10 text-indigo-600" />,
                title: "점진적 프로필 공개",
                desc: "편지를 주고받을수록 상대방의 사진이 점점 선명해져 외모가 아닌 마음으로 시작하는 만남",
                color: "indigo"
              },
              {
                icon: <Users className="w-10 h-10 text-violet-600" />,
                title: "안전한 연락처 교환",
                desc: "5통의 편지로 충분히 알아간 후 안전하고 신뢰할 수 있는 연락처 교환",
                color: "violet"
              },
              {
                icon: <Globe className="w-10 h-10 text-blue-500" />,
                title: "글로벌 문화 교류",
                desc: "한국, 일본, 미국, 유럽 등 전 세계 사용자들과 다양한 문화를 나누는 소통",
                color: "blue"
              },
              {
                icon: <Star className="w-10 h-10 text-indigo-500" />,
                title: "젬 시스템",
                desc: "더 많은 편지를 열어보고 작성할 수 있는 재미있는 포인트 시스템",
                color: "indigo"
              },
              {
                icon: <Heart className="w-10 h-10 text-purple-600" />,
                title: "감성적인 디자인",
                desc: "편지 쓰기의 아날로그 감성을 살린 아름답고 세련된 사용자 경험",
                color: "purple"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${feature.color}-50 group-hover:bg-${feature.color}-100 transition-colors`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Blog Posts Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
      <section id="recommended" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">이런 분들께 추천합니다</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">전 세계 친구들과 진정한 소통을 원하는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">외국어 연습과 문화 교류에 관심 있는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">깊이 있는 대화와 진실한 관계를 추구하는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">새로운 방식의 만남을 경험하고 싶은 분</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200 py-12">
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
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </div>
          <div className="text-center text-gray-600 space-y-4">
            <p className="text-gray-700 font-medium">© 2025 Lettie Inc. All rights reserved.</p>
            <p className="text-gray-600">전 세계와 편지로 소통하는 특별한 만남과 인연</p>

            {/* 주요 페이지 링크 */}
            <div className="flex items-center justify-center space-x-6 pt-2 flex-wrap">
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">블로그</Link>
              <Link href="/guide" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">가이드</Link>
              <Link href="/stories" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">스토리</Link>
              <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">FAQ</Link>
            </div>

            {/* 앱 다운로드 및 정책 링크 */}
            <div className="flex items-center justify-center space-x-6 pt-2 flex-wrap">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                App Store
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Google Play
              </a>
              <a
                href={privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                개인정보 처리방침
              </a>
              <a
                href={termsOfServiceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
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

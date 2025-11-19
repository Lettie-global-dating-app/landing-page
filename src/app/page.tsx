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
      <section className="relative container mx-auto px-4 py-32 md:py-48 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-indigo-100/40 via-purple-100/40 to-transparent rounded-full blur-3xl opacity-60 dark:from-indigo-900/20 dark:via-purple-900/20"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-blue-800/20 dark:mix-blend-normal"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-800/20 dark:mix-blend-normal"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-800/20 dark:mix-blend-normal"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full glass-panel hover:shadow-md transition-all duration-300 animate-fade-in-up">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground/80 tracking-wide">편지로 시작하는 진실한 만남</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in-up animation-delay-100">
            전 세계 친구들과
            <br />
            <span className="inline-block text-gradient pb-2">
              편지로 소통하는
            </span>
            <br />
            <span className="text-foreground">글로벌 펜팔 앱</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-up animation-delay-200">
            사진이나 외모가 아닌, <span className="font-medium text-foreground">마음과 생각</span>으로 시작하는 특별한 인연.
            <br className="hidden md:block" />
            Lettie에서 전 세계 친구들과 <span className="font-medium text-foreground">진정한 소통</span>을 경험하세요.
          </p>

          {/* App Store Rating */}
          <div className="flex items-center justify-center mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center space-x-4 glass-panel rounded-full px-6 py-3">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-foreground font-bold text-lg">5.0</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground font-medium">App Store</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-foreground text-background px-8 py-4 rounded-full text-lg font-semibold hover:bg-foreground/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center min-w-[240px] justify-center glow-effect"
            >
              <svg className="w-6 h-6 mr-3 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              App Store
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background text-foreground border border-border px-8 py-4 rounded-full text-lg font-semibold hover:bg-muted transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center min-w-[240px] justify-center glass-panel"
            >
              <svg className="w-6 h-6 mr-3 fill-current text-green-600" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
              Google Play
            </a>
          </div>

          <div className="text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
            <span className="glass-panel px-4 py-1.5 rounded-full mr-2">무료 다운로드</span>
            <span className="glass-panel px-4 py-1.5 rounded-full mr-2">iOS 13.0+ / Android 5.0+</span>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots Grid */}
      <section id="app-preview" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Lettie 미리보기</h2>
            <p className="text-xl text-muted-foreground font-light">마음이 통하는 순간을 디자인하다</p>
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
                <p className="text-sm text-muted-foreground mt-8 text-center font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Lettie의 특별한 기능</h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              편지 쓰기의 아날로그 감성을<br className="md:hidden" /> 디지털 경험으로 재해석했습니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Feature 1: Large */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">편지 교환 시스템</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  전 세계 사람들과 진심이 담긴 편지를 주고받으며 진정한 소통을 경험하세요.
                  빠른 채팅이 아닌, 기다림의 미학이 있는 편지로 깊이 있는 대화를 나눌 수 있습니다.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-100/50 rounded-full blur-2xl -ml-10 -mb-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-indigo-50 text-indigo-600">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">점진적 프로필 공개</h3>
                <p className="text-muted-foreground leading-relaxed">
                  편지를 주고받을수록 상대방의 사진이 점점 선명해져 외모가 아닌 마음으로 시작하는 만남을 추구합니다.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-violet-100/50 rounded-full blur-2xl -ml-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-violet-50 text-violet-600">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">안전한 연락처 교환</h3>
                <p className="text-muted-foreground leading-relaxed">
                  5통의 편지로 충분히 알아간 후 안전하고 신뢰할 수 있는 연락처 교환이 가능합니다.
                </p>
              </div>
            </div>

            {/* Feature 4: Large */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -mr-16 -mb-16 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-purple-50 text-purple-600">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">글로벌 문화 교류</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  한국, 일본, 미국, 유럽 등 전 세계 사용자들과 다양한 문화를 나누는 소통.
                  언어의 장벽을 넘어 마음을 나누는 특별한 경험을 해보세요.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/50 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-pink-50 text-pink-600">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">젬 시스템</h3>
                <p className="text-muted-foreground leading-relaxed">
                  더 많은 편지를 열어보고 작성할 수 있는 재미있는 포인트 시스템으로 동기부여를 제공합니다.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-100/50 rounded-full blur-2xl -ml-10 -mb-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-rose-50 text-rose-600">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">감성적인 디자인</h3>
                <p className="text-muted-foreground leading-relaxed">
                  편지 쓰기의 아날로그 감성을 살린 아름답고 세련된 사용자 경험을 제공합니다.
                </p>
              </div>
            </div>

            {/* Feature 7 (Optional/New) - Call to Action in Grid */}
            <div className="md:col-span-1 glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">지금 시작하세요</h3>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline flex items-center">
                앱 다운로드 <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Blog Posts Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">펜팔 시작하기 가이드</h2>
          <p className="text-center text-muted-foreground mb-12">전 세계 친구들과 소통하는 방법을 알아보세요</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/blog/how-to-start-penpal" className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">첫 편지 작성 가이드</h3>
              <p className="text-muted-foreground mb-4">성공적인 펜팔을 시작하는 완벽한 첫 편지 작성법</p>
              <span className="text-primary font-semibold group-hover:underline">자세히 보기 →</span>
            </Link>
            <Link href="/blog/penpal-culture-guide" className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">세계 각국의 편지 문화</h3>
              <p className="text-muted-foreground mb-4">나라마다 다른 편지 문화와 글로벌 에티켓 알아보기</p>
              <span className="text-accent font-semibold group-hover:underline">자세히 보기 →</span>
            </Link>
            <Link href="/blog/language-exchange-tips" className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">언어 교환 팁</h3>
              <p className="text-muted-foreground mb-4">펜팔을 통한 효과적인 언어 학습 방법</p>
              <span className="text-green-500 font-semibold group-hover:underline">자세히 보기 →</span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-lg transition-colors">
              모든 블로그 포스트 보기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guide Links Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">완벽한 펜팔을 위한 가이드</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/guide/getting-started" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">펜팔 시작하기</h3>
                <p className="text-sm text-muted-foreground">첫 펜팔을 위한 완벽 가이드</p>
              </div>
            </Link>
            <Link href="/guide/writing-tips" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Heart className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">편지 작성 마스터</h3>
                <p className="text-sm text-muted-foreground">매력적인 편지 쓰는 법</p>
              </div>
            </Link>
            <Link href="/guide/cultural-exchange" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Globe className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">문화 교류</h3>
                <p className="text-sm text-muted-foreground">세계 문화 이해하기</p>
              </div>
            </Link>
            <Link href="/guide/language-learning" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Star className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">언어 학습</h3>
                <p className="text-sm text-muted-foreground">펜팔로 외국어 마스터하기</p>
              </div>
            </Link>
            <Link href="/guide/building-friendship" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Users className="w-6 h-6 text-red-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">우정 쌓기</h3>
                <p className="text-sm text-muted-foreground">지속 가능한 펜팔 관계</p>
              </div>
            </Link>
            <Link href="/guide/safety-privacy" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Shield className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">안전과 프라이버시</h3>
                <p className="text-sm text-muted-foreground">안전한 펜팔 즐기기</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section id="recommended" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">이런 분들께 추천합니다</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">전 세계 친구들과 진정한 소통을 원하는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">외국어 연습과 문화 교류에 관심 있는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">깊이 있는 대화와 진실한 관계를 추구하는 분</h3>
            </div>
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">새로운 방식의 만남을 경험하고 싶은 분</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
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
            <span className="text-2xl font-bold text-foreground">Lettie</span>
          </div>
          <div className="text-center text-muted-foreground space-y-4">
            <p className="text-foreground font-medium">© 2025 Lettie Inc. All rights reserved.</p>
            <p>전 세계와 편지로 소통하는 특별한 만남과 인연</p>

            {/* 주요 페이지 링크 */}
            <div className="flex items-center justify-center space-x-6 pt-2 flex-wrap">
              <Link href="/blog" className="hover:text-primary transition-colors font-medium">블로그</Link>
              <Link href="/guide" className="hover:text-primary transition-colors font-medium">가이드</Link>
              <Link href="/stories" className="hover:text-primary transition-colors font-medium">스토리</Link>
              <Link href="/faq" className="hover:text-primary transition-colors font-medium">FAQ</Link>
            </div>

            {/* 앱 다운로드 및 정책 링크 */}
            <div className="flex items-center justify-center space-x-6 pt-2 flex-wrap">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                App Store
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Google Play
              </a>
              <a
                href={privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                개인정보 처리방침
              </a>
              <a
                href={termsOfServiceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                서비스 이용약관
              </a>
            </div>

            <div className="pt-2">
              <span className="text-muted-foreground/60">소셜 네트워킹 | 개발자: junhyeong kim</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

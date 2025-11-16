import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Mail, Feather } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://lettie-dating.com/blog',
  },
};

const blogPosts = [
  {
    id: 'slow-letter-beauty',
    title: '느린 편지의 아름다움: 빠름이 지배하는 세상에서',
    excerpt: '모든 것이 빠르게 흘러가는 세상에서, 느리게 주고받는 편지의 가치. 기다림과 설렘, 깊이 있는 소통이 주는 특별한 경험.',
    date: '2025-11-18',
    readTime: '6분',
    category: '감성',
    image: '/letter-writing.png',
  },
  {
    id: 'first-penpal-letter',
    title: '첫 펜팔 편지: 낯선 이에게 마음을 열다',
    excerpt: '한 번도 만난 적 없는 낯선 이에게 첫 편지를 쓴다는 것. 설렘과 두려움, 기대와 호기심이 공존하는 특별한 순간.',
    date: '2025-11-18',
    readTime: '5분',
    category: '가이드',
    image: '/letter-writing.png',
  },
  {
    id: 'winter-letter-warmth',
    title: '겨울 편지: 차가운 계절에 전하는 따뜻한 마음',
    excerpt: '첫눈이 내리는 겨울, 당신에게 보내는 편지 한 통. 추운 계절이지만 따뜻한 마음으로 서로를 응원하며, Lettie에서 시작하는 겨울 펜팔 이야기.',
    date: '2025-11-16',
    readTime: '5분',
    category: '감성',
    image: '/letter-writing.png',
  },
  {
    id: 'autumn-morning-mist',
    title: '안개 속 아침: 가을이 전하는 따스한 약속',
    excerpt: '안개 자욱한 아침, 숲과 들판이 꿈꾸는 시간. 베일이 걷히면 펼쳐질 푸른 하늘과 따뜻한 황금빛 가을. 변화의 순간을 기다리며 당신에게 보내는 편지입니다.',
    date: '2025-11-09',
    readTime: '4분',
    category: '감성',
    image: '/letter-writing.png',
  },
  {
    id: 'halloween-connections',
    title: '할로윈 고백: 어둠 속에서 찾는 연결',
    excerpt: '이번 할로윈, Vampiro가 전하는 특별한 유령 이야기 — 진심 어린 편지를 통해 예상치 못한 곳에서 진정한 우정을 찾는 이야기.',
    date: '2025-10-29',
    readTime: '5분',
    category: '커뮤니티',
    image: '/letter-writing.png',
  },
  {
    id: 'dear-stranger',
    title: '낯선 당신에게: 천천히 깊어지는 연결을 믿는 사람의 편지',
    excerpt: '목소리도, 얼굴도 모르는 당신에게. 느리지만 진실한 연결을 여전히 믿는 사람이 보내는 편지입니다. 글을 통해서도 영혼은 서로를 알아볼 수 있다고 믿습니다.',
    date: '2025-01-22',
    readTime: '4분',
    category: '감성',
    image: '/letter-writing.png',
  },
  {
    id: 'how-to-start-penpal',
    title: '펜팔 시작하기: 완벽한 첫 편지 작성 가이드',
    excerpt: '전 세계 친구들과 의미 있는 관계를 시작하는 방법을 알아보세요. 첫 편지부터 지속적인 우정까지, 성공적인 펜팔의 모든 것을 담았습니다.',
    date: '2025-01-18',
    readTime: '5분',
    category: '가이드',
    image: '/letter-writing.png',
  },
  {
    id: 'penpal-culture-guide',
    title: '세계 각국의 편지 문화: 펜팔로 배우는 글로벌 에티켓',
    excerpt: '나라마다 다른 편지 문화와 인사법을 알아보고, 글로벌 펜팔과 더 깊은 관계를 만들어보세요.',
    date: '2025-01-15',
    readTime: '7분',
    category: '문화',
    image: '/brand-screen.png',
  },
  {
    id: 'language-exchange-tips',
    title: '펜팔을 통한 언어 학습: 효과적인 언어 교환 방법',
    excerpt: '펜팔과 함께 새로운 언어를 배우는 가장 효과적인 방법들을 소개합니다.',
    date: '2025-01-12',
    readTime: '6분',
    category: '학습',
    image: '/conversation-detail.png',
  },
  {
    id: 'marcus-introduction',
    title: 'Marcus와 함께하는 펜팔: 진실한 우정을 찾아서',
    excerpt: '안녕하세요, Marcus입니다. 전 세계 친구들과 진심 어린 대화를 나누며 서로의 삶과 문화를 배워가고 싶습니다. 일상의 이야기부터 취미, 음악, 여행까지 함께 나눠요.',
    date: '2025-01-20',
    readTime: '4분',
    category: '커뮤니티',
    image: '/letter-writing.png',
  },
  {
    id: 'dearest-friend',
    title: '가을밤의 편지: 외로움을 나누는 카페에서',
    excerpt: '가을이 다가오면 밤이 길어지고 외로움이 찾아오죠. 우리의 길은 만나지 않을지 모르지만, 바닷가 카페에서 당신을 기다리며 이 편지를 씁니다.',
    date: '2025-01-20',
    readTime: '3분',
    category: '감성',
    image: '/brand-screen.png',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
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
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">홈</Link>
            <Link href="/blog" className="text-blue-500 font-semibold">블로그</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-500 transition-colors">가이드</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-rose-50 to-transparent opacity-60 -z-10"></div>
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <Feather className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">편지로 시작하는 진실한 연결</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Letters
            </span>
            <br />
            <span className="text-gray-800">from the Heart</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            세상 곳곳에서 전해지는 따뜻한 이야기들
            <br className="hidden md:block" />
            펜팔의 모든 순간을 함께 나눕니다
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post) => {
            const categoryIcons: Record<string, React.ReactNode> = {
              '감성': <Feather className="w-8 h-8" />,
              '커뮤니티': <Mail className="w-8 h-8" />,
              '가이드': <ArrowRight className="w-8 h-8" />,
              '문화': <Calendar className="w-8 h-8" />,
              '학습': <Clock className="w-8 h-8" />
            };

            const categoryColors: Record<string, string> = {
              '감성': 'from-blue-50 to-indigo-100',
              '커뮤니티': 'from-purple-50 to-blue-100',
              '가이드': 'from-emerald-50 to-teal-100',
              '문화': 'from-amber-50 to-orange-100',
              '학습': 'from-violet-50 to-purple-100'
            };

            return (
              <article
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  {/* Icon Header */}
                  <div className={`relative h-32 bg-gradient-to-br ${categoryColors[post.category] || 'from-blue-400 to-purple-500'} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

                    <div className="absolute inset-0 flex items-center justify-center text-blue-600 transform group-hover:scale-110 transition-transform duration-500">
                      {categoryIcons[post.category] || <Mail className="w-8 h-8" />}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      자세히 읽기
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-12 text-center text-white shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">오늘부터 시작하는 펜팔 여행</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              첫 편지를 기다리고 있어요
            </h2>

            <p className="text-lg mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
              전 세계 친구들과 편지로 소통하며<br className="hidden md:block" />
              진실한 관계를 만들어보세요
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
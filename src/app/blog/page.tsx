import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Mail, Feather, Globe } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://lettie-dating.com/blog',
  },
};

import { blogPosts as blogPostsData } from '@/data/blogPosts';

const blogPosts = Object.values(blogPostsData).sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 relative overflow-hidden rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Image
                src="/lettie-icon.png"
                alt="Lettie 앱 아이콘"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">Lettie</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">홈</Link>
            <Link href="/blog" className="text-primary font-semibold">블로그</Link>
            <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors font-medium">FAQ</Link>
            <Link href="/guide" className="text-muted-foreground hover:text-primary transition-colors font-medium">가이드</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-100/40 via-purple-100/40 to-transparent rounded-full blur-3xl opacity-60 dark:from-blue-900/20 dark:via-purple-900/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-blue-800/20"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-800/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full glass-panel animate-fade-in-up">
            <Feather className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground/80 tracking-wide">편지로 시작하는 진실한 연결</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 tracking-tight animate-fade-in-up animation-delay-100">
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Letters
            </span>
            <br />
            <span className="text-foreground">from the Heart</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
            세상 곳곳에서 전해지는 따뜻한 이야기들
            <br className="hidden md:block" />
            펜팔의 모든 순간을 함께 나눕니다
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, idx) => {
            const categoryIcons: Record<string, React.ReactNode> = {
              '감성': <Feather className="w-8 h-8" />,
              '커뮤니티': <Mail className="w-8 h-8" />,
              '가이드': <ArrowRight className="w-8 h-8" />,
              '문화': <Globe className="w-8 h-8" />,
              '학습': <Clock className="w-8 h-8" />
            };

            const categoryColors: Record<string, string> = {
              '감성': 'from-primary-light to-secondary-light',
              '커뮤니티': 'from-secondary-light to-accent-light',
              '가이드': 'from-success-light to-primary-light',
              '문화': 'from-accent-light to-primary-light',
              '학습': 'from-secondary-light to-primary-light'
            };

            return (
              <article
                key={post.id}
                className="group relative glass-panel rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link href={`/blog/${post.id}`} className="block h-full flex flex-col">
                  {/* Icon Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${categoryColors[post.category] || 'from-blue-400 to-purple-500'} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSIvPjwvc3ZnPg==')]"></div>

                    <div className="absolute inset-0 flex items-center justify-center text-primary/80 transform group-hover:scale-110 transition-transform duration-700">
                      {categoryIcons[post.category] || <Mail className="w-12 h-12" />}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-1.5 text-xs font-bold text-foreground/80 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-1">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-6 border-t border-border/50 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Read More */}
                    <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
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
      <section className="container mx-auto px-4 py-24">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary p-12 md:p-20 text-center text-white shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Mail className="w-4 h-4 text-blue-100" />
              <span className="text-sm font-bold text-blue-50 tracking-wide">오늘부터 시작하는 펜팔 여행</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
              첫 편지를 기다리고 있어요
            </h2>

            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
              전 세계 친구들과 편지로 소통하며<br className="hidden md:block" />
              진실한 관계를 만들어보세요
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
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
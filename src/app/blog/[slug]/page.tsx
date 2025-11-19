import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2, Mail, Feather, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '@/data/blogPosts';

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://lettie-dating.com/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // JSON-LD 구조화 데이터 - BlogPosting
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://lettie-dating.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lettie',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lettie-dating.com/lettie-icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lettie-dating.com/blog/${slug}`,
    },
  };

  // FAQ Schema (특정 포스트에만 추가)
  let faqJsonLd = null;
  if (slug === 'how-to-start-penpal' || slug === 'safe-penpaling-guide') {
    faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '펜팔을 처음 시작할 때 첫 편지에 무엇을 써야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '자기소개, 취미, 사는 곳의 문화, 그리고 상대방에 대한 진심 어린 질문을 포함하는 것이 좋습니다. 너무 길지 않게 작성하고, 공통 관심사를 찾는 것이 중요합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '펜팔 친구와 연락처는 언제 교환하는 것이 안전한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lettie에서는 최소 5통의 편지를 주고받은 후 연락처 교환을 권장합니다. 충분한 대화를 통해 신뢰를 쌓은 후 개인 메신저나 연락처를 공유하세요.',
          },
        },
        {
          '@type': 'Question',
          name: '해외 펜팔 친구에게 선물을 보내도 되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '신뢰가 충분히 쌓인 후라면 가능하지만, 초기에는 주소 공유를 자제하는 것이 좋습니다. 또한 고가의 선물 요구는 사기일 수 있으니 주의해야 합니다.',
          },
        },
      ],
    };
  }

  // BreadcrumbList 구조화 데이터
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://lettie-dating.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '블로그',
        item: 'https://lettie-dating.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://lettie-dating.com/blog/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
            <span className="text-2xl font-bold text-foreground">Lettie</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">홈</Link>
            <Link href="/blog" className="text-primary font-semibold">블로그</Link>
            <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            <Link href="/guide" className="text-muted-foreground hover:text-primary transition-colors">가이드</Link>
          </div>
        </nav>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">홈</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-primary">블로그</Link></li>
            <li>/</li>
            <li className="text-foreground font-semibold">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span className="bg-primary-light text-primary px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} 읽기
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>
        </header>

        {/* Featured Icon Section */}
        <div className="relative mb-12">
          <div className="relative h-64 bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

            {/* Animated blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>

            {/* Category Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
              {post.category === '감성' && <Feather className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === '커뮤니티' && <Mail className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === '가이드' && <ArrowRight className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === '문화' && <Calendar className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === '학습' && <Clock className="w-24 h-24" strokeWidth={1.5} />}
              {!['감성', '커뮤니티', '가이드', '문화', '학습'].includes(post.category) && <Mail className="w-24 h-24" strokeWidth={1.5} />}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              블로그 목록으로
            </Link>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Share2 className="w-5 h-5" />
              공유하기
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              다른 이야기도 읽어보세요
            </h2>
            <p className="text-muted-foreground">비슷한 주제의 따뜻한 편지들</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => {
                const categoryIcons: Record<string, React.ReactNode> = {
                  '감성': <Feather className="w-6 h-6" />,
                  '커뮤니티': <Mail className="w-6 h-6" />,
                  '가이드': <ArrowRight className="w-6 h-6" />,
                  '문화': <Calendar className="w-6 h-6" />,
                  '학습': <Clock className="w-6 h-6" />
                };

                const categoryColors: Record<string, string> = {
                  '감성': 'from-primary to-secondary',
                  '커뮤니티': 'from-secondary to-accent',
                  '가이드': 'from-success to-primary',
                  '문화': 'from-accent to-primary',
                  '학습': 'from-secondary to-primary'
                };

                return (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group glass-panel rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`h-24 bg-gradient-to-br ${categoryColors[relatedPost.category] || 'from-primary to-secondary'} flex items-center justify-center text-white`}>
                      {categoryIcons[relatedPost.category] || <Mail className="w-6 h-6" />}
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-xs font-semibold text-muted-foreground mb-2">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {relatedPost.description}
                      </p>
                      <span className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        자세히 읽기
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-12 text-center text-white shadow-2xl">
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
                className="group bg-white text-foreground px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-foreground px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
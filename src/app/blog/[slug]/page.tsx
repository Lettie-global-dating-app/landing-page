import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2, Heart, Globe, Shield, Mail } from 'lucide-react';
import { notFound } from 'next/navigation';

type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  keywords: string[];
};

const blogPosts: Record<string, BlogPost> = {
  'how-to-start-penpal': {
    id: 'how-to-start-penpal',
    title: '펜팔 시작하기: 완벽한 첫 편지 작성 가이드',
    description: '전 세계 친구들과 의미 있는 관계를 시작하는 방법을 알아보세요. 첫 편지부터 지속적인 우정까지, 성공적인 펜팔의 모든 것을 담았습니다.',
    date: '2025-01-18',
    readTime: '5분',
    category: '가이드',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['펜팔 시작', '첫 편지', '펜팔 가이드', '편지 작성법', '국제 친구'],
    content: `
# 펜팔을 시작하는 완벽한 가이드

펜팔은 단순한 편지 교환 이상의 의미를 가집니다. 전 세계 다양한 문화와 배경을 가진 사람들과 진실한 관계를 만들어가는 특별한 경험이죠. Lettie와 함께 펜팔을 시작하는 방법을 자세히 알아보겠습니다.

## 1. 첫 편지의 중요성

첫인상은 두 번째 기회가 없다고 합니다. 펜팔에서도 마찬가지입니다. 첫 편지는 상대방에게 당신이 어떤 사람인지 보여주는 첫 번째 창구입니다.

### 좋은 첫 편지의 구성 요소

**자기소개**: 간단하면서도 흥미로운 자기소개로 시작하세요. 이름, 나이, 거주 지역과 함께 당신을 특별하게 만드는 한두 가지 특징을 언급하면 좋습니다.

**관심사 공유**: 취미, 좋아하는 음악, 영화, 책 등을 공유하세요. 공통 관심사는 대화를 이어가는 좋은 시작점이 됩니다.

**질문하기**: 상대방에 대한 진심 어린 호기심을 표현하세요. "당신의 나라에서 가장 좋아하는 계절은 무엇인가요?" 같은 질문은 대화를 자연스럽게 이어갑니다.

## 2. 문화적 감수성 기르기

### 다양성 존중하기

펜팔의 가장 큰 매력은 다양한 문화를 경험할 수 있다는 점입니다. 상대방의 문화, 종교, 생활 방식에 대해 열린 마음을 가지세요.

### 언어의 장벽 극복하기

- 간단하고 명확한 문장을 사용하세요
- 속어나 관용구는 피하거나 설명을 덧붙이세요
- 상대방의 언어로 인사말을 배워보세요

## 3. 지속 가능한 펜팔 관계 만들기

### 규칙적인 소통

일정한 주기로 편지를 주고받는 것이 중요합니다. 너무 자주 보내면 부담스러울 수 있고, 너무 뜸하면 관계가 소원해질 수 있습니다.

### 진정성 있는 대화

표면적인 대화를 넘어 깊이 있는 이야기를 나누세요. 일상의 소소한 이야기부터 인생의 목표까지, 진솔한 대화가 관계를 깊게 만듭니다.

## 4. Lettie만의 특별한 기능 활용하기

### 5통의 편지 규칙

Lettie는 5통의 편지를 주고받은 후 연락처를 교환할 수 있습니다. 이는 서로를 충분히 알아가는 시간을 보장합니다.

### 프라이버시 보호

사진 없이 시작하는 펜팔로 외모가 아닌 내면에 집중할 수 있습니다. 진정한 연결을 만들어가세요.

## 5. 펜팔 에티켓

### 해야 할 것들
- 정중하고 존중하는 태도 유지
- 상대방의 편지에 성실히 답변
- 문화적 차이에 대한 이해와 수용
- 긍정적이고 건설적인 대화

### 하지 말아야 할 것들
- 개인정보 성급하게 요구하지 않기
- 정치적, 종교적 견해 강요하지 않기
- 부정적이거나 비판적인 태도 피하기
- 상대방을 무시하거나 갑자기 연락 끊지 않기

## 마무리

펜팔은 세상을 더 넓게 보는 창입니다. Lettie와 함께라면 안전하고 의미 있는 글로벌 친구 관계를 만들어갈 수 있습니다. 지금 바로 첫 편지를 작성해보세요!

**Lettie에서 당신을 기다리는 전 세계 친구들을 만나보세요.**
    `
  },
  'penpal-culture-guide': {
    id: 'penpal-culture-guide',
    title: '세계 각국의 편지 문화: 펜팔로 배우는 글로벌 에티켓',
    description: '나라마다 다른 편지 문화와 인사법을 알아보고, 글로벌 펜팔과 더 깊은 관계를 만들어보세요.',
    date: '2025-01-15',
    readTime: '7분',
    category: '문화',
    image: '/brand-screen.png',
    author: 'Lettie',
    keywords: ['편지 문화', '글로벌 에티켓', '펜팔 문화', '국제 교류', '문화 차이'],
    content: `
# 세계 각국의 편지 문화 이해하기

펜팔을 통해 다양한 문화를 경험하는 것은 특별한 즐거움입니다. 각 나라마다 고유한 편지 문화와 에티켓이 있으며, 이를 이해하면 더 풍부한 교류가 가능합니다.

## 아시아 지역의 편지 문화

### 일본
일본에서는 계절 인사를 중요하게 생각합니다. 여름에는 '서중견문(暑中見舞い)', 겨울에는 '연하장(年賀状)'을 보내는 전통이 있습니다.

### 한국
한국은 정중한 인사와 안부를 묻는 것으로 편지를 시작합니다. 상대방의 건강과 안녕을 기원하는 마음을 표현하는 것이 중요합니다.

### 중국
중국에서는 붉은색이 행운을 의미하므로, 특별한 날에는 붉은 봉투나 종이를 사용하기도 합니다.

## 유럽의 편지 전통

### 영국
영국은 격식 있는 편지 문화를 가지고 있습니다. 'Dear'로 시작하고 'Yours sincerely' 또는 'Best regards'로 마무리합니다.

### 프랑스
프랑스인들은 편지에 감성적이고 시적인 표현을 즐겨 사용합니다. 예술과 문학에 대한 이야기를 나누면 좋은 반응을 얻을 수 있습니다.

### 독일
독일은 정확하고 체계적인 편지 작성을 선호합니다. 명확한 구조와 논리적인 전개를 중요시합니다.

## 미주 지역의 소통 방식

### 미국
미국은 친근하고 캐주얼한 톤을 선호합니다. 개인적인 경험과 이야기를 공유하는 것을 좋아합니다.

### 브라질
브라질인들은 따뜻하고 열정적인 인사를 좋아합니다. 가족과 친구에 대한 이야기를 자주 나눕니다.

## 편지 작성 시 유의사항

1. **시차 고려하기**: 상대방의 시간대를 고려해 답장 기대 시간을 조절하세요
2. **날짜 표기법**: 나라마다 날짜 표기법이 다릅니다 (미국: MM/DD/YYYY, 유럽: DD/MM/YYYY)
3. **호칭 사용**: 문화에 따라 이름 부르는 방식이 다를 수 있습니다
4. **금기 주제**: 정치, 종교, 역사적 갈등 등 민감한 주제는 조심스럽게 접근하세요

## Lettie로 문화 교류 시작하기

Lettie는 다양한 문화권의 사람들을 연결해줍니다. 서로의 차이를 존중하고 이해하며, 진정한 글로벌 친구를 만들어보세요.
    `
  },
  'language-exchange-tips': {
    id: 'language-exchange-tips',
    title: '펜팔을 통한 언어 학습: 효과적인 언어 교환 방법',
    description: '펜팔과 함께 새로운 언어를 배우는 가장 효과적인 방법들을 소개합니다.',
    date: '2025-01-12',
    readTime: '6분',
    category: '학습',
    image: '/conversation-detail.png',
    author: 'Lettie',
    keywords: ['언어 교환', '언어 학습', '펜팔 학습', '외국어', '언어 공부'],
    content: `
# 펜팔로 언어 실력 향상시키기

펜팔은 살아있는 언어를 배우는 가장 효과적인 방법 중 하나입니다. 교과서가 아닌 실제 원어민과의 대화를 통해 자연스러운 표현을 익힐 수 있습니다.

## 언어 교환의 장점

### 1. 실용적인 표현 학습
교과서에 없는 일상 표현과 최신 트렌드를 배울 수 있습니다.

### 2. 문화적 맥락 이해
언어는 문화와 분리될 수 없습니다. 펜팔을 통해 언어 뒤에 숨은 문화를 이해할 수 있습니다.

### 3. 동기부여 유지
실제 사람과의 교류는 언어 학습에 대한 동기를 지속시켜줍니다.

## 효과적인 언어 교환 방법

### 50/50 규칙
편지의 절반은 배우고 있는 언어로, 나머지 절반은 모국어로 작성하세요. 서로에게 도움이 됩니다.

### 수정 요청하기
"제 문법이나 표현을 자유롭게 고쳐주세요"라고 요청하세요. 피드백은 성장의 핵심입니다.

### 일기 형식 활용
일상을 일기처럼 써서 보내면 자연스러운 표현을 연습할 수 있습니다.

## 레벨별 학습 전략

### 초급자
- 간단한 인사와 자기소개부터 시작
- 그림이나 이모티콘을 활용해 의미 전달
- 번역기 사용을 점진적으로 줄이기

### 중급자
- 주제를 정해 깊이 있는 대화 나누기
- 관용구와 속담 배우고 사용하기
- 상대방 나라의 뉴스나 문화 이야기하기

### 고급자
- 복잡한 주제에 대한 의견 교환
- 유머와 말장난 이해하고 사용하기
- 상대방의 글쓰기 스타일 분석하고 따라하기

## 유용한 표현 모음

### 언어 교환 시작하기
- "I'm learning [language] and would love to practice with you"
- "Feel free to correct my mistakes"
- "How do you say [word] in your language?"

### 이해를 돕는 표현
- "Could you explain that in simpler terms?"
- "What does [expression] mean in this context?"
- "Is this the natural way to say it?"

## Lettie에서 언어 교환 파트너 찾기

Lettie는 언어 학습을 원하는 사용자들을 연결해줍니다. 프로필에 학습 중인 언어를 표시하고, 같은 목표를 가진 펜팔을 만나보세요.

언어는 소통의 도구입니다. Lettie와 함께 전 세계 친구들과 소통하며 언어 실력을 키워보세요!
    `
  }
};

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

  // JSON-LD 구조화 데이터
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-blue-500">홈</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-blue-500">블로그</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600">
            {post.description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} (.+)/g, (match, text, offset) => {
              const level = match.indexOf(' ');
              return `<h${level} class="text-${7-level}xl font-bold mt-8 mb-4 text-gray-800">${text}</h${level}>`;
            }).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          }} />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              블로그 목록으로
            </Link>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Share2 className="w-5 h-5" />
              공유하기
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          관련 글 더 읽기
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Object.values(blogPosts)
            .filter(p => p.id !== post.id)
            .slice(0, 3)
            .map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {relatedPost.description}
                </p>
                <span className="text-blue-500 font-semibold text-sm">
                  자세히 읽기 →
                </span>
              </Link>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Lettie와 함께 펜팔 시작하기
          </h2>
          <p className="text-lg mb-8 opacity-95">
            전 세계 친구들과 편지로 소통하며 특별한 인연을 만들어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              App Store에서 다운로드
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Google Play에서 다운로드
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
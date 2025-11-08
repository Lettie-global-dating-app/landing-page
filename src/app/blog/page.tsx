import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://lettie-dating.com/blog',
  },
};

const blogPosts = [
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
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Lettie 블로그
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          펜팔을 시작하는 방법, 편지 작성 팁, 문화 교류 가이드 등<br />
          글로벌 소통의 모든 것을 알려드립니다
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    자세히 읽기 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            지금 Lettie를 시작하세요
          </h2>
          <p className="text-lg mb-8 opacity-95">
            전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어보세요
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
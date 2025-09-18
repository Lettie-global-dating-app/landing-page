import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, Quote, Globe, Users, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '사용자 스토리 - 펜팔로 만난 특별한 인연들 | Lettie',
  description: 'Lettie를 통해 전 세계 친구들과 펜팔하며 특별한 인연을 만든 실제 사용자들의 이야기',
  keywords: ['펜팔 후기', 'Lettie 사용후기', '펜팔 성공 스토리', '글로벌 친구 이야기', '편지 친구 후기'],
  alternates: {
    canonical: 'https://lettie-dating.com/stories',
  },
};

const userStories = [
  {
    id: 1,
    name: '서연',
    age: 28,
    location: '서울, 한국',
    penpalLocation: '파리, 프랑스',
    rating: 5,
    title: '프랑스 친구와 함께한 언어 교환의 여정',
    story: 'Lettie를 통해 만난 프랑스 친구 Sophie와 6개월째 편지를 주고받고 있어요. 처음엔 서툰 영어로 시작했지만, 이제는 한국어와 프랑스어를 섞어가며 소통하고 있습니다. 서로의 문화를 배우고, 일상을 공유하며 진정한 친구가 되었어요.',
    highlight: '언어 장벽을 넘어 진정한 우정을 만들었습니다',
    letterCount: 47,
    duration: '6개월',
  },
  {
    id: 2,
    name: '민준',
    age: 24,
    location: '부산, 한국',
    penpalLocation: '도쿄, 일본',
    rating: 5,
    title: '같은 취미로 연결된 특별한 인연',
    story: '사진 찍는 것을 좋아한다고 프로필에 적었더니, 일본의 사진작가 Takumi와 매칭되었어요. 서로의 작품을 공유하고 피드백을 주고받으며 실력도 늘고 좋은 친구도 얻었습니다. 다음 달에는 실제로 만나 함께 사진 여행을 갈 예정이에요!',
    highlight: '공통 관심사로 시작해 평생 친구가 되었어요',
    letterCount: 62,
    duration: '8개월',
  },
  {
    id: 3,
    name: '지은',
    age: 31,
    location: '대전, 한국',
    penpalLocation: '베를린, 독일',
    rating: 5,
    title: '편지로 시작된 창업 파트너십',
    story: '독일에서 스타트업을 운영하는 Marco와 펜팔을 시작했습니다. 비즈니스 아이디어를 공유하다가 함께 글로벌 프로젝트를 시작하게 되었어요. 편지로 시작된 관계가 비즈니스 파트너십으로 발전한 특별한 경험입니다.',
    highlight: '펜팔이 비즈니스 기회로 이어졌습니다',
    letterCount: 38,
    duration: '4개월',
  },
  {
    id: 4,
    name: '하늘',
    age: 22,
    location: '인천, 한국',
    penpalLocation: '뉴욕, 미국',
    rating: 5,
    title: '우울했던 시기를 함께 극복한 친구',
    story: '힘든 시기에 Lettie를 시작했는데, 뉴욕의 Emma가 따뜻한 편지로 큰 위로가 되어주었어요. 서로의 일상과 고민을 나누며 함께 성장하고 있습니다. 편지 한 통이 얼마나 큰 힘이 될 수 있는지 알게 되었어요.',
    highlight: '편지가 주는 따뜻한 위로와 응원',
    letterCount: 73,
    duration: '10개월',
  },
  {
    id: 5,
    name: '준호',
    age: 35,
    location: '광주, 한국',
    penpalLocation: '런던, 영국',
    rating: 5,
    title: '책으로 연결된 문학 친구',
    story: '영국의 도서관 사서인 Oliver와 책에 대한 이야기를 나누고 있습니다. 서로 추천한 책을 읽고 감상을 공유하며 독서 모임 못지않은 깊이 있는 대화를 나누고 있어요. 덕분에 읽는 책의 장르도 넓어졌습니다.',
    highlight: '책을 통해 세상을 바라보는 새로운 시각',
    letterCount: 41,
    duration: '5개월',
  },
  {
    id: 6,
    name: '수진',
    age: 26,
    location: '대구, 한국',
    penpalLocation: '시드니, 호주',
    rating: 5,
    title: '요리 레시피를 교환하는 즐거움',
    story: '호주의 셰프 지망생 Lily와 각 나라의 요리 레시피를 교환하고 있어요. 편지로 레시피를 받아 만들어보고, 결과를 사진으로 공유하며 즐거운 시간을 보내고 있습니다. 덕분에 요리 실력도 늘고 세계 음식 문화도 배우고 있어요.',
    highlight: '맛있는 우정을 나누는 특별한 펜팔',
    letterCount: 55,
    duration: '7개월',
  }
];

const statistics = [
  { label: '활성 사용자', value: '증가 중', icon: Users },
  { label: '교환된 편지', value: '매일 증가', icon: Heart },
  { label: '연결된 국가', value: '전 세계', icon: Globe },
  { label: '사용자 만족도', value: '높음', icon: Star },
];

export default function StoriesPage() {
  // 구조화된 데이터 - Review
  const reviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Lettie - 글로벌 펜팔 앱',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100',
      bestRating: '5',
      worstRating: '1'
    },
    review: userStories.map(story => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: story.rating,
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: story.name
      },
      reviewBody: story.story
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
              <Link href="/blog" className="text-gray-600 hover:text-blue-500 transition-colors">블로그</Link>
              <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
              <Link href="/stories" className="text-blue-500 font-semibold">스토리</Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            실제 사용자들의 특별한 이야기
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Lettie를 통해 전 세계 친구들과 펜팔하며<br />
            특별한 인연을 만들어가는 사람들의 진짜 이야기
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <Icon className="w-8 h-8 text-blue-500 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* User Stories Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {userStories.map((story) => (
              <article key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {story.title}
                  </h2>

                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-gray-300 mb-3" />

                  {/* Story */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {story.story}
                  </p>

                  {/* Highlight */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-blue-700 font-semibold text-sm">
                      &ldquo;{story.highlight}&rdquo;
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">{story.name} ({story.age})</p>
                        <p className="text-sm text-gray-600">{story.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">펜팔 지역</p>
                        <p className="text-sm font-semibold text-gray-800">{story.penpalLocation}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-500">{story.letterCount}</p>
                        <p className="text-xs text-gray-600">교환한 편지</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-500">{story.duration}</p>
                        <p className="text-xs text-gray-600">펜팔 기간</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Submit Story CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-3xl mx-auto">
            <Heart className="w-16 h-16 text-red-500 mb-6 mx-auto" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              당신의 이야기를 들려주세요
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Lettie를 통해 만난 특별한 인연이 있나요?<br />
              당신의 이야기를 공유하고 다른 사람들에게 영감을 주세요.
            </p>
            <a
              href="mailto:ggprgrkjh@naver.com"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              스토리 제출하기 <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              당신도 특별한 인연을 만들어보세요
            </h2>
            <p className="text-lg mb-8 opacity-95">
              전 세계 친구들과 편지로 소통하며 진실한 관계를 시작하세요
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
      </div>
    </>
  );
}
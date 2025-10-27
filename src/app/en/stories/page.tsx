import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, Quote, Globe, Users, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Stories - Special Connections Made Through Pen Pals | Lettie',
  description: 'Real stories from users who made special connections with friends worldwide through pen pals on Lettie',
  keywords: ['pen pal reviews', 'Lettie reviews', 'pen pal success stories', 'global friends stories', 'letter friend reviews'],
  alternates: {
    canonical: 'https://lettie-dating.com/en/stories',
  },
};

const userStories = [
  {
    id: 1,
    name: 'Sarah',
    age: 28,
    location: 'Seoul, South Korea',
    penpalLocation: 'Paris, France',
    rating: 5,
    title: 'A Journey of Language Exchange with a French Friend',
    story: 'I\'ve been exchanging letters with Sophie from France for 6 months through Lettie. We started with broken English, but now we mix Korean and French in our communication. We\'ve learned each other\'s cultures, shared daily lives, and become true friends.',
    highlight: 'Built genuine friendship beyond language barriers',
    letterCount: 47,
    duration: '6 months',
  },
  {
    id: 2,
    name: 'Min',
    age: 24,
    location: 'Busan, South Korea',
    penpalLocation: 'Tokyo, Japan',
    rating: 5,
    title: 'A Special Connection Through Shared Hobbies',
    story: 'I wrote in my profile that I love photography, and I was matched with Takumi, a photographer from Japan. We share our work and give feedback to each other, improving our skills and gaining a great friend. Next month, we\'re planning to meet and go on a photo trip together!',
    highlight: 'Started with common interests, became lifelong friends',
    letterCount: 62,
    duration: '8 months',
  },
  {
    id: 3,
    name: 'Emma',
    age: 31,
    location: 'Daejeon, South Korea',
    penpalLocation: 'Berlin, Germany',
    rating: 5,
    title: 'Startup Partnership Started Through Letters',
    story: 'I started pen palling with Marco, who runs a startup in Germany. While sharing business ideas, we started a global project together. It\'s a special experience where a relationship that started with letters evolved into a business partnership.',
    highlight: 'Pen pal relationship led to business opportunities',
    letterCount: 38,
    duration: '4 months',
  },
  {
    id: 4,
    name: 'Sky',
    age: 22,
    location: 'Incheon, South Korea',
    penpalLocation: 'New York, USA',
    rating: 5,
    title: 'A Friend Who Helped Me Through Difficult Times',
    story: 'I started Lettie during a tough period, and Emma from New York gave me great comfort with her warm letters. We share daily lives and concerns, growing together. I learned how powerful a single letter can be.',
    highlight: 'The warm comfort and support that letters provide',
    letterCount: 73,
    duration: '10 months',
  },
  {
    id: 5,
    name: 'James',
    age: 35,
    location: 'Gwangju, South Korea',
    penpalLocation: 'London, UK',
    rating: 5,
    title: 'Literary Friends Connected Through Books',
    story: 'I\'m discussing books with Oliver, a librarian in the UK. We read books we recommend to each other and share our thoughts, having deep conversations as good as a book club. Thanks to him, the genres I read have expanded.',
    highlight: 'A new perspective on the world through books',
    letterCount: 41,
    duration: '5 months',
  },
  {
    id: 6,
    name: 'Lisa',
    age: 26,
    location: 'Daegu, South Korea',
    penpalLocation: 'Sydney, Australia',
    rating: 5,
    title: 'The Joy of Exchanging Cooking Recipes',
    story: 'I\'m exchanging recipes from different countries with Lily, an aspiring chef from Australia. We make the recipes we receive by letter, share the results with photos, and have a great time. Thanks to her, my cooking skills have improved and I\'m learning about world food cultures.',
    highlight: 'Sharing delicious friendships through special pen pals',
    letterCount: 55,
    duration: '7 months',
  }
];

const statistics = [
  { label: 'Active Users', value: 'Growing', icon: Users },
  { label: 'Letters Exchanged', value: 'Daily Increase', icon: Heart },
  { label: 'Connected Countries', value: 'Worldwide', icon: Globe },
  { label: 'User Satisfaction', value: 'High', icon: Star },
];

export default function StoriesPage() {
  const reviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Lettie - Global Pen Pal App',
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
            <Link href="/en" className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <Image
                  src="/lettie-icon.png"
                  alt="Lettie App Icon"
                  className="w-10 h-10 rounded-2xl"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gray-800">Lettie</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/en/blog" className="text-gray-600 hover:text-blue-500 transition-colors">Blog</Link>
              <Link href="/en/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
              <Link href="/en/stories" className="text-blue-500 font-semibold">Stories</Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Real Stories from Our Users
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Genuine stories of people making special connections<br />
            with friends worldwide through pen pals on Lettie
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
                        <p className="text-sm text-gray-600">Pen Pal From</p>
                        <p className="text-sm font-semibold text-gray-800">{story.penpalLocation}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-500">{story.letterCount}</p>
                        <p className="text-xs text-gray-600">Letters Exchanged</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-500">{story.duration}</p>
                        <p className="text-xs text-gray-600">Duration</p>
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
              Share Your Story
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have you made a special connection through Lettie?<br />
              Share your story and inspire others.
            </p>
            <a
              href="mailto:ggprgrkjh@naver.com"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              Submit Story <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Create Your Special Connection
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Connect with friends worldwide through letters and start genuine relationships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
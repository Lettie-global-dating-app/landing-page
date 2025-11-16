import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Mail, Feather } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://lettie-dating.com/en/blog',
  },
};

const blogPosts = [
  {
    id: 'slow-letter-beauty',
    title: 'The Beauty of Slow Letters: In a World Ruled by Speed',
    excerpt: 'In a world where everything moves fast, discover the value of slow correspondence. The anticipation, the depth, and the special experience that thoughtful communication brings.',
    date: '2025-11-18',
    readTime: '6 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'first-penpal-letter',
    title: 'Your First Penpal Letter: Opening Your Heart to a Stranger',
    excerpt: 'Writing your first letter to someone you've never met. A special moment where excitement and fear, expectation and curiosity coexist.',
    date: '2025-11-18',
    readTime: '5 min',
    category: 'Guide',
    image: '/letter-writing.png',
  },
  {
    id: 'winter-letter-warmth',
    title: 'Winter Letter: Warm Hearts in a Cold Season',
    excerpt: 'As the first snow falls, a letter for you. Though the season is cold, we support each other with warm hearts. A winter penpal story that begins with Lettie.',
    date: '2025-11-16',
    readTime: '5 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'autumn-morning-mist',
    title: 'Morning Mist: Autumn\'s Warm Promise',
    excerpt: 'In the misty morning, while woods and meadows dream. When the veil falls, you\'ll see the open blue of heaven and autumn\'s warm golden flow. A letter of hope in times of change.',
    date: '2025-11-09',
    readTime: '4 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'halloween-connections',
    title: 'Halloween Confessions: Finding Connection in the Shadows',
    excerpt: 'This Halloween, Vampiro shares a different kind of ghost story — one about finding genuine friendship in unexpected places through heartfelt letters.',
    date: '2025-10-29',
    readTime: '5 min',
    category: 'Community',
    image: '/letter-writing.png',
  },
  {
    id: 'dear-stranger',
    title: 'Dear Stranger: A Letter from Someone Who Believes in Slow, Meaningful Connections',
    excerpt: 'To you, whose voice I\'ve never heard, whose eyes I\'ve never seen. A letter from someone who still believes in slow, genuine connections through words.',
    date: '2025-01-22',
    readTime: '4 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'how-to-start-penpal',
    title: 'Starting Your Penpal Journey: The Complete First Letter Guide',
    excerpt: 'Learn how to start meaningful relationships with friends around the world. From your first letter to lasting friendship, discover everything you need for successful penpalling.',
    date: '2025-01-18',
    readTime: '5 min',
    category: 'Guide',
    image: '/letter-writing.png',
  },
  {
    id: 'penpal-culture-guide',
    title: 'Letter Cultures Around the World: Global Etiquette Through Penpalling',
    excerpt: 'Explore different letter cultures and greetings from around the world, and build deeper relationships with your global penpals.',
    date: '2025-01-15',
    readTime: '7 min',
    category: 'Culture',
    image: '/brand-screen.png',
  },
  {
    id: 'language-exchange-tips',
    title: 'Language Learning Through Penpals: Effective Language Exchange Methods',
    excerpt: 'Discover the most effective ways to learn a new language together with your penpal friends.',
    date: '2025-01-12',
    readTime: '6 min',
    category: 'Learning',
    image: '/conversation-detail.png',
  },
  {
    id: 'marcus-introduction',
    title: 'Penpalling with Marcus: Finding Genuine Friendship',
    excerpt: 'Hi, I\'m Marcus. I want to have heartfelt conversations with friends around the world, sharing stories about daily life, hobbies, music, and travel. Let\'s connect through letters.',
    date: '2025-01-20',
    readTime: '4 min',
    category: 'Community',
    image: '/letter-writing.png',
  },
  {
    id: 'dearest-friend',
    title: 'Autumn Night Letter: From the Café by the Ocean',
    excerpt: 'As fall approaches, the nights grow longer and loneliness creeps in. Though our paths may never cross, I write this letter while waiting for you at the café by the ocean.',
    date: '2025-01-20',
    readTime: '3 min',
    category: 'Inspiration',
    image: '/brand-screen.png',
  },
];

export default function BlogPage() {
  return (
    <>
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
            <Link href="/en/blog" className="text-blue-500 font-semibold">Blog</Link>
            <Link href="/en/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
            <Link href="/en/guide" className="text-gray-600 hover:text-blue-500 transition-colors">Guide</Link>
            <Link href="/en/stories" className="text-gray-600 hover:text-blue-500 transition-colors">Stories</Link>
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
            <span className="text-sm font-medium text-gray-700">True connections start with letters</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Letters
            </span>
            <br />
            <span className="text-gray-800">from the Heart</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Heartfelt stories from around the world
            <br className="hidden md:block" />
            Sharing every moment of the penpal journey together
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => {
            const categoryIcons: Record<string, React.ReactNode> = {
              'Heartfelt': <Feather className="w-8 h-8" />,
              'Community': <Mail className="w-8 h-8" />,
              'Guide': <ArrowRight className="w-8 h-8" />,
              'Culture': <Calendar className="w-8 h-8" />,
              'Learning': <Clock className="w-8 h-8" />,
              'Inspiration': <Feather className="w-8 h-8" />
            };

            const categoryColors: Record<string, string> = {
              'Heartfelt': 'from-blue-50 to-indigo-100',
              'Community': 'from-purple-50 to-blue-100',
              'Guide': 'from-emerald-50 to-teal-100',
              'Culture': 'from-amber-50 to-orange-100',
              'Learning': 'from-violet-50 to-purple-100',
              'Inspiration': 'from-blue-50 to-indigo-100'
            };

            return (
              <article
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <Link href={`/en/blog/${post.id}`} className="block">
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
                      Read More
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
              <span className="text-sm font-medium">Start your penpal journey today</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Your first letter awaits
            </h2>

            <p className="text-lg mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Connect with friends worldwide through letters<br className="hidden md:block" />
              and build genuine relationships
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

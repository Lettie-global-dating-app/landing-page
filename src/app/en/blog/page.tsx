import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://lettie-dating.com/en/blog',
  },
};

const blogPosts = [
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
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Lettie Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          How to start penpalling, letter writing tips, cultural exchange guides<br />
          Everything you need to know about global communication
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/en/blog/${post.id}`}>
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
                    Read More <ArrowRight className="w-4 h-4" />
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
            Start Your Lettie Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Connect with friends worldwide through letters and build genuine relationships
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
    </>
  );
}

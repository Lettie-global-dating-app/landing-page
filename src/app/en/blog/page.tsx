import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Mail, Feather, Globe } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://lettie-dating.com/en/blog',
  },
};

const appStoreUrl = "https://apps.apple.com/app/id6746454876";
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe";

const blogPosts = [
  {
    id: 'slow-letter-beauty',
    title: 'The Beauty of Slow Letters: In a World Ruled by Speed',
    description: 'In a world where everything moves fast, discover the value of slow correspondence. The anticipation, the depth, and the special experience that thoughtful communication brings.',
    date: '2025-11-18',
    readTime: '6 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'first-penpal-letter',
    title: 'Your First Penpal Letter: Opening Your Heart to a Stranger',
    description: 'Writing your first letter to someone you\'ve never met. A special moment where excitement and fear, expectation and curiosity coexist.',
    date: '2025-11-18',
    readTime: '5 min',
    category: 'Guide',
    image: '/letter-writing.png',
  },
  {
    id: 'winter-letter-warmth',
    title: 'Winter Letter: Warm Hearts in a Cold Season',
    description: 'As the first snow falls, a letter for you. Though the season is cold, we support each other with warm hearts. A winter penpal story that begins with Lettie.',
    date: '2025-11-16',
    readTime: '5 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'autumn-morning-mist',
    title: 'Morning Mist: Autumn\'s Warm Promise',
    description: 'In the misty morning, while woods and meadows dream. When the veil falls, you\'ll see the open blue of heaven and autumn\'s warm golden flow. A letter of hope in times of change.',
    date: '2025-11-09',
    readTime: '4 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'halloween-connections',
    title: 'Halloween Confessions: Finding Connection in the Shadows',
    description: 'This Halloween, Vampiro shares a different kind of ghost story — one about finding genuine friendship in unexpected places through heartfelt letters.',
    date: '2025-10-29',
    readTime: '5 min',
    category: 'Community',
    image: '/letter-writing.png',
  },
  {
    id: 'dear-stranger',
    title: 'Dear Stranger: A Letter from Someone Who Believes in Slow, Meaningful Connections',
    description: 'To you, whose voice I\'ve never heard, whose eyes I\'ve never seen. A letter from someone who still believes in slow, genuine connections through words.',
    date: '2025-01-22',
    readTime: '4 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'how-to-start-penpal',
    title: 'Starting Your Penpal Journey: The Complete First Letter Guide',
    description: 'Learn how to start meaningful relationships with friends around the world. From your first letter to lasting friendship, discover everything you need for successful penpalling.',
    date: '2025-01-18',
    readTime: '5 min',
    category: 'Guide',
    image: '/letter-writing.png',
  },
  {
    id: 'penpal-culture-guide',
    title: 'Letter Cultures Around the World: Global Etiquette Through Penpalling',
    description: 'Explore different letter cultures and greetings from around the world, and build deeper relationships with your global penpals.',
    date: '2025-01-15',
    readTime: '7 min',
    category: 'Culture',
    image: '/brand-screen.png',
  },
  {
    id: 'language-exchange-tips',
    title: 'Language Learning Through Penpals: Effective Language Exchange Methods',
    description: 'Discover the most effective ways to learn a new language together with your penpal friends.',
    date: '2025-01-12',
    readTime: '6 min',
    category: 'Learning',
    image: '/conversation-detail.png',
  },
  {
    id: 'marcus-introduction',
    title: 'Penpalling with Marcus: Finding Genuine Friendship',
    description: 'Hi, I\'m Marcus. I want to have heartfelt conversations with friends around the world, sharing stories about daily life, hobbies, music, and travel. Let\'s connect through letters.',
    date: '2025-01-20',
    readTime: '4 min',
    category: 'Community',
    image: '/letter-writing.png',
  },
  {
    id: 'dearest-friend',
    title: 'Autumn Night Letter: From the Café by the Ocean',
    description: 'As fall approaches, the nights grow longer and loneliness creeps in. Though our paths may never cross, I write this letter while waiting for you at the café by the ocean.',
    date: '2025-01-20',
    readTime: '3 min',
    category: 'Inspiration',
    image: '/brand-screen.png',
  },
  {
    id: 'digital-detox-2025',
    title: 'Digital Detox 2025: Slow Communication with Penpal Letters',
    description: 'In a world where everything connects instantly, discover the value of slow communication through penpal letters.',
    date: '2025-02-20',
    readTime: '5 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'safe-penpaling-guide',
    title: 'Safe Penpaling Guide: 5 Rules for Secure Penpal Exchanges',
    description: 'Essential safety tips for building meaningful connections while protecting your privacy in the penpal world.',
    date: '2025-02-18',
    readTime: '6 min',
    category: 'Guide',
    image: '/brand-screen.png',
  },
  {
    id: 'making-global-friends',
    title: 'Making Global Friends: Letters That Cross Borders',
    description: 'Discover how penpal letters can help you build genuine friendships with people from around the world.',
    date: '2025-02-17',
    readTime: '5 min',
    category: 'Culture',
    image: '/letter-writing.png',
  },
  {
    id: '2025-best-penpal-app',
    title: '2025 Best Penpal App: Start Safe Global Communication',
    description: 'Among countless penpal apps, which one should you choose? Introducing Lettie, the best penpal app for safe and authentic communication in 2025.',
    date: '2025-02-15',
    readTime: '6 min',
    category: 'Guide',
    image: '/brand-screen.png',
  },
  {
    id: 'armchair-world-travel',
    title: 'Armchair World Travel: Cultural Journey Through Penpal',
    description: 'Travel the world from your living room through letters. Experience different cultures and perspectives without leaving home.',
    date: '2025-02-10',
    readTime: '4 min',
    category: 'Culture',
    image: '/letter-writing.png',
  },
  {
    id: 'language-exchange-friendship',
    title: 'Beyond Language Exchange to True Friendship: Gifts from Penpal',
    description: 'What starts as language practice can blossom into lifelong friendships. Discover the unexpected gifts of penpal relationships.',
    date: '2025-02-08',
    readTime: '5 min',
    category: 'Learning',
    image: '/conversation-detail.png',
  },
  {
    id: 'digital-detox-slow-living',
    title: 'Digital Detox and Slow Living: 2025 Wellness Trend',
    description: 'In an era of constant connectivity, slow living and digital detox have become essential wellness practices.',
    date: '2025-02-05',
    readTime: '6 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
  },
  {
    id: 'cultural-understanding-global-etiquette',
    title: 'The Joy of Understanding Differences: Global Penpal Etiquette',
    description: 'Learn about cultural differences and etiquette from around the world to build more meaningful penpal relationships.',
    date: '2025-02-01',
    readTime: '7 min',
    category: 'Culture',
    image: '/brand-screen.png',
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/en" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <Image
                src="/lettie-icon.png"
                alt="Lettie app icon"
                className="w-10 h-10 rounded-2xl"
                width={40}
                height={40}
                priority
              />
            </div>
            <span className="text-2xl font-bold text-foreground">Lettie</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/en/blog" className="text-primary font-semibold">Blog</Link>
            <Link href="/en/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            <Link href="/en/guide" className="text-muted-foreground hover:text-primary transition-colors">Guide</Link>
            <Link href="/en/stories" className="text-muted-foreground hover:text-primary transition-colors">Stories</Link>
            <Link href="/en/penpal-app" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Download
            </a>
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
            <span className="text-sm font-semibold text-foreground/80 tracking-wide">True connections start with letters</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 tracking-tight animate-fade-in-up animation-delay-100">
            <span className="text-gradient">
              Letters
            </span>
            <br />
            <span className="text-foreground">from the Heart</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
            Heartfelt stories from around the world
            <br className="hidden md:block" />
            Sharing every moment of the penpal journey together
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, idx) => {
            const categoryIcons: Record<string, React.ReactNode> = {
              'Heartfelt': <Feather className="w-8 h-8" />,
              'Community': <Mail className="w-8 h-8" />,
              'Guide': <ArrowRight className="w-8 h-8" />,
              'Culture': <Globe className="w-8 h-8" />,
              'Learning': <Clock className="w-8 h-8" />,
              'Inspiration': <Feather className="w-8 h-8" />
            };

            const categoryColors: Record<string, string> = {
              'Heartfelt': 'from-primary-light to-secondary-light',
              'Community': 'from-secondary-light to-accent-light',
              'Guide': 'from-success-light to-primary-light',
              'Culture': 'from-accent-light to-primary-light',
              'Learning': 'from-secondary-light to-primary-light',
              'Inspiration': 'from-primary-light to-secondary-light'
            };

            return (
              <article
                key={post.id}
                className="group relative glass-panel rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link href={`/en/blog/${post.id}`} className="block h-full flex flex-col">
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
              <span className="text-sm font-bold text-blue-50 tracking-wide">Start your penpal journey today</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
              Your first letter awaits
            </h2>

            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
              Connect with friends worldwide through letters<br className="hidden md:block" />
              and build genuine relationships
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={appStoreUrl}
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
                href={playStoreUrl}
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
    </div>
  );
}

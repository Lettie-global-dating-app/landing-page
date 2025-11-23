import { Mail, Globe, Heart, Shield, Star, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu'

export default function Home() {
  const appStoreUrl = "https://apps.apple.com/app/id6746454876"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
  const privacyPolicyUrl = "https://relic-baboon-412.notion.site/Lettie-1fc766a8bb4680458932ea6a238e97b9"
  const termsOfServiceUrl = "https://relic-baboon-412.notion.site/silverithm-13c766a8bb468082b91ddbd2dd6ce45d"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Lettie App Icon */}
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
            <span className="text-2xl font-bold text-foreground">Lettie</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <Link href="/en/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link href="/en/guide" className="text-muted-foreground hover:text-primary transition-colors">Guide</Link>
            <Link href="/en/stories" className="text-muted-foreground hover:text-primary transition-colors">Stories</Link>
            <Link href="/en/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Download
            </a>
          </div>
          <MobileMenu />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-32 md:py-48 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-indigo-100/40 via-purple-100/40 to-transparent rounded-full blur-3xl opacity-60 dark:from-indigo-900/20 dark:via-purple-900/20"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-blue-800/20 dark:mix-blend-normal"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-800/20 dark:mix-blend-normal"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-800/20 dark:mix-blend-normal"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full glass-panel hover:shadow-md transition-all duration-300 animate-fade-in-up">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground/80 tracking-wide">True connections start with letters</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in-up animation-delay-100">
            Connect with friends
            <br />
            <span className="inline-block text-gradient pb-2">
              through letters
            </span>
            <br />
            <span className="text-foreground">worldwide</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-up animation-delay-200">
            Not based on photos or looks, but on <span className="font-medium text-foreground">hearts and thoughts</span>.
            <br className="hidden md:block" />
            Experience <span className="font-medium text-foreground">genuine communication</span> with Lettie.
          </p>

          {/* App Store Rating */}
          <div className="flex items-center justify-center mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center space-x-4 glass-panel rounded-full px-6 py-3">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-foreground font-bold text-lg">5.0</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground font-medium">App Store</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>App Store</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Google Play</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
            <span className="glass-panel px-4 py-2 rounded-full">✨ Free Download</span>
            <span className="glass-panel px-4 py-2 rounded-full">📱 iOS & Android</span>
            <span className="glass-panel px-4 py-2 rounded-full">🌍 Global Community</span>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-20">Experience Lettie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {[
              { src: "/1427@3x.png", text: "Get to know each other\nthrough genuine exchanges" },
              { src: "/1428@3x.png", text: "Profiles gradually\nbecome clearer" },
              { src: "/1432@3x.png", text: "Exchange contacts safely\nafter 5 letters" },
              { src: "/1433@3x.png", text: "Discover letters and\nstart conversations" },
              { src: "/1434@3x.png", text: "Connect with friends\nworldwide" },
              { src: "/1435@3x.png", text: "Heartfelt letters lead to\nmeaningful connections" }
            ].map((screenshot, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-full relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2">
                  <Image
                    src={screenshot.src}
                    alt={`Lettie app screenshot ${idx + 1}`}
                    className="w-full h-auto"
                    width={390}
                    height={844}
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center font-medium whitespace-pre-line">{screenshot.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Special Features of Lettie</h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Reinterpreting the analog sensibility<br className="md:hidden" /> of letter writing into a digital experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Feature 1: Large */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-primary-light text-primary">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Letter Exchange System</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Experience genuine communication by exchanging heartfelt letters with people around the world.
                  Enjoy deep conversations through letters with the aesthetics of waiting, not instant chats.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-light/30 rounded-full blur-2xl -ml-10 -mb-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-secondary-light text-secondary">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Gradual Profile Reveal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As you exchange letters, your friend&apos;s photo gradually becomes clearer, pursuing connections that start with hearts, not looks.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-accent-light/30 rounded-full blur-2xl -ml-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-accent-light text-accent">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Safe Contact Exchange</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After getting to know each other through 5 letters, exchange contacts safely and reliably.
                </p>
              </div>
            </div>

            {/* Feature 4: Large */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl -mr-16 -mb-16 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-primary-light text-primary">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Global Cultural Exchange</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Connect with users worldwide from Korea, Japan, America, Europe, and more.
                  Experience sharing hearts beyond language barriers.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-warning-light/30 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-warning-light text-warning">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Gem System</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A fun point system that provides motivation to open and write more letters.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-light/30 rounded-full blur-2xl -ml-10 -mb-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-secondary-light text-secondary">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Emotional Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful and sophisticated user experience that preserves the analog sensibility of letter writing.
                </p>
              </div>
            </div>

            {/* Feature 7 (Optional/New) - Call to Action in Grid */}
            <div className="md:col-span-1 glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Start Today</h3>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline flex items-center">
                Download App <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Blog Posts Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Getting Started with Penpals</h2>
          <p className="text-center text-muted-foreground mb-12">Learn how to connect with friends around the world</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/en/blog/how-to-start-penpal" className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">First Letter Writing Guide</h3>
              <p className="text-muted-foreground mb-4">The perfect way to write your first letter for successful penpalling</p>
              <span className="text-primary font-semibold group-hover:underline">Learn More →</span>
            </Link>
            <Link href="/en/blog/penpal-culture-guide" className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Letter Cultures Around the World</h3>
              <p className="text-muted-foreground mb-4">Explore different letter cultures and global etiquette by country</p>
              <span className="text-secondary font-semibold group-hover:underline">Learn More →</span>
            </Link>
            <Link href="/en/blog/language-exchange-tips" className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-success-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Language Exchange Tips</h3>
              <p className="text-muted-foreground mb-4">Effective language learning methods through penpalling</p>
              <span className="text-success font-semibold group-hover:underline">Learn More →</span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/en/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-lg transition-colors">
              View All Blog Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guide Links Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Complete Guide to Perfect Penpalling</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/en/guide/getting-started" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Getting Started with Penpals</h3>
                <p className="text-sm text-muted-foreground">Complete guide for your first penpal</p>
              </div>
            </Link>
            <Link href="/en/guide/writing-tips" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Letter Writing Mastery</h3>
                <p className="text-sm text-muted-foreground">How to write engaging letters</p>
              </div>
            </Link>
            <Link href="/en/guide/cultural-exchange" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Globe className="w-6 h-6 text-success flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Cultural Exchange</h3>
                <p className="text-sm text-muted-foreground">Understanding world cultures</p>
              </div>
            </Link>
            <Link href="/en/guide/language-learning" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Star className="w-6 h-6 text-warning flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Language Learning</h3>
                <p className="text-sm text-muted-foreground">Master foreign languages through penpalling</p>
              </div>
            </Link>
            <Link href="/en/guide/building-friendship" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Building Friendships</h3>
                <p className="text-sm text-muted-foreground">Sustainable penpal relationships</p>
              </div>
            </Link>
            <Link href="/en/guide/safety-privacy" className="flex items-start gap-4 p-6 glass-panel rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
              <Shield className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Safety and Privacy</h3>
                <p className="text-sm text-muted-foreground">Enjoy penpalling safely</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section id="recommended" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Perfect For These People</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Those seeking global friends</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Want genuine connections with friends from various countries and cultures around the world
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Those who value deep conversations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tired of superficial chats, seeking meaningful conversations and emotional exchanges
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Those learning languages</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Want to improve language skills through natural communication with native speakers
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl glass-panel hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Those who love letter writing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enjoy the analog sensibility and emotional richness of traditional letter writing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Start Your First Letter Today
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Special connections are waiting for you at Lettie.<br />
              Write your first letter now and meet friends worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Download on App Store</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Get it on Google Play</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/lettie-icon.png"
                  alt="Lettie"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="font-bold text-foreground text-xl">Lettie</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A global penpal app connecting friends worldwide through letters
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><Link href="/en/guide" className="hover:text-primary transition-colors">Guide</Link></li>
                <li><Link href="/en/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/en/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/en/stories" className="hover:text-primary transition-colors">Stories</Link></li>
                <li><Link href="/en/penpal-app" className="hover:text-primary transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={privacyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href={termsOfServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Lettie. All rights reserved. | Developed by junhyeong kim</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

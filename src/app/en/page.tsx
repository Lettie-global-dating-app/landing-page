import { Mail, Shield, Star, Users, ArrowRight, Download} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const appStoreUrl = "https://apps.apple.com/app/id6746454876";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Lettie App Icon */}
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
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/en/blog" className="text-gray-600 hover:text-blue-500 transition-colors">Blog</Link>
            <Link href="/en/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
            <Link href="/en/guide" className="text-gray-600 hover:text-blue-500 transition-colors">Guide</Link>
            <Link href="/en/stories" className="text-gray-600 hover:text-blue-500 transition-colors">Stories</Link>
            <Link href="/en/penpal-app" className="text-gray-600 hover:text-blue-500 transition-colors">About</Link>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Download
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <Mail className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">True connections start with letters</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Connect with
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              global friends
            </span>
            <br />
            <span className="text-gray-800">through penpal letters</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            Start a special connection based on thoughts and feelings, not just photos or looks.
            <br className="hidden md:block" />
            Experience genuine communication with Lettie.
          </p>
          {/* App Store Rating */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-semibold">5.0</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 text-sm">App Store</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg inline-flex items-center"
            >
              <Download className="mr-2 w-5 h-5" />
              Download on the App Store
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg inline-flex items-center"
            >
              <Download className="mr-2 w-5 h-5" />
              Get it on Google Play
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">Free Download</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">iOS 13.0+ / Android 5.0+</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">In-App Purchases</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Developer: junhyeong kim</span>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots Grid */}
      <section id="app-preview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">App Preview</h2>
          {/* 6 Mobile Screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {/* 1. Screenshot 1427 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1427@3x.png"
                  alt="Lettie app screenshot 1"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">Take your time and get to know<br />each other&apos;s true selves</p>
            </div>

            {/* 2. Screenshot 1428 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1428@3x.png"
                  alt="Lettie app screenshot 2"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">With every letter exchanged,<br />profiles become clearer</p>
            </div>

            {/* 3. Screenshot 1432 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1432@3x.png"
                  alt="Lettie app screenshot 3"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">After 5 sincere letters,<br />exchange contacts safely</p>
            </div>

            {/* 4. Screenshot 1433 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1433@3x.png"
                  alt="Lettie app screenshot 4"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">Discover interesting letters<br />and start meaningful conversations</p>
            </div>

            {/* 5. Screenshot 1434 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1434@3x.png"
                  alt="Lettie app screenshot 5"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">Experience genuine connections<br />with people worldwide</p>
            </div>

            {/* 6. Screenshot 1435 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image
                  src="/1435@3x.png"
                  alt="Lettie app screenshot 6"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">Heartfelt letters<br />lead to new connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Special Features of Lettie</h2>
            <p className="text-lg text-gray-600 font-light">A new way to meet through letters</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100/50">
              <Mail className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Penpal Letter Exchange System</h3>
              <p className="text-gray-600">Experience genuine communication by exchanging penpal letters with friends from all over the world</p>
            </div>
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-purple-100/50">
              <Shield className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Gradual Profile Reveal</h3>
              <p className="text-gray-600">The more penpal letters you exchange, the clearer your friend&apos;s profile becomes, focusing on personality over appearance</p>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-emerald-100/50">
              <Users className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Safe Contact Exchange</h3>
              <p className="text-gray-600">After 5 penpal letters, exchange contacts safely and build trust</p>
            </div>
          </div>
        </div>
      </section>
      {/* ... 이하 생략 (기존 구조 동일하게 유지) ... */}
    </div>
  );
} 
import { Mail, Globe, Heart, Shield, Star, Users, ArrowRight, Download} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const appStoreUrl = "https://apps.apple.com/app/id6746454876";
  const privacyPolicyUrl = "https://relic-baboon-412.notion.site/Lettie-1fc766a8bb4680458932ea6a238e97b9";
  const termsOfServiceUrl = "https://relic-baboon-412.notion.site/silverithm-13c766a8bb468082b91ddbd2dd6ce45d";

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
            <a href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">Features</a>
            <a href="#app-preview" className="text-gray-600 hover:text-blue-500 transition-colors">App Preview</a>
            <a href="#recommended" className="text-gray-600 hover:text-blue-500 transition-colors">Who It's For</a>
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
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Connect with global friends through <span className="text-blue-500">penpal letters</span>
            <span className="text-blue-500 block">Build genuine relationships worldwide</span>
            with Lettie Penpal App
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Experience a unique way to connect globally.<br />
            Lettie is a new style of dating app where you communicate with global friends through letters.<br />
            Start a special connection based on thoughts and feelings, not just photos or looks.
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
            <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
          <div className="text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">Free Download</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">iOS 13.0+</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">In-App Purchases</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Developer: junhyeong kim</span>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots Grid */}
      <section id="app-preview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">App Preview</h2>
          {/* 5 Mobile Screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* 1. Letter Writing Screen */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/letter-writing-en.png" 
                  alt="Lettie penpal letter writing screen - emotional letter writing interface" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">Take your time and get to know each other<br />through heartfelt penpal letters</p>
            </div>
            {/* 2. Conversation Detail Screen */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/conversation-detail-en.png" 
                  alt="Lettie penpal conversation detail screen - gradual profile reveal system" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">With every letter exchanged,<br />your friend's profile becomes clearer</p>
            </div>
            {/* 3. Contact Exchange Complete */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/contact-exchange-en.png" 
                  alt="Lettie penpal contact exchange complete screen - safe contact exchange after 5 letters" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">After 5 sincere penpal letters,<br />exchange contacts safely</p>
            </div>
            {/* 4. Letter Feed Screen */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/letter-feed-en.png" 
                  alt="Lettie penpal letter feed screen - global users' letter feed" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">Discover interesting penpal letters<br />and start meaningful conversations</p>
            </div>
            {/* 5. Brand Screen */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <Image 
                  src="/brand-screen-en.png" 
                  alt="Lettie penpal brand introduction screen - heartfelt letter culture" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center font-medium">Heartfelt penpal letters<br />lead to new connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Special Features of Lettie</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Mail className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Penpal Letter Exchange System</h3>
              <p className="text-gray-600">Experience genuine communication by exchanging penpal letters with friends from all over the world</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Gradual Profile Reveal</h3>
              <p className="text-gray-600">The more penpal letters you exchange, the clearer your friend's profile becomes, focusing on personality over appearance</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
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
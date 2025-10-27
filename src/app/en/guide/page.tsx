import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Globe, Heart, Shield, Users, Mail, ArrowRight, Languages, Sparkles, Download } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Pen Pal Guide - Everything About Making Global Friends | Lettie',
  description: 'Complete guide for successful pen pals: how to start, letter writing tips, cultural exchange guide, language learning methods',
  keywords: ['pen pal guide', 'letter writing', 'making global friends', 'language exchange', 'cultural exchange', 'pen pal etiquette', 'international friends'],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide',
  },
};

const guideCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'How to start your first pen pal and basic etiquette',
    icon: Mail,
    color: 'from-blue-400 to-blue-600',
    guides: [
      'Perfect Profile Writing Guide',
      'How to Write Your First Letter',
      'Tips for Finding Pen Pals',
      'Starting Safely'
    ]
  },
  {
    id: 'writing-tips',
    title: 'Master Letter Writing',
    description: 'Tips for writing engaging and meaningful letters',
    icon: BookOpen,
    color: 'from-purple-400 to-purple-600',
    guides: [
      'Choosing Interesting Topics',
      'Expressing Emotions',
      'Storytelling Techniques',
      'Letter Structure and Format'
    ]
  },
  {
    id: 'cultural-exchange',
    title: 'Cultural Exchange',
    description: 'Understanding and exchanging diverse cultures',
    icon: Globe,
    color: 'from-green-400 to-green-600',
    guides: [
      'Letter Culture Around the World',
      'Building Cultural Sensitivity',
      'Holiday and Anniversary Greetings',
      'Sharing Food Culture'
    ]
  },
  {
    id: 'language-learning',
    title: 'Language Learning',
    description: 'Effective language learning through pen pals',
    icon: Languages,
    color: 'from-yellow-400 to-yellow-600',
    guides: [
      'Finding Language Exchange Partners',
      'Effective Language Learning Strategies',
      'Using Translation Tools',
      'Learning Native Expressions'
    ]
  },
  {
    id: 'building-friendship',
    title: 'Building Friendship',
    description: 'Creating sustainable pen pal relationships',
    icon: Heart,
    color: 'from-red-400 to-red-600',
    guides: [
      'Building Trust',
      'Empathy and Understanding',
      'Conflict Resolution',
      'Tips for Long-term Relationships'
    ]
  },
  {
    id: 'safety-privacy',
    title: 'Safety & Privacy',
    description: 'Essential guidelines for safe pen pals',
    icon: Shield,
    color: 'from-indigo-400 to-indigo-600',
    guides: [
      'Protecting Personal Information',
      'Safe Communication Guide',
      'Recognizing Warning Signs',
      'Using Lettie Safety Features'
    ]
  }
];

const quickTips = [
  {
    title: 'Reply Regularly',
    description: 'Exchanging letters at regular intervals strengthens your relationship.'
  },
  {
    title: 'Use Photos and Drawings',
    description: 'Visual elements make your letters more lively and engaging.'
  },
  {
    title: 'Continue Conversation with Questions',
    description: 'Showing curiosity about your pen pal keeps the conversation flowing naturally.'
  },
  {
    title: 'Respect Cultural Differences',
    description: 'Understanding and respecting each other&apos;s culture is essential.'
  }
];

export default function GuidePage() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Starting a Successful Pen Pal Relationship',
    description: 'How to communicate with friends around the world through letters and build meaningful relationships',
    image: 'https://lettie-dating.com/lettie-og-image.png',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Lettie App'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        text: 'Download the Lettie app and create your profile',
        name: 'Install App and Sign Up'
      },
      {
        '@type': 'HowToStep',
        text: 'Set your interests and languages to find matched pen pals',
        name: 'Find Pen Pals'
      },
      {
        '@type': 'HowToStep',
        text: 'Write your first letter to start a conversation',
        name: 'Write First Letter'
      },
      {
        '@type': 'HowToStep',
        text: 'Exchange letters regularly to develop your relationship',
        name: 'Develop Relationship'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
              <Link href="/en/guide" className="text-blue-500 font-semibold">Guide</Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Complete Pen Pal Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about communicating<br />
            with friends around the world through letters
          </p>
        </section>

        {/* Guide Categories Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guideCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {category.guides.map((guide, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{guide}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/en/guide/${category.id}`}
                      className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Pro Tips for Pen Pal Success
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              4 Steps to Start with Lettie
            </h2>
            <div className="space-y-8">
              {[
                { step: 1, title: 'Set Up Profile', desc: 'Create an attractive profile that expresses yourself', icon: Users },
                { step: 2, title: 'Find Pen Pals', desc: 'Discover friends worldwide with similar interests', icon: Globe },
                { step: 3, title: 'Write Letters', desc: 'Start a conversation with your heartfelt first letter', icon: Mail },
                { step: 4, title: 'Build Friendship', desc: 'Become true friends through consistent communication', icon: Heart }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                    <Icon className="w-8 h-8 text-blue-500 flex-shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Start Your Pen Pal Journey Now
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Now that you&apos;ve read the guide, it&apos;s time to begin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

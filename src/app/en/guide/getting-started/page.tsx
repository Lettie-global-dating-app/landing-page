import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, User, Heart, Shield, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started with Pen Pals - Complete Guide | Lettie',
  description: 'Start your pen pal journey with Lettie - from creating your first profile to basic etiquette for successful pen palling',
  keywords: ['starting penpal', 'first letter', 'penpal profile', 'penpal etiquette', 'Lettie guide'],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/getting-started',
  },
  openGraph: {
    title: 'Getting Started with Pen Pals - Complete Guide | Lettie',
    description: 'Start your pen pal journey with Lettie - from creating your first profile to basic etiquette',
    url: 'https://lettie-dating.com/en/guide/getting-started',
    siteName: 'Lettie',
    locale: 'en_US',
    type: 'article',
  },
};

export default function GettingStartedGuidePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lettie-dating.com/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guide',
        item: 'https://lettie-dating.com/en/guide',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Getting Started',
        item: 'https://lettie-dating.com/en/guide/getting-started',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/en" className="flex items-center space-x-3">
            <Image
              src="/lettie-icon.png"
              alt="Lettie"
              className="w-10 h-10 rounded-2xl"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </Link>
          <Link
            href="/en/guide"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Guide
          </Link>
        </nav>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Getting Started with Pen Pals
            </h1>
            <p className="text-xl text-gray-600">
              Learn how to start your first pen pal relationship and basic etiquette
            </p>
          </div>

          <div className="space-y-12">
            {/* Profile Creation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-blue-500" />
                Perfect Profile Creation Guide
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Elements of a Great Profile</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Genuine Self-Introduction:</strong> Show your authentic self without pretense</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Specific Interests:</strong> Share concrete hobbies and interests rather than vague statements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Language Goals:</strong> Clearly state which language you want to learn or practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Friendly Tone:</strong> Write in a warm and approachable manner</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Your profile is the first impression you make on potential pen pals. A well-crafted profile
                  helps match you with like-minded people and starts conversations on the right foot.
                </p>
              </div>
            </section>

            {/* First Letter */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-500" />
                Writing Your First Letter
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">First Letter Structure</h3>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li><strong>Greeting:</strong> Start with a friendly hello</li>
                    <li><strong>Introduction:</strong> Brief self-introduction (3-4 sentences)</li>
                    <li><strong>Common Ground:</strong> Mention shared interests from their profile</li>
                    <li><strong>Questions:</strong> Ask 2-3 thoughtful questions</li>
                    <li><strong>Closing:</strong> Express excitement about their reply</li>
                  </ol>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                  <p className="font-semibold text-gray-800 mb-2">💡 Pro Tip</p>
                  <p>
                    Keep your first letter concise but meaningful. Aim for 150-300 words - enough to
                    show interest without overwhelming your pen pal.
                  </p>
                </div>
              </div>
            </section>

            {/* Finding Pen Pals */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-500" />
                Tips for Finding Pen Pals
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">✅ Do</h3>
                    <ul className="space-y-2">
                      <li>• Look for shared interests</li>
                      <li>• Read profiles carefully</li>
                      <li>• Be patient and open-minded</li>
                      <li>• Start with genuine curiosity</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">❌ Don&apos;t</h3>
                    <ul className="space-y-2">
                      <li>• Send generic messages</li>
                      <li>• Rush into personal topics</li>
                      <li>• Give up after one try</li>
                      <li>• Judge based on location alone</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                Starting Safely with Lettie
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Lettie&apos;s Safety Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>5-Letter Rule:</strong> Contact exchange only after 5 letters ensures safe getting-to-know period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Photo-Free Start:</strong> Focus on personality and values, not appearances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Report System:</strong> Easy reporting and blocking features for your safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Privacy Protection:</strong> Your personal information stays private until you&apos;re ready</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Lettie is designed with your safety in mind. Take advantage of these features to build
                  genuine friendships at your own pace.
                </p>
              </div>
            </section>

            {/* Getting Started Steps */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Your First Week on Lettie
              </h2>
              <div className="space-y-4">
                {[
                  {
                    day: 'Day 1',
                    title: 'Set Up Your Profile',
                    description: 'Complete your profile with interests, languages, and a friendly introduction'
                  },
                  {
                    day: 'Day 2-3',
                    title: 'Browse and Connect',
                    description: 'Explore profiles and send 3-5 first letters to potential pen pals'
                  },
                  {
                    day: 'Day 4-5',
                    title: 'Respond and Engage',
                    description: 'Reply to letters you receive and continue promising conversations'
                  },
                  {
                    day: 'Day 6-7',
                    title: 'Build Momentum',
                    description: 'Keep the conversation flowing with thoughtful questions and stories'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{step.day}: {step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Pen Pal Journey?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Download Lettie and connect with friends around the world
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
  );
}

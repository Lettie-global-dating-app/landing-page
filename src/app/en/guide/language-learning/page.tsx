import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Languages } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Language Learning Through Pen Pals | Lettie',
  description: 'Effective language learning methods through pen pal correspondence and letter exchange',
  keywords: ['language learning', 'language exchange', 'pen pal learning', 'foreign language'],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/language-learning',
  },
};

export default function LanguageLearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/en" className="flex items-center space-x-3">
            <Image src="/lettie-icon.png" alt="Lettie" className="w-10 h-10 rounded-2xl" width={40} height={40} priority />
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </Link>
          <Link href="/en/guide" className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Back to Guide
          </Link>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Language Learning</h1>
            <p className="text-xl text-gray-600">Effective language learning through pen pal correspondence</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <h2>Coming Soon</h2>
            <p>Comprehensive language learning strategies for pen pals coming soon!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Lasting Friendships - Pen Pal Relationships | Lettie',
  description: 'Learn how to build and maintain lasting friendships with your pen pals',
  keywords: ['building friendship', 'pen pal relationships', 'lasting friendships', 'pen pal bonds'],
  alternates: {
    canonical: 'https://lettie-dating.com/en/guide/building-friendship',
  },
};

export default function BuildingFriendshipPage() {
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
            <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Building Friendship</h1>
            <p className="text-xl text-gray-600">Creating sustainable and meaningful pen pal relationships</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <h2>Coming Soon</h2>
            <p>Tips for building lasting friendships through pen pal correspondence coming soon!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
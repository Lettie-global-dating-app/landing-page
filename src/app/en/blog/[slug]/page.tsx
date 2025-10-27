import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';

type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  keywords: string[];
};

const blogPosts: Record<string, BlogPost> = {
  'marcus-introduction': {
    id: 'marcus-introduction',
    title: 'Penpalling with Marcus: Finding Genuine Friendship',
    description: 'Join Marcus in meaningful conversations with friends around the world. From daily life to hobbies, music, and travel, start your journey towards true friendship through genuine communication.',
    date: '2025-01-20',
    readTime: '4 min',
    category: 'Community',
    image: '/letter-writing.png',
    author: 'Marcus',
    keywords: ['penpal friends', 'global communication', 'cultural exchange', 'genuine friendship', 'penpal community', 'make international friends', 'Lettie penpal', 'letter friends'],
    content: `
# Hi there, I'm Marcus

Nice to meet you! My name is Marcus, and I'm really happy to be here on Lettie.

## Why I Chose Lettie

I enjoy meeting new people and learning about different places, cultures, and ways of life. I believe every good conversation can teach us something new.

Lettie isn't just another messaging app. It's a special space where we get to know each other slowly and deeply through heartfelt letters. Instead of conversations that quickly pass by, we exchange letters filled with meaning and create genuine connections.

## Who I Am

**Friendly and down-to-earth**: I prefer comfortable and natural conversations over formal ones. As we share stories, you'll feel like we're old friends.

**Seeking meaningful conversations**: Beyond surface-level greetings, I want to genuinely share everything from daily life stories to hobbies, music, travel, or just random thoughts.

**A good listener**: I love to listen. Please tell me your stories, worries, joys, and dreams. I want to share perspectives and grow together through our conversations.

## Stories I'd Love to Share

### Small Moments of Daily Life
The scenery you saw while drinking coffee, the music you heard today, a passage from a book you read... These small daily moments are the stories that show who we really are.

### Culture and Travel
What's the culture like where you live? Do you have favorite foods, holidays, or traditions? If you love traveling, please share stories about places you want to visit or have been to.

### Music and Art
Music connects hearts beyond language barriers. Share your favorite songs and tell me what they mean to you.

### Thoughts on Life
Sometimes deep conversations are wonderful too. Goals in life, values, thoughts on happiness... Sharing our philosophies can teach us new perspectives.

## What Kind of Penpal Am I Looking For?

**Someone who values honest friendship**: If you're using Lettie with a genuine desire to make friends, you're welcome here.

**Positive energy**: I want to build a relationship where we have positive conversations and encourage each other rather than focusing on negativity.

**Enjoys consistent communication**: Letters don't have to be rushed. But I hope you enjoy conversations that continue steadily, even if slowly.

## Building Friendship Together with Lettie

The greatest advantage of Lettie is that there's no rush. You can't exchange contact information until after exchanging 5 letters, allowing time to truly get to know each other and build genuine trust.

Starting as penpals without photos means we meet through hearts and thoughts, not appearances. It's a special experience where you show the real you and discover the real me.

## One Letter at a Time, Walking Together

Our connection begins with one letter. Perfect sentences aren't necessary. Fluent language isn't required. Your sincere story is all that matters.

Perhaps we live on different continents. Time differences might delay replies. But that's exactly the charm of penpalling, isn't it? We can feel excitement in the waiting and share the joy when we receive a letter.

**I'm curious about your story.**

Right now, at this very moment, somewhere you're reading these words. I hope our paths meet on Lettie.

Start genuine friendship with one letter.

## Find Marcus on Lettie

Download the Lettie app and start penpal matching. You might randomly receive my letter. Or you could send me one first.

**Let's share stories and build friendship one letter at a time.**

Looking forward to hearing from you soon!
— Marcus
    `
  },
  'dearest-friend': {
    id: 'dearest-friend',
    title: 'Autumn Night Letter: From the Café by the Ocean',
    description: 'As fall approaches and nights grow longer, loneliness sometimes visits. Though our paths may never cross, this is a letter written while waiting for you at the café by the ocean. Find friends to share your loneliness with on Lettie.',
    date: '2025-01-20',
    readTime: '3 min',
    category: 'Inspiration',
    image: '/brand-screen.png',
    author: 'Lettie',
    keywords: ['heartfelt letter', 'penpal friendship', 'overcoming loneliness', 'healing hearts', 'penpal comfort', 'sincere letters', 'emotional connection', 'oceanside café'],
    content: `
# Dearest friend,

Fall is fast approaching, and I know how long and heavy the nights become when loneliness tugs at your heart.

## To You, Whom I May Never Meet

We might never share a thought, a word, and our paths may never cross in this life, although I wish they did.

If we were to meet...

**You would certainly show me**: There's more to the life I'm living. The world you've experienced, the landscapes you've seen, the emotions you've felt would enrich my life.

**I would certainly show you**: The light you do not see in yourself yet. Sometimes we can't see ourselves clearly. But in someone's letters, we discover new parts of ourselves.

## At the Café by the Ocean

Just know that, wherever you are, whatever you're doing...

**I'll always be at the café by the ocean.**

Where the sound of waves can be heard, where coffee aroma fills the air, I'll be waiting for you there. Ready to just sit and share your burdens.

## Things We Can Share

### Loneliness Halves When Shared
There's a weight too heavy to carry alone. The kind of loneliness no one knows unless you speak of it. On Lettie, you can share these stories too. Someone is here to truly listen without judgment.

### Joy Doubles When Shared
That delicious cup of coffee you had today, the pretty flower you saw on the street. Moments that would just pass by if not shared with someone become special memories in letters.

### Put Down Your Burdens
Sometimes just talking is enough. Even without solutions, even without answers, it's okay. Just knowing someone will listen, knowing you're not alone, gives strength.

## The Comfort Letters Bring

Letters are special. They don't need to be rushed like real-time chat. You can take your time and write at your own pace, filling them with your heart.

**Healing while writing**: As you transfer thoughts in your mind to words, complicated emotions become organized.

**Comforted while reading**: When you receive a letter someone took time to write, you feel that you matter.

**Excitement while waiting**: Even the time waiting for a reply isn't lonely. You spend your day imagining the letter that will come.

## On Lengthening Autumn Nights

When fall arrives, nights grow longer. At the end of the day, there are more times when you're left alone. What if you had a warm letter on such nights?

**You are not alone.**

Somewhere in the world, at the café by the ocean, or perhaps somewhere else, someone is waiting for your letter. Someone wants to hear your story.

## Let's Meet on Lettie

Even if our paths never directly cross, we can meet through letters.

**Through exchanging 5 letters**: Get to know each other slowly. There's no rush.

**Starting without photos**: We understand each other through hearts and thoughts, not appearances.

**A space where only sincerity flows**: Lettie is where we build real friendship.

## Waiting for Your First Letter

Sitting by the window at the café by the ocean, listening to the waves, I'm waiting for your letter.

How was your day?
What thoughts crossed your mind today?
Is there a story you've been keeping in your heart?

**Please tell me. Your story.**

Our paths may never cross, but our hearts can connect through letters.

Before autumn nights grow longer, start your first letter.

**From the café by the ocean, waiting for you...**

— Always here for you
    `
  },
  'how-to-start-penpal': {
    id: 'how-to-start-penpal',
    title: 'Starting Your Penpal Journey: The Complete First Letter Guide',
    description: 'Learn how to start meaningful relationships with friends around the world. From your first letter to lasting friendship, discover everything you need for successful penpalling.',
    date: '2025-01-18',
    readTime: '5 min',
    category: 'Guide',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['starting penpal', 'first letter', 'penpal guide', 'letter writing tips', 'international friends'],
    content: `
# The Complete Guide to Starting Your Penpal Journey

Penpalling is more than just exchanging letters. It's a special experience of building genuine relationships with people from diverse cultures and backgrounds around the world. Let's explore how to start penpalling with Lettie.

## 1. The Importance of Your First Letter

They say you never get a second chance at a first impression. The same is true for penpalling. Your first letter is the first window that shows your penpal who you are.

### Components of a Great First Letter

**Self-introduction**: Start with a simple yet interesting introduction. Mention your name, age, location, along with one or two characteristics that make you special.

**Share your interests**: Share your hobbies, favorite music, movies, books, etc. Common interests make great starting points for conversation.

**Ask questions**: Express genuine curiosity about your penpal. Questions like "What's your favorite season in your country?" naturally continue the conversation.

## 2. Developing Cultural Sensitivity

### Respecting Diversity

The greatest charm of penpalling is experiencing diverse cultures. Keep an open mind about your penpal's culture, religion, and lifestyle.

### Overcoming Language Barriers

- Use simple and clear sentences
- Avoid slang or idioms, or add explanations
- Try learning greetings in your penpal's language

## 3. Building Sustainable Penpal Relationships

### Regular Communication

It's important to exchange letters at regular intervals. Too frequent can be overwhelming, too infrequent can make the relationship distant.

### Authentic Conversations

Go beyond surface-level conversations and share deeper stories. From small daily moments to life goals, sincere dialogue deepens relationships.

## 4. Leveraging Lettie's Special Features

### The 5-Letter Rule

Lettie allows contact exchange after 5 letters. This ensures enough time to truly get to know each other.

### Privacy Protection

Starting as penpals without photos lets you focus on inner qualities, not appearance. Build genuine connections.

## 5. Penpal Etiquette

### Do's
- Maintain a polite and respectful attitude
- Reply sincerely to your penpal's letters
- Understand and accept cultural differences
- Keep conversations positive and constructive

### Don'ts
- Don't rush to ask for personal information
- Don't impose political or religious views
- Avoid negative or critical attitudes
- Don't ignore your penpal or suddenly stop contact

## Conclusion

Penpalling is a window to see the world more broadly. With Lettie, you can build safe and meaningful global friendships. Start writing your first letter today!

**Meet friends from around the world waiting for you on Lettie.**
    `
  },
  'penpal-culture-guide': {
    id: 'penpal-culture-guide',
    title: 'Letter Cultures Around the World: Global Etiquette Through Penpalling',
    description: 'Explore different letter cultures and greetings from around the world, and build deeper relationships with your global penpals.',
    date: '2025-01-15',
    readTime: '7 min',
    category: 'Culture',
    image: '/brand-screen.png',
    author: 'Lettie',
    keywords: ['letter culture', 'global etiquette', 'penpal culture', 'international exchange', 'cultural differences'],
    content: `
# Understanding Letter Cultures Around the World

Experiencing diverse cultures through penpalling is a special joy. Each country has unique letter cultures and etiquette, and understanding them enables richer exchanges.

## Asian Letter Cultures

### Japan
In Japan, seasonal greetings are highly valued. There are traditions of sending summer greetings (暑中見舞い) and New Year's cards (年賀状).

### Korea
Korea starts letters with polite greetings and well-wishes. Expressing wishes for health and well-being is important.

### China
In China, red symbolizes good fortune, so red envelopes or paper are sometimes used for special occasions.

## European Letter Traditions

### United Kingdom
The UK has a formal letter culture. Letters start with 'Dear' and end with 'Yours sincerely' or 'Best regards'.

### France
French people enjoy using emotional and poetic expressions in letters. Discussing art and literature gets good responses.

### Germany
Germany prefers precise and systematic letter writing. Clear structure and logical development are valued.

## Communication Styles in the Americas

### United States
America prefers friendly and casual tones. They enjoy sharing personal experiences and stories.

### Brazil
Brazilians like warm and passionate greetings. They frequently share stories about family and friends.

## Letter Writing Considerations

1. **Consider time zones**: Adjust reply expectations considering your penpal's time zone
2. **Date formats**: Date notation differs by country (US: MM/DD/YYYY, Europe: DD/MM/YYYY)
3. **Using names**: Ways of addressing people vary by culture
4. **Sensitive topics**: Approach politics, religion, historical conflicts carefully

## Starting Cultural Exchange with Lettie

Lettie connects people from diverse cultures. Respect and understand each other's differences, and make genuine global friends.
    `
  },
  'language-exchange-tips': {
    id: 'language-exchange-tips',
    title: 'Language Learning Through Penpals: Effective Language Exchange Methods',
    description: 'Discover the most effective ways to learn a new language together with your penpal friends.',
    date: '2025-01-12',
    readTime: '6 min',
    category: 'Learning',
    image: '/conversation-detail.png',
    author: 'Lettie',
    keywords: ['language exchange', 'language learning', 'penpal learning', 'foreign language', 'language study'],
    content: `
# Improving Language Skills Through Penpalling

Penpalling is one of the most effective ways to learn a living language. You can learn natural expressions through real conversations with native speakers, not from textbooks.

## Benefits of Language Exchange

### 1. Learning Practical Expressions
Learn everyday expressions and latest trends not found in textbooks.

### 2. Understanding Cultural Context
Language cannot be separated from culture. Through penpalling, understand the culture behind the language.

### 3. Maintaining Motivation
Interaction with real people sustains motivation for language learning.

## Effective Language Exchange Methods

### The 50/50 Rule
Write half your letter in the language you're learning, the other half in your native language. It helps both parties.

### Requesting Corrections
Ask "Please feel free to correct my grammar or expressions." Feedback is key to growth.

### Using Diary Format
Writing and sharing daily life like a diary helps practice natural expressions.

## Level-Based Learning Strategies

### Beginners
- Start with simple greetings and introductions
- Use pictures or emoticons to convey meaning
- Gradually reduce translator usage

### Intermediate
- Have in-depth conversations on specific topics
- Learn and use idioms and proverbs
- Discuss news or culture from your penpal's country

### Advanced
- Exchange opinions on complex topics
- Understand and use humor and wordplay
- Analyze and emulate your penpal's writing style

## Useful Expressions

### Starting Language Exchange
- "I'm learning [language] and would love to practice with you"
- "Feel free to correct my mistakes"
- "How do you say [word] in your language?"

### Expressions for Better Understanding
- "Could you explain that in simpler terms?"
- "What does [expression] mean in this context?"
- "Is this the natural way to say it?"

## Finding Language Exchange Partners on Lettie

Lettie connects users who want to learn languages. Display languages you're learning on your profile and meet penpals with the same goals.

Language is a tool for communication. Improve your language skills while communicating with friends worldwide with Lettie!
    `
  }
};

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://lettie-dating.com/en/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // JSON-LD structured data - BlogPosting
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://lettie-dating.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lettie',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lettie-dating.com/lettie-icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lettie-dating.com/en/blog/${slug}`,
    },
  };

  // BreadcrumbList structured data
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
        name: 'Blog',
        item: 'https://lettie-dating.com/en/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://lettie-dating.com/en/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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
            <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-500 transition-colors">Guide</Link>
          </div>
        </nav>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/en" className="hover:text-blue-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/en/blog" className="hover:text-blue-500">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600">
            {post.description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain p-8"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} (.+)/g, (match, text) => {
              const level = match.indexOf(' ');
              return `<h${level} class="text-${7-level}xl font-bold mt-8 mb-4 text-gray-800">${text}</h${level}>`;
            }).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          }} />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link
              href="/en/blog"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Read More Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Object.values(blogPosts)
            .filter(p => p.id !== post.id)
            .slice(0, 3)
            .map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/en/blog/${relatedPost.id}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {relatedPost.description}
                </p>
                <span className="text-blue-500 font-semibold text-sm">
                  Read More →
                </span>
              </Link>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Start Penpalling with Lettie
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Connect with friends worldwide through letters and create special bonds
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

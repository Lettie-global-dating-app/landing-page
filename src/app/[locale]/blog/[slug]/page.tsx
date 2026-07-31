import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { LOCALES, OG_LOCALE, SITE_URL, isLocale, urlFor } from '@/i18n/config';
import { localizedPosts, getLocalizedPost } from '@/data/localizedPosts';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const [slug, entry] of Object.entries(localizedPosts)) {
    for (const locale of LOCALES) {
      // 영어는 기존 /en/blog 가 담당한다.
      if (locale === 'en') continue;
      if (entry.translations[locale]) params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getLocalizedPost(slug, locale);
  if (!post) return {};

  const url = urlFor(locale, `/blog/${slug}`);

  // 이 글이 번역된 언어끼리만 서로 연결한다.
  // 존재하지 않는 언어를 hreflang 으로 가리키면 404 를 가리키는 셈이다.
  const available = localizedPosts[slug]?.translations ?? {};
  const languages: Record<string, string> = {};
  for (const l of Object.keys(available)) languages[l] = urlFor(l, `/blog/${slug}`);

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: post.title },
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'article',
      locale: OG_LOCALE[locale],
      url,
      title: post.title,
      description: post.description,
      publishedTime: localizedPosts[slug]?.date,
      images: [{ url: `${SITE_URL}/lettie-og-image.png`, width: 1200, height: 630 }],
    },
  };
}

/** 아주 단순한 마크다운 렌더러. 이 글들이 쓰는 문법(제목·목록·굵게)만 다룬다. */
function renderMarkdown(md: string) {
  const blocks: React.ReactNode[] = [];
  const lines = md.trim().split('\n');
  let list: string[] = [];

  const flushList = (key: number) => {
    if (!list.length) return;
    blocks.push(
      <ul key={`ul-${key}`} className="list-disc pl-6 space-y-2 my-5 text-muted-foreground">
        {list.map((li, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: inline(li) }} />
        ))}
      </ul>,
    );
    list = [];
  };

  const inline = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');

  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line) {
      flushList(i);
      return;
    }
    if (line.startsWith('### ')) {
      flushList(i);
      blocks.push(
        <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">
          {line.slice(4)}
        </h3>,
      );
    } else if (line.startsWith('## ')) {
      flushList(i);
      blocks.push(
        <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith('# ')) {
      flushList(i);
      blocks.push(
        <h1 key={i} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
          {line.slice(2)}
        </h1>,
      );
    } else if (/^\d+\.\s/.test(line)) {
      flushList(i);
      blocks.push(
        <p
          key={i}
          className="my-3 text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: inline(line) }}
        />,
      );
    } else if (line.startsWith('- ')) {
      list.push(line.slice(2));
    } else {
      flushList(i);
      blocks.push(
        <p
          key={i}
          className="my-4 text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: inline(line) }}
        />,
      );
    }
  });
  flushList(lines.length);
  return blocks;
}

export default async function LocalizedBlogPost({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();

  const post = getLocalizedPost(slug, locale);
  const entry = localizedPosts[slug];
  if (!post || !entry) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Lettie
        </Link>

        <article>
          {renderMarkdown(post.content)}

          <div className="mt-14 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              {entry.date} · {post.readTime}
            </p>
            <a
              href="https://apps.apple.com/app/id6746454876"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Lettie
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

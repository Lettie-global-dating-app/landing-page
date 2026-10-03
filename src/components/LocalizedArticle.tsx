import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SITE_URL, urlFor } from '@/i18n/config';
import { getHomeCopy } from '@/i18n/home';
import { ORG_ID } from '@/lib/schema';
import { inline, renderMiniMarkdown } from '@/lib/miniMarkdown';
import { ARTICLE_DATE, ARTICLE_PATH, type Article, type ArticleSlug } from '@/data/articles/types';

const APP_STORE = 'https://apps.apple.com/app/id6746454876';
const PLAY = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe';

/**
 * 한국어·영어 밖 언어로 쓴 글(펜팔 앱·추천·Slowly 대안·가이드 두 편)의 공용 셸.
 * GuideArticle 과 같은 원칙: h1 아래 직답 문단, 화면 FAQ 와 FAQPage JSON-LD 를 같은 배열에서, Article·Breadcrumb LD.
 * 라벨(블로그·가이드·질문·다운로드)은 그 언어의 홈 문구에서 가져온다.
 */
export default function LocalizedArticle({ locale, slug, article }: { locale: string; slug: ArticleSlug; article: Article }) {
  const t = getHomeCopy(locale);
  const path = ARTICLE_PATH[slug];
  const url = urlFor(locale, path);
  const section = path.startsWith('/guide') ? t.nav.guide : path.startsWith('/blog') ? t.nav.blog : null;

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description.replace(/\*\*/g, ''),
      inLanguage: locale,
      datePublished: ARTICLE_DATE,
      dateModified: ARTICLE_DATE,
      mainEntityOfPage: url,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      image: `${SITE_URL}/og/${locale}.png`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: locale,
      mainEntity: article.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Lettie', item: urlFor(locale) },
        ...(section ? [{ '@type': 'ListItem', position: 2, name: section }] : []),
        { '@type': 'ListItem', position: section ? 3 : 2, name: article.title, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav aria-label="breadcrumb" className="mb-10 text-sm text-muted-foreground">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
            Lettie
          </Link>
          {section && <span className="ms-2">/ {section}</span>}
        </nav>

        <article>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 text-balance">{article.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{article.subtitle}</p>
          {/* 직답 문단에 **굵게** 를 쓴 글이 있다 — 기호가 그대로 보이지 않게 그린다 */}
          <p className="text-lg leading-relaxed text-foreground rounded-2xl border border-border bg-muted/30 p-5 mb-6" dangerouslySetInnerHTML={{ __html: inline(article.answer) }} />
          <div className="flex flex-wrap gap-3 mb-10">
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 font-semibold hover:opacity-90">App Store</a>
            <a href={PLAY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-border px-5 py-2.5 font-semibold text-foreground hover:border-primary">Google Play</a>
          </div>

          {renderMiniMarkdown(article.body)}

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">{t.faqTitle}</h2>
            <dl className="space-y-6">
              {article.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-semibold text-foreground mb-2">{f.q}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-14 pt-8 border-t border-border flex flex-wrap items-center gap-4 justify-between">
            <time dateTime={ARTICLE_DATE} className="text-sm text-muted-foreground">{ARTICLE_DATE}</time>
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90">
              {t.nav.download}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

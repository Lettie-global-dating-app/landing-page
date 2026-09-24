import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { ORG_ID } from '@/lib/schema';

/**
 * 가이드 상세 페이지의 공용 셸.
 *
 * 답변엔진은 페이지를 요약하는 게 아니라 "답이 되는 문장"을 추출한다.
 * 그래서 이 셸은 세 가지를 강제한다.
 *   1. h1 바로 아래 직답 문단(`answer`) — 첫 화면에서 질문에 결론부터 답한다
 *   2. FAQ 섹션의 가시 텍스트와 FAQPage JSON-LD를 **같은 배열에서** 생성 —
 *      화면과 구조화 데이터가 어긋나면 스팸 판정을 받는다
 *   3. BreadcrumbList + Article JSON-LD (dateModified 는 실제 갱신일)
 *
 * FAQ 리치 결과(접이식 UI)는 구글이 2023년 이후 대부분의 사이트에 주지 않는다.
 * 그럼에도 FAQPage LD 를 붙이는 목적은 리치 결과가 아니라 엔진의 답변 추출이다.
 */

export type GuideFaq = {
  q: string;
  a: string;
};

type Props = {
  /** 'en' 이면 /en 접두사를 쓴다. 한국어는 루트. */
  locale: 'ko' | 'en';
  /** 가이드 경로. 예: '/guide/writing-tips' */
  path: string;
  title: string;
  /** h1 아래 한 줄 요약 */
  subtitle: string;
  /**
   * 직답 문단. 검색 질문에 대한 결론을 한두 문장으로.
   * 맥락 없이 잘려 나가도 사실을 말하도록 주어와 수치를 문장 안에 둔다.
   */
  answer: ReactNode;
  icon: ReactNode;
  /** 아이콘 배경 그라데이션 (tailwind 클래스) */
  accent: string;
  /** 실제 마지막 갱신일 (YYYY-MM-DD). 내용 변경 없이 올리지 않는다. */
  updated: string;
  faqs: GuideFaq[];
  children: ReactNode;
  /** 경로 표시의 두 번째 칸. 기본은 가이드 목록. 예: { name: 'Home', path: '' } 이면 두 칸짜리 */
  parent?: { name: string; path: string } | null;
  /** 직답 아래에 놓을 것 (스토어 버튼 등) */
  cta?: ReactNode;
  /** 처음 공개한 날 (YYYY-MM-DD) */
  published?: string;
};

const LABEL = {
  ko: { home: '홈', guide: '가이드', back: '가이드로 돌아가기', faq: '자주 묻는 질문', updated: '최종 업데이트' },
  en: { home: 'Home', guide: 'Guide', back: 'Back to Guide', faq: 'Frequently Asked Questions', updated: 'Last updated' },
} as const;

export default function GuideArticle({
  locale,
  path,
  title,
  subtitle,
  answer,
  icon,
  accent,
  updated,
  faqs,
  children,
  parent,
  cta,
  published = '2026-07-20',
}: Props) {
  const base = 'https://lettie-dating.com';
  const prefix = locale === 'en' ? '/en' : '';
  const url = `${base}${prefix}${path}`;
  const t = LABEL[locale];
  const mid = parent === undefined ? { name: t.guide, path: '/guide' } : parent;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: `${base}${prefix}` },
      ...(mid ? [{ '@type': 'ListItem', position: 2, name: mid.name, item: `${base}${prefix}${mid.path}` }] : []),
      { '@type': 'ListItem', position: mid ? 3 : 2, name: title, item: url },
    ],
  };

  // FAQ 는 화면과 LD 가 같은 배열에서 나온다. 어긋날 수가 없다.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: subtitle,
    inLanguage: locale,
    datePublished: published,
    dateModified: updated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    // 조직은 루트 @graph 의 엔티티를 참조만 한다 (엔티티 분열 방지)
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href={prefix || '/'} className="flex items-center space-x-3">
            <Image src="/lettie-icon.png" alt="Lettie" className="w-10 h-10 rounded-2xl" width={40} height={40} priority />
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </Link>
          <Link
            href={`${prefix}/guide`}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.back}
          </Link>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        {/* 가시 breadcrumb — 구조화 데이터와 짝을 이룬다 */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={prefix || '/'} className="hover:text-blue-600">{t.home}</Link></li>
            <li aria-hidden="true">/</li>
            {mid && (
              <>
                <li><Link href={`${prefix}${mid.path}`} className="hover:text-blue-600">{mid.name}</Link></li>
                <li aria-hidden="true">/</li>
              </>
            )}
            <li className="text-gray-700 font-medium">{title}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className={`w-16 h-16 bg-gradient-to-r ${accent} rounded-2xl flex items-center justify-center mb-6 text-white`}>
              {icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          {/* 직답 — 답변엔진이 첫 화면에서 집어가는 자리 */}
          <div className="mb-12 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <p className="text-lg leading-relaxed text-gray-800">{answer}</p>
            {cta && <div className="mt-5">{cta}</div>}
          </div>

          <div className="space-y-12">{children}</div>

          {/* FAQ */}
          <section className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.faq}</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{f.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-12 text-sm text-gray-400">
            {t.updated}: {updated}
          </p>
        </div>
      </section>
    </div>
  );
}

/** 본문 섹션. h2 + 아이콘. */
export function GuideSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        {icon}
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
    </section>
  );
}

/**
 * 표. 답변엔진은 표를 구조화된 사실로 안정적으로 파싱하므로
 * 비교 가능한 내용은 문장보다 표로 두는 편이 인용에 유리하다.
 */
export function GuideTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200">
            {head.map((h) => (
              <th key={h} className="py-3 pr-4 font-semibold text-gray-800 align-bottom">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-gray-100 align-top">
              {r.map((cell, i) => (
                <td key={i} className={`py-3 pr-4 ${i === 0 ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 강조 박스. */
export function GuideCallout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl bg-indigo-50 p-6">
      <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="text-gray-600 space-y-2 leading-relaxed">{children}</div>
    </div>
  );
}

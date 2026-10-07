import Link from 'next/link';
import { readNextLinks } from '@/data/readNext';

/** 가이드·소개 페이지 하단 "더 읽기". 핵심 글로 내부 링크를 모은다 (src/data/readNext.ts 참고) */
export default function ReadNext({
  locale,
  path,
  className = 'container mx-auto px-4 max-w-3xl py-12',
}: {
  locale: 'ko' | 'en';
  /** 지금 페이지 경로(언어 접두사 포함) — 자기 자신은 빼고 보여 준다 */
  path: string;
  className?: string;
}) {
  const links = readNextLinks(locale, path);
  return (
    <nav aria-labelledby="read-next" className={className}>
      <h2 id="read-next" className="text-2xl font-bold text-gray-800 mb-5">
        {locale === 'en' ? 'Read next' : '더 읽어 보기'}
      </h2>
      <ul className="grid sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors">
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

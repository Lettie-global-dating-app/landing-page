'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const APP_STORE = 'https://apps.apple.com/app/id6746454876';
const PLAY = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe';

type Item = { href: string; label: string };

/**
 * 모바일 햄버거 메뉴. 문구와 링크는 부모가 언어에 맞게 넘긴다.
 * 홈(밤하늘)과 그 외 페이지(밝은 배경)에서 같이 쓰므로 색은 토큰만 쓴다.
 */
export default function MobileMenu({
  items = [
    { href: '#features', label: '기능' },
    { href: '/blog', label: '블로그' },
    { href: '/guide', label: '가이드' },
    { href: '/stories', label: '스토리' },
    { href: '/faq', label: 'FAQ' },
  ],
  download = '다운로드',
}: {
  items?: Item[];
  download?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="p-2 -mr-2 text-current hover:opacity-80 transition-opacity"
        aria-label={isOpen ? 'close menu' : 'open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-50 night text-paper overflow-y-auto">
          <nav className="flex flex-col p-6 gap-1">
            {items.map((it) =>
              it.href.startsWith('#') ? (
                <a key={it.href} href={it.href} onClick={close} className="rounded-xl px-3 py-3 text-lg text-ink2 hover:text-paper hover:bg-sky2/60 transition-colors">
                  {it.label}
                </a>
              ) : (
                <Link key={it.href} href={it.href} onClick={close} className="rounded-xl px-3 py-3 text-lg text-ink2 hover:text-paper hover:bg-sky2/60 transition-colors">
                  {it.label}
                </Link>
              ),
            )}
            <div className="pt-5 mt-3 border-t border-line/70 flex flex-col gap-3">
              <p className="text-sm text-ink3 px-3">{download}</p>
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="block bg-paper text-sky1 text-center px-6 py-3.5 rounded-2xl font-semibold">
                App Store
              </a>
              <a href={PLAY} target="_blank" rel="noopener noreferrer" className="block border border-line bg-sky2/60 text-paper text-center px-6 py-3.5 rounded-2xl font-semibold">
                Google Play
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

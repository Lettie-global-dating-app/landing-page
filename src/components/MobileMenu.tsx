'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* 햄버거 메뉴 버튼 */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
        aria-label="메뉴 열기"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white top-16">
          <nav className="flex flex-col p-6 space-y-4">
            <a href="#features" onClick={closeMenu} className="text-lg text-gray-600 hover:text-blue-500 transition-colors">
              기능
            </a>
            <Link href="/blog" onClick={closeMenu} className="text-lg text-gray-600 hover:text-blue-500 transition-colors">
              블로그
            </Link>
            <Link href="/guide" onClick={closeMenu} className="text-lg text-gray-600 hover:text-blue-500 transition-colors">
              가이드
            </Link>
            <Link href="/stories" onClick={closeMenu} className="text-lg text-gray-600 hover:text-blue-500 transition-colors">
              스토리
            </Link>
            <Link href="/faq" onClick={closeMenu} className="text-lg text-gray-600 hover:text-blue-500 transition-colors">
              FAQ
            </Link>
            <div className="pt-4 border-t">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white text-center px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 bg-green-500 text-white text-center px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
              >
                Google Play
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
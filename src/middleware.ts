import { NextResponse, type NextRequest } from 'next/server';
import { LOCALES, ROOT_LOCALE } from './i18n/config';
import { LANG_COOKIE, autoTarget, isBot, pickLocale } from './i18n/negotiate';

const SUPPORTED: readonly string[] = [ROOT_LOCALE, ...LOCALES];

/**
 * 한국어 루트 페이지에 온 외국인을 그 사람 언어 페이지로 보낸다 (자세한 규칙은 i18n/negotiate.ts).
 * 언어가 붙은 URL(/en, /ja …)은 건드리지 않는다 — 그건 누군가 고른 언어다.
 */
export function middleware(req: NextRequest) {
  const chosen = req.cookies.get(LANG_COOKIE)?.value;
  let locale: string | null;
  if (chosen && SUPPORTED.includes(chosen)) {
    locale = chosen;
  } else {
    if (isBot(req.headers.get('user-agent'))) return NextResponse.next();
    locale = pickLocale(req.headers.get('accept-language'), SUPPORTED, 'en');
  }
  if (!locale || locale === ROOT_LOCALE) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = autoTarget(req.nextUrl.pathname, locale, ROOT_LOCALE);
  if (url.pathname === req.nextUrl.pathname) return NextResponse.next();
  const res = NextResponse.redirect(url, 302);
  res.headers.set('Cache-Control', 'private, no-store');
  res.headers.set('Vary', 'Accept-Language, Cookie');
  return res;
}

// 한국어 루트 페이지만. /open(앱 링크)·/v2·/og·sitemap·robots·llms.txt 는 건드리지 않는다.
export const config = {
  matcher: ['/', '/faq', '/blog/:path*', '/guide/:path*', '/penpal-app', '/letter-map'],
};

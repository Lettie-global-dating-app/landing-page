import { NextResponse, type NextRequest } from 'next/server';
import { appStoreLink, channelOf, playLink } from '@/lib/storeLinks';

/**
 * /get?c=<채널> — 기기에 맞는 스토어로 보내는 링크 (2026-11-04). 채널 정의·읽는 곳은 src/lib/storeLinks.ts.
 * 기기마다 행선지가 달라 CDN 이 캐시하면 안 된다(no-store·Vary). 검색에는 내보내지 않는다(X-Robots-Tag).
 */
export const dynamic = 'force-dynamic';

export function GET(req: NextRequest) {
  const c = channelOf(req.nextUrl.searchParams.get('c'));
  const ua = req.headers.get('user-agent') ?? '';
  const to = /iPhone|iPad|iPod/i.test(ua)
    ? appStoreLink(c)
    : /Android/i.test(ua)
      ? playLink(c)
      : new URL('/', req.nextUrl.origin).toString();
  const res = NextResponse.redirect(to, 302);
  res.headers.set('Cache-Control', 'private, no-store, max-age=0');
  res.headers.set('Vary', 'User-Agent');
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return res;
}

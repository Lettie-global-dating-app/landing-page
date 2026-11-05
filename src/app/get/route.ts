import { NextResponse, type NextRequest } from 'next/server';
import { SITE_URL } from '@/i18n/config';
import { appStoreLink, channelOf, playLink, referralCodeOf } from '@/lib/storeLinks';

/**
 * /get?c=<채널>[&r=<초대 코드>] — 기기에 맞는 스토어로 보내는 링크 (2026-11-04). 채널 정의·읽는 곳은 src/lib/storeLinks.ts.
 * r(2026-11-05 친구 초대): 안드로이드는 Play referrer 에 실어 앱이 자동으로 붙이고, iOS 는 실을 곳이 없어 그대로, 컴퓨터는 홈에 ?c=&r= 로.
 * 기기마다 행선지가 달라 CDN 이 캐시하면 안 된다(no-store·Vary). 검색에는 내보내지 않는다(X-Robots-Tag).
 */
export const dynamic = 'force-dynamic';

export function GET(req: NextRequest) {
  const c = channelOf(req.nextUrl.searchParams.get('c'));
  const r = referralCodeOf(req.nextUrl.searchParams.get('r'));
  const ua = req.headers.get('user-agent') ?? '';
  // 2026-11-05: 컴퓨터·링크 미리보기 크롤러는 한국어가 첫 언어일 때만 한국어 홈, 나머지는 /en.
  // 스레드 링크 미리보기가 한국어 카드(「오늘 쓴 편지는 내일 도착합니다」)로 떴다 — 영어 글 아래 링크인데.
  const ko = /^\s*ko\b/i.test(req.headers.get('accept-language') ?? '');
  const home = `${SITE_URL}${ko ? '/' : '/en'}`; // req.nextUrl.origin 은 Netlify 에서 배포 주소(…netlify.app)가 된다 — 고정 주소로
  const to = /iPhone|iPad|iPod/i.test(ua)
    ? appStoreLink(c)
    : /Android/i.test(ua)
      ? playLink(c, r)
      : r
        ? `${home}?c=${c}&r=${r}`
        : home;
  const res = NextResponse.redirect(to, 302);
  res.headers.set('Cache-Control', 'private, no-store, max-age=0');
  res.headers.set('Vary', 'User-Agent, Accept-Language');
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return res;
}

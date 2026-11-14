/**
 * 채널별 설치 측정 (2026-11-04, 대표 「다 해보세요」 — 어느 마케팅이 실제로 설치를 데려오는지 숫자로 보자).
 *
 * 우리 쪽 글·영상·프로필에는 스토어 주소 대신 `https://lettie-dating.com/get?c=<채널>` 을 단다.
 * /get 이 기기를 보고 그 채널 표시가 붙은 스토어 주소로 보낸다:
 *   - iOS → App Store 캠페인 링크(pt·ct) — App Store Connect 「앱 분석 → 소스 → 캠페인」에서 ct 별 설치가 보인다.
 *   - Android → Play 링크 + referrer(utm_*) — Play Console 「사용자 획득 → UTM」·GA4 first_open 캠페인에 남는다.
 *   - 그 외(컴퓨터) → 홈(스토어 버튼이 있다).
 * pt(공급자 토큰)는 팀 단위 값이다 — 같은 개발자의 LiftUp AI 랜딩 링크와 같다.
 */
export const IOS_APP_ID = '6746454876';
export const ANDROID_PACKAGE = 'com.dearglobe.dearglobe';
const PROVIDER_TOKEN = '126107754';

/** 채널 이름은 이 목록만 받는다 — 아무 글자나 받으면 App Analytics 캠페인이 쓰레기로 찬다. 나머지는 other. */
export const CHANNELS = [
  'threads', 'x', 'ig', 'tiktok', 'yt', 'reddit', 'naver', 'blog', 'landing', 'outreach', 'shorts', 'share', 'email', 'kakao',
  // 2026-11-05 친구 초대(앱 「친구 초대하고 우표 받기」 링크 /get?c=invite&r=<코드>). share 는 편지 웹 공유 쪽.
  'invite',
  // 2026-11-14 스레드 일본어 실험(한국 친구를 찾는 일본 사람 쪽 — 일본어 게시물 링크). 영어 계정 글(threads)과 따로 센다.
  'threads_jp',
] as const;
export type Channel = (typeof CHANNELS)[number] | 'other';

export function channelOf(raw: string | null | undefined): Channel {
  const c = (raw ?? '').trim().toLowerCase();
  return (CHANNELS as readonly string[]).includes(c) ? (c as Channel) : 'other';
}

/** 우리 사이트에서 온 것(landing·blog·share)은 web, 초대 링크는 referral, 나머지는 social. */
const mediumOf = (c: Channel) =>
  c === 'landing' || c === 'blog' || c === 'share' || c === 'naver' ? 'web' : c === 'email' ? 'email' : c === 'invite' ? 'referral' : 'social';

/**
 * 초대 코드 (2026-11-05, 앱·서버 ReferralService 와 같은 규칙): 6자, 헷갈리는 0·O·1·I·L 을 뺀 31자.
 * 맞으면 대문자로 돌려주고, 아니면 null — 아무 글자나 스토어 링크에 싣지 않는다.
 */
export function referralCodeOf(raw: string | null | undefined): string | null {
  const s = (raw ?? '').trim().toUpperCase();
  return /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/.test(s) ? s : null;
}

export function appStoreLink(c: Channel): string {
  return `https://apps.apple.com/app/apple-store/id${IOS_APP_ID}?pt=${PROVIDER_TOKEN}&ct=${c}&mt=8`;
}

/**
 * Play 링크. [ref](초대 코드)가 있으면 referrer 끝에 r=<코드> — 앱이 첫 실행 때 설치 리퍼러로 읽어 자동으로 붙인다(안드로이드만).
 * App Store 는 설치 뒤 앱에 값을 넘길 길이 없어 iOS 친구는 공유 글 속 코드를 직접 넣는다.
 */
export function playLink(c: Channel, ref?: string | null): string {
  const code = referralCodeOf(ref);
  const referrer = `utm_source=${c}&utm_medium=${mediumOf(c)}&utm_campaign=${c}${code ? `&r=${code}` : ''}`;
  return `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${encodeURIComponent(referrer)}`;
}

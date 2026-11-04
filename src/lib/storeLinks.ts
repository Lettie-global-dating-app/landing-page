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
] as const;
export type Channel = (typeof CHANNELS)[number] | 'other';

export function channelOf(raw: string | null | undefined): Channel {
  const c = (raw ?? '').trim().toLowerCase();
  return (CHANNELS as readonly string[]).includes(c) ? (c as Channel) : 'other';
}

/** 우리 사이트에서 온 것(landing·blog·share)은 web, 나머지는 social. */
const mediumOf = (c: Channel) => (c === 'landing' || c === 'blog' || c === 'share' || c === 'naver' ? 'web' : c === 'email' ? 'email' : 'social');

export function appStoreLink(c: Channel): string {
  return `https://apps.apple.com/app/apple-store/id${IOS_APP_ID}?pt=${PROVIDER_TOKEN}&ct=${c}&mt=8`;
}

export function playLink(c: Channel): string {
  const referrer = `utm_source=${c}&utm_medium=${mediumOf(c)}&utm_campaign=${c}`;
  return `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${encodeURIComponent(referrer)}`;
}

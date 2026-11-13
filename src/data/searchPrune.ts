/**
 * 검색에서만 뺀 블로그 글 — 사람에게는 그대로 보이고(목록·관련 글 링크 유지), noindex·sitemap·hreflang 에서 빠진다.
 *
 * 2026-11-13 10/19 구글 사이트 단위 순위 억제 정리 2단계 (docs/seo-drop-2026-10-19.md).
 * 기준: GSC 3개월(급락 전 성장기 9/21~10/18 포함) 한·영 노출 합이 10 미만이고 우리만의 데이터·앱 사실이 없는 글,
 * 그리고 10/18~20 에 한꺼번에 쓴 기념일 편지 글 전부. 남긴 글은 노출이 있었거나 1차 데이터·앱 설명이 있는 글이다.
 * 다시 색인하려면 목록에서 지운다 (한 번에 몰아서 되돌리지 말 것).
 */
export const BLOG_NOINDEX: ReadonlySet<string> = new Set([
  // 노출 0~9 — 일반 수필·가이드
  'dearest-friend',
  'marcus-introduction',
  'dear-stranger',
  'language-exchange-friendship',
  'making-global-friends',
  'digital-detox-penpal',
  'international-friendship-guide',
  'writing-across-languages',
  'interpals-alternatives',
  'japanese-pen-pals',
  'pen-pal-for-language-learning',
  'what-to-write-to-a-pen-pal',
  'armchair-world-travel',
  'autumn-morning-mist',
  'keep-a-pen-pal-conversation-going',
  'no-photo-dating-pixel-character',
  'cultural-understanding-global-etiquette',
  'halloween-connections',
  'pen-pal-safety-guide',
  'self-growth-through-penpal',
  // 10/18~20 일괄 기념일 편지 글
  'christmas-letter-to-a-pen-pal',
  'halloween-letter-to-pen-pal',
  'thanksgiving-letter-to-a-friend',
  'diwali-wishes-for-friends',
  'cat-day-letter',
  'handwriting-day-letter',
  'lunar-new-year-letter',
  'new-year-letter-to-a-pen-pal',
  'valentines-letter-to-a-friend',
  'world-hello-day-letter',
]);

/** 한국어판이 「전문은 영어판에서」 한 줄(170자 안팎)뿐인 글 — 한국어판만 검색에서 빼고 영어판은 색인한다 (한국어 3개월 노출 0) */
export const BLOG_NOINDEX_KO: ReadonlySet<string> = new Set(['apps-to-make-friends-online', 'korean-pen-pals', 'how-to-find-a-pen-pal']);

/** 이 언어판이 검색에 나가는가. locale 을 안 주면 「어느 언어로든 색인되는 글인가」(관련 글 링크용). */
export const isBlogIndexed = (id: string, locale?: 'ko' | 'en') =>
  !BLOG_NOINDEX.has(id) && !(locale === 'ko' && BLOG_NOINDEX_KO.has(id));

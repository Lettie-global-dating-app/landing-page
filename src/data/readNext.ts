import { blogPosts } from '@/data/blogPosts';

/**
 * 글 사이 내부 링크 (2026-10-07).
 *
 * 전에는 블로그 글 하단 "관련 글"이 모든 글에서 데이터 맨 앞 세 편(가을 수필 등)이었다.
 * 그래서 40편 중 대부분은 블로그 목록 한 곳에서만 링크를 받았고, 검색 노출이 있는 글(2026 추천·Slowly 대안·펜팔이란)도 마찬가지였다.
 * 구글 색인 보고서에 "발견됨 - 현재 색인이 생성되지 않음" 68건이 쌓인 이유 중 하나다.
 *
 * 규칙: 같은 주제 묶음 안에서 바로 뒤 글 몇 편(돌아가며) + 핵심 글. 주제는 손으로 묶는다(카테고리가 전부 '감성'이라 쓸 수 없다).
 */
export const TOPICS: string[][] = [
  // 앱 고르기
  ['best-penpal-apps-2026', 'slowly-alternatives-2026', 'lettie-vs-slowly', 'penpal-app-with-translation', 'interpals-alternatives',
    'apps-to-make-friends-online', 'no-photo-dating-pixel-character'],
  // 시작하기·편지 쓰기
  ['what-is-a-pen-pal', 'how-to-start-penpal', 'first-letter-examples-discover', 'what-to-write-to-a-pen-pal', 'how-to-find-a-pen-pal',
    'keep-a-pen-pal-conversation-going', 'letter-delivery-time-by-distance'],
  // 언어·문화
  ['language-exchange-tips', 'pen-pal-for-language-learning', 'korean-pen-pals', 'japanese-pen-pals', 'writing-across-languages',
    'language-exchange-friendship', 'penpal-culture-guide', 'cultural-understanding-global-etiquette', 'international-friendship-guide',
    'making-global-friends', 'armchair-world-travel'],
  // 안전
  ['pen-pal-safety-guide'],
  // 느린 삶·수필
  ['slow-letter-beauty', 'digital-detox-penpal', 'self-growth-through-penpal',
    'winter-letter-warmth', 'autumn-morning-mist', 'dear-stranger', 'dearest-friend', 'halloween-connections', 'marcus-introduction'],
];

/** 검색 노출이 실제로 있는 글부터. 모든 글·가이드에서 이쪽으로 링크가 모인다 */
export const PILLAR_POSTS = [
  'best-penpal-apps-2026',
  'slowly-alternatives-2026',
  'what-is-a-pen-pal',
  'how-to-start-penpal',
  'lettie-vs-slowly',
  'penpal-app-with-translation',
];

/** 관련 글 id. 같은 주제의 바로 뒤 글 `siblings` 편(끝에 닿으면 처음으로) + 핵심 글로 n 편을 채운다 */
export function relatedPostIds(id: string, n = 6, siblings = 3): string[] {
  const out: string[] = [];
  const add = (x: string) => {
    if (x !== id && blogPosts[x] && !out.includes(x) && out.length < n) out.push(x);
  };
  const topic = TOPICS.find((t) => t.includes(id));
  if (topic) {
    const i = topic.indexOf(id);
    for (let k = 1; k < topic.length && out.length < siblings; k++) add(topic[(i + k) % topic.length]);
  }
  PILLAR_POSTS.forEach(add);
  // 주제에 안 묶인 새 글도 n 편은 채운다
  Object.keys(blogPosts).forEach(add);
  return out;
}

export type ReadNextLink = { href: string; title: string };

/** 가이드·소개 페이지 하단 "더 읽기" — 핵심 글과 입문 가이드 */
export function readNextLinks(locale: 'ko' | 'en', currentPath: string): ReadNextLink[] {
  const p = locale === 'en' ? '/en' : '';
  const post = (id: string): ReadNextLink => ({
    href: `${p}/blog/${id}`,
    title: locale === 'en' ? blogPosts[id].titleEn : blogPosts[id].title,
  });
  const fixed: ReadNextLink[] =
    locale === 'en'
      ? [
          { href: '/en/penpal-app', title: 'Lettie: a free pen pal app for iPhone and Android' },
          { href: '/en/guide/getting-started', title: 'How to start with a pen pal, step by step' },
          { href: '/en/guide/writing-tips', title: 'What to write in a pen pal letter' },
          { href: '/en/faq', title: 'Questions people ask about Lettie' },
        ]
      : [
          { href: '/penpal-app', title: 'Lettie: 아이폰·안드로이드 무료 펜팔 앱' },
          { href: '/guide/getting-started', title: '펜팔 시작하기 — 단계별 가이드' },
          { href: '/guide/writing-tips', title: '펜팔 편지에 무엇을 쓸까' },
          { href: '/faq', title: 'Lettie 자주 묻는 질문' },
        ];
  return [...PILLAR_POSTS.filter((id) => blogPosts[id]).map(post), ...fixed].filter((l) => l.href !== currentPath);
}

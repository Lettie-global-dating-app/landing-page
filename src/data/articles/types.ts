/**
 * 한국어·영어 밖의 언어로 새로 쓴 글 다섯 편 (2026-10-04).
 * 검색 노출이 실제로 있는 글(펜팔 앱이란·2026 펜팔 앱 추천·Slowly 대안)과 입문 가이드 두 편(시작하기·편지 쓰는 법).
 * 언어마다 파일 하나(src/data/articles/<lang>.ts)에 다섯 편이 다 들어 있다.
 *
 * 번역문이 아니라 그 언어로 새로 쓴 글이다. 다른 앱에 대한 사실은 영어 원문에 있는 것만 쓴다(값·수치를 새로 만들지 않는다).
 */
export const ARTICLE_SLUGS = [
  'penpal-app',
  'best-penpal-apps-2026',
  'slowly-alternatives-2026',
  'getting-started',
  'writing-tips',
] as const;
export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

export type Article = {
  /** <title> 과 h1 */
  title: string;
  /** meta description (150~160자 내외) */
  description: string;
  keywords: string[];
  /** h1 아래 한 줄 */
  subtitle: string;
  /** 직답 문단 — 검색 질문에 결론부터 한두 문장. 잘려 나가도 사실을 말하게 주어를 넣는다 */
  answer: string;
  /** 본문 마크다운: ## · ### · - 목록 · **굵게** · | 표 | (첫 줄 머리, 둘째 줄 |---|) 만 쓴다. # 제목은 쓰지 않는다 */
  body: string;
  /** 3~5개. 화면 FAQ 와 FAQPage JSON-LD 가 같은 배열에서 나간다 */
  faqs: { q: string; a: string }[];
};

export type ArticleSet = Record<ArticleSlug, Article>;

/** 글이 사는 경로 (언어 접두사 뒤). 한국어 원본은 이 경로, 영어는 /en + 이 경로다 */
export const ARTICLE_PATH: Record<ArticleSlug, string> = {
  'penpal-app': '/penpal-app',
  'best-penpal-apps-2026': '/blog/best-penpal-apps-2026',
  'slowly-alternatives-2026': '/blog/slowly-alternatives-2026',
  'getting-started': '/guide/getting-started',
  'writing-tips': '/guide/writing-tips',
};

export const ARTICLE_DATE = '2026-10-04';

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/i18n/config';

/**
 * robots.txt.
 *
 * 이전에는 `public/robots.txt` 와 이 파일이 동시에 있었고, 정적 파일이 이겨서
 * 이 라우트는 죽은 코드였다. 정적 파일을 지우고 여기로 일원화했다.
 *
 * AI 크롤러는 용도가 세 가지로 나뉘고, 무정책은 우연에 맡기는 것이다:
 *   - 학습(GPTBot, ClaudeBot, Google-Extended): 미래 모델의 브랜드 인지
 *   - 검색 색인(OAI-SearchBot, PerplexityBot): AI 검색의 인용
 *   - 실시간 fetch(ChatGPT-User, Perplexity-User): 답변 시점의 직접 인용·트래픽
 * 우리는 인용 유입이 목표이므로 셋 다 허용한다. 콘텐츠 자체가 상품이 아니라
 * 앱으로 오는 다리이기 때문에 학습을 막을 이유가 없다.
 *
 * `_next/static` 은 막지 않는다. Googlebot 은 JS 를 실행해 렌더링한 뒤 색인하는데
 * chunks/media 를 차단하면 렌더링이 깨져 본문을 못 읽는다(과거 실제 사고).
 */

// 인용·색인 유입이 목표라 전부 허용한다. 명단은 각사 문서 기준으로 분기마다 확인할 것.
const AI_CRAWLERS = [
  // 학습
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Meta-ExternalAgent',
  // 검색 색인
  'OAI-SearchBot',
  'Claude-SearchBot',
  'PerplexityBot',
  'Bingbot',
  // 실시간 fetch
  'ChatGPT-User',
  'Claude-User',
  'Perplexity-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/'],
        disallow: ['/api/', '/admin/', '/private/'],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

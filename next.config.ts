import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO 및 성능 최적화 설정
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 압축 최적화
  compress: true,
  
  // 페이지 확장자 설정
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // 실험적 기능 (앱 라우터 안정화)
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // 한국어 루트 페이지. 언어별 페이지(/en, /ja …)는 엣지 함수 html-lang 이 그 언어로 붙인다.
      { source: '/', headers: [{ key: 'Content-Language', value: 'ko' }] },
      { source: '/faq', headers: [{ key: 'Content-Language', value: 'ko' }] },
      { source: '/blog/:path*', headers: [{ key: 'Content-Language', value: 'ko' }] },
      { source: '/guide/:path*', headers: [{ key: 'Content-Language', value: 'ko' }] },
      { source: '/penpal-app', headers: [{ key: 'Content-Language', value: 'ko' }] },
      { source: '/letter-map', headers: [{ key: 'Content-Language', value: 'ko' }] },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|gif|webp|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // 리다이렉트 설정
  async redirects() {
    return [
      // www 버전을 non-www로 리다이렉트
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.lettie-dating.com',
          },
        ],
        destination: 'https://lettie-dating.com/:path*',
        permanent: true,
      },
      // 언어 주소 오타·관습형 (2026-10-04): /ko 는 루트, /pt-br·/zh-cn 같은 지역 코드는 언어로, 번역 없는 하위 경로는 영어판으로
      { source: '/ko', destination: '/', permanent: true },
      { source: '/ko/:path*', destination: '/:path*', permanent: true },
      { source: '/ko-:region', destination: '/', permanent: true },
      { source: '/:lang(en|es|pt|ja|fr|zh|de|hi|id|ru|it|bn|fil|tr|vi|th|ms|sw|pl|nl|uk|ro|el|cs|ar|fa|ur)-:region([a-zA-Z]{2,4})', destination: '/:lang', permanent: true },
      { source: '/:lang(en|es|pt|ja|fr|zh|de|hi|id|ru|it|bn|fil|tr|vi|th|ms|sw|pl|nl|uk|ro|el|cs|ar|fa|ur)-:region([a-zA-Z]{2,4})/:path*', destination: '/:lang/:path*', permanent: true },
      { source: '/:lang(es|pt|ja|fr|zh|de|hi|id|ru|it|bn|fil|tr|vi|th|ms|sw|pl|nl|uk|ro|el|cs|ar|fa|ur)/blog', destination: '/en/blog', permanent: false },
      // 다국어로 쓴 가이드 두 편(getting-started·writing-tips)은 제외 — 그 언어 페이지가 있다 (2026-10-04)
      { source: '/:lang(es|pt|ja|fr|zh|de|hi|id|ru|it|bn|fil|tr|vi|th|ms|sw|pl|nl|uk|ro|el|cs|ar|fa|ur)/guide/:slug((?!getting-started|writing-tips)[^/]+)', destination: '/en/guide/:slug', permanent: false },
      { source: '/:lang(es|pt|ja|fr|zh|de|hi|id|ru|it|bn|fil|tr|vi|th|ms|sw|pl|nl|uk|ro|el|cs|ar|fa|ur)/guide', destination: '/en/guide', permanent: false },
      { source: '/:lang(es|pt|ja|fr|zh|de|hi|id|ru|it|bn|fil|tr|vi|th|ms|sw|pl|nl|uk|ro|el|cs|ar|fa|ur)/letter-map', destination: '/en/letter-map', permanent: false },
      // 연도가 낡은 글을 같은 주제의 최신 글로 합친다 (2026-09-24, 순위 신호를 넘긴다)
      { source: '/blog/2025-best-penpal-app', destination: '/blog/best-penpal-apps-2026', permanent: true },
      { source: '/en/blog/2025-best-penpal-app', destination: '/en/blog/best-penpal-apps-2026', permanent: true },
      // 같은 주제로 겹치던 글을 하나로 (2026-10-07 대표 결정 — 서로 순위를 깎아 먹었고 옛 글은 대부분 색인도 안 됐다)
      { source: '/blog/slowly-app-alternatives', destination: '/blog/slowly-alternatives-2026', permanent: true },
      { source: '/en/blog/slowly-app-alternatives', destination: '/en/blog/slowly-alternatives-2026', permanent: true },
      { source: '/blog/safe-penpaling-guide', destination: '/blog/pen-pal-safety-guide', permanent: true },
      { source: '/en/blog/safe-penpaling-guide', destination: '/en/blog/pen-pal-safety-guide', permanent: true },
      { source: '/blog/digital-detox-2025', destination: '/blog/digital-detox-penpal', permanent: true },
      { source: '/en/blog/digital-detox-2025', destination: '/en/blog/digital-detox-penpal', permanent: true },
      { source: '/blog/digital-detox-slow-living', destination: '/blog/digital-detox-penpal', permanent: true },
      { source: '/en/blog/digital-detox-slow-living', destination: '/en/blog/digital-detox-penpal', permanent: true },
      { source: '/blog/first-penpal-letter', destination: '/blog/how-to-start-penpal', permanent: true },
      { source: '/en/blog/first-penpal-letter', destination: '/en/blog/how-to-start-penpal', permanent: true },
      // 이야기 페이지의 후기 6편은 실제 사용자 것이 아니었다(편지 수 합 316 > 사람 간 편지 전체 208). 내리고 블로그로.
      { source: '/stories', destination: '/blog', permanent: true },
      { source: '/en/stories', destination: '/en/blog', permanent: true },
      // 잘못된 URL 패턴 수정
      {
        source: '/https\\://lettie-dating.com/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

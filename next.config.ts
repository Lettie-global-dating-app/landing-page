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
      // 페이지를 Netlify 가장자리(Edge) 캐시에 둔다. 없으면 매 요청이 안쪽 Durable 캐시까지 가서
      // 첫 응답이 0.7~1초였다(2026-09-24 Lighthouse 최대 개선 항목). 배포하면 Netlify 가 가장자리 캐시를 비우므로 낡은 페이지가 남지 않는다.
      {
        source: '/((?!_next|api).*)',
        headers: [
          {
            key: 'Netlify-CDN-Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
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
      // 연도가 낡은 글을 같은 주제의 최신 글로 합친다 (2026-09-24, 순위 신호를 넘긴다)
      { source: '/blog/2025-best-penpal-app', destination: '/blog/best-penpal-apps-2026', permanent: true },
      { source: '/en/blog/2025-best-penpal-app', destination: '/en/blog/best-penpal-apps-2026', permanent: true },
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

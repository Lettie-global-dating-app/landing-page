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
  
  // 리다이렉트 설정 (필요시)
  async redirects() {
    return [
      // 예시: 구버전 URL 리다이렉트
      // {
      //   source: '/old-page',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 환경에 따른 base URL 설정
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Lettie - 전 세계 친구들과 편지로 소통하는 글로벌 펜팔 데이팅앱",
    template: "%s | Lettie"
  },
  description: "전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어가는 글로벌 펜팔 데이팅앱. 사진이나 외모가 아닌, 마음과 생각으로 시작하는 특별한 인연을 만나보세요.",
  keywords: [
    "펜팔", "편지", "글로벌", "친구", "소통", "문화교류", "외국인친구", "언어교환", 
    "펜팔앱", "편지앱", "글로벌친구", "해외친구", "문화체험", "Lettie", "레티",
    "펜친구", "편지친구", "해외문화", "언어학습", "국제교류", "세계친구", "데이팅",
    "데이팅앱", "만남", "인연", "글로벌 데이팅", "국제 만남", "편지 데이팅"
  ],
  authors: [{ name: "Lettie Team" }],
  creator: "Lettie Team",
  publisher: "Lettie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Social Networking",
  classification: "펜팔 및 소셜 네트워킹 데이팅앱",
  
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: baseUrl,
    siteName: "Lettie",
    title: "Lettie - 전 세계 친구들과 편지로 소통하는 글로벌 펜팔 데이팅앱",
    description: "전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어가는 글로벌 펜팔 데이팅앱. 사진이나 외모가 아닌, 마음과 생각으로 시작하는 특별한 인연을 만나보세요.",
    images: [
      {
        url: "/lettie-og-image.png",
        width: 1200,
        height: 630,
        alt: "Lettie - 글로벌 펜팔 데이팅앱",
        type: "image/png",
      }
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@lettie_app",
    creator: "@lettie_app",
    title: "Lettie - 전 세계 친구들과 편지로 소통하는 글로벌 펜팔 데이팅앱",
    description: "전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어가는 글로벌 펜팔 데이팅앱",
    images: ["/lettie-og-image.png"],
  },

  // App Store & Google Play
  alternates: {
    canonical: baseUrl,
    languages: {
      'ko': baseUrl,
      'en': `${baseUrl}/en`,
    },
  },

  // App Links
  appLinks: {
    ios: {
      app_store_id: "6746454876",
      url: "https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876",
    },
    android: {
      package: "com.lettie.app",
      url: "https://play.google.com/store/apps/details?id=com.lettie.app",
    },
  },

  // Verification
  verification: {
    google: "google-site-verification-code", // 실제 코드로 교체 필요
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-site-verification-code",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/lettie-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#4f46e5",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD 구조화된 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Lettie",
              "applicationCategory": "SocialNetworkingApplication",
              "operatingSystem": ["iOS", "Android"],
              "description": "전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어가는 글로벌 펜팔 데이팅앱",
              "url": baseUrl,
              "downloadUrl": "https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "KRW",
                "category": "Free"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "ratingCount": "1000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "author": {
                "@type": "Organization",
                "name": "Lettie Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Lettie",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/lettie-icon.png`
                }
              },
              "screenshot": [
                `${baseUrl}/letter-writing.png`,
                `${baseUrl}/conversation-detail.png`,
                `${baseUrl}/contact-exchange.png`,
                `${baseUrl}/letter-feed.png`,
                `${baseUrl}/brand-screen.png`
              ],
              "featureList": [
                "전 세계 친구들과 편지 교환",
                "프라이버시 보호 시스템",
                "5통 편지 후 연락처 교환",
                "다국가 지원",
                "젬 시스템",
                "아름다운 UI"
              ]
            })
          }}
        />
        
        {/* 추가 SEO 메타 태그 */}
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* 지역 및 언어 정보 */}
        <meta name="geo.region" content="KR" />
        <meta name="geo.country" content="Korea" />
        <meta name="language" content="Korean" />
        
        {/* 앱 스토어 스마트 배너 */}
        <meta name="apple-itunes-app" content="app-id=6746454876" />
        
        {/* 네이버 웹마스터 도구 인증 */}
        <meta name="naver-site-verification" content="b933370623a65bbe5779c3dfdcf094f7a2985d36" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

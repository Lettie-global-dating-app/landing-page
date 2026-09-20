import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { siteGraph } from "@/lib/schema";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 환경에 따른 base URL 설정
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://lettie-dating.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Lettie 레티 — 지구본 위를 날아가는 편지, 28개 언어 펜팔 앱",
    template: "%s | 편지, 펜팔 Lettie"
  },
  description: "편지가 지구본 위를 날아가 거리만큼 걸려 도착하는 펜팔·데이팅 앱. 남이 띄운 편지를 주워 읽고 28개 언어로 번역해 답장하세요. 사진 대신 캐릭터, 나라마다 우표. iOS·Android 무료.",
  keywords: [
    "편지", "펜팔", "펜팔앱", "편지앱", "글로벌 펜팔", "글로벌 친구", "글로벌", "친구", "소통", "문화교류", "외국인친구", "언어교환",
    "글로벌친구", "해외친구", "문화체험", "Lettie", "레티",
    "펜친구", "편지친구", "해외문화", "언어학습", "국제교류", "세계친구", "데이팅",
    "데이팅앱", "만남", "인연", "글로벌 데이팅", "국제 만남", "편지 데이팅",
    "디지털 디톡스", "슬로우 라이프", "글로벌 에티켓", "문화 차이", "힐링",
    "느린 편지", "편지 번역", "번역 펜팔", "28개 언어", "우표 수집", "지구본 편지", "외국인 친구 사귀기", "픽셀 캐릭터", "스와이프 없는 데이팅"
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
    title: "Lettie 레티 — 지구본 위를 날아가는 편지, 28개 언어 펜팔 앱",
    description: "편지가 지구본 위를 날아가 거리만큼 걸려 도착하는 펜팔·데이팅 앱. 남이 띄운 편지를 주워 읽고 28개 언어로 번역해 답장하세요. 사진 대신 캐릭터, 나라마다 우표. iOS·Android 무료.",
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
    title: "Lettie 레티 — 지구본 위를 날아가는 편지, 28개 언어 펜팔 앱",
    description: "편지가 지구본 위를 날아가 거리만큼 걸려 도착하는 펜팔·데이팅 앱. 남이 띄운 편지를 주워 읽고 28개 언어로 번역해 답장하세요. 사진 대신 캐릭터, 나라마다 우표. iOS·Android 무료.",
    images: ["/lettie-og-image.png"],
  },

  // App Store & Google Play
  alternates: {
    canonical: baseUrl,
    languages: languageAlternates(),
  },

  // App Links
  appLinks: {
    ios: {
      app_store_id: "6746454876",
      url: "https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876",
    },
    android: {
      package: "com.dearglobe.dearglobe",
      url: "https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe",
    },
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
        {/* Favicon - 실제 Lettie 로고 사용 */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* 사이트 전역 구조화 데이터.
            Organization·WebSite·MobileApplication 을 하나의 @graph 로 묶고
            @id 로 상호 참조한다. 페이지마다 조직을 새로 선언하면
            검색엔진과 LLM 안에서 엔티티가 분열되기 때문이다. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph('ko')) }}
        />

        {/* 추가 SEO 메타 태그 */}
        <meta name="theme-color" content="#102040" />
        <meta name="msapplication-TileColor" content="#102040" />
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
        <LanguageSwitcher />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

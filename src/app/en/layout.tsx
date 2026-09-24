import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL + "/en"
  : "https://lettie-dating.com/en";

const koBaseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://lettie-dating.com";

// OG/트위터 이미지는 절대 URL 로 지정한다.
// metadataBase 가 ".../en" 이라 상대 경로("/lettie-og-image.png")를 주면
// ".../en/lettie-og-image.png" 로 해석되어 404 가 났다(공유 시 썸네일 깨짐).
const ogImageUrl = `${koBaseUrl}/og/en.png`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    // absolute 를 쓰지 않으면 루트 레이아웃의 template("%s | 편지, 펜팔 Lettie")이
    // 덧붙어 영어 검색결과 제목에 한국어가 섞인다.
    absolute: "Lettie: Pen Pal App With Letters That Fly Across a Globe",
    template: "%s | Lettie"
  },
  description: "A free pen pal app where each letter flies the real distance across a globe. Pick up letters strangers released and read them in 28 languages. iOS & Android.",
  keywords: [
    "penpal", "letter", "penpal app", "letter app", "global penpal", "global friend", "global", "friend", "communication", "cultural exchange", "language exchange", 
    "international friend", "overseas friend", "Lettie", "pen pal app with translation", "pen pal for adults", "find a pen pal", "pen pal website",
    "slow letters", "letter translation app", "28 languages", "stamp collecting app", "pen pal without photos", "pen pal not dating", "snail mail app", "write to strangers"
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
  classification: "Pen Pal and Social Networking App",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR", "es_ES", "pt_BR", "ja_JP", "fr_FR", "zh_CN", "de_DE", "hi_IN", "id_ID", "ru_RU", "it_IT"],
    url: baseUrl,
    siteName: "Lettie",
    title: "Lettie — Slow Letters That Fly Across a Globe | Penpal App",
    description: "A free pen pal app where each letter flies the real distance across a globe. Pick up letters strangers released and read them in 28 languages. iOS & Android.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Lettie — A letter you write today lands tomorrow",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lettie_app",
    creator: "@lettie_app",
    title: "Lettie — Slow Letters That Fly Across a Globe | Penpal App",
    description: "A free pen pal app where each letter flies the real distance across a globe. Pick up letters strangers released and read them in 28 languages. iOS & Android.",
    images: [ogImageUrl],
  },
  alternates: {
    canonical: baseUrl,
    languages: languageAlternates(),
  },
  appLinks: {
    ios: {
      app_store_id: "6746454876",
      url: "https://apps.apple.com/app/id6746454876",
    },
    android: {
      package: "com.dearglobe.dearglobe",
      url: "https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe",
    },
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/lettie-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          App Router 에서 <html> 은 루트 레이아웃만 렌더한다. 여기서 lang="en" 을
          선언해도 실제 응답에는 루트의 lang="ko" 가 나간다.
          루트에서 headers() 로 경로를 읽어 처리하는 방법도 있지만, 그러면 사이트
          전체가 정적 생성에서 동적 렌더링으로 바뀌어 TTFB 가 나빠진다.
          lang 은 색인 신호로는 비중이 작고 주로 접근성(스크린리더)에 쓰이므로,
          정적 생성을 지키고 렌더 시점에 보정하는 쪽을 택했다.
          언어 판별의 실제 신호는 hreflang 과 본문 언어가 담당한다.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang='en';`,
          }}
        />
        {/* 사이트 엔티티(@graph)는 루트 레이아웃이 한 번만 내보낸다 — 여기서 또 내보내면 같은 @id 가 두 벌이 된다 */}

        {/* Extra SEO meta tags */}
        <meta name="theme-color" content="#102040" />
        <meta name="msapplication-TileColor" content="#102040" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Region and language info */}
        <meta name="geo.region" content="US" />
        <meta name="geo.country" content="United States" />
        <meta name="language" content="English" />
        {/* App Store Smart Banner */}
        <meta name="apple-itunes-app" content="app-id=6746454876" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
} 
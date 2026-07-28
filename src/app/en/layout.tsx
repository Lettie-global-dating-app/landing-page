import type { Metadata } from "next";
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
const ogImageUrl = `${koBaseUrl}/lettie-og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    // absolute 를 쓰지 않으면 루트 레이아웃의 template("%s | 편지, 펜팔 Lettie")이
    // 덧붙어 영어 검색결과 제목에 한국어가 섞인다.
    absolute: "Lettie - Penpal Dating App | Make Global Friends Through Letters",
    template: "%s | Lettie"
  },
  description: "Write a letter, not a swipe. Lettie connects you with penpals around the world and translates every letter across 16 languages, so language never decides who you get to meet.",
  keywords: [
    "penpal", "letter", "penpal app", "letter app", "global penpal", "global friend", "global", "friend", "communication", "cultural exchange", "language exchange", 
    "international friend", "overseas friend", "Lettie", "dating app", "relationship", "connection", "international dating", "penpal dating"
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
  classification: "Penpal and Social Networking Dating App",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Lettie",
    title: "Lettie - Penpal Dating App | Make Global Friends Through Letters",
    description: "Write a letter, not a swipe. Lettie connects you with penpals around the world and translates every letter across 16 languages, so language never decides who you get to meet.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Lettie - Global Penpal Dating App",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lettie_app",
    creator: "@lettie_app",
    title: "Lettie - Penpal Dating App | Make Global Friends Through Letters",
    description: "Write a letter, not a swipe. Lettie connects you with penpals worldwide and translates every letter across 16 languages.",
    images: [ogImageUrl],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': baseUrl,
      'ko': koBaseUrl,
      'x-default': koBaseUrl,
    },
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
  verification: {
    google: "google-site-verification-code",
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
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#4f46e5",
      },
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
        {/* JSON-LD - Organization */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lettie",
              "alternateName": "Lettie Penpal App",
              "url": "https://lettie-dating.com/en",
              "logo": "https://lettie-dating.com/lettie-icon.png",
              "description": "Global penpal dating app connecting friends worldwide through letters",
              "foundingDate": "2024",
              "sameAs": [
                "https://apps.apple.com/app/id6746454876",
                "https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "ggprgrkjh@naver.com",
                "availableLanguage": ["Korean", "English"]
              }
            })
          }}
        />

        {/* JSON-LD - WebSite */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lettie",
              "url": "https://lettie-dating.com/en",
              "description": "Connect with global friends through penpal and letter. Build genuine relationships worldwide.",
              "publisher": {
                "@type": "Organization",
                "name": "Lettie"
              },
              "inLanguage": ["en", "ko"]
            })
          }}
        />

        {/* JSON-LD - MobileApplication */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Lettie - Penpal, Letter Global Dating App",
              "applicationCategory": "SocialNetworkingApplication",
              "operatingSystem": ["iOS", "Android"],
              "description": "Connect with global friends through penpal and letter. Lettie is a global penpal dating app for building genuine relationships.",
              "url": "https://lettie-dating.com/en",
              "downloadUrl": "https://apps.apple.com/app/id6746454876",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "category": "Free"
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
                  "url": "https://lettie-dating.com/lettie-icon.png"
                }
              },
              "screenshot": [
                "https://lettie-dating.com/letter-writing.png",
                "https://lettie-dating.com/conversation-detail.png",
                "https://lettie-dating.com/contact-exchange.png",
                "https://lettie-dating.com/letter-feed.png",
                "https://lettie-dating.com/brand-screen.png"
              ],
              "featureList": [
                "Exchange letters with global friends",
                "Global penpal system",
                "Privacy protection system",
                "Contact exchange after 5 letters",
                "Multi-country support"
              ]
            })
          }}
        />
        {/* Extra SEO meta tags */}
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
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
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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Penpal, Letter - Lettie | Make Global Friends with Letters | Penpal App",
    template: "%s | Penpal, Letter Lettie"
  },
  description: "Connect with global friends through penpal and letter. Lettie is a global penpal dating app for building genuine relationships. Experience penpal, letter, friends, communication, and connections on Lettie.",
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
    title: "Penpal, Letter - Lettie | Make Global Friends with Letters | Penpal App",
    description: "Connect with global friends through penpal and letter. Lettie is a global penpal dating app for building genuine relationships. Experience penpal, letter, friends, communication, and connections on Lettie.",
    images: [
      {
        url: "/lettie-og-image.png",
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
    title: "Penpal, Letter - Lettie | Make Global Friends with Letters | Penpal App",
    description: "Connect with global friends through penpal and letter. Lettie is a global penpal dating app for building genuine relationships.",
    images: ["/lettie-og-image.png"],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': baseUrl,
      'ko': koBaseUrl,
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
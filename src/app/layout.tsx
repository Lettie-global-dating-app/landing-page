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

export const metadata: Metadata = {
  title: "Lettie - 전 세계 친구들과 편지로 소통하는 글로벌 펜팔 앱",
  description: "전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어가는 글로벌 펜팔 앱. 사진이나 외모가 아닌, 마음과 생각으로 시작하는 특별한 인연을 만나보세요.",
  keywords: "펜팔, 편지, 글로벌, 친구, 소통, 문화교류, 외국인친구, 언어교환",
  openGraph: {
    title: "Lettie - 전 세계 친구들과 편지로 소통하는 글로벌 펜팔 앱",
    description: "전 세계 친구들과 편지로 소통하며 진실한 관계를 만들어가는 글로벌 펜팔 앱",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

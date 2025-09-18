import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Lettie 블로그 - 펜팔 가이드와 글로벌 소통 팁",
    template: "%s | Lettie 블로그"
  },
  description: "펜팔을 시작하는 방법, 편지 작성 팁, 문화 교류 가이드 등 Lettie와 함께하는 글로벌 소통의 모든 것",
  keywords: [
    "펜팔 가이드", "편지 작성법", "글로벌 친구 만들기", "문화 교류", "언어 교환 팁",
    "펜팔 시작하기", "국제 친구", "편지 에티켓", "펜팔 앱 사용법"
  ],
  openGraph: {
    title: "Lettie 블로그 - 펜팔 가이드와 글로벌 소통 팁",
    description: "펜팔을 시작하는 방법, 편지 작성 팁, 문화 교류 가이드 등 Lettie와 함께하는 글로벌 소통의 모든 것",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {children}
    </div>
  );
}
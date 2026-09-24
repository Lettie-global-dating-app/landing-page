import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Pen Pal Blog: Letter Ideas and Guides",
    template: "%s | Lettie"
  },
  description: "Discover how to start penpalling, letter writing tips, cultural exchange guides, and everything about global communication with Lettie",
  keywords: [
    "penpal guide", "letter writing tips", "make global friends", "cultural exchange", "language exchange tips",
    "start penpalling", "international friends", "letter etiquette", "penpal app guide"
  ],
  openGraph: {
    title: "Lettie Blog - Penpal Guides & Global Communication Tips",
    description: "Discover how to start penpalling, letter writing tips, cultural exchange guides, and everything about global communication with Lettie",
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

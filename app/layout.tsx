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
  metadataBase: new URL('https://zhihai-tu.com'),
  title: "Zhihai Tu | AI Research & Development Manager",
  description: "Personal homepage of Zhihai Tu - AI R&D Manager with 15 years of experience in fintech, specializing in AI agents, AI programming tools, and digital business operations.",
  keywords: ["AI", "人工智能", "AI Agent", "AI 研发", "金融科技", "Fintech", "屠志海", "Zhihai Tu"],
  authors: [{ name: "Zhihai Tu", url: "https://github.com/zhihai-tu" }],
  creator: "Zhihai Tu",
  publisher: "Zhihai Tu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    title: "Zhihai Tu | AI Research & Development Manager",
    description: "Personal homepage of Zhihai Tu - AI R&D Manager with 15 years of experience in fintech, specializing in AI agents, AI programming tools, and digital business operations.",
    siteName: "Zhihai Tu",
    images: [
      {
        url: "/avatar.jpg",
        width: 200,
        height: 200,
        alt: "Zhihai Tu",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Zhihai Tu | AI Research & Development Manager",
    description: "Personal homepage of Zhihai Tu - AI R&D Manager with 15 years of experience in fintech, specializing in AI agents, AI programming tools, and digital business operations.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

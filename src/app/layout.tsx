import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.com"), // Update this to your actual domain
  title: "Rahul Kumar | Social Media Manager & Growth Strategist",
  description: "Building high-growth Social Media ecosystems and scaling brands with content, community, and analytics.",
  openGraph: {
    title: "Rahul Kumar | Growth Strategist",
    description: "Scaling brands with content, community & analytics.",
    url: "https://yourportfolio.com",
    siteName: "Rahul Kumar Portfolio",
    images: [
      {
        url: "/hero-video.mp4", // Using a fallback or hero image usually works better, but standard Next.js OG setup
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

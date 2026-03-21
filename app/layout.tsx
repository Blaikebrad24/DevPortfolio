import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import JupiterBackground from "./_components/JupiterBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blaike Bradford | Principal Software Engineer",
  description: "Principal Software Engineer, Cloud Architect & Technical Lead — 9 years architecting mission-critical telecom systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#0A0A0A]`} style={{ fontFamily: "'Inter', sans-serif" }}>
        <JupiterBackground />
        {children}
      </body>
    </html>
  );
}

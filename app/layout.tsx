import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const site = "https://jorgeasmz-portfolio.vercel.app";
const description =
  "Systems Engineer and Physics undergraduate. Machine learning systems measured end to end, and quantum key distribution in simulation and on an optical bench.";

export const metadata: Metadata = {
  // Resolves the relative image paths below against the deployed origin.
  metadataBase: new URL(site),
  title: "Jorge Arias | Portfolio",
  description,
  openGraph: {
    type: "website",
    siteName: "Jorge Arias",
    title: "Jorge Arias | Portfolio",
    description,
    url: site,
    images: [{ url: "/images/og/ml-platform-bg.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SmoothIndexer - Generate Rust Binary Indexers for Foundry & Hardhat",
    template: "%s | SmoothIndexer",
  },
  description: "A powerful CLI tool that generates production-ready Rust binary indexers for Foundry and Hardhat projects. Just provide your ABI, RPC endpoint, and PostgreSQL database.",
  keywords: [
    "blockchain indexer",
    "rust indexer",
    "foundry",
    "hardhat",
    "EVM contracts",
    "ABI parser",
    "blockchain indexing",
    "ethereum indexer",
    "smart contract indexer",
    "CLI tool",
  ],
  authors: [{ name: "SmoothIndexer" }],
  creator: "SmoothIndexer",
  publisher: "SmoothIndexer",
  metadataBase: new URL("https://smoothindexer.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smoothindexer.com",
    siteName: "SmoothIndexer",
    title: "SmoothIndexer - Generate Rust Binary Indexers for Foundry & Hardhat",
    description: "A powerful CLI tool that generates production-ready Rust binary indexers for Foundry and Hardhat projects. Just provide your ABI, RPC endpoint, and PostgreSQL database.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SmoothIndexer Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmoothIndexer - Generate Rust Binary Indexers",
    description: "A powerful CLI tool that generates production-ready Rust binary indexers for Foundry and Hardhat projects.",
    creator: "@smoothindexer",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="theme-color" content="#0094FF" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

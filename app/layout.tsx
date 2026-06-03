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
  metadataBase: new URL(
    "https://searchengineoptimization-kappa.vercel.app"
  ),

  verification: {
    google: "bqgWiwbOQUnFo7bIZW-vFDbG-hbbwEpKMzWqgFomwb4",
  },

  title: {
    default: "Learn Java Streams",
    template: "%s | Learn Java Streams",
  },

  description:
    "Complete Java Streams tutorial with examples and interview questions.",

  openGraph: {
    title: "Learn Java Streams",
    description:
      "Complete Java Streams tutorial with examples and interview questions.",
    url: "https://searchengineoptimization-kappa.vercel.app",
    siteName: "Learn Java Streams",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
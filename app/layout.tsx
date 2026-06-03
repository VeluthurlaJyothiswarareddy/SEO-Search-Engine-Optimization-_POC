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
   verification: {
    google: "bqgWiwbOQUnFo7bIZW-vFDbG-hbbwEpKMzWqgFomwb4"
  },
  metadataBase: new URL("https://searchengineoptimization-kappa.vercel.app/"),
  title: {
    default: "Learn Java Streams",
    template: "%s | Learn Java Streams",
  },
  description: "Complete Java Streams tutorial with examples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

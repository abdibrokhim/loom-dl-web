import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Footer from './footer';
import Header from './header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "lovido.lol - free open source loom video downloader",
  description: "Download your favorite loom videos using lovido.lol for free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg-a)] font-[family-name:var(--font-geist-sans)]`}
      >
        <Analytics />
        <Header />
        <div className="flex max-w-screen items-center justify-center mt-56 mx-auto w-full flex-col pt-1">

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

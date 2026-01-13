import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Footer from './footer';
import Header from './header';
import Image from 'next/image';
import Link from 'next/link';

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] relative bg-[#000000]`}
      >
        <Analytics />
        <div className="fixed inset-0 max-h-[90vh] ">
          <Link href="https://vibe.devpost.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/web.png" 
              alt="hackathon" 
              fill
              className="object-fit object-repeat cursor-pointer"
              priority
            />
          </Link>
        </div>
        <Header />
        <div className="flex max-w-screen items-center justify-center mt-56 mx-auto w-full flex-col pt-1">

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

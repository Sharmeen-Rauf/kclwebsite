import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { OpsStrip } from "@/components/layout/OpsStrip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RouteProgressBar } from "@/components/ui/RouteProgressBar";
import { HeadingObserver } from "@/components/ui/HeadingObserver";
import { AviationBackgroundOverlay } from "@/components/ui/AviationBackgroundOverlay";
import {
  JsonLd,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "International Flight Support & Aviation Services | KCL",
    template: "%s",
  },
  description:
    "International flight support, overflight and landing permits, ground handling, aviation fuel, catering and crew logistics for operators worldwide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable}`}>
      <body className="flex flex-col min-h-screen text-[#16202B] relative">
        <AviationBackgroundOverlay />
        <Suspense fallback={null}>
          <RouteProgressBar />
        </Suspense>
        <HeadingObserver />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#E8A200] focus:text-[#0B2545] focus:px-4 focus:py-2 focus:font-bold"
        >
          Skip to main content
        </a>
        <JsonLd data={[buildOrganizationJsonLd(), buildWebSiteJsonLd()]} />
        <OpsStrip />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


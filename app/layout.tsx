import React, { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { OpsStrip } from "@/components/layout/OpsStrip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RouteProgressBar } from "@/components/ui/RouteProgressBar";
import { HeadingObserver } from "@/components/ui/HeadingObserver";
import { AviationBackgroundOverlay } from "@/components/ui/AviationBackgroundOverlay";
import { MotionProvider } from "@/components/ui/MotionProvider";
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
    default: "Flight Support & Permits: Pakistan, Middle East, Africa | KCL",
    template: "%s",
  },
  description:
    "Pakistan permit filing, direct authority access in 7 countries, plus handling, fuel, catering and crew hotels. Quote on request.",
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
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable}`}>
      <body className="flex flex-col min-h-screen text-[#16202B] relative">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="kcl-ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
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
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}


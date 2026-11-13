"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface HeroVideoBackgroundProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

/**
 * Renders an instant-LCP priority poster image with a progressive,
 * reduced-motion-safe ambient background video layered smoothly on top.
 */
export function HeroVideoBackground({
  src,
  poster,
  alt,
  className = "",
}: HeroVideoBackgroundProps) {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    if (nav.connection?.saveData) return;

    setShouldPlayVideo(true);
  }, []);

  return (
    <>
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center hero-zoom-photo ${className}`}
      />
      {shouldPlayVideo && (
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          onCanPlay={() => setIsVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-700 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  );
}


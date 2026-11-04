"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function RouteProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstLoad = useRef(true);

  // Complete and hide on route finish
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (animFrameRef.current) clearTimeout(animFrameRef.current);

    setProgress(100);
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 240);

    return () => clearTimeout(hideTimer);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercept clicks on links that trigger client-side navigation
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank" ||
        target.hasAttribute("download")
      ) {
        return;
      }

      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) {
          return;
        }

        // Only show if the transition takes longer than 200ms
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          setProgress(30);

          animFrameRef.current = setTimeout(() => {
            setProgress(70);
            animFrameRef.current = setTimeout(() => {
              setProgress(88);
            }, 300);
          }, 200);
        }, 200);
      } catch {
        // invalid URL, ignore
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animFrameRef.current) clearTimeout(animFrameRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      className="route-progress-bar fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#0B2545] to-[#14406E] relative transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      >
        {/* Tiny inline SVG airplane icon moving along the leading edge (under 1KB) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-[#0B2545] drop-shadow-xs">
          <svg
            className="w-3.5 h-3.5 transform rotate-90 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}


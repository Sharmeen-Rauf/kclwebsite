"use client";

import { useEffect } from "react";

export function HeadingObserver() {
  useEffect(() => {
    // Only target section H2 headings (not H1, not body text)
    const headings = document.querySelectorAll("section h2");
    if (!headings.length) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      headings.forEach((h) => h.classList.add("heading-visible"));
      return;
    }

    headings.forEach((h) => {
      // Avoid re-initializing if already animated
      if (!h.classList.contains("heading-visible")) {
        h.classList.add("heading-fade-init");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("heading-fade-init");
            entry.target.classList.add("heading-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return null;
}

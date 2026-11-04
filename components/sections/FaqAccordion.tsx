"use client";

import React, { useState } from "react";
import type { FaqItem } from "@/content/faqs";

interface FaqAccordionProps {
  items: FaqItem[];
  initialVisibleCount?: number;
}

export function FaqAccordion({
  items,
  initialVisibleCount = 6,
}: FaqAccordionProps) {
  // Support independent toggling for any question
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const visibleItems = showAll ? items : items.slice(0, initialVisibleCount);

  return (
    <div className="space-y-8">
      {/* 2-Column Side-by-Side Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
        {visibleItems.map((faq, idx) => {
          const isOpen = openIndices.has(idx);

          return (
            <div
              key={faq.question}
              className={`bg-white border rounded-[12px] transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[#0B2545]/70 shadow-xs ring-1 ring-[#0B2545]/10"
                  : "border-[#E2E8F0] hover:border-[#CBD5E1] shadow-2xs"
              }`}
            >
              <button
                type="button"
                id={`faq-header-${idx}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => toggleItem(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[12px]"
              >
                <h3 className="text-base sm:text-[17px] font-semibold text-[#0B2545] leading-snug flex-1">
                  {faq.question}
                </h3>

                {/* Circular Pill with Animated Plus Icon (rotates 45° to become ×) */}
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "bg-[#0B2545] text-white rotate-45"
                      : "bg-[#EBF7F5] text-[#0A7B6E] hover:bg-[#D8F0EC]"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.4}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </button>

              {/* Smooth CSS Grid Accordion Content */}
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-header-${idx}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-2 pb-5 px-5 sm:px-6 text-[15px] text-[#5C6B7A] leading-relaxed border-t border-[#F1F5F9]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Centered Show More / Show Less Button */}
      {items.length > initialVisibleCount && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2.5 rounded-full border border-[#CBD5E1] bg-white text-sm font-semibold text-[#0B2545] hover:bg-[#F6F8FB] transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}

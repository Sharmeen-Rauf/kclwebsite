"use client";

import React, { useState } from "react";
import type { FaqItem } from "@/content/faqs";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}

export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-3.5">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const numberLabel = String(idx + 1).padStart(2, "0");

        return (
          <div
            key={faq.question}
            className={`border rounded-[6px] transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#0B2545] shadow-xs ring-1 ring-[#0B2545]/10"
                : "bg-white border-[#CBD5E1] hover:border-[#0B2545]/50 hover:bg-[#FAFBFD]"
            }`}
          >
            <button
              type="button"
              id={`faq-header-${idx}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => toggleItem(idx)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                <span
                  className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                    isOpen
                      ? "bg-[#0B2545] text-white"
                      : "bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545]"
                  }`}
                  aria-hidden="true"
                >
                  {numberLabel}
                </span>

                <h3
                  className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? "text-[#0B2545]" : "text-[#0B2545] hover:text-[#0B2545]"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>

              {/* Latest Sleek Pill Chevron Toggle */}
              <span
                className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "bg-[#0B2545] text-white border-[#0B2545] rotate-180"
                    : "bg-white text-[#0B2545] border-[#CBD5E1]"
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {/* Smooth CSS Grid Accordion Expansion */}
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
                <div className="pt-1 pb-6 px-5 sm:px-6 pl-14 sm:pl-[4.5rem] pr-6 sm:pr-8 text-[15px] sm:text-base text-[#5C6B7A] leading-relaxed border-t border-[#CBD5E1]/40 mt-1">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


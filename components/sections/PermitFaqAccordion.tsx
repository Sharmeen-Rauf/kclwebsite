"use client";

import React, { useState } from "react";
import { INTERNATIONAL_PERMIT_FAQS, FaqItem } from "@/content/faqs";

export function PermitFaqAccordion() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="space-y-3.5">
      {INTERNATIONAL_PERMIT_FAQS.map((faq: FaqItem, idx: number) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className="bg-white border border-[#CBD5E1] rounded-[4px] overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F6F8FB] transition-colors"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#0B2545] leading-snug">
                {faq.question}
              </h3>
              <span
                aria-hidden="true"
                className={`w-7 h-7 rounded-full bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545] flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-all ${
                  isOpen ? "bg-[#0B2545] text-white border-[#0B2545]" : ""
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Answer rendered in HTML for SEO */}
            <div
              className={`px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-[14px] text-[#16202B] leading-relaxed border-t border-[#CBD5E1]/60 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

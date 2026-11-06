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
    <div className="space-y-4">
      {INTERNATIONAL_PERMIT_FAQS.map((faq: FaqItem, idx: number) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className="bg-white border border-[#CBD5E1] rounded-[6px] overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F6F8FB] transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#0B2545] leading-snug">
                {faq.question}
              </h3>
              <span
                aria-hidden="true"
                className="w-8 h-8 rounded-full bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545] flex items-center justify-center font-bold text-base shrink-0 transition-transform duration-200"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Answer is always rendered in HTML for SEO / Google crawlers */}
            <div
              className={`px-5 sm:px-6 pb-6 pt-1 text-base text-[#16202B] leading-relaxed border-t border-[#CBD5E1]/60 ${
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

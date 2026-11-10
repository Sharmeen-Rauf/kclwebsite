"use client";

import React, { useState } from "react";
import { GROUND_HANDLING_FAQS } from "@/content/ground-handling";

export function GroundHandlingFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#CBD5E1] border-t border-b border-[#CBD5E1]">
      {GROUND_HANDLING_FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="py-4 sm:py-5">
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-[#0B2545] hover:text-[#133661] transition-colors cursor-pointer"
            >
              <span>{faq.question}</span>
              <span
                className={`w-6 h-6 rounded-full border border-[#CBD5E1] flex items-center justify-center shrink-0 transition-transform duration-200 text-sm ${
                  isOpen ? "rotate-45 bg-[#0B2545] text-white border-[#0B2545]" : "bg-[#F8FAFC] text-[#0B2545]"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {/* Accessible SSR-friendly container: CSS grid or standard collapse */}
            <div
              className={`transition-all duration-200 ease-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100 mt-2.5" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm sm:text-base text-[#16202B] leading-relaxed pr-8">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


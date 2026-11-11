"use client";

import React, { useState } from "react";
import { CATERING_FAQS } from "@/content/catering";

export function CateringFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-[#5C6B7A]">
          Clear answers to common questions about aircraft inflight catering coordination, dietary requests, and delivery timelines.
        </p>
      </div>

      <div className="divide-y divide-[#CBD5E1] border-y border-[#CBD5E1] bg-white">
        {CATERING_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.question} className="py-4">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#0B2545] hover:text-[#133661] transition-colors py-1 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 rounded-[2px]"
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className={`text-xl font-bold text-[#0B2545] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* All FAQ text exists in HTML for SEO */}
              <div
                className={`pt-2 text-base text-[#16202B] leading-relaxed transition-all duration-200 ${
                  isOpen ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>

              {/* Fallback for noscript/SEO crawlers */}
              <noscript>
                <div className="pt-2 text-base text-[#16202B] leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </noscript>
            </div>
          );
        })}
      </div>
    </div>
  );
}

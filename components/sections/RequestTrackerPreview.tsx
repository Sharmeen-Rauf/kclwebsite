import React from "react";

export function RequestTrackerPreview() {
  return (
    <div className="space-y-6">
      {/* Desktop Horizontal Dual-Lane Timeline (Hidden on Mobile) */}
      <div className="hidden md:block relative bg-white border border-[#CBD5E1] p-8 lg:p-10 rounded-[2px]">
        {/* Lane Labels Left Column */}
        <div className="grid grid-cols-12 gap-6 relative">
          {/* Lane Indicators Column */}
          <div className="col-span-1 flex flex-col justify-between py-6 text-xs font-bold text-[#5C6B7A] select-none border-r border-[#CBD5E1] pr-4">
            <div className="flex items-center gap-1.5 text-[#0B2545]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B2545]" />
              <span className="uppercase tracking-wider">You</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#0B2545] pt-28">
              <span className="w-2.5 h-2.5 rounded-full bg-[#133661]" />
              <span className="uppercase tracking-wider">KCL</span>
            </div>
          </div>

          {/* Timeline Grid (4 Stages across You & KCL lanes) */}
          <div className="col-span-11 relative">
            {/* Connecting Horizontal Navy Centerline */}
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-[2px] bg-[#0B2545]/20 z-0"
            />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {/* Step 1: YOU LANE (Upper) */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-base shadow-sm ring-4 ring-white">
                  1
                </div>
                <div className="w-8 h-8 rounded-[2px] bg-[#F6F8FB] border border-[#CBD5E1] flex items-center justify-center text-[#0B2545]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B2545] leading-snug">
                    Send your flight details
                  </h3>
                  <p className="text-[15px] text-[#5C6B7A] leading-relaxed mt-1">
                    Route, aircraft type and registration, UTC schedule, purpose of flight and services needed.
                  </p>
                </div>
              </div>

              {/* Step 2: KCL LANE (Lower - pushed down) */}
              <div className="flex flex-col items-center text-center space-y-3 pt-32">
                <div className="w-12 h-12 rounded-full bg-[#133661] text-white flex items-center justify-center font-bold text-base shadow-sm ring-4 ring-white">
                  2
                </div>
                <div className="w-8 h-8 rounded-[2px] bg-[#F6F8FB] border border-[#CBD5E1] flex items-center justify-center text-[#0B2545]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B2545] leading-snug">
                    We review the scope
                  </h3>
                  <p className="text-[15px] text-[#5C6B7A] leading-relaxed mt-1">
                    We check documents, authority requirements and connected airport or crew services.
                  </p>
                </div>
              </div>

              {/* Step 3: KCL LANE (Lower - pushed down) */}
              <div className="flex flex-col items-center text-center space-y-3 pt-32">
                <div className="w-12 h-12 rounded-full bg-[#133661] text-white flex items-center justify-center font-bold text-base shadow-sm ring-4 ring-white">
                  3
                </div>
                <div className="w-8 h-8 rounded-[2px] bg-[#F6F8FB] border border-[#CBD5E1] flex items-center justify-center text-[#0B2545]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B2545] leading-snug">
                    We coordinate
                  </h3>
                  <p className="text-[15px] text-[#5C6B7A] leading-relaxed mt-1">
                    Applications and provider arrangements go through the right channels.
                  </p>
                </div>
              </div>

              {/* Step 4: YOU LANE (Upper) */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-base shadow-sm ring-4 ring-white">
                  4
                </div>
                <div className="w-8 h-8 rounded-[2px] bg-[#F6F8FB] border border-[#CBD5E1] flex items-center justify-center text-[#0B2545]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B2545] leading-snug">
                    You get updates
                  </h3>
                  <p className="text-[15px] text-[#5C6B7A] leading-relaxed mt-1">
                    Status, questions and next steps are shared as they come in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Timeline (Visible on Mobile Only) */}
      <div className="block md:hidden bg-white border border-[#CBD5E1] p-6 rounded-[2px]">
        <div className="relative pl-8 space-y-8">
          {/* Vertical Centerline */}
          <div
            aria-hidden="true"
            className="absolute left-3.5 top-3 bottom-3 w-[2px] bg-[#0B2545]/20"
          />

          {/* Mobile Step 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs ring-4 ring-white">
              1
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2 py-0.5 rounded-[2px] inline-block">
              You
            </span>
            <h3 className="text-base font-bold text-[#0B2545]">
              Send your flight details
            </h3>
            <p className="text-[15px] text-[#5C6B7A] leading-relaxed">
              Route, aircraft type and registration, UTC schedule, purpose of flight and services needed.
            </p>
          </div>

          {/* Mobile Step 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-[#133661] text-white flex items-center justify-center font-bold text-xs ring-4 ring-white">
              2
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#133661] bg-[#F6F8FB] border border-[#CBD5E1] px-2 py-0.5 rounded-[2px] inline-block">
              KCL
            </span>
            <h3 className="text-base font-bold text-[#0B2545]">
              We review the scope
            </h3>
            <p className="text-[15px] text-[#5C6B7A] leading-relaxed">
              We check documents, authority requirements and connected airport or crew services.
            </p>
          </div>

          {/* Mobile Step 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-[#133661] text-white flex items-center justify-center font-bold text-xs ring-4 ring-white">
              3
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#133661] bg-[#F6F8FB] border border-[#CBD5E1] px-2 py-0.5 rounded-[2px] inline-block">
              KCL
            </span>
            <h3 className="text-base font-bold text-[#0B2545]">
              We coordinate
            </h3>
            <p className="text-[15px] text-[#5C6B7A] leading-relaxed">
              Applications and provider arrangements go through the right channels.
            </p>
          </div>

          {/* Mobile Step 4 */}
          <div className="relative space-y-2">
            <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs ring-4 ring-white">
              4
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2 py-0.5 rounded-[2px] inline-block">
              You
            </span>
            <h3 className="text-base font-bold text-[#0B2545]">
              You get updates
            </h3>
            <p className="text-[15px] text-[#5C6B7A] leading-relaxed">
              Status, questions and next steps are shared as they come in.
            </p>
          </div>
        </div>
      </div>

      {/* Under Timeline Disclaimer Line */}
      <p className="text-xs text-[#5C6B7A] text-center md:text-left">
        Approvals and timelines are decided by the relevant civil aviation authorities.
      </p>
    </div>
  );
}

import React from "react";

interface Step {
  number: string;
  role: string;
  roleType: "client" | "kcl";
  title: string;
  description: string;
  deliverable: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const STEPS: Step[] = [
  {
    number: "01",
    role: "You / Operator",
    roleType: "client",
    title: "Send your flight details",
    description:
      "Route, aircraft type and registration, UTC schedule, purpose of flight, and services needed.",
    deliverable: "Itinerary & Schedule",
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    number: "02",
    role: "KCL Review",
    roleType: "kcl",
    title: "We review the scope",
    description:
      "We check documents, authority requirements, lead times, and connected airport or crew services.",
    deliverable: "Document & Slot Check",
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: "03",
    role: "KCL Liaison",
    roleType: "kcl",
    title: "We coordinate",
    description:
      "Applications and provider arrangements go through the right civil aviation authorities and airport channels.",
    deliverable: "CAA & Handler Filing",
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    number: "04",
    role: "You / OCC Desk",
    roleType: "client",
    title: "You get updates",
    description:
      "Status, permit numbers, answers to questions, and next steps are shared as they come in.",
    deliverable: "Clearances & Briefing",
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export function RequestTrackerPreview() {
  return (
    <div className="space-y-6">
      {/* 4-Stage Operational Flight Process Cards */}
      <div className="relative">
        {/* Desktop Flight Path Connecting Line */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] z-0"
        >
          <div className="w-full h-full border-t-2 border-dashed border-[#CBD5E1]" />
          {/* Moving aircraft symbol in the center of the path */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F6F8FB] px-2 text-[#0B2545]">
            <svg
              className="w-5 h-5 transform rotate-90"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isClient = step.roleType === "client";

            return (
              <div
                key={step.number}
                className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#0B2545] hover:shadow-md transition-all duration-300 group relative"
              >
                <div>
                  {/* Top Header: Step Number & Role Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-[#0B2545] group-hover:bg-[#133661] text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs transition-colors ring-4 ring-[#F6F8FB]">
                        {step.number}
                      </div>
                      <span className="font-mono text-xs text-[#5C6B7A] font-semibold">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-[2px] ${
                        isClient
                          ? "bg-[#0B2545]/8 text-[#0B2545] border border-[#0B2545]/15"
                          : "bg-[#B88200]/10 text-[#B88200] border border-[#B88200]/25"
                      }`}
                    >
                      {step.role}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2 mb-3">
                    <div className="w-9 h-9 rounded-[4px] bg-[#F6F8FB] border border-[#CBD5E1] group-hover:border-[#0B2545]/40 text-[#0B2545] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B2545] leading-snug group-hover:text-[#133661] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-[#5C6B7A] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Deliverable Tag */}
                <div className="pt-4 mt-5 border-t border-[#CBD5E1]/60 flex items-center justify-between text-xs">
                  <span className="font-mono uppercase text-[#5C6B7A] font-semibold text-[11px]">
                    Key Deliverable
                  </span>
                  <span className="font-bold text-[#0B2545] font-mono text-[11px] bg-[#F6F8FB] px-2 py-0.5 rounded-[2px]">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Operational SLA & Reassurance Strip */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#CBD5E1]">
          <div className="flex items-center gap-3 sm:px-3 pt-2 sm:pt-0">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-mono">
                24/7 Operations Desk
              </h4>
              <p className="text-xs text-[#5C6B7A] mt-0.5">
                Inquiries reviewed upon receipt without business-hour delays.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:px-4 pt-3 sm:pt-0">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B2545] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-mono">
                Direct Authority Liaison
              </h4>
              <p className="text-xs text-[#5C6B7A] mt-0.5">
                Official civil aviation authority & airport coordinator channels.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:px-4 pt-3 sm:pt-0">
            <div className="w-8 h-8 rounded-full bg-amber-50 text-[#B88200] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-mono">
                Real-Time OCC Updates
              </h4>
              <p className="text-xs text-[#5C6B7A] mt-0.5">
                Telegram, WhatsApp, email, or operational AFTN/SITA updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Under Timeline Disclaimer Line */}
      <p className="text-xs text-[#5C6B7A]">
        Approvals and timelines are decided by the relevant civil aviation authorities.
      </p>
    </div>
  );
}

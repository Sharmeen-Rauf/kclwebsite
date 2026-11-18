"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMMON_FLIGHT_DETAILS, DOCUMENTS_WHERE_APPLICABLE } from "@/content/permit-checklists";

const FLIGHT_TYPE_TABS = [
  { id: "scheduled", label: "Scheduled" },
  { id: "charter", label: "Charter" },
  { id: "cargo", label: "Cargo" },
  { id: "private", label: "Private" },
  { id: "diplomatic", label: "Diplomatic" },
] as const;

export default function RequirementsByFlightTypePage() {
  const [activeTab, setActiveTab] = useState<(typeof FLIGHT_TYPE_TABS)[number]["id"]>("scheduled");

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-sm font-bold text-[#B88200] block">Pre-Filing Reference</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2545]">
            Permit Requirements by Flight Type
          </h1>
          <p className="text-base text-[#475569]">
            Shared documentation checklist for Pakistan filing and regional coordination. Operation-specific differences are confirmed per request with our Operations Controller.
          </p>
        </div>

        <div role="tablist" aria-label="Flight types" className="flex flex-wrap gap-2">
          {FLIGHT_TYPE_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-[4px] text-base font-bold border transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#0B2545] text-white border-[#0B2545]"
                    : "bg-white text-[#0B2545] border-[#CBD5E1] hover:border-[#0B2545]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#CBD5E1] pb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] capitalize">
              {activeTab} Flights — Shared Document Checklist
            </h2>
            <span className="text-sm font-semibold bg-[#F4C400] text-[#0B2545] px-3 py-1 rounded-[3px]">
              Pakistan First · Regional Coordination
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-5 space-y-3">
              <h3 className="text-lg font-bold text-[#0B2545]">Core Flight Details</h3>
              <ul className="space-y-2 text-base text-[#16202B]">
                {COMMON_FLIGHT_DETAILS.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-5 space-y-3">
              <h3 className="text-lg font-bold text-[#0B2545]">Operator &amp; Aircraft Documents</h3>
              <ul className="space-y-2 text-base text-[#16202B]">
                {DOCUMENTS_WHERE_APPLICABLE.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#5C6B7A]">
              Approvals are issued by the relevant authorities; KCL coordinates the request.
            </p>
            <Link
              href={`/request-flight-support?flightType=${activeTab}`}
              className="bg-[#F4C400] hover:bg-[#DFB200] text-[#0B2545] font-bold text-base px-6 py-2.5 rounded-[4px] transition-colors"
            >
              Confirm Requirements for Your Route →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

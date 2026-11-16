"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

interface IcaoItem {
  number: string;
  title: string;
  meaning: string;
  need: string;
  colSpan?: string;
}

const ICAO_ITEMS: IcaoItem[] = [
  {
    number: "Item 7",
    title: "Aircraft identification",
    meaning: "The callsign used on the flight plan.",
    need: "Callsign and registration.",
    colSpan: "sm:col-span-4",
  },
  {
    number: "Item 8",
    title: "Flight rules and type of flight",
    meaning:
      "IFR or VFR, and whether the flight is scheduled, non-scheduled or general aviation.",
    need: "Flight rules and operation type.",
    colSpan: "sm:col-span-4",
  },
  {
    number: "Item 9",
    title: "Aircraft type and wake category",
    meaning:
      "ICAO type designator and wake turbulence category (L, M, H or J).",
    need: "Aircraft type.",
    colSpan: "sm:col-span-4",
  },
  {
    number: "Item 10",
    title: "Equipment and capabilities",
    meaning:
      "Navigation, communication and surveillance equipment on board.",
    need: "Equipment list or confirmation (for example RVSM, RNAV).",
    colSpan: "sm:col-span-6",
  },
  {
    number: "Item 13",
    title: "Departure aerodrome and time",
    meaning: "ICAO code and estimated off-block time in UTC.",
    need: "Departure airport and ETD.",
    colSpan: "sm:col-span-6",
  },
  {
    number: "Item 15",
    title: "Speed, level and route",
    meaning: "Cruising speed, flight level and route.",
    need: "Preferred route and level, if any.",
    colSpan: "sm:col-span-12",
  },
  {
    number: "Item 16",
    title: "Destination, estimated elapsed time and alternates",
    meaning:
      "Destination airport, total estimated time en route and alternate airports.",
    need: "Destination and alternates.",
    colSpan: "sm:col-span-6",
  },
  {
    number: "Item 18",
    title: "Other information",
    meaning: "Additional details such as registration and operator.",
    need: "Operator name and any special requirements.",
    colSpan: "sm:col-span-6",
  },
  {
    number: "Item 19",
    title: "Supplementary information",
    meaning: "Endurance, persons on board and emergency equipment.",
    need: "Endurance and persons on board.",
    colSpan: "sm:col-span-12",
  },
];

export function IcaoFlightPlanExplorer() {
  const [selectedItem, setSelectedItem] = useState<string>("Item 7");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyChecklist = async () => {
    const text = [
      "ICAO Flight Plan — Information Checklist",
      ...ICAO_ITEMS.map(
        (item) => `${item.number} (${item.title}): ${item.need}`
      ),
      "",
      "Reference only. The operator and flight crew remain responsible for the flight plan and for final weather and NOTAM review.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const requestHref = `/request-flight-support?service=flight-planning-dispatch&focusItem=${encodeURIComponent(
    selectedItem
  )}`;

  const faqs = SERVICE_TOOL_FAQS["flight-planning-dispatch"] || [];

  return (
    <section
      aria-labelledby="icao-explorer-heading"
      className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5"
    >
      <div className="max-w-3xl">
        <h2
          id="icao-explorer-heading"
          className="text-2xl font-bold text-[#0B2545] mb-2"
        >
          The ICAO Flight Plan, Explained in Plain English
        </h2>
        <p className="text-base text-[#475569] leading-relaxed">
          Hover or tap each field to see what it means and what we need from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Stylised ICAO Flight Plan Form */}
        <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5" role="tablist" aria-label="ICAO flight plan fields">
            {ICAO_ITEMS.map((item) => {
              const isSelected = selectedItem === item.number;
              return (
                <button
                  key={item.number}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`icao-panel-${item.number.replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedItem(item.number)}
                  onMouseEnter={() => setSelectedItem(item.number)}
                  className={`${item.colSpan || "sm:col-span-6"} text-left p-3 rounded-[4px] border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-1 motion-reduce:transition-none ${
                    isSelected
                      ? "bg-[#0B2545] border-[#0B2545] text-white"
                      : "bg-white border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
                  }`}
                >
                  <div className="text-base font-bold leading-snug">
                    {item.number}
                  </div>
                  <div
                    className={`text-base leading-snug ${
                      isSelected ? "text-slate-100" : "text-[#475569]"
                    }`}
                  >
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Plain-English Meaning & What We Need */}
        <div className="lg:col-span-5 space-y-4">
          <div
            aria-live="polite"
            className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 space-y-4"
          >
            {ICAO_ITEMS.map((item) => {
              const isSelected = selectedItem === item.number;
              return (
                <div
                  key={item.number}
                  id={`icao-panel-${item.number.replace(/\s+/g, "-")}`}
                  role="tabpanel"
                  hidden={!isSelected}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-bold text-[#0B2545]">
                    {item.number}: {item.title}
                  </h3>

                  <div className="space-y-1">
                    <div className="text-base font-semibold text-[#0B2545]">
                      What it means
                    </div>
                    <p className="text-base text-[#1E293B] leading-relaxed">
                      {item.meaning}
                    </p>
                  </div>

                  <div className="space-y-1 pt-3 border-t border-[#CBD5E1]">
                    <div className="text-base font-semibold text-[#0B2545]">
                      What we need from you
                    </div>
                    <p className="text-base text-[#1E293B] leading-relaxed">
                      {item.need}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-base text-[#475569] leading-relaxed">
            Reference only. The operator and flight crew remain responsible for the flight plan and for final weather and NOTAM review.
          </p>
        </div>
      </div>

      {/* Quick Questions + Action Buttons */}
      <div className="pt-4 border-t border-[#CBD5E1] flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {faqs.map((item) => (
            <div key={item.question} className="space-y-1">
              <h3 className="text-base font-bold text-[#0B2545]">{item.question}</h3>
              <p className="text-base text-[#475569] leading-snug">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCopyChecklist}
            className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-5 py-3 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          >
            {copied ? "Checklist copied" : "Download as a checklist"}
          </button>

          <Link
            href={requestHref}
            className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[4px] inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            <span>Start My Request</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

type ChangeChipId =
  | "departure-time"
  | "route"
  | "aircraft"
  | "pax-crew"
  | "destination-airport";

type SpokeId =
  | "permits"
  | "slots"
  | "ground"
  | "fuel"
  | "catering"
  | "crew";

interface ChangeChip {
  id: ChangeChipId;
  label: string;
  affectedSpokes: SpokeId[];
  caption: string;
}

const CHANGE_CHIPS: ChangeChip[] = [
  {
    id: "departure-time",
    label: "Departure time",
    affectedSpokes: ["permits", "slots", "ground", "fuel", "catering", "crew"],
    caption:
      "Departure time change — may need review: permits, airport slots, ground handling, fuel timing, catering time, crew transport.",
  },
  {
    id: "route",
    label: "Route",
    affectedSpokes: ["permits", "fuel", "slots"],
    caption:
      "Route change — may need review: permits, fuel quantity, airport slots if the airport changes.",
  },
  {
    id: "aircraft",
    label: "Aircraft",
    affectedSpokes: ["permits", "ground", "fuel", "catering"],
    caption:
      "Aircraft change — may need review: permits (aircraft details), ground handling equipment, fuel quantity or grade, catering counts.",
  },
  {
    id: "pax-crew",
    label: "Passenger or crew numbers",
    affectedSpokes: ["ground", "catering", "crew"],
    caption:
      "Passenger or crew numbers change — may need review: ground handling, catering, crew hotel.",
  },
  {
    id: "destination-airport",
    label: "Destination airport",
    affectedSpokes: ["permits", "slots", "ground", "fuel", "catering", "crew"],
    caption:
      "Destination airport change — may need review: permits, airport slots, ground handling, fuel, catering, crew hotel.",
  },
];

const SPOKES: { id: SpokeId; label: string; x: number; y: number }[] = [
  { id: "permits", label: "Permits", x: 180, y: 45 },
  { id: "slots", label: "Airport slots", x: 420, y: 45 },
  { id: "ground", label: "Ground handling", x: 510, y: 150 },
  { id: "fuel", label: "Fuel", x: 420, y: 255 },
  { id: "catering", label: "Catering", x: 180, y: 255 },
  { id: "crew", label: "Crew hotel & transport", x: 90, y: 150 },
];

const WHAT_TO_TELL_US = [
  "Previous inquiry reference",
  "What changed",
  "New UTC times",
  "Aircraft registration if changed",
];

function SpokeIcon({ id }: { id: SpokeId }) {
  switch (id) {
    case "permits":
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "slots":
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "ground":
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
        </svg>
      );
    case "fuel":
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 22h12" />
          <path d="M4 9h10" />
          <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
        </svg>
      );
    case "catering":
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        </svg>
      );
    case "crew":
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
        </svg>
      );
  }
}

export function ChangeImpactMap() {
  const [selectedChips, setSelectedChips] = useState<ChangeChipId[]>([
    "departure-time",
  ]);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleChip = (id: ChangeChipId) => {
    setSelectedChips((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const affectedSpokesSet = useMemo(() => {
    const set = new Set<SpokeId>();
    CHANGE_CHIPS.forEach((chip) => {
      if (selectedChips.includes(chip.id)) {
        chip.affectedSpokes.forEach((s) => set.add(s));
      }
    });
    return set;
  }, [selectedChips]);

  const activeChips = CHANGE_CHIPS.filter((c) => selectedChips.includes(c.id));

  const handleCopySummary = async () => {
    const summary = [
      "Flight Change Review Summary",
      `Selected changes: ${
        activeChips.length > 0
          ? activeChips.map((c) => c.label).join(", ")
          : "None selected"
      }`,
      ...activeChips.map((c) => `- ${c.caption}`),
      "",
      "What to tell us: Previous inquiry reference, What changed, New UTC times, Aircraft registration if changed.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const requestHref = `/request-flight-support?service=operations-support&type=change${
    selectedChips.length > 0
      ? `&changes=${encodeURIComponent(selectedChips.join(","))}`
      : ""
  }`;

  const faqs = SERVICE_TOOL_FAQS["operations-support"] || [];

  return (
    <section
      aria-labelledby="change-impact-heading"
      className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5"
    >
      <div className="max-w-3xl">
        <h2
          id="change-impact-heading"
          className="text-2xl font-bold text-[#0B2545] mb-2"
        >
          When One Thing Changes, What Moves With It?
        </h2>
        <p className="text-base text-[#475569] leading-relaxed">
          Pick what changed to see which services may need a review. Tell us once and we update them together.
        </p>
      </div>

      {/* Selectable Chips */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Select what changed">
        {CHANGE_CHIPS.map((chip) => {
          const active = selectedChips.includes(chip.id);
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={active}
              onClick={() => toggleChip(chip.id)}
              className={`text-base font-medium px-4 py-2 rounded-[4px] border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                active
                  ? "bg-[#0B2545] border-[#0B2545] text-white"
                  : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
              }`}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      {/* Hub and Spoke + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Hub-and-Spoke Diagram */}
        <div className="lg:col-span-6 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4">
          <div className="relative w-full max-w-[540px] mx-auto">
            <svg
              viewBox="0 0 600 300"
              className="w-full h-auto"
              role="img"
              aria-label="Hub and spoke diagram showing Your flight connected to Permits, Airport slots, Ground handling, Fuel, Catering, and Crew hotel and transport"
            >
              {SPOKES.map((spoke) => {
                const isAffected = affectedSpokesSet.has(spoke.id);
                return (
                  <line
                    key={spoke.id}
                    x1="300"
                    y1="150"
                    x2={spoke.x}
                    y2={spoke.y}
                    stroke={isAffected ? "#0B2545" : "#CBD5E1"}
                    strokeWidth={isAffected ? "3" : "1.5"}
                    strokeDasharray={isAffected ? undefined : "4 4"}
                  />
                );
              })}

              {/* Center Hub */}
              <circle cx="300" cy="150" r="46" fill="#0B2545" />
              <text
                x="300"
                y="155"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="16"
                fontWeight="700"
              >
                Your flight
              </text>
            </svg>

            {/* Accessible Spoke Nodes Grid underneath SVG for crystal-clear icons & labels */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2">
              {SPOKES.map((spoke) => {
                const isAffected = affectedSpokesSet.has(spoke.id);
                return (
                  <div
                    key={spoke.id}
                    className={`flex items-center gap-2 px-3 py-2 rounded-[4px] border text-base font-medium transition-colors motion-reduce:transition-none ${
                      isAffected
                        ? "bg-[#0B2545] border-[#0B2545] text-white"
                        : "bg-white border-[#CBD5E1] text-[#475569]"
                    }`}
                  >
                    <SpokeIcon id={spoke.id} />
                    <span>{spoke.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Impact Captions & What to tell us */}
        <div className="lg:col-span-6 space-y-4">
          <div
            aria-live="polite"
            className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 space-y-2.5"
          >
            <h3 className="text-lg font-bold text-[#0B2545]">
              Services that may need review
            </h3>

            {activeChips.length === 0 ? (
              <p className="text-base text-[#475569]">
                Select one or more changes above to see which services may need review.
              </p>
            ) : (
              <ul className="space-y-1.5 text-base text-[#1E293B]">
                {activeChips.map((chip) => (
                  <li key={chip.id}>{chip.caption}</li>
                ))}
              </ul>
            )}

            {/* Keep all impact notes in HTML for SEO */}
            <div className="sr-only">
              {CHANGE_CHIPS.map((c) => (
                <p key={c.id}>{c.caption}</p>
              ))}
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 space-y-2.5">
            <h3 className="text-lg font-bold text-[#0B2545]">What to tell us</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-[#1E293B]">
              {WHAT_TO_TELL_US.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-2 h-2 rounded-full bg-[#0B2545] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-[#475569] pt-1">
              Approvals and confirmations depend on the authorities and providers.
            </p>
          </div>
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
            onClick={handleCopySummary}
            className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-5 py-3 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          >
            {copied ? "Summary copied" : "Copy summary"}
          </button>

          <Link
            href={requestHref}
            className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[4px] inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            <span>Report a Change</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


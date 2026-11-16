"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

type IntentId = "overfly" | "land-foreign" | "busy-airport";
type CardId = "flight-permit" | "airport-slot" | "ppr";
type CoordinationLevelId = "level-1" | "level-2" | "level-3";

interface IntentOption {
  id: IntentId;
  label: string;
  highlightedCards: CardId[];
}

const INTENTS: IntentOption[] = [
  {
    id: "overfly",
    label: "Fly through a country's airspace",
    highlightedCards: ["flight-permit"],
  },
  {
    id: "land-foreign",
    label: "Land at an airport in another country",
    highlightedCards: ["flight-permit", "ppr"],
  },
  {
    id: "busy-airport",
    label: "Operate at a busy airport at a set time",
    highlightedCards: ["airport-slot", "ppr"],
  },
];

const APPROVAL_CARDS: {
  id: CardId;
  title: string;
  whoGrants: string;
  whatCovers: string;
  whenNeeded: string;
}[] = [
  {
    id: "flight-permit",
    title: "Flight permit",
    whoGrants: "The civil aviation authority of the country.",
    whatCovers: "Permission to fly over or land in the country.",
    whenNeeded: "Depends on the country and the type of flight.",
  },
  {
    id: "airport-slot",
    title: "Airport slot",
    whoGrants: "The airport's slot coordinator.",
    whatCovers: "A specific arrival or departure time at the airport.",
    whenNeeded: "At coordinated airports (see levels below).",
  },
  {
    id: "ppr",
    title: "PPR (Prior Permission Required)",
    whoGrants: "The airport operator.",
    whatCovers: "Permission to use that airport before you arrive.",
    whenNeeded: "At airports that require it.",
  },
];

const COORDINATION_LEVELS: {
  id: CoordinationLevelId;
  label: string;
  description: string;
}[] = [
  {
    id: "level-1",
    label: "Level 1: non-coordinated",
    description: "Capacity meets demand.",
  },
  {
    id: "level-2",
    label: "Level 2: schedules facilitated",
    description: "Some congestion risk, schedules are reviewed.",
  },
  {
    id: "level-3",
    label: "Level 3: coordinated",
    description:
      "Demand is higher than capacity, a slot is needed before you operate.",
  },
];

export function PermitSlotPprGuide() {
  const [selectedIntent, setSelectedIntent] = useState<IntentId>("busy-airport");
  const [selectedLevel, setSelectedLevel] =
    useState<CoordinationLevelId>("level-3");

  const activeIntent =
    INTENTS.find((i) => i.id === selectedIntent) || INTENTS[0];
  const activeLevelObj =
    COORDINATION_LEVELS.find((l) => l.id === selectedLevel) ||
    COORDINATION_LEVELS[2];

  const requestHref = `/request-flight-support?service=airport-slot-coordination&intent=${encodeURIComponent(
    selectedIntent
  )}&coordinationLevel=${encodeURIComponent(selectedLevel)}`;

  const faqs = SERVICE_TOOL_FAQS["airport-slot-coordination"] || [];

  return (
    <section
      aria-labelledby="permit-slot-ppr-heading"
      className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5"
    >
      <div className="max-w-3xl">
        <h2
          id="permit-slot-ppr-heading"
          className="text-2xl font-bold text-[#0B2545] mb-2"
        >
          Permit, Slot or PPR?
        </h2>
        <p className="text-base text-[#475569] leading-relaxed">
          Three different approvals, often confused. Tell us what you want to do and see which one applies.
        </p>
      </div>

      {/* Intent Chips */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Select your flight intent">
        {INTENTS.map((intent) => {
          const active = selectedIntent === intent.id;
          return (
            <button
              key={intent.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedIntent(intent.id)}
              className={`text-base font-medium px-4 py-2 rounded-[4px] border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                active
                  ? "bg-[#0B2545] border-[#0B2545] text-white"
                  : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
              }`}
            >
              {intent.label}
            </button>
          );
        })}
      </div>

      {/* Three Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" aria-live="polite">
        {APPROVAL_CARDS.map((card) => {
          const isHighlighted = activeIntent.highlightedCards.includes(card.id);
          return (
            <div
              key={card.id}
              className={`rounded-[6px] border p-4 space-y-3 transition-colors motion-reduce:transition-none ${
                isHighlighted
                  ? "bg-[#F8FAFC] border-2 border-[#0B2545]"
                  : "bg-white border-[#CBD5E1] opacity-80"
              }`}
            >
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#CBD5E1]">
                <h3 className="text-lg font-bold text-[#0B2545]">
                  {card.title}
                </h3>
                {isHighlighted && (
                  <span className="text-base font-semibold text-[#0B2545] bg-slate-200 px-2.5 py-0.5 rounded-[4px]">
                    Applies
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <div className="text-base font-semibold text-[#0B2545]">
                  Who grants it
                </div>
                <p className="text-base text-[#1E293B] leading-snug">
                  {card.whoGrants}
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-base font-semibold text-[#0B2545]">
                  What it covers
                </div>
                <p className="text-base text-[#1E293B] leading-snug">
                  {card.whatCovers}
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-base font-semibold text-[#0B2545]">
                  When
                </div>
                <p className="text-base text-[#1E293B] leading-snug">
                  {card.whenNeeded}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* IATA Airport Coordination Levels + Seasons */}
      <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="IATA airport coordination levels">
          {COORDINATION_LEVELS.map((lvl) => {
            const active = selectedLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`text-base font-medium px-3.5 py-1.5 rounded-[4px] border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] ${
                  active
                    ? "bg-[#0B2545] border-[#0B2545] text-white"
                    : "bg-white border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
                }`}
              >
                {lvl.label}
              </button>
            );
          })}
        </div>

        <p className="text-base text-[#1E293B]" aria-live="polite">
          <span className="font-semibold text-[#0B2545]">
            {activeLevelObj.label}:{" "}
          </span>
          {activeLevelObj.description}
        </p>

        {/* Keep all 3 level descriptions in HTML for SEO */}
        <div className="sr-only">
          {COORDINATION_LEVELS.map((l) => (
            <p key={l.id}>
              {l.label}: {l.description}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#CBD5E1]/70 text-base text-[#475569]">
          <span>
            <strong className="text-[#0B2545]">IATA seasons:</strong> Summer (late March to late October) and Winter (late October to late March).
          </span>
          <span>
            Requirements differ by airport and by flight type. We confirm what applies to your itinerary.
          </span>
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
          <Link
            href="/services/flight-permissions"
            className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-5 py-3 rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          >
            See permits
          </Link>

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


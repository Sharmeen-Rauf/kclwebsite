"use client";

import React, { useActionState, useMemo, useState } from "react";
import Link from "next/link";
import { submitContactMessageAction, type ActionState } from "@/lib/actions";

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedLabel: string;
  relatedHref: string;
}

export const AVIATION_GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "AIP",
    definition: "A state's official publication with air navigation information.",
    relatedLabel: "Permit Directory",
    relatedHref: "/permit-directory",
  },
  {
    term: "Airport slot",
    definition: "An allocated arrival or departure time at a coordinated airport.",
    relatedLabel: "Airport Slot Coordination",
    relatedHref: "/services/airport-slot-coordination",
  },
  {
    term: "AOC",
    definition: "Air Operator Certificate.",
    relatedLabel: "Flight Permissions",
    relatedHref: "/services/flight-permissions",
  },
  {
    term: "ATS route",
    definition: "A designated airway for air traffic services.",
    relatedLabel: "Overflight Permits",
    relatedHref: "/services/overflight-permits",
  },
  {
    term: "Block permit",
    definition: "One authorisation covering several flights.",
    relatedLabel: "Schedule Filing",
    relatedHref: "/schedule-filing",
  },
  {
    term: "Callsign",
    definition: "The radio identifier of an aircraft in flight.",
    relatedLabel: "ICAO Phonetic Alphabet",
    relatedHref: "/tools/icao-phonetic-alphabet",
  },
  {
    term: "EOBT",
    definition: "Estimated off-block time.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "ETD and ETA",
    definition: "Estimated time of departure and arrival.",
    relatedLabel: "UTC Time Planner",
    relatedHref: "/tools/utc-time-converter",
  },
  {
    term: "ETOPS and EDTO",
    definition: "Rules for extended-range operations of twin-engine aircraft.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "FBO",
    definition: "A service provider for business aircraft at an airport.",
    relatedLabel: "Ground Handling",
    relatedHref: "/services/ground-handling",
  },
  {
    term: "FIR",
    definition: "A defined airspace where flight information and alerting services are provided.",
    relatedLabel: "Pakistan Airspace Guide",
    relatedHref: "/permit-directory/pakistan",
  },
  {
    term: "IATA",
    definition: "The airline industry body; also its three-letter codes.",
    relatedLabel: "Airport Code Lookup",
    relatedHref: "/tools/airport-code-lookup",
  },
  {
    term: "ICAO",
    definition: "The UN agency that sets international aviation standards.",
    relatedLabel: "Airport Code Lookup",
    relatedHref: "/tools/airport-code-lookup",
  },
  {
    term: "Medevac",
    definition: "Medical evacuation flight.",
    relatedLabel: "24/7 Operations Support",
    relatedHref: "/services/operations-support",
  },
  {
    term: "MTOW",
    definition: "Maximum take-off weight.",
    relatedLabel: "Flight Permissions",
    relatedHref: "/services/flight-permissions",
  },
  {
    term: "NOTAM",
    definition: "A notice about hazards or changes that affect flight operations.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "PPR",
    definition: "Prior Permission Required: approval from an airport before arrival.",
    relatedLabel: "Airport Slot Coordination",
    relatedHref: "/services/airport-slot-coordination",
  },
  {
    term: "RVSM",
    definition: "Reduced vertical separation between flight levels 290 and 410.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "Technical stop",
    definition: "A landing where no passengers or cargo are embarked or disembarked.",
    relatedLabel: "Landing Permits",
    relatedHref: "/services/landing-permits",
  },
  {
    term: "Traffic rights",
    definition: "Rights to carry passengers or cargo between states.",
    relatedLabel: "Schedule Filing",
    relatedHref: "/schedule-filing",
  },
  {
    term: "UTC",
    definition: "The standard time used in aviation.",
    relatedLabel: "UTC Time Planner",
    relatedHref: "/tools/utc-time-converter",
  },
  {
    term: "Wake turbulence category",
    definition: "L, M, H or J.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
];

const FLIGHT_INQUIRY_CHECKLIST = [
  "Operator legal name and billing address",
  "Contact name, phone or WhatsApp, and email",
  "Aircraft registration, ICAO type designator, and MTOW",
  "Flight type (scheduled, charter, cargo, private, ferry, technical stop, or medevac)",
  "Departure and destination ICAO codes plus full route string",
  "Dates and schedule in UTC (ETD, ETA, and FIR entry/exit times)",
  "Certificates ready: AOC, CoR, CoA, Noise certificate, and Liability Insurance",
  "Services needed: permits, ground handling, fuel, catering, crew hotel, or dispatch",
];

const INITIAL_ACTION_STATE: ActionState = { status: "idle" };

export function AviationGlossaryClient() {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");
  const [copiedChecklist, setCopiedChecklist] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [formState, formAction, isPending] = useActionState(
    submitContactMessageAction,
    INITIAL_ACTION_STATE
  );

  const letters = useMemo(() => {
    const set = new Set<string>();
    AVIATION_GLOSSARY_TERMS.forEach((t) =>
      set.add(t.term.charAt(0).toUpperCase())
    );
    return ["All", ...Array.from(set).sort()];
  }, []);

  const isTermVisible = (t: GlossaryTerm) => {
    const matchesLetter =
      selectedLetter === "All" ||
      t.term.charAt(0).toUpperCase() === selectedLetter;
    const q = search.trim().toLowerCase();
    const matchesQuery =
      !q ||
      t.term.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q);
    return matchesLetter && matchesQuery;
  };

  const handleCopyChecklist = async () => {
    const text = [
      "KCL Flight Inquiry Checklist",
      ...FLIGHT_INQUIRY_CHECKLIST.map((item, i) => `${i + 1}. ${item}`),
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopiedChecklist(true);
      setTimeout(() => setCopiedChecklist(false), 2000);
    } catch {
      setCopiedChecklist(false);
    }
  };

  return (
    <div className="space-y-10">
      {/* Interactive A to Z Glossary */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-1">
              Aviation Terms Glossary (A–Z)
            </h2>
            <p className="text-base text-[#475569]">
              Plain-English definitions of terms used in flight permits, planning, and ground operations.
            </p>
          </div>
          <div className="md:w-72 shrink-0">
            <label htmlFor="glossary-search" className="sr-only">
              Search glossary terms
            </label>
            <input
              id="glossary-search"
              type="search"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            />
          </div>
        </div>

        {/* Letter Chips */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter glossary by starting letter">
          {letters.map((letter) => {
            const active = selectedLetter === letter;
            return (
              <button
                key={letter}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedLetter(letter)}
                className={`text-base font-semibold px-3 py-1 rounded-[4px] border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] ${active
                    ? "bg-[#0B2545] border-[#0B2545] text-white"
                    : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
                  }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* All Terms Kept in HTML */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {AVIATION_GLOSSARY_TERMS.map((item) => {
            const visible = isTermVisible(item);
            return (
              <div
                key={item.term}
                hidden={!visible}
                className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 flex flex-col justify-between gap-2"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545]">
                    {item.term}
                  </h3>
                  <p className="text-base text-[#1E293B] leading-relaxed">
                    {item.definition}
                  </p>
                </div>
                <div className="pt-1 text-base">
                  <span className="text-[#475569]">Related: </span>
                  <Link
                    href={item.relatedHref}
                    className="font-semibold text-[#0B2545] hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
                  >
                    {item.relatedLabel} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Compact Flight Inquiry Checklist Block */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#CBD5E1] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-1">
              Flight Inquiry Checklist
            </h2>
            <p className="text-base text-[#475569]">
              Keep these details ready when sending a permit or flight support inquiry.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleCopyChecklist}
              className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-4 py-2 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              {copiedChecklist ? "Checklist copied" : "Copy checklist"}
            </button>
            <button
              type="button"
              onClick={() => setShowEmailForm((prev) => !prev)}
              className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-4 py-2 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              Email me this checklist
            </button>
            <a
              href="/files/kcl-permit-request-checklist.pdf"
              download
              className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-4 py-2 rounded-[4px] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              Download PDF
            </a>
          </div>
        </div>

        {showEmailForm && (
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4">
            {formState.status === "preview" ? (
              <p role="status" aria-live="polite" className="text-base font-medium text-[#0B2545]">
                Checklist request prepared. You can also download the PDF or copy the list above.
              </p>
            ) : (
              <form
                action={formAction}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-xl"
              >
                <input type="hidden" name="name" value="Checklist Visitor" />
                <input type="hidden" name="company" value="Checklist Request" />
                <input type="hidden" name="subject" value="Flight Inquiry Checklist copy" />
                <input
                  type="hidden"
                  name="message"
                  value={FLIGHT_INQUIRY_CHECKLIST.join("; ")}
                />
                <label htmlFor="checklist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="checklist-email"
                  name="email"
                  type="email"
                  required
                  placeholder="dispatch@operator.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-3.5 py-2"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white font-semibold text-base px-5 py-2 rounded-[4px] cursor-pointer"
                >
                  {isPending ? "Sending..." : "Send checklist"}
                </button>
              </form>
            )}
          </div>
        )}

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 list-decimal pl-5 text-base text-[#1E293B]">
          {FLIGHT_INQUIRY_CHECKLIST.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>

        <p className="text-base text-[#475569] pt-2 border-t border-[#CBD5E1]">
          Guides are for orientation only; official AIPs, NOTAMs and civil aviation authority directives prevail.
        </p>
      </div>
    </div>
  );
}

"use client";

import React, { useActionState, useMemo, useState } from "react";
import Link from "next/link";
import {
  ISO_COUNTRIES,
  type IsoCountry,
  type WorldRegion,
} from "@/content/countries";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";
import { submitContactMessageAction, type ActionState } from "@/lib/actions";

const REGIONS: ("All" | WorldRegion)[] = [
  "All",
  "Africa",
  "Middle East",
  "Europe",
  "Asia",
  "Americas",
  "Caribbean",
  "Oceania",
];

const INITIAL_ACTION_STATE: ActionState = { status: "idle" };

export function CountryGuideFinder() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<"All" | WorldRegion>("All");
  const [requestedCountry, setRequestedCountry] = useState<IsoCountry | null>(null);
  const [emailInput, setEmailInput] = useState<string>("");
  const [flightType, setFlightType] = useState<string>("Charter / Non-Scheduled");

  const [formState, formAction, isPending] = useActionState(
    submitContactMessageAction,
    INITIAL_ACTION_STATE
  );

  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ISO_COUNTRIES.filter((c) => {
      const matchesRegion =
        selectedRegion === "All" || c.region === selectedRegion;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [searchQuery, selectedRegion]);

  const faqs = SERVICE_TOOL_FAQS["permit-directory"] || [];

  const requestHref = `/request-flight-support${
    requestedCountry
      ? `?country=${encodeURIComponent(requestedCountry.name)}`
      : ""
  }`;

  return (
    <section
      aria-labelledby="country-guide-finder-heading"
      className="py-10 lg:py-12 bg-white border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="max-w-3xl">
          <h2
            id="country-guide-finder-heading"
            className="text-2xl font-bold text-[#0B2545] mb-2"
          >
            Find Your Country, Or Tell Us Which Guide You Need Next
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Search any country on your route. Where we have a guide, open it. Where we do not yet, request it and we will confirm what we can arrange.
          </p>
        </div>

        {/* Search & Region Chips */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="md:w-72 shrink-0">
            <label htmlFor="country-guide-search" className="sr-only">
              Search country by name or ISO code
            </label>
            <input
              id="country-guide-search"
              type="search"
              placeholder="Search country or ISO code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by region">
            {REGIONS.map((region) => {
              const active = selectedRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedRegion(region)}
                  className={`text-base font-medium px-3 py-1.5 rounded-[4px] border cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] motion-reduce:transition-none ${
                    active
                      ? "bg-[#0B2545] border-[#0B2545] text-white"
                      : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </div>

        {/* Country Tiles + Inline Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div
            className={`${
              requestedCountry ? "lg:col-span-8" : "lg:col-span-12"
            } max-h-[300px] overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3`}
          >
            {filteredCountries.map((country) => {
              const isPakistan = country.iso === "PK";
              return (
                <div
                  key={country.iso + country.name}
                  className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-3.5 flex flex-col justify-between gap-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-base font-bold text-[#0B2545]">
                        {country.name} ({country.iso})
                      </div>
                      <div className="text-base text-[#475569]">
                        {isPakistan ? "Guide available" : "Guide on request"}
                      </div>
                    </div>
                  </div>

                  {isPakistan ? (
                    <Link
                      href="/permit-directory/pakistan"
                      className="text-base font-semibold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
                    >
                      <span>Open guide</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRequestedCountry(country)}
                      className="text-left text-base font-semibold text-[#0B2545] hover:underline underline-offset-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
                    >
                      Request this guide →
                    </button>
                  )}
                </div>
              );
            })}

            {filteredCountries.length === 0 && (
              <p className="text-base text-[#475569] col-span-full py-4">
                No matching countries found. Try another search term or region.
              </p>
            )}
          </div>

          {requestedCountry && (
            <div className="lg:col-span-4 bg-[#F8FAFC] border border-[#0B2545] rounded-[6px] p-4 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Request guide: {requestedCountry.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setRequestedCountry(null)}
                  className="text-base font-medium text-[#475569] hover:text-[#0B2545] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] px-2 py-0.5 rounded-[4px]"
                  aria-label="Close guide request form"
                >
                  Close
                </button>
              </div>

              {formState.status === "preview" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-white border border-[#CBD5E1] rounded-[4px] p-3.5 text-base font-medium text-[#0B2545]"
                >
                  Thank you. We will confirm what we can arrange for this country.
                </div>
              ) : (
                <form action={formAction} className="space-y-3">
                  <input type="hidden" name="name" value="Permit Directory Visitor" />
                  <input type="hidden" name="company" value="Country Guide Request" />
                  <input
                    type="hidden"
                    name="subject"
                    value={`Country guide request: ${requestedCountry.name}`}
                  />
                  <input
                    type="hidden"
                    name="message"
                    value={`Requesting permit guide details for ${requestedCountry.name} (${requestedCountry.iso}) - Flight type: ${flightType}`}
                  />
                  <input
                    type="hidden"
                    name="email"
                    value={emailInput.trim() || "guide-request@kclpk.org"}
                  />

                  <div>
                    <label
                      htmlFor="guide-req-country"
                      className="block text-base font-medium text-[#0B2545] mb-1"
                    >
                      Country
                    </label>
                    <input
                      id="guide-req-country"
                      type="text"
                      readOnly
                      value={requestedCountry.name}
                      className="w-full text-base text-[#0B2545] bg-slate-100 border border-[#CBD5E1] rounded-[4px] px-3 py-1.5"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guide-req-email"
                      className="block text-base font-medium text-[#0B2545] mb-1"
                    >
                      Email (optional)
                    </label>
                    <input
                      id="guide-req-email"
                      type="email"
                      placeholder="dispatch@operator.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guide-req-type"
                      className="block text-base font-medium text-[#0B2545] mb-1"
                    >
                      Flight type
                    </label>
                    <select
                      id="guide-req-type"
                      value={flightType}
                      onChange={(e) => setFlightType(e.target.value)}
                      className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                    >
                      <option value="Scheduled">Scheduled</option>
                      <option value="Charter / Non-Scheduled">Charter / Non-Scheduled</option>
                      <option value="Cargo">Cargo</option>
                      <option value="Private / VIP">Private / VIP</option>
                      <option value="Technical Stop">Technical Stop</option>
                      <option value="Air Ambulance">Air Ambulance</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white font-semibold text-base px-4 py-2.5 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                  >
                    {isPending ? "Submitting..." : "Submit guide request"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        <p className="text-base text-[#475569]">
          Reference only. Country requirements change. We confirm what applies to your flight.
        </p>

        {/* Quick Questions + Final Button */}
        <div className="pt-4 border-t border-[#CBD5E1] flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            {faqs.map((item) => (
              <div key={item.question} className="space-y-1">
                <h3 className="text-base font-bold text-[#0B2545]">
                  {item.question}
                </h3>
                <p className="text-base text-[#475569] leading-snug">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="shrink-0">
            <Link
              href={requestHref}
              className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[4px] inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              <span>Start My Request</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


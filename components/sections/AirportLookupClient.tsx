"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { WORLD_AIRPORTS, Airport } from "@/content/airports";

const POPULAR_REGION_FILTERS = [
  { label: "All Airports", prefix: "" },
  { label: "Pakistan (OP)", prefix: "OP" },
  { label: "Middle East (OM/OE/OT/OK)", prefix: "O" },
  { label: "Europe (EG/LF/ED/E)", prefix: "E" },
  { label: "Americas (K/C)", prefix: "K" },
  { label: "Asia-Pacific (V/W/R/Z)", prefix: "V" },
];

export function AirportLookupClient() {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredAirports = useMemo(() => {
    let list = WORLD_AIRPORTS;

    if (selectedRegion) {
      list = list.filter((a) => a.icao.toUpperCase().startsWith(selectedRegion));
    }

    const clean = query.trim().toUpperCase();
    if (!clean) {
      return list.slice(0, 50);
    }

    return list.filter((a) => {
      return (
        a.icao.toUpperCase().includes(clean) ||
        (a.iata && a.iata.toUpperCase().includes(clean)) ||
        a.name.toUpperCase().includes(clean) ||
        a.city.toUpperCase().includes(clean) ||
        a.country.toUpperCase().includes(clean)
      );
    });
  }, [query, selectedRegion]);

  const handleCopy = (icao: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(icao);
      setCopiedCode(icao);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Input Bar */}
      <div className="bg-white border border-[#CBD5E1] p-6 rounded-[2px] space-y-4">
        <div className="relative">
          <label htmlFor="airport-search-input" className="sr-only">
            Search airport by ICAO, IATA, or city
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5C6B7A]">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id="airport-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by ICAO (e.g. OPKC, OMDB, EGLL), IATA (KHI, DXB), airport or city name..."
            className="w-full pl-11 pr-4 py-3 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none text-[#0B2545] text-base rounded-[2px]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#5C6B7A] hover:text-[#0B2545] text-xs font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Region Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-[#5C6B7A] font-semibold mr-1">Region Filter:</span>
          {POPULAR_REGION_FILTERS.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => {
                setSelectedRegion(
                  selectedRegion === filter.prefix ? "" : filter.prefix
                );
              }}
              className={`px-3 py-1.5 rounded-[2px] border font-medium transition-colors ${
                selectedRegion === filter.prefix
                  ? "bg-[#0B2545] text-white border-[#0B2545]"
                  : "bg-[#F6F8FB] text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Ledger Table */}
      <div className="bg-white border border-[#CBD5E1] rounded-[2px] overflow-hidden">
        <div className="bg-[#F6F8FB] border-b border-[#CBD5E1] px-6 py-3.5 flex items-center justify-between text-xs font-semibold text-[#5C6B7A]">
          <span>
            Showing {filteredAirports.length} {filteredAirports.length === 1 ? "aerodrome" : "aerodromes"}
            {query && ` matching "${query}"`}
          </span>
          <span>Source: Bundled OurAirports Open Aviation Dataset</span>
        </div>

        {filteredAirports.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <p className="text-base font-bold text-[#0B2545]">
              No aerodromes found matching &quot;{query}&quot;
            </p>
            <p className="text-sm text-[#5C6B7A] max-w-md mx-auto">
              Try checking your spelling, or searching by 4-letter ICAO code, 3-letter IATA code, or primary city name.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedRegion("");
              }}
              className="kcl-btn-outline-navy px-4 py-2 text-xs font-semibold rounded-[2px] mt-2"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B2545] text-white text-xs uppercase font-semibold">
                  <th className="py-3 px-4 border-r border-slate-700">ICAO</th>
                  <th className="py-3 px-4 border-r border-slate-700">IATA</th>
                  <th className="py-3 px-4 border-r border-slate-700">Airport Name</th>
                  <th className="py-3 px-4 border-r border-slate-700">City</th>
                  <th className="py-3 px-4 border-r border-slate-700">Country</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1] text-sm">
                {filteredAirports.map((airport: Airport) => (
                  <tr
                    key={airport.icao}
                    className="hover:bg-[#F6F8FB] transition-colors"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-[#0B2545] border-r border-[#CBD5E1] whitespace-nowrap">
                      {airport.icao}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-[#5C6B7A] border-r border-[#CBD5E1] whitespace-nowrap">
                      {airport.iata || "—"}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-[#16202B] border-r border-[#CBD5E1]">
                      {airport.name}
                    </td>
                    <td className="py-3.5 px-4 text-[#16202B] border-r border-[#CBD5E1]">
                      {airport.city}
                    </td>
                    <td className="py-3.5 px-4 text-[#5C6B7A] border-r border-[#CBD5E1]">
                      {airport.country}
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(airport.icao)}
                        className="px-2.5 py-1 text-xs border border-[#CBD5E1] bg-white hover:bg-slate-100 text-[#0B2545] font-semibold rounded-[2px]"
                      >
                        {copiedCode === airport.icao ? "Copied!" : "Copy ICAO"}
                      </button>
                      <Link
                        href={`/request-permit?to=${encodeURIComponent(airport.icao)}`}
                        className="px-2.5 py-1 text-xs bg-[#0B2545] hover:bg-[#133661] text-white font-semibold rounded-[2px] inline-block"
                      >
                        File Permit →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}


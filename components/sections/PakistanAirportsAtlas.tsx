"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

export type PakistanProvince =
  | "Sindh"
  | "Punjab"
  | "Islamabad Capital Territory"
  | "Khyber Pakhtunkhwa"
  | "Balochistan";

interface PakistanAirport {
  city: string;
  icao: string;
  iata: string;
  province: PakistanProvince;
  x: number;
  y: number;
}

const PAKISTAN_AIRPORTS: PakistanAirport[] = [
  { city: "Karachi", icao: "OPKC", iata: "KHI", province: "Sindh", x: 185, y: 315 },
  { city: "Lahore", icao: "OPLA", iata: "LHE", province: "Punjab", x: 320, y: 145 },
  { city: "Islamabad", icao: "OPIS", iata: "ISB", province: "Islamabad Capital Territory", x: 290, y: 88 },
  { city: "Peshawar", icao: "OPPS", iata: "PEW", province: "Khyber Pakhtunkhwa", x: 245, y: 78 },
  { city: "Quetta", icao: "OPQT", iata: "UET", province: "Balochistan", x: 145, y: 190 },
  { city: "Multan", icao: "OPMT", iata: "MUX", province: "Punjab", x: 262, y: 195 },
  { city: "Faisalabad", icao: "OPFA", iata: "LYP", province: "Punjab", x: 290, y: 155 },
  { city: "Sialkot", icao: "OPST", iata: "SKT", province: "Punjab", x: 322, y: 112 },
  { city: "Sukkur", icao: "OPSK", iata: "SKZ", province: "Sindh", x: 215, y: 248 },
  { city: "Gwadar", icao: "OPGD", iata: "GWD", province: "Balochistan", x: 65, y: 318 },
  { city: "Rahim Yar Khan", icao: "OPRK", iata: "RYK", province: "Punjab", x: 235, y: 225 },
  { city: "Nawabshah", icao: "OPNH", iata: "WNS", province: "Sindh", x: 202, y: 282 },
  { city: "Turbat", icao: "OPTU", iata: "TUK", province: "Balochistan", x: 92, y: 295 },
];

const PROVINCE_FILTERS: ("All" | PakistanProvince)[] = [
  "All",
  "Sindh",
  "Punjab",
  "Islamabad Capital Territory",
  "Khyber Pakhtunkhwa",
  "Balochistan",
];

export const PAKISTAN_ATLAS_FAQS = [
  {
    question: "Which airports in Pakistan do you support?",
    answer:
      "Tell us your airport and we confirm what we can arrange; the atlas lists the main airports.",
  },
  {
    question: "Do I need a different permit for each airport?",
    answer:
      "It depends on the type of flight and route. Send us your itinerary and we confirm what applies.",
  },
];

export function PakistanAirportsAtlas() {
  const [search, setSearch] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<
    "All" | PakistanProvince
  >("All");
  const [hoveredIcao, setHoveredIcao] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PAKISTAN_AIRPORTS.filter((apt) => {
      const matchesProvince =
        selectedProvince === "All" || apt.province === selectedProvince;
      const matchesSearch =
        !q ||
        apt.city.toLowerCase().includes(q) ||
        apt.icao.toLowerCase().includes(q) ||
        apt.iata.toLowerCase().includes(q) ||
        apt.province.toLowerCase().includes(q);
      return matchesProvince && matchesSearch;
    });
  }, [search, selectedProvince]);

  const filteredSet = useMemo(
    () => new Set(filtered.map((a) => a.icao)),
    [filtered]
  );

  return (
    <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 space-y-5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0B2545] mb-1">
            Airports in Pakistan
          </h2>
          <p className="text-base text-[#475569]">
            Main international and domestic airports across Pakistan. Hover or select an airport to highlight it on the schematic map.
          </p>
        </div>

        <div className="md:w-72 shrink-0">
          <label htmlFor="pk-atlas-search" className="sr-only">
            Search Pakistan airports by city, ICAO, or IATA
          </label>
          <input
            id="pk-atlas-search"
            type="search"
            placeholder="Search city, ICAO, or IATA..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          />
        </div>
      </div>

      {/* Province Chips */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter airports by province">
        {PROVINCE_FILTERS.map((prov) => {
          const active = selectedProvince === prov;
          return (
            <button
              key={prov}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedProvince(prov)}
              className={`text-base font-medium px-3 py-1.5 rounded-[4px] border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] ${
                active
                  ? "bg-[#0B2545] border-[#0B2545] text-white"
                  : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
              }`}
            >
              {prov}
            </button>
          );
        })}
      </div>

      {/* Schematic Map + Airport Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Schematic Map */}
        <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 space-y-2">
          <svg
            viewBox="0 0 400 360"
            className="w-full h-auto"
            role="img"
            aria-label="Schematic map of Pakistan showing major airport locations"
          >
            {/* Simplified schematic outline of Pakistan */}
            <path
              d="M270 30 L330 45 L350 95 L345 145 L290 215 L235 280 L215 335 L165 330 L100 325 L40 315 L55 245 L110 180 L160 115 L220 65 Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2"
            />

            {PAKISTAN_AIRPORTS.map((apt) => {
              const isVisible = filteredSet.has(apt.icao);
              const isHovered = hoveredIcao === apt.icao;
              return (
                <g key={apt.icao} opacity={isVisible ? 1 : 0.25}>
                  <circle
                    cx={apt.x}
                    cy={apt.y}
                    r={isHovered ? 8 : 5}
                    fill={isHovered ? "#0B2545" : "#475569"}
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />
                  <text
                    x={apt.x + 8}
                    y={apt.y + 4}
                    fontSize="11"
                    fontWeight={isHovered ? "700" : "600"}
                    fill="#0B2545"
                  >
                    {apt.icao}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="text-base text-[#475569] text-center">
            Schematic, not for navigation
          </p>
        </div>

        {/* Airport Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
          {filtered.map((apt) => (
            <div
              key={apt.icao}
              onMouseEnter={() => setHoveredIcao(apt.icao)}
              onMouseLeave={() => setHoveredIcao(null)}
              onFocus={() => setHoveredIcao(apt.icao)}
              onBlur={() => setHoveredIcao(null)}
              className={`rounded-[4px] border p-3.5 flex flex-col justify-between gap-2 transition-colors ${
                hoveredIcao === apt.icao
                  ? "bg-white border-[#0B2545]"
                  : "bg-[#F8FAFC] border-[#CBD5E1]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-lg font-bold text-[#0B2545]">
                    {apt.city}
                  </span>
                  <span className="text-base font-bold text-[#0B2545]">
                    {apt.icao} / {apt.iata}
                  </span>
                </div>
                <div className="text-base text-[#475569]">{apt.province}</div>
              </div>

              <Link
                href={`/request-flight-support?to=${encodeURIComponent(apt.icao)}`}
                className="text-base font-semibold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
              >
                <span>Request support at this airport</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-base text-[#475569] col-span-full py-4">
              No airports match your filter. Try another province or search term.
            </p>
          )}
        </div>
      </div>

      {/* Two Quick Questions */}
      <div className="pt-4 border-t border-[#CBD5E1] grid grid-cols-1 md:grid-cols-2 gap-4">
        {PAKISTAN_ATLAS_FAQS.map((item) => (
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
    </div>
  );
}


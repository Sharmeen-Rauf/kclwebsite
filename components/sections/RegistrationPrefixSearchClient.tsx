"use client";

import React, { useState } from "react";
import { AIRCRAFT_REGISTRATION_PREFIXES } from "@/content/tools-data";

export function RegistrationPrefixSearchClient() {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();
  const filtered = AIRCRAFT_REGISTRATION_PREFIXES.filter(
    (item) =>
      item.prefix.toLowerCase().includes(normalized) ||
      item.country.toLowerCase().includes(normalized) ||
      item.region.toLowerCase().includes(normalized) ||
      item.icaoRegionPrefix.toLowerCase().includes(normalized)
  );

  return (
    <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex-1 max-w-xl">
          <label
            htmlFor="prefix-search"
            className="block font-mono text-xs uppercase text-[#5C6B7A] font-semibold mb-2"
          >
            Search by Prefix (e.g., AP, VH, V8, 3B, XU, A6), Country, or ICAO
            Airport Prefix
          </label>
          <input
            id="prefix-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter registration prefixes or country..."
            className="w-full min-h-[48px] px-4 py-2.5 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#0B2545] font-medium rounded-[2px]"
          />
        </div>
        <span className="font-mono text-xs text-[#5C6B7A]">
          Showing {filtered.length} of {AIRCRAFT_REGISTRATION_PREFIXES.length}{" "}
          registries
        </span>
      </div>

      <div className="overflow-x-auto border border-[#CBD5E1]">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#0B2545] text-white font-mono text-xs uppercase">
              <th className="py-3 px-4 border-r border-slate-700">
                Nationality Prefix
              </th>
              <th className="py-3 px-4 border-r border-slate-700">Country</th>
              <th className="py-3 px-4 border-r border-slate-700">Region</th>
              <th className="py-3 px-4 border-r border-slate-700">
                ICAO Aerodrome Prefix
              </th>
              <th className="py-3 px-4">Example Tail Format</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#CBD5E1]">
            {filtered.map((entry) => (
              <tr key={entry.prefix} className="hover:bg-[#F6F8FB]">
                <td className="py-3 px-4 font-mono font-bold text-[#0B2545] border-r border-[#CBD5E1]">
                  {entry.prefix}-
                </td>
                <td className="py-3 px-4 font-semibold text-[#16202B] border-r border-[#CBD5E1]">
                  {entry.country}
                </td>
                <td className="py-3 px-4 text-[#5C6B7A] border-r border-[#CBD5E1]">
                  {entry.region}
                </td>
                <td className="py-3 px-4 font-mono text-xs text-[#0B2545] border-r border-[#CBD5E1]">
                  {entry.icaoRegionPrefix}
                </td>
                <td className="py-3 px-4 font-mono text-xs text-[#5C6B7A]">
                  {entry.exampleFormat}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-6 px-4 text-center text-sm text-[#5C6B7A]"
                >
                  No registration prefix matched &ldquo;{query}&rdquo;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


"use client";

import React, { useEffect, useMemo, useState } from "react";

interface CityZone {
  id: string;
  label: string;
  offsetHours: number;
}

const AVAILABLE_CITIES: CityZone[] = [
  { id: "utc", label: "UTC (Zulu)", offsetHours: 0 },
  { id: "pkt", label: "Karachi / Islamabad (PKT)", offsetHours: 5 },
  { id: "dxb", label: "Dubai (GST)", offsetHours: 4 },
  { id: "lhr", label: "London (GMT/UTC)", offsetHours: 0 },
  { id: "fra", label: "Frankfurt (CET)", offsetHours: 1 },
  { id: "ist", label: "Istanbul (TRT)", offsetHours: 3 },
  { id: "ruh", label: "Riyadh (AST)", offsetHours: 3 },
  { id: "sin", label: "Singapore (SGT)", offsetHours: 8 },
  { id: "hkg", label: "Hong Kong (HKT)", offsetHours: 8 },
  { id: "tyo", label: "Tokyo (JST)", offsetHours: 9 },
  { id: "jfk", label: "New York (EST)", offsetHours: -5 },
  { id: "lax", label: "Los Angeles (PST)", offsetHours: -8 },
  { id: "syd", label: "Sydney (AEST)", offsetHours: 10 },
];

function formatHourMin(totalMinutes: number): string {
  const wrapped = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(wrapped / 60);
  const m = wrapped % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function parseHhMmToMinutes(val: string): number {
  const [hStr, mStr] = val.split(":");
  const h = parseInt(hStr || "0", 10);
  const m = parseInt(mStr || "0", 10);
  return (Number.isNaN(h) ? 0 : h) * 60 + (Number.isNaN(m) ? 0 : m);
}

export function UtcTimeZonePlanner() {
  const [nowUtcMinutes, setNowUtcMinutes] = useState<number>(720);
  const [selectedCityIds, setSelectedCityIds] = useState<string[]>([
    "dxb",
    "lhr",
    "sin",
  ]);

  // Call Window Finder state
  const [placeAId, setPlaceAId] = useState<string>("pkt");
  const [placeBId, setPlaceBId] = useState<string>("lhr");
  const [startA, setStartA] = useState<string>("09:00");
  const [endA, setEndA] = useState<string>("17:00");
  const [startB, setStartB] = useState<string>("09:00");
  const [endB, setEndB] = useState<string>("17:00");

  useEffect(() => {
    const updateNow = () => {
      const d = new Date();
      setNowUtcMinutes(d.getUTCHours() * 60 + d.getUTCMinutes());
    };
    updateNow();
    const id = setInterval(updateNow, 60000);
    return () => clearInterval(id);
  }, []);

  const toggleCity = (id: string) => {
    if (id === "utc" || id === "pkt") return;
    setSelectedCityIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };

  const activeStripCities = useMemo(() => {
    const base = [AVAILABLE_CITIES[0], AVAILABLE_CITIES[1]];
    const chosen = AVAILABLE_CITIES.filter((c) =>
      selectedCityIds.includes(c.id)
    );
    return [...base, ...chosen];
  }, [selectedCityIds]);

  const nowPct = (nowUtcMinutes / 1440) * 100;

  // Call Window Overlap calculation in UTC minutes [0, 1440)
  const overlapData = useMemo(() => {
    const cityA =
      AVAILABLE_CITIES.find((c) => c.id === placeAId) || AVAILABLE_CITIES[1];
    const cityB =
      AVAILABLE_CITIES.find((c) => c.id === placeBId) || AVAILABLE_CITIES[3];

    const aStartLocal = parseHhMmToMinutes(startA);
    const aEndLocal = parseHhMmToMinutes(endA);
    const bStartLocal = parseHhMmToMinutes(startB);
    const bEndLocal = parseHhMmToMinutes(endB);

    const isMinuteInRange = (
      utcMin: number,
      offsetHours: number,
      localStart: number,
      localEnd: number
    ) => {
      const localMin = (((utcMin + offsetHours * 60) % 1440) + 1440) % 1440;
      if (localStart <= localEnd) {
        return localMin >= localStart && localMin < localEnd;
      }
      return localMin >= localStart || localMin < localEnd;
    };

    const segments: { startMin: number; endMin: number }[] = [];
    let currentStart: number | null = null;
    for (let m = 0; m < 1440; m += 15) {
      const inA = isMinuteInRange(m, cityA.offsetHours, aStartLocal, aEndLocal);
      const inB = isMinuteInRange(m, cityB.offsetHours, bStartLocal, bEndLocal);
      if (inA && inB) {
        if (currentStart === null) currentStart = m;
      } else if (currentStart !== null) {
        segments.push({ startMin: currentStart, endMin: m });
        currentStart = null;
      }
    }
    if (currentStart !== null) {
      segments.push({ startMin: currentStart, endMin: 1440 });
    }

    const totalOverlapMinutes = segments.reduce(
      (acc, s) => acc + (s.endMin - s.startMin),
      0
    );

    return {
      cityA,
      cityB,
      segments,
      totalOverlapMinutes,
    };
  }, [placeAId, placeBId, startA, endA, startB, endB]);

  return (
    <div className="space-y-6">
      {/* Time Strip Card */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#0B2545]">
            UTC, PKT and Station Time Strip
          </h2>
          <p className="text-base text-[#475569]">
            Choose up to four additional cities to compare alongside UTC and Pakistan Standard Time (PKT).
          </p>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Select up to four cities">
          {AVAILABLE_CITIES.filter((c) => c.id !== "utc" && c.id !== "pkt").map(
            (city) => {
              const active = selectedCityIds.includes(city.id);
              const disabled = !active && selectedCityIds.length >= 4;
              return (
                <button
                  key={city.id}
                  type="button"
                  aria-pressed={active}
                  disabled={disabled}
                  onClick={() => toggleCity(city.id)}
                  className={`text-base font-medium px-3 py-1.5 rounded-[4px] border cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] ${
                    active
                      ? "bg-[#0B2545] border-[#0B2545] text-white"
                      : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
                  }`}
                >
                  {city.label}
                </button>
              );
            }
          )}
        </div>

        <div className="space-y-3">
          {activeStripCities.map((city) => {
            const currentLocal = formatHourMin(
              nowUtcMinutes + city.offsetHours * 60
            );
            return (
              <div
                key={city.id}
                className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-3 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-base font-bold text-[#0B2545]">
                    {city.label}
                  </span>
                  <span className="text-base font-semibold text-[#0B2545]">
                    Now: {currentLocal}
                  </span>
                </div>

                {/* 24h strip with "Now" marker */}
                <div className="relative h-6 bg-white border border-[#CBD5E1] rounded-[4px] overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-6 divide-x divide-[#CBD5E1]/60 text-xs text-[#475569] pointer-events-none">
                    {[0, 4, 8, 12, 16, 20].map((utcHr) => (
                      <span key={utcHr} className="pl-1.5 flex items-center">
                        {formatHourMin(utcHr * 60 + city.offsetHours * 60)}
                      </span>
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    style={{ left: `${nowPct}%` }}
                    className="absolute top-0 bottom-0 w-0.5 bg-[#0B2545]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call Window Finder */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#0B2545]">
            Call Window Finder
          </h2>
          <p className="text-base text-[#475569]">
            Pick two places and adjust their local working hours to see the overlap in UTC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 space-y-3">
            <div>
              <label
                htmlFor="call-place-a"
                className="block text-base font-medium text-[#0B2545] mb-1"
              >
                First location
              </label>
              <select
                id="call-place-a"
                value={placeAId}
                onChange={(e) => setPlaceAId(e.target.value)}
                className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              >
                {AVAILABLE_CITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label
                  htmlFor="call-start-a"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Work start (local)
                </label>
                <input
                  id="call-start-a"
                  type="time"
                  value={startA}
                  onChange={(e) => setStartA(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2.5 py-1.5"
                />
              </div>
              <div>
                <label
                  htmlFor="call-end-a"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Work end (local)
                </label>
                <input
                  id="call-end-a"
                  type="time"
                  value={endA}
                  onChange={(e) => setEndA(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2.5 py-1.5"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 space-y-3">
            <div>
              <label
                htmlFor="call-place-b"
                className="block text-base font-medium text-[#0B2545] mb-1"
              >
                Second location
              </label>
              <select
                id="call-place-b"
                value={placeBId}
                onChange={(e) => setPlaceBId(e.target.value)}
                className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              >
                {AVAILABLE_CITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label
                  htmlFor="call-start-b"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Work start (local)
                </label>
                <input
                  id="call-start-b"
                  type="time"
                  value={startB}
                  onChange={(e) => setStartB(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2.5 py-1.5"
                />
              </div>
              <div>
                <label
                  htmlFor="call-end-b"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Work end (local)
                </label>
                <input
                  id="call-end-b"
                  type="time"
                  value={endB}
                  onChange={(e) => setEndB(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2.5 py-1.5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted UTC Overlap Bar */}
        <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 space-y-2.5" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-2 text-base font-semibold text-[#0B2545]">
            <span>Overlap window in UTC</span>
            <span>
              {overlapData.segments.length === 0
                ? "No working-hour overlap"
                : overlapData.segments
                    .map(
                      (s) =>
                        `${formatHourMin(s.startMin)}–${formatHourMin(
                          s.endMin
                        )} UTC`
                    )
                    .join(", ")}
            </span>
          </div>

          <div className="relative h-8 bg-white border border-[#CBD5E1] rounded-[4px] overflow-hidden">
            {overlapData.segments.map((seg) => (
              <div
                key={seg.startMin}
                style={{
                  left: `${(seg.startMin / 1440) * 100}%`,
                  width: `${((seg.endMin - seg.startMin) / 1440) * 100}%`,
                }}
                className="absolute top-0 bottom-0 bg-[#0B2545]"
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-[#475569]">
            <span>00:00 UTC</span>
            <span>06:00 UTC</span>
            <span>12:00 UTC</span>
            <span>18:00 UTC</span>
            <span>24:00 UTC</span>
          </div>
        </div>
      </div>
    </div>
  );
}


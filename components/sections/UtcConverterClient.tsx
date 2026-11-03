"use client";

import React, { useState } from "react";

interface StationOffset {
  code: string;
  label: string;
  offsetHours: number;
}

const AVIATION_STATIONS: StationOffset[] = [
  { code: "UTC / ZULU", label: "Coordinated Universal Time", offsetHours: 0 },
  {
    code: "PKT (OPKC/OPLA/OPIS)",
    label: "Pakistan Standard Time (UTC+5)",
    offsetHours: 5,
  },
  {
    code: "GST (OMDB / OMAA)",
    label: "Gulf Standard Time (UTC+4)",
    offsetHours: 4,
  },
  {
    code: "AST (OERK / OTHH)",
    label: "Arabia Standard Time (UTC+3)",
    offsetHours: 3,
  },
  {
    code: "ICT (VTBS / VDPP)",
    label: "Indochina Time (UTC+7)",
    offsetHours: 7,
  },
  {
    code: "BNT / SGT (WBSB / WSSS)",
    label: "Brunei / Singapore Time (UTC+8)",
    offsetHours: 8,
  },
  {
    code: "MUT (FIMP)",
    label: "Mauritius Time (UTC+4)",
    offsetHours: 4,
  },
  {
    code: "AEST (YSSY)",
    label: "Australian Eastern Standard Time (UTC+10)",
    offsetHours: 10,
  },
];

export function UtcConverterClient() {
  const [utcHour, setUtcHour] = useState<number>(6);
  const [utcMinute, setUtcMinute] = useState<number>(30);

  const formatStationTime = (offsetHours: number) => {
    const totalMinutes =
      ((utcHour * 60 + utcMinute + offsetHours * 60) % 1440 + 1440) % 1440;
    const hh = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const mm = String(totalMinutes % 60).padStart(2, "0");

    const dayShift = Math.floor((utcHour * 60 + utcMinute + offsetHours * 60) / 1440);
    const dayLabel =
      dayShift > 0 ? " (+1 day)" : dayShift < 0 ? " (-1 day)" : " (Same UTC day)";

    return { time: `${hh}:${mm}`, dayLabel };
  };

  return (
    <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-b border-[#CBD5E1] pb-6">
        <div className="md:col-span-4">
          <label
            htmlFor="utc-hour"
            className="block font-mono text-xs uppercase text-[#5C6B7A] font-semibold mb-2"
          >
            Planned UTC Hour (00–23Z)
          </label>
          <select
            id="utc-hour"
            value={utcHour}
            onChange={(e) => setUtcHour(Number(e.target.value))}
            className="w-full min-h-[48px] px-3.5 py-2.5 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-base font-bold text-[#0B2545]"
          >
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i}>
                {String(i).padStart(2, "0")}00Z ({String(i).padStart(2, "0")}h UTC)
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-4">
          <label
            htmlFor="utc-minute"
            className="block font-mono text-xs uppercase text-[#5C6B7A] font-semibold mb-2"
          >
            Planned UTC Minute (00–55)
          </label>
          <select
            id="utc-minute"
            value={utcMinute}
            onChange={(e) => setUtcMinute(Number(e.target.value))}
            className="w-full min-h-[48px] px-3.5 py-2.5 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-base font-bold text-[#0B2545]"
          >
            {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((min) => (
              <option key={min} value={min}>
                :{String(min).padStart(2, "0")}Z
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-4 bg-[#0B2545] text-white p-3.5 border border-[#0B2545] font-mono">
          <span className="text-[11px] text-[#E8A200] block">
            PAKISTAN LOCAL (PKT = UTC+5)
          </span>
          <span className="text-lg font-bold">
            {formatStationTime(5).time} PKT
            <span className="text-xs font-normal text-slate-300">
              {formatStationTime(5).dayLabel}
            </span>
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#0B2545] mb-4">
          Converted Station Times Across Flight Corridors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AVIATION_STATIONS.map((station) => {
            const converted = formatStationTime(station.offsetHours);
            const isPakistan = station.offsetHours === 5;
            return (
              <div
                key={station.code}
                className={`p-4 border ${
                  isPakistan
                    ? "bg-amber-50/40 border-[#E8A200]"
                    : "bg-[#F6F8FB] border-[#CBD5E1]"
                }`}
              >
                <span className="font-mono text-xs font-bold text-[#0B2545] block">
                  {station.code}
                </span>
                <span className="text-xs text-[#5C6B7A] block mb-2">
                  {station.label}
                </span>
                <span className="font-mono text-2xl font-bold text-[#0B2545] block">
                  {converted.time}
                </span>
                <span className="font-mono text-[11px] text-[#5C6B7A]">
                  {converted.dayLabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


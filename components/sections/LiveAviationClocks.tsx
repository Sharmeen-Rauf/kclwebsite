"use client";

import React, { useEffect, useState } from "react";

export function LiveAviationClocks() {
  const [times, setTimes] = useState<{ utc: string; pkt: string } | null>(null);

  useEffect(() => {
    function updateClocks() {
      const now = new Date();
      const utc = now.toLocaleTimeString("en-GB", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const pkt = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimes({ utc, pkt });
    }

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#0B2545]">
      <span className="inline-flex items-center gap-1.5 bg-white border border-[#CBD5E1] px-2.5 py-1 rounded-[4px] shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>UTC: {times ? times.utc : "--:--"}</span>
      </span>
      <span className="inline-flex items-center gap-1.5 bg-white border border-[#CBD5E1] px-2.5 py-1 rounded-[4px] shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545]" />
        <span>PKT: {times ? times.pkt : "--:--"}</span>
      </span>
    </div>
  );
}

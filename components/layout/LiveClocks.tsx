"use client";

import React, { useEffect, useState } from "react";

export function LiveClocks() {
  const [times, setTimes] = useState<{ utc: string; pkt: string } | null>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utcFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const pktFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTimes({
        utc: `${utcFormatter.format(now)}Z`,
        pkt: `${pktFormatter.format(now)} PKT`,
      });
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex items-center gap-3 font-mono text-xs tracking-tight text-slate-200"
      aria-label="Live aviation operations clocks in UTC and Pakistan Standard Time"
    >
      <span className="inline-flex items-center gap-1.5 bg-[#133661] px-2 py-0.5 rounded-[2px] border border-slate-600/60">
        <span className="text-[#E8A200] font-semibold">UTC</span>
        <span>{times ? times.utc : "--:--:--Z"}</span>
      </span>
      <span className="inline-flex items-center gap-1.5 bg-[#133661] px-2 py-0.5 rounded-[2px] border border-slate-600/60">
        <span className="text-[#E8A200] font-semibold">OPKC/PKT</span>
        <span>{times ? times.pkt : "--:--:-- PKT"}</span>
      </span>
    </div>
  );
}


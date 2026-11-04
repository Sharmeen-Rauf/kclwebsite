"use client";

import React, { useState, useEffect } from "react";

export function FooterLiveClocks() {
  const [times, setTimes] = useState<{ pkt: string; utc: string } | null>(null);

  useEffect(() => {
    function updateTimes() {
      const now = new Date();

      const utcHours = String(now.getUTCHours()).padStart(2, "0");
      const utcMinutes = String(now.getUTCMinutes()).padStart(2, "0");

      const pktFormatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      setTimes({
        utc: `${utcHours}:${utcMinutes}`,
        pkt: pktFormatted,
      });
    }

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 bg-[#F6F8FB] border border-[#CBD5E1] rounded-[4px] space-y-2 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-xs font-semibold text-[#0B2545]">
            24/7 Operations Desk
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#0B2545] bg-white border border-[#CBD5E1] px-1.5 py-0.5 rounded-[2px]">
          AFPA Authorized
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs font-sans">
        <div className="flex items-center gap-1.5">
          <span className="text-[#5C6B7A] font-medium">PKT:</span>
          <span className="font-semibold text-[#0B2545]">
            {times ? times.pkt : "--:--"}
          </span>
        </div>
        <span className="text-[#CBD5E1]" aria-hidden="true">
          |
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[#5C6B7A] font-medium">UTC:</span>
          <span className="font-semibold text-[#0B2545]">
            {times ? `${times.utc}Z` : "--:--"}
          </span>
        </div>
      </div>
    </div>
  );
}

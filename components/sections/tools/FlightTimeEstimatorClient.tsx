"use client";

import React, { useMemo, useState } from "react";

function formatUtcTimestamp(ms: number): string {
  const d = new Date(ms);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  const hrs = String(d.getUTCHours()).padStart(2, "0");
  const mins = String(d.getUTCMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hrs}:${mins} UTC`;
}

export function FlightTimeEstimatorClient() {
  const [distanceNm, setDistanceNm] = useState<string>("");
  const [groundSpeedKt, setGroundSpeedKt] = useState<string>("");
  const [departureUtc, setDepartureUtc] = useState<string>("");

  const estimate = useMemo(() => {
    const dist = parseFloat(distanceNm);
    const speed = parseFloat(groundSpeedKt);
    if (Number.isNaN(dist) || Number.isNaN(speed) || dist <= 0 || speed <= 0) {
      return null;
    }

    const totalMinutes = Math.round((dist / speed) * 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let arrivalUtc: string | null = null;
    if (departureUtc) {
      const depMs = Date.parse(`${departureUtc}:00Z`);
      if (!Number.isNaN(depMs)) {
        arrivalUtc = formatUtcTimestamp(depMs + totalMinutes * 60000);
      }
    }

    return { hours, minutes, totalMinutes, arrivalUtc };
  }, [distanceNm, groundSpeedKt, departureUtc]);

  return (
    <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="est-distance"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Distance (nautical miles)
          </label>
          <input
            id="est-distance"
            type="number"
            min={0}
            step="any"
            placeholder="e.g. 1200"
            value={distanceNm}
            onChange={(e) => setDistanceNm(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="est-speed"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Average ground speed (knots)
          </label>
          <input
            id="est-speed"
            type="number"
            min={1}
            step="any"
            placeholder="e.g. 450"
            value={groundSpeedKt}
            onChange={(e) => setGroundSpeedKt(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="est-dep-utc"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Departure time in UTC (optional)
          </label>
          <input
            id="est-dep-utc"
            type="datetime-local"
            value={departureUtc}
            onChange={(e) => setDepartureUtc(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
          />
        </div>
      </div>

      <div
        aria-live="polite"
        className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 space-y-3"
      >
        {!estimate ? (
          <p className="text-base text-[#475569]">
            Enter a distance in nautical miles and an average ground speed in knots to calculate estimated flight time.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4">
              <div className="text-base text-[#475569]">
                Estimated flight time
              </div>
              <div className="text-2xl font-bold text-[#0B2545]">
                {estimate.hours}h {String(estimate.minutes).padStart(2, "0")}m
              </div>
            </div>

            {estimate.arrivalUtc && (
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4">
                <div className="text-base text-[#475569]">
                  Estimated arrival time (UTC)
                </div>
                <div className="text-2xl font-bold text-[#0B2545]">
                  {estimate.arrivalUtc}
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-base text-[#475569]">
          This is an arithmetic estimate only (distance divided by average ground speed) and is not a flight plan.
        </p>
      </div>
    </div>
  );
}


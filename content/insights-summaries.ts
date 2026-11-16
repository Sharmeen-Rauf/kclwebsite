export type InsightCoverKind = "route-arc" | "document" | "clock" | "plane";

export interface InsightExtraMeta {
  filterCategory: "Flight Permissions" | "Airport Operations" | "Dispatch" | "Company";
  coverKind: InsightCoverKind;
  takeaways: [string, string, string];
}

export const INSIGHTS_EXTRA_META: Record<string, InsightExtraMeta> = {
  "overflight-permit-vs-landing-permit": {
    filterCategory: "Flight Permissions",
    coverKind: "route-arc",
    takeaways: [
      "An overflight permit authorizes airspace transit along designated ATS airways without landing.",
      "A landing permit authorizes touchdown at a specific aerodrome for commercial, technical, crew, or medevac stops.",
      "Landing requests require station synchronization across handling, slots, fuel, and manifests.",
    ],
  },
  "what-to-send-with-a-permit-request": {
    filterCategory: "Dispatch",
    coverKind: "document",
    takeaways: [
      "Include operator legal name, ICAO designator, callsign, and flight classification.",
      "Provide aircraft ICAO type, registration marks, and MTOW in kilograms.",
      "Send the complete route string with FIR entry/exit waypoints and UTC ETD/ETA.",
    ],
  },
  "schedule-vs-non-schedule-filing-explained": {
    filterCategory: "Airport Operations",
    coverKind: "clock",
    takeaways: [
      "Scheduled filings cover published airline timetables across IATA Summer or Winter seasons.",
      "Non-scheduled filings cover single-sector charters, cargo, ferry flights, medevac, and technical stops.",
      "Scheduled filings manage fleet additions mid-season, while non-scheduled focuses on 24/7 schedule shifts.",
    ],
  },
  "what-is-a-flight-permission-agent": {
    filterCategory: "Company",
    coverKind: "plane",
    takeaways: [
      "An AFPA Authorized Flight Permission Agent coordinates route, document, and filing workflows.",
      "Pre-submission checks verify ATS airways, OPKR/OPLR waypoints, AOC, CoR, CoA, noise, and insurance.",
      "Final approval decisions and validity windows rest solely with the civil aviation authority.",
    ],
  },
};


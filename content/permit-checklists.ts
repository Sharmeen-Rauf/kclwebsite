export interface FlightTypeConfig {
  id: string;
  label: string;
  extras: string[];
  privacyNote?: string;
}

export const COMMON_FLIGHT_DETAILS: string[] = [
  "Aircraft registration",
  "Aircraft type and MTOW",
  "Registered operator",
  "Callsign and telephony designator",
  "Route and alternate airports",
  "Date and schedule in UTC",
  "Purpose of flight",
];

export const DOCUMENTS_WHERE_APPLICABLE: string[] = [
  "Air Operator Certificate (AOC)",
  "Certificate of Registration (C of R)",
  "Certificate of Airworthiness (C of A)",
  "Third-party liability insurance",
  "Radio station licence and noise certificate",
  "Other documents required by the authority",
];

export const FLIGHT_TYPES_CONFIG: FlightTypeConfig[] = [
  {
    id: "passenger",
    label: "Passenger",
    extras: ["Passenger manifest", "Local receiving contact"],
  },
  {
    id: "cargo",
    label: "Cargo",
    extras: [
      "Cargo manifest (air waybill)",
      "Consignee and consignor details",
      "Dangerous goods declaration where applicable",
    ],
  },
  {
    id: "technical-stop",
    label: "Technical stop",
    extras: ["Statement of non-traffic purpose", "Handler and fuelling details"],
  },
  {
    id: "air-ambulance",
    label: "Air ambulance",
    extras: [
      "Medical coordinator contact",
      "Medical clearance letter",
      "Receiving hospital acceptance",
    ],
    privacyNote:
      "Privacy note: do not submit patient records through web forms.",
  },
  {
    id: "private-vip",
    label: "Private / VIP",
    extras: ["Lead passenger details", "Receiving FBO or handler"],
  },
];


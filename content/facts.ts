export type FactStatus = "confirmed" | "approved" | "toFill";

export interface FactField<T> {
  value: T | null;
  status: FactStatus;
  owner: string;
  lastVerified?: string; // ISO YYYY-MM-DD when verified
  note?: string;
}

export function isRenderableFact<T>(
  field: FactField<T> | undefined | null
): field is FactField<T> & { value: T } {
  if (!field) return false;
  if (field.status === "toFill") return false;
  if (field.value === null || field.value === undefined) return false;
  if (typeof field.value === "string") {
    const trimmed = field.value.trim();
    if (!trimmed) return false;
    if (trimmed.includes("{{") || trimmed.includes("}}")) return false;
  }
  return true;
}

export function renderFact<T>(field: FactField<T>): T | null {
  return isRenderableFact(field) ? field.value : null;
}

export interface ConfirmedClientRecord {
  name: string;
  icao: string;
  iata: string;
  country: string;
  logo: string | null;
  displayPermission: boolean;
  owner: string;
}

export type CoverageTierKey = "filed" | "direct" | "partner" | "advice";

export const KCL_FACTS = {
  sourceDocument: "Draft Answers to The Questions We Must Answer (Operations, 05 November 2026)",

  entity: {
    legalName: {
      value: "Kashmir Corporation (Private) Limited",
      status: "confirmed" as FactStatus,
      owner: "Management / Legal",
      lastVerified: "2026-11-05",
    },
    tradingName: {
      value: "KCL International Flight Support",
      status: "confirmed" as FactStatus,
      owner: "Management",
      lastVerified: "2026-11-05",
    },
    afpaLicence: {
      value: "AFPA/001/2024",
      status: "confirmed" as FactStatus,
      owner: "Compliance / Operations Manager",
      lastVerified: "2026-11-05",
    },
    issuer: {
      value: "Pakistan Civil Aviation Authority",
      status: "confirmed" as FactStatus,
      owner: "Compliance / Operations Manager",
      lastVerified: "2026-11-05",
    },
    licenceValidity: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Compliance / Operations Manager",
    },
    secpRegistration: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Finance / Legal",
    },
    ntn: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Finance / Legal",
    },
    incorporationYear: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Management / Legal",
    },
    group: {
      value: "Kashmirwala Group, founded in 1947",
      status: "approved" as FactStatus,
      owner: "Management",
      lastVerified: "2026-11-05",
    },
    groupStatement: {
      value: "Part of the Kashmirwala Group, founded in 1947.",
      status: "approved" as FactStatus,
      owner: "Management",
      lastVerified: "2026-11-05",
    },
    timezone: {
      value: "PKT (UTC+5)",
      status: "confirmed" as FactStatus,
      owner: "Operations",
      lastVerified: "2026-11-05",
    },
  },

  coverage: {
    launchRegions: ["Asia", "Middle East", "Africa"] as const,
    statement:
      "We file flight permits in Pakistan. In Bahrain, Qatar, Kenya, the Central African Republic, Togo, Ghana and Mauritius we coordinate and follow up directly with the authority. Across the rest of Asia, the Middle East and Africa we work through partners.",
    shortStatement:
      "Pakistan filing. Direct access in 7 countries. Partners across Asia, the Middle East and Africa.",
    elsewhereLine:
      "Elsewhere? Tell us your route and we will advise and introduce a partner.",
    tiers: {
      filed: {
        label: "Filed by KCL",
        summary: "KCL prepares, files and follows up with the authority.",
        countries: ["Pakistan"],
      },
      direct: {
        label: "Direct access",
        summary: "Coordination and follow-up directly with the authority.",
        countries: [
          "Bahrain",
          "Qatar",
          "Kenya",
          "Central African Republic",
          "Togo",
          "Ghana",
          "Mauritius",
        ],
      },
      partner: {
        label: "Partner-supported",
        summary: "Coordinated through regional partners across the rest of Asia, the Middle East and Africa.",
        regions: ["Asia", "Middle East", "Africa"],
      },
      advice: {
        label: "Advice only",
        summary: "Advice and partner introduction only.",
      },
    },
    directAccessAllowancesPerCountry: {
      value: null as Record<string, string> | null,
      status: "toFill" as FactStatus,
      owner: "Operations",
      note: "Operations to confirm what direct access allows per country; hide detail column until supplied.",
    },
  },

  clients: [
    {
      name: "Qantas Airways",
      icao: "QFA",
      iata: "QF",
      country: "Australia",
      logo: "/img/imgi_11_qantas airline (1).png",
      displayPermission: false,
      owner: "Business Development",
    },
    {
      name: "Batik Air",
      icao: "BTK",
      iata: "ID",
      country: "Indonesia",
      logo: "/img/batik-air.png",
      displayPermission: false,
      owner: "Business Development",
    },
    {
      name: "Royal Brunei Airlines",
      icao: "RBA",
      iata: "BI",
      country: "Brunei Darussalam",
      logo: "/img/imgi_12_brunei airline.jpg",
      displayPermission: false,
      owner: "Business Development",
    },
    {
      name: "Jetstar",
      icao: "JST",
      iata: "JQ",
      country: "Australia",
      logo: null,
      displayPermission: false,
      owner: "Business Development",
    },
    {
      name: "Virgin Australia",
      icao: "VOZ",
      iata: "VA",
      country: "Australia",
      logo: "/img/Virgin-Logo-1.png",
      displayPermission: false,
      owner: "Business Development",
    },
  ] satisfies ConfirmedClientRecord[],

  contact: {
    opsEmail: {
      value: "ops@kclpk.org",
      status: "confirmed" as FactStatus,
      owner: "Operations",
      lastVerified: "2026-11-05",
    },
    infoEmail: {
      value: "info@kclpk.org",
      status: "confirmed" as FactStatus,
      owner: "Management",
    },
    supportEmail: {
      value: "cs@kclpk.org",
      status: "confirmed" as FactStatus,
      owner: "Operations",
    },
    primaryPhone: {
      value: "+92 320 5486243",
      status: "confirmed" as FactStatus,
      owner: "Operations",
      lastVerified: "2026-11-05",
    },
    legacyPhones: {
      value: null as string[] | null,
      status: "toFill" as FactStatus,
      owner: "Management",
      note: "Legacy numbers (+92 326 8088706, +92 333 2334171) hidden until Management confirms.",
    },
    whatsapp: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Operations",
    },
    sita: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Operations",
      note: "Do not publish SITA until issued and tested.",
    },
    aftn: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Operations",
      note: "AFTN access requested through PCAA and OCAA; never publish until issued and tested.",
    },
    escalationLabel: {
      value: "24/7 urgent escalation line",
      status: "approved" as FactStatus,
      owner: "Operations",
      lastVerified: "2026-11-05",
    },
    staffingHours: {
      value: null as string | null,
      status: "toFill" as FactStatus,
      owner: "Operations",
    },
    address: {
      value:
        "Head Office, 4th Floor, NACON NHOWA Tower, M.D.M. Wafai Road, Karachi 74200, Pakistan",
      status: "confirmed" as FactStatus,
      owner: "Management",
      lastVerified: "2026-11-05",
    },
    social: {
      instagram: "https://instagram.com/kcl_afpa",
      facebook: "https://facebook.com/profile.php?id=61574059260242",
      linkedin: "https://linkedin.com/company/kashmir-corporation-pvt-ltd",
    },
  },

  fees: {
    authorityCharges: {
      value:
        "Authority charges are set by each authority and paid by the operator; KCL collects them as a disbursement (pass-through).",
      status: "approved" as FactStatus,
      owner: "Finance / Operations",
      lastVerified: "2026-11-05",
    },
    serviceCharge: {
      value: "Quote on request.",
      status: "approved" as FactStatus,
      owner: "Business Development",
      lastVerified: "2026-11-05",
    },
    regulatoryDisclaimer:
      "Approvals are decided by each country's civil aviation authority.",
  },

  services: {
    coreSix: [
      {
        id: "flight-permissions",
        name: "Flight permission facilitation",
        href: "/services/flight-permissions",
      },
      {
        id: "aviation-fuel",
        name: "Fuel supply",
        href: "/services/aviation-fuel",
      },
      {
        id: "ground-handling",
        name: "Ground handling",
        href: "/services/ground-handling",
      },
      {
        id: "inflight-catering",
        name: "Catering",
        href: "/services/inflight-catering",
      },
      {
        id: "crew-logistics",
        name: "Crew accommodation",
        href: "/services/crew-logistics",
      },
      {
        id: "operations-support",
        name: "Flight dispatch with 24/7 support",
        href: "/services/operations-support",
      },
    ],
    flightPlanningAndDispatch: {
      name: "Flight planning and dispatch",
      href: "/services/flight-planning-dispatch",
      scope:
        "Route preparation, schedule coordination, and dispatch communication support alongside permits and handling (operator retains operational control).",
    },
    airportSlotCoordination: {
      name: "Airport slot coordination",
      href: "/services/airport-slot-coordination",
      airports: {
        value: null as string[] | null,
        status: "toFill" as FactStatus,
        owner: "Operations",
      },
      fallbackNote:
        "Slot coordination is arranged where KCL has airport contacts. Tell us your airport.",
    },
    diplomaticAndTrafficRights:
      "Diplomatic permissions and traffic rights: case-by-case assistance on request.",
  },

  fuel: {
    products: ["Jet A-1"] as const,
    summary:
      "Jet A-1, into-plane, fuel release and prepayment are confirmed per airport. Credit is subject to approval. Lead time varies by airport. Request a quote.",
    prepaymentPerAirport: {
      value: null as Record<string, string> | null,
      status: "toFill" as FactStatus,
      owner: "Operations / Fuel Desk",
    },
    creditNote: "Credit is subject to approval.",
    leadTimeNote: "Lead time varies by airport. Request a quote.",
  },

  audience: [
    {
      id: "airline-operations",
      title: "Airline operations",
      detail: "Recurring overflight and landing permits",
    },
    {
      id: "charter-business",
      title: "Charter and business aviation",
      detail: "Short notice",
    },
    {
      id: "cargo-other",
      title: "Cargo and other operators",
      detail: "Freighter, ferry, and special mission support",
    },
  ],

  leadRules: {
    requiredFields: [
      "operatorName",
      "aircraftType",
      "routeOrAirport",
      "date",
    ] as const,
    statuses: ["New", "Qualified", "Quoted", "Won", "Lost"] as const,
    firstReplyOwner: "Operations Controller",
    commercialReplyOwner: "Business Development",
  },
} as const;

export function getDisplayableClients(): ConfirmedClientRecord[] {
  const clients: readonly ConfirmedClientRecord[] = KCL_FACTS.clients;
  return clients.filter((c) => c.displayPermission === true);
}

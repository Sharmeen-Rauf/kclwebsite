export type FlightTypeOption = "schedule" | "non-schedule";
export type PermitTypeOption = "overflight" | "landing";

export interface PermitRequirementMatrix {
  documentsNeeded: string[];
  typicalLeadTime: string;
  validityWindow: string;
  authorityNotes: string[];
  verificationStatus: "verified" | "needs verification";
}

export interface CountryPermitGuide {
  slug: string;
  countryName: string;
  isoCode: string;
  firCodes: string[];
  caaAuthorityName: string;
  primaryAirports: Array<{
    icao: string;
    iata: string;
    city: string;
    name: string;
  }>;
  summary: string;
  airwaysNotes: string;
  requirements: {
    schedule: {
      overflight: PermitRequirementMatrix;
      landing: PermitRequirementMatrix;
    };
    "non-schedule": {
      overflight: PermitRequirementMatrix;
      landing: PermitRequirementMatrix;
    };
  };
  faqs: Array<{ question: string; answer: string }>;
}

export const COUNTRY_PERMIT_GUIDES: CountryPermitGuide[] = [
  {
    slug: "pakistan",
    countryName: "Pakistan",
    isoCode: "PK",
    firCodes: ["OPKR (Karachi FIR)", "OPLR (Lahore FIR)"],
    caaAuthorityName: "Pakistan Civil Aviation Authority (PCAA)",
    primaryAirports: [
      {
        icao: "OPKC",
        iata: "KHI",
        city: "Karachi",
        name: "Jinnah International Airport",
      },
      {
        icao: "OPLA",
        iata: "LHE",
        city: "Lahore",
        name: "Allama Iqbal International Airport",
      },
      {
        icao: "OPIS",
        iata: "ISB",
        city: "Islamabad",
        name: "Islamabad International Airport",
      },
      {
        icao: "OPPS",
        iata: "PEW",
        city: "Peshawar",
        name: "Bacha Khan International Airport",
      },
      {
        icao: "OPMT",
        iata: "MUX",
        city: "Multan",
        name: "Multan International Airport",
      },
      {
        icao: "OPQT",
        iata: "UET",
        city: "Quetta",
        name: "Quetta International Airport",
      },
    ],
    summary:
      "Pakistan straddles the primary Europe–Southeast Asia and Middle East–East Asia trunk routes across the Karachi (OPKR) and Lahore (OPLR) Flight Information Regions. As an AFPA Authorized Flight Permission Agent, KCL files directly for seasonal scheduled clearances and short-notice non-scheduled permits.",
    airwaysNotes:
      "Operators must specify entry and exit waypoints on OPKR/OPLR boundaries, complete ATS route string, aircraft MTOW, and valid radio/navigation equipment designators when filing.",
    requirements: {
      schedule: {
        overflight: {
          documentsNeeded: [
            "Seasonal schedule table (IATA Winter / Summer slot dates, days of operation, UTC timings)",
            "Air Operator Certificate (AOC) and Operations Specifications",
            "Certificate of Registration and Certificate of Airworthiness",
            "Worldwide Third-Party Liability Insurance Certificate",
            "Noise Certificate and Radio Station License",
            "AFPA Authorization Letter appointing Kashmir Corporation Pvt Ltd (KCL)",
          ],
          typicalLeadTime: "In advance of IATA seasonal timetable implementation",
          validityWindow: "Per approved seasonal schedule",
          authorityNotes: [
            "Filed per IATA seasonal schedule or ad-hoc schedule amendment.",
            "Entry/exit FIR points across OPKR and OPLR must match filed ATS flight plans.",
            "Subject to Pakistan Civil Aviation Authority (PCAA) regulatory review.",
          ],
          verificationStatus: "verified",
        },
        landing: {
          documentsNeeded: [
            "Complete seasonal timetable with turnaround times at Pakistani airports (OPKC, OPLA, OPIS, etc.)",
            "Air Operator Certificate (AOC) with designated aircraft types",
            "Certificates of Registration, Airworthiness, Insurance, and Noise",
            "Approved Aviation Security Program reference",
            "Ground handling and fuel arrangement confirmation in Pakistan",
          ],
          typicalLeadTime: "In advance of IATA seasonal timetable implementation",
          validityWindow: "Per approved seasonal schedule",
          authorityNotes: [
            "Requires airport slot coordination and ground handling confirmation at the arrival aerodrome.",
            "Subject to airport slot and PCAA authority clearances.",
          ],
          verificationStatus: "verified",
        },
      },
      "non-schedule": {
        overflight: {
          documentsNeeded: [
            "Operator details, ICAO three-letter designator / callsign, and billing address",
            "Aircraft type, registration mark, and Maximum Takeoff Weight (MTOW)",
            "Complete flight schedule in UTC with entry/exit waypoints for OPKR / OPLR",
            "Purpose of flight (commercial charter, ferry, VIP, medevac, cargo)",
            "Valid AOC, Certificate of Airworthiness, and Insurance Certificate",
          ],
          typicalLeadTime: "Standard CAA non-scheduled notice window",
          validityWindow: "Per authority issued clearance window",
          authorityNotes: [
            "Short-notice, ambulance, and AOG recovery flights are handled 24/7 by KCL Ops desk.",
            "Exact notice period depends on flight category and authority review.",
          ],
          verificationStatus: "verified",
        },
        landing: {
          documentsNeeded: [
            "Operator name, callsign, aircraft type, registration, and MTOW",
            "Full itinerary (origin, Pakistani airport ICAO, onward destination, UTC ETD/ETA)",
            "Crew and passenger manifest summary or cargo nature declaration (dangerous goods require DGR docs)",
            "AOC, Airworthiness, Registration, and Third-Party Liability Insurance",
            "Confirmed ground handling and hotel/fuel request details via KCL",
          ],
          typicalLeadTime: "Standard CAA non-scheduled landing notice window",
          validityWindow: "Per authority issued clearance window",
          authorityNotes: [
            "Technical stops (refueling/crew rest) and commercial traffic stops have distinct clearance pathways.",
            "KCL coordinates permit clearance alongside ramp handling, Jet A-1 fuel, catering, and crew hotels.",
          ],
          verificationStatus: "verified",
        },
      },
    },
    faqs: [
      {
        question: "Which Flight Information Regions (FIRs) cover Pakistan airspace?",
        answer:
          "Pakistan airspace is divided into two Flight Information Regions: Karachi FIR (OPKR) in the south and Lahore FIR (OPLR) in the north. A single Pakistan overflight permit covers approved routing across the designated FIRs as filed.",
      },
      {
        question: "Can KCL secure short-notice non-schedule overflight or technical landing permits in Pakistan?",
        answer:
          "Yes. Our operations desk runs 24/7 to process urgent non-schedule overflight, technical fuel stop, medevac, and ferry flight requests through official civil aviation authority channels.",
      },
      {
        question: "What information should dispatchers include in an initial permit request?",
        answer:
          "Include operator name, aircraft type and registration, callsign, MTOW, flight purpose, departure and destination ICAO codes, entry/exit waypoints in OPKR/OPLR, and UTC dates/times.",
      },
      {
        question: "Does KCL provide ground handling and fuel along with the landing permit?",
        answer:
          "Yes. In addition to being an AFPA Authorized Flight Permission Agent, KCL coordinates ground handling, Jet A-1 fuel supply, in-flight catering, and crew hotel accommodation at Pakistani international airports.",
      },
    ],
  },
];

export function getCountryPermitBySlug(slug: string): CountryPermitGuide | undefined {
  return COUNTRY_PERMIT_GUIDES.find((country) => country.slug === slug);
}


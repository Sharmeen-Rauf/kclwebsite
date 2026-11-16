export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedLabel: string;
  relatedHref: string;
}

export const AVIATION_GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "AIP",
    definition: "A state's official publication with air navigation information.",
    relatedLabel: "Permit Directory",
    relatedHref: "/permit-directory",
  },
  {
    term: "Airport slot",
    definition: "An allocated arrival or departure time at a coordinated airport.",
    relatedLabel: "Airport Slot Coordination",
    relatedHref: "/services/airport-slot-coordination",
  },
  {
    term: "AOC",
    definition: "Air Operator Certificate.",
    relatedLabel: "Flight Permissions",
    relatedHref: "/services/flight-permissions",
  },
  {
    term: "ATS route",
    definition: "A designated airway for air traffic services.",
    relatedLabel: "Overflight Permits",
    relatedHref: "/services/overflight-permits",
  },
  {
    term: "Block permit",
    definition: "One authorisation covering several flights.",
    relatedLabel: "Schedule Filing",
    relatedHref: "/schedule-filing",
  },
  {
    term: "Callsign",
    definition: "The radio identifier of an aircraft in flight.",
    relatedLabel: "ICAO Phonetic Alphabet",
    relatedHref: "/tools/icao-phonetic-alphabet",
  },
  {
    term: "EOBT",
    definition: "Estimated off-block time.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "ETD and ETA",
    definition: "Estimated time of departure and arrival.",
    relatedLabel: "UTC Time Planner",
    relatedHref: "/tools/utc-time-converter",
  },
  {
    term: "ETOPS and EDTO",
    definition: "Rules for extended-range operations of twin-engine aircraft.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "FBO",
    definition: "A service provider for business aircraft at an airport.",
    relatedLabel: "Ground Handling",
    relatedHref: "/services/ground-handling",
  },
  {
    term: "FIR",
    definition: "A defined airspace where flight information and alerting services are provided.",
    relatedLabel: "Pakistan Airspace Guide",
    relatedHref: "/permit-directory/pakistan",
  },
  {
    term: "IATA",
    definition: "The airline industry body; also its three-letter codes.",
    relatedLabel: "Airport Code Lookup",
    relatedHref: "/tools/airport-code-lookup",
  },
  {
    term: "ICAO",
    definition: "The UN agency that sets international aviation standards.",
    relatedLabel: "Airport Code Lookup",
    relatedHref: "/tools/airport-code-lookup",
  },
  {
    term: "Medevac",
    definition: "Medical evacuation flight.",
    relatedLabel: "24/7 Operations Support",
    relatedHref: "/services/operations-support",
  },
  {
    term: "MTOW",
    definition: "Maximum take-off weight.",
    relatedLabel: "Flight Permissions",
    relatedHref: "/services/flight-permissions",
  },
  {
    term: "NOTAM",
    definition: "A notice about hazards or changes that affect flight operations.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "PPR",
    definition: "Prior Permission Required: approval from an airport before arrival.",
    relatedLabel: "Airport Slot Coordination",
    relatedHref: "/services/airport-slot-coordination",
  },
  {
    term: "RVSM",
    definition: "Reduced vertical separation between flight levels 290 and 410.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
  {
    term: "Technical stop",
    definition: "A landing where no passengers or cargo are embarked or disembarked.",
    relatedLabel: "Landing Permits",
    relatedHref: "/services/landing-permits",
  },
  {
    term: "Traffic rights",
    definition: "Rights to carry passengers or cargo between states.",
    relatedLabel: "Schedule Filing",
    relatedHref: "/schedule-filing",
  },
  {
    term: "UTC",
    definition: "The standard time used in aviation.",
    relatedLabel: "UTC Time Planner",
    relatedHref: "/tools/utc-time-converter",
  },
  {
    term: "Wake turbulence category",
    definition: "L, M, H or J.",
    relatedLabel: "Flight Planning & Dispatch",
    relatedHref: "/services/flight-planning-dispatch",
  },
];


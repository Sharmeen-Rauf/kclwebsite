export interface CateringFaq {
  question: string;
  answer: string;
}

export interface CateringServiceItem {
  id: string;
  name: string;
  summary: string;
  href: string;
  image: string;
  alt: string;
  isConfirmed?: boolean;
}

export interface CateringFlightType {
  id: string;
  title: string;
  description: string;
  flightTypeParam: string;
}

export interface CateringRelatedService {
  title: string;
  description: string;
  href: string;
  tag: string;
  image: string;
  alt: string;
}

// 5 What We Arrange Cards
export const CATERING_SERVICES: CateringServiceItem[] = [
  {
    id: "inflight-meals",
    name: "Inflight meals",
    summary: "Meal preparation and supply for passengers and crew.",
    href: "/request-flight-support?service=inflight-catering&category=inflight-meals",
    image: "/img/services/catering/01-meals.webp",
    alt: "Passenger and crew inflight meal trays prepared for commercial and private aviation",
    isConfirmed: true,
  },
  {
    id: "special-dietary-plans",
    name: "Special dietary plans",
    summary: "Customised meal plans and dietary requests.",
    href: "/request-flight-support?service=inflight-catering&category=special-dietary-plans",
    image: "/img/services/catering/02-dietary.webp",
    alt: "Customised dietary flight meals including vegetarian, vegan and gluten-free galley options",
    isConfirmed: true,
  },
  {
    id: "crew-meals",
    name: "Crew meals",
    summary: "Meals for crews on long sectors, including cargo and ferry flights.",
    href: "/request-flight-support?service=inflight-catering&category=crew-meals",
    image: "/img/services/catering/03-crew.webp",
    alt: "Freshly packaged cockpit and cabin crew meals for long-range sectors",
    isConfirmed: true,
  },
  {
    id: "vip-charter-catering",
    name: "VIP and charter catering",
    summary: "Tailored cabin service for executive and charter flights.",
    href: "/request-flight-support?service=inflight-catering&category=vip-charter-catering",
    image: "/img/services/catering/04-vip.webp",
    alt: "Executive cabin dining and tailored catering service for charter aircraft",
    isConfirmed: true,
  },
  {
    id: "bulk-catering",
    name: "Bulk catering",
    summary: "Large meal orders for events and institutions.",
    href: "/request-flight-support?service=inflight-catering&category=bulk-catering",
    image: "/img/services/catering/05-bulk.webp",
    alt: "Institutional bulk catering trays and high-volume aircraft provisioning",
    // Marked {{CONFIRM}} - stays hidden until verified by KCL
    isConfirmed: false,
  },
];

// Helper to get only confirmed catering services (no {{...}} ever renders)
export const CONFIRMED_CATERING_SERVICES = CATERING_SERVICES.filter(
  (s) => s.isConfirmed !== false
);

// 8 Approved FAQs
export const CATERING_FAQS: CateringFaq[] = [
  {
    question: "What does inflight catering coordination include?",
    answer:
      "We coordinate passenger and crew meals, special dietary requirements, crew catering for long sectors, and VIP or charter cabin dining through approved catering partners at the airport.",
  },
  {
    question: "Who prepares the food?",
    answer:
      "The catering provider at the airport. KCL arranges it and keeps you updated.",
  },
  {
    question: "What do I need to send?",
    answer:
      "Flight date, airport ICAO code, UTC departure time, aircraft type and registration, passenger and crew meal counts, menu preferences or dietary and allergy needs, and your operations contact.",
  },
  {
    question: "Can you arrange special dietary meals?",
    answer:
      "Depending on the provider; send details early so the station caterer can confirm kitchen preparation and ingredient availability.",
  },
  {
    question: "What if the passenger count or departure time changes?",
    answer:
      "Tell us as soon as you can so the provider can reassess kitchen preparation schedules and delivery timelines.",
  },
  {
    question: "Can catering be combined with handling and fuel?",
    answer:
      "Yes, on one request through our 24/7 operations desk.",
  },
  {
    question: "Do you cater crew-only flights such as cargo?",
    answer:
      "Yes. We coordinate balanced crew meals for cargo, ferry, and technical transit flights.",
  },
  {
    question: "Can you arrange catering at short notice?",
    answer:
      "Our desk works 24/7 and will confirm what the provider can support based on station lead times and galley uplift cut-offs.",
  },
];

// Flights We Support
export const CATERING_FLIGHTS_SUPPORTED: CateringFlightType[] = [
  {
    id: "airline",
    title: "Commercial airlines",
    description:
      "Scheduled and ad-hoc airline turnarounds, with passenger and crew meal provisioning coordinated directly with airport caterers.",
    flightTypeParam: "airline",
  },
  {
    id: "charter-vip",
    title: "Charter and VIP",
    description:
      "Tailored executive dining and custom cabin arrangements for business aviation, private charters and government delegations.",
    flightTypeParam: "charter",
  },
  {
    id: "cargo-ferry",
    title: "Cargo and ferry crews",
    description:
      "Nutritious crew meals and galley provisions for freighter sectors, positioning flights and technical stops.",
    flightTypeParam: "cargo",
  },
  {
    id: "operations-teams",
    title: "Operations teams",
    description:
      "Consolidate inflight catering, airport ground handling, aviation fuel and crew hotels under a single operations channel.",
    flightTypeParam: "ops",
  },
];

// Related Services (One Request, the Whole Stop)
export const CATERING_RELATED_SERVICES: CateringRelatedService[] = [
  {
    title: "Ground Handling",
    description:
      "Ramp coordination, aircraft towing, passenger boarding, and baggage services arranged through licensed airport handlers.",
    href: "/services/ground-handling",
    tag: "Apron & Ramp",
    image: "/img/services/02-ground.webp",
    alt: "Airport ramp turnaround and aircraft ground handling",
  },
  {
    title: "Crew Hotels and Transport",
    description:
      "Comfortable hotel accommodation and airside-to-hotel crew transfers scheduled around your rest requirements.",
    href: "/services/crew-logistics",
    tag: "Crew Logistics",
    image: "/img/services/05-crew.webp",
    alt: "Flight crew layover accommodation and ground transport",
  },
  {
    title: "Aviation Fuel",
    description:
      "Jet A-1 fuel uplift coordination scheduled to meet your turnaround window at airports worldwide.",
    href: "/services/aviation-fuel",
    tag: "Fuelling",
    image: "/img/services/04-fuel.webp",
    alt: "Aviation refueling tanker and into-plane fueling coordination",
  },
  {
    title: "Landing & Overflight Permits",
    description:
      "Civil aviation flight clearances and landing permissions secured directly with civil aviation authorities.",
    href: "/services/flight-permissions",
    tag: "Clearances",
    image: "/img/services/01-permits.webp",
    alt: "Civil aviation authority flight permit and airway clearance coordination",
  },
];


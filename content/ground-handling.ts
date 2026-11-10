export interface GroundHandlingFaq {
  question: string;
  answer: string;
}

export interface GroundHandlingServiceItem {
  id: string;
  name: string;
  summary: string;
  href: string;
  image: string;
  alt: string;
}

export const GROUND_HANDLING_SERVICES: GroundHandlingServiceItem[] = [
  {
    id: "aircraft-handling",
    name: "Aircraft handling",
    summary: "Parking, towing, GPU, ACU, marshalling and ramp support.",
    href: "/request-flight-support?service=ground-handling&type=aircraft-handling",
    image: "/img/services/ground/01-aircraft.webp",
    alt: "Aircraft marshalling, ground power unit (GPU), and ramp support equipment on the airport apron",
  },
  {
    id: "passenger-handling",
    name: "Passenger handling",
    summary: "Check-in, boarding coordination, transfers and special assistance.",
    href: "/request-flight-support?service=ground-handling&type=passenger-handling",
    image: "/img/services/ground/02-passenger.webp",
    alt: "Passenger boarding stairs and terminal turnaround coordination",
  },
  {
    id: "baggage-handling",
    name: "Baggage handling",
    summary: "Loading, unloading, transfer and reconciliation support.",
    href: "/request-flight-support?service=ground-handling&type=baggage-handling",
    image: "/img/services/ground/03-baggage.webp",
    alt: "Ramp baggage belt loader and hold container handling",
  },
  {
    id: "cargo-handling",
    name: "Cargo handling",
    summary: "Loading, offloading and documentation compliance.",
    href: "/request-flight-support?service=ground-handling&type=cargo-handling",
    image: "/img/services/ground/04-cargo.webp",
    alt: "Main-deck freighter cargo loading and pallet handling on the tarmac",
  },
  {
    id: "fuelling-coordination",
    name: "Fuelling coordination",
    summary: "Fuel uplift arranged with trusted suppliers and handlers.",
    href: "/services/aviation-fuel",
    image: "/img/services/ground/05-fuelling.webp",
    alt: "Aviation fuel hydrant dispenser and into-plane refueling truck on airport ramp",
  },
  {
    id: "turnaround-management",
    name: "Turnaround management",
    summary: "Complete turnaround coordination and monitoring for safe, on-time departures.",
    href: "/request-flight-support?service=ground-handling&type=turnaround-management",
    image: "/img/services/ground/06-turnaround.webp",
    alt: "Turnaround management supervision and flight departure monitoring on airport apron",
  },
];

export const GROUND_HANDLING_FAQS: GroundHandlingFaq[] = [
  {
    question: "What does ground handling coordination include?",
    answer:
      "Aircraft handling, passenger, baggage and cargo handling, fuelling coordination and turnaround management, depending on the airport.",
  },
  {
    question: "Do you handle the aircraft yourselves?",
    answer:
      "Handling is carried out by licensed handling companies at each airport. KCL arranges it and keeps you updated.",
  },
  {
    question: "Is every service available at every airport?",
    answer:
      "No. It depends on airport procedures, providers and equipment.",
  },
  {
    question: "What do I need to send?",
    answer:
      "Aircraft registration and type, airport, UTC arrival and departure times, services needed and your contact details.",
  },
  {
    question: "Can you arrange handling at short notice?",
    answer:
      "Our desk works 24/7 and will confirm what the airport and providers can support.",
  },
  {
    question: "Can I request handling together with a landing permit and fuel?",
    answer:
      "Yes, on the same request.",
  },
  {
    question: "Do you support cargo and freighter flights?",
    answer:
      "Yes, including loading, offloading and documentation coordination.",
  },
  {
    question: "Can you also arrange crew hotels and transport?",
    answer:
      "Yes. See Crew Hotels and Transport.",
  },
];

export const GROUND_HANDLING_FLIGHTS_SUPPORTED = [
  {
    title: "Commercial Airlines",
    subtitle: "Station turnarounds",
    description:
      "Scheduled transit and turnaround arrangements, baggage reconciliation, ramp servicing, and local handler coordination across your regional network.",
  },
  {
    title: "Charter & Business Aviation",
    subtitle: "Traffic and technical stops",
    description:
      "Dedicated executive handling, quick-turn refueling stops, VIP passenger escort, and ramp marshalling for corporate and charter operations.",
  },
  {
    title: "Cargo Carriers",
    subtitle: "Freighter ramp and load support",
    description:
      "Main-deck loading, cargo offload, dangerous goods documentation checks, pallet build-up, and apron logistics for scheduled and ad-hoc freighters.",
  },
  {
    title: "Operations Teams",
    subtitle: "Combining landing permits with handling",
    description:
      "Synchronized coordination linking civil aviation landing numbers with ramp parking slots, local handling confirmation, and fuel vouchers on one file.",
  },
];

export const GROUND_HANDLING_RELATED_SERVICES = [
  {
    title: "Landing & Overflight Permits",
    href: "/services/flight-permissions",
    description: "Civil aviation approvals coordinated alongside your airport ramp slots and handling arrangements.",
  },
  {
    title: "Aviation Fuel",
    href: "/services/aviation-fuel",
    description: "Jet A1, TS1 and Avgas supply vouchers scheduled to meet your aircraft turnaround window.",
  },
  {
    title: "Crew Hotels & Transport",
    href: "/services/crew-logistics",
    description: "Airport-proximity layover accommodations and dedicated airside-to-hotel crew transfers.",
  },
  {
    title: "Inflight Catering",
    href: "/services/inflight-catering",
    description: "Hygienic galley meal provisioning, passenger menus, and timely ramp delivery.",
  },
  {
    title: "Airport Slot Coordination",
    href: "/services/airport-slot-coordination",
    description: "Runway arrival and departure slots matched with handling agent parking availability.",
  },
];


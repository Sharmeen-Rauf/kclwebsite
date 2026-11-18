export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What does international flight support include?",
    answer:
      "Depending on an operator's mission requirements, international flight support includes overflight and landing permit facilitation, ground handling coordination, aviation fuel supply, flight planning assistance, catering arrangements, and crew layover logistics.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We file flight permits in Pakistan. In Bahrain, Qatar, Kenya, the Central African Republic, Togo, Ghana and Mauritius we coordinate and follow up directly with the authority. Across the rest of Asia, the Middle East and Africa we work through partners. Elsewhere, tell us your route and we will advise and introduce a partner.",
  },
  {
    question: "Can multiple services be requested together?",
    answer:
      "Yes. Operators can submit complete route strings and required services (permits, handling, fuel, catering, and crew hotels) in a single inquiry so our team coordinates the entire operational scope concurrently.",
  },
  {
    question: "Who makes the final decision on an overflight or landing permission?",
    answer:
      "All regulatory approvals, route conditions, and operating windows remain under the sovereign authority of the destination state's civil aviation authorities and military liaison bodies. KCL ensures complete, error-free documentation packages and tracks filings through official channels.",
  },
  {
    question: "What documents are required to apply for a flight permit?",
    answer:
      "Standard requirements include the operator's Air Operator Certificate (AOC), Certificate of Airworthiness, Certificate of Registration, worldwide third-party liability insurance, noise certificate, complete UTC schedule, MTOW, and passenger/cargo declarations.",
  },
  {
    question: "How much lead time is typically required for permit clearance?",
    answer:
      "Lead times vary by jurisdiction and operation category. Share your route and planned UTC schedule, and we will confirm the applicable lead-time guidance for your request.",
  },
  {
    question: "What is the difference between an overflight and a landing permit?",
    answer:
      "An overflight permit authorizes an aircraft to enter, transit, and exit sovereign airspace and FIRs without landing. A landing permit authorizes a touchdown at a specific airport for commercial traffic, tech stops, or crew changes, requiring synchronized ramp handling and slot approvals.",
  },
  {
    question: "How does KCL handle short-notice charter or emergency flights?",
    answer:
      "Our 24/7 urgent escalation line receives urgent requests for medical evacuation (medevac), humanitarian relief, technical fuel stops, and short-notice business charter clearances with authority liaison.",
  },
];

export const INTERNATIONAL_PERMIT_FAQS: FaqItem[] = [
  {
    question: "What is an overflight permit?",
    answer:
      "An overflight permit is official sovereign authorization granted by a country's civil aviation authority allowing an aircraft to enter, transit, and exit its designated Flight Information Region (FIR) along published ATS airways without landing.",
  },
  {
    question: "What is a landing permit?",
    answer:
      "A landing permit is formal regulatory approval permitting an international aircraft to touch down at a specific aerodrome for commercial passenger or cargo operations, technical refueling stops, crew layovers, or maintenance turnarounds.",
  },
  {
    question: "What information is required?",
    answer:
      "Essential details include full aircraft registration, aircraft type and MTOW, registered operator information, callsign, complete route with entry and exit waypoints, flight schedule in UTC, purpose of flight, and valid certificates (AOC, airworthiness, registration, and worldwide insurance). Additional passenger, cargo, or diplomatic manifests are requested depending on the operation.",
  },
  {
    question: "How long does a permit take?",
    answer:
      "Processing times differ by country and by type of flight. We confirm planning lead times for your route once we have your itinerary. Our flight operations desk provides route-specific guidance when you share your schedule.",
  },
  {
    question: "Can short-notice requests be handled?",
    answer:
      "Yes. Our 24/7 urgent escalation line assists with urgent, ad-hoc, and short-notice clearances for medical evacuations, technical aircraft diversions, and last-minute charter rotations, working through authority channels where available.",
  },
  {
    question: "Can KCL support scheduled and non-scheduled flights?",
    answer:
      "Yes. KCL assists both scheduled commercial airlines with seasonal timetable filings and block permit series, as well as ad-hoc charter operators, cargo freighters, corporate flight departments, and private aircraft operators with single-trip clearances.",
  },
  {
    question: "What happens when flight details change?",
    answer:
      "If your schedule, aircraft registration, routing points, or crew details change, inform our team immediately. We prepare and submit official amendment notifications to the relevant civil aviation authorities to ensure your permit remains valid for departure.",
  },
  {
    question: "Can permit requests include ground handling and fuel?",
    answer:
      "Yes. KCL coordinates integrated flight support. You can combine overflight and landing permits with on-tarmac ground handling, Jet A-1 aviation fuel releases, airport slots, and crew hotel layovers within a single operational request.",
  },
];

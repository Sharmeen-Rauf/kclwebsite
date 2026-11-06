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
      "KCL coordinates overflight and landing permits, ground handling, fuel, and flight support worldwide across key international corridors in the Middle East, Europe, Asia, Africa, the Americas, and the Caribbean. Tell us your route and schedule, and our 24/7 operations desk will confirm the clearances and support available for your specific itinerary.",
  },
  {
    question: "Can multiple services be requested together?",
    answer:
      "Yes. Operators can submit complete route strings and required services (permits, handling, fuel, catering, and crew hotels) in a single inquiry so our 24/7 operations desk coordinates the entire operational scope concurrently.",
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
      "Lead times vary by jurisdiction and operation category. Standard overflight permits typically take 24 to 72 hours, while non-scheduled charter landings, diplomatic flights, or extra-section commercial schedules may require 4 to 7 working days.",
  },
  {
    question: "What is the difference between an overflight and a landing permit?",
    answer:
      "An overflight permit authorizes an aircraft to enter, transit, and exit sovereign airspace and FIRs without landing. A landing permit authorizes a touchdown at a specific airport for commercial traffic, tech stops, or crew changes, requiring synchronized ramp handling and slot approvals.",
  },
  {
    question: "How does KCL handle short-notice charter or emergency flights?",
    answer:
      "Our operations desk is staffed 24/7 to receive and prioritize urgent requests for medical evacuation (medevac), humanitarian relief, technical fuel stops, and urgent business charter clearances with expedited authority liaison.",
  },
];

export const INTERNATIONAL_PERMIT_FAQS: FaqItem[] = [
  {
    question: "What is an overflight permit?",
    answer:
      "Permission for an aircraft to cross a country's airspace without landing.",
  },
  {
    question: "What is a landing permit?",
    answer:
      "Approval to land at an airport in another country, for scheduled or non-scheduled flights.",
  },
  {
    question: "What is the difference between schedule and non-schedule flights?",
    answer:
      "Scheduled flights are regular, published services. Non-scheduled flights are one-off flights such as charter, cargo, VIP and ad-hoc flights.",
  },
  {
    question: "What do I need to send for a permit request?",
    answer:
      "The flight schedule, entry and exit points with ATS route, crew details, aircraft documents and operator contact details. Our desk confirms the exact list for your route.",
  },
  {
    question: "What is a block permit?",
    answer:
      "One authorisation covering several flights, useful for regular or seasonal operations.",
  },
  {
    question: "What is PPR?",
    answer:
      "Prior Permission Required: approval from an airport before you arrive.",
  },
  {
    question: "Can you handle urgent or diverted flights?",
    answer:
      "Yes. Our desk works 24/7 on short-notice, diverted and ad-hoc flights.",
  },
  {
    question: "How early should I apply?",
    answer:
      "Send your request as early as you can. Lead times differ by country, and we confirm them for your route.",
  },
  {
    question: "Who gives the final approval?",
    answer:
      "The civil aviation authority of each country. KCL prepares and follows up your request.",
  },
  {
    question: "Can you also arrange handling, fuel and hotels?",
    answer:
      "Yes, on the same request.",
  },
];

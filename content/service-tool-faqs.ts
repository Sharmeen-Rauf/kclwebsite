import type { FaqItem } from "@/content/faqs";

export const SERVICE_TOOL_FAQS: Record<string, FaqItem[]> = {
  "aviation-fuel": [
    {
      question: "What is the difference between Jet A and Jet A-1?",
      answer:
        "Jet A is mainly used in the United States and has a freezing point limit of minus 40°C; Jet A-1 is the international standard at minus 47°C. Availability depends on the airport.",
    },
    {
      question: "How do I convert litres to kilograms of jet fuel?",
      answer:
        "Multiply litres by the fuel density, about 0.80 kg per litre for Jet A-1; use the supplier's figure for the actual uplift.",
    },
  ],
  "crew-logistics": [
    {
      question: "Can I book hotels for an early-morning departure?",
      answer:
        "Yes. Send the pick-up time and we will coordinate hotel and transfer timing.",
    },
    {
      question: "What if our departure time changes?",
      answer:
        "Tell us as soon as you can so the hotel and transport can be updated.",
    },
  ],
  "operations-support": [
    {
      question: "How do I report a change to an existing request?",
      answer:
        "Send your inquiry reference, what changed and the new details to ops@kclpk.org or call the desk.",
    },
    {
      question: "Can one change affect several services?",
      answer:
        "Yes. A change in time, route or aircraft can affect permits, handling, fuel, catering and crew arrangements. We review them together.",
    },
  ],
  "flight-planning-dispatch": [
    {
      question: "What is an ICAO flight plan?",
      answer:
        "A standard form that tells air traffic services about your flight: aircraft, route, times and equipment.",
    },
    {
      question: "Who files the flight plan?",
      answer:
        "The operator is responsible for it. KCL can coordinate the filing support you request.",
    },
  ],
  "airport-slot-coordination": [
    {
      question: "Is an airport slot the same as a flight permit?",
      answer:
        "No. A flight permit is a regulatory approval from the authority. A slot is a time window at an airport. A flight may need both.",
    },
    {
      question: "Do all airports need slots?",
      answer:
        "No. Only coordinated airports need slots. Many airports do not.",
    },
  ],
  "permit-directory": [
    {
      question: "Which countries do you cover?",
      answer:
        "Tell us your route and we confirm what we can arrange. Pakistan has a full guide, and more country guides are added on request.",
    },
    {
      question: "Can I request a guide for my route?",
      answer: "Yes. Choose your country above and we will follow up.",
    },
  ],
  "overflight-permits": [
    {
      question: "Why does the UTC date matter for an overflight permit?",
      answer:
        "Authorities work in UTC dates. A flight that crosses midnight UTC may enter a country on a different date than it departed.",
    },
    {
      question: "Should I send entry and exit times?",
      answer:
        "Yes, when you have them. They help us check the dates and the route.",
    },
  ],
  "landing-permits": [
    {
      question: "What is a technical stop?",
      answer:
        "A landing where no passengers or cargo are embarked or disembarked, usually for fuel, crew or operational reasons.",
    },
    {
      question: "Do I need a landing permit for a technical stop?",
      answer:
        "It depends on the country and the aircraft. Send us your route and we confirm what applies.",
    },
  ],
  "schedule-filing": [
    {
      question: "When do the IATA seasons start and end?",
      answer:
        "Summer runs from the last Sunday of March to the last Saturday of October. Winter runs from the last Sunday of October to the last Saturday of March.",
    },
    {
      question: "What happens if a certificate expires mid-season?",
      answer:
        "The aircraft may be held back until updated documents are accepted, so check your fleet before you file.",
    },
  ],
  "non-schedule-filing": [
    {
      question: "What information do you need first for a charter flight?",
      answer:
        "Aircraft registration and type, operator, route, dates and times in UTC, purpose of flight and passenger or cargo details.",
    },
    {
      question: "Can you help with a flight at short notice?",
      answer:
        "Our desk works 24/7 and will confirm what the authorities and providers can support.",
    },
  ],
  "pakistan-atlas": [
    {
      question: "Which airports in Pakistan do you support?",
      answer:
        "Tell us your airport and we confirm what we can arrange; the atlas lists the main airports.",
    },
    {
      question: "Do I need a different permit for each airport?",
      answer:
        "It depends on the type of flight and route. Send us your itinerary and we confirm what applies.",
    },
  ],
};


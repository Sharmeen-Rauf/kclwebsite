export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What does international flight support include?",
    answer:
      "Depending on an operator’s requirements, support may include permit coordination, airport services, fuel arrangements, flight planning assistance and crew logistics.",
  },
  {
    question: "Can KCL assist with flight permits in Pakistan?",
    answer:
      "KCL’s existing website identifies scheduled and non-scheduled flight permission facilitation as a core service. Specific authorizations remain subject to the applicable authority.",
  },
  {
    question: "Can multiple services be requested together?",
    answer:
      "Yes. Provide the complete itinerary and required services in one inquiry so the coordination scope can be reviewed.",
  },
  {
    question: "Who makes the final decision on an overflight or landing permission?",
    answer:
      "All regulatory approvals, operating conditions, and airport slot allocations remain with the responsible civil aviation authorities and airport coordinators. KCL assists with information preparation and coordination through applicable channels.",
  },
];

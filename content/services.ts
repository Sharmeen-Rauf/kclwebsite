export interface ServiceDefinition {
  slug: string;
  canonicalPath?: string;
  category:
    | "Permissions & Trip Support"
    | "Airport & Aircraft Services"
    | "Planning, Dispatch & Slots"
    | "Crew & Operations"
    | "Pakistan Specialization";
  title: string; // SEO title (< 60 chars including " | KCL")
  metaDescription: string; // < 155 chars
  shortTitle: string;
  code: string;
  primaryKeyword: string;
  h1: string;
  heroHeadline: string;
  introParagraph: string;
  heroCtaLabel: string;
  whatItIsHeading: string;
  whatItIs: string[];
  whoItIsFor: string[];
  whyItMattersHeading: string;
  whyItMatters: string[];
  sectionH2WithKeyword: string;
  whatWeHandle: Array<{ title: string; detail: string }>;
  whatYouSendUs: string[];
  authorityDependenciesHeading: string;
  authorityDependencies: string[];
  typicalLeadTimePlaceholder: string;
  howItWorksHeading: string;
  howItWorks: Array<{ step: string; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedServiceSlugs: string[];
  relatedToolPath: { label: string; href: string };
  relatedNewsSlug: { label: string; href: string };
  presetPermitType?: "overflight" | "landing" | "both";
  hideFinalCta?: boolean;
  finalCtaHeading: string;
  finalCtaSubheading: string;
  finalCtaLabel: string;
}

export const SERVICES_DATA: ServiceDefinition[] = [
  // 04 / INTERNATIONAL FLIGHT SUPPORT
  {
    slug: "international-flight-support",
    category: "Permissions & Trip Support",
    title: "International Flight & Trip Support Services | KCL",
    metaDescription:
      "Flight support coordination for airlines, cargo, private and charter operators, from flight permissions to ground and crew arrangements.",
    shortTitle: "International Flight Support",
    code: "SVC-INT-01",
    primaryKeyword: "international trip support services",
    h1: "International Flight & Trip Support Services",
    heroHeadline: "International Flight Support Built Around the Itinerary.",
    introParagraph:
      "International flight planning connects airspace, airports, suppliers, schedules and operations teams. KCL assists operators in coordinating relevant service requirements across these connected activities, using the operational details of each mission as the starting point.",
    heroCtaLabel: "Request Trip Support",
    whatItIsHeading: "One Itinerary, Multiple Operational Dependencies",
    whatItIs: [
      "Overflight permissions, landing requirements, handling arrangements and crew schedules can influence one another. A change to a planned operation may require updated communication with multiple parties.",
      "Our coordination process begins with understanding the route, schedule, aircraft details and purpose of operation before identifying the services and documentation relevant to the request.",
    ],
    whoItIsFor: [
      "Commercial airlines managing international sectors or ad-hoc route adjustments",
      "Charter and private aviation operators coordinating multi-leg itineraries",
      "All-cargo carriers requiring synchronized permissions, handling, and fuel arrangements",
      "Flight operations departments seeking a structured single point of inquiry",
    ],
    whyItMattersHeading: "Why Connected Trip Coordination Reduces Friction",
    whyItMatters: [
      "When permissions, ground handling, airport slots, and crew logistics are arranged in isolation, a single schedule revision can create misalignments across local providers.",
      "Reviewing the full itinerary in one operational conversation helps identify dependencies early and keeps communication organized when timings change.",
    ],
    sectionH2WithKeyword: "Service Coordination Across the Trip Lifecycle",
    whatWeHandle: [
      {
        title: "Flight Permission Inquiries",
        detail:
          "Assisting with overflight and landing permission preparation and submission through applicable channels.",
      },
      {
        title: "Ground Handling & Fuel Arrangements",
        detail:
          "Communicating turnaround, ramp, catering, and refueling requirements with relevant airport providers.",
      },
      {
        title: "Planning, Dispatch & Slot Inquiries",
        detail:
          "Supporting flight planning coordination, dispatch-related communication, and airport slot inquiries where applicable to the itinerary.",
      },
      {
        title: "Crew Hotel & Transport Logistics",
        detail:
          "Coordinating practical layover accommodation and local ground transfers around planned schedules.",
      },
    ],
    whatYouSendUs: [
      "Operator information and operational contact details",
      "Aircraft registration and type, plus callsign if relevant",
      "Route and intended airports (ICAO codes)",
      "Planned UTC dates and times",
      "Purpose of flight and required services",
      "Any existing operational or application references",
    ],
    authorityDependenciesHeading:
      "Operating Regions & Regulatory / Provider Governance",
    authorityDependencies: [
      "KCL's company LinkedIn profile describes services across multiple global regions. Specific country coverage, provider arrangements, and operational capabilities are subject to management validation per itinerary.",
      "All overflight and landing approvals remain with the competent civil aviation authorities.",
      "Airport services, slots, fuel, catering, and hotel arrangements depend on local airport procedures and provider availability.",
    ],
    typicalLeadTimePlaceholder: "Varies by authority, airport & operation type",
    howItWorksHeading: "How International Trip Coordination Works",
    howItWorks: [
      {
        step: "01",
        title: "Share the Operation",
        description:
          "Send the route, aircraft registration/type, intended UTC schedule, flight purpose, and requested services.",
      },
      {
        step: "02",
        title: "Clarify the Scope",
        description:
          "Relevant documentation, regulatory steps, and station service requirements are reviewed with your team.",
      },
      {
        step: "03",
        title: "Coordinate the Parties",
        description:
          "Assistance with permissions and provider arrangements proceeds through applicable channels, with status and outstanding items shared as available.",
      },
    ],
    faqs: [
      {
        question: "Can services for more than one airport be discussed together?",
        answer:
          "Yes. Provide the complete planned itinerary and highlight each location where arrangements may be needed.",
      },
      {
        question: "Are all services available at every airport?",
        answer:
          "No. Availability and procedures vary by airport, provider, and type of operation.",
      },
      {
        question: "Does KCL assist with Pakistan airspace and airports as well?",
        answer:
          "Yes. KCL has an established specialization in Pakistan flight permission facilitation alongside its broader international flight support positioning.",
      },
    ],
    relatedServiceSlugs: [
      "overflight-permits",
      "landing-permits",
      "ground-handling",
    ],
    relatedToolPath: {
      label: "Aviation Resources & Checklists",
      href: "/aviation-resources",
    },
    relatedNewsSlug: {
      label: "What to Send With a Flight Support Request",
      href: "/news/what-to-send-with-a-permit-request",
    },
    presetPermitType: "both",
    finalCtaHeading: "Make Your Next International Movement Easier to Coordinate.",
    finalCtaSubheading:
      "Share your route, aircraft details, and requested services to begin a coordinated trip support inquiry.",
    finalCtaLabel: "Request Trip Support",
  },

  // 05 / OVERFLIGHT PERMITS
  {
    slug: "overflight-permits",
    category: "Permissions & Trip Support",
    title: "Overflight Permit Coordination & Assistance | KCL",
    metaDescription:
      "Explore overflight permit assistance for international aircraft operations, including route details, documentation and coordination requirements.",
    shortTitle: "Overflight Permits",
    code: "SVC-OVF-02",
    primaryKeyword: "overflight permit coordination",
    h1: "Overflight Permit Coordination & Assistance",
    heroHeadline: "Flight Permits, Without Unnecessary Complexity.",
    introParagraph:
      "Overflight permits, landing permits, Prior Permission Required (PPR) coordination, block permits and short-notice clearances with 24/7 support. KCL assists aviation teams in organizing relevant flight details and coordinating permission-related requests under applicable civil aviation procedures.",
    heroCtaLabel: "Discuss an Overflight Request",
    whatItIsHeading: "What Overflight Permission Coordination Covers",
    whatItIs: [
      "Overflight permission is an authorization relevant to some flights passing through a state's airspace without landing. Whether it is required depends on the route, aircraft, operation and current rules.",
      "For an operation crossing Pakistan's airspace specifically, see our dedicated Pakistan Flight Permissions page for locally focused guidance and inquiry support.",
    ],
    whoItIsFor: [
      "Scheduled commercial airlines planning or amending international routes",
      "Charter and private aviation operators transiting foreign Flight Information Regions",
      "Cargo carriers and aircraft ferry/delivery crews",
      "Flight dispatch teams managing route or schedule revisions",
    ],
    whyItMattersHeading: "When Plans Change Across Connected Airspace",
    whyItMatters: [
      "Routing, schedule, or aircraft registration changes can affect earlier submissions and require timely re-communication.",
      "Notifying the coordination team early allows the revised itinerary to be considered against applicable airspace requirements.",
    ],
    sectionH2WithKeyword: "How KCL Supports Overflight Permit Coordination",
    whatWeHandle: [
      {
        title: "Information & Route Preparation",
        detail:
          "Helping dispatch teams organize operator details, aircraft data, and planned route information required for submission.",
      },
      {
        title: "Channel Coordination & Follow-Up",
        detail:
          "Communicating permission inquiries through appropriate channels and reporting relevant requests for additional details.",
      },
      {
        title: "Itinerary & Aircraft Amendments",
        detail:
          "Assisting with updates when planned schedules, routes, or tail numbers change after an initial request.",
      },
      {
        title: "Pakistan Airspace Specialization",
        detail:
          "Providing dedicated local facilitation for operations crossing Pakistan's Karachi (OPKR) and Lahore (OPLR) FIRs.",
      },
    ],
    whatYouSendUs: [
      "Aircraft registration and type",
      "Callsign where applicable",
      "Operator details and operational contact information",
      "Complete itinerary and planned route details",
      "Planned UTC dates and times",
      "Purpose of operation (additional documentation requirements vary by jurisdiction)",
    ],
    authorityDependenciesHeading: "Regulatory Authority & Processing Expectations",
    authorityDependencies: [
      "Our role is to assist in preparing information, communicating with appropriate parties, and reporting relevant requests for additional details.",
      "Regulatory decisions, route conditions, and permit issuance remain solely with the competent civil aviation authorities.",
      "Processing expectations depend on the authority and operation; no universal lead time is promised.",
    ],
    typicalLeadTimePlaceholder: "Depends on authority & operation classification",
    howItWorksHeading: "Overflight Inquiry & Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Share Route & Aircraft Details",
        description:
          "Provide your planned itinerary, UTC timings, aircraft registration/type, callsign, and flight purpose.",
      },
      {
        step: "02",
        title: "Review Documentation Scope",
        description:
          "KCL reviews the provided information and identifies any additional operator or aircraft details needed.",
      },
      {
        step: "03",
        title: "Coordinate & Communicate Status",
        description:
          "Requests proceed through applicable channels, and status updates or revision requirements are shared as available.",
      },
    ],
    faqs: [
      {
        question: "Does every route need an overflight permit?",
        answer:
          "No. Requirements depend on the route, flight classification, and applicable rules of each state.",
      },
      {
        question: "How soon should an operator apply?",
        answer:
          "Processing expectations depend on the authority and operation; no universal lead time should be promised.",
      },
      {
        question: "Does KCL issue permits?",
        answer:
          "No. The responsible civil aviation authority makes all authorization decisions.",
      },
    ],
    relatedServiceSlugs: [
      "landing-permits",
      "overflight-permit-pakistan",
      "flight-planning-dispatch",
    ],
    relatedToolPath: {
      label: "Aircraft Registration Prefixes",
      href: "/tools/aircraft-registration-prefixes",
    },
    relatedNewsSlug: {
      label: "What Is a Flight Permission Agent?",
      href: "/news/what-is-a-flight-permission-agent",
    },
    presetPermitType: "overflight",
    finalCtaHeading: "Share Your Route. Clarify Your Permission Requirements.",
    finalCtaSubheading:
      "Send your planned itinerary, aircraft details, and UTC schedule to discuss overflight permission coordination.",
    finalCtaLabel: "Discuss an Overflight Request",
  },

  // 06 / LANDING PERMITS
  {
    slug: "landing-permits",
    category: "Permissions & Trip Support",
    title: "Aircraft Landing Permit Assistance | KCL",
    metaDescription:
      "Landing permit coordination for scheduled, charter, private and cargo operations, with connected airport service support.",
    shortTitle: "Landing Permits",
    code: "SVC-LND-03",
    primaryKeyword: "landing permit assistance",
    h1: "Aircraft Landing Permit Assistance",
    heroHeadline: "Plan the Arrival with the Permission in Mind.",
    introParagraph:
      "A planned aircraft arrival brings together approval requirements, airport information and ground-side coordination. KCL helps operators prepare landing permission inquiries and identify relevant operational dependencies.",
    heroCtaLabel: "Request Landing Assistance",
    whatItIsHeading: "Different Flights, Different Arrival Considerations",
    whatItIs: [
      "Commercial, charter, cargo and business aviation movements may involve block permits, Prior Permission Required (PPR) coordination, and short-notice clearances. The operating context and destination rules shape the information required.",
      "Landing permission, airport slots, and ground service arrangements are distinct processes. One does not automatically replace the other.",
    ],
    whoItIsFor: [
      "Charter and business aviation operators planning commercial or private arrivals",
      "Cargo operators coordinating freighter landings or technical stops",
      "Scheduled airlines reviewing arrival permission requirements",
      "Flight operations teams aligning landing inquiries with ground handling and fuel",
    ],
    whyItMattersHeading: "Connecting Landing Inquiries with Airport Slots & Ground Support",
    whyItMatters: [
      "Because landing permissions, airport slot allocations, and ground handling are administered through separate processes, early coordination helps avoid gaps between airside approval and station readiness.",
      "Ground handling, fuel, catering, and crew arrangements may need advance coordination alongside a planned landing.",
    ],
    sectionH2WithKeyword: "How KCL Assists with Aircraft Landing Permit Inquiries",
    whatWeHandle: [
      {
        title: "Arrival Permission Preparation",
        detail:
          "Organizing origin/destination details, aircraft particulars, flight purpose, and passenger/cargo context for landing inquiries.",
      },
      {
        title: "Airport Slot & Dependency Identification",
        detail:
          "Helping operators distinguish between landing permission requirements and separate airport slot or prior-permission (PPR) procedures.",
      },
      {
        title: "Connected Ground & Fuel Coordination",
        detail:
          "Reviewing ground handling, aviation fuel, catering, and crew logistics alongside the planned arrival.",
      },
      {
        title: "Schedule & Aircraft Update Communication",
        detail:
          "Assisting with revised arrival/departure timings or aircraft changes when operational plans shift.",
      },
    ],
    whatYouSendUs: [
      "Origin and destination airports (ICAO codes)",
      "Aircraft registration and type",
      "Operator name and operational contact details",
      "Flight purpose (scheduled, passenger charter, cargo, private, or technical stop)",
      "Estimated UTC arrival and departure times",
      "Passenger or cargo context if relevant, plus ground services required",
    ],
    authorityDependenciesHeading: "Approval Responsibility & Airport Stakeholders",
    authorityDependencies: [
      "All landing authorizations, traffic rights, and operating restrictions are determined by the appropriate civil aviation authorities and relevant airport stakeholders.",
      "Airport slots and ground handling availability are governed by separate airport coordinators and service providers.",
      "KCL coordinates the inquiry and related service communication on the operator's behalf.",
    ],
    typicalLeadTimePlaceholder: "Varies by destination authority & flight purpose",
    howItWorksHeading: "Landing Permission & Arrival Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Share Arrival Details & Purpose",
        description:
          "Provide origin, destination, UTC arrival/departure times, aircraft details, flight purpose, and requested station services.",
      },
      {
        step: "02",
        title: "Clarify Permission, Slot & Handling Scope",
        description:
          "We review the applicable permission requirements alongside any slot or ground support considerations.",
      },
      {
        step: "03",
        title: "Coordinate Submissions & Station Services",
        description:
          "Inquiries proceed through the relevant channels, with updates communicated to your operations team.",
      },
    ],
    faqs: [
      {
        question: "Is an airport slot the same as a landing permit?",
        answer:
          "No. They may be separate requirements administered through different processes and stakeholders.",
      },
      {
        question: "Can handling and fuel be requested in the same inquiry?",
        answer:
          "Yes. Describe each requested service so availability and coordination requirements can be assessed together.",
      },
      {
        question: "Where can we find guidance specific to landing in Pakistan?",
        answer:
          "Visit our Pakistan Flight Permissions page or our dedicated Pakistan Landing Permit page for locally relevant guidance.",
      },
    ],
    relatedServiceSlugs: [
      "airport-slot-coordination",
      "ground-handling",
      "aviation-fuel",
    ],
    relatedToolPath: {
      label: "UTC / PKT Time Converter",
      href: "/tools/utc-time-converter",
    },
    relatedNewsSlug: {
      label: "Schedule vs Non-Schedule Filing Explained",
      href: "/news/schedule-vs-non-schedule-filing-explained",
    },
    presetPermitType: "landing",
    finalCtaHeading: "Coordinate the Details Behind Your Arrival.",
    finalCtaSubheading:
      "Send your intended destination, UTC schedule, aircraft details, and required airport services to begin landing coordination.",
    finalCtaLabel: "Request Landing Assistance",
  },

  // 08 / SCHEDULED FLIGHTS
  {
    slug: "scheduled-flights",
    category: "Permissions & Trip Support",
    title: "Scheduled Flight Permission Coordination | KCL",
    metaDescription:
      "Operational support for scheduled flight permission applications, schedule information and relevant coordination for commercial airline operations.",
    shortTitle: "Scheduled Flight Support",
    code: "SVC-SCH-04",
    primaryKeyword: "scheduled airline flight permission support",
    h1: "Scheduled Flight Permission Coordination",
    heroHeadline: "Consistency Matters Across Every Scheduled Operation.",
    introParagraph:
      "Recurring airline services rely on accurate schedules, clear documentation and coordination with the relevant aviation authorities. KCL assists operators in organizing flight permission requirements and related information for planned scheduled movements.",
    heroCtaLabel: "Discuss Scheduled Operations",
    whatItIsHeading: "Schedule-Based Permission & Operational Coordination",
    whatItIs: [
      "Relevant information for scheduled operations may include proposed flight numbers, aircraft details, routes, operating periods and schedule changes, depending on the applicable regulatory process.",
      "Scheduled services may also involve ground handling, aviation fuel, catering, and airline crew logistics, each requiring its own station arrangements.",
    ],
    whoItIsFor: [
      "Commercial passenger airlines planning seasonal or recurring operations",
      "Scheduled all-cargo carriers managing regular freight corridors",
      "Airline network planning and regulatory affairs teams",
      "Operations control centers coordinating schedule amendments",
    ],
    whyItMattersHeading: "Managing Schedule Changes and Amendments Early",
    whyItMatters: [
      "Updates to a planned operating schedule—such as timing adjustments, aircraft changes, or frequency revisions—may require clarification or further coordination with authorities and airport stakeholders.",
      "Communicating amendments early helps keep permission files and station arrangements aligned with the active timetable.",
    ],
    sectionH2WithKeyword:
      "What KCL Coordinates for Scheduled Airline Operations",
    whatWeHandle: [
      {
        title: "Schedule & Route Package Organization",
        detail:
          "Assisting airlines in organizing proposed flight numbers, operating periods, route details, and fleet documentation.",
      },
      {
        title: "Timetable & Fleet Amendment Support",
        detail:
          "Coordinating updates when operating schedules, aircraft registrations, or routing details change.",
      },
      {
        title: "Connected Station Arrangements",
        detail:
          "Discussing ground handling, fuel, catering, and crew logistics requirements that accompany scheduled stops.",
      },
      {
        title: "Pakistan Scheduled Filing Facilitation",
        detail:
          "Providing dedicated local assistance for commercial airlines filing scheduled operations involving Pakistan.",
      },
    ],
    whatYouSendUs: [
      "Operator details and designated operational contacts",
      "Schedule and route information (flight numbers, operating periods, UTC timings)",
      "Intended departure, arrival, or transit airports",
      "Aircraft data and fleet documentation",
      "Any existing application or authorization references",
    ],
    authorityDependenciesHeading:
      "Regulatory Approvals & Airline Responsibilities",
    authorityDependencies: [
      "All scheduled operating authorizations, traffic rights, and timetable approvals are decided by the competent civil aviation authorities.",
      "Airport slot allocations, handling, fuel, and crew services are subject to separate airport and provider procedures.",
      "KCL assists in organizing and coordinating submissions on the airline's behalf.",
    ],
    typicalLeadTimePlaceholder: "Subject to applicable seasonal / authority rules",
    howItWorksHeading: "Scheduled Operations Coordination Workflow",
    howItWorks: [
      {
        step: "01",
        title: "Provide Schedule & Fleet Information",
        description:
          "Share your proposed timetable, route information, intended airports, and aircraft data.",
      },
      {
        step: "02",
        title: "Review Requirements & Dependencies",
        description:
          "We clarify applicable documentation, permission steps, and any connected station services.",
      },
      {
        step: "03",
        title: "Coordinate Submissions & Amendments",
        description:
          "Applications and subsequent schedule updates proceed through the appropriate channels.",
      },
    ],
    faqs: [
      {
        question: "What information is needed to discuss scheduled flight permission support?",
        answer:
          "Provide operator details, proposed flight numbers, operating periods, routes, intended airports, aircraft data, and any existing application references.",
      },
      {
        question: "Can station services be discussed alongside scheduled permissions?",
        answer:
          "Yes. Scheduled operations involving landings can also discuss ground handling, fuel, catering, and crew logistics requirements.",
      },
      {
        question: "How should schedule amendments be handled?",
        answer:
          "Communicate any changes to timings, routes, or aircraft early so the affected coordination requirements can be reviewed under applicable procedures.",
      },
    ],
    relatedServiceSlugs: [
      "overflight-permits",
      "landing-permits",
      "airport-slot-coordination",
    ],
    relatedToolPath: {
      label: "UTC / PKT Time Converter",
      href: "/tools/utc-time-converter",
    },
    relatedNewsSlug: {
      label: "Scheduled vs Non-Scheduled Operations Explained",
      href: "/news/schedule-vs-non-schedule-filing-explained",
    },
    presetPermitType: "both",
    finalCtaHeading: "Keep the Permission Conversation Aligned with the Schedule.",
    finalCtaSubheading:
      "Share your proposed schedule, routes, and operational requirements with KCL.",
    finalCtaLabel: "Discuss Scheduled Operations",
  },

  // 09 / NON-SCHEDULED & CHARTER
  {
    slug: "non-scheduled-flights",
    category: "Permissions & Trip Support",
    title: "Charter & Non-Scheduled Flight Support | KCL",
    metaDescription:
      "Coordinate charter, private, business and other non-scheduled flight permission inquiries and related aviation services with KCL.",
    shortTitle: "Charter & Non-Scheduled",
    code: "SVC-NSC-05",
    primaryKeyword: "charter flight permission assistance",
    h1: "Charter & Non-Scheduled Flight Support",
    heroHeadline: "Flexible Missions Need Clear Operational Coordination.",
    introParagraph:
      "Charter and non-scheduled flights can vary in purpose, aircraft type, destination and timing. KCL helps operators discuss applicable permission requests and airport services based on the actual operation rather than a generic checklist.",
    heroCtaLabel: "Request Charter Flight Support",
    whatItIsHeading: "Support Tailored to the Specific Non-Scheduled Mission",
    whatItIs: [
      "Private and business aviation teams, charter operators and other eligible non-scheduled missions can discuss their proposed itineraries and requirements.",
      "Overflight and landing permission inquiries can be considered alongside ground handling, fuel, catering and crew arrangements as needed for the specific movement.",
    ],
    whoItIsFor: [
      "Commercial passenger and cargo charter operators",
      "Private and business aviation flight departments",
      "Aircraft ferry, delivery, and positioning flights",
      "Other eligible non-scheduled missions requiring trip and permission coordination",
    ],
    whyItMattersHeading: "Handling Schedule Changes Realistically",
    whyItMatters: [
      "Non-scheduled flights often experience adjustments to timing, payload, or routing as mission details firm up.",
      "Short-notice changes may alter documentation or service arrangements. Communicating updates promptly allows the coordination scope to be reassessed without relying on unverified timeline assumptions.",
    ],
    sectionH2WithKeyword:
      "Coordinating Charter Flight Permission Assistance & Station Support",
    whatWeHandle: [
      {
        title: "Mission-Specific Permission Inquiries",
        detail:
          "Reviewing overflight and landing permission requirements based on the actual route, aircraft, and flight purpose.",
      },
      {
        title: "Airport & Turnaround Coordination",
        detail:
          "Discussing ground handling, aviation fuel, and catering arrangements for technical stops or destination arrivals.",
      },
      {
        title: "Crew Hotel & Transport Arrangements",
        detail:
          "Coordinating layover accommodation and local ground transport matched to the charter schedule.",
      },
      {
        title: "Amendment & Revision Communication",
        detail:
          "Helping operators communicate revised UTC schedules, routing, or aircraft details when plans change.",
      },
    ],
    whatYouSendUs: [
      "Intended route and airports (origin, destination, and transit points)",
      "Aircraft registration and type",
      "Proposed UTC dates and times",
      "Operator information and operational contact details",
      "Purpose of the movement and requested airport/crew services",
    ],
    authorityDependenciesHeading:
      "Regulatory Approvals & Service Availability",
    authorityDependencies: [
      "All overflight and landing permissions are granted by the competent civil aviation authorities; no permit timeline or urgent approval guarantee is promised.",
      "Airport handling, slots, fuel, catering, and crew services depend on local provider availability and airport procedures.",
      "KCL coordinates the inquiry and service communication around your mission parameters.",
    ],
    typicalLeadTimePlaceholder: "Varies by authority, destination & mission purpose",
    howItWorksHeading: "Charter & Non-Scheduled Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Flight Details First",
        description:
          "Share your intended route, airports, aircraft registration/type, proposed UTC timings, operator information, and flight purpose.",
      },
      {
        step: "02",
        title: "Define Permission & Service Scope",
        description:
          "KCL reviews the applicable permission inquiries alongside any handling, fuel, catering, or crew requirements.",
      },
      {
        step: "03",
        title: "Coordinate Next Steps & Revisions",
        description:
          "Arrangements proceed through applicable channels, with updates shared as your itinerary develops.",
      },
    ],
    faqs: [
      {
        question: "Who can use KCL's charter and non-scheduled flight support?",
        answer:
          "Private and business aviation teams, commercial charter operators, cargo charters, and other eligible non-scheduled missions can discuss their proposed itineraries and requirements.",
      },
      {
        question: "Can permission inquiries and ground services be discussed together?",
        answer:
          "Yes. Overflight and landing permission inquiries can be considered alongside handling, fuel, catering, and crew arrangements in one conversation.",
      },
      {
        question: "Are urgent charter approvals guaranteed within a fixed number of hours?",
        answer:
          "No. Processing times and approvals depend on the relevant civil aviation authorities and operation details.",
      },
    ],
    relatedServiceSlugs: [
      "overflight-permits",
      "landing-permits",
      "ground-handling",
    ],
    relatedToolPath: {
      label: "Aviation Resources & Checklists",
      href: "/aviation-resources",
    },
    relatedNewsSlug: {
      label: "What to Send With a Permit Request",
      href: "/news/what-to-send-with-a-permit-request",
    },
    presetPermitType: "both",
    finalCtaHeading: "Share the Mission. We’ll Help Define the Next Steps.",
    finalCtaSubheading:
      "Send your proposed route, aircraft details, and UTC schedule to begin charter flight support coordination.",
    finalCtaLabel: "Request Charter Flight Support",
  },

  // 10 / GROUND HANDLING
  {
    slug: "ground-handling",
    category: "Airport & Aircraft Services",
    title: "Aircraft Ground Handling Coordination | KCL",
    metaDescription:
      "Explore airport ground handling coordination for commercial, charter and private aircraft, including turnaround and ground-side services.",
    shortTitle: "Ground Handling",
    code: "SVC-GND-06",
    primaryKeyword: "aircraft ground handling coordination",
    h1: "Aircraft Ground Handling Coordination",
    heroHeadline: "Ground Operations That Fit the Flight Plan.",
    introParagraph:
      "On arrival and departure, several airport-side services must work around the same aircraft movement. KCL assists operators in coordinating ground handling requirements with relevant service providers and airport stakeholders.",
    heroCtaLabel: "Request Ground Handling",
    whatItIsHeading: "Turnaround Planning Around the Aircraft Movement",
    whatItIs: [
      "Turnaround planning begins by discussing the aircraft type, intended airport, expected arrival/departure times, and the specific ground services needed for the planned stop.",
      "Depending on airport and provider capability, relevant requirements may involve ramp services, baggage coordination, aircraft cleaning, crew assistance or local transport.",
    ],
    whoItIsFor: [
      "Commercial airlines requiring station turnaround coordination",
      "Charter and business aviation operators planning traffic or technical stops",
      "Cargo operators coordinating freighter ramp and load support",
      "Operations teams aligning ground services with landing permission inquiries",
    ],
    whyItMattersHeading: "Communication Across Operator and Local Teams",
    whyItMatters: [
      "Clear service requests and timely operational updates help both the aircraft operator and local airport stakeholders prepare for arrival and adjust when schedules shift.",
      "Considering ground handling alongside landing permissions, fuel, and crew logistics reduces fragmented station communication.",
    ],
    sectionH2WithKeyword:
      "Scope of Aircraft Ground Handling Coordination",
    whatWeHandle: [
      {
        title: "Turnaround Requirement Review",
        detail:
          "Organizing aircraft type, schedule, and requested ground-side services for the intended airport.",
      },
      {
        title: "Ramp, Baggage & Cabin Service Liaison",
        detail:
          "Coordinating ramp services, baggage handling, and aircraft cleaning requests with authorized local providers.",
      },
      {
        title: "Crew Assistance & Terminal Coordination",
        detail:
          "Arranging crew arrival/departure assistance and connecting local transport or hotel requirements.",
      },
      {
        title: "Operational Schedule Updates",
        detail:
          "Relaying revised arrival or departure timings to local handling stakeholders when flight plans change.",
      },
    ],
    whatYouSendUs: [
      "Aircraft registration, type, and configuration",
      "Intended airport (ICAO code)",
      "Expected UTC arrival and departure times",
      "Specific ground services needed for the planned stop",
      "Passenger, baggage, or cargo context and operational contact details",
    ],
    authorityDependenciesHeading:
      "Availability, Airport Procedures & Authorized Providers",
    authorityDependencies: [
      "Ground handling arrangements depend on airport procedures, authorized service providers, and local equipment/staff availability.",
      "Physical ramp operations are performed by licensed airport handling companies at each location.",
      "KCL coordinates requirements and communication between the operator and relevant station stakeholders.",
    ],
    typicalLeadTimePlaceholder: "Subject to airport procedures & provider notice",
    howItWorksHeading: "Ground Handling Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Discuss Aircraft & Stop Requirements",
        description:
          "Share your aircraft type, intended airport, UTC arrival/departure times, and needed ground services.",
      },
      {
        step: "02",
        title: "Coordinate with Local Providers",
        description:
          "KCL communicates requirements with relevant handling providers and airport stakeholders to assess availability.",
      },
      {
        step: "03",
        title: "Align Turnaround & Schedule Updates",
        description:
          "Confirmed handling details are shared with your team, and any schedule updates are relayed promptly.",
      },
    ],
    faqs: [
      {
        question: "What services can be discussed under ground handling coordination?",
        answer:
          "Depending on airport and provider capability, requests may cover ramp services, baggage coordination, aircraft cleaning, crew assistance, and local transport.",
      },
      {
        question: "Are all handling services available at every airport?",
        answer:
          "No. Ground handling arrangements depend on local airport procedures, authorized providers, and equipment availability.",
      },
      {
        question: "Can ground handling be requested alongside landing permits and fuel?",
        answer:
          "Yes. Including ground handling, landing permission, fuel, and crew needs in one inquiry helps align the entire stop.",
      },
    ],
    relatedServiceSlugs: [
      "landing-permits",
      "aviation-fuel",
      "inflight-catering",
    ],
    relatedToolPath: {
      label: "ICAO Phonetic Alphabet",
      href: "/tools/icao-phonetic-alphabet",
    },
    relatedNewsSlug: {
      label: "What to Send With a Permit Request",
      href: "/news/what-to-send-with-a-permit-request",
    },
    presetPermitType: "landing",
    finalCtaHeading: "Make the Ground Arrangements Part of the Plan.",
    finalCtaSubheading:
      "Share your aircraft type, intended airport, and UTC schedule to discuss ground handling coordination.",
    finalCtaLabel: "Request Ground Handling",
  },

  // 11 / AVIATION FUEL
  {
    slug: "aviation-fuel",
    category: "Airport & Aircraft Services",
    title: "Aviation Fuel Arrangements & Coordination | KCL",
    metaDescription:
      "Coordinate aviation fuel requirements for international, charter and airline operations through relevant airport and supplier arrangements.",
    shortTitle: "Aviation Fuel",
    code: "SVC-FUEL-07",
    primaryKeyword: "aviation fuel coordination",
    h1: "Aviation Fuel Arrangements & Coordination",
    heroHeadline: "Fuel Planning Starts Long Before Uplift.",
    introParagraph:
      "Fuel supply coordination for Jet A1, TS1 and Avgas/100LL, with delivery scheduling, documentation and payment support. KCL assists operators with communicating refueling requirements and coordinating arrangements through trusted fuel providers.",
    heroCtaLabel: "Discuss Fuel Arrangements",
    whatItIsHeading: "Connecting Fuel Requirements with the Wider Itinerary",
    whatItIs: [
      "Aviation fuel coordination involves communicating your aircraft's planned refueling needs—airport, timing, specification, and estimated volume—with relevant fuel providers.",
      "Fuel planning should be coordinated alongside arrival/departure times, ground handling, and any relevant schedule amendments so station arrangements remain synchronized.",
    ],
    whoItIsFor: [
      "Airlines and charter operators planning refueling at international or domestic stops",
      "Business aviation and ferry flights scheduling technical fuel stops",
      "Cargo operators coordinating uplift alongside turnaround handling",
    ],
    whyItMattersHeading: "Why Early Fuel Communication Matters",
    whyItMatters: [
      "Refueling procedures, supplier coverage, and notice requirements vary across airports and operating windows.",
      "Sharing accurate operational details early allows available supplier arrangements and procedures to be reviewed before departure.",
    ],
    sectionH2WithKeyword: "How KCL Assists with Aviation Fuel Coordination",
    whatWeHandle: [
      {
        title: "Refueling Requirement Communication",
        detail:
          "Organizing airport, aircraft type, intended UTC date/time, and estimated fuel quantity for supplier inquiry.",
      },
      {
        title: "Supplier & Airport Liaison",
        detail:
          "Coordinating available refueling arrangements through approved suppliers and local airport procedures.",
      },
      {
        title: "Turnaround & Handling Alignment",
        detail:
          "Connecting fuel timing discussions with ground handling and arrival/departure slot windows.",
      },
      {
        title: "Schedule Change Notification",
        detail:
          "Communicating revised arrival or departure times to relevant parties when the operating plan shifts.",
      },
    ],
    whatYouSendUs: [
      "Intended airport (ICAO code)",
      "Aircraft registration and type",
      "Intended UTC date and arrival/departure times",
      "Requested fuel specification and estimated quantity where available",
      "Operator details and relevant operational contact information",
    ],
    authorityDependenciesHeading:
      "Supplier Responsibility & Operational Boundaries",
    authorityDependencies: [
      "Actual fuel specifications, supply availability, quality certification, equipment operation, and uplift procedures depend on approved fuel suppliers and local airport conditions.",
      "KCL coordinates communication and arrangements between the operator and relevant providers and does not claim fuel ownership or guaranteed fixed uplift times.",
    ],
    typicalLeadTimePlaceholder: "Depends on airport, supplier & operating window",
    howItWorksHeading: "Fuel Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Provide Operational Fuel Details",
        description:
          "Send the intended airport, aircraft type, UTC date/time, and requested fuel specification/quantity.",
      },
      {
        step: "02",
        title: "Review Supplier & Station Procedures",
        description:
          "KCL communicates with relevant providers to review availability and applicable uplift procedures.",
      },
      {
        step: "03",
        title: "Coordinate with the Turnaround Plan",
        description:
          "Fuel arrangements are aligned with your ground handling schedule and any subsequent timing updates.",
      },
    ],
    faqs: [
      {
        question: "What details should we send to discuss aviation fuel arrangements?",
        answer:
          "Provide the airport, aircraft type, intended UTC date and time, requested fuel specification and estimated quantity, and your operational contact details.",
      },
      {
        question: "Who supplies and certifies the aviation fuel?",
        answer:
          "Actual fuel supply, specifications, quality control, and into-plane uplift are performed by approved aviation fuel suppliers at the airport. KCL coordinates the operational inquiry and arrangement.",
      },
      {
        question: "Can fuel coordination be requested together with landing permits and handling?",
        answer:
          "Yes. Requesting fuel alongside landing permissions and ground handling helps keep the entire stop aligned.",
      },
    ],
    relatedServiceSlugs: [
      "ground-handling",
      "landing-permits",
      "non-scheduled-flights",
    ],
    relatedToolPath: {
      label: "UTC / PKT Time Converter",
      href: "/tools/utc-time-converter",
    },
    relatedNewsSlug: {
      label: "What to Send With a Permit Request",
      href: "/news/what-to-send-with-a-permit-request",
    },
    presetPermitType: "landing",
    hideFinalCta: true,
    finalCtaHeading: "Plan Aircraft Fuel Around the Real Operation.",
    finalCtaSubheading:
      "Share your airport, UTC schedule, aircraft type, and estimated uplift requirements with KCL.",
    finalCtaLabel: "Discuss Fuel Arrangements",
  },

  // 12 / FLIGHT PLANNING & DISPATCH
  {
    slug: "flight-planning-dispatch",
    category: "Planning, Dispatch & Slots",
    title: "Flight Planning & Dispatch Support Services | KCL",
    metaDescription:
      "KCL assists aviation operators with flight planning coordination, dispatch-related communication and operational support inquiries.",
    shortTitle: "Flight Planning & Dispatch",
    code: "SVC-FPD-08",
    primaryKeyword: "flight planning support",
    h1: "Flight Planning & Dispatch Support Services",
    heroHeadline: "Flight Planning Demands a Connected View.",
    introParagraph:
      "Route optimisation, flight planning, ICAO flight plan filing, weather monitoring, NOTAM review and ETOPS/EDTO planning support. KCL assists aviation operators with flight planning coordination and connected dispatch communication aligned with your permits.",
    heroCtaLabel: "Discuss Planning & Dispatch Support",
    whatItIsHeading: "Planning Support & Dispatch Communication",
    whatItIs: [
      "Planning support involves discussing the planned itinerary, aircraft type, route, operational schedule, and the requested level of flight planning coordination.",
      "Where within the agreed service scope, KCL supports dispatch-related communication between the operator, relevant service providers, and operational stakeholders.",
    ],
    whoItIsFor: [
      "Airlines and charter operators coordinating multi-requirement trips",
      "Business aviation teams seeking connected route and service communication",
      "Operations departments aligning flight planning inquiries with permissions and ground support",
    ],
    whyItMattersHeading: "Authoritative Data & Clear Operational Boundaries",
    whyItMatters: [
      "Weather, NOTAMs, routing, airport restrictions, and dispatch procedures require authoritative current data and qualified operational judgment.",
      "Defining the agreed coordination scope clearly ensures smooth communication between KCL and the operator's licensed dispatchers and flight crew.",
    ],
    sectionH2WithKeyword:
      "How KCL Supports Flight Planning & Dispatch Coordination",
    whatWeHandle: [
      {
        title: "Itinerary & Route Coordination",
        detail:
          "Reviewing planned routes and schedules alongside overflight and landing permission inquiries.",
      },
      {
        title: "Cross-Service Dispatch Communication",
        detail:
          "Helping align information between the operator's operations desk, airport handlers, and other trip stakeholders.",
      },
      {
        title: "Schedule & Routing Update Relay",
        detail:
          "Communicating operational timing or route changes across connected permission and station requests.",
      },
      {
        title: "Pre-Trip Information Organization",
        detail:
          "Assisting teams in assembling the operational references needed before a movement takes place.",
      },
    ],
    whatYouSendUs: [
      "Planned itinerary and route information",
      "Aircraft registration and type",
      "Proposed operational schedule (UTC dates and times)",
      "Requested level of flight planning and dispatch coordination",
      "Operator details and primary dispatch contact channels",
    ],
    authorityDependenciesHeading:
      "Service Boundary & Operator Responsibility",
    authorityDependencies: [
      "The aircraft operator and pilot-in-command remain fully responsible for the safety of the flight and for all regulatory approvals, certified flight plans, weather/NOTAM evaluation, and operational decisions.",
      "KCL's LinkedIn profile identifies flight planning and operational dispatch assistance among its services; exact contractual deliverables are confirmed per engagement and do not replace the operator's required licensed personnel.",
    ],
    typicalLeadTimePlaceholder: "Confirmed per itinerary & agreed service scope",
    howItWorksHeading: "Planning & Dispatch Coordination Workflow",
    howItWorks: [
      {
        step: "01",
        title: "Share Itinerary & Requested Scope",
        description:
          "Provide your planned route, aircraft type, UTC schedule, and the coordination support required.",
      },
      {
        step: "02",
        title: "Confirm Deliverables & Responsibilities",
        description:
          "Clarify the communication workflow between your operations control team and KCL.",
      },
      {
        step: "03",
        title: "Coordinate Connected Services",
        description:
          "Support proceeds across the agreed permission, airport, and operational communication tasks.",
      },
    ],
    faqs: [
      {
        question: "Does KCL replace an airline dispatcher?",
        answer:
          "No. The scope of any dispatch assistance is confirmed contractually, and KCL does not replace the operator's required licensed dispatch personnel or operational responsibilities.",
      },
      {
        question: "Can flight planning inquiries be discussed alongside permits and handling?",
        answer:
          "Yes. Reviewing route planning, permissions, airport slots, and ground handling together helps reduce fragmented communication.",
      },
      {
        question: "Who remains responsible for final flight plan approval and safety?",
        answer:
          "The aircraft operator and flight crew retain full responsibility for the flight, including authoritative weather/NOTAM review and regulatory compliance.",
      },
    ],
    relatedServiceSlugs: [
      "international-flight-support",
      "overflight-permits",
      "airport-slot-coordination",
    ],
    relatedToolPath: {
      label: "Aviation Resources & Glossary",
      href: "/aviation-resources",
    },
    relatedNewsSlug: {
      label: "What Is a Flight Permission Agent?",
      href: "/news/what-is-a-flight-permission-agent",
    },
    presetPermitType: "both",
    finalCtaHeading: "Align Flight Planning with the Services That Support It.",
    finalCtaSubheading:
      "Share your planned itinerary, aircraft type, and coordination needs with KCL.",
    finalCtaLabel: "Discuss Planning & Dispatch Support",
  },

  // 13 / AIRPORT SLOTS
  {
    slug: "airport-slot-coordination",
    category: "Planning, Dispatch & Slots",
    title: "Airport Slot Coordination & Aviation Support | KCL",
    metaDescription:
      "Airport slot coordination support for aircraft operators, with information preparation and airport-related communication assistance.",
    shortTitle: "Airport Slot Coordination",
    code: "SVC-SLT-09",
    primaryKeyword: "airport slot coordination",
    h1: "Airport Slot Coordination & Aviation Support",
    heroHeadline: "An Airport Slot Is One Part of a Larger Arrival Plan.",
    introParagraph:
      "At slot-coordinated airports, planned movements may require separate airport slot arrangements in addition to flight permissions and handling. KCL assists operators in discussing relevant slot coordination requirements and connected services.",
    heroCtaLabel: "Ask About Slot Support",
    whatItIsHeading: "Knowing the Difference Between Slots and Permits",
    whatItIs: [
      "An airport slot is an allocation for an aircraft movement (arrival or departure) at a coordinated airport during a specific time window.",
      "An airport slot is not the same as an overflight or landing permission. Different stakeholders and procedures administer each requirement.",
    ],
    whoItIsFor: [
      "Commercial airlines and charter operators flying into slot-coordinated airports",
      "Business and private aviation teams planning movements at busy terminals",
      "Cargo operators aligning arrival/departure slots with landing permits and ground handling",
    ],
    whyItMattersHeading: "Coordinating Adjustments Across Connected Requirements",
    whyItMatters: [
      "Changes to timing or aircraft details can affect existing slot arrangements as well as landing permissions and ground handling schedules.",
      "Addressing slot inquiries alongside permission and handling requests helps keep arrival and departure times consistent across all stakeholders.",
    ],
    sectionH2WithKeyword:
      "How KCL Assists with Airport Slot Coordination Inquiries",
    whatWeHandle: [
      {
        title: "Slot Inquiry Information Preparation",
        detail:
          "Helping operators organize intended airport, aircraft data, requested UTC movement times, and flight purpose.",
      },
      {
        title: "Airport Stakeholder Communication",
        detail:
          "Assisting with slot-related inquiries and communication according to applicable airport procedures.",
      },
      {
        title: "Timing & Aircraft Modification Support",
        detail:
          "Coordinating updates when schedule shifts or equipment changes require slot adjustments.",
      },
      {
        title: "Alignment with Permits & Handling",
        detail:
          "Ensuring slot times are considered together with landing permission inquiries and ground turnaround plans.",
      },
    ],
    whatYouSendUs: [
      "Intended airport (ICAO / IATA code)",
      "Operator name and aircraft registration/type",
      "Requested UTC arrival and departure movement times",
      "Flight purpose and relevant schedule details",
      "Connected services needed (landing permit, ground handling, fuel)",
    ],
    authorityDependenciesHeading:
      "Slot Availability & Coordinator Authority",
    authorityDependencies: [
      "Slot availability, allocation, priority rules, and approval remain entirely subject to the designated airport slot coordinator and applicable airport regulations.",
      "KCL assists with information preparation and coordination communication and cannot guarantee specific slot times.",
    ],
    typicalLeadTimePlaceholder: "Subject to airport coordinator rules & season",
    howItWorksHeading: "Airport Slot Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Prepare Movement Details",
        description:
          "Provide the intended airport, operator and aircraft information, requested UTC movement times, and flight purpose.",
      },
      {
        step: "02",
        title: "Review Airport Slot Procedures",
        description:
          "KCL reviews the slot inquiry alongside any connected landing permission or ground handling requirements.",
      },
      {
        step: "03",
        title: "Coordinate Submissions & Adjustments",
        description:
          "Inquiries and any subsequent timing modifications follow the applicable airport coordination procedures.",
      },
    ],
    faqs: [
      {
        question: "Does holding a landing permit automatically include an airport slot?",
        answer:
          "No. An airport slot is separate from an overflight or landing permission, and different stakeholders may administer each requirement.",
      },
      {
        question: "Who decides whether a requested airport slot is granted?",
        answer:
          "Slot availability, allocation, and approval remain subject to the designated airport coordinator and applicable local rules.",
      },
      {
        question: "What happens if our planned arrival or departure time changes?",
        answer:
          "Changes to timing or aircraft details can affect existing arrangements and must be communicated promptly to follow airport modification procedures.",
      },
    ],
    relatedServiceSlugs: [
      "landing-permits",
      "ground-handling",
      "scheduled-flights",
    ],
    relatedToolPath: {
      label: "UTC / PKT Time Converter",
      href: "/tools/utc-time-converter",
    },
    relatedNewsSlug: {
      label: "Scheduled vs Non-Scheduled Operations Explained",
      href: "/news/schedule-vs-non-schedule-filing-explained",
    },
    presetPermitType: "landing",
    finalCtaHeading: "Coordinate Arrival Requirements with Greater Clarity.",
    finalCtaSubheading:
      "Share your intended airport, requested UTC movement times, and aircraft details to discuss airport slot support.",
    finalCtaLabel: "Ask About Slot Support",
  },

  // 14 / CREW LOGISTICS
  {
    slug: "crew-logistics",
    category: "Crew & Operations",
    title: "Crew Accommodation & Transportation Support | KCL",
    metaDescription:
      "Arrange crew hotel and transport coordination for planned airline, charter and business aviation operations.",
    shortTitle: "Crew Logistics",
    code: "SVC-CRW-10",
    primaryKeyword: "crew hotel transportation coordination",
    h1: "Crew Accommodation & Transportation Support",
    heroHeadline: "Crew Logistics Should Work with the Flight Schedule.",
    introParagraph:
      "Crew Accommodation and Transport (HOTAC): Airport-proximity hotels, short-notice bookings, group bookings and airport-hotel-airport transfers. KCL assists operators in coordinating suitable hotel and local transportation requirements around their planned itinerary.",
    heroCtaLabel: "Discuss Crew Logistics",
    whatItIsHeading: "Coordinated Hotel & Ground Transportation for Stopovers",
    whatItIs: [
      "Hotel arrangements begin with sharing your arrival and departure schedule, number of crew members, room preferences, and any relevant company policy requirements.",
      "Airport-to-hotel transport and other requested local movements can be discussed alongside accommodation arrangements so both fit the same timeline.",
    ],
    whoItIsFor: [
      "Commercial airlines managing scheduled or ad-hoc crew layovers",
      "Charter and cargo operators planning rest stops",
      "Business and private aviation flight crews requiring hotel and local transfer coordination",
    ],
    whyItMattersHeading: "Adapting When Flight Schedules Change",
    whyItMatters: [
      "When flight schedules shift, crew hotel check-in windows and ground pickup times are immediately affected.",
      "Communicating operational changes early allows fresh availability checks and supplier updates to be coordinated around the revised arrival or departure time.",
    ],
    sectionH2WithKeyword:
      "How KCL Supports Crew Hotel & Transportation Coordination",
    whatWeHandle: [
      {
        title: "Crew Hotel Coordination",
        detail:
          "Communicating room counts, check-in/check-out schedules, and operator preferences with suitable hotel providers.",
      },
      {
        title: "Airport-to-Hotel Ground Transport",
        detail:
          "Arranging local crew transfers between the airport terminal and hotel around planned movement times.",
      },
      {
        title: "Schedule Revision Updates",
        detail:
          "Assisting with accommodation and transport adjustments when flight delays or roster changes occur.",
      },
      {
        title: "Integrated Stopover Planning",
        detail:
          "Aligning crew logistics with ground handling and landing permission inquiries for the same stop.",
      },
    ],
    whatYouSendUs: [
      "Intended city / airport and arrival/departure UTC schedule",
      "Number of crew members and room breakdown",
      "Room preferences and any relevant operator policy requirements",
      "Requested airport-to-hotel or local ground transport details",
      "Operational contact information for schedule updates",
    ],
    authorityDependenciesHeading:
      "Scope, Availability & Local Provider Terms",
    authorityDependencies: [
      "Hotel availability, room rates, cancellation terms, transport arrangements, and local constraints vary by location, supplier, and date.",
      "Immigration and crew entry procedures are governed by the relevant border and airport authorities.",
      "KCL coordinates accommodation and transport requests with third-party hospitality and transport providers.",
    ],
    typicalLeadTimePlaceholder: "Varies by city, season & hotel availability",
    howItWorksHeading: "Crew Logistics Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Share Schedule & Crew Requirements",
        description:
          "Provide your arrival/departure times, crew headcount, room preferences, and transport needs.",
      },
      {
        step: "02",
        title: "Review Options & Availability",
        description:
          "KCL checks available hotel and ground transport arrangements matching your stopover parameters.",
      },
      {
        step: "03",
        title: "Confirm & Coordinate Schedule Updates",
        description:
          "Arrangements are confirmed with providers and reassessed if operational timings change.",
      },
    ],
    faqs: [
      {
        question: "Can crew hotel and airport transport be arranged together?",
        answer:
          "Yes. Airport-to-hotel transfers and other local movements can be discussed alongside hotel accommodation in the same inquiry.",
      },
      {
        question: "What happens if our flight arrival or departure time changes?",
        answer:
          "Notify KCL as soon as schedule changes arise so fresh availability checks and supplier updates can be coordinated.",
      },
      {
        question: "Are hotel rooms and transport subject to local availability?",
        answer:
          "Yes. Availability, pricing, and terms vary by location, provider, and date.",
      },
    ],
    relatedServiceSlugs: [
      "ground-handling",
      "inflight-catering",
      "operations-support",
    ],
    relatedToolPath: {
      label: "UTC / PKT Time Converter",
      href: "/tools/utc-time-converter",
    },
    relatedNewsSlug: {
      label: "What to Send With a Permit Request",
      href: "/news/what-to-send-with-a-permit-request",
    },
    presetPermitType: "landing",
    finalCtaHeading: "Give the Crew Plan the Same Attention as the Flight Plan.",
    finalCtaSubheading:
      "Send your stopover schedule, crew numbers, and hotel/transport preferences to KCL.",
    finalCtaLabel: "Discuss Crew Logistics",
  },

  // 15 / INFLIGHT CATERING
  {
    slug: "inflight-catering",
    category: "Airport & Aircraft Services",
    title: "Inflight Catering Coordination for Aircraft | KCL",
    metaDescription:
      "Coordinate passenger and crew catering requirements for commercial, charter and private flight operations through relevant catering providers.",
    shortTitle: "Inflight Catering",
    code: "SVC-CAT-11",
    primaryKeyword: "inflight catering coordination",
    h1: "Inflight Catering Coordination for Aircraft",
    heroHeadline: "Catering Planned Around the Passenger, Aircraft and Schedule.",
    introParagraph:
      "A catering request is most effective when it reflects the aircraft, service expectations, headcount, dietary needs and operating time. KCL assists with communicating these requirements and coordinating available arrangements.",
    heroCtaLabel: "Request Catering Coordination",
    whatItIsHeading: "Passenger, Crew & Special Dietary Arrangements",
    whatItIs: [
      "Inflight catering coordination connects your flight's meal, beverage, and galley requirements with authorized aviation catering providers at the departure or turnaround airport.",
      "VIP, charter, and special dietary requests may be accommodated depending on local provider capability and advance notice.",
    ],
    whoItIsFor: [
      "Commercial airlines coordinating passenger and crew meal uplift",
      "Charter, VIP, and business aviation operators with tailored cabin service expectations",
      "Cargo and ferry flight crews requesting crew meals for long sectors",
    ],
    whyItMattersHeading: "Working with Changing Passenger Counts and Timings",
    whyItMatters: [
      "Catering preparation and airside delivery must align with kitchen production schedules and aircraft ground handling windows.",
      "Updates to passenger numbers or departure timing should be communicated as soon as practical so availability and delivery timing can be reassessed.",
    ],
    sectionH2WithKeyword:
      "How KCL Assists with Inflight Catering Coordination",
    whatWeHandle: [
      {
        title: "Menu & Headcount Specification",
        detail:
          "Organizing meal counts, preferred menu categories, and dietary requests for passenger cabins and flight crews.",
      },
      {
        title: "Special & Charter Catering Inquiries",
        detail:
          "Communicating VIP, executive charter, and allergen/dietary requirements with local catering providers.",
      },
      {
        title: "Turnaround & Delivery Alignment",
        detail:
          "Coordinating catering delivery timing alongside your aircraft ground handling schedule.",
      },
      {
        title: "Order & Schedule Updates",
        detail:
          "Relaying revised headcount or departure timing updates to the catering provider.",
      },
    ],
    whatYouSendUs: [
      "Flight date, airport (ICAO code), and planned UTC departure time",
      "Aircraft registration and type",
      "Number of meals (passenger and crew breakdown)",
      "Preferred menu categories and special dietary requests",
      "Operational contact information",
    ],
    authorityDependenciesHeading:
      "Food Safety, Preparation & Service Delivery",
    authorityDependencies: [
      "Actual food preparation, hygiene, halal/dietary certification, airside handling, and delivery processes remain with the authorized catering provider and applicable local standards.",
      "Menu availability and amendment cut-off times depend on the local catering facility and notice provided.",
    ],
    typicalLeadTimePlaceholder: "Depends on airport caterer & menu complexity",
    howItWorksHeading: "Inflight Catering Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Share Flight & Meal Requirements",
        description:
          "Provide the flight date, airport, aircraft type, meal counts, menu preferences, and dietary notes.",
      },
      {
        step: "02",
        title: "Confirm Provider Availability",
        description:
          "KCL communicates with relevant catering providers to review options and delivery arrangements.",
      },
      {
        step: "03",
        title: "Coordinate with Ground Handling",
        description:
          "Delivery timing is aligned with your turnaround schedule, with updates communicated if plans shift.",
      },
    ],
    faqs: [
      {
        question: "What information should be included in a catering coordination inquiry?",
        answer:
          "Provide the flight date, airport, aircraft type, number of passenger and crew meals, preferred menu categories, dietary requests, and contact information.",
      },
      {
        question: "Who is responsible for food preparation and safety standards?",
        answer:
          "Actual food preparation, handling, delivery, and food safety processes remain with the authorized catering provider at the airport.",
      },
      {
        question: "What if our passenger count or departure time changes?",
        answer:
          "Communicate updates as soon as practical so the catering provider can reassess availability and delivery timing.",
      },
    ],
    relatedServiceSlugs: [
      "ground-handling",
      "crew-logistics",
      "non-scheduled-flights",
    ],
    relatedToolPath: {
      label: "UTC / PKT Time Converter",
      href: "/tools/utc-time-converter",
    },
    relatedNewsSlug: {
      label: "What to Send With a Permit Request",
      href: "/news/what-to-send-with-a-permit-request",
    },
    presetPermitType: "landing",
    hideFinalCta: true,
    finalCtaHeading: "Prepare the Catering Details Before Departure Day.",
    finalCtaSubheading:
      "Send your flight date, airport, aircraft type, and meal requirements to discuss inflight catering coordination.",
    finalCtaLabel: "Request Catering Coordination",
  },

  // 16 / OPERATIONS SUPPORT
  {
    slug: "operations-support",
    category: "Crew & Operations",
    title: "Aviation Operations & Trip Coordination | KCL",
    metaDescription:
      "Support for flight-related operational inquiries, itinerary changes, communications and coordination across aviation services.",
    shortTitle: "Operations Support",
    code: "SVC-OPS-12",
    primaryKeyword: "aviation operational coordination support",
    h1: "Aviation Operations & Trip Coordination",
    heroHeadline: "When the Flight Plan Changes, Communication Matters.",
    introParagraph:
      "Operations teams work with changing schedules, service requirements and time-sensitive questions. KCL helps organize communication around requested aviation services and coordinate relevant updates with the parties involved.",
    heroCtaLabel: "Contact Flight Operations",
    whatItIsHeading: "A Single Operational Picture Across Connected Services",
    whatItIs: [
      "Bringing requested services, route information, aircraft details, and contact responsibilities together in a clear inquiry helps reduce miscommunication across a trip.",
      "When itinerary or service changes occur, notifying KCL promptly allows the affected permission, handling, fuel, slot, or crew coordination requirements to be reviewed.",
    ],
    whoItIsFor: [
      "Airline operations control centers managing active or upcoming movements",
      "Charter and business aviation dispatch teams handling itinerary revisions",
      "Operators coordinating multiple services across a single trip",
    ],
    whyItMattersHeading: "Honest Status Communication & Realistic Expectations",
    whyItMatters: [
      "Aviation professionals rely on clear, factual updates—knowing what has been requested, which items remain outstanding, and which decisions rest with authorities or local providers.",
      "Rather than automated guesswork, effective operational support focuses on accurate information exchange and clear next steps.",
    ],
    sectionH2WithKeyword:
      "Scope of Aviation Operational Coordination Support",
    whatWeHandle: [
      {
        title: "Consolidated Trip Inquiries",
        detail:
          "Organizing multi-service requests (permits, handling, fuel, slots, catering, crew logistics) into a single operational thread.",
      },
      {
        title: "Itinerary & Schedule Amendments",
        detail:
          "Reviewing the impact of timing, route, or aircraft changes across all requested services.",
      },
      {
        title: "Stakeholder Update Coordination",
        detail:
          "Communicating revised operational details to relevant authorities and local service providers.",
      },
      {
        title: "Clear Next-Step Reporting",
        detail:
          "Sharing status updates and identifying any additional documentation or confirmations needed from the operator.",
      },
    ],
    whatYouSendUs: [
      "Existing inquiry reference if applicable",
      "Operator name and primary operational contact channel",
      "Aircraft registration/type and callsign",
      "Current or revised route and UTC schedule",
      "Summary of requested services or itinerary changes",
    ],
    authorityDependenciesHeading:
      "Operations Coverage & Service Confirmation Governance",
    authorityDependencies: [
      "While public KCL profiles describe round-the-clock support, exact operating watch hours, contact channels, and response expectations are subject to management confirmation.",
      "An inquiry or status update does not constitute regulatory permit approval or service confirmation until formally issued by the relevant authority or provider.",
    ],
    typicalLeadTimePlaceholder: "Communicate itinerary changes as early as practical",
    howItWorksHeading: "Operational Coordination Workflow",
    howItWorks: [
      {
        step: "01",
        title: "Share the Operational Requirement or Change",
        description:
          "Provide your route, aircraft details, UTC schedule, and the services or amendments needed.",
      },
      {
        step: "02",
        title: "Assess Affected Services",
        description:
          "KCL reviews which permissions, airport arrangements, or crew logistics are affected.",
      },
      {
        step: "03",
        title: "Coordinate Updates & Confirm Next Steps",
        description:
          "Relevant parties are updated and your operations team receives clear confirmation of outstanding items.",
      },
    ],
    faqs: [
      {
        question: "How should we notify KCL of a change to an existing inquiry?",
        answer:
          "Send your inquiry reference, operator details, and the revised schedule, route, or aircraft information through the confirmed operations contact channel.",
      },
      {
        question: "Can multiple services be coordinated through one operational contact?",
        answer:
          "Yes. Bringing permissions, handling, fuel, slots, and crew logistics into one inquiry helps keep all parties aligned when plans change.",
      },
      {
        question: "Does KCL provide an automated live permit approval guarantee?",
        answer:
          "No. All regulatory approvals and provider confirmations depend on the relevant authorities and suppliers.",
      },
    ],
    relatedServiceSlugs: [
      "international-flight-support",
      "flight-planning-dispatch",
      "crew-logistics",
    ],
    relatedToolPath: {
      label: "Aviation Resources & Checklists",
      href: "/aviation-resources",
    },
    relatedNewsSlug: {
      label: "What to Send With a Permit Request",
      href: "/news/what-to-send-with-a-permit-request",
    },
    presetPermitType: "both",
    finalCtaHeading: "Share Your Operational Requirements.",
    finalCtaSubheading:
      "Reach out to KCL to discuss a new multi-service itinerary or coordinate updates to an existing request.",
    finalCtaLabel: "Contact Flight Operations",
  },

  // PAKISTAN SPECIALIZATION LOCAL-EXPERTISE PAGES (Preserved per Rule 2)
  {
    slug: "overflight-permit-pakistan",
    category: "Pakistan Specialization",
    title: "Pakistan Overflight Permit Coordination (OPKR/OPLR) | KCL",
    metaDescription:
      "Local Pakistan overflight permit coordination across Karachi (OPKR) and Lahore (OPLR) FIRs for airlines and charter operators.",
    shortTitle: "Pakistan Overflight Permits",
    code: "SVC-PK-OVF",
    primaryKeyword: "Pakistan overflight permit",
    h1: "Pakistan Overflight Permit Coordination (OPKR & OPLR FIRs)",
    heroHeadline: "Local Pakistan Airspace Context for International Operators.",
    introParagraph:
      "Operators planning to cross Pakistan's Karachi (OPKR) and Lahore (OPLR) Flight Information Regions can work with Kashmir Corporation (Pvt.) Ltd. to discuss route details, documentation requirements, and overflight permission coordination.",
    heroCtaLabel: "Discuss Pakistan Overflight",
    whatItIsHeading: "Focused Facilitation for OPKR and OPLR Airspace Transit",
    whatItIs: [
      "Unlike general international trip support, this page focuses specifically on flights transiting Pakistan's airspace across the Karachi (OPKR) and Lahore (OPLR) FIRs.",
      "Permission requirements depend on the actual flight classification (scheduled vs. non-scheduled), route waypoints, aircraft particulars, and current authority procedures.",
    ],
    whoItIsFor: [
      "International airlines operating Europe–Asia or Gulf–Asia corridors through OPKR/OPLR",
      "Charter, business aviation, and cargo flights transiting Pakistan airspace",
      "Aircraft ferry and delivery operations crossing South Asia",
    ],
    whyItMattersHeading: "Why Local Pakistan Airspace Familiarity Helps Dispatchers",
    whyItMatters: [
      "Confirming that planned OPKR/OPLR entry and exit waypoints, callsigns, and supporting certificates are properly organized before submission helps reduce administrative queries.",
      "When departure delays or route revisions occur, local communication helps relay updated information through applicable Pakistan channels.",
    ],
    sectionH2WithKeyword:
      "Coordinating a Pakistan Overflight Permit Inquiry",
    whatWeHandle: [
      {
        title: "OPKR & OPLR Route Information Review",
        detail:
          "Organizing planned ATS routes, FIR boundary waypoints, and UTC entry/exit estimates for Pakistan overflight requests.",
      },
      {
        title: "Scheduled & Non-Scheduled Overflight Facilitation",
        detail:
          "Assisting both recurring airline operations and one-off charter or private flights crossing Pakistan.",
      },
      {
        title: "Schedule & Registration Revision Support",
        detail:
          "Coordinating updates when ETD changes, tail swaps, or route modifications affect a Pakistan overflight inquiry.",
      },
      {
        title: "Connection to Pakistan Landing Support",
        detail:
          "Assisting operators if an overflight plan changes to a technical refueling or traffic stop at a Pakistani airport.",
      },
    ],
    whatYouSendUs: [
      "Operator name, ICAO designator / callsign, and contact details",
      "Aircraft registration, type, and Maximum Takeoff Weight (MTOW)",
      "Origin and destination airports with planned UTC schedule",
      "Planned route string and OPKR / OPLR entry and exit waypoints",
      "Purpose of operation and applicable aircraft/operator certificates",
    ],
    authorityDependenciesHeading:
      "Pakistan Authorization Disclaimer",
    authorityDependencies: [
      "KCL facilitates and coordinates applications; the Pakistan Civil Aviation Authority (PCAA) and relevant authorities retain all approval authority.",
      "No universal processing time or guaranteed approval is stated because requirements vary by authority and operation. Current requirements should be checked for each flight.",
    ],
    typicalLeadTimePlaceholder: "Varies by operation & current authority procedures",
    howItWorksHeading: "Pakistan Overflight Inquiry Process",
    howItWorks: [
      {
        step: "01",
        title: "Send Route & Aircraft Details",
        description:
          "Share your planned OPKR/OPLR routing, UTC schedule, aircraft registration/type, and operator details.",
      },
      {
        step: "02",
        title: "Review Current Pakistan Requirements",
        description:
          "KCL reviews the flight context and confirms the supporting information required for submission.",
      },
      {
        step: "03",
        title: "Coordinate Submission & Updates",
        description:
          "The request is coordinated through applicable channels, with authority feedback and status shared as available.",
      },
    ],
    faqs: [
      {
        question: "Which Flight Information Regions cover Pakistan's airspace?",
        answer:
          "Pakistan's airspace comprises the Karachi FIR (OPKR) and the Lahore FIR (OPLR).",
      },
      {
        question: "Are fixed permit processing times published for Pakistan overflights?",
        answer:
          "No universal processing time is stated because requirements and review timelines vary by authority and operation.",
      },
      {
        question: "Where can we view KCL's complete Pakistan flight permissions overview?",
        answer:
          "Visit our dedicated Pakistan Flight Permissions hub at /pakistan/flight-permissions for an overview of overflight, landing, scheduled, and non-scheduled support in Pakistan.",
      },
    ],
    relatedServiceSlugs: [
      "landing-permit-pakistan",
      "overflight-permits",
      "scheduled-flights",
    ],
    relatedToolPath: {
      label: "Pakistan Flight Permissions Hub",
      href: "/pakistan/flight-permissions",
    },
    relatedNewsSlug: {
      label: "What Is a Flight Permission Agent?",
      href: "/news/what-is-a-flight-permission-agent",
    },
    presetPermitType: "overflight",
    finalCtaHeading: "Planning to Cross Pakistan's Airspace?",
    finalCtaSubheading:
      "Send your planned route, OPKR/OPLR waypoints, and aircraft details to discuss Pakistan overflight permissions.",
    finalCtaLabel: "Discuss Pakistan Overflight",
  },

  {
    slug: "landing-permit-pakistan",
    category: "Pakistan Specialization",
    title: "Pakistan Landing Permit Coordination | KCL",
    metaDescription:
      "Coordinate Pakistan landing permit requests and connected airport handling for scheduled, charter and technical stops at OPKC, OPLA and OPIS.",
    shortTitle: "Pakistan Landing Permits",
    code: "SVC-PK-LND",
    primaryKeyword: "Pakistan landing permit",
    h1: "Pakistan Landing Permit Coordination (OPKC, OPLA, OPIS & Regional Airports)",
    heroHeadline: "Local Coordination for Planned Arrivals and Technical Stops in Pakistan.",
    introParagraph:
      "For intended arrivals at Pakistani international airports—including Karachi (OPKC), Lahore (OPLA), and Islamabad (OPIS)—the itinerary, aircraft, operator, purpose of flight, and relevant airport information help establish the scope of the landing permission request.",
    heroCtaLabel: "Discuss Pakistan Landing",
    whatItIsHeading: "Coordinating Traffic Arrivals & Technical Stops in Pakistan",
    whatItIs: [
      "This page focuses specifically on landing permission inquiries for aircraft arriving at airports in Pakistan, distinct from our general international landing permit overview.",
      "Regular commercial schedules, charter flights, cargo operations, and technical refueling stops in Pakistan may involve distinct procedural paths and supporting documentation.",
    ],
    whoItIsFor: [
      "International charter and private operators planning arrivals or technical stops in Pakistan",
      "Commercial passenger and cargo airlines operating into OPKC, OPLA, OPIS, OPPS, OPMT, or OPQT",
      "Ferry and positioning flights requiring refueling and ground support in Pakistan",
    ],
    whyItMattersHeading: "Connecting Pakistan Landing Requests with Station Services",
    whyItMatters: [
      "An arrival in Pakistan brings together permission requirements, airport slot considerations, ground handling, aviation fuel, and crew arrangements.",
      "Discussing these requirements together helps clarify what information is needed for both the regulatory inquiry and local station preparation.",
    ],
    sectionH2WithKeyword:
      "What KCL Coordinates for a Pakistan Landing Permit Request",
    whatWeHandle: [
      {
        title: "Pakistan Arrival Permission Facilitation",
        detail:
          "Organizing operator, aircraft, itinerary, and purpose-of-flight details for Pakistan landing inquiries.",
      },
      {
        title: "Technical Stop & Charter Support",
        detail:
          "Assisting with both non-traffic technical refueling stops and commercial charter arrival inquiries.",
      },
      {
        title: "Station Handling, Fuel & Crew Alignment",
        detail:
          "Coordinating ground handling, fuel arrangements, catering, and crew hotel/transport requests at Pakistani airports.",
      },
      {
        title: "Schedule & Aircraft Revision Liaison",
        detail:
          "Communicating updated arrival/departure timings or aircraft changes through applicable local channels.",
      },
    ],
    whatYouSendUs: [
      "Aircraft registration and type, plus MTOW",
      "Operator name and operational contact details",
      "Planned itinerary and intended Pakistani airport (e.g., OPKC, OPLA, OPIS)",
      "Proposed UTC arrival and departure schedule",
      "Purpose of operation (traffic landing, charter, cargo, or technical stop)",
      "Relevant supporting certificates and requested airport/crew services",
    ],
    authorityDependenciesHeading:
      "Pakistan Authorization & Airport Governance Disclaimer",
    authorityDependencies: [
      "KCL facilitates and coordinates applications; the Pakistan Civil Aviation Authority (PCAA) and relevant airport authorities retain all approval and slot allocation authority.",
      "Ground handling, fuel, catering, and hotel services depend on local airport procedures and authorized provider availability.",
    ],
    typicalLeadTimePlaceholder: "Varies by flight purpose & current authority rules",
    howItWorksHeading: "Pakistan Landing Coordination Process",
    howItWorks: [
      {
        step: "01",
        title: "Share Arrival Itinerary & Purpose",
        description:
          "Provide the intended Pakistani airport, UTC schedule, aircraft details, flight purpose, and needed station services.",
      },
      {
        step: "02",
        title: "Clarify Documentation & Station Scope",
        description:
          "KCL reviews the required permission documentation alongside ground handling, fuel, or crew requirements.",
      },
      {
        step: "03",
        title: "Coordinate Request & Station Readiness",
        description:
          "Inquiries proceed through applicable channels, with updates shared with your operations desk.",
      },
    ],
    faqs: [
      {
        question: "Can KCL assist an international charter or technical stop in Pakistan?",
        answer:
          "Yes. KCL describes non-scheduled flight permission facilitation and ground coordination in Pakistan as core services; details are reviewed for each specific flight.",
      },
      {
        question: "Can ground handling and fuel in Pakistan be discussed with the landing permit?",
        answer:
          "Yes. Ground handling, fuel arrangements, catering, and crew logistics can be discussed alongside your Pakistan landing permission inquiry.",
      },
      {
        question: "Who approves landing permits in Pakistan?",
        answer:
          "The relevant Pakistan aviation authorities retain all approval authority for landing permissions.",
      },
    ],
    relatedServiceSlugs: [
      "overflight-permit-pakistan",
      "ground-handling",
      "aviation-fuel",
    ],
    relatedToolPath: {
      label: "Pakistan Flight Permissions Hub",
      href: "/pakistan/flight-permissions",
    },
    relatedNewsSlug: {
      label: "Scheduled vs Non-Scheduled Operations Explained",
      href: "/news/schedule-vs-non-schedule-filing-explained",
    },
    presetPermitType: "landing",
    finalCtaHeading: "Planning an Arrival or Technical Stop in Pakistan?",
    finalCtaSubheading:
      "Share your intended Pakistani airport, UTC schedule, and aircraft details with KCL.",
    finalCtaLabel: "Discuss Pakistan Landing",
  },
];

export interface CoreServicePillar {
  code: string;
  title: string;
  summary: string;
  primaryHref: string;
  primaryLabel: string;
  subLinks: Array<{ label: string; href: string }>;
}

/**
 * Primary reference: https://www.kclpk.org/Services.html
 * KCL's Six Core Services:
 * 1. Flight Permission Facilitation (Overflight & Landing; Scheduled & Non-Scheduled)
 * 2. Ground Handling
 * 3. Catering Services
 * 4. Fuel Supply
 * 5. Accommodation Arrangements
 * 6. 24/7 Support
 */
export const KCL_SIX_CORE_SERVICES: CoreServicePillar[] = [
  {
    code: "01 · FLIGHT PERMISSIONS",
    title: "Flight Permission Facilitation",
    summary:
      "Overflight and landing permission assistance for scheduled commercial airlines and non-scheduled charter, cargo, and private flights. KCL coordinates applications and documentation; civil aviation authorities retain approval authority.",
    primaryHref: "/pakistan/flight-permissions",
    primaryLabel: "Pakistan Flight Permissions",
    subLinks: [
      { label: "Overflight Permits", href: "/services/overflight-permits" },
      { label: "Landing Permits", href: "/services/landing-permits" },
      { label: "Scheduled Flights", href: "/services/scheduled-flights" },
      { label: "Non-Scheduled & Charter", href: "/services/non-scheduled-flights" },
    ],
  },
  {
    code: "02 · GROUND HANDLING",
    title: "Ground Handling",
    summary:
      "Turnaround and airport-side coordination including ramp services, baggage handling, aircraft servicing, crew assistance, and local logistics with authorized airport providers.",
    primaryHref: "/services/ground-handling",
    primaryLabel: "Ground Handling Coordination",
    subLinks: [
      { label: "Pakistan Landing Permits", href: "/services/landing-permit-pakistan" },
    ],
  },
  {
    code: "03 · INFLIGHT CATERING",
    title: "Catering Services",
    summary:
      "Passenger and flight crew inflight meal coordination tailored to aircraft type, headcount, dietary requirements, and departure schedules through approved catering facilities.",
    primaryHref: "/services/inflight-catering",
    primaryLabel: "Inflight Catering Coordination",
    subLinks: [
      { label: "Charter & Non-Scheduled Support", href: "/services/non-scheduled-flights" },
    ],
  },
  {
    code: "04 · AVIATION FUEL",
    title: "Fuel Supply",
    summary:
      "Communicating aircraft refueling requirements and coordinating fuel arrangements with approved aviation fuel suppliers around your planned arrival and departure schedule.",
    primaryHref: "/services/aviation-fuel",
    primaryLabel: "Aviation Fuel Arrangements",
    subLinks: [
      { label: "Ground Handling Coordination", href: "/services/ground-handling" },
    ],
  },
  {
    code: "05 · CREW ACCOMMODATION",
    title: "Accommodation Arrangements",
    summary:
      "Practical crew hotel accommodation and airport-to-hotel ground transportation coordination aligned with flight schedules, layovers, and stopover requirements.",
    primaryHref: "/services/crew-logistics",
    primaryLabel: "Crew Accommodation & Transport",
    subLinks: [
      { label: "Scheduled Airline Support", href: "/services/scheduled-flights" },
    ],
  },
  {
    code: "06 · OPERATIONS WATCH",
    title: "24/7 Support",
    summary:
      "Continuous operational communication for active flight inquiries, schedule or route amendments, aircraft changes, and cross-service trip coordination.",
    primaryHref: "/services/operations-support",
    primaryLabel: "Operations & Trip Support",
    subLinks: [
      { label: "Customer Support Desk", href: "/customer-support" },
      { label: "International Trip Support", href: "/services/international-flight-support" },
    ],
  },
  {
    code: "07 · PLANNING & DISPATCH",
    title: "Flight Planning & Dispatch",
    summary:
      "Flight planning coordination, route and schedule review, and dispatch-related operational communication aligned with permissions and station services.",
    primaryHref: "/services/flight-planning-dispatch",
    primaryLabel: "Flight Planning & Dispatch",
    subLinks: [
      { label: "Overflight Permits", href: "/services/overflight-permits" },
      { label: "International Trip Support", href: "/services/international-flight-support" },
    ],
  },
  {
    code: "08 · AIRPORT SLOTS",
    title: "Airport Slot Coordination",
    summary:
      "Arrival and departure slot inquiry preparation, airport coordinator communication, and timing adjustment support alongside landing permits and handling.",
    primaryHref: "/services/airport-slot-coordination",
    primaryLabel: "Airport Slot Coordination",
    subLinks: [
      { label: "Landing Permits", href: "/services/landing-permits" },
      { label: "Ground Handling", href: "/services/ground-handling" },
    ],
  },
];

export const PRIMARY_SERVICES_DATA: ServiceDefinition[] = SERVICES_DATA.filter(
  (s) => s.category !== "Pakistan Specialization"
);

export const PAKISTAN_SPECIALIST_SERVICES: ServiceDefinition[] =
  SERVICES_DATA.filter((s) => s.category === "Pakistan Specialization");

// Map legacy slugs to their updated V2 definitions so existing links/bookmarks work cleanly
const LEGACY_SLUG_ALIASES: Record<string, string> = {
  "flight-permission": "international-flight-support",
  "fuel-supply": "aviation-fuel",
  "flight-catering": "inflight-catering",
  "crew-accommodation": "crew-logistics",
};

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  const direct = SERVICES_DATA.find((service) => service.slug === slug);
  if (direct) {
    return direct;
  }
  const mappedSlug = LEGACY_SLUG_ALIASES[slug];
  if (mappedSlug) {
    const target = SERVICES_DATA.find((service) => service.slug === mappedSlug);
    if (target) {
      return {
        ...target,
        canonicalPath: `/services/${target.slug}`,
      };
    }
  }
  return undefined;
}

export function getAllServiceSlugsForStaticGeneration(): string[] {
  const dedicatedPages = ["flight-permissions", "ground-handling", "inflight-catering"];
  return [
    ...SERVICES_DATA.map((s) => s.slug),
    ...Object.keys(LEGACY_SLUG_ALIASES),
  ].filter((slug) => !dedicatedPages.includes(slug));
}

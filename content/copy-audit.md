# KCL International Content Update (V2) — Route & Search Intent Audit (`/content/copy-audit.md`)

## 1. Executive Summary

All 21 routes defined in **`KCL_International_Website_Content_V2.docx`** (*Version 2.0 | 03 November 2026*) have been implemented across the Next.js 15 App Router project while preserving the editorial navy (`#0B2545`) / off-white (`#F6F8FB`) / amber (`#E8A200`) aviation design:

1. **Primary Brand Positioning:** Repositioned the homepage (`/`) around **International Flight Support & Aviation Services** (*"International Flight Support. Coordinated with Confidence."*) while preserving **Pakistan Flight Permission Services** (`/pakistan/flight-permissions`, `/services/overflight-permit-pakistan`, `/services/landing-permit-pakistan`, `/permit-directory/pakistan`) as genuine local-expertise pages.
2. **Expanded 12-Service Portfolio:** Added dedicated, substantive pages for `/services/international-flight-support`, `/services/overflight-permits`, `/services/landing-permits`, `/services/scheduled-flights`, `/services/non-scheduled-flights`, `/services/ground-handling`, `/services/aviation-fuel`, `/services/flight-planning-dispatch`, `/services/airport-slot-coordination`, `/services/crew-logistics`, `/services/inflight-catering`, and `/services/operations-support`.
3. **Honest Inquiry & Navigator Behavior:** Updated the **Flight Support Navigator** (`PermitChecker.tsx`) and all forms (`PermitRequestForm.tsx`, `ContactForm.tsx`, `NewsletterForm.tsx`, `lib/actions.ts`, and `lib/data/*`) so they guide preparation and generate a clearly labeled **Inquiry Review Preview** without fake submission success states, without logging private inquiry details to the server console, and without claiming fixed permit lead times or guaranteed approvals.
4. **Heritage & Claim Governance:** Separated Kashmirwala Group's 1947 heritage from KCL's corporate formation, held unverified geographic regions and 24/7 SLA badges for management confirmation, and used `{{VERIFIED_ADDRESS}} | {{OPERATIONS_EMAIL}} | {{PHONE}}` where public sources differ.

---

## 2. Route-by-Route V2 Implementation Matrix

| V2 Section | Route | SEO Title | Primary Search Intent |
| :--- | :--- | :--- | :--- |
| **01 / HOME** | `/` | `International Flight Support & Aviation Services \| KCL` | `international flight support services; global aviation support` |
| **02 / ABOUT KCL** | `/about` | `About KCL \| International Aviation Support Company` | `KCL international flight support company` |
| **03 / SERVICES** | `/services` | `International Aviation Support Services \| KCL` | `international aviation support services` |
| **04 / INTERNATIONAL FLIGHT SUPPORT** | `/services/international-flight-support` | `International Flight & Trip Support Services \| KCL` | `international trip support services` |
| **05 / OVERFLIGHT PERMITS** | `/services/overflight-permits` | `Overflight Permit Coordination & Assistance \| KCL` | `overflight permit coordination; international overflight permits` |
| **06 / LANDING PERMITS** | `/services/landing-permits` | `Aircraft Landing Permit Assistance \| KCL` | `landing permit assistance international` |
| **07 / PAKISTAN FLIGHT PERMISSIONS** | `/pakistan/flight-permissions` | `Flight Permission Services in Pakistan \| KCL` | `flight permission agent Pakistan; Pakistan overflight permit` |
| **08 / SCHEDULED FLIGHTS** | `/services/scheduled-flights` | `Scheduled Flight Permission Coordination \| KCL` | `scheduled airline flight permission support` |
| **09 / NON-SCHEDULED & CHARTER** | `/services/non-scheduled-flights` | `Charter & Non-Scheduled Flight Support \| KCL` | `charter flight permission assistance; non scheduled flights` |
| **10 / GROUND HANDLING** | `/services/ground-handling` | `Aircraft Ground Handling Coordination \| KCL` | `aircraft ground handling coordination` |
| **11 / AVIATION FUEL** | `/services/aviation-fuel` | `Aviation Fuel Arrangements & Coordination \| KCL` | `aviation fuel coordination; aircraft fuel arrangements` |
| **12 / FLIGHT PLANNING & DISPATCH** | `/services/flight-planning-dispatch` | `Flight Planning & Dispatch Support Services \| KCL` | `flight planning support; aviation dispatch assistance` |
| **13 / AIRPORT SLOTS** | `/services/airport-slot-coordination` | `Airport Slot Coordination & Aviation Support \| KCL` | `airport slot coordination aviation` |
| **14 / CREW LOGISTICS** | `/services/crew-logistics` | `Crew Accommodation & Transportation Support \| KCL` | `crew hotel transportation coordination aviation` |
| **15 / INFLIGHT CATERING** | `/services/inflight-catering` | `Inflight Catering Coordination for Aircraft \| KCL` | `inflight catering coordination aviation` |
| **16 / OPERATIONS SUPPORT** | `/services/operations-support` | `Aviation Operations & Trip Coordination \| KCL` | `aviation operational coordination support` |
| **17 / REQUEST SUPPORT** | `/request-flight-support` | `Request Flight Support & Permit Coordination \| KCL` | `request international flight support` |
| **18 / AVIATION RESOURCES** | `/aviation-resources` | `Aviation Resources, Permit Guides & Checklists \| KCL` | `aviation flight support resources` |
| **19 / INSIGHTS** | `/insights` | `Aviation Insights & Flight Support Articles \| KCL` | `aviation industry insights flight operations` |
| **20 / CONTACT** | `/contact` | `Contact KCL International Flight Support` | `contact KCL international flight support` |
| **21 / CUSTOMER SUPPORT** | `/customer-support` | `Aviation Customer Support & Operations Contact \| KCL` | `KCL aviation customer support` |

# KCL International Flight Support — Verification Checklist & To-Fill Tracker (`/content/TODO.md`)

Source of truth: **"Draft Answers to The Questions We Must Answer" (Operations, 05 November 2026)** and `/content/facts.ts`.

---

## PART 0 — Management Flags (Possible Source Typos Read Conservatively)

The following three sentences in the 05 November 2026 source were interpreted conservatively as typos. Management must confirm if any reading should be reversed:

1. **Slide 3 ("The site must say 'worldwide permits' today.")** -> Read as: the site must **NOT** claim "worldwide permits" today.
2. **Slide 3 ("Asia, Middle East and Africa from public claims for now.")** -> Read as: public claims are **limited to Asia, Middle East and Africa** (the launch regions). Do not claim Europe, the Americas, the Caribbean, or Oceania.
3. **Slide 19 Proof ("Use all airline logos until verified in writing.")** -> Read as: show **NO** airline logos or client names publicly until each is verified in writing (`displayPermission: true`).

---

## PART 1 — Open `toFill` Items (Hidden From Public Pages Until Supplied)

| Field / Item | Where Defined | Owner Role | Current Public Behaviour |
| :--- | :--- | :--- | :--- |
| `entity.licenceValidity` | `/content/facts.ts` | Compliance / Operations Manager | Hidden until supplied |
| `entity.secpRegistration` | `/content/facts.ts` | Finance / Legal | Hidden until supplied |
| `entity.ntn` | `/content/facts.ts` | Finance / Legal | Hidden until supplied |
| `entity.incorporationYear` | `/content/facts.ts` | Management / Legal | Hidden; only Kashmirwala Group 1947 is shown |
| `coverage.directAccessAllowancesPerCountry` | `/content/facts.ts` | Operations | Detail column hidden until supplied |
| `clients[].displayPermission` (Qantas Airways, Batik Air, Royal Brunei Airlines, Jetstar, Virgin Australia) | `/content/facts.ts` | Business Development | Client names & logos hidden until written permission recorded |
| `contact.legacyPhones` (`+92 326 8088706`, `+92 333 2334171`) | `/content/facts.ts` | Management | Hidden unless Management confirms keeping them alongside `+92 320 5486243` |
| `contact.whatsapp` | `/content/facts.ts` | Operations | WhatsApp button hidden until number supplied |
| `contact.sita` | `/content/facts.ts` | Operations | Never published until issued and tested |
| `contact.aftn` | `/content/facts.ts` | Operations | Requested via PCAA/OCAA; never published until issued and tested |
| `contact.staffingHours` | `/content/facts.ts` | Operations | Hidden; channel labelled `24/7 urgent escalation line` |
| `services.airportSlotCoordination.airports` | `/content/facts.ts` | Operations | Airport list hidden; displays "Slot coordination is arranged where KCL has airport contacts. Tell us your airport." |
| `fuel.prepaymentPerAirport` | `/content/facts.ts` | Operations / Fuel Desk | Hidden per airport; states prepayment is confirmed per airport |
| `fuel` Avgas / TS-1 confirmation | `/content/facts.ts` | Operations | Removed unless Operations confirms |
| Country guides (Bahrain, Qatar, Kenya, Ghana, Mauritius, Togo, Central African Republic) | `/content/countries.ts` | Operations | Marked `Guide in preparation` until authority links, lead times & docs are verified |
| Out-of-hours escalation process detail | `/app/urgent-requests` | Operations | Process detail hidden until Operations supplies it |
| Per-flight-type document differences | `/app/resources/requirements-by-flight-type` | Operations | Shared document list shown; per-type differences hidden until supplied |
| Top 10 real email/WhatsApp questions | `/app/resources/top-questions` | Operations | Page hidden (`noindex` / unlinked) until Operations supplies the 10 real questions |
| Fuel release guide review | `/app/resources/fuel-release-guide` | Operations | Guide text hidden until Operations reviews; unit converter & uplift checklist live |
| Management & Operations Desk names/bios/photos | `/app/about` | Management / HR | Hidden until each person's written approval is recorded |
| Non-AFPA memberships (FAGSA, TAAP, DTS, KCCI, ACA) | `/app/about`, `/app/compliance` | Compliance / Management | Hidden until each is marked confirmed and current |
| Legal pages sign-off (Privacy Policy, Terms, Cookie Notice) | `/app/privacy-policy`, `/app/terms`, `/app/cookie-notice` | Legal | Marked `draft` (`noindex`, excluded from sitemap & nav) until Legal approves |
| GA4 & Google Search Console property owner | `/app/layout.tsx` | Marketing | Measurement ID & Search Console verification pending Marketing setup |

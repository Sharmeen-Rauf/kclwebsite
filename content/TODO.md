# KCL International Flight Support — Verification Checklist & Placeholders (`/content/TODO.md`)

This file tracks all management verification questions, placeholder tokens, and pre-launch SEO/compliance tasks from **KCL | INTERNATIONAL FLIGHT SUPPORT (Version 2.0 | 03 November 2026)**.

---

## 1. Approval & SEO Implementation Checklist (V2 Management Sign-Off)

- [ ] **Geographic Scope & Delivery Model:** Confirm international geographic scope (e.g., LinkedIn's published region list) and whether KCL acts directly or through partner providers before publishing a coverage map or country list outside Pakistan.
- [ ] **AFPA Registration & Legal Wording:** Confirm exact AFPA registration/legal wording (`{{AFPA_REGISTRATION_CONFIRMATION}}`) and permitted logo/certification display.
- [ ] **Reconciled Contact & Address Data:** Confirm official legal name (`Kashmir Corporation (Pvt.) Ltd.`), verified physical address (`{{VERIFIED_ADDRESS}}`), operations telephone (`{{PHONE}}`), operations email (`{{OPERATIONS_EMAIL}}`), WhatsApp (`{{WHATSAPP}}`), and operating hours (reconciling differences between `kclpk.org` and LinkedIn).
- [ ] **Flight Planning, Dispatch & Airport Slots:** Confirm whether flight planning, dispatch assistance, and airport slot coordination are actively offered and their exact contractual deliverables (ensuring KCL is never presented as replacing the operator's certified dispatchers or operational control).
- [ ] **Client Logo Usage Rights:** Confirm client logo usage rights and relationship descriptions for Qantas, Royal Brunei Airlines, Air Mauritius, and Cambodia Airways before live publication.
- [ ] **Kashmirwala Group 1947 Heritage:** Confirm the Kashmirwala Group 1947 history wording and keep it strictly separated from KCL's entity incorporation date.
- [ ] **Keyword Demand & Intent Mapping:** Validate keyword demand and ensure one distinct target search intent per indexable page (implemented across all 21 V2 routes).
- [ ] **Legacy `.html` Permanent Redirects:** Permanent redirects configured in `next.config.mjs` from `/index.html`, `/About.html`, `/Services.html`, `/Schedule_Filing.html`, `/Non_Schedule_Filing.html`, `/Contact_Us.html`, and `/Customer_Support.html` to the new Next.js routes.
- [ ] **Metadata, Schema, Sitemaps & Canonicals:** Unique SEO title, meta description, canonical URL, OpenGraph tags, JSON-LD schema, `sitemap.ts`, and `robots.ts` implemented.
- [ ] **Analytics & Search Console:** Connect Google Search Console, analytics, and qualified inquiry measurement prior to production launch.
- [ ] **Zero Invented Claims:** No invented approvals, pricing, processing times, performance statistics, reviews, or breaking news. Forms show an explicit **Inquiry Review Preview** without fake submission success messages or console logging of sensitive details.
- [ ] **Regulatory Guide Review:** Review local regulations, review dates, and authoritative source links before publishing regulatory guides.

---

## 2. Active Placeholder Tokens (`/lib/utils.ts`)

| Placeholder Token | Meaning / Usage | Current File Location |
| :--- | :--- | :--- |
| `{{VERIFIED_ADDRESS}}` | Reconciled registered office address (resolving website vs. LinkedIn discrepancy) | `/lib/utils.ts`, `/app/contact/page.tsx`, `/app/about/page.tsx`, `/components/layout/Footer.tsx` |
| `{{OPERATIONS_EMAIL}}` | Verified operations email address for flight support inquiries | `/lib/utils.ts`, `/app/contact/page.tsx`, `/app/request-flight-support/page.tsx`, `/components/forms/PermitRequestForm.tsx`, `/components/forms/ContactForm.tsx` |
| `{{PHONE}}` | Verified operations telephone number | `/lib/utils.ts`, `/components/layout/OpsStrip.tsx`, `/components/layout/Footer.tsx`, `/app/contact/page.tsx` |
| `{{WHATSAPP}}` | Verified operations WhatsApp contact | `/lib/utils.ts` |
| `{{COMMERCIAL_EMAIL}}` | Verified commercial & partnerships email | `/lib/utils.ts`, `/app/customer-support/page.tsx` |
| `{{AFTN_SITA_CODE}}` | Verified AFTN / SITA dispatch address (if applicable) | `/lib/utils.ts` |
| `{{AFPA_REGISTRATION_CONFIRMATION}}` | Approved AFPA registration / license reference text | `/lib/utils.ts`, `/app/about/page.tsx` |
| `{{RESPONSE_EXPECTATION_CONFIRMATION}}` | Confirmed operations response expectation / watch hours | `/lib/utils.ts` |

---

## 3. Visual & Downloadable Assets in `/public`

- `/public/img/kcl-logo.svg` — Replace with official KCL vector logo.
- `/public/img/client-qantas.svg`, `client-royal-brunei.svg`, `client-air-mauritius.svg`, `client-cambodia-airways.svg` — Replace with approved partner marks once written authorization is confirmed.
- `/public/img/ops-ramp-handling.svg` & `/public/img/news-ops-desk.svg` — Replace with approved KCL corporate/operations imagery.
- `/public/files/kcl-permit-request-checklist.pdf` — Replace with final branded KCL Flight Inquiry Checklist PDF.

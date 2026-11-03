# Kashmir Corporation Pvt Ltd (KCL) — Website

Official Next.js (App Router) website for **Kashmir Corporation Pvt Ltd (KCL)**, an **AFPA Authorized Flight Permission Agent** and 24/7 flight operation service provider in Pakistan.

---

## 1. Local Development

### Prerequisites

- Node.js 20+ and npm

### Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Start the development server
npm run dev
```

Open `http://localhost:3000`.

### Production Build & Lint Verification

```bash
npm run lint
npm run build
npm run start
```

---

## 2. Deploying to Vercel (Zero Config)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project into [Vercel](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables (e.g., `https://kclpakistan.com`).
4. Click **Deploy**. Next.js App Router, static routes, ISR (`/news`), `sitemap.xml`, `robots.txt`, and dynamic Open Graph images work out of the box with zero extra configuration.

---

## 3. How to Replace Placeholders

All missing phone numbers, emails, office addresses, and lead-time figures are documented in [`/content/TODO.md`](./content/TODO.md).

- Edit `/lib/utils.ts` (`SITE_CONFIG`) to update phone numbers, emails, office address, AFTN/SITA code, and target response time.
- Edit `/content/permits.ts` and `/content/services.ts` to replace `{{LEAD_TIME_...}}` and `{{VALIDITY_...}}` tokens once verified.

---

## 4. How to Add a News Post (MDX)

News posts live in `/content/news/*.mdx` and are automatically included in `/news` and `/sitemap.xml`.

1. Create a new `.mdx` file in `/content/news/your-article-slug.mdx`.
2. Add the required frontmatter at the top:

```mdx
---
title: "Your Article Title"
slug: "your-article-slug"
date: "2026-11-10"
category: "Dispatch Operations"
author: "KCL Flight Operations Desk"
readingTime: "4 min read"
coverImage: "/img/news-ops-desk.svg"
coverAlt: "Descriptive alt text for the cover image"
excerpt: "Short 1-2 sentence summary under 155 characters for SEO."
relatedSlugs:
  - "what-is-a-flight-permission-agent"
---

## First Section Heading

Write your article content here in clean Markdown.
```

---

## 5. How to Add a Country Page to the Permit Directory

Country permit guides are data-driven from `/content/permits.ts`.

1. Open `/content/permits.ts`.
2. Append a new `CountryPermitGuide` object to `COUNTRY_PERMIT_GUIDES` with its `slug`, `countryName`, `isoCode`, `firCodes`, `caaAuthorityName`, `primaryAirports`, `requirements` (`schedule` and `non-schedule` for `overflight` and `landing`), and `faqs`.
3. Next.js will automatically generate `/permit-directory/[slug]`, add the country to the interactive **Permit Checker**, and include the URL in `/sitemap.xml`.

---

## 6. How to Swap in Supabase

All data access is abstracted behind repository interfaces in `/lib/data/interfaces.ts`:

- `PermitRequestRepository` (`/lib/data/permit-repository.ts`)
- `ContactMessageRepository` (`/lib/data/contact-repository.ts`)
- `NewsletterRepository` (`/lib/data/newsletter-repository.ts`)
- `NewsRepository` (`/lib/data/news-repository.ts`)

### Steps to Connect Supabase:

1. Create a new Supabase project and run the SQL migration in `/supabase/schema.sql` in the Supabase SQL Editor.
2. Install `@supabase/supabase-js`:
   ```bash
   npm install @supabase/supabase-js
   ```
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` and Vercel Environment Variables.
4. Update the repository classes in `/lib/data/permit-repository.ts`, `/lib/data/contact-repository.ts`, and `/lib/data/newsletter-repository.ts` to insert rows into `public.permit_requests`, `public.contact_messages`, and `public.newsletter_subscribers` instead of logging to the console. No React components or Server Actions need to be modified.


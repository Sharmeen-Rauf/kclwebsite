import React from "react";
import { SITE_CONFIG } from "@/lib/utils";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    alternateName: "KCL Pakistan",
    slogan: SITE_CONFIG.tagline,
    description:
      "AFPA Authorized Flight Permission Agent and flight operation service provider in Pakistan for schedule and non-schedule flight permits, ground handling, catering, fuel supply and crew accommodation.",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/img/kcl-logo.svg`,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "24/7 Flight Operations Desk",
        telephone: SITE_CONFIG.opsPhonePlaceholder,
        email: SITE_CONFIG.opsEmailPlaceholder,
        availableLanguage: ["English", "Urdu"],
      },
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function buildServiceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: `${SITE_CONFIG.url}${input.path}`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
  };
}

export function buildFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: {
      "@type": "Organization",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/img/kcl-logo.svg`,
      },
    },
    image: `${SITE_CONFIG.url}${input.image}`,
    mainEntityOfPage: `${SITE_CONFIG.url}/news/${input.slug}`,
  };
}


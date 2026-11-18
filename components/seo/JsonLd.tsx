import React from "react";
import { SITE_CONFIG } from "@/lib/utils";
import { KCL_FACTS } from "@/content/facts";

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
    name: SITE_CONFIG.brandName,
    legalName: SITE_CONFIG.name,
    alternateName: "KCL International Flight Support",
    slogan: SITE_CONFIG.tagline,
    description: KCL_FACTS.coverage.statement,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/img/kclf%20final%20logo.png`,
    parentOrganization: {
      "@type": "Organization",
      name: "Kashmirwala Group",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "AFPA Licence",
      identifier: SITE_CONFIG.afpaLicence,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: SITE_CONFIG.afpaIssuer,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Head Office, 4th Floor, NACON NHOWA Tower, M.D.M. Wafai Road",
      addressLocality: "Karachi",
      postalCode: "74200",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.instagram.com/kcl_afpa",
      "https://www.facebook.com/profile.php?id=61574059260242",
      "https://www.linkedin.com/company/kashmir-corporation-pvt-ltd",
    ],
    areaServed: [
      "Pakistan",
      "Bahrain",
      "Qatar",
      "Kenya",
      "Central African Republic",
      "Togo",
      "Ghana",
      "Mauritius",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "24/7 urgent escalation line",
        telephone: SITE_CONFIG.opsPhone,
        email: SITE_CONFIG.opsEmail,
        availableLanguage: ["English", "Urdu"],
      },
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: SITE_CONFIG.supportEmail,
        availableLanguage: ["English", "Urdu"],
      },
      {
        "@type": "ContactPoint",
        contactType: "General Inquiries",
        email: SITE_CONFIG.infoEmail,
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
        url: `${SITE_CONFIG.url}/img/kclf%20final%20logo.png`,
      },
    },
    image: `${SITE_CONFIG.url}${input.image}`,
    mainEntityOfPage: `${SITE_CONFIG.url}/news/${input.slug}`,
  };
}


import React from "react";
import { JsonLd, buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumbs component
 * Injects Schema.org BreadcrumbList JSON-LD for search engine crawlers (SEO)
 * without rendering a visual breadcrumb trail above the hero section.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullTrail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return <JsonLd data={buildBreadcrumbJsonLd(fullTrail)} />;
}

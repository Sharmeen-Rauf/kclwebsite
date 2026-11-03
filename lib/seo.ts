import type { Metadata } from "next";
import { SITE_CONFIG } from "./utils";

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  omitTitleSuffix?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  publishedTime,
  omitTitleSuffix = false,
}: PageSeoInput): Metadata {
  const fullTitle =
    omitTitleSuffix || title.endsWith(" | KCL") || title.includes("KCL")
      ? title
      : `${title} | KCL`;
  const canonicalPath = path === "/" ? "" : path.replace(/\/$/, "");
  const canonicalUrl = `${SITE_CONFIG.url}${canonicalPath}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: ogType,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

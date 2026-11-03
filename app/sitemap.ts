import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/utils";
import { SERVICES_DATA } from "@/content/services";
import { COUNTRY_PERMIT_GUIDES } from "@/content/permits";
import { newsRepository } from "@/lib/data/news-repository";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pakistan/flight-permissions",
    "/request-flight-support",
    "/aviation-resources",
    "/insights",
    "/contact",
    "/customer-support",
    "/permit-directory",
    "/tools",
    "/tools/icao-phonetic-alphabet",
    "/tools/aircraft-registration-prefixes",
    "/tools/utc-time-converter",
    "/clients",
    "/privacy-policy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === "" ||
      route === "/request-flight-support" ||
      route === "/pakistan/flight-permissions"
        ? 1.0
        : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES_DATA.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const countryEntries: MetadataRoute.Sitemap = COUNTRY_PERMIT_GUIDES.map(
    (country) => ({
      url: `${baseUrl}/permit-directory/${country.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  const posts = await newsRepository.getAllPosts();
  const newsEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...countryEntries,
    ...newsEntries,
  ];
}

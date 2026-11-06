import { CONTACT_DATA } from "@/content/contact";

export const SITE_CONFIG = {
  name: "Kashmir Corporation (Pvt.) Ltd.",
  brandName: "KCL International Flight Support",
  shortName: "KCL",
  tagline: "International Flight Support. Coordinated with Confidence.",
  authorityBadge: "International Flight Support & Aviation Services",
  pakistanSpecializationBadge: "AFPA Authorized Flight Permission Agent (Pakistan)",
  heritageNote: "Backed by the Kashmirwala Group, serving aviation since 1947.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kclpk.org",
  opsPhone: CONTACT_DATA.primaryPhone,
  secondaryPhone: CONTACT_DATA.secondaryPhone,
  phones: CONTACT_DATA.phones,
  opsEmail: CONTACT_DATA.opsEmail,
  infoEmail: CONTACT_DATA.infoEmail,
  supportEmail: CONTACT_DATA.supportEmail,
  address: CONTACT_DATA.address,
  social: CONTACT_DATA.social,
  // Backward compatibility getters
  opsPhonePlaceholder: CONTACT_DATA.primaryPhone,
  opsWhatsappPlaceholder: CONTACT_DATA.primaryPhone,
  opsEmailPlaceholder: CONTACT_DATA.opsEmail,
  commercialEmailPlaceholder: CONTACT_DATA.infoEmail,
  aftnSitaPlaceholder: "Available upon formal dispatch handling request",
  addressPlaceholder: CONTACT_DATA.address,
  afpaLicensePlaceholder: "AFPA Authorized (Pakistan Civil Aviation Authority)",
  responseTimePlaceholder: "24/7 Operations Desk",
} as const;

export function formatClassNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

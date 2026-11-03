export const SITE_CONFIG = {
  name: "Kashmir Corporation (Pvt.) Ltd.",
  brandName: "KCL International Flight Support",
  shortName: "KCL",
  tagline: "International Flight Support. Coordinated with Confidence.",
  authorityBadge: "International Flight Support & Aviation Services",
  pakistanSpecializationBadge:
    "Pakistan Flight Permission Facilitation (AFPA wording awaiting confirmation)",
  heritageNote:
    "Associated with Kashmirwala Group (heritage dating to 1947; distinct from KCL incorporation date)",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kclpakistan.com",
  opsPhonePlaceholder: "{{PHONE}}",
  opsWhatsappPlaceholder: "{{WHATSAPP}}",
  opsEmailPlaceholder: "{{OPERATIONS_EMAIL}}",
  commercialEmailPlaceholder: "{{COMMERCIAL_EMAIL}}",
  aftnSitaPlaceholder: "{{AFTN_SITA_CODE}}",
  addressPlaceholder: "{{VERIFIED_ADDRESS}}",
  afpaLicensePlaceholder: "{{AFPA_REGISTRATION_CONFIRMATION}}",
  responseTimePlaceholder: "{{OPERATIONS_HOURS_AND_SLA}}",
} as const;

export function formatClassNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

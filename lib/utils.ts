import { CONTACT_DATA } from "@/content/contact";
import { KCL_FACTS, renderFact } from "@/content/facts";

export const SITE_CONFIG = {
  name: renderFact(KCL_FACTS.entity.legalName) || "Kashmir Corporation (Private) Limited",
  brandName: renderFact(KCL_FACTS.entity.tradingName) || "KCL International Flight Support",
  shortName: "KCL",
  tagline: KCL_FACTS.coverage.shortStatement,
  authorityBadge: "Pakistan Filing & Regional Flight Support",
  pakistanSpecializationBadge: `${renderFact(KCL_FACTS.entity.afpaLicence)} (${renderFact(KCL_FACTS.entity.issuer)})`,
  heritageNote:
    renderFact(KCL_FACTS.entity.groupStatement) ||
    "Part of the Kashmirwala Group, founded in 1947.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kclpk.org",
  opsPhone: CONTACT_DATA.primaryPhone,
  secondaryPhone: CONTACT_DATA.secondaryPhone,
  phones: CONTACT_DATA.phones,
  opsEmail: CONTACT_DATA.opsEmail,
  infoEmail: CONTACT_DATA.infoEmail,
  supportEmail: CONTACT_DATA.supportEmail,
  address: CONTACT_DATA.address,
  social: CONTACT_DATA.social,
  escalationLabel: CONTACT_DATA.escalationLabel,
  afpaLicence: renderFact(KCL_FACTS.entity.afpaLicence) || "AFPA/001/2024",
  afpaIssuer:
    renderFact(KCL_FACTS.entity.issuer) || "Pakistan Civil Aviation Authority",
  timezone: renderFact(KCL_FACTS.entity.timezone) || "PKT (UTC+5)",
  // Backward compatibility getters (no invented SITA/AFTN/WhatsApp)
  opsPhonePlaceholder: CONTACT_DATA.primaryPhone,
  opsWhatsappPlaceholder: CONTACT_DATA.whatsapp || "",
  opsEmailPlaceholder: CONTACT_DATA.opsEmail,
  commercialEmailPlaceholder: CONTACT_DATA.infoEmail,
  aftnSitaPlaceholder: "",
  addressPlaceholder: CONTACT_DATA.address,
  afpaLicensePlaceholder: `${renderFact(KCL_FACTS.entity.afpaLicence)} (${renderFact(KCL_FACTS.entity.issuer)})`,
  responseTimePlaceholder: CONTACT_DATA.escalationLabel,
} as const;

export function formatClassNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

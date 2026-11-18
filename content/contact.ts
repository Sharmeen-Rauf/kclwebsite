import { KCL_FACTS, renderFact } from "@/content/facts";

export interface ContactDetails {
  primaryPhone: string;
  secondaryPhone: string;
  phones: string[];
  opsEmail: string;
  infoEmail: string;
  supportEmail: string;
  address: string;
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  phone: string;
  email: string;
  linkedinUrl: string;
  escalationLabel: string;
  whatsapp: string | null;
}

export function isRealContactValue(val?: string | null): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  if (!trimmed) return false;
  if (trimmed.includes("{{") || trimmed.includes("}}")) return false;
  return true;
}

const primaryPhone = renderFact(KCL_FACTS.contact.primaryPhone) || "+92 320 5486243";
const opsEmail = renderFact(KCL_FACTS.contact.opsEmail) || "ops@kclpk.org";
const infoEmail = renderFact(KCL_FACTS.contact.infoEmail) || "info@kclpk.org";
const supportEmail = renderFact(KCL_FACTS.contact.supportEmail) || "cs@kclpk.org";
const address =
  renderFact(KCL_FACTS.contact.address) ||
  "Head Office, 4th Floor, NACON NHOWA Tower, M.D.M. Wafai Road, Karachi 74200, Pakistan";
const escalationLabel =
  renderFact(KCL_FACTS.contact.escalationLabel) || "24/7 urgent escalation line";
const whatsapp = renderFact(KCL_FACTS.contact.whatsapp);

export const CONTACT_DATA: ContactDetails = {
  primaryPhone,
  secondaryPhone: "",
  phones: [primaryPhone],
  opsEmail,
  infoEmail,
  supportEmail,
  address,
  social: { ...KCL_FACTS.contact.social },
  phone: primaryPhone,
  email: opsEmail,
  linkedinUrl: KCL_FACTS.contact.social.linkedin,
  escalationLabel,
  whatsapp,
};

export const CONTACT_DETAILS = CONTACT_DATA;

export interface ContactDetails {
  phone?: string;
  email?: string;
  address?: string;
  linkedinUrl: string;
}

export function isRealContactValue(val?: string): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith("{{") && trimmed.endsWith("}}")) return false;
  return true;
}

export const CONTACT_DETAILS: ContactDetails = {
  phone: "",
  email: "ops@kclpakistan.com",
  address: "",
  linkedinUrl: "https://www.linkedin.com/company/kcl-international-flight-support/",
};

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
}

export function isRealContactValue(val?: string): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith("{{") && trimmed.endsWith("}}")) return false;
  return true;
}

export const CONTACT_DATA: ContactDetails = {
  primaryPhone: "+92 326 8088706",
  secondaryPhone: "+92 333 2334171",
  phones: ["+92 326 8088706", "+92 333 2334171"],
  opsEmail: "ops@kclpk.org",
  infoEmail: "info@kclpk.org",
  supportEmail: "cs@kclpk.org",
  address:
    "Head Office, 4th Floor, NACON NHOWA Tower, M.D.M. Wafai Road, Karachi 74200, Pakistan",
  social: {
    instagram: "https://instagram.com/kcl_afpa",
    facebook: "https://facebook.com/profile.php?id=61574059260242",
    linkedin: "https://linkedin.com/company/kashmir-corporation-pvt-ltd",
  },
  phone: "+92 326 8088706",
  email: "ops@kclpk.org",
  linkedinUrl: "https://linkedin.com/company/kashmir-corporation-pvt-ltd",
};

export const CONTACT_DETAILS = CONTACT_DATA;

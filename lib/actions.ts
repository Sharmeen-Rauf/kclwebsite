"use server";

import {
  permitRequestSchema,
  contactMessageSchema,
  newsletterSchema,
} from "./validations";

export interface ActionState {
  status: "idle" | "preview" | "error";
  message?: string;
  referenceId?: string;
  previewSummary?: {
    operatorName: string;
    contactName: string;
    email: string;
    phoneOrWhatsapp?: string;
    flightType: string;
    permitType: string;
    routeFrom: string;
    routeTo: string;
    dateTimeUtc: string;
    aircraftTypeAndReg: string;
    servicesNeeded: string[];
    notes?: string;
  };
  contactPreview?: {
    name: string;
    company: string;
    email: string;
    subject: string;
    message: string;
  };
  fieldErrors?: Record<string, string[]>;
}

/**
 * Rule 8 & Section 17 Compliance:
 * Until a real backend (Supabase) or verified email handoff is configured,
 * validate inputs and return a clearly labeled Inquiry Review Preview.
 * Never display a fabricated submission success message or log sensitive
 * inquiry details to the server console.
 */
export async function submitPermitRequestAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const honeypot = String(formData.get("websiteHoneypot") || "");
  if (honeypot.length > 0) {
    return { status: "idle" };
  }

  const rawData = {
    operatorName: String(formData.get("operatorName") || ""),
    contactName: String(formData.get("contactName") || ""),
    email: String(formData.get("email") || ""),
    phoneOrWhatsapp: String(formData.get("phoneOrWhatsapp") || ""),
    flightType: String(formData.get("flightType") || "non-schedule"),
    permitType: String(formData.get("permitType") || "overflight"),
    routeFrom: String(formData.get("routeFrom") || ""),
    routeTo: String(formData.get("routeTo") || ""),
    dateTimeUtc: String(formData.get("dateTimeUtc") || ""),
    aircraftTypeAndReg: String(formData.get("aircraftTypeAndReg") || ""),
    servicesNeeded: formData.getAll("servicesNeeded").map(String),
    notes: String(formData.get("notes") || ""),
    websiteHoneypot: honeypot,
  };

  const parsed = permitRequestSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields below.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  return {
    status: "preview",
    message:
      "Inquiry summary prepared for review. Until live backend/email handoff is connected, review your formatted flight support brief below and send via KCL's confirmed operational channel.",
    previewSummary: {
      operatorName: parsed.data.operatorName,
      contactName: parsed.data.contactName,
      email: parsed.data.email,
      phoneOrWhatsapp: parsed.data.phoneOrWhatsapp,
      flightType: parsed.data.flightType,
      permitType: parsed.data.permitType,
      routeFrom: parsed.data.routeFrom,
      routeTo: parsed.data.routeTo,
      dateTimeUtc: parsed.data.dateTimeUtc,
      aircraftTypeAndReg: parsed.data.aircraftTypeAndReg,
      servicesNeeded: parsed.data.servicesNeeded,
      notes: parsed.data.notes,
    },
  };
}

export async function submitContactMessageAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const honeypot = String(formData.get("websiteHoneypot") || "");
  if (honeypot.length > 0) {
    return { status: "idle" };
  }

  const rawData = {
    name: String(formData.get("name") || ""),
    company: String(formData.get("company") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    subject: String(formData.get("subject") || ""),
    message: String(formData.get("message") || ""),
    websiteHoneypot: honeypot,
  };

  const parsed = contactMessageSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the required fields below.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  return {
    status: "preview",
    message:
      "Inquiry preview prepared. Until live backend/email handoff is connected, transmit the formatted inquiry below through KCL's confirmed contact channel.",
    contactPreview: {
      name: parsed.data.name,
      company: parsed.data.company,
      email: parsed.data.email,
      subject: parsed.data.subject,
      message: parsed.data.message,
    },
  };
}

export async function submitNewsletterAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const honeypot = String(formData.get("websiteHoneypot") || "");
  if (honeypot.length > 0) {
    return { status: "idle" };
  }

  const rawData = {
    email: String(formData.get("email") || ""),
    websiteHoneypot: honeypot,
  };

  const parsed = newsletterSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please enter a valid work email address.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  return {
    status: "preview",
    message:
      "Preview mode: Newsletter backend (Supabase) is not yet connected. No email address was stored or logged.",
  };
}

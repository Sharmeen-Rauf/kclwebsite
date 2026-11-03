import { z } from "zod";

export const permitRequestSchema = z.object({
  operatorName: z
    .string()
    .trim()
    .min(2, "Enter the airline or operator name."),
  contactName: z
    .string()
    .trim()
    .min(2, "Enter the dispatcher or contact person name."),
  email: z
    .string()
    .trim()
    .email("Enter a valid operations or work email address."),
  phoneOrWhatsapp: z
    .string()
    .trim()
    .min(6, "Enter a valid 24/7 phone or WhatsApp number with country code."),
  flightType: z.enum(["schedule", "non-schedule"], {
    errorMap: () => ({ message: "Select schedule or non-schedule flight type." }),
  }),
  permitType: z.enum(["overflight", "landing", "both"], {
    errorMap: () => ({ message: "Select overflight, landing, or both." }),
  }),
  routeFrom: z
    .string()
    .trim()
    .min(3, "Enter departure ICAO/IATA or city (e.g., OMDB)."),
  routeTo: z
    .string()
    .trim()
    .min(3, "Enter destination ICAO/IATA or city (e.g., OPKC or WSSS)."),
  dateTimeUtc: z
    .string()
    .trim()
    .min(4, "Enter planned date and time in UTC (e.g., 15 NOV 2026 / 0630Z)."),
  aircraftTypeAndReg: z
    .string()
    .trim()
    .min(3, "Enter aircraft type and registration (e.g., B77W / AP-BGZ)."),
  servicesNeeded: z.array(z.string()).default([]),
  notes: z.string().trim().max(2000).optional(),
  websiteHoneypot: z.string().max(0).optional(),
});

export type PermitRequestInput = z.infer<typeof permitRequestSchema>;

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  company: z.string().trim().min(2, "Enter your airline or organization name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(3, "Enter a brief subject."),
  message: z
    .string()
    .trim()
    .min(10, "Enter your operational or commercial inquiry (at least 10 characters)."),
  websiteHoneypot: z.string().max(0).optional(),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid work email address."),
  websiteHoneypot: z.string().max(0).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;


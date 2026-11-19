import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MotionStaggerGrid, MotionStaggerItem } from "@/components/ui/MotionPrimitives";

export const metadata = buildMetadata({
  title: "Contact KCL International Flight Support",
  description:
    "Contact KCL for flight permissions, ground handling, fuel, planning, airport slot and crew logistics inquiries.",
  path: "/contact",
  omitTitleSuffix: true,
});

const GUIDANCE_CARDS = [
  {
    kicker: "01 · Operations",
    title: "Flight Operations Inquiries",
    description:
      "For permits and time-sensitive flight coordination, use the verified operational contact information approved by KCL management.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
  },
  {
    kicker: "02 · Partnerships",
    title: "Business Partnerships",
    description:
      "For aviation service partnerships, supplier coordination or commercial inquiries, share your company, operating regions and proposed scope.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    kicker: "03 · Preparation",
    title: "Details to Include",
    description:
      "Operator name, route, aircraft registration/type, intended UTC times, flight purpose and requested services help make the inquiry actionable.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <InnerHero
        kicker="Flight operations & commercial inquiries"
        title="Contact KCL International Flight Support"
        subtitle="Start with the Flight. We'll Discuss the Support."
        description="Tell us what you are planning and which services you need. A clear itinerary and operational contact help us understand the scope of your inquiry and coordinate the next steps."
        imageSrc="/img/services/06-ops.webp"
        imageAlt="KCL 24/7 flight operations and dispatch coordination desk"
        buttons={[
          {
            label: "Request Flight Support",
            href: "/request-flight-support",
            variant: "primary",
          },
          {
            label: "Send an Inquiry",
            href: "#contact-form",
            variant: "outline",
          },
        ]}
      />

      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Top 3 Guidance Cards */}
          <MotionStaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUIDANCE_CARDS.map((card) => (
              <MotionStaggerItem key={card.title}>
                <div className="group relative overflow-hidden bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[8px] p-6 space-y-3 h-full shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 motion-reduce:transition-none"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#B88200]">
                      {card.kicker}
                    </span>
                    <div className="w-9 h-9 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#0B2545] flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>
                  <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                    {card.title}
                  </h2>
                  <p className="text-base text-[#475569] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStaggerGrid>

          {/* Main Split: Inquiry Form (7 Cols) + Deep Navy Operations Hub (5 Cols) */}
          <div id="contact-form" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 space-y-6">
              {/* Deep Navy Operations Hub Card */}
              <div className="relative overflow-hidden bg-[#0B2545] text-white rounded-[8px] border border-[#1E3A5F] border-t-4 border-t-[#F4C400] p-6 sm:p-7 space-y-5 shadow-lg">
                {/* Subtle aircraft watermark */}
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -right-6 -bottom-6 w-40 h-40 text-white/[0.04] pointer-events-none"
                >
                  <path
                    d="M95 25L55 48L22 38L14 46L42 62L30 82L16 80L10 86L28 92L34 110L40 104L38 90L58 78L74 106L82 98L72 65L95 25Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/15 pb-4">
                  <div className="bg-white rounded-[4px] px-2.5 py-1.5 inline-block">
                    <Image
                      src="/img/kclf final logo.png"
                      alt="KCL Flight Support — Kashmir Corporation (Pvt.) Ltd. Official Logo"
                      width={130}
                      height={53}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    24/7 Operations Desk
                  </span>
                </div>

                <div className="relative z-10 space-y-1.5">
                  <h2 className="no-accent-bar text-xl sm:text-2xl font-bold text-white">
                    Direct Operations &amp; Head Office
                  </h2>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Reach our flight coordination team directly for permits, handling, fuel, catering, and crew logistics.
                  </p>
                </div>

                <dl className="relative z-10 space-y-4 text-base pt-1">
                  {/* Telephones */}
                  <div className="bg-[#081B33]/80 border border-white/10 rounded-[6px] p-4 space-y-1.5">
                    <dt className="text-sm font-bold text-[#F4C400]">
                      24/7 Telephones
                    </dt>
                    <dd className="flex flex-col gap-1 text-base font-bold text-white">
                      <a
                        href={`tel:${SITE_CONFIG.opsPhone.replace(/\s+/g, "")}`}
                        className="hover:text-[#F4C400] transition-colors"
                      >
                        {SITE_CONFIG.opsPhone}
                      </a>
                      {SITE_CONFIG.secondaryPhone && (
                        <a
                          href={`tel:${SITE_CONFIG.secondaryPhone.replace(/\s+/g, "")}`}
                          className="hover:text-[#F4C400] transition-colors"
                        >
                          {SITE_CONFIG.secondaryPhone}
                        </a>
                      )}
                    </dd>
                  </div>

                  {/* Email Channels */}
                  <div className="bg-[#081B33]/80 border border-white/10 rounded-[6px] p-4 space-y-2">
                    <dt className="text-sm font-bold text-[#F4C400]">
                      Email Channels
                    </dt>
                    <dd className="space-y-1.5 text-sm sm:text-base">
                      <div>
                        <span className="text-slate-300">Operations Desk: </span>
                        <a href={`mailto:${SITE_CONFIG.opsEmail}`} className="font-bold text-white hover:text-[#F4C400] hover:underline">
                          {SITE_CONFIG.opsEmail}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-300">General Inquiries: </span>
                        <a href={`mailto:${SITE_CONFIG.infoEmail}`} className="font-semibold text-white hover:text-[#F4C400] hover:underline">
                          {SITE_CONFIG.infoEmail}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-300">Customer Support: </span>
                        <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="font-semibold text-white hover:text-[#F4C400] hover:underline">
                          {SITE_CONFIG.supportEmail}
                        </a>
                      </div>
                    </dd>
                  </div>

                  {/* Head Office Address */}
                  <div className="border-t border-white/15 pt-3 space-y-1">
                    <dt className="text-sm font-bold text-[#F4C400]">
                      Head Office Address
                    </dt>
                    <dd className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {SITE_CONFIG.address}
                    </dd>
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-white/15 pt-3 flex items-center justify-between gap-2">
                    <dt className="text-sm font-semibold text-slate-300">
                      Social Channels
                    </dt>
                    <dd className="text-sm text-white flex items-center gap-3">
                      <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4C400] hover:underline font-semibold">LinkedIn</a>
                      <span className="text-slate-500">·</span>
                      <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4C400] hover:underline font-semibold">Facebook</a>
                      <span className="text-slate-500">·</span>
                      <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4C400] hover:underline font-semibold">Instagram</a>
                    </dd>
                  </div>
                </dl>

                <div className="relative z-10 pt-2">
                  <Link
                    href="/request-flight-support"
                    className="w-full bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] min-h-[46px] px-5 py-3 font-bold text-base inline-flex items-center justify-center rounded-[4px] transition-colors shadow-sm"
                  >
                    Request Flight Support →
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-[#CBD5E1] rounded-[8px] p-6 shadow-xs">
                <NewsletterForm />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

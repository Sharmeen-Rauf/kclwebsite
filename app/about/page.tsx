import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd, buildOrganizationJsonLd } from "@/components/seo/JsonLd";
import { CONTACT_DATA } from "@/content/contact";

export const metadata = buildMetadata({
  title: "About KCL | International Flight Support & Permits",
  description:
    "KCL International Flight Support is part of the Kashmirwala Group, serving aviation since 1947. Permits, handling, fuel, catering and crew services worldwide.",
  path: "/about",
  omitTitleSuffix: true,
});

const LEADERSHIP_TIMELINE = [
  {
    initials: "FA",
    name: "Haji Fazal Ahmed Kashmirwala",
    role: "Founder",
    details: null,
  },
  {
    initials: "AA",
    name: "Aftab Ahmed Kashmirwala",
    role: "Chairman 1960 to 2013",
    details: "Trained by his father, led the company's work with foreign airlines.",
  },
  {
    initials: "SA",
    name: "Shakil Aftab Kashmirwala",
    role: "Chairman 2013 to present",
    details: null,
  },
  {
    initials: "OS",
    name: "Omer Shakil Kashmirwala",
    role: "Chief Executive Officer",
    details:
      "Head of Cargo; background in airline sales, marketing, reservations and ticketing; studying Aviation Business Administration at Embry-Riddle Aeronautical University.",
  },
  {
    initials: "OW",
    name: "Owais Shakil Kashmirwala",
    role: "Director",
    details:
      "Holds a Commercial Pilot Licence, pursuing Certified Flight Instructor qualification.",
  },
];

const EIGHT_SERVICES = [
  {
    name: "Flight Permissions",
    href: "/services/overflight-permits",
    description:
      "Overflight permits, landing permits, PPR coordination, block permits and short-notice clearance, with 24/7 support. Final approvals rest with the civil aviation authorities.",
  },
  {
    name: "Ground Handling",
    href: "/services/ground-handling",
    description:
      "Aircraft, passenger, baggage and cargo handling, fuelling coordination and turnaround management through a trusted global partner network.",
  },
  {
    name: "Aviation Fuel",
    href: "/services/aviation-fuel",
    description:
      "Fuel supply coordination for Jet A1, TS1 and Avgas/100LL, with delivery scheduling, documentation and payment support.",
  },
  {
    name: "Flight Planning and Dispatch",
    href: "/services/flight-planning-dispatch",
    description:
      "Route optimisation, flight planning, ICAO flight plan filing, weather monitoring, NOTAM review and ETOPS/EDTO planning support.",
  },
  {
    name: "Airport Slot Coordination",
    href: "/services/airport-slot-coordination",
    description:
      "Slot requests and timing coordinated alongside your permits.",
  },
  {
    name: "Crew Accommodation and Transport (HOTAC)",
    href: "/services/crew-logistics",
    description:
      "Airport-proximity hotels, short-notice bookings, group bookings and airport-hotel-airport transfers.",
  },
  {
    name: "Inflight Catering",
    href: "/services/inflight-catering",
    description:
      "In-flight meal preparation and supply, special dietary plans, hygienic packaging.",
  },
  {
    name: "24/7 Operations Support",
    href: "/services/operations-support",
    description:
      "Round-the-clock coordination for urgent, ad-hoc, diplomatic and diverted flights.",
  },
];

const LICENCES_AND_MEMBERSHIPS = [
  {
    title: "AFPA License Holder",
    authority: "Pakistan Civil Aviation Authority",
  },
  {
    title: "DTS License Holder",
    authority: "Department of Tourist Services",
  },
  {
    title: "FAGSA",
    authority: "Federation of Airline General Sales Agents",
  },
  {
    title: "TAAP",
    authority: "Travel Agents Association of Pakistan",
  },
  {
    title: "Karachi Chamber of Commerce and Industry",
    authority: "Member",
  },
  {
    title: "Air Cargo Association",
    authority: "Member",
  },
];

export default function AboutPage() {
  const organizationLd = buildOrganizationJsonLd();

  return (
    <>
      <JsonLd data={organizationLd} />
      <Breadcrumbs items={[{ name: "About KCL", path: "/about" }]} />

      {/* 1. Hero & Intro */}
      <section className="bg-[#0B2545] text-white py-14 sm:py-20 border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            About KCL International Flight Support
          </h1>
          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-4xl">
            KCL International Flight Support provides permits, ground handling, fuel, catering and crew services for airlines, private operators, cargo carriers and charter operators worldwide, with a team on call 24/7. We are part of the Kashmirwala Group, which has served aviation since 1947.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
            Our story
          </h2>
          <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
            The Kashmirwala Group was founded in 1947 by Haji Fazal Ahmed Kashmirwala and became a pioneer in Pakistan&apos;s aviation and travel industry, known for passenger and cargo air transportation. Kashmir Corporation was appointed the first General Sales Agent and ground handling agent for the national airline (PIA) at three domestic stations: Hyderabad, Sukkur and Nawab Shah. Today the Group works through Kashmir Corporation (Pvt.) Ltd. and PakTurk Enterprises (Pvt.) Ltd.
          </p>
        </div>
      </section>

      {/* 3. Three Generations of Leadership */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Three generations of leadership
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2">
              Continuous family leadership guiding aviation operations, airline agency representations, and international flight support across eight decades.
            </p>
          </div>

          <div className="relative border-l-2 border-[#CBD5E1] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {LEADERSHIP_TIMELINE.map((leader) => (
              <div key={leader.name} className="relative group">
                {/* Neutral circle with initials */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[41px] sm:-left-[49px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#0B2545] text-[#0B2545] flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs"
                >
                  {leader.initials}
                </div>

                <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 sm:p-6 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                      {leader.name}
                    </h3>
                    <span className="text-base font-semibold text-[#5C6B7A]">
                      {leader.role}
                    </span>
                  </div>
                  {leader.details && (
                    <p className="text-base text-[#16202B] leading-relaxed pt-1">
                      {leader.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              What we do
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2">
              We coordinate the eight core requirements of international flight operations through dedicated 24/7 flight support desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EIGHT_SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[4px] p-6 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    {service.name}
                  </h3>
                  <p className="text-base text-[#16202B] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={service.href}
                    className="text-base font-semibold text-[#0B2545] hover:text-[#133661] underline underline-offset-4 inline-flex items-center gap-1.5"
                  >
                    <span>View service details</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              How we work
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2">
              Our operational approach is built around clarity, speed, and dependable flight coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                One point of contact
              </h3>
              <p className="text-base text-[#16202B] leading-relaxed">
                You work with a dedicated coordinator who oversees all aspects of your flight, keeping permits, handling, fuel and crew services aligned.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                24/7 coordination across time zones
              </h3>
              <p className="text-base text-[#16202B] leading-relaxed">
                Our operations desk operates around the clock to assist with schedule revisions, unexpected turnarounds, technical stops and short-notice clearances.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                Clear communication
              </h3>
              <p className="text-base text-[#16202B] leading-relaxed">
                We share timely updates, confirmed permit numbers and transparent status reports directly with your dispatch and operations control center.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5">
            <p className="text-base font-medium text-[#5C6B7A] text-center">
              Approvals are decided by the relevant civil aviation authorities.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Licences and Memberships */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Licences and memberships
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2">
              KCL operates under official regulatory credentials and recognized aviation trade memberships.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#CBD5E1] rounded-[4px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B2545] text-white">
                  <th className="py-3.5 px-4 sm:px-6 text-base font-semibold border-r border-white/20 w-1/2">
                    License / Organization
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-base font-semibold w-1/2">
                    Issuing Authority / Membership Body
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1] bg-white">
                {LICENCES_AND_MEMBERSHIPS.map((item) => (
                  <tr key={item.title} className="hover:bg-[#F6F8FB] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-base font-semibold text-[#0B2545] border-r border-[#CBD5E1]">
                      {item.title}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-base text-[#16202B]">
                      {item.authority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Contact & Internal Links */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Contact
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2">
              Reach our 24/7 international flight operations desk directly.
            </p>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Address */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#0B2545]">
                  Head Office Address
                </h3>
                <p className="text-base text-[#16202B] leading-relaxed">
                  {CONTACT_DATA.address}
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#0B2545]">
                  Telephone (24/7)
                </h3>
                <div className="space-y-1">
                  {CONTACT_DATA.phones.map((phone) => (
                    <div key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-base text-[#16202B] hover:text-[#0B2545] font-semibold underline underline-offset-4"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#0B2545]">
                  Email Addresses
                </h3>
                <div className="space-y-1 text-base text-[#16202B]">
                  <div>
                    <span className="text-[#5C6B7A]">Operations Desk: </span>
                    <a
                      href={`mailto:${CONTACT_DATA.opsEmail}`}
                      className="font-semibold text-[#0B2545] hover:underline"
                    >
                      {CONTACT_DATA.opsEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#5C6B7A]">General Inquiries: </span>
                    <a
                      href={`mailto:${CONTACT_DATA.infoEmail}`}
                      className="font-semibold text-[#0B2545] hover:underline"
                    >
                      {CONTACT_DATA.infoEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#5C6B7A]">Customer Support: </span>
                    <a
                      href={`mailto:${CONTACT_DATA.supportEmail}`}
                      className="font-semibold text-[#0B2545] hover:underline"
                    >
                      {CONTACT_DATA.supportEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/request-flight-support"
                className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[2px] transition-colors inline-flex items-center gap-2"
              >
                <span>Request Flight Support</span>
                <span aria-hidden="true">→</span>
              </Link>

              {/* 8. Internal links: Services, Permit Directory and Contact */}
              <div className="flex flex-wrap items-center gap-5 text-base">
                <Link
                  href="/services"
                  className="text-[#0B2545] font-semibold hover:underline underline-offset-4"
                >
                  Services
                </Link>
                <span aria-hidden="true" className="text-[#CBD5E1]">
                  |
                </span>
                <Link
                  href="/permit-directory"
                  className="text-[#0B2545] font-semibold hover:underline underline-offset-4"
                >
                  Permit Directory
                </Link>
                <span aria-hidden="true" className="text-[#CBD5E1]">
                  |
                </span>
                <Link
                  href="/contact"
                  className="text-[#0B2545] font-semibold hover:underline underline-offset-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

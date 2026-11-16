import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  COUNTRY_PERMIT_GUIDES,
  getCountryPermitBySlug,
} from "@/content/permits";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { PakistanAirportsAtlas } from "@/components/sections/PakistanAirportsAtlas";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";

interface CountryPermitPageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return COUNTRY_PERMIT_GUIDES.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: CountryPermitPageProps): Promise<Metadata> {
  const { country } = await params;
  const guide = getCountryPermitBySlug(country);

  if (!guide) {
    return buildMetadata({
      title: "Country Permit Guide Not Found",
      description: "Requested country flight permit guide was not found.",
      path: `/permit-directory/${country}`,
    });
  }

  return buildMetadata({
    title: `${guide.countryName} Overflight & Landing Permit Guide`,
    description: `${guide.countryName} (${guide.firCodes.join(
      ", "
    )}) overflight and landing permit requirements, airports, documents and 24/7 filing by KCL.`,
    path: `/permit-directory/${guide.slug}`,
  });
}

export default async function CountryPermitDetailPage({
  params,
}: CountryPermitPageProps) {
  const { country } = await params;
  const guide = getCountryPermitBySlug(country);

  if (!guide) {
    notFound();
  }

  const combinations = [
    {
      title: "Scheduled Overflight Permit",
      flightType: "schedule" as const,
      permitType: "overflight" as const,
      data: guide.requirements.schedule.overflight,
    },
    {
      title: "Scheduled Landing Permit",
      flightType: "schedule" as const,
      permitType: "landing" as const,
      data: guide.requirements.schedule.landing,
    },
    {
      title: "Non-Scheduled Overflight Permit",
      flightType: "non-schedule" as const,
      permitType: "overflight" as const,
      data: guide.requirements["non-schedule"].overflight,
    },
    {
      title: "Non-Scheduled Landing Permit",
      flightType: "non-schedule" as const,
      permitType: "landing" as const,
      data: guide.requirements["non-schedule"].landing,
    },
  ];

  const schemaFaqs = [
    ...guide.faqs,
    ...(guide.slug === "pakistan" ? SERVICE_TOOL_FAQS["pakistan-atlas"] || [] : []),
  ];

  return (
    <>
      <JsonLd data={buildFaqJsonLd(schemaFaqs)} />

      <Breadcrumbs
        items={[
          { name: "Permit Directory", path: "/permit-directory" },
          {
            name: `${guide.countryName} Permit Guide`,
            path: `/permit-directory/${guide.slug}`,
          },
        ]}
      />

      <InnerHero
        title={`${guide.countryName} Overflight & Landing Permit Guide`}
        subtitle="Dispatch Planning Reference for OPKR & OPLR Airspace and International Aerodromes."
        description={guide.summary}
        imageSrc="/img/services/01-permits.webp"
        imageAlt={`${guide.countryName} overflight and landing permit navigation display`}
        buttons={[
          {
            label: `Coordinate a ${guide.countryName} Permit`,
            href: `/request-flight-support?country=${encodeURIComponent(
              guide.countryName
            )}`,
            variant: "primary",
          },
          {
            label: "Download Permit Checklist (PDF)",
            href: "/files/kcl-permit-request-checklist.pdf",
            variant: "outline",
          },
        ]}
        snapshotTitle="Airspace & Authority Snapshot"
        snapshotRows={[
          { label: "Authority", value: guide.caaAuthorityName },
          { label: "Flight Information Regions", value: guide.firCodes.join(", ") },
          { label: "Operations desk", value: "24/7" },
        ]}
      />

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Interactive Checker */}
          <PermitChecker />

          {/* Primary International Airports Table */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-4">
              Primary International Aerodromes in {guide.countryName}
            </h2>
            <div className="overflow-x-auto border border-[#CBD5E1]">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0B2545] text-white font-mono text-xs uppercase">
                    <th className="py-3 px-4 border-r border-slate-700">ICAO</th>
                    <th className="py-3 px-4 border-r border-slate-700">IATA</th>
                    <th className="py-3 px-4 border-r border-slate-700">City</th>
                    <th className="py-3 px-4 border-r border-slate-700">
                      Aerodrome Name
                    </th>
                    <th className="py-3 px-4">KCL Station Coordination</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CBD5E1]">
                  {guide.primaryAirports.map((apt) => (
                    <tr key={apt.icao} className="hover:bg-[#F6F8FB]">
                      <td className="py-3 px-4 font-mono font-bold text-[#0B2545] border-r border-[#CBD5E1]">
                        {apt.icao}
                      </td>
                      <td className="py-3 px-4 font-mono text-[#5C6B7A] border-r border-[#CBD5E1]">
                        {apt.iata}
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#16202B] border-r border-[#CBD5E1]">
                        {apt.city}
                      </td>
                      <td className="py-3 px-4 text-[#16202B] border-r border-[#CBD5E1]">
                        {apt.name}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-[#0B2545]">
                        Permits · Ground Handling · Fuel · Catering · Crew Hotel
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Complete 4-Quadrant Permit Matrix */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                {guide.countryName} Documentation &amp; Lead-Time Matrix by
                Mission Type
              </h2>
              <p className="text-sm text-[#16202B] mt-1">
                Final approval decisions, route conditions, and validity windows
                are determined by the {guide.caaAuthorityName}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {combinations.map((combo) => (
                <div
                  key={combo.title}
                  className="kcl-card bg-white border border-[#CBD5E1] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#CBD5E1]">
                      <h3 className="text-xl font-bold text-[#0B2545]">
                        {combo.title}
                      </h3>
                      <span className="font-mono text-[11px] bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545] px-2 py-0.5 font-semibold">
                        {combo.data.verificationStatus}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
                      <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-2.5">
                        <span className="text-[#5C6B7A] block">LEAD TIME</span>
                        <span className="text-[#0B2545] font-semibold">
                          {combo.data.typicalLeadTime}
                        </span>
                      </div>
                      <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-2.5">
                        <span className="text-[#5C6B7A] block">VALIDITY</span>
                        <span className="text-[#0B2545] font-semibold">
                          {combo.data.validityWindow}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-mono text-xs uppercase text-[#5C6B7A] font-semibold mb-2">
                      Operator Documentation to Prepare:
                    </h4>
                    <ul className="space-y-1.5 text-sm text-[#16202B] mb-4">
                      {combo.data.documentsNeeded.map((doc) => (
                        <li key={doc}>• {doc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#CBD5E1]">
                    <Link
                      href={`/request-permit?flightType=${combo.flightType}&permitType=${combo.permitType}&country=${encodeURIComponent(
                        guide.countryName
                      )}`}
                      className="kcl-btn-primary w-full min-h-[44px] px-4 py-2.5 font-semibold text-sm inline-flex items-center justify-between rounded-[2px]"
                    >
                      <span>Coordinate {combo.title}</span>
                      <span className="font-mono">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {guide.slug === "pakistan" && <PakistanAirportsAtlas />}

          {/* Country FAQs */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-6">
              Frequently Asked Questions: {guide.countryName} Flight Permissions
            </h2>
            <div className="divide-y divide-[#CBD5E1]">
              {guide.faqs.map((faq) => (
                <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-bold text-[#0B2545] mb-1.5">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ClientStrip compact hideHeading />
        </div>
      </section>

      <CtaBanner
        heading={`Operating Through ${guide.countryName} Airspace or Airports?`}
        subheading="Share your route, UTC schedule, and aircraft registration with KCL's 24/7 operations desk to initiate permission and station coordination."
        primaryLabel={`Request ${guide.countryName} Flight Support`}
        primaryHref={`/request-permit?country=${encodeURIComponent(
          guide.countryName
        )}`}
      />
    </>
  );
}

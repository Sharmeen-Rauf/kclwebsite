import React from "react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { KCL_FACTS, renderFact } from "@/content/facts";

export const metadata = buildMetadata({
  title: "Licences and Compliance | KCL International Flight Support",
  description:
    "AFPA licence AFPA/001/2024 issued by the Pakistan Civil Aviation Authority, regulatory disclaimer, and guide review policy.",
  path: "/compliance",
  omitTitleSuffix: true,
});

export default function CompliancePage() {
  const licenceValidity = renderFact(KCL_FACTS.entity.licenceValidity);
  const secp = renderFact(KCL_FACTS.entity.secpRegistration);
  const ntn = renderFact(KCL_FACTS.entity.ntn);

  return (
    <>
      <Breadcrumbs items={[{ name: "Licences and Compliance", path: "/compliance" }]} />

      <InnerHero
        kicker="Regulatory Standing"
        title="Licences and Compliance"
        subtitle="Verified Aviation Authorization and Editorial Review Standards."
        description="Published credentials and regulatory disclosures for Kashmir Corporation (Private) Limited."
        imageSrc="/img/services/01-permits.webp"
        imageAlt="Flight compliance documentation"
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-3">
              <span className="text-sm font-bold text-[#B88200] block">Active Aviation Licence</span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                AFPA Licence {renderFact(KCL_FACTS.entity.afpaLicence)}
              </h2>
              <p className="text-base text-[#16202B]">
                <strong>Issuer:</strong> {renderFact(KCL_FACTS.entity.issuer)}
              </p>
              {licenceValidity && (
                <p className="text-base text-[#16202B]">
                  <strong>Validity:</strong> {licenceValidity}
                </p>
              )}
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-3">
              <span className="text-sm font-bold text-[#B88200] block">Corporate Entity</span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                {renderFact(KCL_FACTS.entity.legalName)}
              </h2>
              <p className="text-base text-[#16202B]">
                <strong>Group:</strong> {renderFact(KCL_FACTS.entity.groupStatement)}
              </p>
              {secp && (
                <p className="text-base text-[#16202B]">
                  <strong>SECP Registration:</strong> {secp}
                </p>
              )}
              {ntn && (
                <p className="text-base text-[#16202B]">
                  <strong>NTN:</strong> {ntn}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-[#0B2545]">How we review our guides</h2>
            <p className="text-base text-[#16202B] leading-relaxed">
              The Operations Manager reviews every permit or regulatory statement before publishing, and each live guide displays its last verified date.
            </p>
            <p className="text-base font-semibold text-[#0B2545] pt-2">
              Approvals are issued by the relevant authorities; KCL coordinates the request.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

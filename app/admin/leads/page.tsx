import React from "react";
import { buildMetadata } from "@/lib/seo";
import { KCL_FACTS } from "@/content/facts";

export const dynamic = "force-dynamic";

export const metadata = {
  ...buildMetadata({
    title: "Internal Leads Summary | KCL",
    description: "Internal leads status and monthly conversion summary.",
    path: "/admin/leads",
  }),
  robots: { index: false, follow: false },
};

interface LeadRow {
  id?: string;
  created_at?: string;
  operator_name?: string;
  route_to?: string;
  status?: string;
  qualified?: boolean;
  first_reply_minutes?: number | null;
}

async function fetchLeads(): Promise<LeadRow[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return [];
  try {
    const res = await fetch(`${url}/rest/v1/leads?select=*&order=created_at.desc&limit=50`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = (await res.json()) as LeadRow[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function AdminLeadsPage() {
  const leads = await fetchLeads();
  const qualifiedCount = leads.filter((l) => l.qualified).length;
  const quotedOrWon = leads.filter((l) => l.status === "Quoted" || l.status === "Won").length;
  const quoteRate =
    qualifiedCount > 0 ? `${Math.round((quotedOrWon / qualifiedCount) * 100)}%` : "N/A";

  return (
    <section className="py-12 bg-[#F8FAFC] min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-sm font-bold text-[#B88200] block">Internal Operations View (Noindex)</span>
          <h1 className="text-3xl font-bold text-[#0B2545]">Leads &amp; Monthly Summary</h1>
          <p className="text-base text-[#5C6B7A]">
            First reply owner: {KCL_FACTS.leadRules.firstReplyOwner} · Commercial reply owner:{" "}
            {KCL_FACTS.leadRules.commercialReplyOwner}
          </p>
        </div>

        {/* Monthly Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5">
            <span className="text-sm text-[#5C6B7A] block">Qualified Enquiries</span>
            <p className="text-2xl font-bold text-[#0B2545]">{qualifiedCount}</p>
          </div>
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5">
            <span className="text-sm text-[#5C6B7A] block">Enquiry-to-Quote Rate</span>
            <p className="text-2xl font-bold text-[#0B2545]">{quoteRate}</p>
          </div>
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5">
            <span className="text-sm text-[#5C6B7A] block">Allowed Statuses</span>
            <p className="text-base font-bold text-[#0B2545]">
              {KCL_FACTS.leadRules.statuses.join(" · ")}
            </p>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] overflow-x-auto">
          <table className="w-full text-left border-collapse text-base">
            <thead className="bg-[#0B2545] text-white">
              <tr>
                <th className="py-3 px-4 font-bold">Operator</th>
                <th className="py-3 px-4 font-bold">Route / Airport</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-4 font-bold">Qualified</th>
                <th className="py-3 px-4 font-bold">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CBD5E1]">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 px-4 text-center text-[#5C6B7A]">
                    No leads recorded yet (connect Supabase `leads` table via environment variables).
                  </td>
                </tr>
              ) : (
                leads.map((lead, idx) => (
                  <tr key={lead.id || idx}>
                    <td className="py-3 px-4 font-semibold text-[#0B2545]">
                      {lead.operator_name || "—"}
                    </td>
                    <td className="py-3 px-4">{lead.route_to || "—"}</td>
                    <td className="py-3 px-4">{lead.status || "New"}</td>
                    <td className="py-3 px-4">{lead.qualified ? "Yes" : "No"}</td>
                    <td className="py-3 px-4">{KCL_FACTS.leadRules.firstReplyOwner}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

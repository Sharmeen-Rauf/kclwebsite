import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Top Questions (Pending Operations Input) | KCL",
    description: "Top operator questions pending Operations confirmation.",
    path: "/resources/top-questions",
  }),
  robots: { index: false, follow: false },
};

export default function TopQuestionsPage() {
  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-[#CBD5E1] rounded-[6px] p-8 space-y-3">
        <h1 className="text-2xl font-bold text-[#0B2545]">
          Top Questions — Pending Operations Confirmation
        </h1>
        <p className="text-base text-[#475569]">
          This resource page is hidden from search indexing until Operations supplies the top ten real operator questions.
        </p>
      </div>
    </section>
  );
}

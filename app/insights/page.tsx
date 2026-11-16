import React from "react";
import { buildMetadata } from "@/lib/seo";
import { newsRepository } from "@/lib/data/news-repository";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { InsightsHubClient } from "@/components/sections/InsightsHubClient";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Aviation Insights & Flight Support Articles | KCL",
  description:
    "Read practical articles on flight permissions, aviation planning, ground operations and flight support from KCL.",
  path: "/insights",
});

export default async function InsightsPage() {
  const posts = await newsRepository.getAllPosts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kclwebsite.vercel.app";

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aviation Insights & Flight Support Articles",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/insights/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <JsonLd data={itemListLd} />
      <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />

      <InnerHero
        title="Aviation Insights & Flight Support Articles"
        subtitle="Practical Perspectives on Aviation Operations."
        description="Our insights are written for the professionals who plan, coordinate and support aircraft movements. They focus on useful context and clear explanations rather than generic industry headlines."
        imageSrc="/img/services/06-ops.webp"
        imageAlt="KCL flight operations dispatch team preparing aviation operational briefings"
        buttons={[
          {
            label: "Browse Glossary & Checklists",
            href: "/aviation-resources",
            variant: "primary",
          },
          {
            label: "Request Flight Support",
            href: "/request-flight-support",
            variant: "outline",
          },
        ]}
        snapshotRows={[
          { label: "Articles", value: `${posts.length} operational guides` },
          { label: "Written by", value: "KCL Flight Operations Desk" },
          { label: "Operations desk", value: "24/7" },
        ]}
      />

      <section className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <InsightsHubClient posts={posts} />
        </div>
      </section>

      <section className="py-8 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ClientStrip compact hideHeading />
        </div>
      </section>

      <CtaBanner
        heading="Explore the Details Behind Better Flight Planning."
        subheading="Browse our aviation glossary and checklists or contact KCL to discuss an upcoming itinerary."
        primaryLabel="Request Flight Support"
        primaryHref="/request-flight-support"
      />
    </>
  );
}

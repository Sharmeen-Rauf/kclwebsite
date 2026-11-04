import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { newsRepository } from "@/lib/data/news-repository";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Aviation Insights & Flight Support Articles | KCL",
  description:
    "Read practical articles on flight permissions, aviation planning, ground operations and flight support from KCL.",
  path: "/insights",
});

const EDITORIAL_CATEGORIES = [
  "Flight Permissions",
  "International Trip Support",
  "Airport Operations",
  "Crew Logistics",
  "Company Updates",
];

const RECOMMENDED_TOPICS = [
  {
    title: "How to Prepare a Flight Support Inquiry",
    category: "International Trip Support",
    reviewedDate: "2026-11-03",
    summary:
      "What operator, aircraft, route, UTC schedule, and service details help reduce back-and-forth when initiating a trip support discussion.",
    serviceLink: "/request-flight-support",
    serviceLabel: "Request Flight Support",
  },
  {
    title: "Overflight vs Landing Permission: What Changes",
    category: "Flight Permissions",
    reviewedDate: "2026-11-03",
    summary:
      "How airspace transit inquiries differ from planned arrivals, and why landing requests connect with airport, handling, fuel, and crew considerations.",
    serviceLink: "/services/overflight-permits",
    serviceLabel: "Overflight Permits",
  },
  {
    title: "Why Airport Slots and Landing Permits Are Not the Same",
    category: "Airport Operations",
    reviewedDate: "2026-11-03",
    summary:
      "Understanding the distinction between civil aviation landing authorizations and airport coordinator slot allocations at slot-controlled aerodromes.",
    serviceLink: "/services/airport-slot-coordination",
    serviceLabel: "Airport Slot Coordination",
  },
  {
    title: "The Role of Ground Handling in a Planned Stop",
    category: "Airport Operations",
    reviewedDate: "2026-11-03",
    summary:
      "Coordinating ramp services, fuel uplift timing, catering delivery, and crew transport around the same arrival and departure window.",
    serviceLink: "/services/ground-handling",
    serviceLabel: "Ground Handling",
  },
];

export default async function InsightsPage() {
  const posts = await newsRepository.getAllPosts();

  return (
    <>
      <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              AVIATION INSIGHTS · EDITORIAL GUIDES FOR OPERATORS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Aviation Insights &amp; Flight Support Articles
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Practical Perspectives on Aviation Operations.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Our insights are written for the professionals who plan,
              coordinate and support aircraft movements. They focus on useful
              context and clear explanations rather than generic industry
              headlines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Editorial Categories & News Integrity Standard */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#CBD5E1] pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                  EDITORIAL CATEGORIES
                </span>
                <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                  Topics Covered Across KCL Insights
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {EDITORIAL_CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className="font-mono text-xs bg-[#F6F8FB] border border-[#CBD5E1] px-3 py-1 text-[#0B2545] font-semibold"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
              <strong className="text-[#0B2545]">
                Article Quality &amp; News Integrity Standard:
              </strong>{" "}
              Articles reflect verified operational concepts, include reference
              sources where relevant, display last-reviewed dates, and link to
              the appropriate commercial service pages. Evergreen educational
              articles are never labeled as breaking news, and official
              regulatory changes are published only after confirming the
              authoritative source and effective date.
            </p>
          </div>

          {/* Recommended Launch Articles / Guides */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              CORE OPERATIONAL GUIDES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Essential Flight Planning &amp; Coordination Briefings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RECOMMENDED_TOPICS.map((topic) => (
                <article
                  key={topic.title}
                  className="kcl-card bg-white border border-[#CBD5E1] p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#5C6B7A]">
                      <span className="bg-[#F6F8FB] border border-[#CBD5E1] px-2 py-0.5 text-[#0B2545] font-semibold">
                        {topic.category}
                      </span>
                      <span>Reviewed: {topic.reviewedDate}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B2545]">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-[#16202B] leading-relaxed">
                      {topic.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                    <span className="font-mono text-[#5C6B7A]">
                      Evergreen Operational Guide
                    </span>
                    <Link
                      href={topic.serviceLink}
                      className="kcl-link text-[#0B2545]"
                    >
                      Related: {topic.serviceLabel} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Full In-Depth Reference Articles from /content/news */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              IN-DEPTH REFERENCE ARTICLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Detailed Guides on Flight Permissions &amp; Preparation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="kcl-card bg-white border border-[#CBD5E1] flex flex-col justify-between"
                >
                  <div>
                    <div className="border-b border-[#CBD5E1] bg-[#0B2545]">
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt}
                        width={800}
                        height={450}
                        className="w-full h-44 object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#5C6B7A]">
                        <span className="bg-[#F6F8FB] border border-[#CBD5E1] px-2 py-0.5 text-[#0B2545] font-semibold">
                          {post.category}
                        </span>
                        <time dateTime={post.date}>Reviewed {post.date}</time>
                      </div>

                      <h3 className="text-xl font-bold text-[#0B2545] leading-snug">
                        <Link
                          href={`/insights/${post.slug}`}
                          className="hover:underline underline-offset-4"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-[#16202B] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-[#CBD5E1] bg-[#F6F8FB] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#5C6B7A]">{post.readingTime}</span>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="font-sans font-bold text-[#0B2545] underline underline-offset-4"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Explore the Details Behind Better Flight Planning."
        subheading="Browse our aviation resource library and preparation checklists or contact KCL to discuss an upcoming itinerary."
        primaryLabel="Read Aviation Resources"
        primaryHref="/aviation-resources"
        secondaryLabel="Request Flight Support"
        secondaryHref="/request-flight-support"
      />
    </>
  );
}


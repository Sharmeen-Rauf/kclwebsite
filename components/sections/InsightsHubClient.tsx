"use client";

import React, { useActionState, useState } from "react";
import Link from "next/link";
import type { NewsPostMeta } from "@/lib/data/interfaces";
import { INSIGHTS_EXTRA_META } from "@/content/insights-summaries";
import { InsightCoverSvg } from "@/components/sections/InsightCoverSvg";
import { submitContactMessageAction, type ActionState } from "@/lib/actions";

const FILTER_CATEGORIES = [
  "All",
  "Flight Permissions",
  "Airport Operations",
  "Dispatch",
  "Company",
] as const;

type FilterCategory = (typeof FILTER_CATEGORIES)[number];

const INITIAL_STATE: ActionState = { status: "idle" };

interface InsightsHubClientProps {
  posts: NewsPostMeta[];
}

export function InsightsHubClient({ posts }: InsightsHubClientProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [questionText, setQuestionText] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [formState, formAction, isPending] = useActionState(
    submitContactMessageAction,
    INITIAL_STATE
  );

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  const getPostCategory = (post: NewsPostMeta) =>
    INSIGHTS_EXTRA_META[post.slug]?.filterCategory || "Flight Permissions";

  const isVisible = (post: NewsPostMeta) =>
    activeCategory === "All" || getPostCategory(post) === activeCategory;

  return (
    <div className="space-y-10">
      {/* Category Filter Chips + How We Write Note */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#CBD5E1] pb-4">
          <h2 className="text-xl font-bold text-[#0B2545]">
            Browse Guides by Topic
          </h2>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {FILTER_CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-base font-medium px-3.5 py-1.5 rounded-[4px] border cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] motion-reduce:transition-none ${
                    active
                      ? "bg-[#0B2545] border-[#0B2545] text-white"
                      : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-base text-[#475569] leading-relaxed">
          <strong className="text-[#0B2545]">How we write our guides:</strong>{" "}
          Written and reviewed by the KCL Flight Operations Desk. Guides are for orientation only; official AIPs, NOTAMs, and civil aviation authority directives always prevail.
        </p>
      </div>

      {/* Featured First Article */}
      {featuredPost && (
        <article
          hidden={!isVisible(featuredPost)}
          className="bg-white border border-[#CBD5E1] rounded-[6px] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <InsightCoverSvg
              kind={
                INSIGHTS_EXTRA_META[featuredPost.slug]?.coverKind || "route-arc"
              }
              alt={featuredPost.coverAlt}
              className="w-full h-64 lg:h-full min-h-[240px]"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-base text-[#475569]">
                <span className="bg-[#F8FAFC] border border-[#CBD5E1] px-2.5 py-0.5 rounded-[4px] text-[#0B2545] font-semibold">
                  {getPostCategory(featuredPost)}
                </span>
                {featuredPost.date && (
                  <time dateTime={featuredPost.date}>
                    Last reviewed: {featuredPost.date}
                  </time>
                )}
              </div>

              <h3 className="text-2xl font-bold text-[#0B2545]">
                <Link
                  href={`/insights/${featuredPost.slug}`}
                  className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
                >
                  {featuredPost.title}
                </Link>
              </h3>

              <p className="text-base text-[#475569] leading-relaxed">
                {featuredPost.excerpt}
              </p>

              {INSIGHTS_EXTRA_META[featuredPost.slug] && (
                <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 space-y-2">
                  <div className="text-base font-bold text-[#0B2545]">
                    In 30 seconds
                  </div>
                  <ul className="space-y-1 text-base text-[#1E293B] list-disc pl-5">
                    {INSIGHTS_EXTRA_META[featuredPost.slug].takeaways.map(
                      (pt) => (
                        <li key={pt}>{pt}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#CBD5E1] flex items-center justify-between text-base">
              <span className="text-[#475569]">{featuredPost.readingTime}</span>
              <Link
                href={`/insights/${featuredPost.slug}`}
                className="font-bold text-[#0B2545] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
              >
                Read guide →
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Three Secondary Articles in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondaryPosts.map((post) => {
          const extra = INSIGHTS_EXTRA_META[post.slug];
          return (
            <article
              key={post.slug}
              hidden={!isVisible(post)}
              className="bg-white border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <InsightCoverSvg
                  kind={extra?.coverKind || "document"}
                  alt={post.coverAlt}
                  className="w-full h-44 border-b border-[#CBD5E1]"
                />
                <div className="p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-base text-[#475569]">
                    <span className="bg-[#F8FAFC] border border-[#CBD5E1] px-2.5 py-0.5 rounded-[4px] text-[#0B2545] font-semibold">
                      {getPostCategory(post)}
                    </span>
                    {post.date && (
                      <time dateTime={post.date}>
                        Last reviewed: {post.date}
                      </time>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2545] leading-snug">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-base text-[#475569] leading-relaxed">
                    {post.excerpt}
                  </p>

                  {extra && (
                    <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-3.5 space-y-1.5">
                      <div className="text-base font-bold text-[#0B2545]">
                        In 30 seconds
                      </div>
                      <ul className="space-y-1 text-base text-[#1E293B] list-disc pl-5">
                        {extra.takeaways.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-5 py-3.5 border-t border-[#CBD5E1] bg-[#F8FAFC] flex items-center justify-between text-base">
                <span className="text-[#475569]">{post.readingTime}</span>
                <Link
                  href={`/insights/${post.slug}`}
                  className="font-bold text-[#0B2545] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
                >
                  Read guide →
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Ask the Desk One-Line Form */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-[#0B2545]">Ask the Desk</h2>
            <p className="text-base text-[#475569]">
              What would you like us to explain next?
            </p>
          </div>

          {formState.status === "preview" ? (
            <div
              role="status"
              aria-live="polite"
              className="text-base font-semibold text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-4 py-2.5"
            >
              Thank you. We read every question.
            </div>
          ) : (
            <form
              action={formAction}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1 md:max-w-xl"
            >
              <input type="hidden" name="name" value="Insights Reader" />
              <input type="hidden" name="company" value="Ask the Desk" />
              <input type="hidden" name="subject" value="Insights topic question" />
              <input
                type="hidden"
                name="message"
                value={`Topic request: ${questionText.trim() || "General question"}`}
              />
              <input
                type="hidden"
                name="email"
                value={emailInput.trim() || "insights-question@kclpk.org"}
              />

              <label htmlFor="ask-desk-topic" className="sr-only">
                What would you like us to explain next?
              </label>
              <input
                id="ask-desk-topic"
                type="text"
                required
                minLength={5}
                placeholder="What would you like us to explain next?"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="flex-1 text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              />
              <label htmlFor="ask-desk-email" className="sr-only">
                Email (optional)
              </label>
              <input
                id="ask-desk-email"
                type="email"
                placeholder="Email (optional)"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="sm:w-44 text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white font-semibold text-base px-5 py-2 rounded-[4px] cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                {isPending ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}


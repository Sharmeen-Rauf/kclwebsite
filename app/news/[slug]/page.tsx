import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { newsRepository } from "@/lib/data/news-repository";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd, buildArticleJsonLd } from "@/components/seo/JsonLd";

export const revalidate = 3600;

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await newsRepository.getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await newsRepository.getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Briefing Not Found",
      description: "The requested aviation briefing could not be found.",
      path: `/news/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title.slice(0, 50),
    description: post.excerpt.slice(0, 152),
    path: `/news/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

function renderInlineFormatting(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-bold text-[#0B2545]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="font-mono text-xs bg-[#F6F8FB] border border-[#CBD5E1] px-1.5 py-0.5 text-[#0B2545]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function renderMdxBody(content: string) {
  const blocks = content.split(/\r?\n\r?\n/);
  return blocks.map((block, index) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="text-2xl font-bold text-[#0B2545] mt-8 mb-3"
        >
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed
        .split(/\r?\n/)
        .map((line) => line.replace(/^-\s+/, ""));
      return (
        <ul
          key={index}
          className="list-disc pl-6 space-y-2 text-[#16202B] my-4"
        >
          {items.map((item, i) => (
            <li key={i}>{renderInlineFormatting(item)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="text-[#16202B] text-base leading-relaxed my-4">
        {renderInlineFormatting(trimmed)}
      </p>
    );
  });
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;
  const post = await newsRepository.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await newsRepository.getAllPosts();
  const relatedPosts = allPosts.filter((p) =>
    post.relatedSlugs.includes(p.slug)
  );

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: post.date,
          author: post.author,
          image: post.coverImage,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Aviation News & Guides", path: "/news" },
          { name: post.title, path: `/news/${post.slug}` },
        ]}
      />

      <article className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-10">
            <header className="border-b border-[#CBD5E1] pb-6 mb-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#5C6B7A]">
                <span className="bg-[#0B2545] text-white border-b-2 border-[var(--accent)] px-2.5 py-1 font-semibold">
                  {post.category}
                </span>
                <time dateTime={post.date}>Published: {post.date}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
                <span>·</span>
                <span>By {post.author}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2545] leading-tight">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-[#5C6B7A]">
                {post.excerpt}
              </p>
            </header>

            <div className="mb-8 border border-[#CBD5E1] bg-[#0B2545]">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                width={800}
                height={450}
                className="w-full h-auto block"
              />
            </div>

            <div className="prose-kcl">{renderMdxBody(post.content)}</div>

            <div className="mt-10 pt-6 border-t border-[#CBD5E1] flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/request-permit"
                className="kcl-btn-primary min-h-[44px] px-5 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Request a Pakistan Flight Permit
              </Link>
              <Link
                href="/services/flight-permission"
                className="kcl-link text-sm font-bold text-[#0B2545]"
              >
                Explore Flight Permission Hub →
              </Link>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-[#0B2545] mb-4">
                Related Dispatch Briefings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.slug}
                    className="kcl-card bg-white border border-[#CBD5E1] p-5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs text-[#5C6B7A] block mb-1">
                        {rel.category} · {rel.readingTime}
                      </span>
                      <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                        <Link
                          href={`/news/${rel.slug}`}
                          className="hover:underline underline-offset-4"
                        >
                          {rel.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-[#16202B]">{rel.excerpt}</p>
                    </div>
                    <Link
                      href={`/news/${rel.slug}`}
                      className="mt-4 text-xs font-bold text-[#0B2545] underline underline-offset-4"
                    >
                      Read Briefing →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <CtaBanner />
    </>
  );
}


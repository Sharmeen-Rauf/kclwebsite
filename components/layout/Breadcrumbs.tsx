import React from "react";
import Link from "next/link";
import { JsonLd, buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullTrail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-[#CBD5E1] py-2.5"
    >
      <JsonLd data={buildBreadcrumbJsonLd(fullTrail)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-[#5C6B7A] font-mono">
          {fullTrail.map((item, index) => {
            const isLast = index === fullTrail.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-[#0B2545]"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-[#0B2545] underline decoration-slate-300 underline-offset-4"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}


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

function isHeroBreadcrumbPath(lastPath: string): boolean {
  if (lastPath === "/tools") return true;
  const heroPrefixes = [
    "/services",
    "/pakistan",
    "/schedule-filing",
    "/non-schedule-filing",
    "/about",
    "/contact",
    "/customer-support",
    "/aviation-resources",
    "/insights",
    "/permit-directory",
    "/request-flight-support",
    "/request-permit",
    "/clients",
  ];
  return heroPrefixes.some(
    (p) => lastPath === p || lastPath.startsWith(`${p}/`)
  );
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullTrail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];
  const lastPath = items[items.length - 1]?.path || "";
  const overHero = isHeroBreadcrumbPath(lastPath);

  return (
    <nav
      aria-label="Breadcrumb"
      className={
        overHero
          ? "relative z-20 pt-22 pb-2 -mb-[116px] bg-transparent border-b border-white/10"
          : "bg-white border-b border-[#CBD5E1] py-2.5"
      }
    >
      <JsonLd data={buildBreadcrumbJsonLd(fullTrail)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol
          className={`flex flex-wrap items-center gap-2 text-xs font-mono ${
            overHero ? "text-slate-300" : "text-[#5C6B7A]"
          }`}
        >
          {fullTrail.map((item, index) => {
            const isLast = index === fullTrail.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className={overHero ? "text-slate-400" : "text-slate-400"}
                  >
                    /
                  </span>
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={`font-semibold ${
                      overHero ? "text-[#F2C200]" : "text-[#0B2545]"
                    }`}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className={
                      overHero
                        ? "hover:text-white underline decoration-white/30 underline-offset-4"
                        : "hover:text-[#0B2545] underline decoration-slate-300 underline-offset-4"
                    }
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

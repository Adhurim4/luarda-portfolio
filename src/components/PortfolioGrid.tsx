"use client";

import { useMemo, useState } from "react";
import {
  portfolioFilters,
  type CaseStudy,
  type PortfolioFilter,
} from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export type PortfolioItem = {
  study: CaseStudy;
  imageUrl?: string;
};

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter(({ study }) => study.tags.includes(activeFilter));
  }, [activeFilter, items]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {portfolioFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`type-nav rounded-[var(--radius-button)] border px-4 py-2 font-medium transition-colors ${
              activeFilter === filter
                ? "border-accent-primary bg-accent-primary text-white"
                : "border-rule bg-white text-stone hover:bg-accent-light"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {filtered.map(({ study, imageUrl }) => (
          <CaseStudyCard key={study.slug} study={study} imageUrl={imageUrl} />
        ))}
      </div>
    </>
  );
}

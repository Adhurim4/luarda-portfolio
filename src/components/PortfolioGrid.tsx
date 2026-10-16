"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  portfolioFilters,
  type CaseStudy,
  type PortfolioFilter,
} from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CaseStudyModal } from "@/components/CaseStudyModal";

export type PortfolioItem = {
  study: CaseStudy;
  imageUrl?: string;
};

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  // Open a case study directly from a link like /portfolio?case=<slug>
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("case");
    if (!slug) return;
    const match = items.find(({ study }) => study.slug === slug);
    if (!match) return;
    const frame = requestAnimationFrame(() => setSelected(match));
    return () => cancelAnimationFrame(frame);
  }, [items]);

  const closeModal = useCallback(() => {
    setSelected(null);
    if (window.location.search) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

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
        {filtered.map((item) => (
          <CaseStudyCard
            key={item.study.slug}
            study={item.study}
            imageUrl={item.imageUrl}
            onOpen={() => setSelected(item)}
          />
        ))}
      </div>

      <CaseStudyModal
        study={selected?.study ?? null}
        imageUrl={selected?.imageUrl}
        onClose={closeModal}
      />
    </>
  );
}

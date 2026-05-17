"use client";

import { useMemo, useState } from "react";
import {
  caseStudies,
  portfolioFilters,
  type CaseStudy,
  type CaseStudyFilter,
} from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CaseStudyModal } from "@/components/CaseStudyModal";

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilter>("all");
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return caseStudies;
    return caseStudies.filter((s) => s.filter === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {portfolioFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveFilter(f.id)}
            className={`type-nav rounded-[var(--radius-button)] border px-4 py-2 font-medium transition-colors ${
              activeFilter === f.id
                ? "border-accent-primary bg-accent-primary text-white"
                : "border-rule bg-white text-stone hover:bg-accent-light"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {filtered.map((study) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            onRead={() => setSelected(study)}
          />
        ))}
      </div>

      <CaseStudyModal study={selected} onClose={() => setSelected(null)} />
    </>
  );
}

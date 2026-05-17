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
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
              activeFilter === f.id
                ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-[var(--white)]"
                : "border-[var(--border-warm)] bg-[var(--white)] text-[var(--stone)] hover:bg-[var(--accent-light)]"
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

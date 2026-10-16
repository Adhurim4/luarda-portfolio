"use client";

import type { CaseStudy } from "@/data/caseStudies";
import { CaseStudyImageZone } from "@/components/CaseStudyImageZone";
import { CaseStudyTags } from "@/components/CaseStudyTags";

type CaseStudyCardProps = {
  study: CaseStudy;
  imageUrl?: string;
  onOpen: () => void;
};

export function CaseStudyCard({ study, imageUrl, onOpen }: CaseStudyCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-refined card-refined--flush group flex flex-col overflow-hidden text-left"
    >
      <CaseStudyImageZone imageUrl={imageUrl} alt={study.title} />

      <div className="card-refined__body flex flex-1 flex-col px-7 py-6 transition-colors">
        <CaseStudyTags study={study} />

        <h2 className="type-section-title mt-4 text-lg md:text-xl">
          {study.title}
        </h2>

        <p className="type-body mt-3">{study.summary}</p>

        <div className="mt-6">
          <p className="type-page-headline text-3xl md:text-4xl">
            {study.resultNumber}
          </p>
          <p className="type-caption mt-1">{study.resultLabel}</p>
          <p className="type-caption mt-2 text-sm">{study.mentions}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {study.coverage.slice(0, 3).map((item) => (
            <span
              key={item.outlet}
              className="type-label rounded-full border border-rule bg-accent-light px-3 py-1 normal-case text-accent-primary"
            >
              {item.outlet}
            </span>
          ))}
        </div>

        <span className="type-nav mt-6 inline-flex font-medium text-accent-primary transition-colors group-hover:text-accent-hover">
          Read case study →
        </span>
      </div>
    </button>
  );
}

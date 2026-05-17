"use client";

import type { CaseStudy } from "@/data/caseStudies";
import { CaseStudyImageZone } from "@/components/CaseStudyImageZone";

type CaseStudyCardProps = {
  study: CaseStudy;
  onRead: () => void;
};

function OutletPills({ outlets }: { outlets: string[] }) {
  const visible = outlets.slice(0, 3);
  const rest = outlets.length - visible.length;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((outlet) => (
        <span
          key={outlet}
          className="type-label rounded-full border border-rule bg-accent-light px-3 py-1 normal-case text-accent-primary"
        >
          {outlet}
        </span>
      ))}
      {rest > 0 ? (
        <span className="type-label rounded-full border border-rule bg-cream px-3 py-1 normal-case text-stone">
          +{rest} more
        </span>
      ) : null}
    </div>
  );
}

export function CaseStudyCard({ study, onRead }: CaseStudyCardProps) {
  const challengePreview =
    study.challenge.length > 160
      ? `${study.challenge.slice(0, 160).trim()}…`
      : study.challenge;

  return (
    <article className="card-refined card-refined--flush flex flex-col overflow-hidden">
      <CaseStudyImageZone />

      <div className="card-refined__body flex flex-1 flex-col px-7 py-6 transition-colors">
        <div className="flex flex-wrap gap-2">
          <span className="pill-availability px-3 py-1 normal-case tracking-[0.1em]">
            {study.label}
          </span>
          <span className="type-label rounded-full border border-rule bg-cream px-3 py-1 normal-case text-stone">
            {study.market}
          </span>
        </div>

        <h2 className="type-section-title mt-4 text-lg md:text-xl">
          {study.title}
        </h2>

        <p className="type-body mt-3 line-clamp-3">
          {challengePreview}
        </p>

        <div className="mt-6">
          <p className="type-page-headline text-3xl md:text-4xl">
            {study.resultNumber}
          </p>
          <p className="type-caption mt-1">
            {study.resultLabel}
          </p>
        </div>

        <div className="mt-5">
          <OutletPills outlets={study.featuredIn} />
        </div>

        <button
          type="button"
          onClick={onRead}
          className="type-nav mt-6 inline-flex text-left font-medium text-accent-primary transition-colors hover:text-accent-hover"
        >
          Read case study →
        </button>
      </div>
    </article>
  );
}

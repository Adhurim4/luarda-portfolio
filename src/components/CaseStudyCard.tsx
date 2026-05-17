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
          className="rounded-full border border-[var(--border-warm)] bg-[var(--accent-light)] px-3 py-1 text-xs text-[var(--accent-primary)]"
        >
          {outlet}
        </span>
      ))}
      {rest > 0 ? (
        <span className="rounded-full border border-[var(--border-warm)] bg-[var(--cream)] px-3 py-1 text-xs text-[var(--stone)]">
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
    <article className="card-refined flex flex-col overflow-hidden p-0">
      <CaseStudyImageZone />

      <div className="flex flex-1 flex-col px-7 py-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[var(--accent-mid)] bg-[var(--accent-light)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--accent-primary)]">
            {study.label}
          </span>
          <span className="rounded-full border border-[var(--border-warm)] bg-[var(--cream)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--stone)]">
            {study.market}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-semibold leading-snug text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
          {study.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[var(--stone)]">
          {challengePreview}
        </p>

        <div className="mt-6">
          <p className="text-3xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
            {study.resultNumber}
          </p>
          <p className="mt-1 text-[13px] text-[var(--stone)]">
            {study.resultLabel}
          </p>
        </div>

        <div className="mt-5">
          <OutletPills outlets={study.featuredIn} />
        </div>

        <button
          type="button"
          onClick={onRead}
          className="mt-6 inline-flex text-left text-sm font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--accent-hover)]"
        >
          Read case study →
        </button>
      </div>
    </article>
  );
}

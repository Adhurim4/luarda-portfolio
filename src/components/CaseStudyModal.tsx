"use client";

import { useEffect } from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { CaseStudyImageZone } from "@/components/CaseStudyImageZone";

type CaseStudyModalProps = {
  study: CaseStudy | null;
  onClose: () => void;
};

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!study) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[var(--charcoal)]/50 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <article
        className="card-refined relative my-4 w-full max-w-3xl overflow-hidden bg-[var(--white)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-[var(--border-warm)] bg-[var(--white)] px-3 py-1 text-sm text-[var(--stone)] hover:text-[var(--charcoal)]"
          aria-label="Close"
        >
          Close
        </button>

        <CaseStudyImageZone />

        <div className="px-7 py-8 md:px-10">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--accent-mid)] bg-[var(--accent-light)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--accent-primary)]">
              {study.label}
            </span>
            <span className="rounded-full border border-[var(--border-warm)] bg-[var(--cream)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--stone)]">
              {study.market}
            </span>
          </div>

          <h2
            id="case-study-title"
            className="mt-5 text-2xl font-semibold leading-snug text-[var(--charcoal)] md:text-3xl [font-family:var(--font-cormorant),serif]"
          >
            {study.title}
          </h2>

          <section className="mt-8">
            <h3 className="text-sm font-medium text-[var(--charcoal)]">
              The challenge
            </h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[var(--stone)]">
              {study.challenge}
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-sm font-medium text-[var(--charcoal)]">
              The approach
            </h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[var(--stone)]">
              {study.approach}
            </p>
          </section>

          <blockquote className="mt-8 border-l-2 border-[var(--accent-mid)] bg-[var(--accent-light)] px-5 py-4 text-[16px] italic leading-relaxed text-[var(--stone)]">
            {study.insight}
          </blockquote>

          <section className="mt-8">
            <h3 className="text-sm font-medium text-[var(--charcoal)]">
              The result
            </h3>
            <p className="mt-2 text-4xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
              {study.resultNumber}
            </p>
            <p className="mt-1 text-[13px] text-[var(--stone)]">
              {study.resultLabel}
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--stone)]">
              Featured in
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.featuredIn.map((outlet) => (
                <span
                  key={outlet}
                  className="rounded-full border border-[var(--border-warm)] bg-[var(--accent-light)] px-3 py-1 text-xs text-[var(--accent-primary)]"
                >
                  {outlet}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

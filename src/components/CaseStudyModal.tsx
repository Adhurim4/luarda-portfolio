"use client";

import { useEffect } from "react";
import type { CaseStudy } from "@/data/caseStudies";
import { CaseStudyImageZone } from "@/components/CaseStudyImageZone";
import { CaseStudyTags } from "@/components/CaseStudyTags";

type CaseStudyModalProps = {
  study: CaseStudy | null;
  imageUrl?: string;
  onClose: () => void;
};

function ModalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h3 className="type-label text-accent-primary">{title}</h3>
      <div className="type-body mt-2">{children}</div>
    </section>
  );
}

export function CaseStudyModal({ study, imageUrl, onClose }: CaseStudyModalProps) {
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
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-charcoal/50 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <article
        className="card-refined card-refined--flush relative my-4 w-full max-w-3xl overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-rule bg-white px-3 py-1 text-sm text-stone hover:text-charcoal"
          aria-label="Close"
        >
          Close
        </button>

        <CaseStudyImageZone imageUrl={imageUrl} alt={study.title} />

        <div className="px-7 py-8 md:px-10">
          <CaseStudyTags study={study} />

          <h2
            id="case-study-title"
            className="type-section-title mt-5 text-2xl md:text-3xl"
          >
            {study.title}
          </h2>

          <ModalSection title="The challenge">
            <p>{study.challenge}</p>
          </ModalSection>

          <ModalSection title="The approach">
            <p>{study.approach}</p>
          </ModalSection>

          <ModalSection title="My role">
            <p>{study.role}</p>
          </ModalSection>

          <ModalSection title="Results">
            <p className="type-page-headline text-4xl">{study.resultNumber}</p>
            <p className="type-caption mt-1">{study.resultLabel}</p>
            <p className="type-caption mt-2 text-sm">{study.mentions}</p>
          </ModalSection>

          <ModalSection title="Top coverage">
            <ul className="flex flex-wrap gap-3">
              {study.coverage.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-rule bg-accent-light px-4 py-2 text-sm font-medium text-accent-primary transition-colors hover:text-accent-hover"
                  >
                    {item.outlet}
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </ModalSection>
        </div>
      </article>
    </div>
  );
}

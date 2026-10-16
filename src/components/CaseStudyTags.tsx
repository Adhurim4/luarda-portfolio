import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyTags({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="pill-availability px-3 py-1 normal-case tracking-[0.1em]">
        {study.type}
      </span>
      {study.tags.map((tag) => (
        <span
          key={tag}
          className="type-label rounded-full border border-rule bg-cream px-3 py-1 normal-case text-stone"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

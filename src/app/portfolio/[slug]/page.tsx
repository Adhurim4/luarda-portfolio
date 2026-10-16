import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyImageZone } from "@/components/CaseStudyImageZone";
import { CaseStudyTags } from "@/components/CaseStudyTags";
import { Section } from "@/components/Section";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { getCaseStudyImageUrl } from "@/lib/caseStudyImages";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} | Luarda Gjata`,
    description: study.summary,
  };
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="type-label text-accent-primary">{title}</h2>
      <div className="type-body mt-3">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const imageUrl = getCaseStudyImageUrl(study);

  return (
    <main className="bg-cream">
      <Section className="pb-16 pt-12 md:pb-24 md:pt-16">
        <Link
          href="/portfolio"
          className="type-nav font-medium text-accent-primary transition-colors hover:text-accent-hover"
        >
          <span aria-hidden>←</span> All campaigns
        </Link>

        <article className="mx-auto mt-8 max-w-3xl">
          <CaseStudyImageZone
            imageUrl={imageUrl}
            alt={study.title}
            className="rounded-[var(--radius-card)] border-[0.5px] border-rule"
          />

          <h1 className="type-page-headline mt-10">{study.title}</h1>

          <div className="mt-6">
            <CaseStudyTags study={study} />
          </div>

          <CaseStudySection title="The challenge">
            <p>{study.challenge}</p>
          </CaseStudySection>

          <CaseStudySection title="The approach">
            <p>{study.approach}</p>
          </CaseStudySection>

          <CaseStudySection title="My role">
            <p>{study.role}</p>
          </CaseStudySection>

          <CaseStudySection title="Results">
            <div className="card-refined mt-1">
              <p className="type-page-headline text-4xl md:text-5xl">
                {study.resultNumber}
              </p>
              <p className="type-caption mt-1">{study.resultLabel}</p>
              <p className="type-caption mt-2 text-sm">{study.mentions}</p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Top coverage">
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
          </CaseStudySection>
        </article>

        <div className="card-refined mt-20 text-center">
          <h2 className="type-section-title">Want to discuss a campaign?</h2>
          <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5">
            Get in touch
          </Link>
        </div>
      </Section>
    </main>
  );
}

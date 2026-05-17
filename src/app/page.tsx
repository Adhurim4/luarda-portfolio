import Link from "next/link";
import { DecorativeWarmCircles } from "@/components/DecorativeWarmCircles";
import { Section } from "@/components/Section";
import { SectionWaveDivider } from "@/components/SectionWaveDivider";
import { LINKEDIN_URL } from "@/config/site";
import { caseStudies } from "@/data/caseStudies";
import { coverage } from "@/data/coverage";
import { processSteps } from "@/data/process";

const EMAIL = "mailto:gjataluarda@gmail.com";

export default function Home() {
  const featured = caseStudies.slice(0, 3);

  return (
    <main className="min-h-[60vh] bg-cream">
      {/* Hero */}
      <Section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <DecorativeWarmCircles />
        <div className="relative z-10 animate-fade-soft">
          <p className="pill-availability mb-6 px-4 py-2">
            Available for freelance projects & retainers
          </p>
          <h1 className="type-hero max-w-4xl">
            I turn data into stories — and stories into coverage that matters.
          </h1>
          <div className="type-body mt-8 max-w-2xl space-y-5">
            <p>
              Hey, I&apos;m Luarda, a freelance Digital PR Specialist with over 6
              years of experience running campaigns for brands and agencies across
              the US, UK, European and DACH markets, as well as Australia.
            </p>
            <p>
              I&apos;ve worked across tech, cybersecurity, education, lifestyle,
              food, travel, and other industries, helping brands earn coverage and
              links in some of the most competitive publications out there,
              including Forbes, Bloomberg, Daily Mail, and Martha Stewart.
            </p>
            <p>
              My focus is always on the idea first. I spend serious time on research
              and data gathering to find the angle that makes a journalist stop and
              pay attention, then build the campaign around it.
            </p>
            <p>
              Whether you&apos;re a brand looking for your first major placement or
              an agency needing an extra pair of experienced hands, I&apos;m here to
              help you earn coverage worth talking about.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/portfolio" className="btn-primary px-6 py-3">
              See my work
            </Link>
            <Link href="/contact" className="btn-ghost px-6 py-3">
              Get in touch
            </Link>
          </div>
        </div>
      </Section>

      <SectionWaveDivider />

      {/* Coverage strip */}
      <div className="coverage-strip py-10 md:py-12">
        <Section>
          <div className="-mx-1 flex gap-4 overflow-x-auto pb-1 md:flex-wrap md:gap-x-6 md:gap-y-3 md:overflow-visible">
            {coverage.map((outlet) => (
              <span key={outlet} className="coverage-strip__outlet shrink-0">
                {outlet}
              </span>
            ))}
          </div>
        </Section>
      </div>

      <SectionWaveDivider flip label="About Luarda" />

      {/* About teaser */}
      <Section className="relative overflow-hidden py-20 md:py-28">
        <DecorativeWarmCircles className="opacity-70" />
        <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <p className="type-body max-w-2xl">
            Hey, I&apos;m Luarda — a freelance digital PR specialist with over 6
            years of experience running campaigns across the US, UK, European and
            DACH markets, as well as Australia. I work with brands and agencies
            across tech, cybersecurity, education, lifestyle, food, and travel.
          </p>
          <Link
            href="/about"
            className="type-nav inline-flex shrink-0 items-center gap-2 font-medium text-accent-primary transition-colors hover:text-accent-hover md:justify-end"
          >
            More about me
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      <SectionWaveDivider label="How I work" />

      {/* Process */}
      <div className="bg-stone-light py-20 md:py-28">
        <Section>
          <h2 className="type-section-title max-w-3xl">
            Every campaign starts with the right idea — not the first one.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="card-refined">
                <p className="type-label text-accent-primary">{step.number}</p>
                <h3 className="type-section-title mt-3 text-lg md:text-xl">
                  {step.title}
                </h3>
                <p className="type-body mt-3">{step.description}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>

      <SectionWaveDivider flip className="bg-stone-light" />

      {/* Selected work */}
      <Section className="py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="type-section-title">Selected work</h2>
          <Link
            href="/portfolio"
            className="type-nav font-medium text-accent-primary hover:text-accent-hover"
          >
            View portfolio →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((study) => (
            <Link
              key={study.id}
              href="/portfolio"
              className="card-refined group block"
            >
              <p className="type-label text-accent-primary">{study.label}</p>
              <p className="type-page-headline mt-4 text-xl md:text-2xl">
                {study.title}
              </p>
              <p className="type-caption mt-4">
                {study.resultNumber} {study.resultLabel}
              </p>
              <span className="type-nav mt-6 inline-flex font-medium text-accent-primary group-hover:text-accent-hover">
                View case study →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <SectionWaveDivider label="What people say" />

      {/* Testimonials */}
      <Section className="pb-20 md:py-28">
        <h2 className="type-section-title">What people say</h2>
        <div className="card-refined relative mt-10 overflow-hidden border-rule bg-accent-light text-center">
          <div
            className="absolute left-0 top-0 h-full w-1 bg-accent-mid/50"
            aria-hidden
          />
          <p className="type-body relative mx-auto max-w-xl">
            Testimonials will be added once Luarda collects final quotes from
            clients, colleagues, or teams she has trained.
          </p>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="pb-24 md:pb-32">
        <div className="card-refined text-center">
          <h2 className="type-section-title">Got a story worth telling?</h2>
          <p className="type-body mx-auto mt-6 max-w-2xl">
            Whether you need a one-off campaign, ongoing PR support, or someone to
            help build out your digital PR strategy — I&apos;d love to hear about it.
            Open to freelance projects, retainers, and agency partnerships across
            any timezone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
            <Link href="/contact" className="btn-primary min-h-[44px] px-8 py-3.5">
              Get in touch
            </Link>
            <a href={EMAIL} className="btn-ghost min-h-[44px] px-8 py-3.5">
              gjataluarda@gmail.com
            </a>
            {LINKEDIN_URL ? (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost min-h-[44px] px-8 py-3.5"
              >
                LinkedIn
              </a>
            ) : (
              <span className="type-caption">
                LinkedIn — profile link coming soon
              </span>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}

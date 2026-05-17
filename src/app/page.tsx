import Link from "next/link";
import { DecorativeWarmCircles } from "@/components/DecorativeWarmCircles";
import { Section } from "@/components/Section";
import { LINKEDIN_URL } from "@/config/site";
import { caseStudies } from "@/data/caseStudies";
import { coverage } from "@/data/coverage";
import { processSteps } from "@/data/process";

const EMAIL = "mailto:gjataluarda@gmail.com";

const sectionTitle =
  "font-medium tracking-tight text-[var(--charcoal)] text-[1.375rem] leading-snug md:text-[1.625rem]";

export default function Home() {
  const featured = caseStudies.slice(0, 3);

  return (
    <main className="min-h-[60vh]">
      {/* Hero */}
      <Section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <DecorativeWarmCircles />
        <div className="relative z-10 animate-fade-soft">
          <p className="pill-availability mb-6 inline-flex px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em]">
            Available for freelance projects & retainers
          </p>
          <h1 className="max-w-4xl font-normal leading-[1.12] tracking-tight text-[var(--charcoal)] text-[clamp(2.25rem,5vw,3.75rem)] [font-family:var(--font-cormorant),serif]">
            I turn data into stories — and stories into coverage that matters.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-[var(--stone)]">
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
            <a href={EMAIL} className="btn-ghost px-6 py-3">
              Get in touch
            </a>
          </div>
        </div>
      </Section>

      {/* Coverage strip — dark ink */}
      <div className="bg-[var(--ink)] py-10 md:py-12">
        <Section>
          <div className="-mx-1 flex gap-3 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
            {coverage.map((outlet) => (
              <span
                key={outlet}
                className="shrink-0 text-[13px] font-bold text-[var(--white)]"
              >
                {outlet}
              </span>
            ))}
          </div>
        </Section>
      </div>

      {/* About teaser */}
      <Section className="relative overflow-hidden py-20 md:py-28">
        <DecorativeWarmCircles className="opacity-70" />
        <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <p className="max-w-2xl text-[17px] leading-relaxed text-[var(--stone)]">
            Hey, I&apos;m Luarda — a freelance digital PR specialist with over 6
            years of experience running campaigns across the US, UK, European and
            DACH markets, as well as Australia. I work with brands and agencies
            across tech, cybersecurity, education, lifestyle, food, and travel.
          </p>
          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--accent-hover)] md:justify-end"
          >
            More about me
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      {/* Process */}
      <div className="border-y border-[var(--border-warm)] bg-[var(--stone-light)] py-20 md:py-28">
        <Section>
          <h2 className={`max-w-3xl ${sectionTitle}`}>
            Every campaign starts with the right idea — not the first one.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="card-refined p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent-primary)]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--charcoal)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--stone)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </div>

      {/* Selected work */}
      <Section className="py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className={sectionTitle}>Selected work</h2>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-hover)]"
          >
            View portfolio →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((study) => (
            <Link
              key={study.id}
              href="/portfolio"
              className="card-refined group block p-7"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent-primary)]">
                {study.label}
              </p>
              <p className="mt-4 text-xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
                {study.title}
              </p>
              <p className="mt-4 text-[13px] text-[var(--stone)]">
                {study.resultNumber} {study.resultLabel}
              </p>
              <span className="mt-6 inline-flex text-sm font-medium text-[var(--accent-primary)] group-hover:text-[var(--accent-hover)]">
                View case study →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="pb-20 md:py-28">
        <h2 className={sectionTitle}>What people say</h2>
        <div className="relative mt-10 overflow-hidden rounded-[12px] border border-[var(--border-warm)] bg-[var(--rose-tint)] px-8 py-12 text-center md:px-14">
          <div
            className="absolute left-0 top-0 h-full w-1 bg-[var(--dusty-rose)]/50"
            aria-hidden
          />
          <p className="relative mx-auto max-w-xl text-[16px] leading-relaxed text-[var(--stone)]">
            Testimonials will be added once Luarda collects final quotes from
            clients, colleagues, or teams she has trained.
          </p>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="pb-24 md:pb-32">
        <div className="card-refined px-8 py-14 text-center md:px-16">
          <h2 className={sectionTitle}>Got a story worth telling?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--stone)]">
            Whether you need a one-off campaign, ongoing PR support, or someone to
            help build out your digital PR strategy — I&apos;d love to hear about it.
            Open to freelance projects, retainers, and agency partnerships across
            any timezone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
            <a href={EMAIL} className="btn-primary min-h-[44px] px-8 py-3.5">
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
              <span className="text-[13px] text-[var(--stone)]">
                LinkedIn — profile link coming soon
              </span>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}

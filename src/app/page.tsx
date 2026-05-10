import Link from "next/link";
import { DecorativeWarmCircles } from "@/components/DecorativeWarmCircles";
import { Section } from "@/components/Section";
import { LINKEDIN_URL } from "@/config/site";
import { coverage } from "@/data/coverage";
import { processSteps } from "@/data/process";

const EMAIL = "mailto:gjataluarda@gmail.com";

/** Section titles: DM Sans Bold 22–26px — design concept v3 */
const sectionTitle =
  "font-bold tracking-tight text-[var(--charcoal)] text-[1.375rem] leading-snug md:text-[1.625rem]";

const cardBase =
  "rounded-[10px] border border-[var(--stone-light)] bg-[var(--white)] shadow-soft-terra shadow-soft-terra-hover transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--terra-tint)]";

export default function Home() {
  return (
    <main className="min-h-[60vh]">
      {/* Hero */}
      <Section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <DecorativeWarmCircles />
        <div className="relative z-10 animate-fade-soft">
          <p className="mb-6 inline-flex rounded-full bg-[var(--terra-tint)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--terracotta)]">
            Available for freelance projects & retainers
          </p>
          <h1 className="max-w-4xl font-light leading-[1.12] tracking-tight text-[var(--charcoal)] text-[clamp(2.25rem,5vw,3.875rem)] [font-family:var(--font-cormorant),serif]">
            I turn data into stories — and stories into coverage that matters.
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--stone)]">
            Freelance digital PR specialist with 6 years in digital PR. I handle
            everything — from finding the idea and gathering the data, to pitching,
            promotion, and reporting — with coverage in Forbes, Bloomberg, USA
            Today, and beyond.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-[5px] bg-[var(--terracotta)] px-6 py-3 text-[15px] font-bold text-[var(--white)] transition-colors hover:bg-[var(--deep-terra)]"
            >
              See my work
            </Link>
            <a
              href={EMAIL}
              className="inline-flex items-center justify-center rounded-[5px] border border-[var(--terracotta)]/40 bg-[var(--white)] px-6 py-3 text-[15px] font-bold text-[var(--charcoal)] transition-colors hover:bg-[var(--terra-tint)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </Section>

      {/* Coverage strip — trust signal, no section heading (website brief) */}
      <div className="border-y border-[var(--stone-light)] bg-[var(--white)] py-10 md:py-12">
        <Section>
          <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
            {coverage.map((outlet) => (
              <span
                key={outlet}
                className="shrink-0 rounded-full bg-[var(--terra-tint)] px-4 py-2 text-sm font-medium text-[var(--terracotta)]"
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
            I’m Luarda — a freelance digital PR specialist with 6 years of
            experience running campaigns end to end: from ideation and data all
            the way to coverage. I’ve worked across tech, cybersecurity,
            lifestyle, food, and travel in the US, UK, EU, and DACH markets.
          </p>
          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[var(--deep-terra)] transition-colors hover:text-[var(--terracotta)] md:justify-end"
          >
            More about me
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      {/* Process — distinct band (design concept v3) */}
      <div className="border-y border-[var(--stone-light)] bg-[var(--terra-tint)] py-20 md:py-28">
        <Section>
          <h2 className={`max-w-3xl ${sectionTitle}`}>
            Every campaign starts with the right idea — not the first one.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={`${cardBase} p-6`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--terracotta)]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-bold text-[var(--charcoal)]">
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
            className="text-sm font-bold text-[var(--deep-terra)] hover:text-[var(--terracotta)]"
          >
            View portfolio →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { label: "Tech · Cybersecurity", hint: "Data-led campaign" },
            { label: "Lifestyle · Food", hint: "Consumer storytelling" },
            { label: "Travel · Consumer", hint: "International markets" },
          ].map((item) => (
            <Link
              key={item.label}
              href="/portfolio"
              className={`group ${cardBase} p-8`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--terracotta)]">
                {item.hint}
              </p>
              <p className="mt-4 text-xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
                {item.label}
              </p>
              <p className="mt-6 text-[13px] text-[var(--stone)]">
                Case study coming soon
              </p>
              <span className="mt-8 inline-flex text-sm font-bold text-[var(--deep-terra)] group-hover:text-[var(--terracotta)]">
                View case study →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonials — soft rose + dusty rose accent (sparingly) */}
      <Section className="pb-20 md:pb-28">
        <h2 className={sectionTitle}>What people say</h2>
        <div
          className={`relative mt-10 overflow-hidden rounded-[10px] border border-[var(--stone-light)] bg-[var(--rose-tint)] px-8 py-12 text-center shadow-soft-terra md:px-14`}
        >
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
        <div
          className={`${cardBase} px-8 py-14 text-center md:px-16`}
        >
          <h2 className={sectionTitle}>Got a story worth telling?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--stone)]">
            Whether you need a one-off campaign, ongoing PR support, or someone to
            help build out your digital PR strategy — I’d love to hear about it.
            Open to freelance projects, retainers, and agency partnerships across
            any timezone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
            <a
              href={EMAIL}
              className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] bg-[var(--terracotta)] px-8 py-3.5 text-[15px] font-bold text-[var(--white)] transition-colors hover:bg-[var(--deep-terra)]"
            >
              gjataluarda@gmail.com
            </a>
            {LINKEDIN_URL ? (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] border border-[var(--terracotta)]/40 bg-[var(--white)] px-8 py-3.5 text-[15px] font-bold text-[var(--charcoal)] transition-colors hover:bg-[var(--terra-tint)]"
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

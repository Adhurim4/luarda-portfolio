import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { services } from "@/data/services";

const EMAIL = "mailto:gjataluarda@gmail.com";

export const metadata: Metadata = {
  title: "Digital PR Services | Luarda Gjata",
  description:
    "Digital PR services including campaign ideation, data strategy, media outreach, international campaigns, consultancy and team training.",
};

const cardBase =
  "rounded-[10px] border border-[var(--stone-light)] bg-[var(--white)] shadow-soft-terra shadow-soft-terra-hover transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--terra-tint)]";

export default function ServicesPage() {
  return (
    <main>
      <Section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <h1 className="text-[clamp(2rem,4vw,2.625rem)] font-semibold leading-tight text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
          Digital PR services
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--stone)]">
          I work with brands and agencies who want digital PR that’s grounded in
          insight, built around a strong idea, and executed all the way through
          to coverage.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`border-l-[3px] border-l-[var(--terracotta)] ${cardBase} p-8`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--terracotta)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
                {service.title}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[var(--stone)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className={`mt-20 ${cardBase} px-8 py-12 text-center md:px-14`}
        >
          <h2 className="text-xl font-bold text-[var(--charcoal)] md:text-[1.625rem]">
            Need support with your next campaign?
          </h2>
          <a
            href={EMAIL}
            className="mt-8 inline-flex items-center justify-center rounded-[5px] bg-[var(--terracotta)] px-8 py-3.5 text-[15px] font-bold text-[var(--white)] transition-colors hover:bg-[var(--deep-terra)]"
          >
            Get in touch
          </a>
        </div>
      </Section>
    </main>
  );
}

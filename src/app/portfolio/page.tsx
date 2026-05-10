import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { caseStudies } from "@/data/caseStudies";

const EMAIL = "mailto:gjataluarda@gmail.com";

export const metadata: Metadata = {
  title: "Digital PR Portfolio | Luarda Gjata",
  description:
    "Selected digital PR campaigns and case studies from Luarda Gjata, freelance Digital PR specialist.",
};

const cardBase =
  "rounded-[10px] border border-[var(--stone-light)] bg-[var(--white)] shadow-soft-terra shadow-soft-terra-hover transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--terra-tint)]";

export default function PortfolioPage() {
  return (
    <main>
      <Section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <h1 className="text-[clamp(2rem,4vw,2.625rem)] font-semibold leading-tight text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
          Portfolio
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--stone)]">
          Selected digital PR campaigns and case studies will be added here soon.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className={`flex flex-col ${cardBase} p-8`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[var(--terra-tint)] px-3 py-1 text-xs font-medium text-[var(--deep-terra)]">
                  {study.type}
                </span>
                <span className="rounded-[5px] border border-[var(--stone-light)] bg-[var(--cream)] px-2.5 py-1 text-xs font-medium text-[var(--stone)]">
                  {study.status}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
                {study.title}
              </h2>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-[var(--charcoal)]">
                    Challenge
                  </dt>
                  <dd className="mt-1 text-[var(--stone)]">{study.challenge}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--charcoal)]">
                    Approach
                  </dt>
                  <dd className="mt-1 text-[var(--stone)]">{study.approach}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--charcoal)]">Result</dt>
                  <dd className="mt-1 text-[var(--stone)]">{study.result}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--stone)]">
                  Featured in
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.featuredIn.map((outlet) => (
                    <span
                      key={outlet}
                      className="rounded-full border border-[var(--stone-light)] bg-[var(--cream)] px-3 py-1 text-xs text-[var(--charcoal)]"
                    >
                      {outlet}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-[var(--stone)] leading-relaxed">
          Full case study details are being prepared and will be added once final
          campaign content is confirmed.
        </p>

        <div
          className={`mt-16 ${cardBase} px-8 py-12 text-center md:px-14`}
        >
          <h2 className="text-xl font-bold text-[var(--charcoal)] md:text-[1.625rem]">
            Want to discuss a campaign?
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

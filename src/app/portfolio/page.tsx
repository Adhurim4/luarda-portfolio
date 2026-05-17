import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Section } from "@/components/Section";

const EMAIL = "mailto:gjataluarda@gmail.com";

export const metadata: Metadata = {
  title: "Digital PR Portfolio | Luarda Gjata",
  description:
    "Selected digital PR campaigns and case studies from Luarda Gjata, freelance Digital PR specialist.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <h1 className="max-w-4xl text-[clamp(2rem,4vw,2.625rem)] font-semibold leading-tight text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
          Some of the campaigns that earn coverage worth reading.
        </h1>

        <div className="mt-10">
          <PortfolioGrid />
        </div>

        <div className="card-refined mt-20 px-8 py-12 text-center md:px-14">
          <h2 className="text-xl font-medium text-[var(--charcoal)] md:text-[1.625rem]">
            Want to discuss a campaign?
          </h2>
          <a
            href={EMAIL}
            className="btn-primary mt-8 px-8 py-3.5"
          >
            Get in touch
          </a>
        </div>
      </Section>
    </main>
  );
}

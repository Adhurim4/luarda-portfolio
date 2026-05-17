import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Digital PR Portfolio | Luarda Gjata",
  description:
    "Selected digital PR campaigns and case studies from Luarda Gjata, freelance Digital PR specialist.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-cream">
      <Section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <h1 className="type-page-headline max-w-4xl">
          Some of the campaigns that earn coverage worth reading.
        </h1>

        <div className="mt-10">
          <PortfolioGrid />
        </div>

        <div className="card-refined mt-20 text-center">
          <h2 className="type-section-title">
            Want to discuss a campaign?
          </h2>
          <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5">
            Get in touch
          </Link>
        </div>
      </Section>
    </main>
  );
}

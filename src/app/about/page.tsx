import type { Metadata } from "next";
import Link from "next/link";
import { AboutEditorialHero } from "@/components/AboutEditorialHero";
import { Section } from "@/components/Section";
import { SectionWaveDivider } from "@/components/SectionWaveDivider";

export const metadata: Metadata = {
  title: "About Luarda Gjata | Digital PR Specialist",
  description:
    "Learn more about Luarda Gjata, a digital PR specialist with 6+ years of experience running data-led campaigns across the US, UK, Europe, and Australia.",
};

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <Section className="pb-16 pt-12 md:pb-24 md:pt-16">
        <AboutEditorialHero />

        <SectionWaveDivider label="At a glance" />

        <div className="relative z-0 grid gap-6 sm:grid-cols-3">
          {[
            { stat: "6+", label: "Years in digital PR" },
            { stat: "9", label: "Industries covered" },
            { stat: "4", label: "Markets: US, UK, Europe & Australia" },
          ].map((item) => (
            <div key={item.label} className="card-refined text-center">
              <p className="type-page-headline text-3xl md:text-4xl">{item.stat}</p>
              <p className="type-caption mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="card-refined mt-20 text-center">
          <h2 className="type-section-title">Want to work together?</h2>
          <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5">
            Get in touch
          </Link>
        </div>
      </Section>
    </main>
  );
}

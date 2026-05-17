import type { Metadata } from "next";
import Link from "next/link";
import { AboutEditorialHero } from "@/components/AboutEditorialHero";
import { Section } from "@/components/Section";
import { SectionWaveDivider } from "@/components/SectionWaveDivider";

export const metadata: Metadata = {
  title: "About Luarda Gjata | Digital PR Specialist",
  description:
    "Learn more about Luarda Gjata, a freelance digital PR specialist working across tech, cybersecurity, lifestyle, food, travel and international markets.",
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
            { stat: "8+", label: "Industries covered" },
            { stat: "5 markets", label: "US, UK, EU, DACH & Australia" },
          ].map((item) => (
            <div key={item.label} className="card-refined text-center">
              <p className="type-page-headline text-3xl md:text-4xl">{item.stat}</p>
              <p className="type-caption mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="card-refined relative mt-16 max-w-3xl overflow-hidden bg-accent-light">
          <div
            className="absolute left-0 top-0 h-full w-1 bg-accent-mid/45"
            aria-hidden
          />
          <p className="relative text-center type-body italic">
            Testimonial coming soon.
          </p>
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

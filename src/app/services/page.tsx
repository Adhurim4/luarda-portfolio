import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital PR Services | Luarda Gjata",
  description:
    "Digital PR services including campaign ideation, data strategy, media outreach, international campaigns, consultancy and team training.",
};

export default function ServicesPage() {
  return (
    <main className="bg-cream">
      <Section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <h1 className="type-page-headline">Digital PR services</h1>
        <p className="type-body mt-8 max-w-2xl">
          I work with brands and agencies who want digital PR that’s grounded in
          insight, built around a strong idea, and executed all the way through
          to coverage.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card-refined border-l-[3px] border-l-accent-mid"
            >
              <span className="type-label text-accent-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="type-section-title mt-4 text-lg md:text-xl">
                {service.title}
              </h2>
              <p className="type-body mt-4">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="card-refined mt-20 text-center">
          <h2 className="type-section-title">
            Need support with your next campaign?
          </h2>
          <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5">
            Get in touch
          </Link>
        </div>
      </Section>
    </main>
  );
}

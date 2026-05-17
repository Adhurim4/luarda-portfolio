import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | Luarda Gjata",
  description:
    "Get in touch with Luarda Gjata for freelance digital PR campaigns, retainers, and agency partnerships.",
};

export default function ContactPage() {
  return (
    <main className="bg-cream">
      <Section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,38%)_1fr] lg:items-start lg:gap-16">
          <div
            className="relative aspect-[4/5] w-full max-h-[480px] overflow-hidden rounded-[var(--radius-card)] border-[0.5px] border-rule bg-stone-light lg:max-h-none lg:min-h-[420px]"
            role="img"
            aria-label="Portrait of Luarda Gjata — photo coming soon"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-stone-light/80 via-transparent to-accent-light/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="type-caption px-6 text-center">Photo coming soon</span>
            </div>
          </div>

          <div className="min-w-0">
            <h1 className="type-page-headline">Let&apos;s work together</h1>
            <p className="type-body mt-6 max-w-xl">
              Interested in working together? Fill out the form below and I&apos;ll be
              in touch shortly.
            </p>
            <p className="type-body mt-4 max-w-xl">
              Or email me directly at{" "}
              <a
                href={CONTACT_MAILTO}
                className="font-medium text-accent-primary transition-colors hover:text-accent-hover"
              >
                {CONTACT_EMAIL}
              </a>
            </p>

            <div className="mt-10 max-w-xl">
              <ContactForm />
            </div>

            <hr className="mt-12 border-0 border-t border-rule" />

            <p className="type-caption mt-8">
              <a
                href={CONTACT_MAILTO}
                className="text-accent-primary transition-colors hover:text-accent-hover"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

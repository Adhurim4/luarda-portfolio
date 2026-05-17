import type { Metadata } from "next";
import { DecorativeWarmCircles } from "@/components/DecorativeWarmCircles";
import { Section } from "@/components/Section";

const EMAIL = "mailto:gjataluarda@gmail.com";

export const metadata: Metadata = {
  title: "About Luarda Gjata | Digital PR Specialist",
  description:
    "Learn more about Luarda Gjata, a freelance digital PR specialist working across tech, cybersecurity, lifestyle, food, travel and international markets.",
};

export default function AboutPage() {
  return (
    <main>
      <Section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
        <DecorativeWarmCircles />
        <div className="relative z-10">
          <h1 className="text-[clamp(2rem,4vw,2.625rem)] font-semibold leading-tight text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
            About Luarda
          </h1>

          <div className="mt-12 max-w-3xl space-y-8 text-[17px] leading-relaxed text-[var(--stone)]">
            <p>
              Over six years ago, I started exploring digital PR as a way to build
              links for the marketing agency I was working at. But the more I saw
              what it could do, the brand visibility, the media relationships, and
              the stories that actually landed, the more I realised it was
              something much bigger than link building.
            </p>
            <p>
              At one point, I built a digital PR department from scratch, making
              the case for it, hiring the team, setting the strategy, and running
              campaigns end to end. At another, I helped an outreach team fully
              transition from traditional link building into insight-led digital
              PR. Both experiences taught me what it really takes to make this
              work.
            </p>
            <p>
              Over the years, I&apos;ve run campaigns across ideation, data
              gathering, pitching, promotion, and reporting in tech, cybersecurity,
              education, lifestyle, food, and travel, across the US, UK, European
              and DACH markets, as well as Australia. Every market has its own media
              landscape, and every industry its own angles. Finding those is still
              my favourite part.
            </p>
            <p>
              I&apos;m a data person. I enjoy digging into a dataset, finding the
              number that tells a story nobody has told yet, and shaping it into
              something a journalist actually wants to cover. That&apos;s where the
              creativity is for me.
            </p>
            <p>
              I&apos;ve worked with brands of all sizes, helping them earn coverage
              and build visibility in markets and publications that actually matter
              for their business. That work has resulted in links and brand mentions
              in Forbes, Bloomberg, USA Today, Fox News, Daily Mail, New York
              Post, Time Out, Martha Stewart, and Quartz, among others.
            </p>
            <p>
              If you&apos;d like to talk about working together, I&apos;d love to
              hear from you.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "6+", label: "Years in digital PR" },
              { stat: "8+", label: "Industries covered" },
              { stat: "5 markets", label: "US, UK, EU, DACH & Australia" },
            ].map((item) => (
              <div key={item.label} className="card-refined p-8 text-center">
                <p className="text-3xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
                  {item.stat}
                </p>
                <p className="mt-2 text-[13px] text-[var(--stone)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-16 max-w-3xl overflow-hidden rounded-[12px] border border-[var(--border-warm)] bg-[var(--rose-tint)] px-8 py-10">
            <div
              className="absolute left-0 top-0 h-full w-1 bg-[var(--dusty-rose)]/45"
              aria-hidden
            />
            <p className="relative text-center text-[16px] italic text-[var(--stone)]">
              Testimonial coming soon.
            </p>
          </div>

          <div className="card-refined mt-20 px-8 py-12 text-center md:px-14">
            <h2 className="text-xl font-medium text-[var(--charcoal)] md:text-[1.625rem]">
              Want to work together?
            </h2>
            <a href={EMAIL} className="btn-primary mt-8 px-8 py-3.5">
              Get in touch
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

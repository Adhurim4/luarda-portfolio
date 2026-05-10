import type { Metadata } from "next";
import { DecorativeWarmCircles } from "@/components/DecorativeWarmCircles";
import { Section } from "@/components/Section";

const EMAIL = "mailto:gjataluarda@gmail.com";

export const metadata: Metadata = {
  title: "About Luarda Gjata | Digital PR Specialist",
  description:
    "Learn more about Luarda Gjata, a freelance digital PR specialist working across tech, cybersecurity, lifestyle, food, travel and international markets.",
};

const cardBase =
  "rounded-[10px] border border-[var(--stone-light)] bg-[var(--white)] shadow-soft-terra shadow-soft-terra-hover transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--terra-tint)]";

export default function AboutPage() {
  return (
    <main>
      <Section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
        <DecorativeWarmCircles />
        <div className="relative z-10">
          <h1 className="text-[clamp(2rem,4vw,2.625rem)] font-semibold leading-tight text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
            About Luarda
          </h1>
          <p className="mt-10 max-w-3xl text-[17px] leading-relaxed text-[var(--stone)]">
            Hi, I’m Luarda — a freelance digital PR specialist working with brands
            and agencies across the globe.
          </p>

          <div className="mt-12 max-w-3xl space-y-8 text-[17px] leading-relaxed text-[var(--stone)]">
            <p>
              I started my career in link building, always looking for smarter and
              more sustainable ways to earn links. That curiosity led me to digital
              PR — and eventually to building a full digital PR function from
              scratch, starting with the business case and seeing it through to a
              running operation.
            </p>
            <p>
              For me, great digital PR starts long before the pitch. It starts with
              a strong idea — one rooted in data. I spend serious time on ideation
              and data gathering: finding angles that are genuinely newsworthy,
              identifying the statistics or research that give a story legs, and
              shaping it all into something a journalist actually wants to write
              about. The pitching comes after the thinking.
            </p>
            <p>
              Throughout my career I’ve also been the person other teams turn to
              when making the shift into digital PR. I’ve led and trained outreach
              teams — helping them move from traditional link building into running
              full, insight-driven campaigns. Building that capability in others is
              something I genuinely enjoy.
            </p>
            <p>
              Over 6 years I’ve worked across tech, cybersecurity, education,
              lifestyle, food, and travel — running campaigns for the US, UK, EU,
              and DACH markets. Each industry, each market, needs its own angle.
              That’s the part I find most interesting.
            </p>
            <p>
              The campaigns I’m most proud of earned placements in some of the
              most competitive publications in the world — not through mass
              outreach, but through the right idea, the right data, and the right
              journalist.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "6+", label: "Years in digital PR" },
              { stat: "8+", label: "Industries covered" },
              { stat: "4 markets", label: "US, UK, EU & DACH" },
            ].map((item) => (
              <div key={item.label} className={`${cardBase} p-8 text-center`}>
                <p className="text-3xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
                  {item.stat}
                </p>
                <p className="mt-2 text-[13px] text-[var(--stone)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`relative mt-16 max-w-3xl overflow-hidden rounded-[10px] border border-[var(--stone-light)] bg-[var(--rose-tint)] px-8 py-10 shadow-soft-terra`}
          >
            <div
              className="absolute left-0 top-0 h-full w-1 bg-[var(--dusty-rose)]/45"
              aria-hidden
            />
            <p className="relative text-center text-[16px] italic text-[var(--stone)]">
              Testimonial coming soon.
            </p>
          </div>

          <div
            className={`mt-20 ${cardBase} px-8 py-12 text-center md:px-14`}
          >
            <h2 className="text-xl font-bold text-[var(--charcoal)] md:text-[1.625rem]">
              Want to work together?
            </h2>
            <a
              href={EMAIL}
              className="mt-8 inline-flex items-center justify-center rounded-[5px] bg-[var(--terracotta)] px-8 py-3.5 text-[15px] font-bold text-[var(--white)] transition-colors hover:bg-[var(--deep-terra)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

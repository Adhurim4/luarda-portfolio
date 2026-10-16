import fs from "node:fs";
import path from "node:path";

/**
 * Portrait photo. Shown automatically when public/images/luarda-gjata.jpg
 * exists; the photo block is hidden when the file is missing.
 */
const PHOTO_FILE = "/images/luarda-gjata.jpg";
const PHOTO_URL = fs.existsSync(path.join(process.cwd(), "public", PHOTO_FILE))
  ? PHOTO_FILE
  : "";

const ABOUT_PARAGRAPHS = [
  "Over six years ago, I started exploring digital PR as a way to build links for the marketing agency I was working at. But the more I saw what it could do, the brand visibility, the media relationships, and the stories that actually landed, the more I realised it was something much bigger than link building.",
  "I've built a digital PR department from scratch, making the case for it, hiring the team, setting the strategy, and running campaigns end to end. I've also helped an outreach team fully transition from traditional link building into insight-led digital PR. Both experiences taught me what it really takes to make this work.",
  "Over the years, I've run campaigns from ideation and data gathering to pitching, promotion, and reporting for tech, cybersecurity, finance, education, lifestyle, food, travel, sports, and relationships brands. I've done this across the US, UK, Europe, and Australia, including the DACH region. Every market has its own media landscape, and every industry its own angles. Finding those is still my favourite part.",
  "I'm a data person. I enjoy digging into a dataset, finding the number that tells a story nobody has told yet, and shaping it into something a journalist actually wants to cover. That's where the creativity is for me.",
  "I've worked with brands of all sizes, and my campaigns have earned links and brand mentions in Forbes, Bloomberg, USA Today, Fox News, Daily Mail, New York Post, Time Out, Martha Stewart, and Quartz, among others. A single campaign has earned 500+ backlinks.",
];

export function AboutEditorialHero() {
  return (
    <section className="relative mb-12 md:mb-16">
      <h1 className="type-page-headline mb-6 whitespace-nowrap md:mb-8 lg:max-w-[38%]">
        About Luarda
      </h1>

      <div
        className={
          PHOTO_URL
            ? "grid gap-10 lg:grid-cols-[minmax(260px,38%)_1fr] lg:items-stretch lg:gap-14"
            : "grid gap-10"
        }
      >
        {PHOTO_URL ? (
          <div className="relative aspect-[3/4] w-full max-h-[420px] overflow-hidden rounded-[var(--radius-card)] border-[0.5px] border-rule bg-stone-light sm:max-h-[480px] lg:aspect-auto lg:max-h-none lg:h-full lg:min-h-[280px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO_URL}
              alt="Portrait of Luarda Gjata"
              className="h-full w-full object-cover object-[center_25%]"
            />
          </div>
        ) : null}

        <div className="type-body min-w-0 max-w-3xl space-y-6">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

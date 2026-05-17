const ABOUT_PARAGRAPHS = [
  "Over six years ago, I started exploring digital PR as a way to build links for the marketing agency I was working at. But the more I saw what it could do, the brand visibility, the media relationships, and the stories that actually landed, the more I realised it was something much bigger than link building.",
  "At one point, I built a digital PR department from scratch, making the case for it, hiring the team, setting the strategy, and running campaigns end to end. At another, I helped an outreach team fully transition from traditional link building into insight-led digital PR. Both experiences taught me what it really takes to make this work.",
  "Over the years, I've run campaigns across ideation, data gathering, pitching, promotion, and reporting in tech, cybersecurity, education, lifestyle, food, and travel, across the US, UK, European and DACH markets, as well as Australia. Every market has its own media landscape, and every industry its own angles. Finding those is still my favourite part.",
  "I'm a data person. I enjoy digging into a dataset, finding the number that tells a story nobody has told yet, and shaping it into something a journalist actually wants to cover. That's where the creativity is for me.",
  "I've worked with brands of all sizes, helping them earn coverage and build visibility in markets and publications that actually matter for their business. That work has resulted in links and brand mentions in Forbes, Bloomberg, USA Today, Fox News, Daily Mail, New York Post, Time Out, Martha Stewart, and Quartz, among others.",
  "If you'd like to talk about working together, I'd love to hear from you.",
];

export function AboutEditorialHero() {
  return (
    <section className="relative mb-12 md:mb-16">
      <h1 className="type-page-headline mb-6 whitespace-nowrap md:mb-8 lg:max-w-[38%]">
        About Luarda
      </h1>

      <div className="grid gap-10 lg:grid-cols-[minmax(260px,38%)_1fr] lg:items-stretch lg:gap-14">
        <div
          className="relative aspect-[3/4] w-full max-h-[420px] overflow-hidden rounded-[var(--radius-card)] border-[0.5px] border-rule bg-stone-light sm:max-h-[480px] lg:aspect-auto lg:max-h-none lg:h-full lg:min-h-[280px]"
          role="img"
          aria-label="Portrait of Luarda Gjata — photo coming soon"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-light/80 via-transparent to-accent-light/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="type-caption px-6 text-center">
              Photo coming soon
            </span>
          </div>
        </div>

        <div className="type-body min-w-0 space-y-6">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

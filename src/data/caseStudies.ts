export type CaseStudyFilter =
  | "all"
  | "lifestyle"
  | "tech"
  | "travel"
  | "relationships"
  | "food"
  | "dach";

export type CaseStudy = {
  id: string;
  label: string;
  market: string;
  filter: Exclude<CaseStudyFilter, "all">;
  title: string;
  challenge: string;
  approach: string;
  insight: string;
  resultNumber: string;
  resultLabel: string;
  featuredIn: string[];
};

export const portfolioFilters: { id: CaseStudyFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "tech", label: "Tech" },
  { id: "travel", label: "Travel" },
  { id: "relationships", label: "Relationships" },
  { id: "food", label: "Food" },
  { id: "dach", label: "DACH" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    label: "Data-led campaign",
    market: "Lifestyle · US Market",
    filter: "lifestyle",
    title: "How long do you have to work to afford a cup of coffee?",
    challenge:
      "The brief was to make a boring price statistic feel personal. 'Coffee costs $4.50' tells you nothing. The PR challenge was finding an angle that would make lifestyle, finance, and local news journalists stop scrolling.",
    approach:
      "Instead of asking how much coffee costs, the campaign asked how long you have to work to buy one. Using median hourly wage data from the Bureau of Labor Statistics and average coffee prices across all 50 US states, the team calculated: price ÷ wage = minutes worked. No expensive surveys — just publicly available data, reframed through a human lens. The state-by-state breakdown created 50 localised headlines — giving every regional radio station its own ready-made angle.",
    insight:
      "The concept borrowed the logic of the Big Mac Index and applied it to something people feel personally every morning. Familiar framework + fresh data + 50 built-in local angles = a story that almost pitches itself. That's deliberate architecture.",
    resultNumber: "50+",
    resultLabel: "high-DR backlinks",
    featuredIn: [
      "Food & Wine",
      "Mental Floss",
      "CFO.com",
      "PennLive",
      "NJ 101.5",
      "and 45+ more",
    ],
  },
  {
    id: "cs-02",
    label: "Data-led campaign",
    market: "Relationships · US Market",
    filter: "relationships",
    title: "Which US states are the most dangerous for online dating?",
    challenge:
      "Online dating safety is something millions of Americans think about but rarely see quantified. The brief was to turn a widespread anxiety into a concrete, data-backed story relevant enough for mainstream news.",
    approach:
      "Using publicly available data across all 50 states — romance scam reports, fraud and identity theft rates, violent crime statistics, STD prevalence, and registered sex offender counts per 100,000 residents — the campaign built a weighted safety index and ranked every state. Nevada, Alaska, and Georgia ranked most dangerous. Vermont, Maine, and New Hampshire safest. Every state had its own story — and its own local headline.",
    insight:
      "The timing was everything. Journalists were already writing about dating app fatigue — Gen Z burning out on Hinge and Tinder, and a cultural shift back to in-person dating. A study on online dating safety landed in the middle of that conversation at exactly the right moment.",
    resultNumber: "500+",
    resultLabel: "backlinks",
    featuredIn: [
      "Fox News",
      "Newsweek",
      "SILive.com",
      "Yahoo Life",
      "WAVY News",
      "and 495+ more",
    ],
  },
  {
    id: "cs-03",
    label: "Data-led campaign",
    market: "Tech / Privacy · Global",
    filter: "tech",
    title: "Which countries have the most — and least — internet freedom?",
    challenge:
      "Internet censorship affects billions worldwide, but most coverage is too political or too technical to reach a mainstream audience. The brief was to make a complex global topic feel tangible and pitch-worthy across dozens of countries simultaneously.",
    approach:
      "The campaign scored 171 countries on a 0–100 internet freedom scale across five criteria: website blocking, social media restrictions, VPN availability, government surveillance, and penalties for online activity. Every country created a local headline — from African outlets to European tech publications. Norway, Finland, and Costa Rica ranked freest. China, North Korea, and Iran at the opposite end.",
    insight:
      "Internet censorship doesn't need to be trending to perform — it needs to be permanently relevant. New regulations, AI moderation, and shifting global dynamics mean the story never stops evolving. Within two weeks of publishing, organic backlinks started arriving without additional outreach.",
    resultNumber: "300+",
    resultLabel: "international links",
    featuredIn: [
      "Visual Capitalist",
      "Business Insider Africa",
      "HackerNoon",
      "and 297+ more",
    ],
  },
  {
    id: "cs-04",
    label: "Data-led campaign",
    market: "Travel · Global",
    filter: "travel",
    title: "The world's most complained-about beaches — ranked by 1.3M reviews",
    challenge:
      "Travel content is one of the most saturated spaces in media. Every outlet publishes best beaches lists. The brief was to find a contrarian angle that cut through the noise — honest, unexpected, and impossible to scroll past.",
    approach:
      "Instead of a best beaches ranking, the campaign asked which beaches disappoint people most. Over 1.3 million TripAdvisor reviews across 200 beaches were analysed for complaints across four categories: dirtiness, overcrowding, long queues, and noise. Each beach received a complaint score from 0 to 100. Waikiki Beach, Hawaii topped the list with a perfect score of 100. Venice Beach followed at 89.7.",
    insight:
      "Best-of lists are everywhere. Worst-of lists based on 1.3 million real reviews are rare — and far more shareable. The contrarian angle gave journalists something genuinely new to say about destinations their readers already knew.",
    resultNumber: "100+",
    resultLabel: "links & brand mentions",
    featuredIn: [
      "Travel + Leisure",
      "Time Out",
      "Euronews",
      "Travel Weekly",
      "Yahoo Travel",
      "Stuff.co.nz",
      "and 94+ more",
    ],
  },
  {
    id: "cs-05",
    label: "Survey-led campaign",
    market: "Relationships · Gen Z · Global",
    filter: "relationships",
    title:
      "Gen Z women and men reveal their surprising new preferences for finding love",
    challenge:
      "Gen Z dating is one of the most talked-about topics in lifestyle media — but most coverage relies on anecdote and assumption. The brief was to cut through with actual data from real Gen Z respondents.",
    approach:
      "The campaign surveyed Gen Zers aged 18–27 on their dating preferences. The findings were deliberately counterintuitive: only 15.53% still favour popular dating apps. Gen Z believes in love more than any previous generation — but feels underprepared for it. They're meeting in person faster than the media portrays.",
    insight:
      "Gen Z dating fatigue was already dominating media conversation. This campaign didn't ride that wave — it challenged it with data. Counterintuitive findings beat confirming what everyone already thinks, every time.",
    resultNumber: "50+",
    resultLabel: "links & brand mentions",
    featuredIn: ["Fast Company", "Her World", "Metrópoles", "and 47+ more"],
  },
  {
    id: "cs-06",
    label: "Data-led campaign",
    market: "Tech / Consumer · DACH",
    filter: "dach",
    title: "Average internet speed in Germany 2026 — the fastest cities for streaming",
    challenge:
      "Internet speed is something millions of Germans care about daily — from remote workers to streamers — but most coverage stays technical and impersonal. The brief was to make this data feel locally relevant and useful in the German-speaking market.",
    approach:
      "The campaign analysed average broadband speeds across German cities, ranking them to reveal where streaming conditions are best — and worst. Recklinghausen beat Berlin. Aachen ranked 58th out of 80 cities despite 40% fibre coverage. The city-by-city format gave every regional German outlet its own headline.",
    insight:
      "A national topic made local. Every city in the ranking gave a different German newsroom a reason to cover it — from regional radio to gaming publications. Classic local syndication, executed in the DACH market.",
    resultNumber: "Regional",
    resultLabel: "DACH coverage",
    featuredIn: ["GameStar", "Business Punk", "T-Online Aachen", "and more"],
  },
  {
    id: "cs-07",
    label: "Reactive campaign",
    market: "Food · Global",
    filter: "food",
    title: "Where does our food actually come from?",
    challenge:
      "During the pandemic, food supply chains became front-page news. Millions of consumers were asking a question they had never thought about before: where does our food actually come from? The brief was to answer that question with data — at the exact moment the world was ready to listen.",
    approach:
      "The campaign mapped the origins of the world's most commonly consumed foods, tracing supply chains back to source countries. The findings highlighted how dependent global food systems are on a small number of producers, and how climate change, conflict, and shifting cultivation patterns were already reshaping what ends up on people's plates.",
    insight:
      "Reactive PR at its best — a permanently interesting topic made urgently relevant by world events. The campaign didn't chase the news cycle. It answered the question the news cycle was already asking.",
    resultNumber: "Global",
    resultLabel: "mainstream coverage",
    featuredIn: ["NDTV Food", "Food Navigator", "AgWeb", "and more"],
  },
];

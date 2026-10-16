/**
 * Portfolio case studies.
 *
 * To add a campaign: copy one object below, give it a unique `slug`, and fill
 * in the same fields. Put its cover image in `public/` using the file name
 * in `image`. A missing image shows a neutral placeholder tile.
 * Cards appear on /portfolio in the order of this list, and each one gets its
 * own page at /portfolio/<slug>.
 */

export type CaseStudyTag =
  | "Tech"
  | "Cybersecurity"
  | "Travel"
  | "Relationships"
  | "Food"
  | "Lifestyle"
  | "Finance"
  | "DACH"
  | "US"
  | "UK"
  | "Global";

export type CoverageLink = {
  outlet: string;
  url: string;
};

export type CaseStudy = {
  /** URL part of the case study page: /portfolio/<slug> */
  slug: string;
  /** Campaign type, e.g. "Data-led campaign" */
  type: string;
  /** Topics and market. A campaign shows under every filter it is tagged with. */
  tags: CaseStudyTag[];
  title: string;
  /** File name inside public/ */
  image: string;
  /** Headline number on the card, e.g. "500+" */
  resultNumber: string;
  /** Label under the headline number, e.g. "backlinks" */
  resultLabel: string;
  /** Smaller line under the headline, e.g. "100+ brand mentions" */
  mentions: string;
  summary: string;
  challenge: string;
  approach: string;
  role: string;
  /** Top 3 coverage links */
  coverage: CoverageLink[];
};

export type PortfolioFilter = "All" | Exclude<CaseStudyTag, "US" | "UK" | "Global">;

export const portfolioFilters: PortfolioFilter[] = [
  "All",
  "Tech",
  "Cybersecurity",
  "Travel",
  "Relationships",
  "Food",
  "Lifestyle",
  "Finance",
  "DACH",
];

export const CASE_STUDY_IMAGE_DIR = "";

export const caseStudies: CaseStudy[] = [
  {
    slug: "dating-states",
    type: "Data-led campaign",
    tags: ["Relationships", "US"],
    title: "Which US states are the most dangerous for online dating?",
    image: "Which US states are the most dangerous for online dating_.jpg",
    resultNumber: "500+",
    resultLabel: "backlinks",
    mentions: "100+ brand mentions",
    summary:
      "Turning a widespread anxiety into a state by state ranking that newsrooms across the US could localise.",
    challenge:
      "Millions of Americans worry about online dating safety, but the risk is rarely measured. The brief was to turn that anxiety into concrete, data-driven findings that national and local journalists would want to report.",
    approach:
      "I developed the angle, helped shape a ranking of the most and least dangerous states for online dating, and built the story around state level results so every region had its own headline. I pitched national outlets first, then local newsrooms, and tracked the coverage.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Fox News",
        url: "https://www.foxnews.com/us/most-least-dangerous-states-online-dating-study",
      },
      {
        outlet: "Click2Houston",
        url: "https://www.click2houston.com/news/local/2024/04/14/texas-ranked-among-most-dangerous-states-for-online-dating-survey/",
      },
      {
        outlet: "Florida Today",
        url: "https://www.floridatoday.com/story/news/2024/04/23/florida-dating-online-safety-tips-dangers-tinder-bumble-hinge/73409248007/",
      },
    ],
  },
  {
    slug: "internet-freedom",
    type: "Data-led campaign",
    tags: ["Tech", "Cybersecurity", "Global"],
    title: "Which countries have the most and least internet freedom?",
    image: "Which countries have the most and least internet freedom_.webp",
    resultNumber: "300+",
    resultLabel: "backlinks",
    mentions: "50+ brand mentions",
    summary:
      "Making a heavy political topic visual and easy to share with a country by country map.",
    challenge:
      "Internet censorship affects billions of people, but most coverage is either too political or too technical for a mainstream audience. The brief was to make a complex topic simple, visual, and relevant to readers anywhere.",
    approach:
      "I led the angle and story, focusing on a clear country by country map that explained the data at a glance. I pitched tech, business, and data visualisation outlets, then adapted the story for regional press worldwide.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Business Insider Africa",
        url: "https://africa.businessinsider.com/local/lifestyle/internet-freedom-in-africa-top-performers-and-the-10-most-restricted-nations/s6fphj2",
      },
      {
        outlet: "Visual Capitalist",
        url: "https://www.visualcapitalist.com/mapped-the-worlds-top-20-tallest-countries/",
      },
      {
        outlet: "HackerNoon",
        url: "https://hackernoon.com/the-battle-over-decentralized-internet-qsi936ri",
      },
    ],
  },
  {
    slug: "christmas-destinations",
    type: "Data-led campaign",
    tags: ["Travel", "Global"],
    title: "Where does the world want to go for Christmas?",
    image: "Where does the world want to go for Christmas_.webp",
    resultNumber: "150+",
    resultLabel: "backlinks",
    mentions: "100+ brand mentions",
    summary:
      "A seasonal travel story with a global map and a US state by state version.",
    challenge:
      "Christmas travel content is published every year by every outlet. The brief was to find a fresh, data-led angle that would stand out in a crowded season.",
    approach:
      "I built the story around where the world dreams of spending Christmas, then created different angles for different audiences. UK press got the global map, with London as the top destination, while US outlets got a state by state view of favourite Christmas destinations.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Daily Mail",
        url: "https://www.dailymail.co.uk/travel/article-12823741/Where-world-wants-spend-Christmas-Fascinating-map-reveals-LONDON-thats-No-1-overall-Americans-prefer-festive-break-Vienna.html",
      },
      {
        outlet: "Time Out",
        url: "https://www.timeout.com/usa/news/the-top-u-s-destinations-for-christmas-in-every-state-112923",
      },
      {
        outlet: "Thrillist",
        url: "https://www.thrillist.com/news/nation/most-popular-holiday-travel-destinations-ranked-by-state",
      },
    ],
  },
  {
    slug: "meet-people-to-date",
    type: "Data-led campaign",
    tags: ["Relationships", "US"],
    title: "How to meet people to date in 2024",
    image: "How to meet people to date in 2024.jpg",
    resultNumber: "150+",
    resultLabel: "backlinks",
    mentions: "40+ brand mentions",
    summary:
      "A fresh dating angle that reached Bloomberg and Fox Business.",
    challenge:
      "Dating is one of the most crowded topics in lifestyle media. The brief was to find a new angle on where people are actually meeting partners, and to deliver it quickly.",
    approach:
      "I developed the angle around the unexpected places people use to meet, including professional and fitness platforms, and ran targeted outreach to business and lifestyle journalists to secure links.",
    role:
      "Digital PR Manager. Campaign turnaround, angle development, targeted outreach and link acquisition.",
    coverage: [
      {
        outlet: "Bloomberg",
        url: "https://www.bloomberg.com/news/newsletters/2024-06-04/linkedin-strava-used-for-dating-as-bumble-hinge-tinder-decline",
      },
      {
        outlet: "Fox Business",
        url: "https://www.foxbusiness.com/lifestyle/looking-love-linkedin-data-points-new-trend",
      },
      {
        outlet: "Inquirer USA",
        url: "https://usa.inquirer.net/148721/linkedin-is-the-hottest-dating-site-survey-shows",
      },
    ],
  },
  {
    slug: "tech-cities",
    type: "Data-led campaign",
    tags: ["Tech", "US"],
    title: "The top tech cities in the US: ranking 100 cities",
    image: "The top tech cities in the US_ ranking 100 cities.jpg",
    resultNumber: "130+",
    resultLabel: "backlinks",
    mentions: "40+ brand mentions",
    summary:
      "A 100 city ranking that gave every local newsroom its own result to report.",
    challenge:
      "Tech rankings are everywhere, and most are limited to a handful of famous cities. The brief was to create a ranking broad enough that local media in many cities would care.",
    approach:
      "The study scored 100 US cities across 17 tech related factors in five categories: livability, career and education opportunities, internet coverage, startup ecosystem, and tech communities. I pitched the national result to tech and business media, and each city's result to local press.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "TechTarget",
        url: "https://www.techtarget.com/whatis/feature/Best-cities-for-tech-workers-with-short-commutes",
      },
      {
        outlet: "Boston.com",
        url: "https://www.boston.com/real-estate/tell-us/2024/03/05/boston-a-top-tech-city-report/",
      },
      {
        outlet: "MySanAntonio",
        url: "https://www.mysanantonio.com/business/article/austin-tech-city-18704660.php",
      },
    ],
  },
  {
    slug: "gaming-cities",
    type: "Data-led campaign",
    tags: ["Tech", "Lifestyle", "US"],
    title: "Top gaming cities: the 100 best US cities for gamers",
    image: "Top gaming cities_ the 100 best US cities for gamers.jpg",
    resultNumber: "120+",
    resultLabel: "backlinks",
    mentions: "30+ brand mentions",
    summary:
      "A weighted ranking of 100 US cities for gamers that reached data visualisation media and local news across the US.",
    challenge:
      "Gaming is a huge audience, but most gaming coverage focuses on products and releases, not places. The brief was to create a story about where gamers live best, with a result that every city could react to.",
    approach:
      "The study ranked the 100 most populated US cities using 17 factors across four categories: livability, internet infrastructure, gaming community and retail access, and gaming careers and education. Each factor was normalised on a scale from 0 to 1 and weighted by importance, using sources such as the US Census Bureau, the Entertainment Software Association, Speedtest, and Indeed. I pitched data visualisation and lifestyle outlets with the full ranking, and local newsrooms with their own city's result.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Digg",
        url: "https://digg.com/data-viz/link/best-us-gaming-cities-j8S6h4NgEY",
      },
      {
        outlet: "Houston Chronicle",
        url: "https://www.houstonchronicle.com/news/houston-texas/trending/article/100-best-us-cities-for-gamers-in-2023-18375965.php",
      },
      {
        outlet: "PennLive",
        url: "https://www.pennlive.com/life/2023/09/pennsylvania-city-ranks-among-best-for-gamers-study.html",
      },
    ],
  },
  {
    slug: "beers-by-state",
    type: "Data-led campaign",
    tags: ["Food", "US"],
    title: "The most popular beers across the US",
    image: "The most popular beers across the US.webp",
    resultNumber: "130+",
    resultLabel: "backlinks",
    mentions: "40+ brand mentions",
    summary:
      "A state by state food and drink map that earned national and regional pickup.",
    challenge:
      "Food and drink maps are popular but heavily repeated. The brief was to create a state level story that readers would want to share and local outlets would want to cover.",
    approach:
      "I led the angle around each state's favourite beer, giving every regional outlet its own headline, and pitched food media nationally and local news state by state.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Food & Wine",
        url: "https://www.foodandwine.com/most-popular-beers-in-america-by-state-coffeeness-report-2025-11693481",
      },
      {
        outlet: "AZ Central",
        url: "https://www.azcentral.com/story/entertainment/dining/2025/04/25/coors-most-popular-beer-arizona/83253026007/",
      },
      {
        outlet: "Austin American-Statesman",
        url: "https://www.statesman.com/story/news/state/2025/05/15/most-popular-beer-texas-us-states/83626830007/",
      },
    ],
  },
  {
    slug: "complained-beaches",
    type: "Data-led campaign",
    tags: ["Travel", "Global"],
    title:
      "The world's most complained-about beaches, ranked by 1.3M reviews",
    image: "The world's most complained-about beaches, ranked by 1.3M reviews.webp",
    resultNumber: "100+",
    resultLabel: "backlinks",
    mentions: "130+ brand mentions",
    summary:
      "A contrarian travel story built on over a million TripAdvisor reviews.",
    challenge:
      "Travel content is one of the most saturated spaces in media, and every outlet publishes \"best beaches\" lists. The brief was to find a contrarian angle that cut through.",
    approach:
      "Instead of the best beaches, the campaign ranked the 100 most complained-about beaches in the world by analysing TripAdvisor reviews. The negative angle gave journalists a story with a surprise, and each country had its own local hook.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Nine (Australia)",
        url: "https://www.nine.com.au/travel/worlds-most-disappointing-beach-hawaii-waikiki-20250603-p5ndyo.html",
      },
      {
        outlet: "The Economic Times",
        url: "https://economictimes.indiatimes.com/nri/visit/worlds-10-dirtiest-beaches-for-2025-revealed/articleshow/124754061.cms",
      },
      {
        outlet: "The Mirror",
        url: "https://www.mirror.co.uk/lifestyle/travel/uk-beach-thats-nicer-spain-35401793",
      },
    ],
  },
  {
    slug: "super-bowl-foods",
    type: "Data-led campaign",
    tags: ["Food", "US"],
    title:
      "The most popular Super Bowl foods and desserts across America",
    image: "The most popular Super Bowl foods and desserts across America.webp",
    resultNumber: "100+",
    resultLabel: "backlinks",
    mentions: "30+ brand mentions",
    summary:
      "A reactive, event driven campaign built on state level search data.",
    challenge:
      "Super Bowl food stories appear every year, usually as generic recipe lists. The brief was to create a data-led angle with a local hook for every state.",
    approach:
      "The campaign used Google search data to find each state's favourite Super Bowl food, timed to land before the game. I pitched food and lifestyle outlets nationally and local newsrooms by state.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Better Homes & Gardens",
        url: "https://www.bhg.com/popular-state-super-bowl-foods-2025-8786273",
      },
      {
        outlet: "Houston Chronicle",
        url: "https://www.houstonchronicle.com/news/houston-texas/trending/article/super-bowl-foods-texas-20141103.php",
      },
      {
        outlet: "Hartford Courant",
        url: "https://www.courant.com/2025/02/07/think-you-know-cts-most-popular-super-bowl-food-heres-what-google-search-date-says/",
      },
    ],
  },
  {
    slug: "pumpkin-food",
    type: "Data-led campaign",
    tags: ["Food", "Lifestyle", "US"],
    title: "America's favorite pumpkin food",
    image: "America's favorite pumpkin food.webp",
    resultNumber: "60+",
    resultLabel: "backlinks",
    mentions: "10+ brand mentions",
    summary:
      "A seasonal state by state food story that reached Martha Stewart and regional news.",
    challenge:
      "Autumn food content is everywhere, and pumpkin stories are a yearly fixture. The brief was to create a seasonal angle with real data and a result for every state.",
    approach:
      "I built the story around each state's favourite pumpkin food, which gave local outlets a result to report and discuss. I pitched national food and lifestyle media first, then regional newsrooms with their own state's result.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Martha Stewart",
        url: "https://www.marthastewart.com/the-most-popular-pumpkin-food-in-the-us-11816144",
      },
      {
        outlet: "MLive",
        url: "https://www.mlive.com/life/2025/09/michigans-favorite-pumpkin-food-is-a-head-scratcher.html",
      },
      {
        outlet: "Reno Gazette Journal",
        url: "https://www.rgj.com/story/life/food/2025/09/25/nevadans-best-pumpkin-food/86345553007/",
      },
    ],
  },
  {
    slug: "kids-online-safety",
    type: "Data-led campaign",
    tags: ["Cybersecurity", "Tech", "US"],
    title:
      "Where kids are most and least safe online: state by state rankings",
    image: "Where kids are most and least safe online_ state by state rankings.jpg",
    resultNumber: "90+",
    resultLabel: "backlinks",
    mentions: "20+ brand mentions",
    summary:
      "A child safety ranking that gave local news a clear state result to report.",
    challenge:
      "Parents care deeply about online safety, but state level comparisons are rare. The brief was to turn a sensitive topic into a clear, trustworthy ranking that local and national media would cover responsibly.",
    approach:
      "I positioned the study around the best and worst states, with a clear headline result for each state. National outlets picked up the surprising results, and local news covered how their own state performed.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Bored Panda",
        url: "https://www.boredpanda.com/california-becomes-worst-state-for-kids-online-safety-study-reveals/",
      },
      {
        outlet: "PennLive",
        url: "https://www.pennlive.com/life/2024/09/this-is-where-pa-ranks-for-kids-online-safety-study-says.html",
      },
      {
        outlet: "Fox 13 Salt Lake City",
        url: "https://www.fox13now.com/news/local-news/study-lists-utah-as-best-state-for-kids-online-safety-in-2024",
      },
    ],
  },
  {
    slug: "identity-theft",
    type: "Data-led campaign",
    tags: ["Cybersecurity", "US"],
    title:
      "Identity theft statistics by state: the most and least dangerous US states",
    image: "Identity theft statistics by state_ the most and least dangerous US states.webp",
    resultNumber: "80+",
    resultLabel: "backlinks",
    mentions: "5+ brand mentions",
    summary:
      "A state by state cybersecurity ranking that reached both local news and security press.",
    challenge:
      "Identity theft is a serious concern, but most coverage is full of statistics people ignore. The brief was to make the risk personal by showing how each state compares.",
    approach:
      "I built the story around a clear ranking of states by identity theft risk, then pitched local news for each state's result and cybersecurity outlets for the wider trend.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "NorthJersey.com",
        url: "https://www.northjersey.com/story/news/crime/2024/06/28/nj-ranks-12th-in-country-for-identity-theft-risk-study-says/74194858007/",
      },
      {
        outlet: "Risky Business News",
        url: "https://news.risky.biz/risky-biz-news-law-enforcement-disrupts-six-malware-botnets/",
      },
      {
        outlet: "NJ 101.5",
        url: "https://nj1015.com/ixp/498/p/prevent-identity-theft/",
      },
    ],
  },
  {
    slug: "coffee-affordability",
    type: "Data-led campaign",
    tags: ["Lifestyle", "Food", "US"],
    title: "How long do you have to work to afford a cup of coffee?",
    image: "How long do you have to work to afford a cup of coffee_.png",
    resultNumber: "60+",
    resultLabel: "backlinks",
    mentions: "5+ brand mentions",
    summary:
      "Turning a price statistic into minutes of work, with a state level angle for local press.",
    challenge:
      "The brief was to make a boring price statistic feel personal. \"Coffee costs $4.50\" tells you nothing, so the PR challenge was finding an angle that would make people care about the real cost of their daily coffee.",
    approach:
      "The story translated the price of coffee into the time it takes to earn it, which made the number personal. I localised the findings by state so regional outlets could compare their own state with the national picture.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Hartford Courant",
        url: "https://www.courant.com/2025/05/30/how-much-do-you-have-to-work-to-afford-a-cup-of-coffee-in-ct-compared-to-the-nation-its-pretty-affordable/",
      },
      {
        outlet: "PennLive",
        url: "https://www.pennlive.com/life/2025/06/how-affordable-is-coffee-in-pa-a-study-found-out.html",
      },
      {
        outlet: "YourTango",
        url: "https://www.yourtango.com/self/study-reveals-minutes-working-afford-starbucks-every-day",
      },
    ],
  },
  {
    slug: "netflix-prices",
    type: "Data-led campaign",
    tags: ["Tech", "Global"],
    title:
      "Netflix prices by country: how long do you need to work to pay for it?",
    image: "Netflix prices by country_ how long do you need to work to pay for it_.webp",
    resultNumber: "40+",
    resultLabel: "backlinks",
    mentions: "20+ brand mentions",
    summary:
      "A global price comparison that earned coverage in Spanish and German.",
    challenge:
      "Streaming price stories are common, but they rarely compare what the price actually means for people in different countries. The brief was to create a global story with a local meaning.",
    approach:
      "I framed Netflix prices in terms of working time for each country, so every market had its own headline, and pitched international tech and lifestyle outlets in their local languages.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Digital Trends (Spanish)",
        url: "https://es.digitaltrends.com/entretenimiento/cuanto-tiempo-hay-que-trabajar-para-pagar-netflix-en-todos-los-paises/",
      },
      {
        outlet: "Watson (Germany)",
        url: "https://www.watson.de/unterhaltung/streaming/376519391-netflix-abo-die-streaming-kosten-in-deutschland-im-vergleich",
      },
      {
        outlet: "Idealista (Spain)",
        url: "https://www.idealista.com/news/deco/consejos/2025/10/21/868329-cuanto-tiempo-tienes-que-trabajar-en-cada-pais-para-pagar-una-mensualidad-de-netflix",
      },
    ],
  },
  {
    slug: "uk-coffee-cities",
    type: "Data-led campaign",
    tags: ["Food", "Lifestyle", "UK"],
    title: "The best UK cities for coffee lovers",
    image: "The best UK cities for coffee lovers.webp",
    resultNumber: "20",
    resultLabel: "backlinks",
    mentions: "20+ brand mentions",
    summary:
      "A UK city ranking that earned a Forbes placement and national press.",
    challenge:
      "The UK market is competitive and relies on local relevance. The brief was to create a city ranking for coffee lovers that UK journalists would trust and find interesting.",
    approach:
      "I adapted a proven ranking format for the UK, focusing on city results and surprising findings, and pitched UK lifestyle and national media.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Forbes",
        url: "https://www.forbes.com/sites/kaitlynmcinnis/2024/11/22/these-are-the-best-cities-for-coffee-lovers-in-the-uk-according-to-new-analysis/",
      },
      {
        outlet: "Metro",
        url: "https://metro.co.uk/2024/11/14/surprising-number-coffees-average-londoner-drinks-year-21991076/",
      },
      {
        outlet: "Tea & Coffee Trade Journal",
        url: "https://www.teaandcoffee.net/blog/35591/the-best-cities-in-the-uk-for-coffee-enthusiasts/",
      },
    ],
  },
  {
    slug: "gen-z-dating",
    type: "Survey-led campaign",
    tags: ["Relationships", "Global"],
    title:
      "Gen Z women and men reveal their surprising new preferences for finding love",
    image: "Gen Z women and men reveal their surprising new preferences for finding love.webp",
    resultNumber: "30+",
    resultLabel: "backlinks",
    mentions: "10+ brand mentions",
    summary:
      "A survey that replaced assumptions about Gen Z dating with real answers.",
    challenge:
      "Gen Z dating is one of the most talked-about topics in lifestyle media, but most coverage relies on anecdote and assumption. The brief was to cut through with original survey data.",
    approach:
      "I led the angle and promotion of a survey of Gen Z men and women, focusing on the surprising findings, and pitched business, lifestyle, and international media.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Fast Company",
        url: "https://www.fastcompany.com/91443225/gen-z-is-ghosting-dating-apps-could-ai-win-them-back",
      },
      {
        outlet: "Metropoles (Brazil)",
        url: "https://www.metropoles.com/colunas/pouca-vergonha/descanse-em-paz-geracao-z-diz-que-topa-flertar-ate-em-funeral",
      },
      {
        outlet: "Her World",
        url: "https://www.herworld.com/wellness/gen-z-looking-love-all-wrong-places",
      },
    ],
  },
  {
    slug: "germany-internet-speed",
    type: "Data-led campaign",
    tags: ["Tech", "DACH"],
    title:
      "Average internet speed in Germany 2026: the fastest cities for streaming",
    image: "Average internet speed in Germany 2026_ the fastest cities for streaming.jpg",
    resultNumber: "10+",
    resultLabel: "backlinks",
    mentions: "20+ brand mentions",
    summary:
      "A German city ranking that earned national tech and regional coverage.",
    challenge:
      "Internet speed matters to millions of Germans every day, but most coverage stays technical and impersonal. The brief was to make the story personal and local.",
    approach:
      "I turned internet speed into a city ranking for streaming, with an interactive map, so people could check their own town. National tech and business media covered the ranking, and regional outlets covered local results.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "GameStar",
        url: "https://www.gamestar.de/artikel/netflix-youtube-und-co-in-bester-qualitaet-streamen-diese-karte-zeigt-ob-das-internet-in-eurem-ort-dafuer-schnell-genug-ist,3447492.html",
      },
      {
        outlet: "Business Punk",
        url: "https://www.business-punk.com/tech/recklinghausen-schlaegt-berlin-im-streaming-wo-netflix-co-wirklich-gut-laeuft/",
      },
      {
        outlet: "T-Online Aachen",
        url: "https://aachen.t-online.de/region/aachen/id_101140644/aachen-internetqualitaet-unterdurchschnittlich-40-prozent-glasfaserausbau.html",
      },
    ],
  },
  {
    slug: "europe-ski-resorts",
    type: "Data-led campaign",
    tags: ["Travel", "DACH"],
    title: "The worst ski resorts in Europe, ranked by guest reviews",
    image: "The worst ski resorts in Europe, ranked by guest reviews.jpg",
    resultNumber: "20+",
    resultLabel: "backlinks",
    mentions: "30+ brand mentions",
    summary:
      "A German-language travel ranking covered in Germany and Switzerland.",
    challenge:
      "Ski content is almost always positive. The brief was to find a contrarian angle for the German-speaking market that would stand out from \"best ski resort\" lists.",
    approach:
      "The campaign ranked Europe's most criticised ski resorts based on guest feedback. I pitched travel and regional media in Germany and Switzerland, using the local resorts as the hook.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Merkur",
        url: "https://merkur.de/reise/das-enttaeuschendste-skigebiet-europas-laut-neuer-studie-94028577.html",
      },
      {
        outlet: "Der Westen",
        url: "https://www.derwesten.de/service/urlaub-winter-ski-maengel-id301911858.html",
      },
      {
        outlet: "Blick (Switzerland)",
        url: "https://www.blick.ch/wirtschaft/grosses-ranking-diese-skigebiete-schneiden-bei-gaesten-schlecht-ab-auch-schweizer-standorte-dabei-id21376829.html",
      },
    ],
  },
  {
    slug: "zodiac-self-made-women",
    type: "Data-led campaign",
    tags: ["Lifestyle", "Finance", "Global"],
    title: "Zodiac signs of America's richest self-made women",
    image: "Zodiac signs of America's richest self-made women.webp",
    resultNumber: "30+",
    resultLabel: "backlinks",
    mentions: "10+ brand mentions",
    summary:
      "A playful finance and astrology crossover that reached Parade and YourTango.",
    challenge:
      "Astrology content is hugely shareable, but it rarely comes with data. The brief was to create a story that combined wealth and zodiac signs in a way that lifestyle editors would love.",
    approach:
      "I developed the crossover angle, ranking zodiac signs among America's richest self-made women, and pitched astrology, lifestyle, and women's interest media.",
    role:
      "Digital PR Manager. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "Parade",
        url: "https://parade.com/astrology/ranked-most-least-likely-wealthy-women-zodiac-signs",
      },
      {
        outlet: "The Everygirl",
        url: "https://theeverygirl.com/zodiac-signs-destined-for-financial-success/",
      },
      {
        outlet: "YourTango",
        url: "https://www.yourtango.com/zodiac/zodiac-sign-most-self-made-women",
      },
    ],
  },
  {
    slug: "where-food-comes-from",
    type: "Reactive campaign",
    tags: ["Food", "Global"],
    title: "Where does our food come from?",
    image: "Where does our food come from_.jpg",
    resultNumber: "50+",
    resultLabel: "backlinks",
    mentions: "20+ brand mentions",
    summary:
      "A reactive story that explained global food supply chains to a mainstream audience.",
    challenge:
      "During the pandemic, food supply chains became front page news. Millions of consumers were suddenly asking where their food actually comes from, and the brief was to answer it with data.",
    approach:
      "I developed the story around what each country produces and where food originates, and pitched food, agriculture, and international media as the topic was in the news.",
    role:
      "Digital PR Specialist. Campaign ideation, execution, promotion, measuring and reporting.",
    coverage: [
      {
        outlet: "NDTV Food",
        url: "https://food.ndtv.com/food-drinks/where-does-our-food-come-from-latest-report-reveals-3185727",
      },
      {
        outlet: "FoodNavigator",
        url: "https://www.foodnavigator.com/Article/2022/10/25/how-cultivation-climate-change-and-conflict-have-changed-the-origin-of-your-potato-crisps-study/",
      },
      {
        outlet: "AgWeb",
        url: "https://www.agweb.com/markets/world-markets/who-produces-what-key-agriculture-stats-around-globe",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

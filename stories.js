// ============================================================
//  ClearView News — site settings and story list
//
//  To publish a story: add one entry at the TOP of STORIES.
//  The homepage, the category page, the menu and the headline
//  strip all update by themselves. Categories with no stories
//  stay hidden.
// ============================================================

window.SITE = {
  author: "Rolivhuwa",
  email: "surprisemadidibula0@gmail.com",
  phone: "+27799139133",
  phoneDisplay: "+27 79 913 9133",
  facebookUrl: "" // paste your Facebook page link between the quotes
};

// beat: news | politics | entertainment | sports | science
window.STORIES = [
  {
    beat: "news",
    title: "Iran says three more tankers hit mines in Strait of Hormuz",
    dek: "Iran says three tankers caught fire after hitting mines on Saturday. The US says the main shipping routes are clear.",
    heroDek: "Iran’s navy and Revolutionary Guards say three tankers caught fire on Saturday after striking mines. The US says it has cleared the main routes, and Reuters could not verify the claims.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-hormuz-tankers-mines.html"
  },
  {
    beat: "politics",
    title: "Trump says US does not need an Iran deal, sidelines Vance from talks",
    dek: "President Donald Trump has told Vice President JD Vance to focus on alleged fraud at home instead of negotiations to end the war with Iran.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-trump-iran-deal-vance.html"
  },
  {
    beat: "news",
    title: "Man arrested in Westville after R1.5 million dagga bust",
    dek: "A 32-year-old man has been charged with dealing in dagga after police seized about 320kg of cannabis in Westville.",
    heroDek: "Police say a 32-year-old suspect abandoned a vehicle carrying about 320kg of cannabis and ran into nearby bushes after officers tracked it along the N2 and M19.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-westville-dagga-bust.html",
    image: "westville-dagga-bust.jpg",
    imageAlt: "Bundles of cannabis laid out beside a police vehicle",
    imagePosition: "center 40%"
  },
  {
    beat: "politics",
    featured: true,
    title: "Douglas heads back to the polls on 18 November",
    dek: "The IEC has ordered a revote at the Bongani Community Hall voting district after more than 100 ballots were destroyed before counting.",
    heroDek: "The IEC has ordered a full revote at the Bongani Community Hall voting district in Siyancuma’s Ward 3 after more than 100 cast ballots were destroyed before they could be counted.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-douglas-revote.html",
    image: "results-table.jpg",
    imageAlt: "Table of party election results",
    imagePosition: "center top"
  }
];

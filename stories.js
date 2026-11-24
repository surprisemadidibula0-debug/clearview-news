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
  about: "Independent reporting on top stories, tech and science, business, arts and culture, and sport — written and produced by Rolivhuwa, University of Limpopo.",
  email: "surprisemadidibula0@gmail.com",
  phone: "+27799139133",
  phoneDisplay: "+27 79 913 9133",
  facebookUrl: "https://www.facebook.com/share/1HGgnv528W/"
};

// beat: top | tech | business | arts | sports
window.STORIES = [
  {
    beat: "business",
    title: "Shoprite to buy 40% of tech group DNI as Investec takes a stake in its financial arm",
    dek: "The R5.5 billion deals push the retailer further into banking, payments and mobile services.",
    heroDek: "The R5.5 billion deals push the retailer further into banking, payments and mobile services. They are expected to close in mid-2027.",
    date: "24 November 2026",
    readTime: "1 min read",
    url: "2026-11-shoprite-dni-investec-deals.html"
  },
  {
    beat: "tech",
    title: "Nvidia brings back Jensen Huang as CEO and Wall Street surges",
    dek: "Nvidia shares jumped about 31% and the Nasdaq had its best day since April 2025.",
    heroDek: "Nvidia shares jumped about 31% on Monday and the Nasdaq had its best day since April 2025. Lawmakers from both parties criticised the decision.",
    date: "24 November 2026",
    readTime: "1 min read",
    url: "2026-11-nvidia-huang-returns-wall-street-surges.html"
  },
  {
    beat: "top",
    title: "Car bomb injures at least 19 near government offices in Colombia’s Villavicencio",
    dek: "No one was killed in the Monday night blast outside the Meta governor’s office, and no group has claimed it.",
    heroDek: "No one was killed in the Monday night blast outside the Meta governor’s office, and no group has claimed it.",
    date: "24 November 2026",
    readTime: "1 min read",
    url: "2026-11-colombia-villavicencio-car-bomb.html"
  },
  {
    beat: "top",
    featured: true,
    title: "Johannesburg councillors sworn in, but speaker and mayor elections postponed",
    dek: "Parties agreed to delay the rest of the agenda while the ANC and ActionSA work on a coalition deal. The DA says it has not given up.",
    heroDek: "Parties agreed to delay the rest of the agenda as the ANC and ActionSA work to finalise a coalition deal. The DA, the council’s largest party, says it has not given up.",
    date: "23 November 2026",
    readTime: "2 min read",
    url: "2026-11-joburg-council-sworn-in-mayor-delayed.html"
  },
  {
    beat: "top",
    title: "State memorial for Phumzile Mlambo-Ngcuka on Tuesday, state funeral on Saturday",
    dek: "South Africa’s first female deputy president died at 71. Her family has warned the public about fundraising scams.",
    heroDek: "South Africa’s first female deputy president died at 71. Her family has warned the public about fundraising scams.",
    date: "23 November 2026",
    readTime: "1 min read",
    url: "2026-11-mlambo-ngcuka-memorial-funeral.html"
  },
  {
    beat: "tech",
    title: "COP31 ends without a climate pact after record overtime",
    dek: "The UN climate summit in Antalya failed to adopt its main text, with fossil fuels the biggest sticking point.",
    heroDek: "The UN climate summit in Antalya failed to adopt its main political text, with a dispute over fossil fuels the biggest obstacle.",
    date: "23 November 2026",
    readTime: "2 min read",
    url: "2026-11-cop31-ends-without-pact.html"
  },
  {
    beat: "sports",
    title: "Chiefs beat Sundowns to set up Soweto derby final against Pirates",
    dek: "Kaizer Chiefs won 2-1 after extra time, and Orlando Pirates beat Stellenbosch 2-0. The final is on 12 December.",
    heroDek: "Kaizer Chiefs won 2-1 after extra time at Loftus Versfeld, and Orlando Pirates beat Stellenbosch 2-0. The Carling Knockout final is on 12 December.",
    date: "23 November 2026",
    readTime: "1 min read",
    url: "2026-11-chiefs-pirates-carling-final.html"
  },
  {
    beat: "sports",
    title: "Bangladesh bowled out for 91 as Proteas dominate day one in Centurion",
    dek: "Kagiso Rabada and Marco Jansen took three wickets each. South Africa ended on 88 for 1, three runs behind.",
    heroDek: "Kagiso Rabada and Marco Jansen took three wickets each on a rain-hit opening day, and South Africa ended on 88 for 1, three runs behind.",
    date: "23 November 2026",
    readTime: "1 min read",
    url: "2026-11-bangladesh-91-centurion-test.html"
  },
  {
    beat: "sports",
    title: "Springboks lose to Ireland but reach Nations Championship final against France",
    dek: "A losing bonus point put South Africa top of the southern hemisphere table. The final is at Twickenham on Sunday 29 November.",
    heroDek: "A losing bonus point was enough for South Africa to finish top of the southern hemisphere table. The final is at Twickenham on Sunday 29 November.",
    date: "23 November 2026",
    readTime: "1 min read",
    url: "2026-11-springboks-nations-championship-final.html"
  },
  {
    beat: "sports",
    title: "Springboks face Ireland in Dublin without suspended coach Rassie Erasmus",
    dek: "Erasmus is banned from match days for six matches over his comments about the officiating in the loss to France.",
    heroDek: "Erasmus is banned from match days for six matches over his comments about the officiating in the loss to France. SA Rugby is challenging the ruling.",
    date: "21 November 2026",
    readTime: "2 min read",
    url: "2026-11-springboks-ireland-erasmus-ban.html",
    note: "The match has been played. South Africa lost 20-17 to Ireland but reached the Nations Championship final.",
    latestUrl: "2026-11-springboks-nations-championship-final.html",
    latestTitle: "Springboks reach the final",
    archived: true
  },
  {
    beat: "sports",
    title: "Chiefs face Sundowns and Pirates travel to Stellenbosch in Carling Knockout semi-finals",
    dek: "The two semi-finals are played this weekend. A Soweto derby final is still possible.",
    heroDek: "The two semi-finals are played this weekend, and the winners meet in the final. A Soweto derby final is still possible.",
    date: "21 November 2026",
    readTime: "1 min read",
    url: "2026-11-carling-knockout-semi-finals.html",
    note: "The semi-finals have been played. Chiefs and Pirates meet in the final on 12 December.",
    latestUrl: "2026-11-chiefs-pirates-carling-final.html",
    latestTitle: "Chiefs and Pirates in the final",
    archived: true
  },
  {
    beat: "sports",
    title: "Proteas go top of World Test Championship table after nine-wicket win over Bangladesh",
    dek: "Simon Harmer took 6 for 51 at the Wanderers, but captain Temba Bavuma will miss the second Test.",
    heroDek: "Simon Harmer took 6 for 51 as South Africa won the first Test at the Wanderers, but captain Temba Bavuma will miss the second Test with a calf strain.",
    date: "21 November 2026",
    readTime: "2 min read",
    url: "2026-11-proteas-bangladesh-first-test.html",
    note: "The second Test is now under way in Centurion.",
    latestUrl: "2026-11-bangladesh-91-centurion-test.html",
    latestTitle: "Bangladesh bowled out for 91",
    archived: true
  },
  {
    beat: "sports",
    title: "Mofokeng double sends Bafana Bafana back to the top of AFCON qualifying Group D",
    dek: "Relebohile Mofokeng scored twice as South Africa beat Kenya 2-1 in Nairobi.",
    heroDek: "Relebohile Mofokeng scored twice as South Africa beat Kenya 2-1 in Nairobi on Tuesday, four days after a 2-2 draw in Soweto.",
    date: "21 November 2026",
    readTime: "2 min read",
    url: "2026-11-bafana-kenya-afcon-qualifier.html",
    archived: true
  },
  {
    beat: "top",
    featured: true,
    title: "17 killed in two mass shootings in one night in Gauteng and KwaZulu-Natal",
    dek: "Nine people were shot dead in a shack in Atteridgeville and eight men in a vehicle near Pietermaritzburg. Police have made no arrests.",
    heroDek: "Nine people were shot dead in a shack in Atteridgeville and eight men in a vehicle near Pietermaritzburg on Sunday night. Police have made no arrests in either case.",
    date: "17 November 2026",
    readTime: "2 min read",
    url: "2026-11-mass-shootings-atteridgeville-sweetwaters.html",
    note: "Police had made no arrests when this report was published.",
    archived: true
  },
  {
    beat: "top",
    title: "Unisa wins court order against comedian Doctor Che over “Lawyers from Unisa” videos",
    dek: "The Pretoria High Court has granted the university an interim interdict, ordering the videos removed.",
    heroDek: "The Pretoria High Court has granted the university an interim interdict, ordering the content creator to remove the videos and stop publishing similar content.",
    date: "17 November 2026",
    readTime: "2 min read",
    url: "2026-11-unisa-doctor-che-court-order.html",
    archived: true
  },
  {
    beat: "top",
    title: "Yellow level 2 thunderstorm warning for Gauteng and Limpopo on Tuesday",
    dek: "The weather service warns of localised flooding, hail and power disruptions.",
    heroDek: "The weather service warns of localised flooding, hail and power disruptions as scattered storms move through.",
    date: "17 November 2026",
    readTime: "1 min read",
    url: "2026-11-gauteng-thunderstorm-warning.html",
    note: "This warning has expired.",
    archived: true
  },
  {
    beat: "tech",
    title: "Gauteng malaria deaths nearly triple, health department warns travellers",
    dek: "17 deaths between January and September, up from six last year. Most were linked to travel in southern Africa.",
    heroDek: "The province recorded 17 malaria deaths between January and September, up from six in the same period last year. Most were linked to travel in southern Africa.",
    date: "17 November 2026",
    readTime: "1 min read",
    url: "2026-11-gauteng-malaria-deaths.html",
    archived: true
  },
  {
    beat: "tech",
    title: "OpenAI releases free tool to detect child sexual abuse material, including AI-generated images",
    dek: "The classifier is free to approved organisations. ChatGPT will also warn and suspend users who seek such material.",
    heroDek: "The classifier, built with help from the US child-safety group NCMEC, is free to organisations that apply and are approved. ChatGPT will also warn and suspend users who seek such material.",
    date: "16 November 2026",
    readTime: "2 min read",
    url: "2026-11-openai-csam-classifier.html",
    archived: true,
    image: "openai-warning-screens.jpg",
    imageAlt: "Two phone screens showing account suspension warnings",
    imagePosition: "center"
  },
  {
    beat: "sports",
    title: "Klopp says FIFA has got worse since Blatter and calls for new leadership",
    dek: "Germany coach Jürgen Klopp criticised FIFA president Gianni Infantino in Berlin, ahead of Germany’s match against the Netherlands.",
    heroDek: "Germany coach Jürgen Klopp criticised FIFA president Gianni Infantino in Berlin, ahead of Germany’s Nations League match against the Netherlands.",
    date: "16 November 2026",
    readTime: "2 min read",
    url: "2026-11-klopp-fifa-infantino.html",
    archived: true,
    image: "fifa-story.jpg",
    imageAlt: "A man in a black cap and dark jacket at a stadium",
    imagePosition: "center 30%"
  },
  {
    beat: "top",
    title: "Nearly 1,500 migrants reach Canary Islands in a single day, the most since 2020",
    dek: "Spanish rescuers brought 1,488 people ashore from 14 boats on Saturday, the highest one-day total since 2020.",
    heroDek: "Spanish rescuers brought 1,488 people ashore from 14 boats on Saturday, the highest one-day total since 2020, according to Spain’s EFE news agency.",
    date: "16 November 2026",
    readTime: "2 min read",
    url: "2026-11-canary-islands-migrants.html",
    archived: true,
    image: "canary-boat.jpg",
    imageAlt: "A crowded wooden boat at sea",
    imagePosition: "center 40%"
  },
  {
    beat: "top",
    title: "ANC and DA open formal coalition talks as parties scramble for council deals",
    dek: "The two largest parties met on Sunday, even as the ANC leadership debates how far to go with the DA.",
    heroDek: "The two largest parties met on Sunday, even as the ANC leadership debates how far to go with the DA and holds talks with several other parties.",
    date: "16 November 2026",
    readTime: "2 min read",
    url: "2026-11-anc-da-coalition-talks.html",
    note: "The talks have moved on. The ANC and ActionSA are now close to a coalition deal in Johannesburg that could leave the DA in opposition.",
    latestUrl: "2026-11-joburg-council-sworn-in-mayor-delayed.html",
    latestTitle: "Johannesburg councillors sworn in, but speaker and mayor elections postponed",
    archived: true,
    image: "mbalula-anc.jpg",
    imageAlt: "ANC Secretary-General Fikile Mbalula",
    imagePosition: "center 30%"
  },
  {
    beat: "top",
    title: "Iran says three more tankers hit mines in Strait of Hormuz",
    dek: "Iran says three tankers caught fire after hitting mines on Saturday. The US says the main shipping routes are clear.",
    heroDek: "Iran’s navy and Revolutionary Guards say three tankers caught fire on Saturday after striking mines. The US says it has cleared the main routes, and Reuters could not verify the claims.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-hormuz-tankers-mines.html",
    archived: true,
    image: "hormuz-strait-file.jpg",
    imageAlt: "A motorboat passing a cargo ship in the Strait of Hormuz",
    imagePosition: "center 40%"
  },
  {
    beat: "top",
    title: "Trump says US does not need an Iran deal, sidelines Vance from talks",
    dek: "President Donald Trump has told Vice President JD Vance to focus on alleged fraud at home instead of negotiations to end the war with Iran.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-trump-iran-deal-vance.html",
    archived: true,
    image: "iran-deal-story.jpg",
    imageAlt: "Donald Trump and JD Vance at a Veterans Day ceremony",
    imagePosition: "center 30%"
  },
  {
    beat: "top",
    title: "Man arrested in Westville after R1.5 million dagga bust",
    dek: "A 32-year-old man has been charged with dealing in dagga after police seized about 320kg of cannabis in Westville.",
    heroDek: "Police say a 32-year-old suspect abandoned a vehicle carrying about 320kg of cannabis and ran into nearby bushes after officers tracked it along the N2 and M19.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-westville-dagga-bust.html",
    archived: true,
    image: "westville-dagga-bust.jpg",
    imageAlt: "Bundles of cannabis laid out beside a police vehicle",
    imagePosition: "center 40%"
  },
  {
    beat: "top",
    title: "Douglas heads back to the polls on 18 November",
    dek: "The IEC has ordered a revote at the Bongani Community Hall voting district after more than 100 ballots were destroyed before counting.",
    heroDek: "The IEC has ordered a full revote at the Bongani Community Hall voting district in Siyancuma’s Ward 3 after more than 100 cast ballots were destroyed before they could be counted.",
    date: "15 November 2026",
    readTime: "2 min read",
    url: "2026-11-douglas-revote.html",
    note: "The revote took place on 18 November. The ANC’s candidate won the ward with 49% of the vote, according to Sunday World, and the result was provisional while parties could lodge objections.",
    archived: true,
    image: "results-table.jpg",
    imageAlt: "Table of party election results",
    imagePosition: "center top"
  }
];

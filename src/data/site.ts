/**
 * All page content lives in this file.
 * Edit the values below, then run `npm run dev` to preview your changes.
 * Optional fields such as donation or petition links can be set to `null`
 * to hide them from the page.
 */

export type TimelineEntry = {
  date: string;
  title: string;
  description: string;
};

export type Article = {
  title: string;
  outlet: string;
  date: string;
  url: string;
  excerpt: string;
};

export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

export type HelpLink = {
  label: string;
  url: string;
} | null;

export type SiteContent = {
  name: string;
  pageTitle: string;
  summary: string;
  metaDescription: string;
  language: string;
  hero: {
    ctaLabel: string;
    ctaHref: string;
  };
  timeline: TimelineEntry[];
  articles: Article[];
  photos: Photo[];
  contact: {
    email: string;
    phone: string;
    mailingAddressLines: string[];
  };
  help: {
    intro: string;
    donation: HelpLink;
    petition: HelpLink;
  };
};

export const site: SiteContent = {
  // The person this page is about. Used in the header, hero, and footer.
  name: "Darius Vanchura",

  // Browser tab title and default social share title.
  pageTitle: "Support Darius Vanchura",

  // One-line summary shown under the name in the hero.
  summary:
    "A family is seeking support, fair treatment, and a path home for Darius Vanchura.",

  // Short description used by search engines and link previews.
  metaDescription:
    "Learn Darius Vanchura's story, read recent coverage, and find ways to help.",

  language: "en",

  hero: {
    ctaLabel: "See how you can help",
    ctaHref: "#help",
  },

  // List events in chronological order, oldest first.
  // To add an entry, copy one { date, title, description } block below and
  // place it in date order. Keep entries short, and mark uncertain dates as
  // approximate (for example "2019 (approx.)" or "Date approximate").
  // Do not add personal identifiers (ID numbers, birth date, addresses,
  // phone numbers, emails) or medical details.
  timeline: [
    {
      date: "Date approximate",
      title: "Arrives from Poland",
      description:
        "Darius immigrated to the United States from Poland at age 14.",
    },
    {
      date: "Date approximate",
      title: "Family settles in Lafayette, Indiana",
      description:
        "The Wanczura family made their home in Lafayette, Indiana, where they live today.",
    },
    {
      date: "2026 (approx.)",
      title: "Detained by ICE",
      description:
        "Darius is held by U.S. Immigration and Customs Enforcement at Miami Correctional Facility in Bunker Hill, Indiana, and faces deportation.",
    },
    {
      date: "October 29, 2026",
      title: "Class action filed",
      description:
        "A federal class-action lawsuit, Vasenin v. DHS (N.D. Ind.), was filed on behalf of ICE detainees held at Miami Correctional Facility.",
    },
    {
      date: "November 2026",
      title: "More than six months in ICE custody",
      description:
        "Darius has now been held in ICE custody for more than six months.",
    },
    {
      date: "November 22, 2026",
      title: "Mother writes to the consulate and the ACLU",
      description:
        "His mother, Mirka Wanczura, wrote and signed letters to the Polish Consulate in Chicago and the ACLU of Indiana, which were sent on November 22, 2026.",
    },
  ],

  // News items, newest first. The title becomes a link to `url`.
  // Only add items with a working source link.
  articles: [
    {
      title: "Vasenin et al. v. Mullin et al.",
      outlet: "MacArthur Justice Center",
      date: "November 18, 2026",
      url: "https://www.macarthurjustice.org/case/vasenin-et-al-v-mullin-et-al/",
      excerpt:
        "Attorneys for the detainees asked the court for a preliminary injunction ordering immediate improvements to medical and mental health care at Miami Correctional. The filing describes failures to triage needs, provide timely care, manage medications and chronic conditions, and respond in time to medical emergencies.",
    },
    {
      title:
        "Vasenin v. U.S. Department of Homeland Security, 3:26-cv-01582 (N.D. Ind.)",
      outlet: "Civil Rights Litigation Clearinghouse",
      date: "October 29, 2026",
      url: "https://clearinghouse.net/case/48594/",
      excerpt:
        "Three people detained at Miami Correctional Facility filed a class action in the U.S. District Court for the Northern District of Indiana on behalf of the ICE detainees held there. The complaint alleges punitive conditions, including excessive solitary confinement, inadequate medical and mental health care, unsanitary living conditions, and staff violence, and names DHS, ICE, and the Indiana Department of Correction. The plaintiffs seek class certification and injunctive relief.",
    },
    {
      title:
        "Indiana Adds $3.5M To Boost Medical Staffing For ICE Detainees At Miami Prison",
      outlet: "InkFreeNews (from the Indianapolis Star)",
      date: "October 7, 2026",
      url: "https://www.inkfreenews.com/2026/10/07/indiana-adds-3-5m-to-boost-medical-staffing-for-ice-detainees-at-miami-prison/",
      excerpt:
        "A contract amendment signed July 22 by the Indiana Department of Correction and Centurion Health provides $3.5 million for about 42 additional full-time health care positions for detainees, more than half of them nurses. Records reviewed by IndyStar showed Centurion's staffing at the facility fell from 77% of required hours in October 2025 to 54% by June 2026.",
    },
    {
      title:
        "ICE responds after reports of medical, staffing failures at prison holding immigration detainees",
      outlet: "Indiana Capital Chronicle",
      date: "July 30, 2026",
      url: "https://indianacapitalchronicle.com/2026/07/30/ice-responds-after-reports-of-medical-staffing-failures-at-prison-holding-immigration-detainees/",
      excerpt:
        "In a letter to U.S. Rep. André Carson, ICE's acting director said 44 medication doses were missed over a 22-day period in April because the medication was not available, and that the facility had not yet had a compliance inspection from ICE's detention oversight office. The letter offered no new information on the two deaths at the facility, citing ongoing investigations.",
    },
    {
      title: "Lawsuits Allege Abuse, Medical Neglect Of Miami Correctional ICE Detainee",
      outlet: "InkFreeNews (from the Indianapolis Star)",
      date: "July 29, 2026",
      url: "https://www.inkfreenews.com/2026/07/29/lawsuits-allege-abuse-medical-neglect-of-miami-correctional-ice-detainee/",
      excerpt:
        "After an IndyStar investigation reported severe staffing shortages and medical care backlogs at the facility, Gov. Mike Braun directed the Indiana Department of Correction to \"fully review\" the claims. His press secretary said on July 24 that an internal audit was underway.",
    },
    {
      title:
        "ACLU of Indiana Files Two Lawsuits Over Medical Neglect and Mistreatment of ICE Detainee at Miami Correctional Facility",
      outlet: "ACLU of Indiana",
      date: "July 27, 2026",
      url: "https://www.aclu-in.org/press-releases/aclu-of-indiana-files-two-lawsuits-over-medical-neglect-and-mistreatment-of-ice-detainee-at-miami-correctional-facility/",
      excerpt:
        "The ACLU of Indiana filed two federal lawsuits on behalf of a former detainee who suffered a severe seizure after staff were not present to give him his prescribed medication, and who was later pepper-sprayed by officers while still recovering. One suit alleges that staffing shortages at Centurion Health, the facility's medical contractor, repeatedly disrupted his medication; the other is against the correctional officers.",
    },
    {
      title: "Cause of death of second ICE detainee at Miami Correctional ruled natural",
      outlet: "ABC57",
      date: "April 23, 2026",
      url: "https://www.abc57.com/news/cause-of-death-of-second-ice-detainee-at-miami-correctional-ruled-natural",
      excerpt:
        "Autopsy reports obtained by ABC57 ruled the deaths of Lorth Sim, 59, in February and Tuan Van Bui, 55, in April natural, attributing both to cardiovascular disease. The ACLU of Indiana called for transparency, saying two deaths in less than two months \"raise serious concerns about conditions inside the facility.\"",
    },
    {
      title: "Death of Vietnamese immigrant in Indiana facility is latest ICE detainee fatality",
      outlet: "ABC News",
      date: "April 7, 2026",
      url: "https://abcnews.com/US/death-vietnamese-immigrant-indiana-facility-latest-ice-detainee/story?id=131800634",
      excerpt:
        "Tuan Van Bui, 55, died in ICE custody at Miami Correctional Facility on April 1, the second death there in less than two months. Court records show he had filed a habeas petition challenging his detention in February.",
    },
  ],

  // Photo files belong in /public/photos and are referenced from the site root.
  photos: [
    {
      src: "/photos/darius.jpg",
      alt: "Darius",
      caption: "Darius",
    },
    {
      src: "/photos/darius-with-sister.jpg",
      alt: "Darius with his sister",
      caption: "Darius with his sister",
    },
    {
      src: "/photos/darius-with-father-and-sister.jpg",
      alt: "Darius with his father and sister",
      caption: "Darius with his father and sister",
    },
  ],

  // Use example or consented contact details only. Set a field to an empty
  // string to hide it.
  contact: {
    email: "mirkaw944@icloud.com",
    phone: "+1 (765) 714-7058",
    mailingAddressLines: [
      "Mirka Wanczura",
      "2540 Lafayette Dr",
      "Lafayette, IN 47909-2444",
      "United States",
    ],
  },

  help: {
    intro:
      "If you would like to help, start with the options below. Please share only information that the family has made public.",
    donation: {
      label: "Contribute to legal funds",
      url: "https://example.com/donate",
    },
    petition: {
      label: "Sign the petition",
      url: "https://example.com/petition",
    },
  },
};

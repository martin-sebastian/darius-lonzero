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

export type SocialLink = {
  label: string;
  url: string;
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
    social: SocialLink[];
  };
  help: {
    intro: string;
    donation: HelpLink;
    petition: HelpLink;
  };
};

export const site: SiteContent = {
  // The person this page is about. Used in the header, hero, and footer.
  name: "Jane Doe",

  // Browser tab title and default social share title.
  pageTitle: "Support Jane Doe",

  // One-line summary shown under the name in the hero.
  summary:
    "A family is seeking support, fair treatment, and a path home for Jane Doe.",

  // Short description used by search engines and link previews.
  metaDescription:
    "Learn Jane Doe's story, read recent coverage, and find ways to help.",

  language: "en",

  hero: {
    ctaLabel: "See how you can help",
    ctaHref: "#help",
  },

  // List events in chronological order, oldest first.
  timeline: [
    {
      date: "March 12, 2025",
      title: "Taken into custody",
      description:
        "Jane Doe was taken into immigration custody and transferred to a detention facility far from her family.",
    },
    {
      date: "April 2, 2025",
      title: "First court appearance",
      description:
        "The family attended the first hearing and began assembling records, letters of support, and legal representation.",
    },
    {
      date: "June 18, 2025",
      title: "Bond request denied",
      description:
        "A request for release on bond was denied. Relatives continued to visit when allowed and to gather community support.",
    },
    {
      date: "September 9, 2025",
      title: "Family launches this page",
      description:
        "This page was created so friends, neighbors, and the press can follow updates and find accurate contact information.",
    },
    {
      date: "November 3, 2025",
      title: "Legal team files a motion",
      description:
        "Counsel filed a motion in Jane's case. The family is asking supporters to stay informed and share only verified updates.",
    },
  ],

  // News items. The title becomes a link to `url`.
  articles: [
    {
      title: "Family seeks support after detention",
      outlet: "The Example Times",
      date: "July 21, 2025",
      url: "https://example.com/family-seeks-support",
      excerpt:
        "A local family describes the impact of prolonged detention and asks the public to follow the case with care.",
    },
    {
      title: "Community gathers for a vigil downtown",
      outlet: "City News",
      date: "August 14, 2025",
      url: "https://example.com/community-vigil",
      excerpt:
        "Neighbors, faith groups, and classmates held a peaceful vigil and collected letters to include in the court record.",
    },
    {
      title: "What due process looks like in practice",
      outlet: "Regional Public Radio",
      date: "October 2, 2025",
      url: "https://example.com/due-process-explained",
      excerpt:
        "An explainer on hearings, counsel, and how families can support a loved one without sharing sensitive personal details.",
    },
  ],

  // Photo files belong in /public/photos and are referenced from the site root.
  photos: [
    {
      src: "/photos/placeholder-portrait.svg",
      alt: "Placeholder portrait of a person standing near a window",
      caption: "Replace this placeholder with a photo you have permission to share.",
    },
    {
      src: "/photos/placeholder-community.svg",
      alt: "Placeholder illustration of people gathered in support",
      caption: "A community gathering. Add your own caption and image.",
    },
    {
      src: "/photos/placeholder-letters.svg",
      alt: "Placeholder illustration of letters and documents on a table",
      caption: "Letters of support. Do not publish confidential case documents.",
    },
  ],

  // Use example or consented contact details only. Set a field to an empty
  // string to hide it. Leave `social` as an empty array to hide that list.
  contact: {
    email: "family@example.com",
    phone: "+1 555 555 0100",
    mailingAddressLines: [
      "123 Main Street",
      "Anytown, ST 00000",
      "United States",
    ],
    social: [
      { label: "Updates on X", url: "https://example.com/updates" },
      { label: "Facebook page", url: "https://example.com/facebook" },
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

# Advocacy page template

A minimal [Astro](https://astro.build) starter for a single-page personal advocacy site. It is meant for families and supporters who want a calm, public page with a timeline, news links, a photo gallery, and clear contact or “how to help” information.

All visible content comes from one data file, `src/data/site.ts`, so you can update the page without editing layout code. The included text, addresses, and images are placeholders only.

## Prerequisites

- [Node.js](https://nodejs.org) 22.12 or later (Astro 7 requires Node.js 22.12+; odd-numbered releases such as 23 are not supported)
- npm, which is included with Node.js

## Setup

```bash
npm install
```

Start a local preview with live reload:

```bash
npm run dev
```

Then open the URL printed in the terminal, usually `http://localhost:4321`.

Create a production build in the `dist/` folder:

```bash
npm run build
```

Preview that production build locally:

```bash
npm run preview
```

## Customize the page

Open `src/data/site.ts` and edit the `site` object. Save the file and, if the dev server is running, the page will update on its own.

### Name, summary, and call to action

- `name` — the person the page is about. It appears in the header, hero, and footer.
- `pageTitle` — the browser tab title.
- `summary` — the one-line description under the name.
- `metaDescription` — a short sentence used by search engines and link previews.
- `language` — the page language code, such as `"en"`.
- `hero.ctaLabel` and `hero.ctaHref` — the button in the hero. The default href, `"#help"`, scrolls to the contact section.

### Timeline

Edit the `timeline` array. Keep events in chronological order, oldest first. Each entry needs:

- `date` — a human-readable date, such as `"March 12, 2025"`
- `title` — a short heading
- `description` — one or two sentences

To remove the sample events, replace the array with your own entries. An empty array shows a short fallback message.

### News and articles

Edit the `articles` array. Each item needs:

- `title` — used as the link text
- `outlet` — the publication or site name
- `date` — a human-readable date
- `url` — the full link to the article
- `excerpt` — a short summary

Article links open in a new tab. Use only links you are comfortable making public.

### Photo gallery

Edit the `photos` array. Each item needs:

- `src` — a path starting at the site root, usually `/photos/your-file.jpg`
- `alt` — a short description of what is in the image, for screen readers and if the image fails to load
- `caption` — optional text shown under the photo. Use an empty string if you do not want a caption.

### Contact and how to help

- `help.intro` — a short paragraph at the top of the contact section.
- `help.donation` and `help.petition` — each can be an object with `label` and `url`, or `null` to hide that button.
- `contact.email` — shown as a `mailto:` link. Use `""` to hide it.
- `contact.phone` — shown as a `tel:` link. Use `""` to hide it.
- `contact.mailingAddressLines` — each string is a line of the address. Use `[]` to hide the address.
- `contact.social` — a list of `{ label, url }` links. Use `[]` to hide the list.

## Add photos

1. Put image files in `public/photos/`. JPEG, PNG, WebP, or SVG files all work.
2. Add a matching entry to `photos` in `src/data/site.ts`. If you saved `public/photos/jane-portrait.jpg`, the `src` should be `"/photos/jane-portrait.jpg"`.
3. Write accurate `alt` text and a caption.
4. Delete the sample SVG files (`placeholder-portrait.svg`, `placeholder-community.svg`, and `placeholder-letters.svg`) once you no longer need them, and remove those entries from the data file.

The templates in `public/photos/` are generic drawings, not photographs of real people. They exist only so the gallery has something to show before you add your own images.

## Privacy and safety

This template is a public website. Anything you put in the data file, the photo folder, or the built site can be copied, archived, or indexed.

- Do not publish immigration file numbers, A-numbers, alien registration numbers, passport numbers, or other sensitive government IDs.
- Do not publish a home address, private phone number, or personal email without the person’s informed consent — and consider whether a general contact inbox is safer.
- Do not upload court filings, medical records, or other documents that contain private details.
- Get permission before posting photos of anyone, especially children. Avoid images that show a detention facility interior, ID badges, or visitors if that could create a risk.
- Share only facts the family is comfortable making public. If a detail is still unverified, leave it off the page.
- Review the built site before you deploy it, including image file names and the contents of `src/data/site.ts`.

## Deploy

This project is a static Astro site. The build command is `npm run build`, and the output folder is `dist/`. Set `site` in `astro.config.mjs` to your public URL before you deploy so link previews resolve correctly.

These notes are generic. This repository is not pre-connected to a host, and nothing is deployed for you.

### Cloudflare Pages

1. Create a new Pages project from the Git repository, or upload the `dist/` folder.
2. Use the Astro framework preset when it is offered.
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Import the repository in Netlify, or use the Netlify CLI.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import the repository in Vercel. Astro is usually detected automatically.
2. If you need to set it by hand, use `npm run build` and output `dist`.

### GitHub Pages

1. If the site will live at `https://USERNAME.github.io/REPO/`, set `base: "/REPO/"` (and `site`) in `astro.config.mjs`.
2. Add a GitHub Actions workflow that runs `npm ci`, `npm run build`, and publishes the `dist/` folder to GitHub Pages. The [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) has a complete example.

## License

This template is released under the [MIT License](LICENSE).

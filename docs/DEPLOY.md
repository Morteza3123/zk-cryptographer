# Deploying to Vercel

The site is already configured for Vercel: `astro.config.mjs` uses the
`@astrojs/vercel/serverless` adapter in `output: "hybrid"` mode (everything
static except the two apply-form API routes), so no extra `vercel.json` is
needed — Vercel auto-detects the Astro framework and adapter on import.

## 1. Push the repo to GitHub

The project is git-initialized locally but has no commits yet and no GitHub
remote. From the project root:

```bash
git add -A
git commit -m "Initial commit"
```

Then create a new (empty) repository on GitHub — via github.com or `gh repo
create zk-cryptographer --private --source=. --remote=origin` if you have the
GitHub CLI set up — and push:

```bash
git push -u origin master
```

## 2. Import the project in Vercel

1. [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → pick
   the repo you just pushed.
2. Vercel should auto-detect **Astro** as the framework preset and the build
   command (`astro build`) / output directory — no changes needed there.
3. Before the first deploy, add the six environment variables from
   `.env.example` under **Environment Variables** (see `docs/SETUP.md` for
   where each value comes from): `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
   `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`, `RESEND_API_KEY`,
   `NOTIFICATION_EMAIL_TO`, `NOTIFICATION_EMAIL_FROM`. You can skip these for
   now and add them later — the apply forms work without them, they just
   won't record leads anywhere until these are set (see `docs/SETUP.md`).
4. Click **Deploy**. Every subsequent push to `master` auto-deploys to
   production; every other branch/PR gets its own preview URL.

## 3. Custom domain + the real SITE_URL

`astro.config.mjs` currently has a placeholder:

```js
const SITE_URL = "https://zkcryptographer.example";
```

This value feeds the sitemap, RSS feed, canonical URLs, and Open Graph tags —
it needs to be the real production domain or all of those will point at the
placeholder. Once you've decided on and connected a domain in Vercel's
**Settings → Domains**:

1. Change `SITE_URL` in `astro.config.mjs` to the real domain (e.g.
   `https://zkcryptographer.com`).
2. Commit and push — Vercel redeploys automatically.

## 4. What's already wired up for SEO

- **Sitemap**: `@astrojs/sitemap` generates `/sitemap-index.xml` automatically
  from every prerendered page at build time.
- **RSS feed**: `/rss.xml` (`src/pages/rss.xml.ts`), built from the `posts`
  content collection, linked from every page's `<head>`.
- **robots.txt**: `/robots.txt` (`src/pages/robots.txt.ts`), points at the
  sitemap using whatever `SITE_URL` is set to.
- **Open Graph / Twitter cards**: every page sets `og:title`, `og:description`,
  `og:image` (+ width/height), `og:url`, and matching `twitter:*` tags from
  `BaseLayout.astro`. The default share image is `public/images/og-default.png`
  (cropped from the YouTube banner art); blog posts override it with the
  square `public/images/og-square.png`. Pass a different `ogImage` prop to any
  layout to override per-page.
- **Favicon**: `public/favicon.svg` (traced from the shared logo symbol) plus
  PNG fallbacks (`favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`,
  `images/icon-512.png`) and a `site.webmanifest`.

## 5. Analytics

Deferred for now (your call) — nothing is wired up. When you're ready, the
usual options are Plausible (hosted, ~$9/mo, zero ops) or Umami
(open-source, free to self-host or a limited free cloud tier). Either is a
single `<script>` tag added to `BaseLayout.astro`'s `<head>`, scoped to your
real domain once one exists.

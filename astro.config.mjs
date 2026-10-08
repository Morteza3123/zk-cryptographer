import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Placeholder production URL — swap for the real domain once one is chosen.
const SITE_URL = "https://zkcryptographer.example";

export default defineConfig({
  site: SITE_URL,
  // "hybrid": every page is static by default (fast, cheap to host) except
  // the two apply-form API routes, which opt into server rendering with
  // `export const prerender = false` so they can run real request-time
  // logic (Google Sheets + email) on Vercel's serverless runtime.
  output: "hybrid",
  adapter: vercel(),
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
});

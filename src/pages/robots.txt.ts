import type { APIRoute } from "astro";

// A dynamic route (rather than a static public/robots.txt) so the sitemap
// URL always matches whatever SITE_URL is set to in astro.config.mjs —
// nothing to remember to update by hand when the real domain goes live.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

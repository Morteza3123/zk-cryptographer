import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "ZK Cryptographer Blog",
    description:
      "Zero-knowledge proofs, applied cryptography, and the math behind them — explained without the hand-waving.",
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      categories: [post.data.category],
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};

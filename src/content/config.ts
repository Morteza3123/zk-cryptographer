import { defineCollection, reference, z } from "astro:content";

// Tracks are pure metadata (no body) — one JSON file per track under
// src/content/tracks/. The filename (without extension) is the track's id,
// referenced by lessons below and used to build /learn/<id> URLs.
const tracks = defineCollection({
  type: "data",
  schema: z.object({
    num: z.string(), // "01".."04", shown on the hub card
    sym: z.string(), // HTML entity for the badge glyph, e.g. "&#931;"
    title: z.string(),
    level: z.string(), // e.g. "BEGINNER – INTERMEDIATE"
    description: z.string(),
    lessonCount: z.number(),
  }),
});

// Lessons are real MDX content. Only a handful exist for now (the rest of
// each track's curriculum is listed in that track's lessonManifest data,
// not yet written as full content) — this collection holds the ones that
// are actually authored.
const lessons = defineCollection({
  type: "content",
  schema: z.object({
    track: reference("tracks"),
    module: z.string(), // sidebar group, e.g. "Modular Arithmetic"
    lessonNumber: z.string(), // "04", matches the sidebar index
    title: z.string(),
    duration: z.string(), // "5:22"
    description: z.string(),
    youtubeHref: z.string().optional(),
    order: z.number(), // position within the track, for prev/next
    prevTitle: z.string().optional(),
    prevHref: z.string().optional(),
    nextTitle: z.string().optional(),
    nextHref: z.string().optional(),
  }),
});

const postCategories = z.enum([
  "Zero-Knowledge",
  "Math",
  "Cryptography",
  "ZK Development",
  "News/Ecosystem",
  "Post-Quantum Cryptography",
  "Formal Verification",
]);

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: postCategories,
    excerpt: z.string(),
    date: z.date(),
    readingTime: z.string(), // "9 min read"
    draft: z.boolean().default(false),
  }),
});

export const collections = { tracks, lessons, posts };

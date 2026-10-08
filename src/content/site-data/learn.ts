// Content for the Learning Hub (/learn) and track overview pages.
// Track metadata itself lives in the `tracks` content collection
// (src/content/tracks/*.json); this file holds page copy plus the
// full per-track lesson manifest used to render the sidebar/curriculum
// list — most of these lessons aren't written as real content yet, so
// they're plain data here rather than entries in the `lessons` collection.

export const learnHero = {
  kicker: "THE LEARNING HUB",
  heading: "A curriculum, not a video dump.",
  sub: "Four tracks, in order, each building on the last — from the math underneath ZK to shipping proof systems in production.",
  stats: [
    { num: "4", label: "Tracks" },
    { num: "64", label: "Lessons" },
    { num: "0 → Prod", label: "Outcome" },
  ],
};

// Hero visual (TrackStack) — order matches the track cards below.
export const trackStack = [
  { num: "01", sym: "&#931;", title: "Math", level: "BEGINNER – INTERMEDIATE" },
  { num: "02", sym: "&#9670;", title: "Cryptography", level: "INTERMEDIATE" },
  { num: "03", sym: "&#9678;", title: "Fundamentals", level: "BEGINNER" },
  { num: "04", sym: "&#11041;", title: "ZK Development", level: "ADVANCED" },
];

export const fitTogether = {
  kicker: "HOW IT FITS TOGETHER",
  title: "Four tracks, one path to production",
  steps: [
    { num: "01", label: "Math" },
    { num: "02", label: "Cryptography" },
    { num: "03", label: "Fundamentals" },
    { num: "04", label: "ZK Development" },
  ],
};

export const allTracks = {
  kicker: "ALL TRACKS",
  title: "Pick a track, or follow them in order",
};

// Order here is the track id (filename in src/content/tracks/), matched
// against each track's `num` field.
export const trackOrder = ["math", "cryptography", "fundamentals", "zk-development"];

interface LessonManifestItem {
  num: string;
  title: string;
  duration: string;
  slug?: string; // present only for lessons that are actually written
}
interface LessonModule {
  module: string;
  items: LessonManifestItem[];
}

// The full sidebar curriculum per track. Only items with a `slug` have a
// real lesson page (src/content/lessons/<slug>.mdx) — the rest render as
// inert "coming soon" rows so the curriculum reads as complete even though
// only the first lesson is fully migrated so far.
export const lessonManifest: Record<string, LessonModule[]> = {
  math: [
    {
      module: "Foundations",
      items: [
        { num: "00", title: "ZK Math — Introduction", duration: "8:04" },
        { num: "01", title: "Variables, Expressions & Equations", duration: "5:11" },
        { num: "02", title: "Exponents and Powers", duration: "5:25" },
        { num: "03", title: "Divisibility, Factors & Primes", duration: "6:46" },
      ],
    },
    {
      module: "Modular Arithmetic",
      items: [
        { num: "04", title: "Modular Arithmetic", duration: "5:22", slug: "modular-arithmetic" },
        { num: "05", title: "Modular Inverses & Fermat's", duration: "4:31" },
        { num: "06", title: "Finite Fields", duration: "4:08" },
      ],
    },
    {
      module: "Algebra for ZK",
      items: [
        { num: "07", title: "Polynomials", duration: "4:25" },
        { num: "08", title: "Polynomial Arithmetic", duration: "3:41" },
        { num: "09", title: "Lagrange Interpolation", duration: "3:33" },
        { num: "10", title: "Schwartz-Zippel Lemma", duration: "3:38" },
      ],
    },
    {
      module: "Groups & Curves",
      items: [
        { num: "11", title: "Groups & Cyclic Groups", duration: "3:23" },
        { num: "12", title: "Elliptic Curves", duration: "3:47" },
        { num: "13", title: "Bilinear Pairings", duration: "3:28" },
      ],
    },
  ],
  cryptography: [],
  fundamentals: [],
  "zk-development": [],
};

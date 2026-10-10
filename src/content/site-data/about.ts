// Content for the About page.

export const aboutHero = {
  kicker: "ABOUT",
  heading: "The engineer behind ZK Cryptographer",
  sub: "I'm Morteza — a blockchain engineer who's spent the last 6+ years in blockchain and zero-knowledge engineering, with a focus on ZK identity and privacy. ZK Cryptographer is where that work turns into structured learning, 1:1 coaching, and hands-on help for teams shipping real ZK systems.",
  stats: [
    { num: "6+", label: "years in ZK & blockchain" },
    { num: "ZK", label: "identity & privacy focus" },
    { num: "1:1", label: "coaching, not cohorts" },
  ],
};

export const aboutHeroChips = [
  { sym: "&#9679;", label: "6+ Years", sub: "ZK & BLOCKCHAIN ENGINEERING" },
  { sym: "&#9670;", label: "Identity & Privacy", sub: "ZK SPECIALIZATION" },
  { sym: "&#9632;", label: "Teaching & Coaching", sub: "ZK CRYPTOGRAPHER" },
];

export const aboutStory = {
  kicker: "BACKGROUND",
  title: "Why ZK Cryptographer exists",
  paragraphs: [
    "I've spent the last 6+ years working in blockchain engineering, with the last stretch of that focused specifically on zero-knowledge — proof systems, circuits, and the identity and privacy applications that ZK makes possible. Most of that work has been hands-on: picking a proving system, writing and auditing circuits, and getting verifiers integrated into systems that actually ship.",
    "Along the way I kept running into the same pattern: developers who wanted to build in ZK but got stuck well before the interesting engineering problems, because the math — finite fields, modular arithmetic, polynomial commitments — wasn't explained anywhere in a way that started from zero. ZK Cryptographer started as a way to fix that for myself, and turned into the structured learning tracks, coaching, and consulting you'll find across this site.",
    "The throughline across all of it is the same: start from the actual math, not hand-waving, and connect it back to code you can run and circuits you can ship.",
  ],
};

export const aboutFocus = {
  kicker: "WHAT I FOCUS ON",
  title: "Three things, done properly",
  items: [
    {
      title: "ZK identity & privacy",
      desc: "Proof systems and protocols for proving facts about identity and data without revealing the underlying information.",
    },
    {
      title: "Circuits & proving systems",
      desc: "Picking the right proving system for the job, then writing, testing, and auditing the circuits that implement it.",
    },
    {
      title: "Teaching what I use",
      desc: "The Learning Hub, 1:1 coaching, and the ZK math series all come from the same material I use on real engagements — not a separate, simplified track.",
    },
  ],
};

export const aboutFinalCta = {
  kicker: "LET'S TALK",
  heading: "Have something specific in mind?",
  sub: "Whether it's a concept to understand, a skill to build, or a system that needs to ship — start with a free intro call.",
  ctaLabel: "Book a free intro call",
  ctaHref: "/coaching/apply",
};

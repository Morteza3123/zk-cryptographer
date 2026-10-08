// Content for the Coaching page. Kept as typed data (not hardcoded in the
// .astro file) so the copy can be edited without touching markup.

export const coachingHero = {
  kicker: "1:1 COACHING",
  heading: "Learn zero-knowledge, with someone who ships it.",
  sub: "A personalized coaching plan for engineers, founders, and researchers who want to go from reading about ZK to building with it — math, proof systems, circuits, and a real project, with direct feedback the whole way.",
  stats: [
    { num: "6+", label: "years in ZK & blockchain" },
    { num: "1:1", label: "every session, no cohorts" },
    { num: "100%", label: "plan built around your goal" },
  ],
};

export const personas = [
  {
    title: "Engineers moving into ZK",
    desc: "You can code, but proof systems and circuits are new — you want a fast, guided on-ramp instead of piecing it together from scattered docs.",
  },
  {
    title: "Founders building a protocol",
    desc: "You need to understand the trade-offs well enough to make real architecture decisions, even if someone else writes the circuits.",
  },
  {
    title: "Researchers wanting applied intuition",
    desc: "The theory is familiar; you want the engineering instincts for how it actually gets built and where it breaks.",
  },
];

export const focusAreas = [
  {
    num: "01",
    sym: "&#931;",
    title: "Foundations & Math",
    level: "~2–3 sessions",
    desc: "Modular arithmetic, finite fields, groups, and elliptic curves — the exact prerequisites for understanding any proof system, taught at the pace your background needs.",
    meta: "Groups · Fields · Curves",
  },
  {
    num: "02",
    sym: "&#9670;",
    title: "Proof Systems Deep-Dive",
    level: "~3–4 sessions",
    desc: "Groth16, PLONK, STARKs, and Bulletproofs: how each one actually works, their trade-offs, and how to choose the right one for what you're building.",
    meta: "Groth16 · PLONK · STARKs",
  },
  {
    num: "03",
    sym: "&#11041;",
    title: "Circuit Design & Tooling",
    level: "~4–6 sessions",
    desc: "Writing and debugging real circuits in Circom, Noir, or Halo2 — constraint systems, witness generation, and the bugs that only show up when verification fails.",
    meta: "Circom · Noir · Halo2",
  },
  {
    num: "04",
    sym: "&#9638;",
    title: "Applied Project Mentorship",
    level: "Ongoing",
    desc: "Ship something real — a private identity proof, an anonymous voting circuit, or a ZK feature for your own protocol — with code review at every step.",
    meta: "Code review every session",
  },
];

export const processSteps = [
  { num: "1", label: "Apply", desc: "Tell me your background, goals, and timeline in a short application." },
  { num: "2", label: "Intro call", desc: "A free 30-minute call to check fit and sketch the shape of your plan." },
  { num: "3", label: "Personalized roadmap", desc: "A plan built around your goals, schedule, and starting point — not a fixed syllabus." },
  { num: "4", label: "Sessions & review", desc: "Live 1:1 sessions plus async code and notes review in between." },
];

export const plans = [
  {
    name: "Single Session",
    tag: "",
    duration: "1 call · 90 min",
    desc: "Unstick one specific problem — a circuit bug, a design decision, a proof-system choice, or an architecture review.",
    features: ["One focused 90-minute call", "Written summary & next steps", "Good for a specific blocker"],
  },
  {
    name: "4-Week Sprint",
    tag: "",
    duration: "Weekly sessions · 4 weeks",
    desc: "Go deep on one focus area — foundations, a proof system, or circuit tooling — anchored by a small project.",
    features: ["Weekly 1:1 sessions", "Async review between calls", "One focus area, one small project"],
  },
  {
    name: "12-Week Mentorship",
    tag: "MOST POPULAR",
    duration: "Weekly or bi-weekly · 12 weeks",
    desc: "The full roadmap: foundations through a shipped project, with ongoing mentorship and code review.",
    features: ["Full curriculum, your pace", "Ongoing project mentorship", "Code review between every session"],
  },
];

export const faqItems = [
  {
    question: "Do I need a strong math background to start?",
    answer: "No — the Foundations & Math focus area exists for exactly this. If you're already comfortable with the math, we skip straight to proof systems and circuits.",
  },
  {
    question: "What tools and languages do we use?",
    answer: "Mostly Circom, Noir, and Halo2 for circuits, plus whatever proving-system libraries are relevant to what you're building. We'll pick the right tools for your goal on the intro call.",
  },
  {
    question: "How does scheduling work?",
    answer: "Sessions are booked directly with me once your plan starts — weekly or bi-weekly depending on the plan. Times are flexible across most time zones.",
  },
  {
    question: "Can my company sponsor this?",
    answer: "Yes — several plans are paid for by an employer as part of upskilling. I'm happy to provide an invoice or write-up describing the engagement if HR needs one.",
  },
  {
    question: "What if I need to pause or reschedule?",
    answer: "Life happens — sessions can be rescheduled with reasonable notice, and multi-week plans can be paused and picked back up later.",
  },
];

export const finalCta = {
  kicker: "READY TO START?",
  heading: "Tell me where you're starting from.",
  sub: "Apply and I'll follow up by email within 2 business days to schedule a free intro call.",
  ctaLabel: "Apply for a coaching plan",
  ctaHref: "/coaching/apply",
};

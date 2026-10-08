// Content for the Services page.

export const servicesHero = {
  kicker: "SERVICES",
  heading: "Zero-knowledge expertise for teams shipping real systems.",
  sub: "From an advisory audit of your proof-system choice to hands-on circuit development — practical ZK engineering for teams who need it done right, not just explained.",
  stats: [
    { num: "6+", label: "years in ZK & blockchain" },
    { num: "20+", label: "engagements delivered" },
    { num: "2", label: "ways to work together" },
  ],
};

export const engagementTypes = [
  {
    sym: "&#9671;",
    tag: "ADVISORY",
    title: "Consultation",
    desc: "Get a second opinion before you commit — proof-system selection, architecture review, security read-throughs, or technical due diligence for an investment or partnership.",
    items: [
      "Proof-system & architecture review",
      "Security-focused read-throughs",
      "Technical due diligence",
      "Fixed-scope, fast turnaround",
    ],
    ctaLabel: "Start a consultation",
    ctaHref: "/services/apply",
  },
  {
    sym: "&#10033;",
    tag: "HANDS-ON",
    title: "Technical Development",
    desc: "Bring me in to build — circuits, proving pipelines, verifier contracts, or a ZK feature for your product — delivered with tests and documentation.",
    items: [
      "Circuit design & implementation",
      "Proving / verification pipelines",
      "On-chain verifier integration",
      "Code handoff with docs & tests",
    ],
    ctaLabel: "Discuss a project",
    ctaHref: "/services/apply",
  },
];

export const capabilities = [
  {
    num: "01",
    sym: "&#931;",
    title: "Proof System Selection",
    level: "Advisory",
    desc: "A clear-eyed comparison of Groth16, PLONK, STARKs, and Bulletproofs against your actual constraints — proof size, prover time, trust setup, and tooling maturity.",
    meta: "Groth16 · PLONK · STARKs",
  },
  {
    num: "02",
    sym: "&#11041;",
    title: "Circuit Engineering",
    level: "Hands-on",
    desc: "Design, implementation, and optimization of production circuits in Circom, Noir, or Halo2 — with constraint counts and witness generation that hold up at scale.",
    meta: "Circom · Noir · Halo2",
  },
  {
    num: "03",
    sym: "&#9670;",
    title: "Security Review",
    level: "Advisory",
    desc: "A focused read-through of your circuits and verifier logic for under-constrained signals, trusted-setup risks, and the failure modes generic audits miss.",
    meta: "Constraint & soundness review",
  },
  {
    num: "04",
    sym: "&#9638;",
    title: "On-chain Integration",
    level: "Hands-on",
    desc: "Verifier contract integration and the surrounding plumbing — proof generation pipelines, gas-conscious verification, and client-side proving where it's needed.",
    meta: "EVM · verifier contracts",
  },
];

export const processSteps = [
  { num: "1", label: "Scope call", desc: "A short call to understand what you're building and what kind of help you need." },
  { num: "2", label: "Proposal", desc: "A fixed-scope proposal with timeline and deliverables — no open-ended retainers by default." },
  { num: "3", label: "Build or review", desc: "Hands-on development or a focused review, with regular check-ins along the way." },
  { num: "4", label: "Handoff", desc: "Documentation, tests, and a walkthrough so your team fully owns the result." },
];

export const models = [
  {
    name: "Fixed-Scope Review",
    tag: "",
    duration: "1–2 weeks",
    desc: "A focused audit of one thing — a proof-system choice, a circuit, or an architecture decision — with a written report.",
    features: ["Written findings report", "One round of follow-up Q&A", "Good for a specific decision"],
  },
  {
    name: "Project Engagement",
    tag: "MOST COMMON",
    duration: "4–10 weeks",
    desc: "End-to-end delivery of a defined piece of work — a circuit, a proving pipeline, or a verifier integration — scoped up front.",
    features: ["Fixed scope & timeline", "Weekly progress check-ins", "Full handoff with docs & tests"],
  },
  {
    name: "Ongoing Retainer",
    tag: "",
    duration: "Monthly",
    desc: "Continued access for teams shipping ZK features regularly — architecture input, circuit reviews, and hands-on help as it comes up.",
    features: ["Priority availability", "Mix of advisory & hands-on work", "Month-to-month, cancel anytime"],
  },
];

export const faqItems = [
  {
    question: "What kinds of projects do you take on?",
    answer: "Mostly proof-system selection, circuit development, and security-focused reviews for teams shipping ZK features — identity, privacy, scaling, or verifiable computation.",
  },
  {
    question: "Do you work with early-stage teams or only established protocols?",
    answer: "Both. Early-stage teams often start with a consultation to validate a direction before committing engineering time; established protocols more often bring in a project engagement or retainer.",
  },
  {
    question: "How is pricing structured?",
    answer: "Fixed-scope work is quoted after the scope call based on the deliverable; retainers are a flat monthly rate. You'll always have a number before anything starts.",
  },
  {
    question: "Can you work alongside our existing engineering team?",
    answer: "Yes — most engagements involve working directly with your engineers, not handing off a black box at the end.",
  },
  {
    question: "What if we're not sure what we need yet?",
    answer: "That's exactly what the scope call is for — tell me what you're building and I'll recommend a consultation or a project engagement based on where you actually are.",
  },
];

export const finalCta = {
  kicker: "LET'S TALK",
  heading: "Tell me what you're building.",
  sub: "Send a short application and I'll follow up by email within 2 business days to schedule a scope call.",
  ctaLabel: "Start a project",
  ctaHref: "/services/apply",
};

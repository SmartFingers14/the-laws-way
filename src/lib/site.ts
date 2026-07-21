// Central content source for The Laws Way.
// Editing copy, stats, and practice areas here keeps the UI clean.

export const firm = {
  name: "The Laws Way",
  shortName: "TLW",
  tagline: "Counsel of Consequence.",
  location: "New Delhi, India",
  phone: "+91 11 4000 8800",
  email: "chambers@thelawsway.in",
  address: "Barakhamba Road, Connaught Place, New Delhi 110001",
  established: 1998,
  cta: "Request a Confidential Consultation",
};

export const stats = [
  { value: 25, suffix: "+", label: "Years at the Bar" },
  { value: 1200, suffix: "+", label: "Matters Resolved" },
  { value: 98, suffix: "%", label: "Favourable Outcomes" },
  { value: 15, suffix: "", label: "Senior Counsel" },
];

export type PracticeArea = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  points: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "corporate",
    index: "01",
    title: "Corporate & Commercial",
    blurb:
      "Board-level counsel on transactions, governance and disputes for enterprises that operate at scale.",
    points: ["Mergers & Acquisitions", "Joint Ventures", "Regulatory & Compliance"],
  },
  {
    id: "civil",
    index: "02",
    title: "Civil Litigation",
    blurb:
      "Measured, forceful advocacy before trial courts, High Courts and the Supreme Court of India.",
    points: ["Commercial Suits", "Arbitration", "Appellate Practice"],
  },
  {
    id: "criminal",
    index: "03",
    title: "Criminal Defence",
    blurb:
      "Discreet representation in white-collar and economic offences, protecting reputation and liberty.",
    points: ["White-Collar Defence", "Bail & Anticipatory Bail", "Investigations"],
  },
  {
    id: "real-estate",
    index: "04",
    title: "Real Estate",
    blurb:
      "End-to-end advice on acquisition, development and disputes across premium and commercial property.",
    points: ["Due Diligence", "Conveyancing", "RERA & Title Disputes"],
  },
  {
    id: "family",
    index: "05",
    title: "Family & Private Client",
    blurb:
      "Sensitive counsel on succession, matrimonial matters and the stewardship of family wealth.",
    points: ["Succession & Wills", "Matrimonial", "Trusts & Estates"],
  },
];

export const differentiators = [
  {
    title: "Discretion by Default",
    body: "Every engagement is handled with absolute confidentiality. Names, matters and outcomes remain between us.",
  },
  {
    title: "Senior Attention",
    body: "Your matter is led by a partner from the first meeting — never handed down without oversight.",
  },
  {
    title: "Strategy Before Litigation",
    body: "We resolve where possible and litigate where necessary, always weighing the cost against the objective.",
  },
];

export const testimonials = [
  {
    quote:
      "They handled a delicate corporate dispute with a composure that steadied our entire board. The outcome exceeded what we thought possible.",
    author: "Managing Director",
    context: "Listed Manufacturing Group",
  },
  {
    quote:
      "Precise, unhurried and utterly discreet. The Laws Way is the only chambers I recommend to my family and to my clients.",
    author: "Private Wealth Advisor",
    context: "Family Office, New Delhi",
  },
  {
    quote:
      "In a matter where reputation was everything, they protected mine without a single misstep. Counsel of the highest order.",
    author: "Founder & Chairman",
    context: "Technology Enterprise",
  },
];

export const navLinks = [
  { label: "The Firm", href: "/about" },
  { label: "Practice", href: "/practice" },
  { label: "Counsel", href: "/counsel" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type Attorney = {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  bar: string;
  education: string[];
  image: string;
};

export const attorneys: Attorney[] = [
  {
    id: "aditya-rao",
    name: "Aditya Rao",
    role: "Founding Partner",
    focus: "Corporate & Commercial",
    bio: "Aditya founded The Laws Way in 1998 after a decade at the Bar. He advises boards and promoters on their most consequential transactions and disputes, and is known for a calm, strategic hand in high-stakes negotiations.",
    bar: "Bar Council of Delhi, 1994",
    education: ["LL.M., University of Cambridge", "B.A. LL.B. (Hons.), NLSIU Bangalore"],
    image: "photo-1560250097-0b93528c311a",
  },
  {
    id: "meera-krishnan",
    name: "Meera Krishnan",
    role: "Senior Partner",
    focus: "Civil Litigation & Arbitration",
    bio: "Meera leads the firm's dispute resolution practice, appearing regularly before the High Courts and the Supreme Court of India. She has steered several landmark commercial arbitrations to favourable awards.",
    bar: "Bar Council of Delhi, 2001",
    education: ["LL.M., London School of Economics", "B.A. LL.B. (Hons.), NALSAR Hyderabad"],
    image: "photo-1573496359142-b8d87734a5a2",
  },
  {
    id: "vikram-sethi",
    name: "Vikram Sethi",
    role: "Partner",
    focus: "Criminal & White-Collar Defence",
    bio: "Vikram represents individuals and enterprises in economic offences and investigations. His discreet, meticulous defence work has protected the liberty and reputation of clients across the country.",
    bar: "Bar Council of Delhi, 2005",
    education: ["LL.B., Faculty of Law, University of Delhi", "B.Com. (Hons.), SRCC"],
    image: "photo-1556157382-97eda2d62296",
  },
  {
    id: "ananya-desai",
    name: "Ananya Desai",
    role: "Partner",
    focus: "Real Estate & Private Client",
    bio: "Ananya advises families and developers on property, succession and the stewardship of private wealth. Her practice blends technical rigour with the sensitivity these matters demand.",
    bar: "Bar Council of Maharashtra & Goa, 2007",
    education: ["LL.M., National University of Singapore", "B.A. LL.B. (Hons.), GNLU Gandhinagar"],
    image: "photo-1594744803329-e58b31de8bf5",
  },
];

export type Insight = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
};

export const insights: Insight[] = [
  {
    id: "arbitration-reform-2024",
    category: "Dispute Resolution",
    title: "The Shifting Landscape of Commercial Arbitration in India",
    excerpt:
      "Recent amendments have reshaped how enforceable awards are secured. We examine what boards must know before drafting their next dispute clause.",
    date: "March 2024",
    readTime: "6 min read",
    image: "photo-1589578527966-fdac0f44566c",
  },
  {
    id: "governance-promoters",
    category: "Corporate",
    title: "Governance After Growth: A Note for Promoters",
    excerpt:
      "As enterprises scale, the founder's instinct must yield to institutional discipline. A practical framework for board-level governance.",
    date: "January 2024",
    readTime: "5 min read",
    image: "photo-1486406146926-c627a92ad1ab",
  },
  {
    id: "succession-planning",
    category: "Private Client",
    title: "Quiet Succession: Protecting Family Wealth Across Generations",
    excerpt:
      "The most durable estate plans are the ones nobody notices. On wills, trusts and the discretion that preserves both wealth and relationships.",
    date: "November 2023",
    readTime: "7 min read",
    image: "photo-1511895426328-dc8714191300",
  },
];

export const faqs = [
  {
    q: "How do consultations work?",
    a: "Every enquiry is received in confidence and reviewed personally by a partner. We respond within one business day to arrange an initial consultation, which may be held at our chambers or virtually.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. Discretion is the foundation of our practice. Names, matters and outcomes remain strictly between the firm and the client — before, during and after any engagement.",
  },
  {
    q: "Which courts do you appear before?",
    a: "Our counsel appear before trial courts, tribunals, the High Courts and the Supreme Court of India, as well as in domestic and international arbitration.",
  },
  {
    q: "How are your fees structured?",
    a: "Fees depend on the nature and complexity of the matter. We discuss and agree a clear engagement structure at the outset, so there are never surprises.",
  },
];


// Curated imagery (Unsplash). Swap these URLs for the firm's own photography
// when it becomes available — dimensions and crops are chosen to match.
export const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;


export const images = {
  hero: U("photo-1505664194779-8beaceb93744", 2000), // grand pillared courthouse
  firm: U("photo-1521737604893-d14cc237f11d", 1200), // team in discussion
  approach: U("photo-1589829545856-d10d557cf95f", 1400), // scales of justice detail
  consultation: U("photo-1556761175-5973dc0f32e7", 1400), // meeting handshake
  gallery: [
    { src: U("photo-1450101499163-c8848c66ca85", 900), caption: "The Library" },
    { src: U("photo-1423592707957-3b212afa6733", 900), caption: "Chambers" },
    { src: U("photo-1487730116645-74489c95b41b", 900), caption: "The Bench" },
    { src: U("photo-1497366216548-37526070297c", 900), caption: "Conference" },
  ],
  practice: {
    corporate: U("photo-1486406146926-c627a92ad1ab", 900),
    civil: U("photo-1589578527966-fdac0f44566c", 900),
    criminal: U("photo-1436450412740-6b988f486c6b", 900),
    "real-estate": U("photo-1512453979798-5ea266f8880c", 900),
    family: U("photo-1511895426328-dc8714191300", 900),
  } as Record<string, string>,
};



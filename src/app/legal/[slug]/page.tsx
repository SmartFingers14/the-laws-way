import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { firm, images } from "@/lib/site";

type Section = { heading: string; body: string };
type LegalDoc = { title: string; eyebrow: string; intro: string; sections: Section[] };

const docs: Record<string, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Legal",
    intro:
      "How The Laws Way collects, uses and safeguards the information you share with us.",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect only the information you choose to provide — such as your name, contact details and a description of your matter — when you complete our enquiry form or correspond with us directly.",
      },
      {
        heading: "How We Use It",
        body: "Your information is used solely to respond to your enquiry, assess a potential engagement and communicate with you. We do not sell, rent or trade your information to any third party.",
      },
      {
        heading: "Confidentiality",
        body: "All information is held in strict confidence, consistent with our professional obligations and the trust our clients place in us.",
      },
      {
        heading: "Data Security",
        body: "We maintain reasonable administrative and technical safeguards designed to protect the information in our custody against unauthorised access, disclosure or misuse.",
      },
      {
        heading: "Contact",
        body: `For any question about this policy or the information we hold, write to us at ${firm.email}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    eyebrow: "Legal",
    intro: "The terms that govern your use of this website.",
    sections: [
      {
        heading: "No Legal Advice",
        body: "The content of this website is provided for general information only and does not constitute legal advice. You should not act, or refrain from acting, on the basis of anything on this site without seeking professional counsel.",
      },
      {
        heading: "No Attorney–Client Relationship",
        body: "Use of this website, or communication through it, does not create an attorney–client relationship. Such a relationship arises only upon a formal, mutually agreed engagement.",
      },
      {
        heading: "Intellectual Property",
        body: `All content, marks and materials on this website are the property of ${firm.name} unless stated otherwise, and may not be reproduced without permission.`,
      },
      {
        heading: "External Links",
        body: "This website may contain links to third-party sites. We are not responsible for the content or practices of any linked site.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    eyebrow: "Legal",
    intro:
      "A note required under the rules of the Bar Council of India, and important for every visitor.",
    sections: [
      {
        heading: "Bar Council of India Rules",
        body: `In accordance with the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By proceeding, you acknowledge that you are seeking information about ${firm.name} of your own accord, and that there has been no advertisement, solicitation or inducement of any kind.`,
      },
      {
        heading: "Purpose of This Website",
        body: "This website is intended solely to provide the visitor with information about the firm, its people and its areas of practice, for the visitor's general understanding.",
      },
      {
        heading: "No Warranty",
        body: "While we endeavour to keep the information current and accurate, we make no warranty as to its completeness or correctness, and accept no liability for any consequence of reliance upon it.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const doc = docs[params.slug];
  if (!doc) return { title: "Not Found" };
  return {
    title: `${doc.title} — ${firm.name}`,
    description: doc.intro,
  };
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const doc = docs[params.slug];
  if (!doc) notFound();

  return (
    <main className="relative">
      <Navbar />
      <PageHero
        eyebrow={doc.eyebrow}
        title={doc.title}
        intro={doc.intro}
        image={images.approach}
      />
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-12 px-6 lg:px-10">
          {doc.sections.map((s, i) => (
            <Reveal key={s.heading} delay={0.05 * i}>
              <div>
                <h2 className="font-serif text-2xl text-ink-900">{s.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-700">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

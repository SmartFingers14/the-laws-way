import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { practiceAreas, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas — The Laws Way",
  description:
    "Corporate & commercial, civil litigation, criminal defence, real estate and private client counsel from The Laws Way, New Delhi.",
};

export default function PracticePage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHero
        eyebrow="Practice Areas"
        title="Counsel across the matters that define you."
        intro="Five disciplines, one standard. Each practice is led by a partner and supported by counsel chosen for the specific demands of your matter."
        image={images.practice.corporate}
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-px px-6 lg:px-10">
          {practiceAreas.map((area, i) => (
            <Reveal key={area.id} delay={0.05 * i}>
              <div
                className={`group grid overflow-hidden border border-ink-900/10 bg-white lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden lg:h-full lg:min-h-[340px] [direction:ltr]">
                  <Image
                    src={images.practice[area.id]}
                    alt={area.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-900/20" />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center p-8 [direction:ltr] lg:p-14">
                  <span className="font-serif text-3xl text-gold-dark/40">
                    {area.index}
                  </span>
                  <h2 className="mt-4 font-serif text-2xl text-ink-900 lg:text-3xl">
                    {area.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-700">
                    {area.blurb}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {area.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3 text-sm text-ink-700"
                      >
                        <span className="inline-block h-1 w-1 rounded-full bg-gold-dark" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="group/link mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark"
                  >
                    Discuss this matter
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-ink-900 py-20">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl text-cream sm:text-4xl">
              Not sure where your matter fits?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-cream/65">
              Tell us in confidence and a partner will point you to the right
              counsel — even if that turns out not to be us.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="mt-9 inline-block bg-gold px-8 py-4 text-xs uppercase tracking-widest text-ink-900 transition-colors duration-300 hover:bg-gold-light"
            >
              Request a Confidential Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { firm, stats, differentiators, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Firm — The Laws Way",
  description:
    "A New Delhi chambers built on discretion, senior attention and strategy. Learn about the philosophy and history of The Laws Way.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHero
        eyebrow="The Firm"
        title="A chambers built on judgement, not volume."
        intro={`Since ${firm.established}, The Laws Way has represented enterprises, families and individuals in the matters that mattered most — quietly, and to the highest standard.`}
        image={images.hero}
      />

      {/* Story */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-4 text-gold-dark">
                <span className="inline-block h-px w-10 bg-gold-dark" />
                Our Story
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-ink-900 sm:text-4xl">
                Founded on a single conviction.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <Reveal delay={0.15}>
              <p>
                The Laws Way was established in {firm.established} with a
                conviction that has never changed: that serious legal matters
                deserve the undivided attention of senior counsel, and the
                discretion of a trusted adviser.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Over more than two decades, we have grown deliberately — never
                chasing scale for its own sake. Our clients return, and refer
                those closest to them, because we treat every engagement as a
                matter of consequence.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                Today our chambers on Barakhamba Road bring together counsel
                across corporate, litigation, criminal defence, real estate and
                private client work — united by a single standard of rigour and
                restraint.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values with imagery */}
      <section className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
        <div aria-hidden className="absolute inset-0">
          <Image
            src={images.approach}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-ink-900/85" />
        </div>
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-cream sm:text-4xl">
              The principles that govern our work.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={0.1 * i}>
                <div className="h-full bg-ink-900 p-8 lg:p-10">
                  <span className="font-serif text-2xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-cream">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i}>
              <div className="text-center">
                <p className="font-serif text-4xl text-ink-900 lg:text-5xl">
                  {s.value}
                  {s.suffix}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-ink-700/70">
                  {s.label}
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

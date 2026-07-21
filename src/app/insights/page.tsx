import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { insights, images, U } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — The Laws Way",
  description:
    "Considered commentary on the legal questions that matter to enterprises, families and individuals — from the counsel of The Laws Way.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <main className="relative">
      <Navbar />
      <PageHero
        eyebrow="Insights"
        title="Considered commentary, never noise."
        intro="We write sparingly, and only when we have something useful to say. A selection of notes from our counsel."
        image={images.gallery[0].src}
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Featured */}
          <Reveal>
            <article className="group grid overflow-hidden border border-ink-900/10 bg-white lg:grid-cols-2">
              <div className="relative h-72 overflow-hidden lg:h-full lg:min-h-[380px]">
                <Image
                  src={U(featured.image, 1200)}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-widest text-gold-dark">
                  <span>{featured.category}</span>
                  <span className="h-px w-6 bg-gold-dark/40" />
                  <span className="text-ink-700/60">{featured.date}</span>
                </div>
                <h2 className="mt-5 font-serif text-2xl text-ink-900 lg:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-700">
                  {featured.excerpt}
                </p>
                <p className="mt-8 text-xs uppercase tracking-widest text-ink-700/50">
                  {featured.readTime}
                </p>
              </div>
            </article>
          </Reveal>

          {/* Grid */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.id} delay={0.08 * i}>
                <article className="group h-full overflow-hidden border border-ink-900/10 bg-white">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={U(post.image, 900)}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 lg:p-8">
                    <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-widest text-gold-dark">
                      <span>{post.category}</span>
                      <span className="h-px w-6 bg-gold-dark/40" />
                      <span className="text-ink-700/60">{post.date}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-ink-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">
                      {post.excerpt}
                    </p>
                    <p className="mt-6 text-xs uppercase tracking-widest text-ink-700/50">
                      {post.readTime}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

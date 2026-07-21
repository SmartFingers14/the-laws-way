import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { attorneys, images, U } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Counsel — The Laws Way",
  description:
    "Meet the partners and senior counsel of The Laws Way — experienced advocates across corporate, litigation, criminal, real estate and private client work.",
};

export default function CounselPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageHero
        eyebrow="Our Counsel"
        title="The people you will actually work with."
        intro="At The Laws Way, your matter is led by a partner from the first meeting. These are the counsel who will stand beside you."
        image={images.firm}
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:px-10">
          {attorneys.map((a, i) => (
            <Reveal key={a.id} delay={0.08 * i}>
              <article className="group h-full overflow-hidden border border-ink-900/10 bg-white">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={U(a.image, 900)}
                    alt={a.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-[0.65rem] uppercase tracking-widest text-gold">
                      {a.role}
                    </p>
                    <h2 className="mt-1 font-serif text-2xl text-cream">
                      {a.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-[0.65rem] uppercase tracking-widest text-gold-dark">
                    {a.focus}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">
                    {a.bio}
                  </p>
                  <dl className="mt-6 space-y-3 border-t border-ink-900/10 pt-6 text-sm">
                    <div>
                      <dt className="text-[0.6rem] uppercase tracking-widest text-ink-700/60">
                        Bar Admission
                      </dt>
                      <dd className="mt-1 text-ink-900">{a.bar}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.6rem] uppercase tracking-widest text-ink-700/60">
                        Education
                      </dt>
                      <dd className="mt-1 space-y-0.5 text-ink-900">
                        {a.education.map((e) => (
                          <p key={e}>{e}</p>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 text-center lg:px-10">
          <Reveal>
            <Link href="/contact" className="btn btn-outline-dark">
              Request an Introduction
            </Link>

          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

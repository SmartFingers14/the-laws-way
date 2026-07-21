"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { firm, images } from "@/lib/site";

export function Firm() {
  return (
    <section id="firm" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        {/* Left: layered photography */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={images.firm}
                  alt="Counsel in discussion at The Laws Way"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink-900/20" />
                <div className="absolute inset-4 border border-cream/30" />
              </div>

              {/* Floating credential card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-8 -right-4 hidden w-56 bg-ink-900 p-6 shadow-card sm:block"
              >
                <p className="font-serif text-3xl text-gold">Since {firm.established}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/60">
                  Serving New Delhi &amp; beyond
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Right: concise narrative */}
        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-gold-deep">
              <span className="inline-block h-px w-10 bg-gold-deep" />
              The Firm
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink-900 sm:text-4xl lg:text-[2.9rem]">
              A chambers built on judgment, not volume.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-900/75">
              For over two decades, {firm.name} has represented a deliberately
              limited roster of clients — promoters, family offices and private
              individuals — for whom outcome and discretion matter equally.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { k: "Partner-led", v: "Every matter, from first brief to final order." },
                { k: "Confidential", v: "Discretion maintained without exception." },
                { k: "Considered", v: "Measured against your objective, not our billing." },
              ].map((c) => (
                <div key={c.k} className="border-t border-ink-900/15 pt-4">
                  <p className="font-serif text-lg text-ink-900">{c.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                    {c.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

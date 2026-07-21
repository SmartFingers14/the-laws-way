"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, staggerParent, staggerChild } from "@/components/motion/Reveal";
import { practiceAreas, images } from "@/lib/site";

export function Practice() {
  return (
    <section id="practice" className="relative bg-ink-900 py-16 sm:py-24 lg:py-32">

      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-4 text-gold">
                <span className="inline-block h-px w-10 bg-gold" />
                Practice Areas
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.9rem]">
                Five disciplines. One standard.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-relaxed text-cream/60">
              Whether the matter is a boardroom transaction or a private dispute,
              it is handled with the same rigour and restraint.
            </p>
          </Reveal>
        </div>

        {/* Image-led card grid */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {practiceAreas.map((area) => (
            <motion.article
              key={area.id}
              variants={staggerChild}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden"
            >
              {/* Photo */}
              <Image
                src={images.practice[area.id]}
                alt={area.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/10 transition-opacity duration-500 group-hover:from-ink-900" />
              <div className="absolute inset-3 border border-cream/15 transition-colors duration-500 group-hover:border-gold/50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <span className="font-serif text-sm text-gold">{area.index}</span>
                <h3 className="mt-2 font-serif text-2xl text-cream">
                  {area.title}
                </h3>

                {/* Detail: always visible on touch, hover-revealed on desktop */}
                <div className="grid grid-rows-[1fr] transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-3 text-sm leading-relaxed text-cream/75">
                      {area.blurb}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-gold">

                      Enquire
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* CTA cell */}
          <motion.a
            href="#contact"
            variants={staggerChild}
            className="group relative flex aspect-[4/5] cursor-pointer flex-col justify-between bg-gold p-7 transition-colors duration-300 hover:bg-gold-light"
          >
            <span className="font-serif text-sm text-ink-900/50">06</span>
            <div>
              <h3 className="font-serif text-2xl leading-tight text-ink-900">
                Not sure where your matter fits?
              </h3>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-ink-900">
                Speak with counsel
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

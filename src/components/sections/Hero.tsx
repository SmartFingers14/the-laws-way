"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { firm, images } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-900"
    >
      {/* Full-bleed photograph with a slow cinematic zoom */}
      <motion.div
        aria-hidden
        initial={{ scale: reduce ? 1 : 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={images.hero}
          alt="The pillars of a grand courthouse"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Layered navy veils for legibility + mood */}
      <div aria-hidden className="absolute inset-0 bg-hero-veil" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/60 to-transparent"
      />
      <div className="grain absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-10"
      >
        <div className="max-w-3xl">
          <motion.p
            variants={item}
            className="eyebrow flex items-center gap-4 text-gold"
          >
            <span className="inline-block h-px w-10 bg-gold" />
            Est. {firm.established} &nbsp;·&nbsp; {firm.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-8 font-serif text-[2.75rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          >
            Discreet counsel for
            <br />
            matters that
            <span className="relative ml-3 inline-block text-gold">
              cannot
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-gold/70"
              />
            </span>
            <br />
            afford to be wrong.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            {firm.name} is a full-service chambers advising a select clientele of
            individuals and enterprises — with the confidentiality the stakes
            demand.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex cursor-pointer items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-widest text-ink-900 shadow-gold transition-all duration-300 hover:bg-gold-light"
            >
              {firm.cta}
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#practice"
              className="inline-flex cursor-pointer items-center justify-center gap-2 border border-cream/25 px-8 py-4 text-xs uppercase tracking-widest text-cream/90 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Explore Our Practice
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-widest text-cream/50">
          Scroll
        </span>
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}

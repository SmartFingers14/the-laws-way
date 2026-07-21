"use client";

import { motion, useReducedMotion } from "framer-motion";
import { firm } from "@/lib/site";


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
      {/* Full-bleed looping film with a slow cinematic zoom */}
      <motion.div
        aria-hidden
        initial={{ scale: reduce ? 1 : 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero-loop.mp4" type="video/mp4" />
        </video>
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
        className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:px-10"
      >
        <div className="max-w-3xl">
          <motion.p
            variants={item}
            className="eyebrow flex items-center gap-3 text-gold sm:gap-4"
          >
            <span className="inline-block h-px w-8 bg-gold sm:w-10" />
            Est. {firm.established} &nbsp;·&nbsp; {firm.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-[2.25rem] leading-[1.08] text-cream sm:mt-8 sm:text-6xl sm:leading-[1.05] lg:text-7xl"
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
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:mt-8 sm:text-lg"
          >
            {firm.name} is a full-service chambers advising a select clientele of
            individuals and enterprises — with the confidentiality the stakes
            demand.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:items-center"
          >
            <a href="#contact" className="btn btn-gold w-full sm:w-auto">
              {firm.cta}
              <svg
                className="btn-arrow h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#practice" className="btn btn-outline w-full sm:w-auto">
              Explore Our Practice
            </a>

          </motion.div>
        </div>
      </motion.div>
    </section>

  );
}

"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  const go = useCallback(
    (dir: number) =>
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go, reduce]);

  const active = testimonials[index];

  return (
    <section id="counsel" className="relative overflow-hidden bg-ink-800 py-24 lg:py-32">
      <div className="grain absolute inset-0" />
      {/* oversized quotation mark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 left-6 font-serif text-[16rem] leading-none text-gold/10 lg:left-20 lg:text-[22rem]"
      >
        &ldquo;
      </span>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="eyebrow mb-12 text-gold">In Their Words</p>

        <div className="min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-2xl leading-relaxed text-cream sm:text-3xl sm:leading-relaxed">
                {active.quote}
              </p>
              <footer className="mt-10">
                <p className="text-sm uppercase tracking-widest text-gold">
                  {active.author}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/50">
                  {active.context}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 cursor-pointer items-center justify-center border border-gold/40 text-gold transition-colors duration-200 hover:bg-gold hover:text-ink-900"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 cursor-pointer transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-cream/25 hover:bg-cream/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 cursor-pointer items-center justify-center border border-gold/40 text-gold transition-colors duration-200 hover:bg-gold hover:text-ink-900"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

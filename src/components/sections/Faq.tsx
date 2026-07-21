"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:gap-16 lg:grid-cols-12 lg:px-10">

        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-gold-dark">
              <span className="inline-block h-px w-10 bg-gold-dark" />
              Common Questions
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink-900 sm:text-4xl">
              Before you reach out.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-ink-900/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={0.05 * i}>
                  <div className="border-b border-ink-900/10">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-lg text-ink-900 lg:text-xl">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border border-gold-dark/40 text-gold-dark transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-14 text-base leading-relaxed text-ink-700">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

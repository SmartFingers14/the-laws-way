"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { differentiators, images } from "@/lib/site";

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        {/* Left — full-height image */}
        <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[720px]">

          <Image
            src={images.approach}
            alt="The scales of justice"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-cream/95" />
          {/* Overlay quote plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-8 left-8 max-w-xs bg-ink-900/90 p-7 backdrop-blur-sm lg:bottom-16 lg:left-16"
          >
            <p className="font-serif text-xl italic leading-relaxed text-cream">
              &ldquo;The law is reason, free from passion.&rdquo;
            </p>
            <p className="mt-3 text-[0.65rem] uppercase tracking-widest text-gold">
              Aristotle
            </p>
          </motion.div>
        </div>

        {/* Right — principles */}
        <div className="flex items-center px-6 py-16 sm:py-24 lg:px-16 lg:py-32">
          <div className="w-full">

            <Reveal>
              <p className="eyebrow flex items-center gap-4 text-gold-deep">
                <span className="inline-block h-px w-10 bg-gold-deep" />
                Our Approach
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-ink-900 sm:text-4xl">
                How we hold ourselves to account.
              </h2>
            </Reveal>

            <div className="mt-12 space-y-10">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={0.15 + i * 0.08}>
                  <div className="group flex gap-6">
                    <span className="font-serif text-4xl text-gold/50">
                      0{i + 1}
                    </span>
                    <div className="border-l border-ink-900/15 pl-6">
                      <h3 className="font-serif text-2xl text-ink-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-ink-900/70">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

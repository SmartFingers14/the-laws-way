"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, staggerParent, staggerChild } from "@/components/motion/Reveal";
import { images } from "@/lib/site";

export function Gallery() {
  return (
    <section className="relative bg-ink-800 py-24 lg:py-32">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-gold">Our Chambers</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-cream sm:text-4xl">
              A setting equal to the stakes.
            </h2>
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {images.gallery.map((item, i) => (
            <motion.figure
              key={item.caption}
              variants={staggerChild}
              className={`group relative cursor-pointer overflow-hidden ${
                i === 0 || i === 3 ? "aspect-[3/4]" : "aspect-[3/4] lg:mt-12"
              }`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-900/30 transition-colors duration-500 group-hover:bg-ink-900/10" />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-4 text-xs uppercase tracking-widest text-cream">
                <span className="h-px w-5 bg-gold" />
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

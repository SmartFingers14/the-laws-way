"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  "Years at the Bar": (
    <path d="M12 3v18M5 8h14M7 8l-2 6a3 3 0 006 0L9 8m8 0l-2 6a3 3 0 006 0l-2-6" />
  ),
  "Matters Resolved": (
    <path d="M4 5h16M4 5v14a1 1 0 001 1h14a1 1 0 001-1V5M9 10l2 2 4-4" />
  ),
  "Favourable Outcomes": <path d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" />,
  "Senior Counsel": (
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0" />
  ),
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-ink-900 px-6 py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-gold/25 bg-gradient-to-br from-ink-800 via-ink-900 to-black">
        {/* shimmer line */}
        <motion.span
          aria-hidden
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 z-10 h-px w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        {/* soft radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px circle at 50% 0%, rgba(176,141,87,0.15), transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col items-center px-6 py-12 text-center lg:px-8 lg:py-14"
            >
              {/* hover wash */}
              <div className="absolute inset-3 rounded bg-gold/0 transition-colors duration-500 group-hover:bg-gold/[0.06]" />

              {/* icon */}
              <svg
                aria-hidden
                className="relative mb-5 h-9 w-9 text-gold/80 transition-transform duration-500 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[stat.label]}
              </svg>

              {/* number with glow */}
              <span className="relative font-serif text-4xl text-gold drop-shadow-[0_0_18px_rgba(176,141,87,0.4)] lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>

              {/* animated underline */}
              <span className="relative mt-4 h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />

              <span className="relative mt-3 text-[0.68rem] uppercase tracking-widest text-cream/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

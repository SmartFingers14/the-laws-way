"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { firm, navLinks } from "@/lib/site";


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ink-900/95 backdrop-blur-sm shadow-[0_1px_0_rgba(176,141,87,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Wordmark */}
        <Link href="/" className="group flex items-center gap-3" aria-label={firm.name}>

          <span className="flex h-9 w-9 items-center justify-center border border-gold/60 text-gold font-serif text-base leading-none sm:h-10 sm:w-10 sm:text-lg">
            {firm.shortName.slice(0, 2)}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base tracking-wide text-cream sm:text-lg">
              {firm.name}
            </span>
            <span className="mt-1 hidden text-[0.6rem] uppercase tracking-widest text-gold/80 sm:block">
              Advocates &amp; Legal Counsel
            </span>
          </span>

        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm uppercase tracking-widest text-cream/80 transition-colors duration-200 hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden cursor-pointer border border-gold px-5 py-2.5 text-xs uppercase tracking-widest text-gold transition-colors duration-300 hover:bg-gold hover:text-ink-900 lg:inline-block"
        >
          Consultation
        </Link>


        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gold/20 bg-ink-900/98 lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-cream/10 py-4 text-sm uppercase tracking-widest text-cream/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 block bg-gold px-5 py-3 text-center text-xs uppercase tracking-widest text-ink-900"
                >
                  {firm.cta}
                </Link>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

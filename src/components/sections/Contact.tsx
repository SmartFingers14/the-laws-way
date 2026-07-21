"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { firm, practiceAreas, images } from "@/lib/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-16 sm:py-24 lg:py-32">

      {/* Background photograph, heavily veiled */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={images.consultation}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-ink-900/85" />
      </div>
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        {/* Left column — invitation + coordinates */}
        <div className="lg:col-span-5">

          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-gold">
              <span className="inline-block h-px w-10 bg-gold" />
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.9rem]">
              Request a confidential consultation.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65">
              Every enquiry is received in confidence and reviewed personally by
              a partner. We will respond within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 space-y-8">
              <ContactRow label="Chambers">{firm.address}</ContactRow>
              <ContactRow label="Telephone">{firm.phone}</ContactRow>
              <ContactRow label="Email">{firm.email}</ContactRow>
              <ContactRow label="Hours">
                Monday – Saturday · 9:30 to 18:30 IST
              </ContactRow>
            </dl>
          </Reveal>
        </div>

        {/* Right column — the form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="border border-gold/20 bg-ink-800/60 p-8 backdrop-blur-sm sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-cream">
                    Thank you — your enquiry is received.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-cream/60">
                    A member of our chambers will be in touch within one business
                    day. Your details remain strictly confidential.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field id="name" label="Full Name" placeholder="Your name" required />
                    <Field id="phone" label="Telephone" type="tel" placeholder="+91" required />
                  </div>
                  <Field id="email" label="Email Address" type="email" placeholder="you@example.com" required />

                  <div>
                    <label htmlFor="matter" className="mb-2 block text-xs uppercase tracking-widest text-cream/60">
                      Nature of Matter
                    </label>
                    <select
                      id="matter"
                      required
                      defaultValue=""
                      className="w-full cursor-pointer border border-cream/15 bg-ink-900/60 px-4 py-3.5 text-sm text-cream outline-none transition-colors duration-200 focus:border-gold"
                    >
                      <option value="" disabled>
                        Select a practice area
                      </option>
                      {practiceAreas.map((a) => (
                        <option key={a.id} value={a.id} className="bg-ink-900">
                          {a.title}
                        </option>
                      ))}
                      <option value="other" className="bg-ink-900">
                        Other / Not sure
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="brief" className="mb-2 block text-xs uppercase tracking-widest text-cream/60">
                      A Brief Note <span className="text-cream/35">(optional)</span>
                    </label>
                    <textarea
                      id="brief"
                      rows={4}
                      placeholder="Share only what you are comfortable putting in writing."
                      className="w-full resize-none border border-cream/15 bg-ink-900/60 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors duration-200 focus:border-gold"
                    />
                  </div>

                  <button type="submit" className="btn btn-gold w-full sm:w-auto">
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
                  </button>


                  <p className="pt-2 text-xs leading-relaxed text-cream/40">
                    Submitting this form does not create an attorney–client
                    relationship. Please do not include confidential details until
                    an engagement is confirmed.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-cream/10 pb-6">
      <dt className="text-[0.65rem] uppercase tracking-widest text-gold/80">{label}</dt>
      <dd className="mt-2 text-base text-cream/85">{children}</dd>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-widest text-cream/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-cream/15 bg-ink-900/60 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors duration-200 focus:border-gold"
      />
    </div>
  );
}

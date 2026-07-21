import { firm, navLinks, practiceAreas } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-gold/60 font-serif text-lg text-gold">
                {firm.shortName.slice(0, 2)}
              </span>
              <div>
                <p className="font-serif text-xl text-cream">{firm.name}</p>
                <p className="text-[0.6rem] uppercase tracking-widest text-gold/80">
                  Advocates &amp; Legal Counsel
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
              {firm.tagline} A full-service chambers serving discerning clients
              from {firm.location} since {firm.established}.
            </p>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-widest text-gold/80">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/60 transition-colors duration-200 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div className="lg:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-widest text-gold/80">
              Practice
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {practiceAreas.map((a) => (
                <li key={a.id}>
                  <a
                    href="#practice"
                    className="text-sm text-cream/60 transition-colors duration-200 hover:text-gold"
                  >
                    {a.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center">
          <p>
            © {year} {firm.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition-colors duration-200 hover:text-cream/70">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-cream/70">
              Terms of Use
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-cream/70">
              Disclaimer
            </a>
          </div>
        </div>

        {/* Bar Council disclaimer — a genuinely human, India-specific touch */}
        <p className="mt-8 text-[0.7rem] leading-relaxed text-cream/30">
          In accordance with the rules of the Bar Council of India, advocates are
          not permitted to solicit work or advertise. This website is intended
          solely to provide information about {firm.name} for the general
          understanding of the visitor and does not constitute solicitation,
          advertisement, or an invitation of any nature.
        </p>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/shorecrest-logo-white-gold-transparent.png";

const services: { to: string; product: string; phase: string; revenue: string; description: string }[] = [
  {
    to: "/services/starter",
    product: "LeadFlow",
    phase: "Starter Phase",
    revenue: "$50K+",
    description:
      "For firms that have the time to run their own marketing without needing to hire an agency.",
  },
  {
    to: "/services/growth",
    product: "ClientSurge",
    phase: "Growth Phase",
    revenue: "$500K+",
    description:
      "For firms that want a predictable flow of new client engagements every month via advertising.",
  },
];

const caseStudies: { to: string; name: string; description: string }[] = [
  {
    to: "/results/mybookly",
    name: "MyBookly Accounting",
    description:
      "See how this firm generated a 462% ROI in the first 90 days by focusing on SEO & Google Ads",
  },
  {
    to: "/results/streamline-accounting",
    name: "Streamline Accounting",
    description:
      "See how this firm saw a 183% increase in qualified tax consultations in 90 days through SEO alone.",
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // The header floats over each page's navy hero: transparent at the top,
  // solid navy once the page scrolls (or the mobile menu is open).
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-border/60 bg-navy-deep/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Shorecrest Digital"
            width={174}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 text-sm font-semibold tracking-wide sm:flex">
            <li>
              <Link
                to="/about"
                className="text-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                About
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="/services"
                className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                Services
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <ul className="w-96 rounded-lg border border-border bg-navy p-2 shadow-xl shadow-black/40">
                  {services.map((svc) => (
                    <li key={svc.to}>
                      <Link
                        to={svc.to as any}
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-navy-soft"
                      >
                        <span className="block text-sm font-bold text-foreground">
                          {svc.product} <span className="text-foreground/40">|</span> {svc.phase}{" "}
                          <span className="text-gold">({svc.revenue})</span>
                        </span>
                        <span className="mt-1 block text-xs font-normal leading-relaxed tracking-normal text-foreground/60">
                          {svc.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="group relative">
              <Link
                to="/results"
                className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                Results
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <ul className="w-96 rounded-lg border border-border bg-navy p-2 shadow-xl shadow-black/40">
                  {caseStudies.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to as any}
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-navy-soft"
                      >
                        <span className="block text-sm font-bold text-foreground">{c.name}</span>
                        <span className="mt-1 block text-xs font-normal leading-relaxed tracking-normal text-foreground/60">
                          {c.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                Blog
              </Link>
            </li>
          </ul>
          <Link
            to="/strategy"
            className="btn-gold hidden px-4 py-2 text-xs tracking-wide uppercase sm:block"
          >
            Strategy Call
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground/90 transition-colors hover:text-gold sm:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-navy-deep sm:hidden">
          <ul className="space-y-1 px-6 py-4 text-sm font-semibold tracking-wide">
            <li>
              <Link
                to="/about"
                activeProps={{ className: "text-gold" }}
                className="block py-2.5 text-foreground/80 transition-colors hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  to="/services"
                  activeProps={{ className: "text-gold" }}
                  className="flex-1 py-2.5 text-foreground/80 transition-colors hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  Services
                </Link>
                <button
                  type="button"
                  aria-label={servicesOpen ? "Collapse services" : "Expand services"}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((o) => !o)}
                  className="flex h-10 w-10 items-center justify-center text-foreground/80 transition-colors hover:text-gold"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {servicesOpen && (
                <ul className="space-y-1 pb-2 pl-4">
                  {services.map((svc) => (
                    <li key={svc.to} className="border-l border-border/40">
                      <Link
                        to={svc.to as any}
                        className="block py-2.5 pl-4 text-foreground/70 transition-colors hover:text-gold"
                        onClick={() => setMobileOpen(false)}
                      >
                        {svc.product} <span className="text-foreground/40">|</span> {svc.phase}{" "}
                        <span className="text-gold">({svc.revenue})</span>
                        <span className="mt-1 block text-xs font-normal tracking-normal text-foreground/50">
                          {svc.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="border-b border-border/40">
              <div className="flex items-center">
                <Link
                  to="/results"
                  activeProps={{ className: "text-gold" }}
                  className="flex-1 py-2.5 text-foreground/80 transition-colors hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  Results
                </Link>
                <button
                  type="button"
                  aria-label={resultsOpen ? "Collapse results" : "Expand results"}
                  aria-expanded={resultsOpen}
                  onClick={() => setResultsOpen((o) => !o)}
                  className="flex h-10 w-10 items-center justify-center text-foreground/80 transition-colors hover:text-gold"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${resultsOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {resultsOpen && (
                <ul className="space-y-1 pb-2 pl-4">
                  {caseStudies.map((c) => (
                    <li key={c.to} className="border-l border-border/40">
                      <Link
                        to={c.to as any}
                        activeProps={{ className: "text-gold" }}
                        className="block py-2.5 pl-4 text-foreground/70 transition-colors hover:text-gold"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.name}
                        <span className="mt-1 block text-xs font-normal tracking-normal text-foreground/50">
                          {c.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/blog"
                activeProps={{ className: "text-gold" }}
                className="block py-2.5 text-foreground/80 transition-colors hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/strategy"
                className="btn-gold block px-4 py-2.5 text-center text-xs tracking-wide uppercase"
                onClick={() => setMobileOpen(false)}
              >
                Strategy Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

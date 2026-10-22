import logo from "@/assets/shorecrest-logo-white-gold-transparent.png";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-navy py-14">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <img
          src={logo}
          alt="Shorecrest Digital"
          width={199}
          height={32}
          loading="lazy"
          decoding="async"
          className="mx-auto h-8 w-auto"
        />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Shorecrest Digital is a boutique growth partner agency located in Toronto, ON that focuses
          on helping financial firm owners grow their book of business through client acquisition
          strategies.
        </p>
        <p className="mt-8 text-sm font-semibold">
          Location: 457 Plains Rd E, 222 Burlington, ON L7T 0B8 Canada
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <span>Copyright {new Date().getFullYear()} © Shorecrest Digital</span>
          <span className="hidden sm:inline" aria-hidden="true">
            •
          </span>
          <Link to="/privacy-policy" className="text-gold hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

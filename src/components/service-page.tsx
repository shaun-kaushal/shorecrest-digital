import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  lede: string;
  badges: string[];
  ctaTitle: string;
  ctaText: string;
  /** Extra sections shown between the hero and the call to action. */
  children?: ReactNode;
  /** Extra sections shown after the call to action (e.g. an FAQ). */
  after?: ReactNode;
};

function Check() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-[10px] text-gold">
      ✓
    </span>
  );
}

/** Shared layout for the marketing service pages: a hero, then a call to action. */
export function ServicePage({
  eyebrow,
  title,
  lede,
  badges,
  ctaTitle,
  ctaText,
  children,
  after,
}: ServicePageContent) {
  return (
    <main>
      <section className="hero-bg pt-40 pb-24 text-center md:pt-56 md:pb-[152px]">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(34px,5vw,60px)] leading-[1.08] text-balance">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lede}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/strategy" className="btn-gold">
              Get my custom strategy
            </Link>
            <Link
              to="/results"
              className="inline-flex items-center justify-center rounded-[4px] border border-gold px-7 py-[0.85rem] text-[0.95rem] font-bold text-gold transition-colors hover:bg-gold/10"
            >
              View Client Results
            </Link>
          </div>
          <ul className="mt-7 flex flex-wrap justify-center gap-3">
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-semibold"
              >
                <Check />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {children}

      <section className="section bg-cream text-center text-cream-foreground">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl leading-snug sm:text-4xl">{ctaTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/75">
            {ctaText}
          </p>
          <Link to="/strategy" className="btn-gold mt-8">
            Book A Strategy Call
          </Link>
          <p className="mt-3 text-sm text-cream-foreground/60">
            30-min walkthrough. No sales pitch.
          </p>
        </div>
      </section>

      {after}
    </main>
  );
}

export type ProblemItem = { title: string; body: string };

/** Cream section: a heading, intro, three connected problem boxes and a callout. */
export function ProblemSection({
  title,
  intro,
  items,
  callout,
}: {
  title: ReactNode;
  intro: string;
  items: ProblemItem[];
  callout: string;
}) {
  return (
    <section className="section bg-cream text-cream-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-snug sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/75">
            {intro}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-0">
          {items.map((p, i) => (
            <li key={p.title} className="relative flex lg:px-4">
              <div className="flex-1 rounded-md border border-cream-foreground/15 bg-[#fbf8f2] p-7 shadow-[5px_5px_0_0_var(--color-navy-deep)]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-deep font-display text-sm font-bold text-gold">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-cream-foreground/75">
                  {p.body}
                </p>
              </div>
              {i < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -right-3 z-10 hidden h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-[#a8823a] text-sm font-bold text-white lg:grid"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-3xl rounded-md border-l-4 border-[#a8823a] bg-[#fbf8f2] px-6 py-4 text-center text-base font-semibold sm:text-left">
          {callout}
        </div>
      </div>
    </section>
  );
}

export type SolutionItem = {
  title: string;
  body: string;
  examples: string[];
  /** Small label above the title, e.g. "High urgency". */
  label?: string;
  /** Optional one-line summary of how the lead gets to the calendar. */
  path?: string;
};

/** Navy section: a heading, intro and two numbered solution cards. */
export function SolutionSection({
  title,
  intro,
  items,
}: {
  title: ReactNode;
  intro: string;
  items: SolutionItem[];
}) {
  return (
    <section className="section bg-navy-deep">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-snug sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="card-gold flex flex-col p-8 sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 font-display text-lg font-bold text-gold">
                  {i + 1}
                </span>
                {s.label && (
                  <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-navy-deep uppercase">
                    {s.label}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-2xl leading-snug sm:text-[1.7rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <p className="mt-6 text-[11px] font-bold tracking-[0.14em] text-foreground/60 uppercase">
                For example
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.examples.map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-sm font-semibold text-gold"
                  >
                    {e}
                  </li>
                ))}
              </ul>
              {s.path && (
                <p className="mt-6 border-t border-border pt-5 text-sm text-foreground/85">
                  <span className="font-bold text-gold">How it works: </span>
                  {s.path}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, faqJsonLd } from "@/lib/seo";
import { LeadflowDashboard } from "@/components/leadflow-dashboard";
import adsCrypto from "@/assets/results/google-ads-crypto-tax.webp";
import adsNpo from "@/assets/results/google-ads-npo-cpa.webp";
import adsEcommerce from "@/assets/results/google-ads-ecommerce-accounting.webp";
import adsNonResident from "@/assets/results/google-ads-non-resident-tax.webp";

export const Route = createFileRoute("/services/starter")({
  head: () =>
    pageHead({
      title:
        "Starter Phase: 5-10 Consultations A Month Without An Agency | Shorecrest Digital",
      description:
        "Leadflow by Shorecrest gives accounting, tax and bookkeeping firms an AI-powered system to generate 5-10 consultations a month without hiring a marketing agency. Plans from $297/month.",
      path: "/services/starter",
      ogTitle: "Starter Phase: Leadflow by Shorecrest",
      jsonLd: faqJsonLd(faqs as [string, string][]),
    }),
  component: StarterPage,
});

const problems = [
  {
    title: "No visibility into what they're actually doing",
    body: "You get reports, dashboards, and monthly updates. But you rarely see the actual work, the real changes being made, or why results move up and down. You're expected to trust the process without ever seeing the proof.",
  },
  {
    title: "Marketing agencies are expensive and risky",
    body: "Retainers start at $3,000 to $5,000 per month, often locked into long contracts, with no guarantee of outcomes. When results go flat, you're still paying the full price and hoping next month turns around.",
  },
  {
    title: "No control over your own lead generation",
    body: "Your pipeline depends on someone else's calendar, priorities, and bandwidth. You don't own the system, the data, or the ability to turn leads on when you need them most.",
  },
];

const pillars = [
  {
    title: "Attract With Google & AI",
    lead: "Get in front of the right people on Google and Meta at the moment they need you.",
    alt: "Google and Meta ads preview",
    points: [
      "Live Google Search campaigns within 24 hours for every accounting service",
      "Google Maps optimisation that ranks you in the top 3 for your service categories",
      "Retargeting sequences for people who visited your site or booking link",
    ],
  },
  {
    title: "Convert With Landing Pages",
    lead: "Turn attention into phone calls and appointments.",
    alt: "Landing page preview",
    points: [
      "Conversion-tested pages purpose-built for tax prep, bookkeeping, payroll and advisory",
      "Generates a full page from your service URL in minutes",
      "Mobile-optimised with built-in consent, no cookie theatre",
    ],
  },
];

const panels = [
  {
    title: "Nurture With Email Marketing",
    lead: "Follow up automatically so no lead goes cold in your inbox.",
    points: [
      "Automated email and SMS sequences follow up within minutes",
      "No lead goes cold in your inbox, and every response is tracked",
      "Retargeting sequences for people who ghosted your booking link",
      "Handoff sequences that prep prospects before your call",
    ],
  },
  {
    title: "Manage & Support",
    lead: "Everything runs in one system, with our team backing you up weekly.",
    points: [
      "Manage every lead and pipeline stage in one dashboard",
      "Automated email and SMS reminders fire for every new lead",
      "Direct support and account audits from our team",
      "E-signature documents and agreements built in",
    ],
  },
];

const steps = [
  {
    title: "Book a live demo",
    body: "A 30-minute call to understand how this platform aligns with your business and marketing goals.",
  },
  {
    title: "We build it with you",
    body: "We set up the backend so all you have to focus on is launching your marketing.",
  },
  {
    title: "Clients show up",
    body: "Contact and close each lead following our sales process.",
  },
  {
    title: "Follow-up runs itself",
    body: "Automated reminders and nurture sequences keep your pipeline moving without extra work.",
  },
];

const compare = [
  ["Google Ads", "$1,000/mo"],
  ["Facebook Ads", "$2,000/mo"],
  ["Landing Pages", "$250/mo"],
  ["CRM + Automations", "$300/mo"],
  ["Live Support", "Not included"],
];

const results = [
  {
    title: "Crypto Tax Services",
    shot: adsCrypto,
    body: "125 conversions from 24,279 impressions at CA$79.26 per conversion, a 5.01% click-through rate on CA$9,907.55 of managed spend.",
  },
  {
    title: "Non-Profit & Charity CPA",
    shot: adsNpo,
    body: "18 conversions from 177 clicks at CA$103.28 each, holding a 41.20% search impression share on CA$1,859.08 of spend.",
  },
  {
    title: "Ecommerce Accounting",
    shot: adsEcommerce,
    body: "9 conversions from 1,807 impressions at CA$99.66 per conversion, converting 11.39% of clicks on CA$896.90 of spend.",
  },
  {
    title: "Non-Resident Tax Preparation",
    shot: adsNonResident,
    body: "7 conversions from just CA$400.40 of spend, CA$57.20 per lead at a CA$6.16 average cost per click.",
  },
];

const faqs = [
  [
    "How much does it cost?",
    "$297/month. No setup fees, no long-term contract, and a 30-day money-back guarantee.",
  ],
  [
    "How is this different from hiring a marketing agency?",
    "An agency charges $4,000+/month to run the same channels. You get the whole stack, plus sales training and weekly coaching, for a flat $297.",
  ],
  [
    "Do I need marketing experience?",
    "No. We set up the backend for you. You just approve the messaging and launch.",
  ],
  [
    "What if I'm not tech-savvy?",
    "Everything is built and configured by our team. If you can send an email, you can run it.",
  ],
  ["Any contracts?", "No. Month-to-month, cancel anytime by email."],
  [
    "What additional costs are there?",
    "Only your own ad spend, paid directly to Google and Meta. You control the budget.",
  ],
];

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-[10px] text-gold">
      ✓
    </span>
  );
}

function CheckList({ items, muted }: { items: string[]; muted: string }) {
  return (
    <ul className="mt-6 space-y-3.5">
      {items.map((p) => (
        <li key={p} className={`flex gap-3 text-base ${muted}`}>
          <Check />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function Badges({ items, left }: { items: string[]; left?: boolean }) {
  return (
    <ul
      className={`flex flex-wrap gap-3 ${left ? "justify-center lg:justify-start" : "justify-center"}`}
    >
      {items.map((b) => (
        <li
          key={b}
          className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-semibold"
        >
          <Check />
          {b}
        </li>
      ))}
    </ul>
  );
}

function CtaButtons({ light, left }: { light?: boolean; left?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${left ? "justify-center lg:justify-start" : "justify-center"}`}
    >
      <Link to="/strategy" className="btn-gold">
        Book A Live Demo
      </Link>
      <button
        type="button"
        onClick={() => scrollTo("results")}
        className={`inline-flex items-center justify-center rounded-[4px] border px-7 py-[0.85rem] text-[0.95rem] font-bold transition-colors ${
          light
            ? "border-cream-foreground text-cream-foreground hover:bg-cream-foreground/5"
            : "border-gold text-gold hover:bg-gold/10"
        }`}
      >
        View Client Results
      </button>
    </div>
  );
}

function SectionHead({
  children,
  sub,
  light,
}: {
  children: ReactNode;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl leading-snug sm:text-4xl">{children}</h2>
      {sub && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-base ${light ? "text-cream-foreground/75" : "text-muted-foreground"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function useScript(src: string, attrs: Record<string, string> = {}) {
  useEffect(() => {
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
    document.body.appendChild(s);
  }, [src]);
}

function StarterPage() {
  useScript("https://js.storylane.io/js/v2/storylane.js", {
    "data-verify-origin": "",
  });

  return (
    <main>
      {/* Hero */}
      <section className="hero-bg pt-[136px] pb-[88px] sm:pt-[152px]">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="text-center lg:text-left">
            <p className="eyebrow">LeadFlow: Starter Phase ($50K+)</p>
            <h1 className="mx-auto mt-5 max-w-[22ch] text-3xl leading-tight text-balance sm:text-4xl lg:mx-0 lg:text-[2.4rem]">
              Use AI To Get More Consults Without Hiring An Agency
            </h1>
            <p className="mt-6 text-lg font-bold">
              Using AI you can bring more leads to your firm, with setup in just
              30 minutes or less.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              If you rely on referrals and partnerships to drive business, and
              you'd like more consistent clients every month, this system is for
              you.
            </p>
            <div className="mt-8">
              <CtaButtons left />
            </div>
            <div className="mt-6">
              <Badges left items={["30-Day Trial", "Cancel anytime"]} />
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <LeadflowDashboard />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead light>
            The Problem With Marketing Agencies In 2026
          </SectionHead>
          <div className="mt-12 grid overflow-hidden rounded-lg border border-cream-foreground/15 md:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
                className="border-b border-cream-foreground/15 p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <h3 className="text-xl leading-snug">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-cream-foreground/75">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHead>
              Here's How We'll Help You Bring{" "}
              <span className="whitespace-nowrap text-gold">
                5-10 Consultations
              </span>{" "}
              Per Month
            </SectionHead>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[...pillars, ...panels].map((p, i) => (
              <article key={p.title} className="card-gold p-8 sm:p-10">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 font-display text-lg font-bold text-gold">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-2xl leading-snug sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">{p.lead}</p>
                <CheckList items={p.points} muted="text-foreground/90" />
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/strategy" className="btn-gold">
              Book A Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead light>Interact With Our Product Live</SectionHead>
          <div className="mt-10">
            <div
              className="sl-embed"
              style={{
                position: "relative",
                paddingBottom: "calc(47.48% + 25px)",
                width: "100%",
                height: 0,
                transform: "scale(1)",
              }}
            >
              <iframe
                loading="lazy"
                className="sl-demo"
                src="https://app.storylane.io/demo/oxmj4pvpegdm?embed=inline"
                name="sl-embed"
                title="Leadflow product demo"
                allow="fullscreen"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "1px solid rgba(63,95,172,0.35)",
                  boxShadow: "0px 0px 18px rgba(26, 19, 72, 0.15)",
                  borderRadius: 10,
                  boxSizing: "border-box",
                }}
              />
            </div>
            <p className="mt-4 text-center text-sm text-cream-foreground/70">
              If you're on mobile, turn your screen sideways or zoom in.
            </p>
          </div>
          <div className="mt-9">
            <CtaButtons light />
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section bg-navy">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="eyebrow">Dead Simple</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">What Happens Next?</h2>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-lg border border-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="border-b border-border bg-card p-7 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <p className="text-xs font-bold text-gold">0{i + 1}</p>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead light>How Do We Compare?</SectionHead>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Hiring a marketer */}
            <div className="flex flex-col rounded-lg border border-cream-foreground/15 bg-white/50 p-7 sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cream-foreground/60 uppercase">
                Hiring A Marketer
              </p>
              <ul className="mt-5 flex-1 divide-y divide-cream-foreground/10">
                {compare.map(([f, price]) => (
                  <li
                    key={f}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="font-bold">{f}</span>
                    <span className="text-cream-foreground/55 line-through">
                      {price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t-2 border-cream-foreground/20 pt-4 text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-cream-foreground/55 line-through">
                  $3,550/mo
                </span>
              </div>
            </div>

            {/* Doing it yourself */}
            <div className="flex flex-col rounded-lg border-2 border-gold bg-navy-deep p-7 text-foreground shadow-xl shadow-navy-deep/25 sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">
                Doing It Yourself
              </p>
              <ul className="mt-5 flex-1 divide-y divide-border">
                {compare.map(([f]) => (
                  <li
                    key={f}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="font-bold">{f}</span>
                    <span className="flex items-center gap-2 font-bold text-gold">
                      <Check />
                      Included
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t-2 border-border pt-4 text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-gold">$297/mo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="section scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead sub="Straight from the Google Ads dashboards of firms running the Shorecrest system.">
            Real Campaign <span className="text-gold">Results</span>
          </SectionHead>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {results.map((r) => (
              <article key={r.title} className="card-gold flex flex-col p-6">
                <img
                  src={r.shot}
                  width={1476}
                  height={614}
                  decoding="async"
                  alt={`Google Ads results for ${r.title}`}
                  loading="lazy"
                  className="h-auto w-full rounded border border-border"
                />
                <h3 className="mt-6 text-2xl">{r.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section bg-navy">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead sub="See the system running on your firm's data before you pay a cent.">
            Your Next 15 Clients Are Already Searching
          </SectionHead>
          <div className="mt-7">
            <Badges
              items={["30-Day Trial", "Cancel anytime", "Plans from $297/mo"]}
            />
          </div>
          <div className="mt-10">
            <CtaButtons />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHead light>
            Frequently Asked <span className="text-gold">Questions</span>
          </SectionHead>
          <div className="mt-11 border-t border-cream-foreground/15">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group border-b border-cream-foreground/15"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-bold [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-11 text-base leading-relaxed text-cream-foreground/75">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

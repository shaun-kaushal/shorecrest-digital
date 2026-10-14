import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Services: LeadFlow, ClientSurge & ClientForge | Shorecrest Digital",
      description:
        "Client acquisition systems for accounting, bookkeeping and tax firms: LeadFlow, ClientSurge and ClientForge, sized to your firm's revenue and goals.",
      path: "/services",
      ogTitle: "Services | Shorecrest Digital",
    }),
  component: ServicesPage,
});

const services = [
  {
    to: "/services/starter",
    product: "LeadFlow",
    phase: "Starter Phase",
    revenue: "$100K+",
    summary:
      "For firms that have the time to run their own marketing without needing to hire an agency.",
    points: [
      "Google & Facebook Ads you launch yourself",
      "Custom landing pages built for your services",
      "Automated email & SMS follow-up",
      "CRM, setup help and live support",
    ],
  },
  {
    to: "/services/growth",
    product: "ClientSurge",
    phase: "Growth Phase",
    revenue: "$250K+",
    summary:
      "For firms that want a predictable flow of new client engagements every month via advertising.",
    points: [
      "Done-for-you Google & Facebook Ads",
      "Every lead screened by survey and a real conversation",
      "Our setter follows up within minutes",
      "10+ qualified consultations a month",
    ],
  },
  {
    to: "/services/scaling",
    product: "ClientForge",
    phase: "Scaling Phase",
    revenue: "$2M+",
    summary:
      "For firms that want to scale their firm by not just generating more leads, but improving lead quality.",
    points: [
      "Focused on tax planning & advisory clients",
      "Done-for-you Facebook & LinkedIn Ads",
      "Leads screened for revenue, fit and value",
      "Reach owners and executives by role and company size",
    ],
  },
];

const compareRows: [string, string, string, string][] = [
  ["Firm revenue", "$100K+", "$250K+", "$2M+"],
  ["Who runs it", "You, with our support", "Our team", "Our team"],
  ["Ad channels", "Google & Facebook", "Google & Facebook", "Facebook & LinkedIn"],
  ["Lead screening", "Automated", "Survey + conversation", "Survey + conversation"],
  ["Best for", "Firms starting out with ads", "Tax & bookkeeping clients", "Tax planning & advisory"],
];

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-[10px] text-gold">
      ✓
    </span>
  );
}

function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow">Our Services</p>
          <h1 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
            A Client Acquisition System For <span className="text-gold">Every Stage</span> Of Your
            Firm
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you want to run your own marketing or hand it to our team, each system is built
            for accounting, bookkeeping and tax firms, and sized to where your firm is today.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.to}
              className="flex flex-col rounded-lg border border-border bg-card p-7 transition-colors hover:border-gold/60"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">
                {s.phase} ({s.revenue})
              </p>
              <h2 className="mt-3 text-3xl">{s.product}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground/90">
                    <Check />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link to={s.to as any} className="btn-gold mt-8 w-full">
                Explore {s.product}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl leading-snug sm:text-4xl">
            Which One Is Right For You?
          </h2>
          <div className="mt-12 overflow-x-auto rounded-lg border border-cream-foreground/15">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-navy-deep text-foreground">
                  <th scope="col" className="w-[22%] px-5 py-4">
                    <span className="sr-only">Feature</span>
                  </th>
                  {services.map((s) => (
                    <th key={s.to} scope="col" className="px-5 py-4 font-display text-lg font-semibold">
                      {s.product}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([label, ...vals]) => (
                  <tr key={label} className="border-t border-cream-foreground/15">
                    <th scope="row" className="px-5 py-4 font-bold">
                      {label}
                    </th>
                    {vals.map((v, i) => (
                      <td key={i} className="px-5 py-4 text-cream-foreground/80">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl leading-snug sm:text-4xl">Not Sure Which Fits Your Firm?</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Book a 30-minute strategy call. We'll look at your firm's revenue, services and goals,
            and recommend the right system. No sales pitch.
          </p>
          <Link to="/strategy" className="btn-gold mt-8">
            Book A Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}

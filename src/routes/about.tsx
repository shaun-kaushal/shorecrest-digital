import { createFileRoute, Link } from "@tanstack/react-router";
import shaun from "@/assets/shaun-kaushal-shorecrest.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Shorecrest Digital" },
      {
        name: "description",
        content:
          "Meet Shaun Kaushal and the Shorecrest Digital approach: marketing systems built exclusively for accounting, bookkeeping and tax firms.",
      },
      { property: "og:title", content: "About Shorecrest Digital" },
      {
        property: "og:description",
        content:
          "A boutique growth partner for accounting, bookkeeping and tax firms — see how we work and what clients say.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "One industry, deeply",
    body: "We only work with financial firms, so nothing has to be translated from another market.",
  },
  {
    title: "Systems over campaigns",
    body: "A channel you keep, not a burst of leads that stops the day spend stops.",
  },
  {
    title: "Qualified over plenty",
    body: "Filtering happens before the calendar, so partner time goes to real opportunities.",
  },
];

function About() {
  return (
      <main>
        <section className="section">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="eyebrow">About Shorecrest Digital</p>
            <h1 className="mt-5 text-4xl leading-tight">
              A boutique growth partner for <span className="text-gold">financial firms</span>
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Based in Toronto, Ontario, we help accounting, bookkeeping and tax firm owners grow
              their book of business through client acquisition strategies that compound over time.
            </p>
          </div>
        </section>

        <section className="border-y border-border/60 bg-navy py-16">
          <div className="mx-auto grid max-w-5xl items-start gap-10 px-6 md:grid-cols-[320px_1fr]">
            <div className="aspect-[4/5] max-h-[360px] overflow-hidden rounded-lg">
              <img
                src={shaun}
                alt="Shaun Kaushal, Founder of Shorecrest Digital"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-4xl leading-snug">Meet Shaun Kaushal</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                An Ex-Intuit employee, Shaun founded Shorecrest Digital after seeing how many
                capable firms relied entirely on referrals and word of mouth. He has worked with
                accounting firms of all sizes — from those generating $500k+ per year to $20M per
                year. The work is straightforward: define the firm's positioning, build authority
                where business owners are already looking, and engineer qualification before a
                prospect ever reaches the calendar.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Firms we partner with typically see a measurable lift in qualified consultations
                within the first 90 days — not because of more traffic, but because the right people
                are the ones booking.
              </p>
              <p className="mt-6 font-display text-lg text-gold">Shaun Kaushal</p>
              <p className="text-base text-muted-foreground">Founder, Shorecrest Digital</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-4xl">How we work</h2>
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="rounded-lg border border-border bg-card p-7">
                  <h3 className="text-2xl">{v.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="strategy" className="section bg-cream text-cream-foreground">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-4xl">Let's work together</h2>
            <p className="mt-4 text-base text-cream-foreground/75">
              Book a free 30-minute strategy session. No sales pitch — just a walkthrough of what a
              Firm Growth System would look like for your firm.
            </p>
            <Link to="/strategy" className="btn-dark mt-8">
              Receive a custom strategy
            </Link>
          </div>
        </section>
      </main>
  );
}

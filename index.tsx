import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroDashboard } from "@/components/hero-dashboard";
import { WistiaVideo } from "@/components/wistia-video";
import shaun from "@/assets/shaun-kaushal-shorecrest.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shorecrest Digital: Marketing for Accounting Firms" },
      {
        name: "description",
        content:
          "We help bookkeeping, tax and CPA firms engineer a predictable path to qualified clients with a repeatable growth system.",
      },
      {
        property: "og:title",
        content: "Shorecrest Digital — Client Acquisition for Accounting Firms",
      },
      {
        property: "og:description",
        content:
          "A repeatable client-attracting system for accounting, bookkeeping and tax firms. No low-quality leads, no referral dependency.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const problems = [
  {
    title: "Filter out low-intent price shoppers",
    body: "Qualification happens before anyone books a call, not after.",
  },
  {
    title: "Install a predictable client-attracting system",
    body: "A repeatable channel, not another one-off campaign.",
  },
  {
    title: "Position your firm as the go-to in your market",
    body: "So the right prospects already trust you before the call.",
  },
];

const framework = [
  {
    n: "01",
    title: "Attention",
    body: "We define how your firm is positioned so it naturally attracts clients, stays aligned with a professional standard, and creates no internal compliance discomfort.",
  },
  {
    n: "02",
    title: "Filtering",
    body: "Once positioning is set, we build authority online in the exact places business owners already go looking for reassurance.",
  },
  {
    n: "03",
    title: "Nurture",
    body: "Qualification is engineered before anyone reaches your calendar, so the wrong-fit issue never shows up at the front door.",
  },
  {
    n: "04",
    title: "Acquire",
    body: "Prospects are educated before a conversation happens, so calls start seamless instead of starting from zero.",
  },
];

const services = [
  "Tax Resolution",
  "Audit & Assurance",
  "Tax Planning",
  "Bookkeeping",
  "Compilations",
  "R&D Credits",
  "Payroll Service",
  "Business Setup",
];

const videos = ["09frwxmrwx", "wbffqd0ol3"];

const callPoints = [
  {
    title: "Full positioning review",
    body: "Where your firm stands out and where it currently blends in.",
  },
  {
    title: "Real client benchmarks",
    body: "What qualified consultations actually cost in your market.",
  },
  {
    title: "Growth System walkthrough",
    body: "How compliance, reputation, buildout and nurture fit together.",
  },
  {
    title: "A custom 90-day plan",
    body: "Tied to your service mix and your actual revenue goals.",
  },
];

function Home() {
  return (
      <main>
        {/* Hero */}
        <section className="section min-h-[80vh] pt-16 pb-20 text-center sm:pt-24 sm:pb-24 lg:pt-28">
          <div className="mx-auto max-w-5xl px-6">
            <p className="eyebrow underline decoration-gold decoration-1 underline-offset-[6px]">Marketing for Accounting Firms</p>
            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              We Help Firms Engineer a Predictable Path to{" "}
              <span className="text-gold">Qualified Clients</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              No more low-quality leads. No more referral dependency. We build accounting,
              bookkeeping and tax firms a repeatable system for booking the right clients, not just
              more of them.
            </p>
            <div className="mt-9">
              <Link to="/strategy" className="btn-gold">
                Get my custom strategy
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">30-min Walkthrough. No Sales Pitch.</p>
            <HeroDashboard />
          </div>
        </section>

        {/* Trust bar */}
        <section className="mt-1 border-y border-border/60 bg-navy py-10">
          <p className="text-center text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Trusted by firms including
          </p>
          <div className="relative mx-auto mt-6 max-w-5xl overflow-hidden px-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent" />
            <div className="animate-marquee flex w-max items-center gap-12 text-sm font-semibold text-muted-foreground/70">
              {[
                "Streamline Accounting",
                "George K CPA",
                "Magid Financial",
                "T-Ledger Accounting",
                "DS CPA",
                "MyBookly",
                "Streamline Accounting",
                "George K CPA",
                "Magid Financial",
                "T-Ledger Accounting",
                "DS CPA",
                "MyBookly",
              ].map((n, i) => (
                <span key={`${n}-${i}`} className="whitespace-nowrap">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">How we help</p>
              <h2 className="mt-4 text-4xl leading-snug">
                The problem financial firms are facing
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Competition for accounting and bookkeeping clients has moved almost entirely online.
                Referrals alone aren't enough anymore, and undifferentiated firms get treated like a
                commodity. This is where a real growth system separates you from the rest of your
                market.
              </p>
            </div>
            <ul className="space-y-4 rounded-lg border border-border bg-card p-7">
              {problems.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-[10px] text-gold">
                    ✓
                  </span>
                  <div>
                    <p className="text-base font-bold">{p.title}</p>
                    <p className="mt-1 text-base text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Framework */}
        <section className="section bg-cream text-cream-foreground">
          <div className="mx-auto max-w-5xl px-6">
            <p className="eyebrow">The Firm Growth System</p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-snug">
              A four-part framework built to generate{" "}
              <span className="text-gold">quality inquiries</span> and predictable revenue.
            </h2>
            <div className="mt-10 grid overflow-hidden rounded-lg border border-cream-foreground/15 sm:grid-cols-2">
              {framework.map((f) => (
                <div key={f.n} className="border-b border-cream-foreground/15 p-8 last:border-b-0">
                  <p className="text-xs font-bold text-gold">{f.n}</p>
                  <h3 className="mt-3 text-2xl">{f.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-cream-foreground/75">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section bg-navy">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl">Our process works across every service line</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Same growth system, tuned to your firm's mix of work.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div
                  key={s}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-base font-semibold"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="section">
          <div className="mx-auto max-w-5xl px-6">
            <p className="eyebrow">Video Testimonials</p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-snug">
              Hear directly from the firms we've worked with
            </h2>
            <div className="mt-9 grid gap-6 md:grid-cols-2">
              {videos.map((id) => (
                <WistiaVideo key={id} id={id} />
              ))}
            </div>
          </div>
        </section>

        {/* Case highlight */}
        <section className="section bg-navy">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
            <div>
              <p className="font-display text-7xl font-bold text-gold">462.51%</p>
              <p className="mt-2 text-lg text-muted-foreground">ROI generated in 90 days</p>
              <h2 className="mt-6 text-3xl leading-snug">
                How one firm turned a marketing spend into a repeatable client channel.
              </h2>
            </div>
            <blockquote className="rounded-lg border border-border bg-card p-7 text-base leading-relaxed text-muted-foreground">
              "Working with Shaun has been a great experience. He really knows his stuff when it
              comes to accounting marketing, and his honest, straightforward feedback on our sales
              and marketing process was exactly what we needed. He's professional, easy to work
              with, and genuinely invested in helping our accounting firm grow."
              <footer className="mt-5 text-base font-bold text-foreground not-italic">
                Danny K.
                <span className="block font-normal text-muted-foreground">
                  Managing Director, MyBookly
                </span>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* About teaser */}
        <section className="section">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[320px_1fr]">
            <img
              src={shaun}
              alt="Shaun Kaushal, Founder of Shorecrest Digital"
              className="h-auto max-h-[420px] w-full rounded-lg object-cover"
            />
            <div>
              <p className="eyebrow">About Shorecrest</p>
              <h2 className="mt-4 text-4xl leading-snug">
                A growth partner built around one industry
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Led by Shaun Kaushal, an Ex-Intuit employee who has worked with accounting firms
                ranging from $500k+ to $20M per year, Shorecrest Digital helps financial firms
                scale by building marketing systems that compound over time. We've worked with
                firms across bookkeeping, tax resolution and advisory to attract higher-quality
                clients through focused, repeatable campaigns.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If you're looking for a growth partner who can assess your current approach and
                execute a strategy tied to real business goals, this is worth a conversation.
              </p>
              <p className="mt-6 font-display text-lg text-gold">Shaun Kaushal</p>
              <p className="text-base text-muted-foreground">Founder, Shorecrest Digital</p>
              <Link to="/about" className="mt-6 inline-block text-base font-bold text-gold">
                More about us →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="strategy" className="section bg-cream text-cream-foreground">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl">Let's work together</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-cream-foreground/75">
              Book a free strategy session. During the call, we'll show you exactly how a Firm
              Growth System would apply to your book of business.
            </p>
            <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
              {callPoints.map((c) => (
                <div key={c.title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <div>
                    <p className="text-base font-bold">{c.title}</p>
                    <p className="mt-1 text-base text-cream-foreground/70">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/strategy" className="btn-dark mt-10">
              Receive a custom strategy
            </Link>
          </div>
        </section>
      </main>
  );
}

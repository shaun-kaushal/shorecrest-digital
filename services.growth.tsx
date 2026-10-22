import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, faqJsonLd } from "@/lib/seo";
import ada from "@/assets/ada-zhang.png";
import danny from "@/assets/danny-khanna.png";
import shaun from "@/assets/shaun-linkedin-pic.png";
import heroImage from "@/assets/clientsurge-hero-462-roas.webp";
import { WistiaVideo } from "@/components/wistia-video";

export const Route = createFileRoute("/services/growth")({
  head: () =>
    pageHead({
      title:
        "ClientSurge: 10+ Qualified Consultations Every Month | Shorecrest Digital",
      description:
        "Done-for-you Google and Facebook ads for tax, accounting and bookkeeping firms, with every lead screened by our team. Receive 10+ qualified consultations a month.",
      path: "/services/growth",
      ogTitle: "Growth Phase: ClientSurge by Shorecrest Digital",
      jsonLd: faqJsonLd(faqs),
    }),
  component: GrowthPage,
});

const firms = [
  "T-Ledger Accounting",
  "DS CPA",
  "MyBookly",
  "Streamline Accounting",
  "George K CPA",
  "Magid Financial",
  "Nour & Daniels Tax",
  "Resolve Accounting",
  "SunPro Alliance Financial",
];

const problems = [
  {
    title: "Referrals don't show up on a schedule",
    body: "Most firms make the bulk of their revenue in a few busy months, then spend the rest of the year waiting on referrals. You can't plan hiring or growth around work you can't predict.",
  },
  {
    title: "Agencies sent junk leads, or none at all",
    body: "Price shoppers, people looking for free advice, and requests for services you don't offer. You paid the retainer either way, and your team wasted hours on calls that went nowhere.",
  },
  {
    title: "Good leads go cold before anyone calls",
    body: "A business owner fills out a form between meetings. If nobody reaches them within minutes, they've already booked with the next firm on Google.",
  },
];

const pillars = [
  {
    title: "Attract With Facebook Ads",
    lead: "Get in front of business owners who don't have an accountant to ask.",
    points: [
      "Campaigns built around the clients and services you actually want",
      "Reach new owners, people who just moved, and owners whose accountant retired",
      "Offers written for business tax and bookkeeping, not personal returns",
      "You own the ad accounts and every lead list",
    ],
  },
  {
    title: "Every Lead Is Qualified",
    lead: "Only qualified business owners make it to your calendar.",
    points: [
      "Every lead completes a survey and a real conversation with our team",
      "Price shoppers and free-advice seekers are filtered out",
      "Requests outside your services never reach you",
      "Spam and duplicate submissions never count toward your number",
    ],
  },
];

const panels = [
  {
    title: "Follow Up Within Minutes",
    lead: "Our setter reaches every new lead before they move on.",
    points: [
      "New leads contacted within minutes, not days",
      "Consults booked straight onto your calendar",
      "Prospects who prefer a call get one",
      "You see the full conversation for every lead",
    ],
  },
  {
    title: "Manage & Report",
    lead: "Everything in one place, with clear numbers every month.",
    points: [
      "CRM included to manage every lead and pipeline stage",
      "Monthly reporting on consults booked and cost per client",
      "Direct access to our team for questions and changes",
      "90-day starting term, then month to month",
    ],
  },
];

type CaseStudy = {
  firm: string;
  firmType: string;
  services: string;
  challenge: string;
  results: string[];
  name: string;
  role: string;
  photo: string;
};

const results: CaseStudy[] = [
  {
    firm: "MyBookly",
    firmType: "Tax Planning & Filing",
    services: "Google Ads + Meta Ads",
    challenge: "Relying on walk-ins and referrals.",
    results: [
      "33 consultations in 90 days",
      "First client landed in 8 days",
      "Generated 15 clients in 90 days",
    ],
    name: "Danny K.",
    role: "Managing Director @ MyBookly",
    photo: danny,
  },
  {
    firm: "Streamline Accounting",
    firmType: "Tax Planning & Filing",
    services: "Google Ads",
    challenge: "Underutilized staff members.",
    results: [
      "34 consultations in 90 days",
      "First client landed in 14 days",
      "Signed 12 clients in 90 days",
    ],
    name: "Ada Z.",
    role: "Director @ Streamline Accounting",
    photo: ada,
  },
];

const process = [
  {
    title: "Strategy call",
    body: "We map your services, ideal clients and how many new clients you can take on.",
  },
  {
    title: "Offer & targeting",
    body: "We choose the services and business owners worth going after in your market.",
  },
  {
    title: "Ads & landing page",
    body: "We write and build the Facebook ads and the page they land on.",
  },
  {
    title: "Qualification survey",
    body: "Every lead answers a short survey before anything reaches you.",
  },
  {
    title: "Launch",
    body: "Campaigns go live and start bringing business owners in.",
  },
  {
    title: "Setter follow-up",
    body: "Our setter contacts each new lead within minutes.",
  },
  {
    title: "Consults booked",
    body: "Qualified business owners land straight on your calendar.",
  },
  {
    title: "Report & optimize",
    body: "Clear monthly numbers, then budget moves to what’s working.",
  },
];

// Each video case study pairs with its result details (MyBookly, then Streamline).
const videos = [
  { id: "09frwxmrwx", firm: "MyBookly" },
  { id: "wbffqd0ol3", firm: "Streamline Accounting" },
];

const faqs: [string, string[]][] = [
  [
    "How is your agency pricing structured?",
    [
      "It's a flat management fee of $1,249/month, plus your ad spend, which starts at $1,500/month. The ad spend goes straight to the social media channel, not to us, so you always know exactly where that money is going. All payments are made in USD.",
      "If we don't deliver on our promise we work at no cost until we do.",
    ],
  ],
  [
    'What does "qualified consult" actually mean?',
    [
      "A business owner who needs tax or bookkeeping help, has had a real conversation with someone on our team, and has either booked time on your calendar or prefers a call. You can see the full conversation for every one.",
      "Before anything reaches your calendar, we screen out people shopping for the cheapest return, people looking for free advice, and anyone outside the services you want. Spam and duplicate submissions never count.",
    ],
  ],
  [
    "I've been burned by agencies before. What's different?",
    [
      "Most firm owners we talk to have been. It's usually one of three things: the leads were junk, there were no leads at all, or the leads went cold because nobody called them fast enough.",
      "Every lead is screened with a survey and a real conversation before it reaches you, our setter follows up within minutes, and if we don't bring you 30 appointments or calls, we work at no-cost until we do.",
    ],
  ],
  [
    "Do business owners actually hire accountants from ads?",
    [
      "Referrals will always bring some of your best clients. But plenty of business owners don't have anyone to ask: new owners, people who just moved, or people whose accountant just retired. They search Google and scroll Facebook. We put your firm in front of them with an offer built around the clients you actually want.",
    ],
  ],
  [
    "Who are you? Are you an accountant?",
    [
      "We're marketers, and that's on purpose. You already know how to do the accounting. What most firms are missing is a reliable way to get the right clients in the door.",
      "I'm Shaun Kaushal, I'm ex-Intuit, and Shorecrest only works with accounting, bookkeeping and tax firms. So we already know the difference between a 1040 shopper and a corporate client worth keeping year-round, and we build everything around that.",
    ],
  ],
  [
    "How soon can I see my first paying client?",
    [
      "Our clients typically see their first client in less than 21 days, and the fastest so far was 8 days.",
      "It depends on your market and how quickly you follow up with new leads, but you won't be waiting months to find out if this works. You'll see real conversations with real business owners within the first few weeks.",
    ],
  ],
  [
    "Is this a long-term contract?",
    [
      "There's a 90-day starting term, since that's how long it takes to properly build and prove the system. After that it's month to month. I don't want you staying with us because you're locked in. I want you staying because it's working.",
      "If we don't hit the number in 90 days, we work at no-cost until we do.",
    ],
  ],
  [
    "Who owns the ad accounts and leads?",
    [
      "You do. You will have full ownership of the ad accounts and lead lists. We also provide you with a CRM plus many other tools which you can continue to pay at a small fee of $97/month as an option.",
    ],
  ],
];

function Check() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-[10px] text-gold">
      ✓
    </span>
  );
}

function ProcessCard({
  n,
  step,
  className = "",
  style,
}: {
  n: number;
  step: { title: string; body: string };
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div style={style} className={`card-gold p-5 ${className}`}>
      <p className="font-display text-sm font-bold text-gold">
        {String(n).padStart(2, "0")}
      </p>
      <h3 className="mt-1 text-lg leading-snug">{step.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {step.body}
      </p>
    </div>
  );
}

function SummaryLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.14em] text-cream-foreground/60 uppercase">
      {children}
    </p>
  );
}

function CaseSummary({ r }: { r: CaseStudy }) {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <img
          src={r.photo}
          alt={r.name}
          width={56}
          height={56}
          loading="lazy"
          decoding="async"
          className="h-14 w-14 shrink-0 rounded-full border-2 border-gold object-cover"
        />
        <div>
          <h3 className="text-2xl leading-tight">{r.name}</h3>
          <p className="mt-0.5 text-sm text-cream-foreground/70">{r.role}</p>
        </div>
      </div>

      <dl className="mt-5 divide-y divide-cream-foreground/15 border-y border-cream-foreground/15">
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-sm text-cream-foreground/70">Firm type</dt>
          <dd className="text-right text-sm font-bold">{r.firmType}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-sm text-cream-foreground/70">Services</dt>
          <dd className="text-right text-sm font-bold">{r.services}</dd>
        </div>
      </dl>

      <div className="mt-5">
        <SummaryLabel>Challenge</SummaryLabel>
        <p className="mt-1.5 text-base">{r.challenge}</p>
      </div>

      <div className="mt-5">
        <SummaryLabel>Result</SummaryLabel>
        <ul className="mt-2 space-y-2">
          {r.results.map((line, i) => (
            <li
              key={line}
              className={`flex items-start gap-2.5 text-base ${
                i === r.results.length - 1
                  ? "font-bold text-[#94701f]"
                  : "text-cream-foreground/85"
              }`}
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#a8823a] text-[10px] text-[#a8823a]">
                ✓
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GrowthPage() {
  const scrollToHow = () =>
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main>
      {/* Hero */}
      <section className="hero-bg pt-[136px] sm:pt-[152px]">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="text-center lg:text-left">
            <p className="eyebrow">ClientSurge: Growth Phase ($250K+)</p>
            <h1 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-[2.4rem]">
              Get Pre-Qualified Consults Without Relying On Referrals
            </h1>
            <p className="mt-6 text-base text-muted-foreground">
              For firms that make 70% of their revenue in 4 months, rely on
              referrals, and want more consistent monthly revenue.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <button type="button" onClick={scrollToHow} className="btn-gold">
                See How It Works
              </button>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("results")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="inline-flex items-center justify-center rounded-[4px] border border-gold px-7 py-[0.85rem] text-[0.95rem] font-bold text-gold transition-colors hover:bg-gold/10"
              >
                View Client Results
              </button>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Qualified By Our Team", "No Long-Term Contracts"].map((b) => (
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
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src={heroImage}
              alt="Accounting firm owner whose firm achieved a 462% return on ad spend"
              width={720}
              height={900}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-lg border border-border object-cover object-top"
            />
            <p className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-2.5 font-display text-lg font-semibold text-[#A8823A] shadow-[0_6px_18px_rgba(0,0,0,0.3)] sm:text-xl">
              MyBookly Accounting
            </p>
          </div>
        </div>

        {/* Firm marquee */}
        <div className="relative mt-16 overflow-hidden border-y border-border/60 bg-navy py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-navy to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-navy to-transparent" />
          <div className="animate-marquee flex w-max items-center gap-11 text-sm font-semibold text-muted-foreground/80">
            {[...firms, ...firms].map((f, i) => (
              <span
                key={`${f}-${i}`}
                aria-hidden={i >= firms.length}
                className="flex items-center gap-2.5 whitespace-nowrap"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl leading-snug sm:text-4xl">
            The Problem With Relying On Referrals
          </h2>
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

      {/* Solution */}
      <section id="how-it-works" className="section scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl leading-snug sm:text-[2.6rem]">
              Here's How You Can Attract{" "}
              <span className="whitespace-nowrap text-gold">10+ Consults</span>{" "}
              Every Month
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Four pieces work together so only qualified business owners end up
              on your calendar.
            </p>
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
                <ul className="mt-6 space-y-3.5">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-base text-foreground/90"
                    >
                      <span className="mt-0.5">
                        <Check />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/strategy" className="btn-gold">
              Book A Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Results: video case studies */}
      <section
        id="results"
        className="section scroll-mt-16 border-b border-cream-foreground/10 bg-cream text-cream-foreground"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl leading-snug sm:text-4xl">
              Video Case Studies From{" "}
              <span className="text-[#a8823a]">My Clients</span>
            </h2>
            <p className="mt-3 text-base text-cream-foreground/75">
              See what clients who've been with us for 2+ years had to say
            </p>
          </div>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            {videos.map((v) => {
              const r = results.find((x) => x.firm === v.firm);
              return (
                <article
                  key={v.id}
                  className="overflow-hidden rounded-lg border border-cream-foreground/15 bg-[#fbf8f2] shadow-xl shadow-navy-deep/10"
                >
                  <div className="bg-navy">
                    <WistiaVideo id={v.id} bare />
                  </div>
                  {r && <CaseSummary r={r} />}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-navy-deep">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl leading-snug sm:text-4xl">Our Process</h2>
            <p className="mt-3 text-base text-muted-foreground">
              A repeatable plan for every firm, from strategy call to qualified
              consults on your calendar.
            </p>
          </div>

          {/* Desktop: two rows of four, in order, each on its own timeline */}
          <div className="mx-auto mt-16 hidden max-w-5xl space-y-12 lg:block">
            {[process.slice(0, 4), process.slice(4)].map((row, r) => (
              <div key={r}>
                <div className="relative mb-6 h-3">
                  <div className="absolute top-1/2 right-[12.5%] left-[12.5%] h-px -translate-y-1/2 bg-gold/35" />
                  <div className="relative grid grid-cols-4 gap-6">
                    {row.map((step) => (
                      <span
                        key={step.title}
                        className="mx-auto block h-3 w-3 rounded-full border-2 border-navy-deep bg-gold"
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {row.map((step, i) => (
                    <ProcessCard
                      key={step.title}
                      n={r * 4 + i + 1}
                      step={step}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile and tablet: vertical timeline */}
          <ol className="relative mt-12 space-y-4 border-l border-gold/35 pl-6 lg:hidden">
            {process.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute top-5 -left-[31px] h-3 w-3 rounded-full border-2 border-navy-deep bg-gold" />
                <ProcessCard n={i + 1} step={step} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl leading-snug sm:text-4xl">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div className="mt-11 border-t border-cream-foreground/15">
            {faqs.map(([q, answers]) => (
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
                <div className="space-y-3 pb-5 pr-11 text-base leading-relaxed text-cream-foreground/75">
                  {answers.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-[4.5rem]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center md:flex-row md:text-left">
          <img
            src={shaun}
            alt="Shaun Kaushal"
            width={104}
            height={104}
            loading="lazy"
            className="h-[104px] w-[104px] shrink-0 rounded-full border-[3px] border-gold object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl leading-snug sm:text-3xl">
              Shift From Referrals To 10 Qualified Consultations Per Month
            </h2>
            <p className="mt-3 text-sm font-bold text-gold">
              Shaun Kaushal | Growth Partner @ Shorecrest Digital
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Working exclusively with accounting firms for 2+ years
            </p>
          </div>
          <div className="shrink-0 text-center">
            <button type="button" onClick={scrollToHow} className="btn-gold">
              See How It Works
            </button>
            <p className="mt-3 text-sm text-muted-foreground">
              No sales pitch. No obligation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

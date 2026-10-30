import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, organizationJsonLd } from "@/lib/seo";
import shaun from "@/assets/shaun-kaushal-shorecrest.webp";
import { WistiaVideo } from "@/components/wistia-video";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Shorecrest Digital: Marketing for Accounting Firms",
      description:
        "We help bookkeeping, tax and CPA firms engineer a predictable path to qualified clients with a repeatable growth system.",
      path: "/",
      ogTitle: "Shorecrest Digital | Client Acquisition for Accounting Firms",
      ogDescription:
        "A repeatable client-attracting system for accounting, bookkeeping and tax firms. No low-quality leads, no referral dependency.",
      jsonLd: [
        organizationJsonLd,
        {
          "@type": "WebSite",
          "@id": "https://shorecrest.co/#website",
          name: "Shorecrest Digital",
          url: "https://shorecrest.co",
          publisher: { "@id": "https://shorecrest.co/#organization" },
        },
      ],
    }),
  component: Home,
});

const firms = [
  "MyBookly",
  "Streamline Accounting",
  "George K CPA",
  "Magid Financial",
  "T-Ledger Accounting",
  "DS CPA",
  "Nour & Daniels Tax",
  "Resolve Accounting",
  "SunPro Alliance Financial",
];

const framework = [
  {
    title: "Attention",
    icon: "target",
    body: "We define how your firm is positioned so it naturally attracts clients, stays aligned with a professional standard, and creates no internal compliance discomfort.",
  },
  {
    title: "Filtering",
    icon: "filter",
    body: "Once positioning is set, we build authority online in the exact places business owners already go looking for reassurance.",
  },
  {
    title: "Nurture",
    icon: "heart",
    body: "Qualification is engineered before anyone reaches your calendar, so the wrong-fit issue never shows up at the front door.",
  },
  {
    title: "Acquire",
    icon: "check",
    body: "Prospects are educated before a conversation happens, so calls start seamless instead of starting from zero.",
  },
] as const;

const serviceLines = [
  { label: "Tax Resolution", icon: "shield" },
  { label: "Tax Planning", icon: "calendar" },
  { label: "CRA/IRS Audit", icon: "search" },
  { label: "Bookkeeping", icon: "doc" },
  { label: "Backfile Taxes", icon: "folder" },
  { label: "Cross Border Tax", icon: "globe" },
  { label: "R&D Tax Credits", icon: "flask" },
  { label: "Business Setup", icon: "home" },
] as const;

const reasons = [
  {
    title: "Accounting firms only",
    icon: "building",
    body: "We only work with accounting, bookkeeping and tax firms, so nothing has to be translated from another industry.",
  },
  {
    title: "Built by an ex-Intuit marketer",
    icon: "star",
    body: "Our founder is ex-Intuit, so we understand how firm owners think, buy and choose who to trust.",
  },
  {
    title: "Every lead is screened",
    icon: "filter",
    body: "Price shoppers, free-advice seekers and spam are filtered out before anything reaches your calendar.",
  },
  {
    title: "A proven track record",
    icon: "trend",
    body: "Firms typically land their first client within 21 days, and the fastest so far was 8 days.",
  },
] as const;

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

type IconName =
  | (typeof framework)[number]["icon"]
  | (typeof serviceLines)[number]["icon"]
  | (typeof reasons)[number]["icon"];

const iconPaths: Record<IconName, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </>
  ),
  filter: <path d="M4 5h16l-6 8v6l-4-2v-4z" />,
  heart: (
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  ),
  check: <path d="M5 12l4 4L19 6" />,
  shield: <path d="M12 3 4 7v5c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V7z" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  doc: (
    <>
      <path d="M5 4h11l3 3v13H5z" />
      <path d="M9 11h6M9 15h6" />
    </>
  ),
  folder: (
    <>
      <path d="M4 7h6l2 2h8v10H4z" />
      <path d="M4 7V5h5l2 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  flask: (
    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
  ),
  home: (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-3 8 3v16" />
      <path d="M9 21v-5h6v5M8 9h8M8 13h8" />
    </>
  ),
  star: (
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
  ),
  trend: (
    <>
      <path d="M4 20 10 13l4 4 6-8" />
      <path d="M15 9h5v5" />
    </>
  ),
};

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {iconPaths[name]}
    </svg>
  );
}

const PAPER = "bg-[#fbf8f2]";
const INK_SOFT = "text-[#46546c]";
const GOLD_INK = "text-[#94701f]";
const outlineBtn =
  "inline-flex items-center justify-center rounded-[4px] border border-gold px-7 py-[0.85rem] text-[0.95rem] font-bold text-gold transition-colors hover:bg-gold/10";

function Home() {
  return (
    <main>
      {/* Hero: the header floats over this on the homepage */}
      <section className="bg-[linear-gradient(135deg,#12274a_0%,#0b1a33_45%,#050f1f_100%)] pt-40 pb-24 text-center md:pt-56 md:pb-[152px]">
        <div className="mx-auto max-w-5xl px-6">
          <span className="inline-block rounded-full bg-[linear-gradient(135deg,#f3d488_0%,#e3b24e_50%,#b98a2c_100%)] px-[18px] py-2 text-xs font-bold tracking-[0.08em] text-navy-deep shadow-[0_8px_24px_-10px_rgba(227,178,78,0.6)]">
            Accounting Marketing Agency
          </span>
          <h1 className="mx-auto mt-[26px] text-[clamp(36px,5.6vw,72px)] leading-[1.05] font-bold tracking-[-0.02em] text-balance text-foreground">
            Get More Pre-Qualified Tax Engagements
            <span className="text-gold">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-lg leading-relaxed text-muted-foreground">
            We build accounting, bookkeeping and tax firms a repeatable system
            for booking the right clients, not just more of them.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/strategy" className="btn-gold">
              Get my custom strategy
            </Link>
            <a href="#framework" className={outlineBtn}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Firm strip */}
      <div className="overflow-hidden border-y border-border/60 bg-navy py-[22px]">
        <div className="animate-marquee flex w-max gap-14 text-[15px] font-bold whitespace-nowrap text-muted-foreground">
          {[...firms, ...firms].map((f, i) => (
            <span
              key={`${f}-${i}`}
              aria-hidden={i >= firms.length}
              className="flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* The landscape has changed */}
      <section className={`${PAPER} py-[104px] text-cream-foreground`}>
        <div className="mx-auto grid max-w-[1120px] items-center gap-11 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-[72px]">
          <div>
            <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.15]">
              Client acquisition for accounting firms has changed. Is your firm
              keeping pace?
            </h2>
            <div
              className={`mt-6 space-y-4 text-[17px] leading-relaxed ${INK_SOFT}`}
            >
              <p>
                Competition for accounting and bookkeeping clients has moved
                almost entirely online. Referrals alone aren’t enough anymore,
                and undifferentiated firms get treated like a commodity.
              </p>
              <p>
                Most firm owners we talk to have been burned before: the leads
                were junk, there were no leads at all, or the leads went cold
                because nobody called them fast enough.
              </p>
              <p>
                We built the Firm Growth System to fix all three. It puts your
                firm in front of the right business owners, screens every lead,
                and follows up within minutes, so the right clients end up on
                your calendar.
              </p>
            </div>
            <Link to="/strategy" className="btn-gold mt-8">
              Book a free strategy call
            </Link>
          </div>
          <div className="relative min-h-[440px] overflow-hidden rounded-[14px] bg-navy md:min-h-[520px]">
            <img
              src="/danny-mybookly.webp"
              alt="Danny K., Managing Director at MyBookly"
              width={640}
              height={853}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[50%_15%]"
            />
            <blockquote className="absolute inset-x-5 bottom-5 rounded-[10px] bg-navy-deep/92 p-6 text-foreground">
              <span
                aria-hidden="true"
                className="block font-display text-[54px] leading-[0.6] text-gold"
              >
                “
              </span>
              <p className="mt-2.5 font-display text-[21px] leading-snug">
                Within a few months, our firm generated 3x more business clients
                than we did with a prior agency.
              </p>
              <cite className="mt-3.5 block text-[13px] font-bold not-italic text-gold">
                Danny K., Managing Director, MyBookly
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Firm Growth System */}
      <section id="framework" className="scroll-mt-20 bg-navy-deep py-[104px]">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.15]">
              The Firm Growth System
            </h2>
            <p className="mt-[18px] text-lg text-muted-foreground">
              A four-part framework built to generate quality inquiries and
              predictable revenue, not vanity metrics.
            </p>
          </div>
          <div className="mt-14 grid gap-[22px] md:grid-cols-2">
            {framework.map((f) => (
              <article
                key={f.title}
                className="rounded-[4px] border border-border bg-navy p-[34px] shadow-[6px_6px_0_0_var(--color-gold)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold">
                  <Icon name={f.icon} className="h-[22px] w-[22px]" />
                </div>
                <h3 className="mt-[22px] text-[26px]">{f.title}</h3>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
                <Link
                  to="/services"
                  className="mt-5 inline-block text-[13px] font-extrabold text-gold hover:underline"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-cream py-[104px] text-cream-foreground">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.15]">
              Real results from real accounting firms
            </h2>
            <p className={`mt-[18px] text-lg ${INK_SOFT}`}>
              Our system puts firms in front of the business owners already
              looking for them. The result is consistent consultations and
              measurable growth.
            </p>
          </div>
          <div className="mx-auto mt-[52px] grid max-w-[960px] gap-[22px] md:grid-cols-2">
            {[
              {
                to: "/results/mybookly",
                firm: "MyBookly Accounting",
                video: "09frwxmrwx",
                stat: "+462%",
                label: "ROI in 90 days",
              },
              {
                to: "/results/streamline-accounting",
                firm: "Streamline Accounting",
                video: "wbffqd0ol3",
                stat: "+183%",
                label: "Qualified consults",
              },
            ].map((c) => (
              <article
                key={c.firm}
                className={`overflow-hidden rounded-xl border border-cream-foreground/15 ${PAPER}`}
              >
                <div className="bg-navy">
                  <WistiaVideo id={c.video} bare />
                </div>
                <div className="flex items-center justify-between gap-3 px-5 py-[18px]">
                  <div>
                    <b className="block text-[15px]">{c.firm}</b>
                    <Link
                      to={c.to as "/results/mybookly"}
                      className="text-[13px] font-bold text-[#94701f] hover:underline"
                    >
                      Read the case study →
                    </Link>
                  </div>
                  <div className="shrink-0 text-right">
                    <strong className="block font-display text-[30px] leading-none text-[#a8823a]">
                      {c.stat}
                    </strong>
                    <span className={`text-xs font-bold ${INK_SOFT}`}>
                      {c.label}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service lines */}
      <section
        className={`${PAPER} py-[104px] text-center text-cream-foreground`}
      >
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.15]">
              Our process works across every service line
            </h2>
            <p className={`mt-[18px] text-lg ${INK_SOFT}`}>
              We’re not here to bill you for busy work. We tell you exactly what
              we’ll do for your firm, then we do it, whatever services you want
              more of.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3.5">
            {serviceLines.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-md border border-cream-foreground/15 bg-cream px-3 py-3.5 text-left text-sm font-bold shadow-[0_3px_0_0_rgba(19,34,63,0.14)] md:gap-3 md:px-[18px] md:py-4 md:text-[15px]"
              >
                <Icon
                  name={s.icon}
                  className={`h-5 w-5 shrink-0 ${GOLD_INK}`}
                />
                {s.label}
              </div>
            ))}
          </div>
          <Link to="/strategy" className="btn-gold mt-10">
            Help me get more clients
          </Link>
        </div>
      </section>

      {/* Why Shorecrest */}
      <section className="bg-navy-deep py-[104px]">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.15]">
              Why Shorecrest?
            </h2>
            <p className="mt-[18px] text-lg text-muted-foreground">
              As a busy firm owner, you care about one thing: qualified
              consultations. Not rankings, not traffic. Everything we do is
              focused on filling your calendar with the right clients.
            </p>
          </div>
          <div className="mt-[60px] grid gap-[34px] sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title}>
                <Icon name={r.icon} className="h-[30px] w-[30px] text-gold" />
                <h3 className="mt-[18px] text-[21px]">{r.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`mt-[72px] grid overflow-hidden rounded-[14px] ${PAPER} text-cream-foreground md:grid-cols-2`}
          >
            <img
              src="/ada-zhang-streamline.webp"
              alt="Ada Z., Director at Streamline Accounting"
              width={760}
              height={953}
              loading="lazy"
              decoding="async"
              className="h-[340px] w-full object-cover object-[50%_12%] md:h-[440px]"
            />
            <blockquote className="self-center p-8 md:p-[52px]">
              <p className="font-display text-2xl leading-snug">
                “I can’t recommend Shorecrest Digital enough. Their digital
                strategy helped us attract more local clients within the first
                14 days than we’ve seen in 6 months by ourselves.”
              </p>
              <cite className="mt-[22px] block font-extrabold not-italic">
                Ada Z.
                <span className={`block text-sm font-medium ${INK_SOFT}`}>
                  Director, Streamline Accounting
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Let's work together */}
      <section className="bg-cream py-[104px] text-center text-cream-foreground">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.15]">
              Let’s work together
            </h2>
            <p className={`mt-[18px] text-lg ${INK_SOFT}`}>
              Book a free 30-minute strategy session. No sales pitch, just a
              walkthrough of what a Firm Growth System would look like for your
              firm.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-[900px] gap-[18px] text-left md:grid-cols-2">
            {callPoints.map((c) => (
              <div
                key={c.title}
                className={`flex gap-4 rounded-md border border-cream-foreground/15 ${PAPER} p-6 shadow-[5px_5px_0_0_var(--color-navy-deep)]`}
              >
                <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-navy-deep text-[13px] font-extrabold text-gold">
                  ✓
                </span>
                <div>
                  <b className="block text-base">{c.title}</b>
                  <p className={`mt-1 text-[14.5px] ${INK_SOFT}`}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/strategy" className="btn-gold mt-11">
            Book your free strategy call
          </Link>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-navy py-[104px]">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-[72px]">
          <div>
            <p className="text-sm font-bold text-gold">
              A message from our founder
            </p>
            <h2 className="mt-3 text-[clamp(30px,4vw,46px)] leading-[1.15]">
              Most marketing agencies miss the mark with accounting firms
            </h2>
            <p className="mt-4 text-[17px] font-bold text-foreground">
              They’re focused on traffic. We’re solely focused on booking you
              qualified consultations.
            </p>
            <div className="mt-4 space-y-4 text-[16.5px] leading-relaxed text-muted-foreground">
              <p>
                I founded Shorecrest Digital after seeing how many capable firms
                relied entirely on referrals and word of mouth. Most agencies
                don’t specialize in accounting, so they don’t understand how
                firm owners buy or which clients are actually worth keeping.
              </p>
              <p>
                No rankings, no traffic reports, no vanity metrics. Just
                qualified business owners on your calendar, and a system you
                own.
              </p>
            </div>
            <Link to="/strategy" className="btn-gold mt-[30px]">
              Let’s work together
            </Link>
          </div>
          <div className="overflow-hidden rounded-[14px] border border-border">
            <img
              src={shaun}
              alt="Shaun Kaushal, Founder of Shorecrest Digital"
              width={720}
              height={1280}
              loading="lazy"
              decoding="async"
              className="h-[460px] w-full object-cover object-[50%_68%] md:h-[560px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

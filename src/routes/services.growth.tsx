import { createFileRoute } from "@tanstack/react-router";
import ada from "@/assets/ada-zhang.png";
import danny from "@/assets/danny-khanna.png";
import george from "@/assets/georgekcpa-gk-pic.png";
import rajiv from "@/assets/rajiv-kaushal.png";
import shaun from "@/assets/shaun-linkedin-pic.png";
import heroImage from "@/assets/clientsurge-hero-462-roas.webp";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { WistiaVideo } from "@/components/wistia-video";

export const Route = createFileRoute("/services/growth")({
  head: () => ({
    meta: [
      { title: "30 Qualified Consultations In 90 Days, Guaranteed | Shorecrest Digital" },
      {
        name: "description",
        content:
          "We book tax, accounting and bookkeeping firms 30 qualified business consultations in 90 days, guaranteed, or we work at no cost until we do.",
      },
      { property: "og:title", content: "Growth Phase: ClientSurge by Shorecrest Digital" },
      { property: "og:url", content: "/services/growth" },
    ],
    links: [{ rel: "canonical", href: "/services/growth" }],
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
    title: "Attract With Google & Facebook Ads",
    lead: "Get in front of business owners who don't have an accountant to ask.",
    points: [
      "Campaigns built around the clients and services you actually want",
      "Reach new owners, people who just moved, and owners whose accountant retired",
      "Offers written for business tax and bookkeeping, not personal returns",
      "You own the ad accounts and every lead list",
    ],
  },
  {
    title: "Screen Every Lead Before It Reaches You",
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

const results = [
  {
    tag: "Average Client Result",
    title: "33 Qualified Consults in 90 Days",
    first: "(First client landed in 8 days)",
    challenge: "Seasonal spikes and referrals.",
    review:
      "Working with Shorecrest Digital completely changed how we attract clients. Within a few months, our firm generated 3x more business clients than we did with a prior agency.",
    name: "Danny K.",
    role: "Managing Director @ MyBookly",
    photo: danny,
  },
  {
    tag: "Average Client Result",
    title: "34 Qualified Consults in 90 Days",
    first: "(First client landed in 14 days)",
    challenge: "Seasonal workload.",
    review:
      "I can't recommend Shorecrest Digital enough. Their digital strategy helped us attract more local clients within the first 14 days than we've seen in 6 months by ourselves.",
    name: "Ada Z.",
    role: "Director @ Streamline Accounting",
    photo: ada,
  },
  {
    tag: "When We Fall Short",
    title: "24 Qualified Consults in 90 Days",
    first: "(First client landed in 20 days)",
    note: "*We missed our target of 30 which means we worked for free to make up for the remaining amount.",
    challenge: "Replace personal returns with corporate.",
    review:
      "Shorecrest Digital completely updated our marketing strategy where it was evident through the number of leads we generated that the marketing was working.",
    name: "Rajiv K.",
    role: "Managing Partner @ DS CPA",
    photo: rajiv,
  },
  {
    tag: "When We Fall Short",
    title: "21 Qualified Consults in 90 Days",
    first: "(First client landed in 18 days)",
    note: "*We missed our target of 30 which means we worked for free to make up for the remaining amount.",
    challenge: "Wanted more niche accounting clients.",
    review:
      "Before working with Shorecrest Digital, our website barely got any engagement. After their work, we've seen a noticeable difference in consultations.",
    name: "George K.",
    role: "Owner @ George K CPA",
    photo: george,
  },
];

const videos = ["09frwxmrwx", "wbffqd0ol3"];


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

function GrowthPage() {

  const scrollToHow = () =>
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main>
      {/* Hero */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="text-center lg:text-left">
            <p className="eyebrow">ClientSurge: Growth Phase ($250K+)</p>
            <h1 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-[2.4rem]">
              Receive 10+ Qualified Consultations Every Month Without Relying On Referrals
            </h1>
            <p className="mt-6 text-base text-muted-foreground">
              For firms that make 70% of their revenue in 4 months, rely on referrals, and want
              more consistent monthly revenue.
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
              {["Qualified By Our Team", "No Long-Term Contracts"].map(
                (b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-semibold"
                  >
                    <Check />
                    {b}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src={heroImage}
              alt="Accounting firm owner whose firm achieved a 462% return on ad spend"
              width={940}
              height={1175}
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
                <p className="mt-3 text-base leading-relaxed text-cream-foreground/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="how-it-works" className="section scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl leading-snug sm:text-4xl">
            Here's How We'll Bring You <span className="text-gold">10 Clients</span> Every Month
          </h2>
          {pillars.map((p, i) => (
            <div key={p.title} className="mt-16 grid items-center gap-10 md:grid-cols-2 md:gap-14">
              <div className={i % 2 ? "md:order-2" : ""}>
                <ImagePlaceholder className="aspect-[4/3]" />
              </div>
              <div>
                <h3 className="text-2xl leading-snug sm:text-3xl">{p.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{p.lead}</p>
                <ul className="mt-6 space-y-3.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-base text-foreground/90">
                      <span className="mt-0.5"><Check /></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="mt-16 grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
            {panels.map((p) => (
              <div
                key={p.title}
                className="border-b border-border p-8 last:border-b-0 sm:p-10 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <h3 className="text-2xl leading-snug sm:text-3xl">{p.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{p.lead}</p>
                <ul className="mt-6 space-y-3.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-base text-foreground/90">
                      <span className="mt-0.5"><Check /></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="section scroll-mt-16 bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl leading-snug sm:text-4xl">
              Results We've Driven For <span className="text-gold">Clients</span>
            </h2>
            <p className="mt-3 text-base text-cream-foreground/75">
              Firms typically land their first client within 21 days
            </p>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-lg border border-cream-foreground/15 md:grid-cols-2">
            {results.map((r, i) => (
              <article
                key={r.name}
                className={`flex flex-col border-cream-foreground/15 p-7 sm:p-10 ${
                  i < results.length - 1 ? "border-b" : ""
                } ${i === 2 ? "md:border-b-0" : ""} ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <p className="text-sm font-bold text-gold">{r.tag}</p>
                <h3 className="mt-3 text-2xl">{r.title}</h3>
                <p className="mt-1.5 text-sm font-bold text-[oklch(0.62_0.12_80)]">{r.first}</p>
                {r.note && (
                  <p className="mt-2.5 text-xs italic text-cream-foreground/70">{r.note}</p>
                )}
                <div className="mt-4 space-y-3.5 text-base leading-relaxed text-cream-foreground/75">
                  <p>
                    <b className="text-cream-foreground">Challenge:</b> {r.challenge}
                  </p>
                  <p>
                    <b className="text-cream-foreground">Review:</b> <i>"{r.review}"</i>
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-6">
                  <img
                    src={r.photo}
                    alt={r.name}
                    width={42}
                    height={42}
                    loading="lazy"
                    className="h-11 w-11 shrink-0 rounded-full border border-gold bg-gold/15 object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{r.name}</p>
                    <p className="text-sm text-cream-foreground/70">{r.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl leading-snug sm:text-4xl">
              Video Case Studies From <span className="text-gold">My Clients</span>
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              See what clients who've been with us for 2+ years had to say
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {videos.map((id) => (
              <WistiaVideo key={id} id={id} />
            ))}
          </div>
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
              <details key={q} className="group border-b border-cream-foreground/15">
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
            <p className="mt-3 text-sm text-muted-foreground">No sales pitch. No obligation.</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-border/60 bg-navy">
        <div className="mx-auto max-w-5xl space-y-3 px-6 py-10 text-xs leading-relaxed text-muted-foreground">
          <p>
            <b className="text-foreground">Earnings Disclaimer:</b> Results may vary and
            testimonials are not claimed to represent every clients results. All testimonials are
            real. These results are meant as a showcase of what the best, most motivated clients
            have done and should not be taken as the outcome for every client. You should assume
            that products, programs or personal recommendations made by Shorecrest Digital
            (11717227 Canada Inc.) may result in compensation paid to me by those I recommend. I
            recommend resources that I use myself, unless it specifically states that I do not use
            that resource. I do recommend many products and services to my clients which I do not
            use myself. If you would rather that I not be compensated for these recommendations, go
            to Google and search for the item and find a non-affiliate link to use. You should
            perform your own due diligence and use your own best judgment prior to making any
            investment decision pertaining to your business. By virtue of visiting this site or
            interacting with any portion of this site, you agree that you're fully responsible for
            the investments you make and any outcomes that may result.
          </p>
          <p>
            This site is not a part of the YouTube, Bing, Google or Facebook website; Google Inc,
            Microsoft INC or Meta Inc. Additionally, this site is NOT endorsed by YouTube, Google,
            Bing or Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. YOUTUBE is a
            trademark of GOOGLE Inc. BING is a trademark of MICROSOFT Inc.
          </p>
        </div>
      </section>
    </main>
  );
}

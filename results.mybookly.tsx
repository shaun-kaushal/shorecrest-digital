import { WistiaVideo } from "@/components/wistia-video";
import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { Check } from "lucide-react";
import danny from "@/assets/danny-khanna.png";

export const Route = createFileRoute("/results/mybookly")({
  head: () =>
    pageHead({
      title: "MyBookly Marketing Case Study | Shorecrest Digital",
      description:
        "How MyBookly Accounting generated a 462.51% ROI in 45 days and 1411.92% in 5 months with a new website and Google SEO strategy from Shorecrest Digital.",
      path: "/results/mybookly",
      ogTitle:
        "MyBookly Case Study: 462.51% ROI in 45 Days | Shorecrest Digital",
      ogDescription:
        "How MyBookly Accounting generated a 462.51% ROI in 45 days and 1411.92% in 5 months with a new website and Google SEO strategy.",
      type: "article",
    }),
  component: MyBooklyCaseStudy,
});

const toc = [
  { id: "challenge", label: "The Challenge" },
  { id: "solution", label: "The Solution" },
  { id: "results", label: "The Results" },
  { id: "conclusion", label: "The Conclusion" },
];

function MyBooklyCaseStudy() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg pt-[152px] pb-14 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <p className="eyebrow">Case Study</p>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Tax Firm Sees{" "}
            <span className="text-gold">462.51% Return On Investment</span> In
            45 Days
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            By focusing on Google and niching down the clients services, we were
            able to go after hyper-specific keywords with high intent that not
            only brought in the types of clients the firm wanted, but it also
            also helped with retention and revenue.
          </p>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border-2 border-gold shadow-2xl shadow-black/50">
            <WistiaVideo id="09frwxmrwx" bare />
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-4xl sm:text-5xl">
            The marketing results for{" "}
            <em className="italic text-gold">MyBookly Accounting</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream-foreground/70">
            <span className="font-semibold text-gold underline">MyBookly</span>{" "}
            is an accounting firm in Oakville, Ontario that serves tech
            startups, ecommerce brands, and crypto businesses.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            They came to us looking for a predictable way to attract clients
            beyond referrals and paid listings. Within forty five days of
            launching their new site and Google strategy, they generated a four
            hundred sixty two point five percent return on investment.
          </p>

          {/* TOC + Quote */}
          <div className="mt-10 grid gap-6 sm:grid-cols-[260px_1fr]">
            <nav className="rounded-lg bg-gold-soft/60 p-5">
              <p className="font-display text-sm font-semibold">
                Table of Contents
              </p>
              <ul className="mt-3 space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-base font-medium text-cream-foreground/80 transition-colors hover:text-cream-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-cream-foreground" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <blockquote className="rounded-lg bg-cream-foreground/5 p-6">
              <p className="text-base italic leading-relaxed text-cream-foreground/80">
                "Working with Shaun has been a great experience. He really knows
                his stuff when it comes to accounting marketing, and his honest,
                straightforward feedback on our sales and marketing process was
                exactly what we needed. He's professional, easy to work with,
                and genuinely invested in helping our accounting firm grow."
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <img
                  src={danny}
                  alt="Danny Khanna"
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <p className="text-xs font-semibold text-cream-foreground/70">
                  Danny Khanna, Managing Director @ MyBookly
                </p>
              </footer>
            </blockquote>
          </div>

          {/* The Challenge */}
          <h3
            id="challenge"
            className="mt-16 scroll-mt-28 text-3xl sm:text-4xl"
          >
            The Challenge
          </h3>
          <p className="mt-5 text-base leading-relaxed text-cream-foreground/70">
            MyBookly faced problems that most growing accounting firms
            experience.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            They relied heavily on referrals and networks. Referrals are great,
            but they slow down as you grow and they are unpredictable. At a
            certain point you need a system that consistently brings in the
            right type of clients.
          </p>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-cream-foreground/70">
            <p>
              <strong className="text-cream-foreground">
                Outdated Website:
              </strong>{" "}
              Their website was outdated and didn't communicate their strengths.
              It didn't reflect their expertise, their niche, or the level of
              service they offered. Even if you are an excellent accountant, a
              weak website leaves prospects unsure about choosing you.
            </p>
            <p>
              <strong className="text-cream-foreground">
                No CRM Software:
              </strong>{" "}
              Their CRM was not being used properly. They had HubSpot, but it
              wasn't connected to the site or their Bark.com account. Because of
              this, they didn't have visibility into where leads come from or
              which marketing efforts were working.
            </p>
            <p>
              <strong className="text-cream-foreground">
                No Marketing Strategy:
              </strong>{" "}
              They had no repeatable marketing engine. Other than referrals and
              paid directories, there was nothing in place that could produce
              steady monthly demand.
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            These challenges limited their ability to grow, scale, and forecast
            revenue.
          </p>

          {/* The Solution */}
          <h3 id="solution" className="mt-14 scroll-mt-28 text-3xl sm:text-4xl">
            The Solution
          </h3>
          <p className="mt-5 text-base leading-relaxed text-cream-foreground/70">
            We started by clarifying MyBookly's ideal clients. They wanted to
            serve crypto traders, tech founders, and small businesses. Knowing
            this allowed us to build a strategy focused on intent driven
            searches rather than broad, expensive terms.
          </p>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-cream-foreground/70">
            <p>
              <strong className="text-cream-foreground">Specialties:</strong>{" "}
              The first step was understanding who MyBookly actually wanted to
              work with. Once the team clarified that their ideal clients were
              tech founders, ecommerce brands, and crypto traders, the entire
              strategy became easier to shape. A firm that knows its niche
              becomes much more visible to the people searching for exactly
              those services.
            </p>
            <p>
              Positioning the firm around these specialties allowed the website
              and content to speak directly to the industries MyBookly serves
              best. Instead of broad, generic messaging, every page was rebuilt
              to match the real questions, problems, and search terms used by
              their ideal clients. This opened the door to ranking for high
              intent keywords that most generalist firms overlook.
            </p>
            <p>
              <strong className="text-cream-foreground">Website Design:</strong>{" "}
              The entire website was then rebuilt to reflect the quality and
              professionalism of the firm. A modern design, clearer messaging,
              and improved structure gave prospects a strong first impression
              and strengthened MyBookly's brand across all channels.
            </p>
            <p>
              <strong className="text-cream-foreground">Google SEO:</strong>{" "}
              Search engine optimization was structured around user behavior
              rather than shortcuts. Easy navigation, helpful content, strong
              internal links, and targeted keywords made the site more relevant
              to the people searching for niche services. Google rewards sites
              that answer real questions, so the focus was on delivering exactly
              what users expect to find.
            </p>
            <p>
              <strong className="text-cream-foreground">CRM Management:</strong>{" "}
              On the backend, the CRM was finally connected and organized. Every
              lead source, form submission, and Bark.com inquiry fed into one
              place. This gave MyBookly full visibility into what was working,
              what was generating revenue, and where to direct their marketing
              budget moving forward.
            </p>
          </div>

          {/* The Results */}
          <h3 id="results" className="mt-14 scroll-mt-28 text-3xl sm:text-4xl">
            The Results
          </h3>
          <p className="mt-5 text-base leading-relaxed text-cream-foreground/70">
            It took roughly 6 months for all the SEO and website improvements to
            gain traction. Once everything clicked, results accelerated quickly.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            Within 45-days of seeing that traction, MyBookly generated a 462.51%
            ROI. The firm saw a surge in inbound leads from Google and began
            attracting the exact type of client they had wanted from the
            beginning.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            Their email inbox began filling with qualified leads who found them
            through their industry pages, niche keywords, and targeted Google
            Ads. These were not low quality or price sensitive leads. They were
            aligned with the services and expertise MyBookly specializes in.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            Within five months, that return grew to 1411.92% — a predictable
            engine that now delivers new client inquiries every single week.
          </p>

          {/* The Conclusion */}
          <h3
            id="conclusion"
            className="mt-14 scroll-mt-28 text-3xl sm:text-4xl"
          >
            The Conclusion
          </h3>
          <p className="mt-5 text-base leading-relaxed text-cream-foreground/70">
            Marketing is not a one time project. Platforms shift, user behavior
            changes, and new technologies influence how people search online.
            What matters is having a strategy that adapts while still delivering
            reliable results.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            When firms like MyBookly work with Shorecrest Digital, the goal is
            always the same: build a marketing system that consistently attracts
            the right clients, strengthens the brand, and increases revenue.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-foreground/70">
            Right now, Google is the strongest channel for accounting firms. In
            the future, that may shift toward AI driven search. Our role is to
            make sure your firm stays ahead of that curve.
          </p>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-lg bg-navy-deep px-8 py-12 text-center text-foreground">
            <h2 className="font-display text-3xl sm:text-4xl">
              Want Us To Build a Strategy for Your Firm?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Click below to book a free strategy call. We will walk you through
              the exact plan your firm can use to attract more clients and
              increase revenue using a predictable, measurable approach.
            </p>
            <Link
              to="/strategy"
              className="btn-gold mt-7 text-xs uppercase tracking-wide"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

import { WistiaVideo } from "@/components/wistia-video";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import ada from "@/assets/ada-zhang.png";

export const Route = createFileRoute("/results/streamline-accounting")({
  head: () => ({
    meta: [
      { title: "Streamline Marketing Case Study | Shorecrest Digital" },
      {
        name: "description",
        content:
          "How Streamline Accounting, a Calgary CPA firm for therapists, grew monthly qualified consultations by 183.33% with focused Google Ads and a rebuilt intake process.",
      },
      {
        property: "og:title",
        content: "Streamline Accounting Case Study: 183.33% More Qualified Consultations — Shorecrest Digital",
      },
      {
        property: "og:description",
        content:
          "How Streamline Accounting, a Calgary CPA firm for therapists, grew monthly qualified consultations by 183.33% with focused Google Ads and a rebuilt intake process.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/results/streamline-accounting" }],
  }),
  component: StreamlineAccountingCaseStudy,
});

const toc = [
  { id: "challenge", label: "The Challenge" },
  { id: "solution", label: "The Solution" },
  { id: "results", label: "The Results" },
  { id: "conclusion", label: "The Conclusion" },
];

function StreamlineAccountingCaseStudy() {
  return (
    <main>
      {/* Hero */}
      <section className="section pb-14 pt-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <p className="eyebrow">Case Study</p>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
            CPA Firm Sees <span className="text-gold">183.33% Increase</span> In Qualified Tax Consultations
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            A closer look at the strategy Shorecrest Digital developed for Streamline Accounting.
          </p>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border-2 border-gold shadow-2xl shadow-black/50">
            <WistiaVideo id="wbffqd0ol3" bare />
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="bg-cream text-cream-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-4xl sm:text-5xl">
            The marketing strategy for <span className="text-gold">Streamline Accounting</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream-foreground/70">
            <span className="font-semibold text-gold underline">Streamline Accounting</span> is a CPA
            firm in Calgary, Alberta that works on non-resident tax returns and small business owners.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream-foreground/70">
            They came to us with a healthy reputation and an inconsistent calendar. Inside the first
            quarter of running a focused paid search program and rebuilding how leads were handled
            after they came in, monthly qualified consultations rose by 183.33%.
          </p>

          {/* TOC + Quote */}
          <div className="mt-10 grid gap-6 sm:grid-cols-[260px_1fr]">
            <nav className="rounded-lg bg-gold-soft/60 p-5">
              <p className="font-display text-sm font-semibold">Table of Contents</p>
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
                "Working with Shorecrest has been a great experience. We'd worked with other SEO
                optimizers before and didn't see results for a long time. With Shorecrest, we started
                seeing real results within just three to four months, and I'd highly recommend them to
                other small business owners."
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <img src={ada} alt="Ada Zhang" className="h-9 w-9 rounded-full object-cover" />
                <p className="text-xs font-semibold text-cream-foreground/70">
                  Ada Zhang, Founder @ Streamline Accounting
                </p>
              </footer>
            </blockquote>
          </div>

          {/* The Challenge */}
          <h3 id="challenge" className="mt-16 scroll-mt-28 text-3xl sm:text-4xl">
            The Challenge
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream-foreground/70">
            Streamline was not struggling for credibility. They were struggling for predictability.
          </p>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-cream-foreground/70">
            <p>
              Almost every new client arrived through a therapist who had referred a colleague. That
              works until it doesn't. Referrals arrive in clusters, go quiet for weeks, and give a
              firm no way to plan hiring or capacity around them.
            </p>
            <p>
              The bigger problem sat underneath that. Because the firm had never marketed itself
              directly, everything it published spoke to small business owners in general.
              Therapists are a specific kind of client with specific problems: incorporating a
              private practice, paying themselves properly, handling GST when they cross the
              threshold, separating clinical supervision costs, catching up on years of unfiled
              returns after a practice grew faster than the bookkeeping did. None of that was
              visible anywhere on the site.
            </p>
            <p>
              The last piece was timing. The handful of enquiries that did come in through the
              contact form often sat for a day or more before anyone replied. Therapists searching
              for an accountant in March are not shopping. They are anxious and they book the first
              firm that answers.
            </p>
            <p>Together, those three things meant the firm had no way to turn demand on when it needed it.</p>
          </div>

          {/* The Solution */}
          <h3 id="solution" className="mt-14 scroll-mt-28 text-3xl sm:text-4xl">
            The Solution
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream-foreground/70">
            We built the program around one idea: be the obvious choice for one profession, and be
            fast.
          </p>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-cream-foreground/70">
            <p>
              <strong className="text-cream-foreground">One audience, said out loud.</strong>{" "}
              Everything got rewritten for therapists specifically. Not "small business accounting"
              with a therapist example buried in a list, but headlines, service pages, and ad copy
              that named the profession and the situations that come with it. Firms that try to
              speak to everyone compete with every other firm. A firm that names a profession stops
              competing with most of them.
            </p>
            <p>
              <strong className="text-cream-foreground">Google Ads built on intent, not volume.</strong>{" "}
              We went after searches that only a private practice owner makes. Terms around
              incorporating a therapy practice, GST registration for counsellors, and accountants
              for psychologists in Calgary. These keywords bring a fraction of the traffic that
              generic accounting terms do, and a much higher share of the people who actually book.
              Broad, expensive terms were excluded from the start rather than tested and cut later.
            </p>
            <p>
              <strong className="text-cream-foreground">A landing page built for one decision.</strong>{" "}
              Traffic went to a dedicated page instead of the homepage. The page answered the
              questions a therapist asks before they will give up their email, showed the reviews of
              other therapists the firm works with, and gave them one action to take. Nothing on the
              page asked them to browse.
            </p>
            <p>
              <strong className="text-cream-foreground">An intake process that actually caught the lead.</strong>{" "}
              This was the part that moved the number most. Every form submission now triggers an
              immediate response and a booking link, with follow up running automatically over the
              following days if the consultation isn't scheduled. Enquiries that used to go cold
              overnight now get an answer in minutes. The same system tracks which keyword produced
              each booking, so budget moves toward what fills the calendar rather than what
              generates clicks.
            </p>
          </div>

          {/* The Results */}
          <h3 id="results" className="mt-14 scroll-mt-28 text-3xl sm:text-4xl">
            The Results
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream-foreground/70">
            Paid search produces feedback quickly, and the first shift showed up within weeks rather
            than months.
          </p>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-cream-foreground/70">
            <p>
              Qualified consultations went from six a month to seventeen, a 183.33% increase. More
              important than the volume was the composition. The people booking were private
              practice owners who already knew they needed a CPA, not general enquiries that took
              three calls to disqualify.
            </p>
            <p>
              Response time dropped from over a day to under five minutes, and a meaningful share of
              the lift came from that change alone. The leads were always worth something. They were
              just going unanswered.
            </p>
            <p>
              Because every booking is tied back to the search that produced it, Streamline now
              knows which services bring in the clients worth having and can spend against that
              instead of guessing. The firm went from waiting on referrals to choosing how many
              consultations it wants in a given month.
            </p>
          </div>

          {/* The Conclusion */}
          <h3 id="conclusion" className="mt-14 scroll-mt-28 text-3xl sm:text-4xl">
            The Conclusion
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream-foreground/70">
            Most accounting firms are one decision away from a marketing system that works, and the
            decision is usually about focus rather than budget.
          </p>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-cream-foreground/70">
            <p>
              Streamline already had the expertise and the reputation. What they lacked was a
              message aimed at one group of people and a process that responded before the prospect
              moved on. Once both were in place, the results followed quickly.
            </p>
            <p>
              Specialization is becoming more valuable, not less. As search shifts toward AI driven
              answers, generic firms get harder to surface and firms known for serving a specific
              profession get easier to recommend. Our job is to make sure your firm is the one that
              gets named.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-lg bg-navy-deep px-8 py-12 text-center text-foreground">
            <h2 className="font-display text-3xl sm:text-4xl">
              Want Us To Build a Strategy for Your Firm?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Book a free strategy call to walk through a focused plan for attracting the right
              clients and growing your firm.
            </p>
            <Link to="/strategy" className="btn-gold mt-7 text-xs uppercase tracking-wide">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

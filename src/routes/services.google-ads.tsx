import { createFileRoute } from "@tanstack/react-router";
import { faqJsonLd, pageHead } from "@/lib/seo";
import {
  ProblemSection,
  ServicePage,
  SolutionSection,
} from "@/components/service-page";

const problems = [
  {
    title: "Everyone Bids On The Same Broad Keywords",
    body: "Most firms go after broad keywords like “small business accountant near me,” “corporate tax services” or “personal tax return.” They get a lot of searches, but every other firm in your city is bidding on them too.",
  },
  {
    title: "Higher Cost Per Click, More Competition",
    body: "More firms bidding on the same keyword pushes the cost per click up. And the person searching has a long list of accountants to choose from, so they’re likely reaching out to several of them at once.",
  },
  {
    title: "You End Up Competing On Price",
    body: "When every ad targets the same search with the same message, the only thing left to compare is price. You’re no longer the obvious choice, you’re one quote out of many.",
  },
];

const solutions = [
  {
    title: "A Compelling Offer, Not Another Free Consultation",
    body: "A free consultation is what every firm offers, so it’s no longer unique. We build an offer around your ideal client’s biggest hesitation, like a flat published fee, a fast quote or help switching from their old accountant, so your ad gives them a reason to pick you.",
    examples: [
      "Flat, published fees",
      "Quote within 48 hours",
      "We handle the switch",
    ],
  },
  {
    title: "Niche Keywords Nobody Else Is Bidding On",
    body: "We go after the searches your competitors ignore: specific IRS and CRA forms and tax codes, and niche verticals most accountants don’t target. People are searching for them every day, and when your ad is the only one there, you get the click without the bidding war.",
    examples: [
      "IRS Form 5472 filing",
      "CRA T1135 foreign property",
      "Crypto tax accountant",
    ],
  },
];

const faqs: [string, string][] = [
  [
    "How much should my firm spend on Google Ads?",
    "It depends on your market, the services you want to grow and how many new clients you can take on. We’d rather start with a budget you can keep up for at least 90 days than spend big for one month. On the strategy call, we’ll show you what clicks actually cost for the keywords that matter to your firm.",
  ],
  [
    "How fast will I see results?",
    "Google Ads is the fastest channel we work with. Ads can start bringing in leads within days of launching. The first few weeks are about learning which keywords and offers bring in the right clients, so give it 60 to 90 days before judging the results.",
  ],
  [
    "I’ve tried Google Ads before and it didn’t work. What’s different?",
    "Most failed campaigns we audit have the same three problems: broad keywords, a generic free consultation offer and slow follow-up. We change all three. Niche keywords, an offer worth choosing and leads contacted within minutes, not days.",
  ],
  [
    "Won’t I just get price shoppers?",
    "Broad keywords attract price shoppers. Niche keywords attract people with a specific problem who are looking for someone who understands it. We also use qualifying questions on your landing page so the wrong fits are filtered out before they reach your calendar.",
  ],
  [
    "Do I need a new website?",
    "No. We build dedicated landing pages for the services you want to grow. They convert better than sending ad clicks to your homepage, and your existing website stays as it is.",
  ],
  [
    "Who owns the Google Ads account?",
    "You do. The ad account, the data and every lead belong to your firm. If we ever stop working together, everything stays with you.",
  ],
  [
    "Should I run Google Ads or invest in SEO?",
    "Google Ads brings in leads fastest. SEO takes longer to build but keeps working without paying per click. Many firms start with Google Ads to bring in clients now while SEO builds in the background.",
  ],
];

export const Route = createFileRoute("/services/google-ads")({
  head: () =>
    pageHead({
      title: "Google Ads for Accounting Firms | Shorecrest Digital",
      description:
        "Google Search, Local Service Ads and Google Business Profile campaigns for tax, CPA and accounting firms that bring in pre-qualified clients.",
      path: "/services/google-ads",
      jsonLd: faqJsonLd(faqs),
    }),
  component: GoogleAdsPage,
});

function GoogleAdsPage() {
  return (
    <ServicePage
      eyebrow="Google Ads For Accounting Firms"
      title="Google Ads That Bring In Pre-Qualified Tax & Accounting Clients"
      lede="We build and manage Google Search, Local Service Ads and Google Business Profile campaigns for Enrolled Agents, tax firms, CPA firms and accounting firms across the US and Canada. You show up when business owners search for help with the IRS, the CRA, corporate tax or bookkeeping, not when price shoppers do."
      badges={[
        "Google Search Ads",
        "Local Service Ads",
        "Google Business Profile",
      ]}
      ctaTitle="See What Google Ads Could Do For Your Firm"
      ctaText="Book a free strategy call. We'll look at what your ideal clients search for in your market and show you what a campaign would look like for your firm."
      after={<Faq />}
    >
      <ProblemSection
        title="The Fastest Way To Get Leads Is Also The Easiest To Waste Money On"
        intro="Google Ads is the fastest way for an accounting firm to generate leads. It’s faster than Facebook Ads, and much faster than SEO, especially if you’re doing it on your own. But the barrier to entry is low, so most firms end up in the same place."
        items={problems}
        callout="And it’s only getting worse. Google Ads keeps getting more expensive every year, so firms stuck in this cycle pay more each year for the same price shoppers."
      />
      <SolutionSection
        title={
          <>
            How We <span className="text-gold">Fix It</span>
          </>
        }
        intro="We don’t try to outbid every firm in your city. We change what you offer and what you bid on."
        items={solutions}
      />
    </ServicePage>
  );
}

function Faq() {
  return (
    <section className="section bg-navy-deep">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl leading-snug sm:text-4xl">
          Google Ads <span className="text-gold">FAQs</span>
        </h2>
        <div className="mt-11 border-t border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-bold [&::-webkit-details-marker]:hidden">
                {q}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pr-11 pb-5 text-base leading-relaxed text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

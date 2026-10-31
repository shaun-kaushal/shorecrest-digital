import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  ProblemSection,
  ServicePage,
  SolutionSection,
  type ProblemItem,
  type SolutionItem,
} from "@/components/service-page";

const problems: ProblemItem[] = [
  {
    title: "They’re Not Looking For An Accountant Yet",
    body: "Someone scrolling Facebook or Instagram isn’t thinking about taxes. They may know they have a problem, but they haven’t gone looking for a solution, so a generic “book a free consultation” ad gets scrolled right past.",
  },
  {
    title: "Facebook Is Known For Low-Quality Leads",
    body: "Getting a lot of leads on Facebook is easy. Getting good ones isn’t. Without the right offer and screening, you end up with fake numbers, people who don’t remember filling out the form, and price shoppers.",
  },
  {
    title: "No Urgency Means No Action",
    body: "Even interested prospects put it off. Without a reason to act now, they’ll glance at your ad, tell themselves they’ll deal with it another day, and never come back.",
  },
];

const solutions: SolutionItem[] = [
  {
    label: "High urgency",
    title: "Lean Into The Urgency With A Direct Offer",
    body: "Problems like backfile taxes and tax resolution are already urgent. The client knows they have a problem, they just haven’t made the time to deal with it. So we skip the education. The ad names their problem, speaks to the anxiety they already feel, and shows exactly how your firm solves it.",
    examples: ["Backfile taxes", "Tax resolution", "IRS & CRA notices"],
    path: "A direct-response ad leads to an instant form or landing page with a clear, direct offer.",
  },
  {
    label: "Low urgency",
    title: "Close The Education Gap And Create Urgency",
    body: "Services like cross-border tax, tax planning and corporate tax returns need more education before someone buys. We build trust with video, then show the cost of waiting, like overpaying capital gains or income tax to the IRS or CRA every year they put it off, so there’s a reason to act today.",
    examples: ["Cross-border tax", "Tax planning", "Corporate tax returns"],
    path: "A video ad leads to a video sales letter or webinar, then a consultation.",
  },
];

export const Route = createFileRoute("/services/facebook-ads")({
  head: () =>
    pageHead({
      title: "Facebook Ads for Accounting Firms | Shorecrest Digital",
      description:
        "Facebook and Instagram ads that reach business owners before they start shopping for an accountant, with every lead screened before it reaches you.",
      path: "/services/facebook-ads",
    }),
  component: FacebookAdsPage,
});

function FacebookAdsPage() {
  return (
    <ServicePage
      eyebrow="Facebook & Instagram Ads For Accounting Firms"
      title="Reach Business Owners Before They Start Shopping For An Accountant"
      lede="Most business owners don't search for a new accountant until something goes wrong with the IRS or the CRA. We put your firm in front of them on Facebook and Instagram first, with offers built around the clients you want and every lead screened before it reaches your calendar."
      badges={["Facebook & Instagram Ads", "Lead Screening", "Fast Follow-Up"]}
      ctaTitle="See What Facebook Ads Could Do For Your Firm"
      ctaText="Book a free strategy call. We'll map out who your ideal clients are, what offer would get their attention, and how we'd screen leads before they reach you."
    >
      <ProblemSection
        title="Facebook Reaches Buyers Google Can’t. That’s Also Why Most Firms Get Junk Leads."
        intro="Google Ads and SEO capture people who are already in market, searching for an accountant right now. Facebook reaches a much bigger group: business owners who know they have a problem but haven’t started looking for a solution. That’s a huge opportunity, but it’s easy to get wrong."
        items={problems}
        callout="The firms that win on Facebook describe the prospect’s problem better than the prospect can describe it themselves. Do that, and they want to hear your solution."
      />
      <SolutionSection
        title={
          <>
            How We <span className="text-gold">Fix It</span>: Match The Ad To
            The Urgency
          </>
        }
        intro="We sort your tax services by how urgent the problem feels to the client, then build the ad, the offer and the landing page to match. Urgency matters either way. Without it, people wait."
        items={solutions}
      />
    </ServicePage>
  );
}

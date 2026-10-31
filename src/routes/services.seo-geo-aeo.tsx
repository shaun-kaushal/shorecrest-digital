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
    title: "It Takes Time To Build",
    body: "SEO and AEO take longer to show results than advertising, depending on the services you want to grow. That’s why newer firms usually start with ads. But for established, scaling firms, search brings better margins and a steadier flow of leads that doesn’t stop when the ad spend does.",
  },
  {
    title: "The Algorithm Keeps Changing",
    body: "You can rank number one one day and be on page two the next. Google keeps rewarding websites that give visitors a better experience, so a site built once and left alone slowly slips down the results.",
  },
  {
    title: "AI Search Rewards Authority",
    body: "ChatGPT and other AI tools answer the question directly, so many people never visit a website at all. They recommend the firms with the strongest authority: quality content, backlinks and a clear specialty. If that’s not you, you’re left off the list.",
  },
];

const solutions: SolutionItem[] = [
  {
    title: "Build A Moat Around Your Firm’s Specialty",
    body: "Going broad puts you up against every firm in your city. We position your firm and partners as the experts in a specific pain point, industry, demographic or type of client, then build your website around it, so you become the obvious answer for that search.",
    examples: [
      "Tax resolution for contractors",
      "Cross-border tax",
      "Crypto tax",
    ],
  },
  {
    title: "Write For Your Future Clients, Not About Your Firm",
    body: "Your website isn’t about you. It’s about the clients you want. We rewrite your pages to lead with their problems and how you solve them. Once they know you can help, then they’ll care about your story and your credentials.",
    examples: ["Their problems first", "How you help", "Credentials second"],
  },
  {
    title: "Build Authority Google And AI Trust",
    body: "We build the authority that both Google and AI tools look for: backlinks, strong service and content pages, internal links that tie everything together, and video that builds trust before anyone picks up the phone.",
    examples: [
      "Backlinks",
      "Service & content pages",
      "Internal linking",
      "Video",
    ],
  },
  {
    title: "Give Visitors A Softer Next Step",
    body: "Not everyone is ready to book a consultation. We add lower-commitment calls to action that give visitors value first, then nurture them until they’re ready. For a tax resolution firm, that could be a calculator showing how much they might be overpaying.",
    examples: ["Tax calculator", "Email newsletter", "Free tools"],
  },
];

export const Route = createFileRoute("/services/seo-geo-aeo")({
  head: () =>
    pageHead({
      title: "SEO, GEO & AEO for Accounting Firms | Shorecrest Digital",
      description:
        "Get found on Google and recommended by ChatGPT, Gemini and other AI search tools. SEO, GEO and AEO for tax, CPA and accounting firms.",
      path: "/services/seo-geo-aeo",
    }),
  component: SeoGeoAeoPage,
});

function SeoGeoAeoPage() {
  return (
    <ServicePage
      eyebrow="SEO, GEO & AEO For Accounting Firms"
      title="Get Found On Google And Recommended By AI Search"
      lede={
        "Your next client might ask Google, ChatGPT or Gemini which accountant to call. We help Enrolled Agents, tax firms, CPA firms and accounting firms across the US and Canada rank in search (SEO), get cited by AI tools (GEO), and show up as the direct answer to their questions (AEO)."
      }
      badges={["SEO: Google Search", "GEO: AI Search", "AEO: Answer Engines"]}
      ctaTitle="See Where Your Firm Shows Up Today"
      ctaText={
        "Book a free strategy call. We'll check how your firm appears on Google and in AI search for the services you want to grow, and show you where the gaps are."
      }
    >
      <ProblemSection
        title="Bigger Clients Do Their Own Research. Is Your Firm On Their Shortlist?"
        intro="Larger businesses may respond to ads, but they’re far more likely to do their own due diligence. Their buying journey isn’t a straight line. They search Google, ask ChatGPT for the top accountants who can solve their problem, and compare their options before they ever reach out. SEO and AEO put you in that research, and they work best alongside your advertising."
        items={problems}
        callout="If your firm doesn’t show up when a business owner asks Google or ChatGPT who to call, you’re not on the shortlist, no matter how good your work is."
      />
      <SolutionSection
        title={
          <>
            How We <span className="text-gold">Fix It</span>: Build A Moat
            Around Your Firm
          </>
        }
        intro="We don’t chase every keyword. We make your firm the clear expert in what you do best, then build the content, authority and next steps that turn searchers into clients."
        items={solutions}
      />
    </ServicePage>
  );
}

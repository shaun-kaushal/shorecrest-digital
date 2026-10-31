import corporateTax from "@/assets/blog/corporate-tax-clients.webp";
import firmAgency from "@/assets/blog/firm-marketing-agency.webp";
import sellTax from "@/assets/blog/sell-tax-services.webp";
import sellBookkeeping from "@/assets/blog/sell-bookkeeping-services.webp";
import phoneCalls from "@/assets/blog/generate-firm-phone-calls.webp";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "olist"; items: [string, string][] }
  | { type: "checklist"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "dials" }
  | { type: "faq"; items: [string, string][] }
  | { type: "cta"; title: string; text: string; label: string; to: string };

/** Marketing topics used to tag and filter articles on the blog page. */
export const BLOG_TAGS = [
  "SEO/AEO",
  "Google Ads",
  "Facebook Ads",
  "Website",
  "Conversions",
  "Positioning",
  "Strategy",
] as const;
export type BlogTag = (typeof BLOG_TAGS)[number];

export interface BlogPost {
  slug: string;
  tag: BlogTag;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** Optional search-result title and description; fall back to title/excerpt. */
  metaTitle?: string;
  metaDescription?: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "accounting-firm-client-acquisition-funnel",
    tag: "Conversions",
    title: "Your Firm Doesn't Need More Leads. It Needs a Bottleneck Analysis.",
    date: "October 30, 2026",
    excerpt:
      "Most accounting firms don't have a lead problem. They have a leak. Here's how to measure each stage of your funnel and fix the weakest one.",
    metaTitle: "Accounting Firm Bottleneck Analysis: Find Your Funnel Leak",
    metaDescription:
      "Most accounting firms don't have a lead problem. They have a leak. Here's how to measure each stage of your client acquisition funnel and fix the weakest one.",
    image: "/blog-accounting-firm-client-acquisition-funnel.webp",
    imageAlt: "Accounting firm bottleneck analysis: find your funnel leak",
    content: [
      {
        type: "p",
        text: 'When I get on a call with a managing partner, the first thing I usually hear is "we need more leads." And I get it. But from my experience working with accounting firms, most of them don\'t have a lead problem. They have a leaky bucket.',
      },
      {
        type: "p",
        text: 'The backbone of any marketing strategy is the acquisition process. So before we spend another dollar on Google Ads or SEO, we want to quantify every stage between "someone filled out a form" and "signed engagement letter." That\'s what a bottleneck analysis is. It tells you exactly where clients are falling through the cracks, so you know where to focus your time and your budget.',
      },
      { type: "h2", text: "Leads to clients doesn't paint the full picture" },
      {
        type: "p",
        text: "When I ask a firm how their marketing is going, I usually get two numbers. How many leads came in, and how many became clients.",
      },
      {
        type: "p",
        text: "Now, that ratio tells you something is off. But it doesn't tell you where. A 10% lead-to-client rate could mean your ads are attracting the wrong people. It could mean nobody's calling leads back fast enough. It could mean people book and don't show up, or your consultations just aren't closing. Each of those has a completely different fix, right?",
      },
      {
        type: "p",
        text: "And so what I see time and time again is firms default to the most expensive fix: more leads. More ad spend, more SEO, a new agency. But if the leak is in the middle of your funnel, pouring more leads in at the top simply means more leads fall out the bottom.",
      },
      { type: "h2", text: "The 5 stages of your client acquisition process" },
      {
        type: "p",
        text: "Every firm's process looks a little different, but most follow the same path. What we want to do is track the count at each stage, and the conversion rate from one stage to the next.",
      },
      {
        type: "olist",
        items: [
          [
            "Leads generated.",
            "Anyone who submits a form, calls, or books online.",
          ],
          [
            "Leads connected.",
            "You actually had a live conversation with them. Not a voicemail, not an email that never got a reply.",
          ],
          [
            "Consultations booked.",
            "They agreed to a proper meeting with a partner or manager.",
          ],
          ["Consultations attended.", "They showed up."],
          [
            "Clients signed.",
            "Engagement letter signed, or first invoice paid.",
          ],
        ],
      },
      {
        type: "p",
        text: "The stage with the lowest conversion rate is your bottleneck. That's where your next dollar and your next hour should go.",
      },
      {
        type: "p",
        text: "And you don't need fancy software to start. A simple spreadsheet with the last 90 days of leads and a column for each stage is enough. If your CRM already tracks pipeline stages, even better.",
      },
      { type: "h2", text: "Example: 400 leads, 40 clients" },
      {
        type: "p",
        text: "I recently met with a Toronto firm that had generated roughly 400 leads so far this year and signed around 40 of them. So about a 10% conversion rate. Not terrible, not great, and no clear direction on what to fix.",
      },
      {
        type: "p",
        text: "Now let's break that same year into stages. These stage numbers are just to give you an idea, but this is a pattern I see with firm after firm.",
      },
      {
        type: "table",
        head: ["Stage", "Count", "Conversion from previous stage"],
        rows: [
          ["Leads generated", "400", ""],
          ["Leads connected", "150", "38%"],
          ["Consultations booked", "90", "60%"],
          ["Consultations attended", "72", "80%"],
          ["Clients signed", "40", "56%"],
        ],
      },
      {
        type: "p",
        text: "The bottleneck jumps out right away. Booking, attendance and closing all look healthy. But 250 out of 400 leads never had a real conversation with anyone at the firm.",
      },
      { type: "p", text: "So let's compare two options." },
      {
        type: "p",
        text: "Option A: double the leads. 800 leads at the same rates gets you around 80 clients. But it also roughly doubles your ad spend or content budget.",
      },
      {
        type: "p",
        text: "Option B: fix the connect rate. Let's say we raise it from 38% to 60% and keep everything else the same. Now 400 leads becomes 240 conversations, 144 bookings, around 115 meetings attended and roughly 64 clients.",
      },
      {
        type: "p",
        text: "That's 24 more clients a year from leads you already paid for. And once the bucket stops leaking, Option A becomes a lot more profitable.",
      },
      { type: "h2", text: "How to fix a low connect rate" },
      {
        type: "p",
        text: "From my experience, leads to connected is the biggest bottleneck for most accounting firms. And nine times out of ten, it's not a marketing problem. It's a process problem. Here are four ways we can improve it.",
      },
      {
        type: "p",
        text: "Number one, filter out low-quality leads. If your lead form only asks for first name, last name, email and phone number, it doesn't pre-qualify anyone. So a very simple example: if you only want to work with businesses doing $100,000+ a year, because you know they can afford your services, ask that in the form. I would turn your lead form into a short survey, and use conditional logic to route anyone below that number somewhere else. You'll get fewer leads, but your team spends its time on people who can actually hire you.",
      },
      {
        type: "p",
        text: "Number two, call within minutes, not hours. This one has made the biggest difference with my clients. A Harvard Business Review study found that firms who contacted a lead within an hour were nearly 7 times more likely to qualify that lead than firms that waited even an hour longer. And the reason being is, in a world full of distractions, someone fills out your form while scrolling Instagram or searching on Google. If you call them right away, they're far more likely to pick up. And if they're reaching out to other accountants too, they tend to go with the first one who actually connects with them. You skip the whole bidding war.",
      },
      {
        type: "p",
        text: "Number three, give one person the job. In a lot of firms, a new lead gets manually assigned to whichever partner has capacity, and that partner follows up when they can. That's how leads sit for two days. One of my clients hired a client coordinator whose only job is to call new leads fast and book them with the right partner. Partners stopped chasing leads and went back to doing consultations.",
      },
      {
        type: "p",
        text: "Number four, follow up more than once. Calling a lead once and leaving a voicemail simply isn't enough. You have to balance not pestering them with being persistent and proactive. So build a short follow-up process: a call and a text right away, then a few more touches over the next week by phone, text and email. Most of the leads you think went cold just never picked up the first time.",
      },
      { type: "h2", text: "Fixes for the other stages" },
      {
        type: "p",
        text: "Now, your bottleneck might be somewhere else. Here's where I'd look first at each stage.",
      },
      {
        type: "table",
        head: ["Weak stage", "Likely cause", "First fix to try"],
        rows: [
          [
            "Leads generated",
            "Broad keywords and generic messaging attract price shoppers",
            "Target narrower, high-intent searches and speak to one client type's actual problem",
          ],
          [
            "Connected to booked",
            "The first call feels like a sales pitch",
            "Lead with their situation, then offer a short meeting as the obvious next step",
          ],
          [
            "Booked to attended",
            "Too much time between booking and the meeting",
            "Book within 48 hours, send reminders, and send a short intro video from the accountant they'll meet",
          ],
          [
            "Attended to signed",
            "Unclear pricing, scope or next steps",
            "Show fees and a simple engagement plan in the meeting, then follow up the same day",
          ],
        ],
      },
      {
        type: "p",
        text: "The goal isn't to fix everything at once. Fix the weakest stage, measure again in 60 to 90 days, then move on to the next one.",
      },
      { type: "h2", text: "Track revenue by channel, not just leads" },
      {
        type: "p",
        text: "At the end of the day, leads are a vanity metric. What you really want to know is which channel is bringing in revenue.",
      },
      {
        type: "p",
        text: "Let's say Google shows 10 leads and all 10 closed. Facebook drove 50 leads, but only 2 closed. If you only look at lead volume, Facebook looks like the winner. Look at revenue and it isn't even close. But you won't know that until your leads are tagged and segmented properly.",
      },
      {
        type: "p",
        text: "There are two ways to track where your leads are coming from:",
      },
      {
        type: "list",
        items: [
          'Self-reported attribution. As simple as adding "How did you hear about us?" to your lead form. Letting the person tell you where they found you is a great way to get a general idea.',
          "Data attribution. Tag every marketing channel so your CRM pulls that data in automatically. Then you can see which channel drove the most revenue, not just the most leads.",
        ],
      },
      {
        type: "p",
        text: "I recommend using both. And here's why. Accounting is a high-trust vertical. People are sharing their personal finances with you. So no matter where someone first hears about your firm, a podcast, a LinkedIn post, a referral, they're probably going to Google you or ask ChatGPT before they reach out. Your analytics then gives Google all the credit, and you end up underinvesting in the channel that actually did the work.",
      },
      { type: "h2", text: "What I'd do this week" },
      {
        type: "checklist",
        items: [
          "Pull the last 90 days of leads from your CRM or inbox",
          "Mark each one: connected, booked, attended, signed",
          "Calculate the conversion rate between each stage",
          "Circle the lowest one. That's your bottleneck",
          "Pick one fix for that stage and give it 60 days before you judge it",
        ],
      },
      {
        type: "p",
        text: "And if you can't fill in those columns because nobody tracked whether a lead was ever reached, that's your first finding right there.",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          [
            "What is a bottleneck analysis for an accounting firm?",
            "It's breaking your client acquisition process into stages (lead, connected, booked, attended, signed) and putting a conversion rate on each one. The stage with the weakest rate is your bottleneck, and it's usually the cheapest place to win more clients.",
          ],
          [
            "What's a good lead-to-client conversion rate for an accounting firm?",
            "It depends a lot on the service and where the lead came from. Referrals close much higher than cold paid leads. So instead of chasing an industry average, compare your own stages against each other and track the trend over time.",
          ],
          [
            "How fast should an accounting firm respond to a new lead?",
            "As fast as possible, ideally within minutes. Research published in Harvard Business Review found firms that responded within an hour were nearly 7 times more likely to qualify the lead than firms that waited longer.",
          ],
          [
            "Should I spend more on ads if my firm isn't getting enough clients?",
            "Not until you know where your funnel is leaking. If most of your leads never get a real conversation, more ad spend just means more wasted leads.",
          ],
          [
            "How do I know which marketing channel is bringing in clients?",
            "Ask every lead how they heard about you, and tag your campaigns so your CRM records the source. Then look at signed clients and revenue by channel, not just lead volume.",
          ],
        ],
      },
      {
        type: "cta",
        title: "Want me to take a look at your numbers?",
        text: "I don't just look at leads. I look at the full acquisition process, because that's where the revenue is. Send me your last 90 days of lead data and I'll map out your five stages and show you where clients are slipping through the cracks. And if your funnel is already in great shape, I'll tell you that too.",
        label: "Book a call",
        to: "/strategy",
      },
    ],
  },
  {
    slug: "sell-corporate-tax-services",
    tag: "Positioning",
    title: "Selling Corporate Tax? Fix Your Offer Before Your Marketing",
    date: "October 16, 2026",
    excerpt:
      "Corporate tax is a commodity, so ads and SEO alone won't make you stand out. Here's how to position and build an offer that wins clients.",
    metaTitle: "How to Sell More Corporate Tax Clients: Offer First",
    metaDescription:
      "Corporate tax is a commodity, so ads and SEO alone won't make you stand out. Here's how accounting firms can position and build an offer that wins clients.",
    image: "/blog-sell-corporate-tax-services.webp",
    imageAlt: "Selling corporate tax: fix your offer before your marketing",
    content: [
      {
        type: "p",
        text: "So you want more corporate tax clients. Most firms jump straight to the channel. Should we run Google Ads? Should we do SEO, LinkedIn, Facebook?",
      },
      {
        type: "p",
        text: "But the reality is, before we decide how to sell corporate tax, we need to decide two things first: our positioning and our offer. Corporate tax is one of the most commoditized services an accounting firm sells. And the more commoditized a service is, the more compelling your offer needs to be. If you skip that step, it doesn't matter which channel you pick.",
      },
      { type: "h2", text: "Why corporate tax is a commodity" },
      {
        type: "p",
        text: "From the business owner's point of view, a corporate tax return (a T2 in Canada, a Form 1120 or 1120-S in the US) looks the same no matter who files it. It's due once a year, it needs to be accurate, and at the end of the day the result is a filed return.",
      },
      {
        type: "p",
        text: "Now, you know the difference between a careful preparer and a careless one. Your prospect usually doesn't. So when they compare three firms, they compare the only things they can actually see: price, how fast you get back to them, and how easy you seem to work with.",
      },
      {
        type: "p",
        text: "That's what commoditized means. It doesn't mean the work is easy. It means the buyer can't tell the providers apart. And when they can't tell you apart, they go with the cheapest option, or the first firm that calls them back.",
      },
      {
        type: "p",
        text: 'When I\'ve audited Google Ads accounts, I\'ve seen this time and time again. Every firm is bidding on the same broad keywords, "corporate tax accountant," "small business accountant," and every ad says the same thing: book a free consultation. The cost per click keeps going up, and the only people clicking are price shoppers.',
      },
      {
        type: "h2",
        text: "The two dials: how commoditized is your service, and how aggressive is your offer?",
      },
      { type: "p", text: "The way I like to explain it is with two sliders." },
      { type: "dials" },
      {
        type: "p",
        text: "The further left your service sits on the first slider, the further left your offer needs to sit on the second.",
      },
      {
        type: "p",
        text: "Let's say you're one of a handful of firms that handles cross-border tax for US citizens living in Canada. \"Book a free consultation\" is enough. The prospect doesn't have many options, and they're already motivated to find you. That's a differentiated service, so a conservative offer works.",
      },
      {
        type: "p",
        text: "Now compare that to corporate tax. A business owner can find 200 firms in their city that file corporate returns. \"Book a free consultation\" gives them no reason to choose you, because everyone's offering that. So your offer has to do the differentiating that your service can't.",
      },
      {
        type: "table",
        head: ["", "Conservative offer", "Aggressive offer"],
        rows: [
          [
            "Differentiated service",
            "Works. A consultation is enough",
            "Usually leaves money on the table",
          ],
          [
            "Commoditized service",
            "Struggles. You blend in with every other firm",
            "Works. The offer gives them a reason to pick you",
          ],
        ],
      },
      {
        type: "p",
        text: "Most firms selling corporate tax are sitting in the bottom-left box. And that's the box where marketing feels expensive and nothing seems to work.",
      },
      { type: "h2", text: "Step 1: Positioning comes before the offer" },
      {
        type: "p",
        text: "There are two ways out of that bottom-left box. You can make your offer more aggressive, or you can make your service less commoditized. The second one is cheaper, so that's where I'd start.",
      },
      {
        type: "p",
        text: 'The days of being a general accountant are over. Positioning simply means choosing who your corporate tax service is for. "Corporate tax for small businesses" is a commodity. "Corporate tax for incorporated dentists" or "corporate tax for construction contractors" isn\'t, at least not to a dentist or a contractor.',
      },
      {
        type: "p",
        text: "I have a client who focuses on crypto investors and day traders. We tested a few angles, found there was a huge market opportunity there, and he went all in on it. Not many firms knew how to serve that client, so he wasn't competing with every accountant in town anymore.",
      },
      { type: "p", text: "A niche does three things for you:" },
      {
        type: "list",
        items: [
          "It changes who you're competing with. Instead of every firm in your city, you're competing with the few that actually speak that industry's language.",
          'It makes your messaging a lot sharper. People don\'t care who you are until they know you can help them. A niche lets you talk about their specific problems, like holding company structures or subcontractor payments, instead of generic "tax services."',
          'It makes your ads cheaper. Niche keywords usually have a lower cost per click and much higher intent than broad ones like "corporate tax accountant."',
        ],
      },
      {
        type: "p",
        text: "And you don't have to turn everyone else away. You just lead with one audience in your marketing.",
      },
      { type: "h2", text: "Step 2: Build an offer worth choosing" },
      {
        type: "p",
        text: "A compelling offer removes the reasons a business owner would hesitate or keep shopping around. For corporate tax, those reasons are almost always the same. They don't know what it's going to cost. They're worried switching accountants will be a hassle. And they're not sure you'll be any better than who they have now.",
      },
      {
        type: "p",
        text: 'Here\'s a real example. One of my bookkeeping clients was getting lost in the sea of "free consultation" offers. So we ran an offer of two months of free bookkeeping when the client committed to eight months. That one change helped separate him from every other firm in his market.',
      },
      {
        type: "p",
        text: "Here are the levers I see work, from most conservative to most aggressive:",
      },
      {
        type: "table",
        head: ["Lever", "What it solves", "Example"],
        rows: [
          [
            "Flat, published fee",
            "Fear of an open-ended bill",
            '"One flat fee for your corporate return, quoted before we start"',
          ],
          [
            "Speed promise",
            "Fear of being ignored",
            '"Your quote within 48 hours of sending us your books"',
          ],
          [
            "Done-for-you switching",
            "Hassle of changing accountants",
            '"We request your files from your previous accountant"',
          ],
          [
            "Bundled value",
            "Feeling of paying for a form",
            "Year-end planning meeting included with every return",
          ],
          [
            "Reduced first year",
            "Risk of trying someone new",
            "Discounted first return when they sign on for monthly bookkeeping",
          ],
          [
            "Free add-on",
            "No reason to pick you over others",
            "Prior-year bookkeeping catch-up included with an annual engagement",
          ],
        ],
      },
      {
        type: "p",
        text: "You don't need all six. Pick the one or two that answer your ideal client's biggest hesitation, and make that the headline of every ad, landing page and sales call.",
      },
      {
        type: "p",
        text: "And you'll notice the more aggressive options all pair the return with something recurring. That's on purpose. The corporate return gets your foot in the door. Monthly bookkeeping, payroll or advisory is where the relationship actually pays you back.",
      },
      { type: "h2", text: "Example: is an aggressive offer worth it?" },
      {
        type: "p",
        text: "A lot of partners worry that a discount or a free add-on means giving work away. So let's actually run the numbers on one client. These are just round numbers to give you an idea, not market rates.",
      },
      {
        type: "p",
        text: "Let's say your corporate return fee is $2,500, and monthly bookkeeping is $400.",
      },
      {
        type: "p",
        text: 'Conservative offer: "Book a free consultation." A client who signs pays $2,500 for the return. And a lot of these clients only ever buy the return.',
      },
      {
        type: "p",
        text: 'Aggressive offer: "First year\'s corporate return at $1,500 when you start monthly bookkeeping."',
      },
      {
        type: "table",
        head: ["", "Conservative", "Aggressive"],
        rows: [
          ["Year 1 return fee", "$2,500", "$1,500"],
          ["Year 1 bookkeeping", "$0", "$4,800"],
          ["Year 1 total", "$2,500", "$6,300"],
          ["Year 2 total", "$2,500", "$7,300"],
        ],
      },
      {
        type: "p",
        text: "So you gave up $1,000 on the first return, and gained a client worth almost three times as much in year one. The real question isn't whether you can afford the discount. It's whether you have the capacity to deliver the bookkeeping well.",
      },
      { type: "h2", text: "Step 3: Match the offer to the channel" },
      {
        type: "p",
        text: "Now, once your positioning and offer are locked in, the channel decides how much work your offer has to do.",
      },
      {
        type: "table",
        head: ["Channel", "How buyers arrive", "What the offer needs to do"],
        rows: [
          [
            "Google Ads",
            "Actively searching, comparing several firms",
            "Win the comparison. Lead with your niche and your strongest lever in the headline",
          ],
          [
            "SEO and AI search",
            "Researching, often not ready to hire",
            "Prove expertise for your niche. Use a soft next step like a checklist or calculator alongside the consultation",
          ],
          [
            "Facebook and Instagram",
            "Not looking for an accountant right now",
            "Interrupt with a specific problem, then make saying yes feel low-risk. This is where aggressive offers matter most",
          ],
          [
            "LinkedIn",
            "Owners and finance leads, longer decision cycles",
            "Lean on positioning and content. Offers can be more conservative here",
          ],
        ],
      },
      {
        type: "p",
        text: "The biggest mistake I see is running the same \"book a consultation\" message everywhere. On Google, it's competing with ten other ads that say the exact same thing. On Facebook, you're asking someone who wasn't even thinking about taxes to book a meeting. Neither one works well.",
      },
      {
        type: "p",
        text: "Google Ads still works, by the way. But the playbook has changed. You have to be very particular about the keywords you go after, and your offer has to stand out in the ad itself.",
      },
      { type: "h2", text: "Where aggressive offers go wrong" },
      {
        type: "p",
        text: "Now, of course, aggressive doesn't mean reckless. A few guardrails I'd keep in mind:",
      },
      {
        type: "list",
        items: [
          "Don't compete on price alone. \"Cheapest corporate returns in town\" attracts the clients who'll leave the second someone undercuts you. Tie any discount to a longer relationship.",
          "Never promise tax outcomes. Give certainty on price, speed and process. Never on how much tax someone will save or what the CRA or IRS will do.",
          "Check your advertising rules. CPA bodies in Canada and state boards of accountancy in the US have rules around advertising, testimonials and fee claims. Run your offer by them before it goes live.",
          "Know your capacity. An offer that works can bring in more clients than your team can handle well during tax season. Set a cap if you need to.",
          "Be upfront about the fine print. If the first-year rate depends on a 12-month bookkeeping commitment, say that clearly. Accounting is a high-trust vertical, and surprises at signing kill that trust fast.",
        ],
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          [
            "How can an accounting firm get more corporate tax clients?",
            "Start with your positioning and your offer, not the marketing channel. Pick a niche you can speak to directly, then build an offer that removes the biggest reason those business owners hesitate, which is usually unclear pricing or the hassle of switching.",
          ],
          [
            "Why aren't Google Ads working for corporate tax?",
            'Usually it\'s because everyone is bidding on the same broad keywords, like "corporate tax accountant," with the same free consultation offer. Niche keywords and a stronger offer in the ad itself tend to bring in cheaper, better-fit leads.',
          ],
          [
            "Should accounting firms discount corporate tax returns?",
            "Only when the discount is tied to something recurring, like monthly bookkeeping. A standalone discount mostly attracts price shoppers.",
          ],
          [
            "What makes an accounting firm's offer compelling?",
            "It answers the client's biggest hesitation before they even ask. For corporate tax, that's usually a clear flat fee, a fast turnaround, help switching from their old accountant, or extra value like a planning meeting.",
          ],
          [
            "Is positioning or the offer more important?",
            "Positioning comes first, because it's cheaper. The less commoditized your service looks to your ideal client, the less aggressive your offer needs to be.",
          ],
        ],
      },
      {
        type: "cta",
        title: "Not sure where your offer sits?",
        text: "I'm not here to sell you on running more ads. Send me your current corporate tax landing page or ad, and I'll tell you honestly where it sits on both dials and what I'd change first. If it's already strong, I'll tell you that too.",
        label: "Book a call",
        to: "/strategy",
      },
    ],
  },
  {
    slug: "how-firms-can-attract-qualified-corporate-tax-clients",
    tag: "Positioning",
    title: "How Firms Can Attract Qualified Corporate Tax Clients?",
    date: "October 2, 2026",
    excerpt:
      "A practical, step-by-step guide for firm owners who want better clients, not more noise",
    image: corporateTax,
    imageAlt: "How firms can attract qualified corporate tax clients",
    content: [
      { type: "p", text: "Most accounting firms say they want “more leads.”" },
      {
        type: "p",
        text: "What they actually want is fewer conversations with the wrong people and more conversations with businesses that already understand the value of proper corporate tax planning, compliance, and advisory work.",
      },
      {
        type: "p",
        text: "Corporate tax clients are different from personal tax clients. They think differently, buy differently, and choose accountants differently. If your marketing treats them the same, you attract the wrong inquiries.",
      },
      {
        type: "p",
        text: "This guide walks through how accounting firms can consistently attract qualified corporate tax clients by fixing positioning, messaging, and acquisition systems.",
      },
      {
        type: "h2",
        text: "Step 1: Get Clear on What a “Qualified Corporate Tax Client” Actually Is",
      },
      {
        type: "p",
        text: "Before marketing anything, you need a clear definition. Most firms skip this and wonder why their inbox fills with poor-fit inquiries.",
      },
      { type: "p", text: "A qualified corporate tax client typically has:" },
      {
        type: "list",
        items: [
          "An incorporated business or multiple entities",
          "Ongoing tax complexity, not once-a-year filing",
          "Revenue above a minimum threshold that makes your fees reasonable",
          "A reason to care about tax strategy, risk, and compliance",
          "Decision-making authority or direct access to it",
        ],
      },
      {
        type: "p",
        text: "If you cannot describe your ideal corporate tax client in one paragraph, your marketing will stay vague and attract everyone and no one.",
      },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Write down your minimum criteria. Revenue, entity type, location, industry, or complexity.",
          "Decide who you do not want. This matters as much as who you do.",
          "Use this definition as a filter for every marketing decision.",
        ],
      },
      { type: "p", text: "Clarity here reduces wasted calls later." },
      {
        type: "h2",
        text: "Step 2: Stop Marketing “Tax Prep” and Start Marketing Outcomes",
      },
      {
        type: "p",
        text: "Corporate tax clients are not shopping for forms. They are buying certainty, risk reduction, and financial clarity.",
      },
      {
        type: "p",
        text: "When firms lead with “corporate tax returns” or “compliance services,” they sound identical to every other firm.",
      },
      {
        type: "p",
        text: "What corporate decision-makers actually care about:",
      },
      {
        type: "list",
        items: [
          "Avoiding penalties, audits, and surprises",
          "Knowing where they stand before deadlines",
          "Structuring the business correctly from a tax perspective",
          "Paying what they owe, not more",
          "Having a professional who understands their situation",
        ],
      },
      {
        type: "p",
        text: "Your marketing should speak to these outcomes, not your internal service list.",
      },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Rewrite your core service descriptions in plain language.",
          "Replace technical service names with business outcomes.",
          "Test this simple rule: If a non-accountant cannot understand it, rewrite it.",
        ],
      },
      { type: "p", text: "This alone will improve lead quality." },
      {
        type: "h2",
        text: "Step 3: Position Yourself Around Corporate Tax Problems, Not Firm Credentials",
      },
      {
        type: "p",
        text: "Most accounting websites lead with credentials, years in business, and team bios. That matters after trust is built, not before.",
      },
      {
        type: "p",
        text: "Corporate tax prospects arrive with a problem in mind:",
      },
      {
        type: "list",
        items: [
          "“Our tax bill is higher than expected.”",
          "“We are growing and things feel messy.”",
          "“Our current accountant is reactive.”",
          "“We are worried about compliance as we scale.”",
        ],
      },
      {
        type: "p",
        text: "If your messaging does not immediately reflect those concerns, they leave.",
      },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Identify the top 5 corporate tax problems your best clients mention.",
          "Build your homepage messaging around those problems.",
          "Move credentials below problem and solution sections.",
        ],
      },
      {
        type: "p",
        text: "Credentials support trust. They do not create interest.",
      },
      {
        type: "h2",
        text: "Step 4: Create One Core Corporate Tax Offer, Not Ten Services",
      },
      {
        type: "p",
        text: "Corporate tax marketing works best when it is focused.",
      },
      { type: "p", text: "Firms often list:" },
      {
        type: "list",
        items: [
          "Corporate tax returns",
          "Planning",
          "Compliance",
          "Advisory",
          "Bookkeeping",
          "Payroll",
          "Consulting",
        ],
      },
      { type: "p", text: "This overwhelms prospects and weakens positioning." },
      {
        type: "p",
        text: "Instead, anchor your marketing around one primary corporate tax solution, even if you deliver more behind the scenes.",
      },
      { type: "p", text: "Example concepts:" },
      {
        type: "list",
        items: [
          "Corporate tax compliance and planning for growing businesses",
          "Ongoing corporate tax oversight for owner-managed companies",
          "Proactive corporate tax management for multi-entity businesses",
        ],
      },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Choose one primary corporate tax positioning.",
          "Build all marketing around that core promise.",
          "Treat additional services as supporting elements, not headlines.",
        ],
      },
      { type: "p", text: "Focus attracts better prospects." },
      {
        type: "h2",
        text: "Step 5: Build a Website That Pre-Qualifies Instead of “Welcomes Everyone”",
      },
      {
        type: "p",
        text: "Your website should repel poor-fit prospects before they contact you. Most firms try to be polite and inclusive. That is expensive.",
      },
      { type: "p", text: "A strong corporate tax website:" },
      {
        type: "list",
        items: [
          "Clearly states who it is for",
          "Clearly states who it is not for",
          "Explains how the process works",
          "Sets expectations around engagement and fees",
          "Guides visitors toward a single next step",
        ],
      },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Add a “Who We Work With” section.",
          "Add a “Who This Is Not For” section.",
          "Explain your onboarding or assessment process.",
          "Use one clear call to action, not five.",
        ],
      },
      { type: "p", text: "This saves time and increases conversion quality." },
      {
        type: "h2",
        text: "Step 6: Use Educational Content to Attract the Right Attention",
      },
      {
        type: "p",
        text: "Corporate tax clients respond to education, not hype. They want to understand what is at stake and how decisions affect them. Educational content builds trust before the first conversation.",
      },
      { type: "p", text: "Effective content topics include:" },
      {
        type: "list",
        items: [
          "Common corporate tax mistakes growing businesses make",
          "What triggers CRA or IRS scrutiny for corporations",
          "When a business outgrows basic tax preparation",
          "How corporate structure affects tax exposure",
          "What proactive tax planning actually looks like",
        ],
      },
      { type: "p", text: "This positions you as an advisor, not a vendor." },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Write content that answers real client questions.",
          "Avoid technical language where possible.",
          "Explain consequences, not just rules.",
          "Publish fewer, deeper pieces rather than many shallow ones.",
        ],
      },
      { type: "p", text: "Depth filters out unserious prospects." },
      {
        type: "h2",
        text: "Step 7: Use Lead Magnets That Qualify, Not Just Capture Emails",
      },
      {
        type: "p",
        text: "Many firms offer generic checklists that attract anyone. Corporate tax firms should use assets that require relevance to be useful.",
      },
      { type: "p", text: "Examples:" },
      {
        type: "list",
        items: [
          "A guide on corporate tax planning for companies over a revenue threshold",
          "A video explaining how corporations can reduce tax risk year-round",
          "A corporate tax readiness checklist for scaling businesses",
        ],
      },
      {
        type: "p",
        text: "If the asset only helps incorporated businesses, it automatically filters.",
      },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Create one educational asset focused on corporate tax.",
          "Gate it behind a simple form.",
          "Ask one qualifying question on the form if appropriate.",
          "Offer a next step that feels logical, not salesy.",
        ],
      },
      { type: "p", text: "The goal is relevance, not volume." },
      {
        type: "h2",
        text: "Step 8: Nurture Corporate Tax Prospects Before Asking for a Call",
      },
      {
        type: "p",
        text: "Corporate tax decisions are rarely impulsive. Firms that push for calls too early attract price shoppers and tire kickers.",
      },
      { type: "p", text: "A better approach is light nurture:" },
      {
        type: "list",
        items: [
          "Follow-up emails that explain your approach",
          "Short educational videos",
          "Case examples without revealing sensitive details",
          "Clear explanation of what a first call is and is not",
        ],
      },
      { type: "p", text: "This builds trust before time is invested." },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Create a short email sequence after opt-in.",
          "Focus on education and clarity, not selling.",
          "Set expectations for working together.",
          "Invite conversations only when the prospect is informed.",
        ],
      },
      { type: "p", text: "This increases call quality significantly." },
      {
        type: "h2",
        text: "Step 9: Use Paid Ads Carefully and Only After Foundations Are Solid",
      },
      {
        type: "p",
        text: "Paid advertising can work for corporate tax clients, but only if your positioning and website are clear. Ads amplify what already exists. They do not fix weak messaging.",
      },
      { type: "p", text: "Effective ad themes:" },
      {
        type: "list",
        items: [
          "Educational angles rather than promises",
          "Problem-focused messaging",
          "Clear indication of who the content is for",
          "No talk of “cheap” or “fast”",
        ],
      },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Start with educational video or guide ads.",
          "Send traffic to focused landing pages, not your homepage.",
          "Track inquiries, not just clicks.",
          "Pause ads if lead quality drops.",
        ],
      },
      { type: "p", text: "Paid traffic exposes flaws quickly." },
      {
        type: "h2",
        text: "Step 10: Measure Success by Client Quality, Not Lead Volume",
      },
      {
        type: "p",
        text: "Many firms think their marketing is working because inquiries increase. Then they realize they are busier but not more profitable.",
      },
      { type: "p", text: "The correct metrics:" },
      {
        type: "list",
        items: [
          "Percentage of inquiries that fit your criteria",
          "Average engagement value",
          "Time spent on non-qualified calls",
          "Client retention and expansion",
        ],
      },
      { type: "p", text: "If these improve, marketing is working." },
      { type: "p", text: "Action items:" },
      {
        type: "list",
        items: [
          "Track where good clients come from.",
          "Stop channels that attract poor fits.",
          "Double down on sources that attract the right clients.",
          "Refine messaging continuously.",
        ],
      },
      {
        type: "p",
        text: "Marketing is an ongoing filter, not a one-time setup.",
      },
      { type: "h2", text: "Final Thought" },
      {
        type: "p",
        text: "Attracting qualified corporate tax clients is not about tricks, platforms, or clever wording. It is about clarity.",
      },
      {
        type: "p",
        text: "Clear positioning. Clear messaging. Clear expectations. Clear education.",
      },
      {
        type: "p",
        text: "When corporate tax prospects understand who you help, how you help, and why it matters, the right ones move forward and the wrong ones move on.",
      },
      { type: "p", text: "That is the goal." },
    ],
  },
  {
    slug: "google-business-profile-phone-calls",
    tag: "SEO/AEO",
    title: "Generate More Accounting Phone Calls",
    date: "September 18, 2026",
    excerpt:
      "If you would like to generate more phone calls to your accounting firm, leveraging your Google Business Profile is the easiest way.",
    image: phoneCalls,
    imageAlt: "Generate more accounting phone calls",
    content: [
      {
        type: "p",
        text: "If you would like to generate more phone calls to your accounting firm, leveraging your Google Business Profile is the easiest way.",
      },
      {
        type: "h2",
        text: "How to Get More Phone Calls From Your Google Business Profile as an Accounting Firm",
      },
      {
        type: "p",
        text: "If you want more phone calls from your accounting firm's Google Business Profile, you do not need a complicated strategy or a new tool. In many cases, a small adjustment can make a meaningful difference when it is done correctly.",
      },
      {
        type: "p",
        text: "One of the simplest and most overlooked changes is extending your listed office hours into the evening.",
      },
      {
        type: "p",
        text: "At first glance, this sounds almost too basic to matter. In practice, it works surprisingly well, especially for accounting firms during peak season.",
      },
      { type: "h2", text: "Why Evening Hours Matter More Than You Think" },
      {
        type: "p",
        text: "Most business owners and individuals do not search for an accountant in the middle of their workday. They search after hours.",
      },
      {
        type: "p",
        text: "Evenings are when people finally sit down, look at their finances, and realize something needs to be done. That is when tax stress shows up. That is when urgency kicks in.",
      },
      {
        type: "p",
        text: "If your Google Business Profile shows that you are open while most other firms are closed, you immediately stand out. You are not competing with every firm in your city. You are competing with the few that are available at that moment.",
      },
      {
        type: "p",
        text: "This matters because many users filter results by “open now.” Google also tends to prioritize listings that are available at the time of the search. When your profile shows as open, you increase both your visibility and your likelihood of getting the call.",
      },
      { type: "h2", text: "Why This Works Even Better During Tax Season" },
      {
        type: "p",
        text: "During tax season, search behavior becomes even more skewed toward evenings and late hours.",
      },
      {
        type: "p",
        text: "Late filers and overwhelmed business owners often look for help outside of normal business hours. When they reach out, they usually have higher urgency and a stronger intent to speak with someone immediately.",
      },
      {
        type: "p",
        text: "Being available during those moments positions your firm as responsive and accessible. You are meeting prospects where they already are, instead of expecting them to adapt to your schedule.",
      },
      {
        type: "p",
        text: "For appointment based firms, this can be a quiet advantage that compounds over a few weeks.",
      },
      {
        type: "h2",
        text: "Availability Only Works If Calls Are Handled Properly",
      },
      { type: "p", text: "There is an important caveat." },
      {
        type: "p",
        text: "Extending your hours only works if calls are actually answered or properly routed. Showing as open and letting calls go to voicemail defeats the purpose and can hurt trust.",
      },
      {
        type: "p",
        text: "If you decide to extend your hours, you need a plan for handling after hours calls. That might mean using a call center, outsourcing call handling, or setting up a system that captures and qualifies inquiries properly.",
      },
      {
        type: "p",
        text: "The goal is not to have a partner working late every night. The goal is to make sure prospects feel acknowledged when they reach out.",
      },
      { type: "h2", text: "A Real Example From Tax Season" },
      { type: "p", text: "This is not theoretical." },
      {
        type: "p",
        text: "During the last tax season, an accounting firm tested extended evening hours on their Google Business Profile and paired it with proper after hours call handling.",
      },
      {
        type: "p",
        text: "Over a short period, that single change resulted in:",
      },
      {
        type: "list",
        items: [
          "Eight additional personal tax related clicks",
          "Three new self employed clients",
          "One corporate client",
        ],
      },
      {
        type: "p",
        text: "No new ads. No website redesign. Just better availability at the right time.",
      },
      { type: "h2", text: "One Rule You Should Not Ignore" },
      { type: "p", text: "This strategy is not for every business." },
      {
        type: "p",
        text: "Only use this if your firm operates on an appointment basis.",
      },
      {
        type: "p",
        text: "If you run a walk in office or any business where clients physically show up without booking ahead, do not do this. You do not want people arriving when your doors are closed.",
      },
      {
        type: "p",
        text: "For firms that book consultations, however, this is a low risk test, especially during peak season.",
      },
      { type: "h2", text: "Final Thought" },
      {
        type: "p",
        text: "Most firms compete by doing more. More ads. More content. More complexity.",
      },
      {
        type: "p",
        text: "Sometimes, the easier win is simply being available when others are not.",
      },
      {
        type: "p",
        text: "If your firm relies on booked consultations and you want more phone calls from your Google Business Profile, testing extended hours during peak periods is worth your attention. You may be surprised how many additional leads come in from a small, intentional change.",
      },
    ],
  },
  {
    slug: "selling-bookkeeping-services",
    tag: "Positioning",
    title: "How To Sell Bookkeeping Services",
    date: "September 4, 2026",
    excerpt:
      "Selling bookkeeping is getting harder. With AI technology, more local competition and offshore competition, how do you compete in this market? Today I will show you how.",
    image: sellBookkeeping,
    imageAlt: "How to sell bookkeeping services",
    content: [
      {
        type: "p",
        text: "Selling bookkeeping is getting harder. With AI technology, more local competition and offshore competition, how do you compete in this market? Today I will show you how.",
      },
      {
        type: "h2",
        text: "Why Leading With Bookkeeping Makes It Harder to Get Bookkeeping Clients",
      },
      {
        type: "p",
        text: "If you want more bookkeeping clients, this may sound counterintuitive, but leading with bookkeeping is often the reason growth feels slow, expensive, and frustrating.",
      },
      {
        type: "p",
        text: "Bookkeeping is one of the first services most firms promote. It feels straightforward. Every business needs it. It seems like an easy entry point.",
      },
      {
        type: "p",
        text: "In reality, bookkeeping has become highly commoditized. When prospects think about bookkeeping, they immediately think about price. That is why so many small businesses outsource it overseas or ask for a monthly fee before you have even had a real conversation.",
      },
      { type: "p", text: "The issue is not demand. The issue is positioning." },
      { type: "h2", text: "The Hidden Cost of Selling a Commodity" },
      {
        type: "p",
        text: "When you advertise bookkeeping as your primary service, you are entering one of the most competitive markets in professional services.",
      },
      {
        type: "p",
        text: "You are not just competing with local firms. You are competing with national providers, software companies, and overseas teams offering the same service at a fraction of the cost.",
      },
      {
        type: "p",
        text: "As competition increases, acquisition costs rise. It is not unusual for the cost to acquire a bookkeeping client to land somewhere between five hundred and fifteen hundred dollars, depending on your market.",
      },
      { type: "p", text: "Now compare that to the average bookkeeping fee." },
      {
        type: "p",
        text: "If you are charging two hundred to four hundred dollars per month, the payback period quickly becomes uncomfortable. That is especially true if clients churn early or treat bookkeeping as a replaceable expense.",
      },
      {
        type: "p",
        text: "This is where marketing economics break down. You end up working harder, spending more, and waiting longer just to break even.",
      },
      { type: "h2", text: "Why Price Becomes the First Question" },
      {
        type: "p",
        text: "When bookkeeping leads your messaging, prospects assume the service is interchangeable.",
      },
      {
        type: "p",
        text: "They are not asking about your process, your experience, or your judgment. They are asking how much it costs. That puts you in a defensive position from the very first interaction.",
      },
      {
        type: "p",
        text: "Once the conversation is framed around price, it is difficult to shift it back to value. You end up justifying your fees instead of explaining your impact.",
      },
      {
        type: "p",
        text: "This dynamic is not a reflection of your skill. It is a consequence of how the service is positioned.",
      },
      { type: "h2", text: "Lead With Authority, Not Labor" },
      {
        type: "p",
        text: "A more effective approach is to lead with services that signal expertise and judgment.",
      },
      {
        type: "p",
        text: "High value offerings such as tax strategy, industry specific advisory, outcome focused bookkeeping, or business valuation position your firm around thinking, not just execution.",
      },
      {
        type: "p",
        text: "These services attract a different type of prospect. They come with clearer problems, higher urgency, and a greater willingness to pay for expertise.",
      },
      {
        type: "p",
        text: "When authority leads the relationship, bookkeeping becomes easier to sell, not harder. It is no longer a standalone service. It is part of a broader solution.",
      },
      { type: "h2", text: "Better Leads, Easier Sales Conversations" },
      {
        type: "p",
        text: "Leading with authority changes the quality of your inbound inquiries.",
      },
      {
        type: "p",
        text: "Prospects are more qualified. They are less focused on price and more focused on outcomes. Sales conversations become simpler because you are not trying to convince someone that your service is worth it.",
      },
      { type: "p", text: "You are explaining how you help." },
      {
        type: "p",
        text: "This shift also gives you room to compete on value instead of price. You are no longer in a race to the bottom. You are in a position to choose the right clients and structure engagements that make sense for your firm.",
      },
      { type: "h2", text: "Where Bookkeeping Fits" },
      {
        type: "p",
        text: "Bookkeeping is still important. It just should not define the relationship.",
      },
      {
        type: "p",
        text: "When positioned correctly, bookkeeping supports trust, retention, and long term value. It becomes part of a system rather than the headline.",
      },
      {
        type: "p",
        text: "Firms that grow sustainably understand this distinction. They use authority driven services to attract the right clients, then layer in bookkeeping where it strengthens the relationship.",
      },
      { type: "h2", text: "Final Thought" },
      {
        type: "p",
        text: "If your goal is to get more bookkeeping clients without burning your budget or racing competitors to the lowest price, the answer is not better bookkeeping ads.",
      },
      { type: "p", text: "It is better positioning." },
      {
        type: "p",
        text: "Lead with expertise. Let bookkeeping support the relationship.",
      },
    ],
  },
  {
    slug: "selling-tax-services",
    tag: "Positioning",
    title: "How To Sell Tax Services",
    date: "August 21, 2026",
    excerpt:
      "Selling tax services is the best way to differentiate yourself in the market, as there are many angles you can take. Tax solutions vary based on industry, demographic, individual, and much more.",
    image: sellTax,
    imageAlt: "How to sell tax services",
    content: [
      {
        type: "p",
        text: "Selling tax services is the best way to differentiate yourself in the market, as there are many angles you can take. Tax solutions vary based on industry, demographic, individual, and much more.",
      },
      {
        type: "h2",
        text: "Stop Selling Accounting Services. Start Selling Protection.",
      },
      {
        type: "p",
        text: "If you are trying to grow your accounting firm by leading with bookkeeping or general advisory, you may not be doing anything wrong. But you are making growth harder than it needs to be.",
      },
      {
        type: "p",
        text: "Many firms assume that bookkeeping is the logical entry point. It feels safe. It feels ongoing. It feels like something everyone needs. In practice, it is one of the most competitive, price sensitive, and exhausting services to scale through marketing.",
      },
      {
        type: "p",
        text: "There is another way to position your firm that produces higher returns, faster results, and far less friction.",
      },
      { type: "p", text: "That shift is leading with tax." },
      {
        type: "p",
        text: "Not tax as a technical service, but tax as protection.",
      },
      {
        type: "p",
        text: "Firms that make this shift tend to see stronger response from prospects, higher perceived value, and better downstream opportunities for additional services. In fact, some of the most successful firms we have worked with saw returns north of 2500 percent after repositioning around tax as their primary growth lever.",
      },
      { type: "p", text: "Here is why this approach works so well." },
      { type: "h2", text: "Tax Gives You a Common Enemy" },
      {
        type: "p",
        text: "Let us be honest. Very few people feel neutral about the IRS or the CRA. Most actively dislike dealing with them.",
      },
      {
        type: "p",
        text: "Deadlines. Penalties. Letters in the mail. Unclear rules. The feeling that one mistake can cost you real money.",
      },
      {
        type: "p",
        text: "When you lead with tax, you are no longer positioning yourself as just another accounting vendor. You are positioning yourself as the protector. The buffer. The professional standing between your client and a system they do not trust or fully understand.",
      },
      { type: "p", text: "That framing matters." },
      {
        type: "p",
        text: "Instead of being seen as an expense, your service starts to feel like an investment. You are not selling reports or compliance. You are selling defense, guidance, and certainty in an area where people feel exposed.",
      },
      {
        type: "p",
        text: "This shift alone changes how clients evaluate your fees. Protection is easier to justify than administration. It also gives you permission to charge more without feeling like you are constantly negotiating.",
      },
      { type: "h2", text: "Tax Activates Real Emotional Triggers" },
      {
        type: "p",
        text: "Most accounting services are rational purchases. Tax is emotional.",
      },
      {
        type: "p",
        text: "Tax is one of the few areas of finance that genuinely keeps people up at night. The urgency already exists. You do not need to convince prospects that they have a problem. They already know something is at stake.",
      },
      {
        type: "p",
        text: "They worry about overpaying. They worry about missing something. They worry about penalties, audits, and letters they do not fully understand.",
      },
      {
        type: "p",
        text: "When someone hires you for tax, they are not just buying a service. They are buying peace of mind.",
      },
      {
        type: "p",
        text: "There are a few core emotions that show up again and again in tax related conversations.",
      },
      {
        type: "p",
        text: "Stress is usually the dominant driver. Deadlines pile up quickly, documents are scattered, and the pressure builds as filing dates approach.",
      },
      {
        type: "p",
        text: "Anxiety often follows. Many people worry about owing money, making mistakes, or discovering issues from prior years that they did not even know existed.",
      },
      {
        type: "p",
        text: "Overwhelm is common, especially for business owners. Receipts, statements, payroll, and constantly changing rules create a feeling of being out of control.",
      },
      {
        type: "p",
        text: "Confusion plays a big role as well. Most people do not know what applies to them, which deductions they qualify for, or whether they are missing opportunities to reduce their liability.",
      },
      {
        type: "p",
        text: "Fear is always in the background. Fear of penalties, interest, audits, and unwanted attention from tax authorities pushes people to seek help quickly.",
      },
      {
        type: "p",
        text: "When your marketing and sales speak directly to these emotions, tax becomes one of the easiest services to generate demand for.",
      },
      { type: "h2", text: "Tax Creates Stickier Client Relationships" },
      {
        type: "p",
        text: "When you take on a tax client, you gain access to their financial reality.",
      },
      {
        type: "p",
        text: "You see their books. You understand their income structure. You learn their history. You see where things are clean and where they are not.",
      },
      {
        type: "p",
        text: "That level of visibility naturally opens the door to other services.",
      },
      {
        type: "p",
        text: "Bookkeeping becomes easier to position when you already understand their numbers. Payroll becomes more relevant when you see how they are compensating themselves or their team. Advisory, audit support, and planning all become more natural conversations because they are grounded in real data.",
      },
      {
        type: "p",
        text: "As clients add more services, the relationship becomes stickier. Their business or personal finances start to run through your systems. Switching providers becomes costly, time consuming, and risky.",
      },
      {
        type: "p",
        text: "From the client's perspective, staying with you feels easier than starting over somewhere else. From your perspective, lifetime value increases without needing to constantly acquire new clients.",
      },
      {
        type: "p",
        text: "This is one of the most overlooked advantages of leading with tax.",
      },
      { type: "h2", text: "Tax Makes Niching Easier and More Credible" },
      {
        type: "p",
        text: "Tax laws are complex and highly dependent on industry, location, revenue, and structure. That complexity works in your favor.",
      },
      {
        type: "p",
        text: "It is far easier to position yourself as a specialist when tax is at the center of your offering. Saying you are the tax expert for tech founders, real estate investors, contractors, or medical professionals immediately communicates value.",
      },
      { type: "p", text: "Compare that to saying you do general bookkeeping." },
      {
        type: "p",
        text: "Specialization reduces competition. It sharpens your messaging. It makes your marketing clearer and your sales conversations shorter.",
      },
      {
        type: "p",
        text: "Prospects are far more likely to trust a firm that understands the specific tax issues of their industry than one that claims to do everything for everyone.",
      },
      {
        type: "p",
        text: "Tax gives you a natural lane to stand out without trying to be louder than everyone else.",
      },
      { type: "h2", text: "Tax Has Clear, Measurable Success Metrics" },
      {
        type: "p",
        text: "One of the reasons tax works so well as a lead service is that success is easier to demonstrate.",
      },
      {
        type: "p",
        text: "Many accounting services deliver value over time, but it can be difficult for clients to see or quantify that value clearly. Tax, by contrast, is much more concrete.",
      },
      {
        type: "p",
        text: "Clients understand deadlines. They understand penalties. They understand savings.",
      },
      {
        type: "p",
        text: "There are simple questions you can answer that immediately reinforce your value.",
      },
      {
        type: "list",
        items: [
          "Did you file on time?",
          "Did you help them avoid penalties or interest?",
          "Did you reduce their tax liability?",
          "Did you identify savings they would have missed on their own?",
        ],
      },
      {
        type: "p",
        text: "These are quick wins that build trust early. They also create long term wins you can reference year after year. Over time, clients associate your firm with protection, competence, and financial relief.",
      },
      {
        type: "p",
        text: "That trust makes every future recommendation easier.",
      },
      { type: "h2", text: "The Bigger Picture" },
      {
        type: "p",
        text: "Leading with tax is not about abandoning bookkeeping, payroll, or advisory services. It is about choosing a stronger front door.",
      },
      {
        type: "p",
        text: "Tax attracts attention faster. It comes built in urgency. It taps into real emotions. It positions your firm as a protector rather than a vendor.",
      },
      {
        type: "p",
        text: "For firms looking to scale through marketing, this shift often simplifies everything. Messaging becomes clearer. Lead quality improves. Sales conversations feel more natural. Backend services become easier to sell.",
      },
      {
        type: "p",
        text: "If growth has felt harder than it should be, it may not be your execution. It may be what you are leading with.",
      },
      {
        type: "p",
        text: "Sometimes, the most effective change is not doing more. It is repositioning what you already do around what your clients care about most.",
      },
    ],
  },
  {
    slug: "accounting-marketing-agency",
    tag: "Strategy",
    title: "Accountants: Before Hiring A Marketing Agency",
    date: "August 7, 2026",
    excerpt:
      "Before hiring a marketing agency for your accounting firm, here are a few questions you should keep in your back pocket the next time you're having a conversation with one.",
    image: firmAgency,
    imageAlt: "Accountants: before hiring a marketing agency",
    content: [
      {
        type: "p",
        text: "Before hiring a marketing agency for your accounting firm, here are a few questions you should keep in your back pocket the next time you're having a conversation with one.",
      },
      {
        type: "h2",
        text: "Before You Hire a Marketing Agency for Your Accounting Firm, Read This",
      },
      {
        type: "p",
        text: "If you own or manage an accounting firm, there is a good chance you have been approached by more marketing agencies than you can remember. Some reach out by email. Others by LinkedIn. A few by referral. Almost all of them promise some version of the same thing: more leads, more clients, and predictable growth.",
      },
      {
        type: "p",
        text: "On the surface, it sounds appealing. In reality, hiring a marketing agency is one of the easiest ways to waste money if you choose the wrong partner. Not because marketing does not work, but because professional services firms operate very differently from most businesses agencies are used to working with.",
      },
      {
        type: "p",
        text: "Accounting is built on trust, timing, and reputation. Your clients are not impulse buyers. They are cautious, risk aware, and often dealing with sensitive financial decisions. That makes marketing more nuanced than simply driving traffic or generating form fills.",
      },
      {
        type: "p",
        text: "Before you commit to any agency, it is worth slowing down and asking better questions. The answers will tell you whether the agency understands your world or whether you are about to pay for their learning curve.",
      },
      { type: "h2", text: "1. Can They Connect You With Firms Like Yours?" },
      {
        type: "p",
        text: "One of the first things to ask any agency is simple: have they worked with accounting firms before, and can they prove it?",
      },
      {
        type: "p",
        text: "You are not looking for logos on a slide deck or vague claims about “professional services.” You want to know whether they have experience working with firms that face the same challenges you do. Seasonality. Capacity constraints. Client churn. Price sensitivity. Long decision cycles.",
      },
      {
        type: "p",
        text: "It is reasonable for some clients to be under non disclosure agreements. That happens. However, agencies that consistently deliver results usually have at least one client who is willing to speak privately about their experience. Even a short conversation can tell you far more than any presentation.",
      },
      {
        type: "p",
        text: "If an agency cannot offer a reference call, or avoids the question altogether, that is worth paying attention to. Firms that get results tend to build strong relationships. Those relationships usually show up in some form.",
      },
      { type: "h2", text: "2. Can They Explain Results Beyond Screenshots?" },
      {
        type: "p",
        text: "Many agencies rely heavily on screenshots of dashboards, graphs, and analytics tools. At a glance, these look impressive. But without context, they are almost meaningless.",
      },
      {
        type: "p",
        text: "What you should be asking is how those results were achieved. What was the starting point? What strategy was used? How long did it take before things started working? What did not work at first?",
      },
      {
        type: "p",
        text: "A good agency should be able to walk you through the entire process, including the missteps. Marketing rarely works perfectly out of the gate, especially in accounting. There are always adjustments based on service mix, geography, pricing, and demand.",
      },
      {
        type: "p",
        text: "If all you are shown are end results with no explanation of the inputs, it is impossible to know whether those results are repeatable for your firm. You are not buying screenshots. You are buying a process.",
      },
      { type: "h2", text: "3. Are They Promising Guarantees?" },
      {
        type: "p",
        text: "This is one of the biggest warning signs in marketing, especially for accounting firms.",
      },
      {
        type: "p",
        text: "Guarantees sound reassuring, but in practice they often hide risk. No agency can responsibly guarantee outcomes without fully understanding your services, pricing, positioning, market demand, and internal capacity. Even then, there are variables outside of anyone's control.",
      },
      {
        type: "p",
        text: "A credible agency will talk openly about what is realistic, what assumptions are being made, and where the risks are. They will explain how they test, measure, and adjust over time. They will also be clear about what they can control and what they cannot.",
      },
      {
        type: "p",
        text: "If someone guarantees results without asking detailed questions about your firm, they are either inexperienced or willing to take chances with your budget. Neither is a position you want to be in.",
      },
      {
        type: "h2",
        text: "4. Do They Understand How Your Clients Actually Choose an Accountant?",
      },
      {
        type: "p",
        text: "Accounting buyers do not behave like ecommerce shoppers. They do not click an ad and purchase on the spot. They research. They ask for referrals. They wait for the right moment. They look for signs of credibility and stability.",
      },
      {
        type: "p",
        text: "Trust is built over time. Timing matters. So does perceived risk.",
      },
      {
        type: "p",
        text: "If an agency does not understand how business owners evaluate and choose an accountant, their marketing efforts will miss the mark. You may get leads, but they will be poorly timed, low intent, or price focused.",
      },
      {
        type: "p",
        text: "Experience in the accounting niche matters because it shapes everything from messaging to targeting to follow up. Agencies that understand your buyers can anticipate objections and design systems that align with how decisions are actually made.",
      },
      {
        type: "p",
        text: "Without that understanding, you end up paying for trial and error.",
      },
      { type: "h2", text: "5. Are They Overselling Bookkeeping or Payroll?" },
      {
        type: "p",
        text: "Many firm owners are told that bookkeeping or payroll is easy to sell and a great entry point for growth. In reality, these services are some of the most competitive and commoditized offerings in the market.",
      },
      {
        type: "p",
        text: "Pricing pressure is intense. Switching costs are low. Buyers are often focused on cost rather than value.",
      },
      {
        type: "p",
        text: "If an agency promises easy wins in bookkeeping or payroll without discussing competition, acquisition costs, or margins, that is a concern. Selling these services profitably requires careful positioning and a clear understanding of who you want to attract and who you want to avoid.",
      },
      {
        type: "p",
        text: "High value tax, advisory, and complex services follow a very different sales dynamic. Agencies that understand this will be honest about where marketing makes the most sense for your firm.",
      },
      {
        type: "h2",
        text: "6. How Do They Protect Your Time With Lead Qualification?",
      },
      {
        type: "p",
        text: "Your time is limited. Every call you take has an opportunity cost.",
      },
      {
        type: "p",
        text: "One of the most important questions to ask is how leads are qualified before they reach your calendar. The goal of marketing is not to generate as many leads as possible. The goal is to generate the right conversations.",
      },
      {
        type: "p",
        text: "That means filtering out poor fit prospects early. It means setting clear expectations around pricing, services, and engagement types. It also means designing messaging that discourages price shoppers and low commitment inquiries.",
      },
      {
        type: "p",
        text: "If an agency funnels everyone straight to a booking link, you will feel the consequences quickly. A calendar full of calls that go nowhere is not growth. It is distraction.",
      },
      {
        type: "h2",
        text: "7. What Does Success Actually Look Like for Your Firm?",
      },
      {
        type: "p",
        text: "Early in a campaign, it is normal to look at metrics like traffic, impressions, and clicks. These can help diagnose whether the system is working.",
      },
      {
        type: "p",
        text: "Over time, however, success should be defined by outcomes that matter to you. Consultations booked. Close rates. Client quality. Retention. Lifetime value.",
      },
      {
        type: "p",
        text: "Ask how reporting evolves as campaigns mature. Ask what metrics they optimize for and why. An agency that focuses only on activity metrics is avoiding accountability.",
      },
      {
        type: "p",
        text: "You want a partner who is aligned with how you measure success internally, not one who hides behind vanity numbers.",
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "Hiring a marketing agency should make your firm feel more in control of its growth, not less. The right partner will welcome these questions because they know informed clients make better long term relationships.",
      },
      {
        type: "p",
        text: "If an agency struggles to answer them clearly, that is information in itself.",
      },
      {
        type: "p",
        text: "Take your time. Ask better questions. Your future clients, and your peace of mind, depend on it.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

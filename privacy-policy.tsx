import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Shorecrest Digital",
      description:
        "Shorecrest Digital privacy policy for accounting firm marketing visitors and clients.",
      path: "/privacy-policy",
    }),
  component: PrivacyPolicyPage,
});

const sections = [
  { id: "business-information", label: "Business Information" },
  {
    id: "where-your-information-is-collected",
    label: "1. Where Your Information Is Collected",
  },
  { id: "the-information-we-collect", label: "2. The Information We Collect" },
  {
    id: "how-your-information-is-used",
    label: "3. How Your Information Is Used",
  },
  {
    id: "advertising-cookies-and-retargeting",
    label: "4. Advertising, Cookies, and Retargeting",
  },
  {
    id: "the-platform-we-use-to-store-and-process-data",
    label: "5. The Platform We Use to Store and Process Data",
  },
  {
    id: "legal-basis-for-communication",
    label: "6. Legal Basis for Communication",
  },
  { id: "data-retention", label: "7. Data Retention" },
  { id: "your-rights", label: "8. Your Rights" },
  { id: "data-security", label: "9. Data Security" },
  { id: "third-party-content", label: "10. Third-Party Content" },
  { id: "changes-to-this-policy", label: "11. Changes to This Policy" },
  {
    id: "sms-communication-and-mobile-information-use",
    label: "12. SMS Communication and Mobile Information Use",
  },
];

/* Typography for the policy text (keeps the content itself plain JSX). */
const articleClass = [
  "text-base leading-relaxed text-cream-foreground/80",
  "[&_h2]:scroll-mt-28 [&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-cream-foreground/15 [&_h2]:pt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-snug [&_h2]:text-cream-foreground",
  "[&_h2:first-of-type]:mt-10",
  "[&_p]:mt-4",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:marker:text-[#A8823A]",
  "[&_strong]:font-bold [&_strong]:text-cream-foreground",
  "[&_a]:font-semibold [&_a]:text-[#8A6A28]! [&_a]:underline [&_a]:decoration-[#C9A24A]/50 [&_a]:underline-offset-2 [&_a:hover]:decoration-[#8A6A28]",
].join(" ");

function PrivacyPolicyPage() {
  return (
    <main>
      {/* Header */}
      <section className="hero-bg pt-[136px] pb-16 text-center sm:pt-[152px] sm:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            How Shorecrest Digital collects, uses, stores and protects your
            personal information.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3 text-xs whitespace-nowrap sm:text-sm">
            <li className="rounded-full border border-border bg-card/60 px-4 py-2">
              <span className="mr-1 text-muted-foreground">
                Effective Date:
              </span>
              <span className="font-semibold">02/14/2025</span>
            </li>
            <li className="rounded-full border border-border bg-card/60 px-4 py-2">
              <span className="mr-1 text-muted-foreground">
                Primary Website:
              </span>
              <a
                href="https://shorecrest.co"
                className="font-semibold text-gold hover:underline"
              >
                shorecrest.co
              </a>
            </li>
            <li className="rounded-full border border-border bg-card/60 px-4 py-2">
              <span className="mr-1 text-muted-foreground">
                Opt-In &amp; Landing Pages:
              </span>
              <a
                href="https://shorecrestagency.com"
                className="font-semibold text-gold hover:underline"
              >
                shorecrestagency.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Policy */}
      <section className="bg-cream py-16 text-cream-foreground sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[230px_1fr]">
          <nav aria-label="Policy sections" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-bold tracking-[0.14em] text-cream-foreground/60 uppercase">
                On This Page
              </p>
              <ol className="mt-4 space-y-2 border-l border-cream-foreground/15 text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-0.5 pl-4 text-cream-foreground/70 transition-colors hover:border-[#C9A24A] hover:text-cream-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div>
            <article className={articleClass}>
              <p>
                This Privacy Policy explains how Shorecrest Digital collects,
                uses, stores, and protects your personal information when you
                visit our websites, interact with our advertisements, submit
                your information through our forms, or engage with our services.
              </p>
              <p>
                Shorecrest Digital operates under the names Shorecrest Digital,
                Shaun Kaushal, and 1177227 Canada Inc. Throughout this document,
                the terms "we," "us," and "our" refer to Shorecrest Digital.
              </p>

              <h2 id="business-information">Business Information</h2>
              <p>Shorecrest Digital operates under:</p>
              <ul>
                <li>Shorecrest Digital</li>
                <li>1177227 Canada Inc.</li>
                <li>Shaun Kaushal</li>
              </ul>
              <p>
                <strong>Business Address:</strong> 457 Plains Rd E, Burlington,
                ON, L7T 0B8
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:shaun@shorecrest.co"
                  className="text-gold hover:underline"
                >
                  shaun@shorecrest.co
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+16472480887"
                  className="text-gold hover:underline"
                >
                  (647) 248-0887
                </a>
              </p>

              <h2 id="where-your-information-is-collected">
                1. Where Your Information Is Collected
              </h2>
              <p>Information may be collected through:</p>
              <ul>
                <li>Our primary website at shorecrest.co</li>
                <li>
                  Our opt-in pages and funnels hosted at shorecrestagency.com
                </li>
                <li>Our advertisements on platforms such as Meta</li>
                <li>Scheduling pages and embedded forms</li>
              </ul>
              <p>
                The domain shorecrestagency.com is used specifically for
                campaign landing pages, lead capture forms, and appointment
                booking as part of our client acquisition systems.
              </p>

              <h2 id="the-information-we-collect">
                2. The Information We Collect
              </h2>
              <p>
                When you voluntarily submit a form, book a call, or request
                information, we may collect:
              </p>
              <ul>
                <li>
                  Your name, email address, phone number, company name, and your
                  responses to qualifying questions related to your firm and
                  your goals.
                </li>
              </ul>
              <p>
                We also automatically collect certain technical data when you
                browse our pages, including your IP address, browser type,
                device type, referring URLs, pages visited, and interaction
                behavior. This information helps us understand how visitors use
                our pages and how our advertising performs.
              </p>

              <h2 id="how-your-information-is-used">
                3. How Your Information Is Used
              </h2>
              <p>
                Your information is used to respond to your inquiry, schedule
                and manage your appointment, deliver requested resources,
                provide our services, and maintain ongoing business
                communication.
              </p>
              <p>
                Your contact details are stored in our customer relationship
                management system so we can manage our relationship with you in
                a structured and secure way.
              </p>
              <p>
                Your email address may be used to send service-related messages,
                onboarding materials, reminders, and educational content
                relevant to the topic you requested information about.
              </p>
              <p>
                If you provide your phone number in connection with booking an
                appointment or requesting a service, you may receive SMS
                messages from{" "}
                <a
                  href="tel:+16472480887"
                  className="text-gold hover:underline"
                >
                  (647) 248-0887
                </a>
                . These messages are strictly operational in nature and are
                limited to:
              </p>
              <ul>
                <li>Appointment confirmations</li>
                <li>Appointment reminders</li>
                <li>Important scheduling or service notifications</li>
              </ul>
              <p>
                We do not currently send promotional or marketing text messages.
              </p>
              <p>You may opt out of SMS at any time by replying STOP.</p>

              <h2 id="advertising-cookies-and-retargeting">
                4. Advertising, Cookies, and Retargeting
              </h2>
              <p>
                We run advertisements on platforms such as Meta. These platforms
                use tracking technologies, including cookies and pixels, to help
                us understand user behavior and measure campaign performance.
              </p>
              <p>
                This allows us to show relevant advertisements to people who
                have previously visited our websites, including pages hosted on
                shorecrest.co and shorecrestagency.com.
              </p>
              <p>
                This process does not give us access to your personal social
                media accounts. It allows advertising platforms to match website
                visitors to their own users and provide us with anonymized
                performance insights.
              </p>
              <p>
                You can control how these platforms use your data by adjusting
                your ad preferences within your social media account settings or
                your browser settings.
              </p>
              <p>
                When you visit or log in to our website, cookies and similar
                technologies may be used by our online data partners or vendors
                to associate these activities with other personal information
                they or others have about you, including by association with
                your email. We (or service providers on our behalf) may then
                send communications and marketing to these email addresses. You
                may opt out of receiving this advertising by visiting{" "}
                <a
                  href="https://app.retention.com/optout"
                  className="text-gold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://app.retention.com/optout
                </a>
                .
              </p>

              <h2 id="the-platform-we-use-to-store-and-process-data">
                5. The Platform We Use to Store and Process Data
              </h2>
              <p>
                All information submitted through our forms is securely stored
                and processed in Go High Level, which we use for:
              </p>
              <ul>
                <li>Managing contact records</li>
                <li>Scheduling appointments</li>
                <li>Sending email communications</li>
                <li>Sending SMS reminders</li>
                <li>
                  Delivering our services in an organized and consistent manner
                </li>
              </ul>
              <p>
                Access to this information is restricted to authorized personnel
                and is used only for legitimate business purposes.
              </p>
              <p>We do not sell, rent, or trade your personal information.</p>

              <h2 id="legal-basis-for-communication">
                6. Legal Basis for Communication
              </h2>
              <p>
                We collect and process your personal information because you
                have voluntarily provided it to us for the purpose of receiving
                information, booking a call, or engaging with our services.
              </p>
              <p>
                Our email communication practices comply with Canada's Anti-Spam
                Legislation (CASL). Every email you receive will be relevant to
                your inquiry, your service, or the content you requested, and
                you can unsubscribe at any time.
              </p>
              <p>
                SMS communication is used strictly for operational purposes and
                only when you have provided your phone number in connection with
                an appointment or service request.
              </p>

              <h2 id="data-retention">7. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to
                fulfill the purpose for which it was collected, to maintain
                accurate business and financial records, and to comply with
                legal and regulatory obligations.
              </p>
              <p>
                You may request deletion of your personal information at any
                time by{" "}
                <a
                  href="mailto:shaun@shorecrest.co"
                  className="text-gold hover:underline"
                >
                  contacting us
                </a>
                .
              </p>

              <h2 id="your-rights">8. Your Rights</h2>
              <p>
                You have the right to request access to the personal information
                we hold about you, request corrections, withdraw consent to
                communications, or request that your information be deleted,
                subject to any legal obligations that require us to retain
                certain records.
              </p>
              <p>
                Requests can be made by contacting{" "}
                <a
                  href="mailto:shaun@shorecrest.co"
                  className="text-gold hover:underline"
                >
                  shaun@shorecrest.co
                </a>
                .
              </p>

              <h2 id="data-security">9. Data Security</h2>
              <p>
                We use commercially reasonable administrative, technical, and
                organizational safeguards to protect your personal information
                from unauthorized access, loss, misuse, or alteration.
              </p>
              <p>
                While no system can be guaranteed to be completely secure, we
                use reputable platforms and structured access controls to
                minimize risk.
              </p>

              <h2 id="third-party-content">10. Third-Party Content</h2>
              <p>
                Pages on our website may include embedded content hosted on
                external platforms. These platforms may collect data in
                accordance with their own privacy policies.
              </p>

              <h2 id="changes-to-this-policy">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. The most current
                version will always be posted on our website.
              </p>

              <h2 id="sms-communication-and-mobile-information-use">
                12. SMS Communication and Mobile Information Use
              </h2>
              <p>
                When you provide your phone number and consent to receive text
                messages, we use your number solely to send appointment
                confirmations, appointment reminders, scheduling notifications,
                and service-related updates from Shorecrest Digital. Message
                frequency varies based on your interaction with our services.
                Message and data rates may apply according to your mobile
                carrier plan.
              </p>
              <p>
                We do not sell, rent, trade, or share your phone number or SMS
                consent with third parties or affiliates for marketing or
                promotional purposes. Text messaging originator opt-in data and
                consent are used exclusively for the communications you have
                requested and for no other purpose.
              </p>
              <p>
                You may opt out of SMS communications at any time by replying
                STOP, or request assistance by replying HELP or contacting us at{" "}
                <a
                  href="mailto:shaun@shorecrest.co"
                  className="text-gold hover:underline"
                >
                  shaun@shorecrest.co
                </a>{" "}
                or{" "}
                <a
                  href="tel:+16472480887"
                  className="text-gold hover:underline"
                >
                  (647) 248-0887
                </a>
                .
              </p>
            </article>

            <div className="mt-14 rounded-lg bg-navy-deep p-8 text-center text-foreground sm:p-10">
              <h2 className="text-2xl">Questions About Your Privacy?</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Reach out and we&apos;ll respond as soon as possible.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="mailto:shaun@shorecrest.co" className="btn-gold">
                  Email Us
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-[4px] border border-gold px-7 py-[0.85rem] text-[0.95rem] font-bold text-gold transition-colors hover:bg-gold/10"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

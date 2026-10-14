import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useEffect } from "react";
import { Check } from "lucide-react";
import shaun from "@/assets/shaun-linkedin-pic.png";

export const Route = createFileRoute("/strategy")({
  head: () =>
    pageHead({
      title: "Contact Us | Shorecrest Digital",
      description:
        "Book a free strategy call with Shorecrest Digital. We'll map your accounting firm's situation and show you exactly how to attract more of the right clients.",
      path: "/strategy",
      ogTitle: "Book a Free Strategy Call | Shorecrest Digital",
    }),
  component: StrategyCallPage,
});

const topics = [
  "Your firm's current marketing and client acquisition setup",
  "The keywords and niches your ideal clients are searching for",
  "How your website and Google presence convert visitors into leads",
  "How a predictable growth system can increase your firm's revenue",
];

function StrategyCallPage() {
  useEffect(() => {
    const src = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }

    // The embed script auto-resizes the iframe and can under-measure it,
    // which shows an internal scrollbar. Never let it drop below the form's
    // own data-height (666px); the script is still free to grow it.
    const IFRAME_ID = "inline-IzL86lDaqnrCCpB7ZGhO";
    const minTarget = () => 666;
    const enforce = () => {
      const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
      if (iframe) {
        const target = minTarget();
        if (parseInt(iframe.style.height || "0", 10) < target) {
          iframe.style.height = `${target}px`;
        }
      }
    };
    enforce();
    const interval = window.setInterval(enforce, 250);
    const stop = window.setTimeout(() => window.clearInterval(interval), 20000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(stop);
    };
  }, []);

  return (
    <main>
      <section className="pb-16 pt-28 lg:pb-24 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(520px,1.15fr)] lg:gap-16">
          {/* Left column */}
          <div>
            <p className="eyebrow">Book Your Strategy Call</p>
            <h1 className="mt-5 text-4xl leading-tight">
              Ready to grow your <span className="text-gold">accounting firm</span>?
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              A quick conversation, not a sales pitch. We'll map your situation and show you
              exactly where the growth is being left on the table.
            </p>

            <div className="mt-10 flex items-start gap-4 rounded-lg border border-border bg-navy p-6">
              <img
                src={shaun}
                alt="Shaun Kaushal, Founder of Shorecrest Digital"
                width={56}
                height={56}
                className="aspect-square h-14 w-14 shrink-0 rounded-full border border-gold/40 object-cover object-center"
              />
              <div>
                <p className="font-semibold">Hi, I'm Shaun Kaushal</p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  If you schedule a call with me it won't be a typical sales pitch, but a
                  consultative call to understand your firm's goals and how Shorecrest Digital can
                  support them.
                </p>
              </div>
            </div>

            <div className="mt-10 border-l-2 border-gold pl-5">
              <p className="font-display text-xl">
                Examples of topics we'll discuss during our call:
              </p>
              <ul className="mt-4 space-y-3">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-base text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right column — lead form */}
          <div className="min-w-0 overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/IzL86lDaqnrCCpB7ZGhO"
              className="block w-full"
              scrolling="no"
              style={{
                height: 666,
                border: "none",
                borderRadius: 4,
                background: "transparent",
              }}
              id="inline-IzL86lDaqnrCCpB7ZGhO"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="3. Website Lead Form"
              data-height="666"
              data-layout-iframe-id="inline-IzL86lDaqnrCCpB7ZGhO"
              data-form-id="IzL86lDaqnrCCpB7ZGhO"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="3. Website Lead Form"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

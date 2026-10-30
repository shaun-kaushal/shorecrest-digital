import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    pageHead({
      title: "Thank You | Shorecrest Digital",
      description:
        "Thank you for booking a strategy call with Shorecrest Digital. We'll be in touch shortly.",
      path: "/thank-you",
      noindex: true,
    }),
  component: ThankYouPage,
});

function ThankYouPage() {
  useEffect(() => {
    const existing = document.querySelector('script[data-thank-you-conversion]');
    if (existing) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("data-thank-you-conversion", "true");
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('event', 'conversion', {
        'send_to': 'AW-16931983995/PqV-CMP1masaEPuk5ok_',
        'value': 1.0,
        'currency': 'CAD'
      });
    `;
    document.head.appendChild(script);
  }, []);

  return (
    <main className="hero-bg flex min-h-[80vh] items-center justify-center px-6 pt-[152px] pb-20">
      <div className="max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <CheckCircle className="h-8 w-8 text-gold" strokeWidth={2} />
        </div>
        <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
          Thank you for booking
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Your strategy call request has been received. We'll review your details and reach out to
          confirm your appointment shortly.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

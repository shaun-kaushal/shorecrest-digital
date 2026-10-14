import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/scaling")({
  head: () => ({
    meta: [
      { title: "Tax Planning & Advisory Client Acquisition | ClientForge by Shorecrest Digital" },
      {
        name: "description",
        content:
          "ClientForge helps established accounting firms attract high-value tax planning and advisory clients using Meta and LinkedIn ads, with every lead screened for fit.",
      },
      { property: "og:title", content: "Scaling Phase: ClientForge by Shorecrest Digital" },
      { property: "og:url", content: "/services/scaling" },
    ],
    links: [{ rel: "canonical", href: "/services/scaling" }],
  }),
  component: ScalingPage,
});

function ScalingPage() {
  return (
    <main>
      <section className="section flex min-h-[70vh] items-center text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="eyebrow">ClientForge: Scaling Phase ($2M+)</p>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">Coming Soon</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            This system is designed for firms doing $2M+ and have multiple partners.
          </p>
          <Link to="/services" className="mt-9 inline-block text-sm font-bold text-gold hover:underline">
            ← View all services
          </Link>
        </div>
      </section>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/results/")({
  head: () =>
    pageHead({
      title: "Client Results | Shorecrest Digital",
      description:
        "Real results from accounting firms we've worked with: case studies covering ROI, lead generation, and Google growth strategies from Shorecrest Digital.",
      path: "/results",
      ogDescription:
        "Case studies covering ROI, lead generation, and Google growth strategies for accounting firms.",
    }),
  component: ResultsIndex,
});

const caseStudies = [
  {
    to: "/results/mybookly",
    title: "MyBookly Accounting Case Study",
    label: "MyBookly Accounting",
    date: "Case Study",
    excerpt:
      "By focusing on Google and niching down the client's services, we targeted hyper-specific, high-intent keywords — boosting both retention and revenue.",
    image: "https://i.ytimg.com/vi/P5RH9VKUylc/maxresdefault.jpg",
    imageAlt: "MyBookly case study video testimonial",
  },
  {
    to: "/results/streamline-accounting",
    title: "Streamline Accounting Case Study",
    label: "Streamline Accounting",
    date: "Case Study",
    excerpt:
      "A closer look at the marketing strategy Shorecrest Digital developed for Streamline Accounting — from positioning to a Google-first growth plan.",
    image: "https://i.ytimg.com/vi/GRNci0AO4ZQ/maxresdefault.jpg",
    imageAlt: "Streamline Accounting video testimonial",
  },
];

function ResultsIndex() {
  return (
    <main>
      <section className="section pb-10 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">Client Results</p>
          <h1 className="mt-4 text-4xl leading-tight">Results we've generated for our clients</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Real case studies from accounting, bookkeeping, and tax firms — the strategies we used
            and the returns they generated.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <ul className="space-y-6">
          {caseStudies.map((study, i) => (
            <li key={study.to}>
              <Link
                to={study.to}
                className="group grid overflow-hidden rounded-lg border border-border bg-navy transition-colors hover:border-gold/50 sm:grid-cols-[420px_1fr]"
              >
                <div className="relative h-48 overflow-hidden sm:h-full">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    width={1280}
                    height={720}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {study.date} · {study.label}
                  </p>
                  <h2 className="mt-2 text-2xl transition-colors group-hover:text-gold sm:text-3xl">
                    {study.title}
                  </h2>
                  <span className="mt-3 block h-px w-10 bg-gold/60" aria-hidden="true" />
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {study.excerpt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

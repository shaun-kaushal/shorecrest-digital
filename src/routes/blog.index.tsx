import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Blogs | Shorecrest Digital",
      description:
        "Practical marketing guides for accounting, bookkeeping, and tax firm owners: positioning, Google Business Profile, selling tax services, and choosing a marketing agency.",
      path: "/blog",
      ogTitle: "Blog: Marketing Insights for Accounting Firms | Shorecrest Digital",
      ogDescription:
        "Practical marketing guides for accounting, bookkeeping, and tax firm owners from Shorecrest Digital.",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <section className="section pb-10 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">Resources</p>
          <h1 className="mt-4 text-4xl leading-tight">Marketing insights for accounting firms</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Practical guides on positioning, lead generation, and growth for accounting,
            bookkeeping, and tax firm owners.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <ul className="space-y-6">
          {blogPosts.map((post, i) => (
            <li key={post.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group grid overflow-hidden rounded-lg border border-border bg-navy transition-colors hover:border-gold/50 sm:grid-cols-[420px_1fr]"
              >
                <div className="relative h-48 overflow-hidden sm:h-full">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width={666}
                    height={370}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {post.date}
                  </p>
                  <h2 className="mt-2 text-2xl transition-colors group-hover:text-gold sm:text-3xl">
                    {post.title}
                  </h2>
                  <span className="mt-3 block h-px w-10 bg-gold/60" aria-hidden="true" />
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {post.excerpt}
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

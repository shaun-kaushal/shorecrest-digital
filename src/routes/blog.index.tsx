import { createFileRoute } from "@tanstack/react-router";
import { BlogCard } from "@/components/blog-card";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { BLOG_TAGS, blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Blogs | Shorecrest Digital",
      description:
        "Practical marketing guides for accounting, bookkeeping, and tax firm owners: positioning, Google Business Profile, selling tax services, and choosing a marketing agency.",
      path: "/blog",
      ogTitle:
        "Blog: Marketing Insights for Accounting Firms | Shorecrest Digital",
      ogDescription:
        "Practical marketing guides for accounting, bookkeeping, and tax firm owners from Shorecrest Digital.",
    }),
  component: BlogIndex,
});

const ALL = "All articles";

function BlogIndex() {
  const [active, setActive] = useState<string>(ALL);
  const posts =
    active === ALL ? blogPosts : blogPosts.filter((p) => p.tag === active);

  return (
    <main>
      <section className="hero-bg pt-[160px] pb-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">Resources</p>
          <h1 className="mt-4 text-4xl leading-tight">
            Marketing insights for accounting firms
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Practical guides on positioning, lead generation, and growth for
            accounting, bookkeeping, and tax firm owners.
          </p>
          <div
            role="group"
            aria-label="Filter articles by topic"
            className="mt-9 flex flex-wrap justify-center gap-2.5"
          >
            {[ALL, ...BLOG_TAGS].map((tag) => {
              const on = tag === active;
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(tag)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    on
                      ? "border-gold bg-gold text-navy-deep"
                      : "border-border bg-card/40 text-foreground/80 hover:border-gold/60 hover:text-gold"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl">
            {active === ALL ? "Latest Articles" : `${active} Articles`}
          </h2>

          {posts.length === 0 ? (
            <div className="mt-10 rounded-sm border border-cream-foreground/15 bg-[#fbf8f2] p-10 text-center">
              <p className="text-lg font-bold">No {active} articles yet.</p>
              <p className="mt-2 text-base text-cream-foreground/70">
                New guides on this topic are on the way. In the meantime, browse
                all articles.
              </p>
              <button
                type="button"
                onClick={() => setActive(ALL)}
                className="btn-gold mt-6"
              >
                View all articles
              </button>
            </div>
          ) : (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

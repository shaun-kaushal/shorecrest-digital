import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts, getBlogPost, type BlogBlock } from "@/lib/blog-posts";
import shaun from "@/assets/shaun-linkedin-pic.png";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    const index = blogPosts.findIndex((p) => p.slug === params.slug);
    return {
      post,
      prev: index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
      next: index > 0 ? blogPosts[index - 1] : null,
    };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Shorecrest Digital" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Shorecrest Digital` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — Shorecrest Digital` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Person", name: "Shaun Kaushal" },
          }),
        },
      ],
    };
  },
  component: BlogArticle,
});

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-10 text-3xl sm:text-4xl">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-cream-foreground/75">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 text-base leading-relaxed text-cream-foreground/75">{block.text}</p>;
}

function BlogArticle() {
  const { post, prev, next } = Route.useLoaderData();

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={post.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-md brightness-[0.25]"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="eyebrow">Blog</p>
          <h1 className="mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">{post.title}</h1>
          <span className="mx-auto mt-5 block h-px w-10 bg-gold/70" aria-hidden="true" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Posted on {post.date} by Shaun Kaushal
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-cream text-cream-foreground">
        <div className="mx-auto max-w-3xl px-6 py-16">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Author box */}
          <div className="mt-14 flex items-start gap-5 border-t border-cream-foreground/15 pt-8">
            <img
              src={shaun}
              alt="Shaun Kaushal"
              className="aspect-square h-16 w-16 shrink-0 rounded-full object-cover object-center"
            />
            <div>
              <p className="text-base font-bold uppercase tracking-[0.14em]">Shaun Kaushal</p>
              <p className="mt-2 text-base leading-relaxed text-cream-foreground/70">
                Shaun Kaushal is a Marketing Strategist that focuses on helping accounting firms
                and tax strategists position themselves to attract the highest quality clients.
              </p>
            </div>
          </div>

          {/* Prev / Next */}
          <nav className="mt-10 grid gap-4 border-t border-cream-foreground/15 pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                to="/blog/$slug"
                params={{ slug: prev.slug }}
                className="group flex items-center gap-2 text-base font-semibold text-gold transition-colors hover:text-cream-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to="/blog/$slug"
                params={{ slug: next.slug }}
                className="group flex items-center justify-end gap-2 text-right text-base font-semibold text-gold transition-colors hover:text-cream-foreground"
              >
                {next.title}
                <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </nav>
        </div>
      </article>
    </main>
  );
}

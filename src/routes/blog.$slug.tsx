import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AUTHOR,
  blogPosts,
  getBlogPost,
  getToc,
  readingTime,
  slugify,
  type BlogBlock,
  type BlogPost,
} from "@/lib/blog-posts";
import { absUrl, faqJsonLd, pageHead } from "@/lib/seo";
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
      return {
        meta: [
          { title: "Article not found | Shorecrest Digital" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}`;
    const published = new Date(post.date).toISOString().slice(0, 10);
    const faq = post.content.find((b) => b.type === "faq");
    return pageHead({
      title: `${post.metaTitle ?? post.title} | Shorecrest Digital`,
      description: post.metaDescription ?? post.excerpt,
      path,
      image: post.image,
      imageAlt: post.imageAlt,
      type: "article",
      extraMeta: [
        { property: "article:published_time", content: published },
        { property: "article:author", content: "Shaun Kaushal" },
      ],
      jsonLd: [
        {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: absUrl(post.image),
          datePublished: published,
          dateModified: published,
          author: {
            "@type": "Person",
            name: AUTHOR.name,
            url: absUrl(AUTHOR.path),
          },
          publisher: { "@id": "https://shorecrest.co/#organization" },
          mainEntityOfPage: absUrl(path),
        },
        ...(faq && faq.type === "faq" ? [faqJsonLd(faq.items)] : []),
      ],
    });
  },
  component: BlogArticle,
});

function Dial({
  label,
  left,
  right,
}: {
  label: string;
  left: string;
  right: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold">{label}</p>
      <div className="relative mt-4 h-2 rounded-full bg-cream-foreground/15">
        <div className="absolute inset-y-0 left-0 w-[22%] rounded-full bg-gold" />
        <span className="absolute top-1/2 left-[22%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#fbf8f2] bg-gold shadow" />
      </div>
      <div className="mt-2 flex justify-between text-xs font-semibold text-cream-foreground/60">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </div>
  );
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    // clear-both stops a section from wrapping around an image floated earlier.
    return (
      <h2
        id={slugify(block.text)}
        className="mt-10 clear-both scroll-mt-28 text-3xl sm:text-4xl"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "image") {
    return (
      <figure className="mx-auto mt-6 mb-4 w-full max-w-sm overflow-hidden rounded-lg border border-cream-foreground/15 bg-white sm:float-right sm:mt-2 sm:ml-8 sm:w-[44%] sm:max-w-none">
        <img
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </figure>
    );
  }
  if (block.type === "h3") {
    return <h3 className="mt-8 text-xl sm:text-2xl">{block.text}</h3>;
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
  if (block.type === "olist") {
    return (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-cream-foreground/75 marker:font-bold marker:text-cream-foreground">
        {block.items.map(([lead, rest]) => (
          <li key={lead}>
            <strong className="text-cream-foreground">{lead}</strong> {rest}
          </li>
        ))}
      </ol>
    );
  }
  if (block.type === "checklist") {
    return (
      <ul className="mt-4 space-y-2.5 rounded-lg border border-cream-foreground/15 bg-[#fbf8f2] p-5 sm:p-6">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-base text-cream-foreground/85"
          >
            <span
              aria-hidden="true"
              className="mt-[3px] h-[18px] w-[18px] shrink-0 rounded border-2 border-[#a8823a]"
            />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "table") {
    return (
      <div className="mt-6 overflow-x-auto rounded-lg border border-cream-foreground/15 bg-[#fbf8f2]">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-navy-deep text-foreground">
              {block.head.map((h, i) => (
                <th key={i} scope="col" className="px-4 py-3 font-bold">
                  {h || <span className="sr-only">Row</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr
                key={r}
                className="border-t border-cream-foreground/15 align-top"
              >
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th key={c} scope="row" className="px-4 py-3 font-bold">
                      {cell}
                    </th>
                  ) : (
                    <td key={c} className="px-4 py-3 text-cream-foreground/80">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === "dials") {
    return (
      <figure
        className="mt-6 space-y-7 rounded-lg border border-cream-foreground/15 bg-[#fbf8f2] p-6 sm:p-8"
        aria-label="Two sliders: how commoditized your service is, and how aggressive your offer is"
      >
        <Dial
          label="1. How commoditized is your service?"
          left="Commoditized"
          right="Differentiated"
        />
        <Dial
          label="2. How aggressive is your offer?"
          left="Aggressive"
          right="Conservative"
        />
      </figure>
    );
  }
  if (block.type === "faq") {
    return (
      <div className="mt-4 divide-y divide-cream-foreground/15 border-y border-cream-foreground/15">
        {block.items.map(([q, a]) => (
          <div key={q} className="py-5">
            <h3 className="text-lg font-bold">{q}</h3>
            <p className="mt-2 text-base leading-relaxed text-cream-foreground/75">
              {a}
            </p>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "cta") {
    return (
      <div className="mt-12 rounded-lg bg-navy-deep p-8 text-center text-foreground sm:p-10">
        <h2 className="text-2xl sm:text-3xl">{block.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {block.text}
        </p>
        <Link to={block.to as "/strategy"} className="btn-gold mt-7">
          {block.label}
        </Link>
      </div>
    );
  }
  return (
    <p className="mt-4 text-base leading-relaxed text-cream-foreground/75">
      {block.text}
    </p>
  );
}

function scrollToHeading(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Highlights the section currently on screen. */
function useActiveHeading(ids: string[]) {
  const key = ids.join("|");
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const els = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const first = entries.find((en) => en.isIntersecting);
        if (first) setActive(first.target.id);
      },
      { rootMargin: "-110px 0px -65% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [key]);
  return active;
}

function TableOfContents({
  toc,
  active,
  className = "",
}: {
  toc: { id: string; text: string }[];
  active: string;
  className?: string;
}) {
  return (
    <nav aria-label="Table of contents" className={className}>
      <p className="text-[11px] font-bold tracking-[0.16em] text-cream-foreground/60 uppercase">
        On this page
      </p>
      <ol className="mt-3 space-y-1 border-l border-cream-foreground/15">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              onClick={(e) => scrollToHeading(e, t.id)}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors ${
                active === t.id
                  ? "border-[#a8823a] font-bold text-cream-foreground"
                  : "border-transparent text-cream-foreground/65 hover:text-cream-foreground"
              }`}
            >
              {t.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function SummaryCard({ post }: { post: BlogPost }) {
  return (
    <aside className="rounded-lg border border-cream-foreground/15 border-l-4 border-l-[#a8823a] bg-[#fbf8f2] p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] font-bold tracking-[0.16em] text-[#94701f] uppercase">
          Summary
        </p>
        <p className="text-xs font-semibold text-cream-foreground/60">
          {readingTime(post)} min read
        </p>
      </div>
      {post.summary ? (
        <ul className="mt-3 space-y-2.5">
          {post.summary.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[15px] leading-relaxed text-cream-foreground/85"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a8823a]" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-[15px] leading-relaxed text-cream-foreground/85">
          {post.excerpt}
        </p>
      )}
    </aside>
  );
}

function BlogArticle() {
  const { post, prev, next } = Route.useLoaderData();
  const toc = getToc(post);
  const active = useActiveHeading(toc.map((t) => t.id));

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={post.image}
          width={666}
          height={370}
          fetchPriority="high"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-md brightness-[0.25]"
        />
        <div
          className="hero-bg absolute inset-0 opacity-85"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 pt-[168px] pb-24 text-center">
          <p className="eyebrow">{post.tag}</p>
          <h1 className="mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">
            {post.title}
          </h1>
          <span
            className="mx-auto mt-5 block h-px w-10 bg-gold/70"
            aria-hidden="true"
          />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Posted on {post.date} by{" "}
            <Link
              to="/author/shaun-kaushal"
              className="text-gold hover:underline"
            >
              {AUTHOR.name}
            </Link>
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-cream text-cream-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
          {/* Desktop: floating table of contents */}
          <div className="hidden lg:block">
            <TableOfContents
              toc={toc}
              active={active}
              className="sticky top-28"
            />
          </div>

          <div className="mx-auto max-w-3xl lg:mx-0">
            <SummaryCard post={post} />
            {/* Tablet and mobile: table of contents under the summary */}
            <TableOfContents
              toc={toc}
              active={active}
              className="mt-6 rounded-lg border border-cream-foreground/15 bg-[#fbf8f2] p-6 lg:hidden"
            />

            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {/* Author card */}
            <aside className="mt-14 clear-both overflow-hidden rounded-xl border border-cream-foreground/15 bg-[#fbf8f2] shadow-[5px_5px_0_0_var(--color-navy-deep)]">
              <div className="flex flex-col items-center gap-5 p-6 text-center sm:flex-row sm:items-start sm:gap-6 sm:p-8 sm:text-left">
                <img
                  src={shaun}
                  alt="Shaun Kaushal"
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-24 w-24 shrink-0 rounded-full border-2 border-[#a8823a] object-cover object-center"
                />
                <div>
                  <p className="text-[11px] font-bold tracking-[0.16em] text-[#94701f] uppercase">
                    Written by
                  </p>
                  <Link
                    to="/author/shaun-kaushal"
                    className="mt-1 block font-display text-2xl font-bold hover:text-[#94701f]"
                  >
                    {AUTHOR.name}
                  </Link>
                  <p className="text-sm font-semibold text-cream-foreground/60">
                    {AUTHOR.role}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream-foreground/75">
                    Shaun Kaushal is a Marketing Strategist that focuses on
                    helping accounting firms and tax strategists across the US
                    and Canada position themselves to attract the highest
                    quality clients.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/author/shaun-kaushal"
                      className="inline-flex items-center justify-center rounded-[4px] border border-navy-deep px-5 py-2.5 text-sm font-bold transition-colors hover:bg-navy-deep hover:text-foreground"
                    >
                      View all articles
                    </Link>
                    <Link
                      to="/strategy"
                      className="btn-gold px-5 py-2.5 text-sm"
                    >
                      Book a Strategy Call
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

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
        </div>
      </article>
    </main>
  );
}

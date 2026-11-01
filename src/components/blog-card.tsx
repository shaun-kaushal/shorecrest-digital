import { Link } from "@tanstack/react-router";
import { AUTHOR, type BlogPost } from "@/lib/blog-posts";

/** "October 30, 2026" -> "OCT 30, 2026" */
function shortDate(date: string) {
  const [month = "", ...rest] = date.split(" ");
  return `${month.slice(0, 3)} ${rest.join(" ")}`.toUpperCase();
}

/**
 * Article card used on the blog and author pages. The title link stretches over
 * the whole card, and the author name is its own link layered above it.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full min-h-[210px] flex-col rounded-sm border border-cream-foreground/15 bg-[#fbf8f2] p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#a8823a]/60 hover:shadow-md">
      <span className="self-start rounded-full bg-[#c9a24a] px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-navy-deep uppercase">
        {post.tag}
      </span>
      <h3 className="mt-5 font-sans text-lg leading-snug font-bold transition-colors group-hover:text-[#94701f]">
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2.5 mb-7 line-clamp-4 text-sm leading-relaxed text-cream-foreground/70">
        {post.excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-cream-foreground/15 pt-4 text-[11px] font-semibold tracking-[0.12em] uppercase">
        <span>
          <Link
            to="/author/shaun-kaushal"
            className="relative z-10 text-[#a8823a] hover:text-[#94701f] hover:underline"
          >
            {AUTHOR.name}
          </Link>
          <span className="text-cream-foreground/55">
            {" "}
            · {shortDate(post.date)}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="text-base text-[#a8823a] transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </article>
  );
}

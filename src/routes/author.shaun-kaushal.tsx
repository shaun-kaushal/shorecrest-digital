import { createFileRoute, Link } from "@tanstack/react-router";
import { absUrl, pageHead, SITE_URL } from "@/lib/seo";
import { AUTHOR, blogPosts } from "@/lib/blog-posts";
import { BlogCard } from "@/components/blog-card";
import shaun from "@/assets/shaun-kaushal-shorecrest.webp";

const expertise = [
  "Google Ads",
  "Facebook Ads",
  "SEO/AEO",
  "Positioning",
  "Website Conversion",
];

export const Route = createFileRoute("/author/shaun-kaushal")({
  head: () =>
    pageHead({
      title: "Shaun Kaushal, Author | Shorecrest Digital",
      description:
        "Shaun Kaushal is the founder of Shorecrest Digital and writes about marketing and client acquisition for tax, CPA and accounting firms.",
      path: AUTHOR.path,
      jsonLd: {
        "@type": "Person",
        "@id": `${SITE_URL}${AUTHOR.path}#person`,
        name: AUTHOR.name,
        url: absUrl(AUTHOR.path),
        image: absUrl(shaun),
        jobTitle: "Founder",
        worksFor: {
          "@type": "Organization",
          name: "Shorecrest Digital",
          url: SITE_URL,
        },
        knowsAbout: expertise,
      },
    }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <main>
      <section className="hero-bg pt-[150px] pb-16 sm:pt-[170px] sm:pb-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[260px_1fr] md:gap-14">
          <div className="mx-auto w-52 overflow-hidden rounded-2xl border-2 border-gold/60 shadow-2xl shadow-black/40 md:w-full">
            <img
              src={shaun}
              alt="Shaun Kaushal"
              width={720}
              height={1280}
              className="h-64 w-full object-cover object-[50%_62%] md:h-80"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="eyebrow">Author</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">{AUTHOR.name}</h1>
            <p className="mt-2 text-base font-semibold text-gold">
              {AUTHOR.role}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Shaun Kaushal is the founder of Shorecrest Digital, where he helps
              Enrolled Agents, tax firms, CPA firms and accounting firms across
              the US and Canada attract the right clients. He’s ex-Intuit and
              has spent his career in growth marketing and client success, and
              he writes about what actually brings accounting firms qualified
              consultations: positioning, offers, paid ads, SEO and AI search.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm font-semibold"
                >
                  {e}
                </li>
              ))}
            </ul>
            <Link to="/strategy" className="btn-gold mt-8">
              Book a strategy call with Shaun
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-cream text-cream-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl">Articles by {AUTHOR.name}</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export const SITE_URL = "https://shorecrest.co";
export const SITE_NAME = "Shorecrest Digital";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

/** Turns a site path (or an already absolute URL) into an absolute https://shorecrest.co URL. */
export function absUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageHeadOptions = {
  title: string;
  description: string;
  /** Path of this page, e.g. "/about". Used for the canonical tag and og:url. */
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Share image path or URL. Defaults to the site-wide share card. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** One or more schema.org objects, rendered as JSON-LD. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Extra meta tags, e.g. article:published_time. */
  extraMeta?: Record<string, string>[];
};

export function pageHead({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  jsonLd,
  extraMeta = [],
}: PageHeadOptions) {
  const url = absUrl(path);
  const img = absUrl(image ?? DEFAULT_OG_IMAGE);
  const isDefaultImage = !image;

  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large" },
    { property: "og:title", content: ogTitle ?? title },
    { property: "og:description", content: ogDescription ?? description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: img },
    { property: "og:image:alt", content: imageAlt ?? (ogTitle ?? title) },
    ...(isDefaultImage
      ? [
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
        ]
      : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle ?? title },
    { name: "twitter:description", content: ogDescription ?? description },
    { name: "twitter:image", content: img },
    ...extraMeta,
  ];

  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: blocks.map((block) => ({
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", ...block }),
    })),
  };
}

/** The business itself, referenced from other structured data. */
export const organizationJsonLd = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description:
    "Client acquisition systems for accounting, bookkeeping and tax firms: Google Ads, Facebook Ads, landing pages and lead qualification.",
  email: "shaun@shorecrest.co",
  founder: { "@type": "Person", name: "Shaun Kaushal" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "457 Plains Rd E",
    addressLocality: "Burlington",
    addressRegion: "ON",
    postalCode: "L7T 0B8",
    addressCountry: "CA",
  },
};

/** Builds FAQPage structured data from [question, answer(s)] pairs. */
export function faqJsonLd(faqs: [string, string | string[]][]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: Array.isArray(answer) ? answer.join(" ") : answer,
      },
    })),
  };
}

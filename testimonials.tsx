import danny from "@/assets/danny-khanna.png";
import ada from "@/assets/ada-zhang.png";
import rajiv from "@/assets/rajiv-kaushal.png";
import george from "@/assets/georgekcpa-gk-pic.png";

const items = [
  {
    label: "Average Client Result",
    headline: "33 Qualified Consults in 90 Days",
    sub: "(First client landed in 8 days)",
    challenge: "Seasonal spikes and referrals.",
    review:
      "Working with Shorecrest Digital completely changed how we attract clients. Within a few months, our firm generated 3x more business clients than we did with a prior agency.",
    name: "Danny K.",
    role: "Managing Director @ MyBookly",
    photo: danny,
  },
  {
    label: "Average Client Result",
    headline: "34 Qualified Consults in 90 Days",
    sub: "(First client landed in 14 days)",
    challenge: "Seasonal staff work and referrals.",
    review:
      "I can't recommend Shorecrest Digital enough. Their digital strategy helped us attract more local clients within the first 14 days than we've seen in 6 months by ourselves.",
    name: "Ada Z.",
    role: "Director @ Streamline Accounting",
    photo: ada,
  },
  {
    label: "When We Fall Short",
    headline: "24 Qualified Consults in 90 Days",
    sub: "(First client landed in 20 days)",
    note: "*We missed out target of 30 which means we worked for free to make up for the remaining amount.",
    challenge: "Replace personal returns with corporate.",
    review:
      "Shorecrest Digital completely updated our marketing strategy where it was evident through the number of leads we generated that the marketing was working.",
    name: "Rajiv K.",
    role: "Managing Partner @ DS CPA",
    photo: rajiv,
  },
  {
    label: "When We Fall Short",
    headline: "21 Qualified Consults in 90 Days",
    sub: "(First client landed in 18 days)",
    note: "*We missed out target of 30 which means we worked for free to make up for the remaining amount.",
    challenge: "Wanted more niche accounting clients.",
    review:
      "Before working with Shorecrest Digital, our website barely got any engagement. After their work, we've seen a noticeable difference in consultations.",
    name: "George K.",
    role: "Owner @ George K CPA",
    photo: george,
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((t) => (
        <article
          key={t.name}
          className="rounded-lg bg-cream p-7 text-cream-foreground shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)]"
        >
          <p className="eyebrow">{t.label}</p>
          <div className="mt-3 border-t border-cream-foreground/15 pt-4">
            <h3 className="text-3xl">{t.headline}</h3>
            <p className="mt-2 text-base font-bold text-gold">{t.sub}</p>
            {t.note ? (
              <p className="mt-4 text-sm leading-relaxed text-cream-foreground/70">{t.note}</p>
            ) : null}
            <p className="mt-4 text-base leading-relaxed text-cream-foreground/75">
              <span className="font-bold">Challenge:</span> {t.challenge}
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream-foreground/75">
              <span className="font-bold">Review:</span> "{t.review}"
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3 border-t border-cream-foreground/15 pt-5">
            <img src={t.photo} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="text-base font-bold">{t.name}</p>
              <p className="text-base text-cream-foreground/70">{t.role}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

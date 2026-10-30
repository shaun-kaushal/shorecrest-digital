const kpis = [
  { label: "Qualified Consults", value: "9", delta: "▲ 50% vs Aug", good: true },
  { label: "Clients Signed", value: "4", delta: "▲ 33% vs Aug", good: true },
];

const channels = [
  { name: "Google Search Ads", color: "#C9A24A", consults: 4 },
  { name: "Local Service Ads", color: "#C46B3E", consults: 3 },
  { name: "Google Business Profile", color: "#2F8F7A", consults: 2 },
];

const total = channels.reduce((n, c) => n + c.consults, 0);

/** LeadFlow hero graphic: a compact Google-only version of the homepage dashboard. */
export function LeadflowDashboard() {
  return (
    <div
      role="img"
      aria-label="Example LeadFlow dashboard: 9 qualified consultations in September from Google Search Ads, Local Service Ads and Google Business Profile"
      className="rounded-xl border-2 border-navy-soft bg-navy p-5 text-left text-foreground shadow-2xl shadow-black/30 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
        <p className="font-display text-lg font-semibold">LeadFlow Dashboard</p>
        <span className="shrink-0 rounded-md border border-border bg-navy-soft/60 px-2.5 py-1 text-[0.7rem] font-semibold whitespace-nowrap text-foreground/80">
          Sep 2026
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-border bg-navy-deep/60 p-3">
            <p className="text-[0.6rem] font-bold tracking-[0.12em] text-muted-foreground uppercase">
              {k.label}
            </p>
            <p className="mt-1 font-display text-2xl font-bold">{k.value}</p>
            <p
              className={`mt-0.5 text-[0.7rem] font-semibold ${
                k.good ? "text-[oklch(0.75_0.14_160)]" : "text-[oklch(0.72_0.15_30)]"
              }`}
            >
              {k.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="flex justify-between border-b border-border pb-2 text-[0.6rem] font-bold tracking-[0.12em] text-muted-foreground uppercase">
          <span>Channel</span>
          <span>Consults</span>
        </div>
        <ul>
          {channels.map((c) => (
            <li key={c.name} className="border-b border-border/70 py-3">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-2 font-bold">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: c.color }} />
                  {c.name}
                </span>
                <span className="shrink-0 text-foreground/80">{c.consults}</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-navy-soft">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${Math.round((c.consults / total) * 100)}%`, background: c.color }}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between border-t-2 border-foreground/70 pt-3 text-sm font-bold">
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}

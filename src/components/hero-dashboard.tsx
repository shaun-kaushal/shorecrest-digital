const kpis = [
  { label: "Qualified Consults", value: "47", delta: "▲ 23% vs Aug", good: true },
  { label: "Cost / Consult", value: "$186", delta: "▼ 12% vs Aug", good: true },
  { label: "New Clients Signed", value: "18", delta: "▲ 20% vs Aug", good: true },
  { label: "Close Rate", value: "38%", delta: "▲ 4 pts vs Aug", good: true },
  { label: "Ad Spend", value: "$8,740", delta: "▲ 6% vs Aug", good: false },
];

const channels = [
  { name: "Google Search Ads", color: "#C9A24A", consults: 16, cost: "$220", spend: "$3,520" },
  { name: "Facebook Ads", color: "#4A6FB5", consults: 12, cost: "$265", spend: "$3,180" },
  { name: "Google Business Profile", color: "#2F8F7A", consults: 8, cost: "$0", spend: "$0" },
  { name: "SEO + AI Search", color: "#7A6AB8", consults: 8, cost: "$0", spend: "$0" },
  { name: "Local Service Ads", color: "#C46B3E", consults: 3, cost: "$680", spend: "$2,040" },
];

const total = channels.reduce((n, c) => n + c.consults, 0);

export function HeroDashboard() {
  return (
    <div className="mx-auto mt-16 max-w-5xl text-left">
      <div className="rounded-xl border-2 border-navy-soft bg-navy p-5 text-foreground shadow-2xl shadow-black/30 sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <p className="font-display text-lg font-semibold sm:text-xl">Firm Growth Dashboard</p>
          <span className="shrink-0 whitespace-nowrap rounded-md border border-border bg-navy-soft/60 px-3 py-1 text-xs font-semibold text-foreground/80">
            September 2026
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {kpis.map((k, i) => (
            <div
              key={k.label}
              className={`rounded-lg border border-border bg-navy-deep/60 p-4 ${
                i === kpis.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <p className="text-[0.65rem] font-bold tracking-[0.12em] text-muted-foreground uppercase">
                {k.label}
              </p>
              <p className="mt-1.5 font-display text-2xl font-bold sm:text-[1.75rem]">{k.value}</p>
              <p
                className={`mt-1 text-xs font-semibold ${
                  k.good ? "text-[oklch(0.75_0.14_160)]" : "text-[oklch(0.72_0.15_30)]"
                }`}
              >
                {k.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
                <th className="py-2.5 pr-3 text-left font-bold">Channel</th>
                <th className="px-3 py-2.5 text-left font-bold">Consults</th>
                <th className="px-3 py-2.5 text-left font-bold">Cost / Consult</th>
                <th className="px-3 py-2.5 text-left font-bold">Spend</th>
                <th className="py-2.5 pl-3 text-left font-bold">Share</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((c) => (
                <tr key={c.name} className="border-b border-border/70">
                  <td className="py-3 pr-3 font-bold">
                    <span className="flex items-center gap-2.5 whitespace-nowrap">
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: c.color }} />
                      {c.name}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-foreground/80">{c.consults}</td>
                  <td className="px-3 py-3 text-foreground/80">{c.cost}</td>
                  <td className="px-3 py-3 text-foreground/80">{c.spend}</td>
                  <td className="py-3 pl-3">
                    <div className="h-1.5 w-full max-w-24 rounded-full bg-navy-soft">
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${Math.round((c.consults / total) * 100 * 2.2)}%`, background: c.color }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-foreground/70 font-bold">
                <td className="py-3.5 pr-3">Total</td>
                <td className="px-3 py-3.5">{total}</td>
                <td className="px-3 py-3.5">$186</td>
                <td className="px-3 py-3.5">$8,740</td>
                <td className="py-3.5 pl-3" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

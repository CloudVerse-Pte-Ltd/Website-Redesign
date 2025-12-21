import { Integration } from "@/data/integrationsData";

interface IntegrationCardProps {
  integration: Integration;
  onClick: (integration: Integration) => void;
}

export function IntegrationCard({ integration, onClick }: IntegrationCardProps) {
  const statusColor = {
    "Available": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    "Beta": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    "Coming soon": "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20"
  };

  return (
    <button
      onClick={() => onClick(integration)}
      className="text-left p-5 rounded-xl border border-white/10 dark:border-white/10 bg-white/2.5 dark:bg-white/2.5 hover:border-white/20 dark:hover:border-white/20 transition-colors"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-cv-ink dark:text-cv-ink">
            {integration.name}
          </h3>
          <span className={`text-xs font-medium px-2.5 py-1 rounded border ${statusColor[integration.status]}`}>
            {integration.status}
          </span>
        </div>
        <p className="text-sm text-cv-muted line-clamp-2">
          {integration.short}
        </p>
        <span className="inline-block text-xs text-cv-muted/60">
          {integration.category}
        </span>
      </div>
    </button>
  );
}

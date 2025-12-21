import { Integration } from "@/data/integrationsData";
import { Button } from "@/components/Button";
import { X } from "lucide-react";

interface IntegrationDrawerProps {
  integration: Integration | null;
  onClose: () => void;
}

export function IntegrationDrawer({ integration, onClose }: IntegrationDrawerProps) {
  if (!integration) return null;

  const statusColor = {
    "Available": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    "Beta": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    "Coming soon": "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20"
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-[500px] bg-cv-surface dark:bg-cv-surface border-l border-cv-line dark:border-cv-line z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-cv-surface dark:bg-cv-surface border-b border-cv-line dark:border-cv-line p-6 flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-cv-ink dark:text-cv-ink mb-2">
              {integration.name}
            </h2>
            <p className="text-sm text-cv-muted">
              {integration.short}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-cv-muted hover:text-cv-ink dark:text-cv-muted dark:hover:text-cv-ink transition-colors flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Status Badge */}
          <div>
            <span className={`text-xs font-medium px-3 py-1.5 rounded border inline-block ${statusColor[integration.status]}`}>
              {integration.status}
            </span>
          </div>

          {/* What CloudVerse Ingests */}
          <div>
            <h3 className="text-sm font-semibold text-cv-ink dark:text-cv-ink mb-3">
              What CloudVerse ingests
            </h3>
            <ul className="space-y-2">
              {integration.whatWeIngest.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-cv-muted">
                  <span className="text-primary font-semibold mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What it Unlocks */}
          <div>
            <h3 className="text-sm font-semibold text-cv-ink dark:text-cv-ink mb-3">
              What it unlocks
            </h3>
            <ul className="space-y-2">
              {integration.outputs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-cv-muted">
                  <span className="text-primary font-semibold mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Setup */}
          <div className="border-t border-cv-line dark:border-cv-line pt-6">
            <h3 className="text-sm font-semibold text-cv-ink dark:text-cv-ink mb-3">
              Setup
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-cv-muted/60 block mb-1">Method</span>
                <p className="text-cv-muted">{integration.setup.method}</p>
              </div>
              <div>
                <span className="text-cv-muted/60 block mb-1">Time to value</span>
                <p className="text-cv-muted">{integration.setup.timeToValue}</p>
              </div>
              <div>
                <span className="text-cv-muted/60 block mb-1">Permissions</span>
                <p className="text-cv-muted">{integration.setup.permissions}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t border-cv-line dark:border-cv-line">
            <Button variant="secondary" size="lg" className="flex-1">
              Request access
            </Button>
            <Button variant="tertiary" size="lg" className="flex-1">
              Setup docs
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

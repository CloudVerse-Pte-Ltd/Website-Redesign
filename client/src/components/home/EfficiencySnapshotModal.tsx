import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/Button";
import { X, Server, Calendar, DollarSign, FileStack, Lightbulb } from "lucide-react";
import { DEMO_URL } from "@/lib/links";
import { track } from "@/lib/track";

interface TopService {
  name: string;
  spend: number;
  percent: number;
}

interface TopRegion {
  name: string;
  spend: number;
  percent: number;
}

interface TopLineItem {
  displayName: string;
  service: string;
  quantity?: number;
  unit?: string;
  cost: number;
}

export interface AnalysisResult {
  score: number;
  currency: string;
  totalSpend: number;
  billingPeriodStart: string;
  billingPeriodEnd: string;
  providerDetected: string;
  lineItemCount: number;
  topAccountIdentifier?: string;
  topServices: TopService[];
  topRegions: TopRegion[];
  topLineItems: TopLineItem[];
  computeSpendPercent: number;
  onDemandPercent: number;
  optimizationPotentialMin: number;
  optimizationPotentialMax: number;
  insights: string[];
}

interface EfficiencySnapshotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: AnalysisResult | null;
  onUploadAnother: () => void;
}

function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function EfficiencySnapshotModal({ 
  open, 
  onOpenChange, 
  result, 
  onUploadAnother 
}: EfficiencySnapshotModalProps) {
  if (!result) return null;

  const handleBookDemo = () => {
    track("cta_demo", { location: "efficiency_modal" });
    window.open(DEMO_URL, "_blank");
  };

  const handleUploadAnother = () => {
    onUploadAnother();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[960px] w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0 bg-cv-surface dark:bg-cv-surface2 border-cv-line dark:border-white/10">
        <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between px-6 py-4 border-b border-cv-line dark:border-white/10 bg-cv-surface dark:bg-cv-surface2">
          <DialogTitle className="text-lg font-semibold text-cv-ink">
            Efficiency Snapshot
          </DialogTitle>
          <button 
            onClick={() => onOpenChange(false)}
            className="p-1.5 rounded-lg hover:bg-cv-surface2 dark:hover:bg-white/5 transition-colors"
            aria-label="Close"
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5 text-cv-muted" />
          </button>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Score Block */}
          <div className="text-center py-6 bg-cv-surface2 dark:bg-white/5 rounded-2xl">
            <div className="inline-flex items-baseline gap-1">
              <span className="text-6xl sm:text-7xl font-bold text-cv-ink" data-testid="modal-score-value">
                {result.score}
              </span>
              <span className="text-2xl sm:text-3xl text-cv-muted">/100</span>
            </div>
            <p className="text-sm text-cv-muted mt-2">Preliminary efficiency score</p>
            
            {/* Savings Range */}
            {typeof result.optimizationPotentialMin === 'number' && typeof result.optimizationPotentialMax === 'number' && (
              <div className="mt-4 pt-4 border-t border-cv-line dark:border-white/10">
                <p className="text-sm text-cv-muted mb-1">Estimated savings potential</p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400" data-testid="modal-savings-range">
                  {result.optimizationPotentialMin}% – {result.optimizationPotentialMax}%
                </p>
              </div>
            )}
          </div>

          {/* Invoice Snapshot */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-cv-muted">
              Invoice Snapshot
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {result.providerDetected && (
                <SnapshotItem icon={Server} label="Provider" value={result.providerDetected} />
              )}
              {result.billingPeriodStart && result.billingPeriodEnd && (
                <SnapshotItem 
                  icon={Calendar} 
                  label="Billing period" 
                  value={`${formatDate(result.billingPeriodStart)} → ${formatDate(result.billingPeriodEnd)}`} 
                />
              )}
              {result.totalSpend > 0 && (
                <SnapshotItem 
                  icon={DollarSign} 
                  label="Total spend" 
                  value={formatCurrency(result.totalSpend, result.currency)} 
                  highlight 
                />
              )}
              {result.lineItemCount > 0 && (
                <SnapshotItem icon={FileStack} label="Line items parsed" value={result.lineItemCount.toLocaleString()} />
              )}
            </div>
            {result.topAccountIdentifier && (
              <p className="text-sm text-cv-muted">
                Account: <span className="text-cv-ink font-medium">{result.topAccountIdentifier}</span>
              </p>
            )}
          </div>

          {/* Top Spend Chips */}
          {(result.topServices.length > 0 || result.topRegions.length > 0) && (
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-cv-muted">
                Top Spend
              </h3>
              <div className="space-y-3">
                {result.topServices.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {result.topServices.map((svc) => (
                      <span 
                        key={svc.name} 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-sm font-medium text-blue-600 dark:text-blue-400"
                      >
                        {svc.name}
                        {typeof svc.percent === 'number' && !isNaN(svc.percent) && (
                          <span className="text-cv-muted">{svc.percent.toFixed(1)}%</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
                {result.topRegions.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {result.topRegions.slice(0, 3).map((reg) => (
                      <span 
                        key={reg.name} 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 text-sm font-medium text-purple-600 dark:text-purple-400"
                      >
                        {reg.name}
                        {typeof reg.percent === 'number' && !isNaN(reg.percent) && (
                          <span className="text-cv-muted">{reg.percent.toFixed(1)}%</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Top Line Items */}
          {result.topLineItems.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-cv-muted">
                Top Line Items Detected
              </h3>
              {/* Desktop Table */}
              <div className="hidden sm:block overflow-x-auto rounded-xl border border-cv-line dark:border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-cv-surface2 dark:bg-white/5 text-cv-muted border-b border-cv-line dark:border-white/10">
                      <th className="text-left px-4 py-3 font-medium">Resource / Meter</th>
                      <th className="text-left px-4 py-3 font-medium">Service</th>
                      <th className="text-right px-4 py-3 font-medium">Qty</th>
                      <th className="text-right px-4 py-3 font-medium">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.topLineItems.map((item, idx) => (
                      <tr 
                        key={idx} 
                        className="border-b border-cv-line/50 dark:border-white/5 last:border-0 hover:bg-cv-surface2/50 dark:hover:bg-white/5"
                      >
                        <td className="px-4 py-3 text-cv-ink font-mono text-xs">{item.displayName}</td>
                        <td className="px-4 py-3 text-cv-muted">{item.service}</td>
                        <td className="px-4 py-3 text-right text-cv-muted">
                          {item.quantity && item.unit ? `${item.quantity.toLocaleString()} ${item.unit}` : "—"}
                        </td>
                        <td className="px-4 py-3 text-right text-cv-ink font-medium">
                          {formatCurrency(item.cost, result.currency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Mobile Cards */}
              <div className="sm:hidden space-y-3">
                {result.topLineItems.slice(0, 5).map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl border border-cv-line dark:border-white/10 bg-cv-surface2/50 dark:bg-white/5"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm text-cv-ink font-mono truncate flex-1 mr-3">{item.displayName}</p>
                      <span className="text-sm text-cv-ink font-semibold flex-shrink-0">
                        {formatCurrency(item.cost, result.currency)}
                      </span>
                    </div>
                    <p className="text-xs text-cv-muted">
                      {item.service}
                      {item.quantity && item.unit && ` • ${item.quantity.toLocaleString()} ${item.unit}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Insights */}
          {result.insights && result.insights.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-cv-muted flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Insights
              </h3>
              <ul className="space-y-2">
                {result.insights.map((insight, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-3 text-sm text-cv-ink"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 flex flex-col sm:flex-row gap-3 p-6 border-t border-cv-line dark:border-white/10 bg-cv-surface dark:bg-cv-surface2">
          <Button 
            onClick={handleBookDemo} 
            className="flex-1"
            data-testid="button-modal-book-demo"
          >
            Book a demo
          </Button>
          <Button 
            variant="secondary" 
            onClick={handleUploadAnother} 
            className="flex-1"
            data-testid="button-modal-upload-another"
          >
            Upload another
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SnapshotItem({ 
  icon: Icon, 
  label, 
  value, 
  highlight 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-cv-surface2/50 dark:bg-white/5">
      <Icon className="w-5 h-5 text-cv-muted flex-shrink-0 mt-0.5" />
      <div className="min-w-0">
        <p className="text-xs text-cv-muted uppercase tracking-wide mb-0.5">{label}</p>
        <p className={`text-sm font-medium truncate ${highlight ? "text-green-600 dark:text-green-400" : "text-cv-ink"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

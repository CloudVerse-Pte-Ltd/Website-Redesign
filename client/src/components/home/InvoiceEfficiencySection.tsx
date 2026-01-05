import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { track } from "@/lib/track";
import { Upload, FileText, CheckCircle, AlertCircle, Calendar, DollarSign, FileStack, Server } from "lucide-react";

type State = "idle" | "processing" | "result" | "error";

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

interface AnalysisResult {
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
}

const MOCK_RESULT: AnalysisResult = {
  score: 78,
  currency: "USD",
  totalSpend: 47832.14,
  billingPeriodStart: "2024-11-01",
  billingPeriodEnd: "2024-11-30",
  providerDetected: "AWS",
  lineItemCount: 1247,
  topAccountIdentifier: "prod-main-account",
  topServices: [
    { name: "EC2", spend: 19612.17, percent: 41 },
    { name: "S3", spend: 8609.78, percent: 18 },
    { name: "RDS", spend: 6696.50, percent: 14 },
  ],
  topRegions: [
    { name: "us-east-1", spend: 28699.28, percent: 60 },
    { name: "eu-west-1", spend: 11958.04, percent: 25 },
    { name: "ap-south-1", spend: 4783.21, percent: 10 },
  ],
  topLineItems: [
    { displayName: "i-0abc123def456", service: "EC2", quantity: 720, unit: "hrs", cost: 3456.00 },
    { displayName: "db-prod-primary", service: "RDS", quantity: 720, unit: "hrs", cost: 2890.50 },
    { displayName: "logs-bucket-prod", service: "S3", quantity: 2.4, unit: "TB", cost: 1248.00 },
    { displayName: "nat-gateway-main", service: "VPC", quantity: 720, unit: "hrs", cost: 1080.00 },
    { displayName: "lambda-api-handler", service: "Lambda", quantity: 14.2, unit: "M req", cost: 892.40 },
  ],
  computeSpendPercent: 41,
  onDemandPercent: 68,
  optimizationPotentialMin: 12,
  optimizationPotentialMax: 28,
};

const ACCEPTED_TYPES = [".pdf", ".csv", ".xlsx"];
const ACCEPTED_MIME = [
  "application/pdf",
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

function validateFile(file: File): string | null {
  const ext = "." + file.name.split(".").pop()?.toLowerCase();
  if (!ACCEPTED_TYPES.includes(ext) && !ACCEPTED_MIME.includes(file.type)) {
    return `Unsupported file type. Please upload PDF, CSV, or XLSX.`;
  }
  if (file.size > MAX_SIZE_BYTES) {
    return `File too large. Maximum size is ${MAX_SIZE_MB}MB.`;
  }
  return null;
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

export function InvoiceEfficiencySection() {
  const [state, setState] = useState<State>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    const error = validateFile(file);
    if (error) {
      setErrorMessage(error);
      setState("error");
      return;
    }

    track("invoice_upload", { fileType: file.type, fileSize: file.size });
    setState("processing");
    setErrorMessage("");

    setTimeout(() => {
      setState("result");
      setResult(MOCK_RESULT);
      track("invoice_analysis_complete", { score: MOCK_RESULT.score });
    }, 1200);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const resetState = () => {
    setState("idle");
    setResult(null);
    setErrorMessage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section className="pt-0 pb-10 sm:pb-12 lg:pb-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-10 items-start">
          {/* Left Column: Copy */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cv-muted">
              Instant Efficiency Snapshot
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-cv-ink leading-tight">
              Know how efficient your cloud is?
            </h2>
            <p className="text-base sm:text-lg text-cv-muted leading-relaxed">
              Upload a cloud invoice and receive a read-only efficiency snapshot—highlighting waste signals, coverage gaps, and optimization potential.
            </p>
            <ul className="space-y-3 text-base text-cv-muted">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Preliminary efficiency score (0–100)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Top waste signals and coverage gaps</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Optimization potential range</span>
              </li>
            </ul>
            <p className="text-sm text-cv-muted/70 pt-2 border-t border-cv-line dark:border-white/10">
              Read-only analysis. No credentials. Files encrypted in transit and deleted after processing.
            </p>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="w-full">
            <div className="rounded-3xl border border-cv-line dark:border-white/10 bg-cv-surface dark:bg-cv-surface2 shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden">
              {/* macOS-style Top Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-cv-line dark:border-white/10 bg-cv-surface2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-cv-muted uppercase">
                  Efficiency Score
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                {/* Idle State */}
                {state === "idle" && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all min-h-[280px] flex flex-col items-center justify-center ${
                      isDragOver
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-cv-line dark:border-white/20 hover:border-blue-400 hover:bg-blue-500/5"
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-label="Upload invoice file"
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && fileInputRef.current?.click()}
                    data-testid="upload-dropzone"
                  >
                    <Upload className="w-10 h-10 mx-auto mb-4 text-cv-muted" />
                    <p className="text-base font-medium text-cv-ink mb-2">
                      Drop invoice here or click to upload
                    </p>
                    <p className="text-sm text-cv-muted">
                      PDF, CSV, or XLSX • Max {MAX_SIZE_MB}MB
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept={ACCEPTED_TYPES.join(",")}
                      onChange={handleFileChange}
                      className="hidden"
                      aria-label="File upload input"
                      data-testid="file-input"
                    />
                  </div>
                )}

                {/* Processing State */}
                {state === "processing" && (
                  <div className="text-center py-12 min-h-[280px] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-blue-500 animate-pulse" />
                    </div>
                    <p className="text-lg font-medium text-cv-ink mb-4">Analyzing invoice…</p>
                    <div className="w-48 h-2 mx-auto bg-cv-line dark:bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-shimmer" 
                           style={{ backgroundSize: "200% 100%" }} />
                    </div>
                  </div>
                )}

                {/* Error State */}
                {state === "error" && (
                  <div className="text-center py-12 min-h-[280px] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                      <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-base font-medium text-red-500 mb-4" data-testid="error-message">
                      {errorMessage}
                    </p>
                    <Button variant="secondary" onClick={resetState} data-testid="button-try-again">
                      Try again
                    </Button>
                  </div>
                )}

                {/* Result State */}
                {state === "result" && result && (
                  <div className="space-y-5">
                    {/* Score Badge */}
                    <div className="text-center pb-4 border-b border-cv-line dark:border-white/10">
                      <div className="inline-flex items-baseline gap-1">
                        <span className="text-5xl sm:text-6xl font-bold text-cv-ink" data-testid="score-value">
                          {result.score}
                        </span>
                        <span className="text-xl sm:text-2xl text-cv-muted">/100</span>
                      </div>
                      <p className="text-sm text-cv-muted mt-2">Preliminary efficiency score</p>
                    </div>

                    {/* Invoice Snapshot */}
                    <div className="space-y-3 pb-4 border-b border-cv-line dark:border-white/10">
                      <p className="text-xs font-semibold uppercase tracking-wider text-cv-muted">Invoice snapshot</p>
                      <div className="grid grid-cols-2 gap-3">
                        <SnapshotItem icon={Server} label="Provider" value={result.providerDetected} />
                        <SnapshotItem icon={Calendar} label="Period" value={`${formatDate(result.billingPeriodStart)} → ${formatDate(result.billingPeriodEnd)}`} />
                        <SnapshotItem icon={DollarSign} label="Total spend" value={formatCurrency(result.totalSpend, result.currency)} highlight />
                        <SnapshotItem icon={FileStack} label="Line items" value={result.lineItemCount.toLocaleString()} />
                      </div>
                      {result.topAccountIdentifier && (
                        <p className="text-xs text-cv-muted">Account: <span className="text-cv-ink font-medium">{result.topAccountIdentifier}</span></p>
                      )}
                    </div>

                    {/* Top Spend Chips */}
                    <div className="space-y-3 pb-4 border-b border-cv-line dark:border-white/10">
                      <p className="text-xs font-semibold uppercase tracking-wider text-cv-muted">Top spend</p>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {result.topServices.map((svc) => (
                            <span key={svc.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-xs font-medium text-blue-600 dark:text-blue-400">
                              {svc.name} <span className="text-cv-muted">{svc.percent}%</span>
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {result.topRegions.slice(0, 3).map((reg) => (
                            <span key={reg.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-xs font-medium text-purple-600 dark:text-purple-400">
                              {reg.name} <span className="text-cv-muted">{reg.percent}%</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Top Line Items Table */}
                    <div className="space-y-3 pb-4 border-b border-cv-line dark:border-white/10">
                      <p className="text-xs font-semibold uppercase tracking-wider text-cv-muted">Top line items detected</p>
                      <div className="space-y-2">
                        {/* Desktop Table */}
                        <div className="hidden sm:block overflow-x-auto">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="text-cv-muted border-b border-cv-line dark:border-white/10">
                                <th className="text-left py-1.5 font-medium">Resource</th>
                                <th className="text-left py-1.5 font-medium">Service</th>
                                <th className="text-right py-1.5 font-medium">Qty</th>
                                <th className="text-right py-1.5 font-medium">Cost</th>
                              </tr>
                            </thead>
                            <tbody>
                              {result.topLineItems.map((item, idx) => (
                                <tr key={idx} className="border-b border-cv-line/50 dark:border-white/5 last:border-0">
                                  <td className="py-2 text-cv-ink font-mono text-[11px] truncate max-w-[100px]">{item.displayName}</td>
                                  <td className="py-2 text-cv-muted">{item.service}</td>
                                  <td className="py-2 text-right text-cv-muted">
                                    {item.quantity && item.unit ? `${item.quantity} ${item.unit}` : "—"}
                                  </td>
                                  <td className="py-2 text-right text-cv-ink font-medium">{formatCurrency(item.cost, result.currency)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {/* Mobile Stacked */}
                        <div className="sm:hidden space-y-2">
                          {result.topLineItems.slice(0, 5).map((item, idx) => (
                            <div key={idx} className="flex justify-between items-start py-2 border-b border-cv-line/50 dark:border-white/5 last:border-0">
                              <div className="min-w-0 flex-1 mr-3">
                                <p className="text-xs text-cv-ink font-mono truncate">{item.displayName}</p>
                                <p className="text-[10px] text-cv-muted">
                                  {item.service}
                                  {item.quantity && item.unit && ` • ${item.quantity} ${item.unit}`}
                                </p>
                              </div>
                              <span className="text-xs text-cv-ink font-medium flex-shrink-0">{formatCurrency(item.cost, result.currency)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Insight Rows */}
                    <div className="space-y-2 pb-4">
                      <InsightRow 
                        label="Compute concentration" 
                        value={`${result.topServices[0]?.name || 'Compute'} ${result.computeSpendPercent}% of total`} 
                      />
                      <InsightRow 
                        label="On-demand compute" 
                        value={`${result.onDemandPercent}% on-demand`} 
                      />
                      <InsightRow 
                        label="Optimization potential" 
                        value={`${result.optimizationPotentialMin}–${result.optimizationPotentialMax}% savings`} 
                        highlight 
                      />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link href="/demo" onClick={() => track("cta_demo", { location: "invoice_efficiency" })} className="flex-1">
                        <Button className="w-full" data-testid="button-book-demo">
                          Book a demo
                        </Button>
                      </Link>
                      <Button variant="secondary" onClick={resetState} className="flex-1" data-testid="button-upload-another">
                        Upload another
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <div className="flex items-start gap-2">
      <Icon className="w-4 h-4 text-cv-muted flex-shrink-0 mt-0.5" />
      <div className="min-w-0">
        <p className="text-[10px] text-cv-muted uppercase tracking-wide">{label}</p>
        <p className={`text-sm font-medium truncate ${highlight ? "text-green-600 dark:text-green-400" : "text-cv-ink"}`}>{value}</p>
      </div>
    </div>
  );
}

function InsightRow({ 
  label, 
  value, 
  highlight 
}: { 
  label: string; 
  value: string; 
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-center gap-4 py-1.5">
      <span className="text-xs text-cv-muted flex-shrink-0">{label}</span>
      <span className={`text-xs font-medium text-right ${highlight ? "text-green-600 dark:text-green-400" : "text-cv-ink"}`}>
        {value}
      </span>
    </div>
  );
}

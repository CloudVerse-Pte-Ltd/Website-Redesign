import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { track } from "@/lib/track";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

type State = "idle" | "processing" | "result" | "error";

interface AnalysisResult {
  score: number;
  spendCoverage: string[];
  aiSignals: boolean;
  wasteSignals: string;
  commitmentCoverage: string;
  optimizationPotential: string;
}

const MOCK_RESULT: AnalysisResult = {
  score: 78,
  spendCoverage: ["Compute", "Storage", "Network"],
  aiSignals: false,
  wasteSignals: "Idle/overprovision indicators detected",
  commitmentCoverage: "On-demand heavy: Medium",
  optimizationPotential: "Estimated: 12–28%",
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
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
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
              <div className="p-6 sm:p-8 min-h-[320px] flex flex-col justify-center">
                {/* Idle State */}
                {state === "idle" && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
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
                  <div className="text-center py-8">
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
                  <div className="text-center py-8">
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
                  <div className="space-y-6">
                    {/* Score Badge */}
                    <div className="text-center pb-4 border-b border-cv-line dark:border-white/10">
                      <div className="inline-flex items-baseline gap-1">
                        <span className="text-6xl font-bold text-cv-ink" data-testid="score-value">
                          {result.score}
                        </span>
                        <span className="text-2xl text-cv-muted">/100</span>
                      </div>
                      <p className="text-sm text-cv-muted mt-2">Preliminary efficiency score</p>
                    </div>

                    {/* Insight Rows */}
                    <div className="space-y-3">
                      <InsightRow
                        label="Spend coverage"
                        value={result.spendCoverage.join(" • ")}
                        subValue={result.aiSignals ? undefined : "AI signals: Not detected"}
                      />
                      <InsightRow label="Waste signals" value={result.wasteSignals} />
                      <InsightRow label="Commitment coverage" value={result.commitmentCoverage} />
                      <InsightRow label="Optimization potential" value={result.optimizationPotential} highlight />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
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

function InsightRow({ 
  label, 
  value, 
  subValue, 
  highlight 
}: { 
  label: string; 
  value: string; 
  subValue?: string; 
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-start gap-4 py-2">
      <span className="text-sm text-cv-muted flex-shrink-0">{label}</span>
      <div className="text-right">
        <span className={`text-sm font-medium ${highlight ? "text-green-500" : "text-cv-ink"}`}>
          {value}
        </span>
        {subValue && (
          <p className="text-xs text-cv-muted/70 mt-0.5">{subValue}</p>
        )}
      </div>
    </div>
  );
}

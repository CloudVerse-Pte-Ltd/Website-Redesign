interface MicroPreviewProps {
  variant: "connect" | "normalize" | "automate";
}

export function MicroPreview({ variant }: MicroPreviewProps) {
  const renderConnect = () => (
    <div className="space-y-3">
      <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase font-semibold">
        Typical setup
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {["AWS", "Azure", "GCP", "OCI", "+ more"].map((provider) => (
          <span
            key={provider}
            className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70"
          >
            {provider}
          </span>
        ))}
      </div>
      <div className="space-y-1.5 text-[11px]">
        {["Read-only access", "Scoped roles", "Usage + billing signals"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-white/60">
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNormalize = () => (
    <div className="space-y-3">
      <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase font-semibold">
        Normalized dimensions
      </p>
      <div className="space-y-1.5 text-[10px] mb-3 font-mono text-white/60">
        <div className="flex justify-between">
          <span>cost_center</span>
          <span className="text-white/40">→</span>
          <span>Team</span>
        </div>
        <div className="flex justify-between">
          <span>env</span>
          <span className="text-white/40">→</span>
          <span>Environment</span>
        </div>
        <div className="flex justify-between">
          <span>app</span>
          <span className="text-white/40">→</span>
          <span>Product</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 pt-2">
        {["Team", "Product", "Env", "Owner"].map((dim) => (
          <span
            key={dim}
            className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/50 border border-white/10"
          >
            {dim}
          </span>
        ))}
      </div>
    </div>
  );

  const renderAutomate = () => (
    <div className="space-y-3">
      <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase font-semibold">
        Automation queue
      </p>
      <div className="space-y-2 mb-3">
        {[
          { item: "Idle compute cleanup", impact: "High" },
          { item: "Commitment right-size", impact: "Medium" },
          { item: "Storage tiering", impact: "Low" },
        ].map(({ item, impact }) => (
          <div key={item} className="flex items-center justify-between text-[11px]">
            <span className="text-white/60">{item}</span>
            <span
              className={`text-[9px] px-1.5 py-0.5 rounded ${
                impact === "High"
                  ? "bg-red-500/20 text-red-400"
                  : impact === "Medium"
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-emerald-500/20 text-emerald-400"
              }`}
            >
              {impact}
            </span>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-white/50 flex items-center gap-2 pt-2">
        <div className="w-3 h-2 rounded-full bg-blue-500/30 flex items-center gap-0.5">
          <div className="h-1 w-0.5 bg-blue-400/60" />
          <div className="h-1.5 w-0.5 bg-blue-400/60" />
          <div className="h-1 w-0.5 bg-blue-400/60" />
        </div>
        <span>Anomaly detected</span>
      </div>
    </div>
  );

  const tagLabel = {
    connect: "Connections",
    normalize: "Cost model",
    automate: "Automation",
  }[variant];

  const renderContent = () => {
    switch (variant) {
      case "connect":
        return renderConnect();
      case "normalize":
        return renderNormalize();
      case "automate":
        return renderAutomate();
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 h-[170px] sm:h-[180px] flex flex-col justify-between">
      <div>{renderContent()}</div>
      <p className="text-[9px] font-semibold text-white/40 uppercase tracking-widest text-right">
        {tagLabel}
      </p>
    </div>
  );
}

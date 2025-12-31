import { useState, useEffect } from "react";

const heroOutcomesSet1 = [
  { title: "Unified Cost Visibility", desc: "Real-time view across all clouds and services" },
  { title: "Real-time Anomalies", desc: "Detect and predict cost spikes before impact" },
  { title: "Compliance Ready", desc: "Audit trails, access controls, and deployment options" },
  { title: "Multi-cloud Native", desc: "Support for AWS, Azure, GCP, and emerging platforms" },
];

const heroOutcomesSet2 = [
  { title: "Automated Optimization", desc: "AI-driven cost reduction and waste prevention" },
  { title: "ML-powered Recommendations", desc: "Smart sizing, reservations, and savings plans" },
  { title: "One-click Actions", desc: "Apply fixes with audit trails and rollbacks" },
  { title: "Realized Savings", desc: "Track outcomes, not estimates" },
];

const supportedPlatforms = [
  { name: "AWS", srcLight: "/logos/aws.svg", srcDark: "/logos/aws-colored.svg" },
  { name: "Azure", srcLight: "/logos/azure.svg", srcDark: "/logos/azure-colored.svg" },
  { name: "GCP", srcLight: "/logos/gcp.svg", srcDark: "/logos/gcp-colored.svg" },
  { name: "Alibaba", srcLight: "/logos/alibaba.svg", srcDark: "/logos/alibaba-colored.svg" },
  { name: "Huawei", srcLight: "/logos/huawei.svg", srcDark: "/logos/huawei.svg" },
  { name: "Tencent", srcLight: "/logos/tencent.svg", srcDark: "/logos/tencent-colored.svg" },
];

const gpuAiProviders = [
  { name: "OpenAI", srcLight: "/logos/openai.svg", srcDark: "/logos/openai-colored.svg" },
  { name: "Databricks", srcLight: "/logos/databricks.svg", srcDark: "/logos/databricks-colored.svg" },
];

export function HeroCard() {
  const [showSet2, setShowSet2] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setShowSet2((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:w-[520px] xl:w-[600px] 2xl:w-[640px] rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden min-h-[520px] shadow-xl shadow-blue-500/5 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-blue-500/[0.02] pointer-events-none" />
      
      {/* Window Header */}
      <div className="bg-white/5 px-8 py-5 border-b border-white/10 flex items-center gap-3 relative z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase ml-auto">
          CloudVerse™ Outcomes
        </span>
      </div>

      {/* Window Content */}
      <div className="p-8 relative z-10">
        {/* Outcomes List - Crossfading */}
        <div className="min-h-[260px] relative mb-8">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 space-y-6 ${
              showSet2 ? "opacity-0" : "opacity-100"
            }`}
          >
            {heroOutcomesSet1.map((outcome, idx) => (
              <div key={idx}>
                <h4 className="text-[15px] font-semibold text-blue-400 mb-1.5 leading-relaxed">
                  {outcome.title}
                </h4>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-1000 space-y-6 ${
              showSet2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {heroOutcomesSet2.map((outcome, idx) => (
              <div key={idx}>
                <h4 className="text-[15px] font-semibold text-blue-400 mb-1.5 leading-relaxed">
                  {outcome.title}
                </h4>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 mb-6" />

        {/* Supported Platforms */}
        <div className="mb-6">
          <h5 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            Supported Platforms
          </h5>
          <div className="grid grid-cols-6 gap-3">
            {supportedPlatforms.map((platform) => (
              <div 
                key={platform.name} 
                className="flex items-center justify-center h-10 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <img
                  src={platform.srcLight}
                  alt={platform.name}
                  className="h-5 w-auto object-contain dark:hidden"
                />
                <img
                  src={platform.srcDark}
                  alt={platform.name}
                  className="h-5 w-auto object-contain hidden dark:block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* AI Providers */}
        <div>
          <h5 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            AI & GPU Providers
          </h5>
          <div className="grid grid-cols-2 gap-3">
            {gpuAiProviders.map((provider) => (
              <div 
                key={provider.name} 
                className="flex items-center justify-center h-10 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <img
                  src={provider.srcLight}
                  alt={provider.name}
                  className="h-5 w-auto object-contain dark:hidden"
                />
                <img
                  src={provider.srcDark}
                  alt={provider.name}
                  className="h-5 w-auto object-contain hidden dark:block"
                />
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/40 mt-4">
            Plus Kubernetes, OpenShift, and data platforms
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";

const heroOutcomesSet1 = [
  { title: "Unified Cost Visibility", desc: "Real-time view across all clouds and services" },
  { title: "Real-time Anomalies", desc: "Detect and predict cost spikes before impact" },
  { title: "Compliance Ready", desc: "Audit trails, access controls, and deployment options" },
  { title: "Multi-cloud Native", desc: "Support for AWS, Azure, GCP, and emerging platforms" },
  { title: "Audit-ready Reports", desc: "Export-ready reporting for stakeholders" },
];

const heroOutcomesSet2 = [
  { title: "Automated Optimization", desc: "AI-driven cost reduction and waste prevention" },
  { title: "ML-powered Recommendations", desc: "Smart sizing, reservations, and savings plans" },
  { title: "One-click Actions", desc: "Apply fixes with audit trails and rollbacks" },
  { title: "Behavioral Learning", desc: "Adapts to workload patterns and seasonal changes" },
  { title: "Realized Savings", desc: "Track outcomes, not estimates" },
];

const supportedPlatforms = [
  { name: "AWS", srcLight: "/logos/aws.svg", srcDark: "/logos/aws-colored.svg" },
  { name: "Azure", srcLight: "/logos/azure.svg", srcDark: "/logos/azure-colored.svg" },
  { name: "GCP", srcLight: "/logos/gcp.svg", srcDark: "/logos/gcp-colored.svg" },
  { name: "Alibaba Cloud", srcLight: "/logos/alibaba.svg", srcDark: "/logos/alibaba-colored.svg" },
  { name: "Huawei Cloud", srcLight: "/logos/huawei.svg", srcDark: "/logos/huawei.svg" },
  { name: "Tencent Cloud", srcLight: "/logos/tencent.svg", srcDark: "/logos/tencent-colored.svg" },
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
    <div className="w-full rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm overflow-hidden">
      {/* Window Header */}
      <div className="bg-white/5 px-5 sm:px-6 py-3 sm:py-4 border-b border-white/10 flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
        </div>
        <span className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-white/50 uppercase ml-auto">
          CloudVerse™ Outcomes
        </span>
      </div>

      {/* Window Content */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left: Outcomes List - Crossfading */}
          <div className="flex-1 space-y-4 sm:space-y-5 min-h-[280px] sm:min-h-[320px] relative">
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${
                showSet2 ? "opacity-0" : "opacity-100"
              }`}
            >
              {heroOutcomesSet1.map((outcome, idx) => (
                <div key={idx} className="flex gap-3 mb-4 sm:mb-5">
                  <div className="flex-1">
                    <h4 className="text-[13px] sm:text-[14px] font-semibold text-blue-400 mb-1">
                      {outcome.title}
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-gray-400">
                      {outcome.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${
                showSet2 ? "opacity-100" : "opacity-0"
              }`}
            >
              {heroOutcomesSet2.map((outcome, idx) => (
                <div key={idx} className="flex gap-3 mb-4 sm:mb-5">
                  <div className="flex-1">
                    <h4 className="text-[13px] sm:text-[14px] font-semibold text-blue-400 mb-1">
                      {outcome.title}
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-gray-400">
                      {outcome.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Supported Platforms + AI Providers */}
          <div className="flex-1 flex flex-col">
            <h5 className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-white/50 uppercase mb-4">
              Supported Platforms
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {supportedPlatforms.map((platform) => (
                <div key={platform.name} className="flex items-center justify-center">
                  <img
                    src={platform.srcLight}
                    srcSet={`${platform.srcLight} 1x, ${platform.srcDark} 1x`}
                    alt={platform.name}
                    className="h-6 w-auto grayscale opacity-80 dark:grayscale-0"
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] sm:text-[12px] text-gray-500 mb-6">
              Plus data, Kubernetes, and AI platforms
            </p>

            {/* AI Providers */}
            <div className="border-t border-white/10 pt-4">
              <h5 className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-white/50 uppercase mb-3">
                AI & GPU Providers
              </h5>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {gpuAiProviders.map((provider) => (
                  <div key={provider.name} className="flex items-center justify-center">
                    <img
                      src={provider.srcLight}
                      srcSet={`${provider.srcLight} 1x, ${provider.srcDark} 1x`}
                      alt={provider.name}
                      className="h-5 w-auto grayscale opacity-80 dark:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

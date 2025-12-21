import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const tabs = [
  {
    id: "visibility",
    label: "Visibility",
    title: "See every dollar, everywhere.",
    description: "Get a unified view of your cloud spend across AWS, Azure, GCP, and Kubernetes without switching portals.",
    image: "/assets/cloudverse-import/images/platform/visdash.svg",
    bullets: [
      "Real-time cost ingestion and normalization",
      "Multi-cloud dashboards out of the box",
      "Drill down to resource-level details"
    ]
  },
  {
    id: "allocation",
    label: "Allocation",
    title: "Attribute 100% of costs.",
    description: "Map cloud spend to the business units, teams, and products that actually drive consumption.",
    image: "/assets/cloudverse-import/images/platform/optidash.svg", // Using optidash as proxy for allocation
    bullets: [
      "AI-driven tag correction and mapping",
      "Shared cost splitting rules",
      "Audit-ready showback reports"
    ]
  },
  {
    id: "optimization",
    label: "Optimization",
    title: "Cut waste, not velocity.",
    description: "Find and fix inefficiencies with safe, automated recommendations engineers will actually trust.",
    image: "/assets/cloudverse-import/images/platform/optidash.svg",
    bullets: [
      "Rightsizing for EC2, RDS, and Kubernetes",
      "Automated spot instance management",
      "Unused resource cleanup workflows"
    ]
  },
  {
    id: "governance",
    label: "Governance",
    title: "Stay compliant automatically.",
    description: "Enforce budget guardrails and security policies without becoming a bottleneck for deployment.",
    image: "/assets/cloudverse-import/images/platform/visdash.svg",
    bullets: [
      "Budget anomaly detection and alerting",
      "Policy-as-code enforcement",
      "Continuous compliance auditing"
    ]
  },
  {
    id: "finops-ai",
    label: "FinOps for AI",
    title: "Manage AI/ML unit economics.",
    description: "Track the specific cost of training models and inference endpoints to understand ROI.",
    image: "/assets/cloudverse-import/images/platform/Dashboard.svg",
    bullets: [
      "GPU utilization tracking",
      "Model training cost attribution",
      "Inference unit cost analysis"
    ]
  }
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("visibility");
  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <div className="flex flex-col gap-12">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto pb-4 no-scrollbar border-b border-cv-line">
        <div className="flex gap-8 mx-auto min-w-max px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-4 text-[15px] font-medium transition-colors relative whitespace-nowrap",
                activeTab === tab.id 
                  ? "text-cv-ink" 
                  : "text-cv-muted hover:text-cv-ink"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cv-ink" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
        <div className="space-y-6">
          <h2 className="cv-h2">{activeContent.title}</h2>
          <p className="cv-body text-cv-muted">
            {activeContent.description}
          </p>
          <ul className="space-y-4 pt-4">
            {activeContent.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-cv-ink">
                <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                   <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </div>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full aspect-[4/3] relative rounded-cv overflow-hidden border border-cv-line shadow-cv-card bg-cv-surface">
           <img 
              src={activeContent.image} 
              alt={activeContent.title}
              className="w-full h-full object-cover"
           />
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

const featureTabs = [
  {
    id: "visibility",
    label: "Visibility",
    title: "See spend clearly—across clouds and orgs.",
    body: "Understand cost drivers from organization down to resource.",
    bullets: [
      "Multi-cloud and multi-account views",
      "Drill-down without rebuilding dashboards",
      "Export-ready views for reporting",
    ],
  },
  {
    id: "developer-finops",
    label: "Developer FinOps",
    title: "Shift cost awareness left.",
    body: "Bring cost signals into engineering decisions—early.",
    bullets: [
      "Cost context aligned to services and environments",
      "Recommendations engineers can act on",
      "Fewer surprises, less rework",
    ],
  },
  {
    id: "tag-engine",
    label: "Tag Engine",
    title: "Clean dimensions power clean allocation.",
    body: "Normalize and enrich tags, then map ownership automatically.",
    bullets: [
      "Tag normalization and drift detection",
      "Ownership mapping using rules + ML",
      "Allocation that holds up under scrutiny",
    ],
  },
  {
    id: "anomalies",
    label: "Anomalies",
    title: "Detect spikes. Predict risk.",
    body: "Respond to abnormal spend and forecast overruns.",
    bullets: [
      "Detected anomalies near real time",
      "Predicted anomalies using ML models",
      "Clear paths to investigate and fix",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    title: "Move from insight to action—automatically.",
    body: "CloudVerse applies recommendations safely, not just reports them.",
    bullets: [
      "40+ ML models powering recommendations",
      "Guardrails, approvals, and safe automation",
      "Track savings as realized—not estimated",
    ],
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("visibility");
  const activeTabContent = featureTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="border border-cv-line rounded-cv overflow-hidden">
      {/* Tab buttons */}
      <div
        className="flex flex-wrap border-b border-cv-line bg-cv-surface dark:bg-cv-surface2"
        role="tablist"
      >
        {featureTabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 sm:px-6 py-4 text-center text-sm sm:text-base font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-primary text-cv-ink dark:text-cv-ink"
                : "border-transparent text-cv-muted hover:text-cv-ink dark:hover:text-cv-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTabContent && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-8 lg:p-10">
          <div className="space-y-4">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-cv-ink dark:text-cv-ink">
              {activeTabContent.title}
            </h3>
            <p className="text-[15px] leading-[24px] text-cv-muted max-w-prose">
              {activeTabContent.body}
            </p>
            <ul className="space-y-2 pt-4">
              {activeTabContent.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[15px] text-cv-muted"
                >
                  <span className="text-primary font-semibold mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="aspect-[4/3] w-full rounded-lg bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line overflow-hidden p-6">
              <div className="h-full w-full flex flex-col gap-4">
                <div className="h-6 w-1/3 bg-cv-line/60 rounded-md"></div>
                <div className="flex gap-4 flex-1">
                  <div className="w-1/4 h-full bg-cv-line/40 rounded-lg"></div>
                  <div className="w-3/4 flex flex-col gap-4">
                    <div className="h-1/3 w-full bg-cv-line/40 rounded-lg"></div>
                    <div className="h-2/3 w-full bg-cv-line/40 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

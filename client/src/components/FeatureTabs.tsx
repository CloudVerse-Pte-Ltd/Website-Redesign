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
      "GPU and model inference optimization paths",
    ],
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("visibility");
  const activeTabContent = featureTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-2xl bg-gray-50 dark:bg-white/5 overflow-hidden">
      {/* Tab buttons */}
      <div
        className="flex flex-wrap border-b border-gray-200 dark:border-white/10 p-6"
        role="tablist"
      >
        {featureTabs.map((tab, idx) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 sm:px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-cv-ink/10 dark:bg-white/10 text-cv-ink rounded"
                : "text-cv-muted hover:text-cv-ink"
            } ${idx < featureTabs.length - 1 ? "mr-2 sm:mr-3" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTabContent && (
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cv-ink">
              {activeTabContent.title}
            </h3>
            <p className="text-sm text-cv-muted max-w-[56ch]">
              {activeTabContent.body}
            </p>
            <ul className="space-y-2 pt-4">
              {activeTabContent.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-cv-muted"
                >
                  <span className="text-primary font-semibold mt-0.5 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden p-6">
              <div className="h-full w-full flex flex-col gap-4">
                <div className="h-5 w-2/5 bg-cv-line/40 dark:bg-white/20 rounded-md"></div>
                <div className="flex gap-4 flex-1">
                  <div className="w-1/5 h-full bg-cv-line/30 dark:bg-white/15 rounded-lg"></div>
                  <div className="w-4/5 flex flex-col gap-4">
                    <div className="h-1/3 w-full bg-cv-line/30 dark:bg-white/15 rounded-lg"></div>
                    <div className="h-2/3 w-full bg-cv-line/30 dark:bg-white/15 rounded-lg"></div>
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

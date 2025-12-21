import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

const integrations = [
  { name: "AWS", category: "Cloud", icon: "/assets/cloudverse-import/images/integration/awstop.svg" },
  { name: "Azure", category: "Cloud", icon: "/assets/cloudverse-import/images/integration/Azuretop.svg" },
  { name: "GCP", category: "Cloud", icon: "/assets/cloudverse-import/images/integration/googletop.svg" },
  { name: "Snowflake", category: "Data", icon: "/assets/cloudverse-import/images/integration/snowflake.svg" },
  { name: "Datadog", category: "SaaS", icon: "/assets/cloudverse-import/images/integration/datadog.svg" },
  { name: "Kubernetes", category: "Cloud", icon: "/assets/cloudverse-import/images/integration/kuber.svg" },
  { name: "Oracle", category: "SaaS", icon: "/assets/cloudverse-import/images/integration/oracle.svg" },
  { name: "Spark", category: "Data", icon: "/assets/cloudverse-import/images/integration/sparktop.svg" },
];

const categories = ["All", "Cloud", "Data", "AI", "SaaS"];

export default function Integrations() {
  const [filter, setFilter] = useState("All");

  const filtered = integrations.filter(i => filter === "All" || i.category === filter);

  return (
    <BaseLayout>
      <Section padding="primary">
        <h1 className="cv-h1 mb-6">Integrations</h1>
        <p className="cv-body text-cv-muted max-w-2xl mb-12">
          Connect CloudVerse to your entire stack.
        </p>
        
        {/* Filter Island */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-[15px] font-medium transition-colors",
                filter === cat 
                  ? "bg-cv-ink text-cv-surface" 
                  : "bg-cv-surface2 text-cv-muted hover:bg-cv-line/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(int => (
            <Card key={int.name} hover className="flex flex-col items-center text-center p-8 gap-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={int.icon} alt={int.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold mb-2">{int.name}</h3>
                <Badge variant="secondary" className="bg-cv-surface2 text-cv-muted border-cv-line">{int.category}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </BaseLayout>
  );
}

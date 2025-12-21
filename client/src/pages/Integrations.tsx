import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

const integrations = [
  { name: "AWS", category: "Cloud", icon: "aws" },
  { name: "Azure", category: "Cloud", icon: "azure" },
  { name: "GCP", category: "Cloud", icon: "gcp" },
  { name: "Snowflake", category: "Data", icon: "snowflake" },
  { name: "Datadog", category: "SaaS", icon: "datadog" },
  { name: "Kubernetes", category: "Cloud", icon: "k8s" },
  { name: "Slack", category: "SaaS", icon: "slack" },
  { name: "OpenAI", category: "AI", icon: "openai" },
];

const categories = ["All", "Cloud", "Data", "AI", "SaaS"];

export default function Integrations() {
  const [filter, setFilter] = useState("All");

  const filtered = integrations.filter(i => filter === "All" || i.category === filter);

  return (
    <BaseLayout>
      <Section className="pt-32 pb-12">
        <h1 className="mb-6">Integrations</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          Connect CloudVerse to your entire stack.
        </p>
        
        {/* Filter Island */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? "bg-foreground text-background" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(int => (
            <Card key={int.name} hover className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-xl mb-4 flex items-center justify-center">
                {/* Placeholder Icon */}
                <span className="font-bold text-muted-foreground">{int.name[0]}</span>
              </div>
              <h3 className="font-semibold mb-2">{int.name}</h3>
              <Badge variant="secondary">{int.category}</Badge>
            </Card>
          ))}
        </div>
      </Section>
    </BaseLayout>
  );
}

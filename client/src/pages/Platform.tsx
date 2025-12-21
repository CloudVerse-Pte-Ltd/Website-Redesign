import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Skeleton } from "@/components/Skeleton";
import { FeatureTabs } from "@/components/FeatureTabs";
import { SecurityStrip } from "@/components/SecurityStrip";
import { track } from "@/lib/track";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

const modules = [
  "Visibility & Reporting",
  "Dynamic Perspectives",
  "Allocation",
  "Optimization",
  "Governance",
  "FinOps for AI"
];

export default function Platform() {
  return (
    <BaseLayout>
      {/* Platform Hero */}
      <Section padding="hero">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h1 className="cv-h1">Control cloud spend at every layer.</h1>
            <p className="text-[21px] leading-[32px] text-cv-muted">
              CloudVerse™ brings real-time visibility, allocation, and optimization together—so Finance and Engineering can operate from the same truth.
            </p>
            <div className="flex gap-4">
              <Link href="/demo" onClick={() => track("cta_demo", { location: "platform_hero" })}>
                <Button size="lg">Book a demo</Button>
              </Link>
              <Link href="/integrations">
                <Button variant="secondary" size="lg">Explore integrations</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full aspect-[4/3] rounded-cv overflow-hidden border border-cv-line shadow-2xl">
             <img 
               src="/assets/cloudverse-import/images/platform/Dashboard.svg" 
               alt="Platform Dashboard"
               className="w-full h-full object-cover bg-cv-surface"
             />
          </div>
        </div>
      </Section>

      {/* Modules Grid */}
      <Section padding="primary">
        <h2 className="cv-h2 text-center mb-16">What you get with CloudVerse™</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <Card key={mod} hover className="flex flex-col justify-between min-h-[180px]">
              <div>
                <h3 className="text-[20px] font-semibold mb-2">{mod}</h3>
                <p className="text-[15px] text-cv-muted">
                  Comprehensive capabilities for modern cloud financial management.
                </p>
              </div>
              <div className="mt-6 flex items-center text-primary font-medium text-[15px]">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Interactive Tabs Island */}
      <Section background="gray" padding="primary">
        <FeatureTabs />
      </Section>

      {/* Architecture Strip */}
      <Section padding="primary" className="text-center border-b border-cv-line/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="cv-h2 mb-12">How it fits into your workflow</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {['Connect', 'Normalize', 'Analyze', 'Recommend', 'Report'].map((step, index, arr) => (
              <div key={step} className="flex items-center gap-4 md:gap-8">
                <div className="px-6 py-3 bg-cv-surface rounded-full border border-cv-line shadow-sm font-semibold text-cv-ink">
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <ArrowRight className="text-cv-muted w-5 h-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SecurityStrip />

      {/* Platform CTA */}
      <Section padding="primary" className="text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="cv-h2">Get a platform view of your cloud economics.</h2>
          <p className="cv-body text-cv-muted">
            We’ll map your org structure, allocation needs, and optimization priorities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo" onClick={() => track("cta_demo", { location: "platform_bottom" })}>
              <Button size="lg" className="w-full sm:w-auto">Book a demo</Button>
            </Link>
            <Link href="/contact" onClick={() => track("cta_contact", { location: "platform_bottom" })}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Contact sales</Button>
            </Link>
          </div>
        </div>
      </Section>
    </BaseLayout>
  );
}

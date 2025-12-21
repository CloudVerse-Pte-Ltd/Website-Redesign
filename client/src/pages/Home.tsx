import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { track } from "@/lib/track";
import { ArrowRight, BarChart3, PieChart, Zap } from "lucide-react";
import { Link } from "wouter";
import { Skeleton } from "@/components/Skeleton";
import { FeatureBand } from "@/components/FeatureBand";
import { SecurityStrip } from "@/components/SecurityStrip";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <BaseLayout>
      {/* Hero */}
      <Section padding="hero" className="text-center">
        <h1 className="cv-h1 max-w-4xl mx-auto mb-6">
          Cloud financial management for modern engineering.
        </h1>
        <p className="text-[21px] leading-[32px] text-cv-muted max-w-2xl mx-auto mb-10">
          Real-time visibility, allocation, and AI-driven optimization across AWS, Azure, and GCP—built for Finance and Engineering.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="/demo" onClick={() => track("cta_demo", { location: "hero" })}>
            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
              Book a demo
            </Button>
          </Link>
          <Link href="/tour" onClick={() => track("cta_watch_tour", { location: "hero" })}>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
              Watch 90-second tour <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <p className="cv-cap text-cv-muted mb-16">
          ISO 27001 and SOC 2 Type II certified.
        </p>
        
        {/* Hero Image */}
        <div className="relative mx-auto max-w-[1000px] aspect-[16/9] bg-gradient-to-b from-secondary/50 to-secondary rounded-cv border border-cv-line shadow-2xl overflow-hidden flex items-center justify-center group">
          <img 
             src="/assets/cloudverse-import/_next/static/media/dashboard1.2389ae47.png" 
             alt="CloudVerse Dashboard" 
             className="w-full h-full object-cover"
          />
        </div>
      </Section>

      {/* Trusted Strip */}
      <Section padding="utility" className="border-y border-cv-line/50">
        <div className="text-center space-y-3">
          <p className="cv-cap font-semibold tracking-widest text-cv-muted uppercase">
            Trusted by teams who run complex clouds
          </p>
          <p className="cv-body text-cv-ink font-medium">
            Built for multi-account, multi-org environments—where accountability matters.
          </p>
        </div>
      </Section>

      {/* Pillars */}
      <Section padding="primary">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="cv-h2 mb-4">A single platform for visibility, accountability, and savings.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-[21px] font-semibold mb-3">Visibility</h3>
            <p className="cv-body text-cv-muted">
              A real-time view of spend across providers, accounts, regions, and services—down to the resource when you need it.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
              <PieChart className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-[21px] font-semibold mb-3">Allocation</h3>
            <p className="cv-body text-cv-muted">
              Showback and chargeback with rules, shared cost pools, and audit-ready exports that Finance can trust.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-[21px] font-semibold mb-3">Optimization</h3>
            <p className="cv-body text-cv-muted">
              Recommendations prioritized by impact, effort, and risk—so Engineering can act with confidence.
            </p>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray" padding="primary">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="cv-h2 mb-6">How CloudVerse™ works</h2>
          <p className="text-[21px] leading-[32px] text-cv-muted">
            Connect your clouds, normalize billing data, and take action—without slowing down delivery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
           {[
             { title: "Connect", body: "Read-only connections with scoped permissions." },
             { title: "Normalize", body: "Unified accounts, tags, services, and cost models across providers." },
             { title: "Act", body: "Build views, allocate costs, and track realized savings over time." }
           ].map((step, i) => (
             <div key={step.title} className="relative pl-6 border-l-2 border-cv-line/50">
                <div className="text-[13px] font-bold text-cv-muted mb-2 uppercase tracking-widest">Step 0{i+1}</div>
                <h3 className="text-[24px] font-semibold mb-2">{step.title}</h3>
                <p className="text-cv-muted">{step.body}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* Feature Bands */}
      <FeatureBand 
        eyebrow="DYNAMIC PERSPECTIVES"
        title="Cost views that match how your business runs."
        body="Create stakeholder-ready views by product, environment, team, region, service, or custom dimensions. Drill down from portfolio to resource without rebuilding dashboards."
        linkText="Explore Platform"
        linkHref="/platform"
      />

      <FeatureBand 
        eyebrow="ALLOCATION"
        title="Chargeback that holds up under scrutiny."
        body="Allocate shared costs, map spend to business units, and export clear ledgers for review. Keep Finance and Engineering aligned on a single source of truth."
        linkText="Explore Allocation"
        linkHref="/solutions"
        reversed
      />

      <FeatureBand 
        eyebrow="OPTIMIZATION"
        title="Actions engineers will actually take."
        body="Identify waste, rightsize safely, and prioritize the changes that move the bill. Track savings as “realized,” not just estimated."
        linkText="Explore Optimization"
        linkHref="/platform"
      />

      {/* Security & CTA */}
      <SecurityStrip />
      <CTA />
    </BaseLayout>
  );
}

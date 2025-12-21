import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { track } from "@/lib/track";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <BaseLayout>
      {/* Hero */}
      <Section padding="hero">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 text-left space-y-6">
            <span className="cv-cap font-semibold tracking-widest text-cv-muted uppercase">
              CloudVerse™
            </span>
            <h1 className="cv-h1">
              Cloud financial management for modern enterprises.
            </h1>
            <p className="text-[21px] leading-[32px] text-cv-muted max-w-xl">
              Real-time visibility, allocation, anomaly detection, and automated optimization across AWS, Azure, and GCP—built for Finance, Engineering, and platform teams in the AI era.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link href="/demo" data-track="cta_demo" onClick={() => track("cta_demo", { location: "hero" })}>
                <Button size="lg">
                  Book a demo
                </Button>
              </Link>
              <Link href="/tour" data-track="cta_watch_tour" onClick={() => track("cta_watch_tour", { location: "hero" })}>
                <Button variant="tertiary" size="lg" className="text-[17px]">
                  Watch 90-second tour
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right: Product Frame Skeleton */}
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line overflow-hidden p-6">
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
      </Section>

      {/* Customer Logos */}
      <section className="py-cv-sec-md">
        <div className="cv-container">
          <p className="text-center text-[15px] leading-[24px] text-cv-muted mb-6">
            Used by FinOps teams at leading enterprises.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 grayscale opacity-70">
            <img 
              src="/assets/cloudverse-import/images/partners/drreddy.svg" 
              alt="Dr. Reddy's" 
              className="h-6 w-auto"
            />
            <img 
              src="/assets/cloudverse-import/images/partners/infogain.svg" 
              alt="Infogain" 
              className="h-6 w-auto"
            />
            <span className="text-[13px] font-medium text-cv-muted uppercase tracking-widest">MaxLife Insurance</span>
            <span className="text-[13px] font-medium text-cv-muted uppercase tracking-widest">Shaw Industries</span>
            <span className="text-[13px] font-medium text-cv-muted uppercase tracking-widest">SISL Infotech</span>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section padding="primary">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="cv-h2">A single platform for visibility, accountability, and action.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <Card>
            <h3 className="text-[21px] font-semibold mb-3">Visibility</h3>
            <p className="cv-body text-cv-muted">
              A real-time view of spend across providers, accounts, regions, and services—down to the resource when you need it.
            </p>
          </Card>
          <Card>
            <h3 className="text-[21px] font-semibold mb-3">Allocation</h3>
            <p className="cv-body text-cv-muted">
              Showback and chargeback with rules, shared cost pools, and audit-ready exports Finance can trust.
            </p>
          </Card>
          <Card>
            <h3 className="text-[21px] font-semibold mb-3">Automation</h3>
            <p className="cv-body text-cv-muted">
              Recommendations powered by 40+ ML models—applied automatically with guardrails and tracked as realized savings.
            </p>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray" padding="primary">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="cv-h2 mb-4">How CloudVerse works</h2>
          <p className="text-[19px] leading-[30px] text-cv-muted">
            Connect your clouds, normalize billing data, and automate what you can—without slowing down delivery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="relative pl-6 border-l-2 border-cv-ink/20 dark:border-cv-line">
            <div className="text-[48px] font-bold text-cv-ink/20 dark:text-cv-muted/30 leading-none mb-2">01</div>
            <h3 className="text-[22px] font-semibold mb-2">Connect</h3>
            <p className="text-cv-muted">Read-only connections with scoped permissions.</p>
          </div>
          <div className="relative pl-6 border-l-2 border-cv-ink/20 dark:border-cv-line">
            <div className="text-[48px] font-bold text-cv-ink/20 dark:text-cv-muted/30 leading-none mb-2">02</div>
            <h3 className="text-[22px] font-semibold mb-2">Normalize</h3>
            <p className="text-cv-muted">Unified taxonomy for accounts, tags, services, and cost models.</p>
          </div>
          <div className="relative pl-6 border-l-2 border-cv-ink/20 dark:border-cv-line">
            <div className="text-[48px] font-bold text-cv-ink/20 dark:text-cv-muted/30 leading-none mb-2">03</div>
            <h3 className="text-[22px] font-semibold mb-2">Automate</h3>
            <p className="text-cv-muted">Apply safe actions, route the rest to owners, and measure outcomes.</p>
          </div>
        </div>
      </Section>

      {/* Feature Band 1: Developer FinOps */}
      <Section padding="primary">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-4 text-left">
            <span className="cv-cap font-semibold tracking-widest uppercase text-cv-muted">
              Developer FinOps (Shift-Left)
            </span>
            <h2 className="cv-h2">Cost visibility where engineers work.</h2>
            <p className="cv-body text-cv-muted max-w-md">
              Bring cost context into daily engineering workflows—before changes ship.
            </p>
            <div className="pt-2">
              <Link href="/platform">
                <Button variant="tertiary" className="text-[17px]">
                  Explore Developer FinOps
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line"></div>
          </div>
        </div>
      </Section>

      {/* Feature Band 2: Tag Engine */}
      <Section padding="primary">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-4 text-left">
            <span className="cv-cap font-semibold tracking-widest uppercase text-cv-muted">
              Autonomous Tag Engine
            </span>
            <h2 className="cv-h2">Clean allocation starts with clean dimensions.</h2>
            <p className="cv-body text-cv-muted max-w-md">
              Normalize tags, fix drift, and map resources to owners so chargeback holds up under scrutiny.
            </p>
            <div className="pt-2">
              <Link href="/platform">
                <Button variant="tertiary" className="text-[17px]">
                  Explore Tag Engine
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line"></div>
          </div>
        </div>
      </Section>

      {/* Feature Band 3: Anomalies + Recommendations */}
      <Section padding="primary">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-4 text-left">
            <span className="cv-cap font-semibold tracking-widest uppercase text-cv-muted">
              Anomalies + Recommendations
            </span>
            <h2 className="cv-h2">Detect spikes. Predict risk. Take action.</h2>
            <p className="cv-body text-cv-muted max-w-md">
              Detected and predicted anomalies with recommendation paths—so teams can respond before the bill does.
            </p>
            <div className="pt-2">
              <Link href="/platform">
                <Button variant="tertiary" className="text-[17px]">
                  Explore Automation
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line"></div>
          </div>
        </div>
      </Section>

      {/* Security Strip - Light */}
      <Section padding="utility" className="border-y border-cv-line/50">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="cv-h2">Security and compliance, built in.</h2>
          <p className="cv-body text-cv-muted">
            Designed for enterprise environments—from access controls to auditability.
          </p>
          <p className="cv-cap font-semibold text-cv-muted pt-2">
            ISO 27001 • SOC 2 Type II
          </p>
          <div className="pt-2">
            <Link href="/security">
              <Button variant="tertiary" className="text-[15px]">
                Visit Security
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section padding="primary" className="text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="cv-h2">See CloudVerse™ on your data.</h2>
          <p className="cv-body text-cv-muted">
            We'll map your spend structure, allocation model, and the fastest path to measurable savings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/demo" data-track="cta_demo" onClick={() => track("cta_demo", { location: "bottom_cta" })}>
              <Button size="lg">Book a demo</Button>
            </Link>
            <Link href="/contact" data-track="cta_contact" onClick={() => track("cta_contact", { location: "bottom_cta" })}>
              <Button variant="secondary" size="lg">Contact sales</Button>
            </Link>
          </div>
        </div>
      </Section>
    </BaseLayout>
  );
}

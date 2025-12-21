import { BaseLayout } from "@/layouts/BaseLayout";
import { Button } from "@/components/Button";
import { FeatureTabs } from "@/components/FeatureTabs";
import { track } from "@/lib/track";
import { Link } from "wouter";
import { useEffect } from "react";

const capabilities = [
  {
    title: "Visibility & Reporting",
    body: "Real-time views across providers, accounts, regions, services, and resources.",
  },
  {
    title: "Allocation & Chargeback",
    body: "Audit-ready showback and chargeback with shared pools and rules.",
  },
  {
    title: "Anomalies (Detected + Predicted)",
    body: "Catch spend spikes and forecast risk before month-end.",
  },
  {
    title: "Automation-first Optimization",
    body: "Apply safe actions automatically with guardrails and approvals.",
  },
  {
    title: "Developer FinOps (Shift-left)",
    body: "Cost context in engineering workflows—before changes ship.",
  },
  {
    title: "Autonomous Tag Engine",
    body: "Normalize tags, fix drift, and map ownership for accurate allocation.",
  },
];

export default function Platform() {
  useEffect(() => {
    document.title = "Platform — CloudVerse™";
  }, []);

  return (
    <BaseLayout>
      {/* Hero */}
      <section className="py-cv-sec-lg lg:py-cv-sec-xl">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
            <div className="flex-1 text-left space-y-4 sm:space-y-6 max-w-[620px]">
              <span className="cv-cap font-semibold tracking-widest text-cv-muted uppercase">
                CloudVerse™
              </span>
              <h1 className="cv-h1">Control cloud spend at every layer.</h1>
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px] text-cv-muted">
                Visibility, allocation, anomalies, and automation—built for enterprise scale across cloud, data, and AI.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pt-4">
                <Link href="/demo" onClick={() => track("cta_demo", { location: "platform_hero" })}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Book a demo
                  </Button>
                </Link>
                <Link href="/integrations" onClick={() => track("cta_explore_integrations", { location: "platform_hero" })}>
                  <Button variant="tertiary" size="lg" className="text-[14px] sm:text-[16px] lg:text-[17px] w-full sm:w-auto">
                    Explore integrations
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full hidden md:block">
              <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line overflow-hidden p-4 sm:p-6">
                <div className="h-full w-full flex flex-col gap-4">
                  <div className="h-5 sm:h-6 w-1/3 bg-cv-line/60 rounded-md"></div>
                  <div className="flex gap-3 sm:gap-4 flex-1">
                    <div className="w-1/4 h-full bg-cv-line/40 rounded-lg"></div>
                    <div className="w-3/4 flex flex-col gap-3 sm:gap-4">
                      <div className="h-1/3 w-full bg-cv-line/40 rounded-lg"></div>
                      <div className="h-2/3 w-full bg-cv-line/40 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-cv-sec-lg">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="cv-h2 mb-3">What you get with CloudVerse</h2>
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-cv-muted">
              A platform built to report, detect, and act—automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="border border-cv-line rounded-cv p-6 hover:border-cv-muted transition-colors">
                <h3 className="text-base font-semibold mb-3">{cap.title}</h3>
                <p className="text-sm text-cv-muted max-w-[42ch]">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs Island */}
      <section className="py-cv-sec-lg">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <FeatureTabs />
        </div>
      </section>

      {/* Workflow Strip */}
      <section className="py-cv-sec-md border-y border-cv-line">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="cv-h2">How it fits into your workflow</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Connect", "Normalize", "Analyze", "Detect", "Automate", "Report"].map(
              (step, idx, arr) => (
                <div key={step} className="flex items-center gap-6">
                  <span className="text-[15px] font-medium text-cv-muted uppercase tracking-widest">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-cv-line">•</span>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Security Strip */}
      <section className="py-cv-sec-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="cv-h2">Security and compliance, built in.</h2>
            <p className="cv-body text-cv-muted">
              Designed for enterprise environments—from access control to auditability.
            </p>
            <p className="cv-cap font-semibold text-cv-muted pt-2">
              ISO 27001 • SOC 2 Type II
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-cv-sec-lg">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
            <h2 className="cv-h2">Get a platform view of your cloud economics.</h2>
            <p className="cv-body text-cv-muted">
              We'll map your structure and automation opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Link href="/demo" onClick={() => track("cta_demo", { location: "platform_bottom" })}>
                <Button size="lg" className="w-full sm:w-auto">
                  Book a demo
                </Button>
              </Link>
              <Link href="/contact" onClick={() => track("cta_contact", { location: "platform_bottom" })}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Contact sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

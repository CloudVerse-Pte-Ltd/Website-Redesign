import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { HeroLogos } from "@/components/HeroLogos";
import { track } from "@/lib/track";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { DEMO_URL } from "@/lib/links";

const customerLogos = [
  { name: "Dr. Reddy's", src: "/logos/dr-reddys.svg", srcDark: "/logos/dr-reddys.svg", className: "brightness-110" },
  { name: "Infogain", src: "/logos/infogain.svg", srcDark: "/logos/infogain.svg", className: "brightness-125" },
  { name: "Max Life Insurance", src: "/logos/axis-max-life-insurance-logo.svg", srcDark: "/logos/axis-max-life-insurance-logo.svg", className: "brightness-150" },
  { name: "Shaw Industries", srcLight: "/logos/logo-dark-Shaw.svg", srcDark: "/logos/logo-white-Shaw.svg", className: "" },
  { name: "SISL Infotech", srcLight: "/logos/logo-1-1-sisl.svg", srcDark: "/logos/logo-light-sisl.svg", className: "" },
];

const heroOutcomesSet1 = [
  { title: "Unified Cost Visibility", desc: "Real-time view across all clouds and services" },
  { title: "Real-time Anomalies", desc: "Detect and predict cost spikes before impact" },
  { title: "Compliance Ready", desc: "Audit trails, access controls, and deployment options" },
  { title: "Multi-cloud Native", desc: "Support for AWS, Azure, GCP, and emerging platforms" },
  { title: "Audit-ready Reports", desc: "Automated compliance and chargeback documentation" },
];

const heroOutcomesSet2 = [
  { title: "Automated Optimization", desc: "AI-driven cost reduction and waste prevention" },
  { title: "ML-powered Recommendations", desc: "Smart sizing, reserved instances, and savings plans" },
  { title: "One-click Actions", desc: "Apply fixes with audit trails and rollback options" },
  { title: "Behavioral Learning", desc: "Adapt to workload patterns and seasonal changes" },
  { title: "Safety-first Guardrails", desc: "Enforce policies and prevent unintended changes" },
];

const supportedPlatforms = [
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "GCP", src: "/logos/gcp.svg" },
  { name: "Alibaba Cloud", src: "/logos/alibaba.svg" },
  { name: "Huawei Cloud", src: "/logos/huawei.svg" },
  { name: "Tencent Cloud", src: "/logos/tencent.svg" },
];

const gpuAiProviders = [
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "Databricks", src: "/logos/databricks.svg" },
];

export default function Home() {
  const [showSet2, setShowSet2] = useState(false);

  useEffect(() => {
    document.title = "CloudVerse™ — Cloud Financial Management";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSet2(prev => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BaseLayout>
      {/* Hero - Premium AIX-style Layout */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 lg:pb-16 relative overflow-hidden">
        <div className="hero-motion-bg absolute inset-0 -z-10" aria-hidden="true" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Copy Block (spans 6 cols) */}
            <div className="lg:col-span-6 text-left space-y-6 flex flex-col justify-center">
              <span className="cv-cap font-semibold tracking-widest text-cv-muted uppercase">
                CloudVerse™
              </span>
              <h1 className="cv-h1">
                Cloud financial management for modern enterprises.
              </h1>
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px] text-white/70">
                Visibility, allocation, anomalies, and automated optimization across cloud, data, and AI platforms.
              </p>
              
              {/* Deployment note */}
              <p className="text-[13px] sm:text-[14px] text-white/60 border-l-2 border-white/20 pl-4">
                Private deployment and air-gapped options available for regulated environments.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mt-6">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" data-track="cta_demo" onClick={() => track("cta_demo", { location: "hero" })}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Book a demo
                  </Button>
                </a>
                <Link href="#tour" data-track="cta_watch_tour" onClick={() => track("cta_watch_tour", { location: "hero" })}>
                  <Button variant="tertiary" size="lg" className="text-[14px] sm:text-[16px] lg:text-[17px] w-full sm:w-auto">
                    Watch 90-second tour
                  </Button>
                </Link>
              </div>
            </div>

            {/* Middle: Window Card with Outcomes */}
            <div className="lg:col-span-3 w-full flex items-center">
              <div className="w-full rounded-[28px] border border-white/10 bg-white/4 backdrop-blur-sm overflow-hidden">
                {/* Window Header */}
                <div className="bg-white/5 px-5 sm:px-6 py-3 sm:py-4 border-b border-white/10 flex items-center gap-2.5">
                  {/* Traffic lights */}
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
                      <div className={`absolute inset-0 transition-opacity duration-1000 ${showSet2 ? 'opacity-0' : 'opacity-100'}`}>
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
                      <div className={`absolute inset-0 transition-opacity duration-1000 ${showSet2 ? 'opacity-100' : 'opacity-0'}`}>
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
                              src={platform.src}
                              alt={platform.name}
                              className="h-6 w-auto grayscale opacity-80"
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
                                src={provider.src}
                                alt={provider.name}
                                className="h-5 w-auto grayscale opacity-80"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-12 md:py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-center text-[15px] leading-[24px] text-cv-muted mb-8">
            Used by FinOps teams at leading enterprises.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {customerLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.srcLight || logo.src || logo.srcDark}
                srcSet={logo.srcDark ? `${logo.srcLight || logo.src} 1x, ${logo.srcDark} 1x` : undefined}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className={`h-7 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale dark:hidden ${logo.className || ""}`}
              />
            ))}
            {customerLogos.filter(l => l.srcDark).map((logo) => (
              <img
                key={`${logo.name}-dark`}
                src={logo.srcDark}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className={`hidden dark:inline h-8 w-auto object-contain opacity-80 grayscale ${logo.className || ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Row - Typography Only */}
      <Section padding="primary">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="cv-h2">A single platform for visibility, accountability, and action.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-left">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">Visibility</h3>
            <p className="cv-body text-cv-muted">
              Unified, real-time cost views across clouds.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">Allocation</h3>
            <p className="cv-body text-cv-muted">
              Audit-ready showback and chargeback.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">Anomalies</h3>
            <p className="cv-body text-cv-muted">
              Detected and predicted spend spikes.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">Automation</h3>
            <p className="cv-body text-cv-muted">
              ML-driven actions applied automatically.
            </p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray" padding="utility">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="cv-h2 mb-3 sm:mb-4">How CloudVerse works</h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px] text-cv-muted">
            Connect once. Normalize everything. Automate what you can.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-left">
          <div className="relative pl-6 border-l-2 border-cv-ink/20 dark:border-cv-line">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">Connect</h3>
            <p className="text-cv-muted text-[15px]">Read-only connections with scoped permissions.</p>
          </div>
          <div className="relative pl-6 border-l-2 border-cv-ink/20 dark:border-cv-line">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">Normalize</h3>
            <p className="text-cv-muted text-[15px]">Unified taxonomy for accounts, tags, and services.</p>
          </div>
          <div className="relative pl-6 border-l-2 border-cv-ink/20 dark:border-cv-line">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">Automate</h3>
            <p className="text-cv-muted text-[15px]">Apply safe actions and measure outcomes.</p>
          </div>
        </div>
      </Section>

      {/* Feature Band 1: Developer FinOps */}
      <Section padding="primary">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <div className="flex-1 space-y-3 sm:space-y-4 text-left">
            <span className="cv-cap font-semibold tracking-widest uppercase text-cv-muted">
              Developer FinOps (Shift-Left)
            </span>
            <h2 className="cv-h2">Cost visibility where engineers work.</h2>
            <p className="cv-body text-cv-muted max-w-md">
              Bring cost context into engineering workflows—before changes ship.
            </p>
            <div className="pt-2">
              <Link href="/platform">
                <Button variant="tertiary" className="text-[14px] sm:text-[16px] lg:text-[17px]">
                  Explore Developer FinOps →
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full hidden md:block">
            <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line"></div>
          </div>
        </div>
      </Section>

      {/* Feature Band 2: Tag Engine */}
      <Section padding="primary">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-10 lg:gap-12">
          <div className="flex-1 space-y-3 sm:space-y-4 text-left">
            <span className="cv-cap font-semibold tracking-widest uppercase text-cv-muted">
              Autonomous Tag Engine
            </span>
            <h2 className="cv-h2">Clean allocation starts with clean dimensions.</h2>
            <p className="cv-body text-cv-muted max-w-md">
              Normalize tags, fix drift, and map resources to owners—so chargeback holds up under scrutiny.
            </p>
            <div className="pt-2">
              <Link href="/platform">
                <Button variant="tertiary" className="text-[14px] sm:text-[16px] lg:text-[17px]">
                  Explore Tag Engine →
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full hidden md:block">
            <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line"></div>
          </div>
        </div>
      </Section>

      {/* Feature Band 3: Anomalies + Automation */}
      <Section padding="primary">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <div className="flex-1 space-y-3 sm:space-y-4 text-left">
            <span className="cv-cap font-semibold tracking-widest uppercase text-cv-muted">
              Anomalies + Automation
            </span>
            <h2 className="cv-h2">Detect spikes. Predict risk. Act automatically.</h2>
            <p className="cv-body text-cv-muted max-w-md">
              Detected and predicted anomalies with ML-driven actions—so teams respond before the bill does.
            </p>
            <div className="pt-2">
              <Link href="/platform">
                <Button variant="tertiary" className="text-[14px] sm:text-[16px] lg:text-[17px]">
                  Explore Automation →
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full hidden md:block">
            <div className="aspect-[4/3] w-full rounded-cv bg-[#F5F5F7] dark:bg-cv-surface2 border border-cv-line"></div>
          </div>
        </div>
      </Section>

      {/* Security - Typography Only */}
      <Section padding="utility">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="cv-h2">Security and compliance, built in.</h2>
          <p className="cv-body text-cv-muted">
            Designed for enterprise environments—from access control to auditability.
          </p>
          <p className="text-sm text-cv-muted/80">
            Private deployment options—including air-gapped environments—available for regulated enterprises.
          </p>
          <p className="cv-cap font-semibold text-cv-muted pt-2">
            ISO 27001 • SOC 2 Type II
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section padding="primary" className="text-center">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
          <h2 className="cv-h2">See CloudVerse™ on your data.</h2>
          <p className="cv-body text-cv-muted">
            We'll map your spend structure and the fastest path to measurable savings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link href="/demo" data-track="cta_demo" onClick={() => track("cta_demo", { location: "bottom_cta" })}>
              <Button size="lg" className="w-full sm:w-auto">Book a demo</Button>
            </Link>
            <Link href="/contact" data-track="cta_contact" onClick={() => track("cta_contact", { location: "bottom_cta" })}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Contact sales</Button>
            </Link>
          </div>
        </div>
      </Section>
    </BaseLayout>
  );
}

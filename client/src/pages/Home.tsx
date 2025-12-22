import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { track } from "@/lib/track";
import { Link } from "wouter";
import { useEffect } from "react";

const customerLogos = [
  { name: "Dr. Reddy's", src: "/logos/dr-reddys.svg", srcDark: "/logos/dr-reddys.svg", className: "brightness-110" },
  { name: "Infogain", src: "/logos/infogain.svg", srcDark: "/logos/infogain.svg", className: "brightness-125" },
  { name: "Max Life Insurance", src: "/logos/axis-max-life-insurance-logo.svg", srcDark: "/logos/axis-max-life-insurance-logo.svg", className: "brightness-150" },
  { name: "Shaw Industries", srcLight: "/logos/logo-dark-Shaw.svg", srcDark: "/logos/logo-white-Shaw.svg", className: "" },
  { name: "SISL Infotech", srcLight: "/logos/logo-1-1-sisl.svg", srcDark: "/logos/logo-light-sisl.svg", className: "" },
];

export default function Home() {
  useEffect(() => {
    document.title = "CloudVerse™ — Cloud Financial Management";
  }, []);

  return (
    <BaseLayout>
      {/* Hero - Wide Layout with Motion Background */}
      <section className="pt-28 sm:pt-28 lg:pt-36 pb-24 sm:pb-24 lg:pb-32 relative overflow-hidden">
        <div className="hero-motion-bg absolute inset-0 -z-10" aria-hidden="true" />
        <div className="cv-container-full relative z-10">
          <div className="flex flex-col items-center gap-12 lg:gap-16 lg:items-stretch lg:flex-row">
            {/* Copy Block */}
            <div className="flex-1 text-left space-y-6 max-w-[42rem] flex flex-col justify-center">
              <span className="cv-cap font-semibold tracking-widest text-cv-muted uppercase">
                CloudVerse™
              </span>
              <h1 className="cv-h1">
                Cloud financial management for modern enterprises.
              </h1>
              <p className="max-w-[600px] text-[15px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px] text-white/70">
                Visibility, allocation, anomalies, and automated optimization across cloud, data, and AI platforms.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mt-10">
                <Link href="/demo" data-track="cta_demo" onClick={() => track("cta_demo", { location: "hero" })}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Book a demo
                  </Button>
                </Link>
                <Link href="/tour" data-track="cta_watch_tour" onClick={() => track("cta_watch_tour", { location: "hero" })}>
                  <Button variant="tertiary" size="lg" className="text-[14px] sm:text-[16px] lg:text-[17px] w-full sm:w-auto">
                    Watch 90-second tour
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="cv-container">
          <p className="text-center text-[15px] leading-[24px] text-cv-muted mb-8">
            Used by FinOps teams at leading enterprises.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-center gap-x-12 gap-y-10">
            {customerLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.srcLight || logo.src || logo.srcDark}
                srcSet={logo.srcDark ? `${logo.srcLight || logo.src} 1x, ${logo.srcDark} 1x` : undefined}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className={`h-8 w-auto object-contain opacity-80 grayscale dark:hidden ${logo.className || ""}`}
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

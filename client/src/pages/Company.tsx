import { BaseLayout } from "@/layouts/BaseLayout";
import { Button } from "@/components/Button";
import { track } from "@/lib/track";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Company() {
  useEffect(() => {
    document.title = "Company — CloudVerse™";
  }, []);

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/50">
              CLOUDVERSE™
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              About CloudVerse™
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
              We build cloud financial management software for modern enterprises operating across cloud, data, and AI platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Mission
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Give every enterprise complete visibility, allocation, and control over multi-cloud spend—while keeping teams fast, secure, and compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                What we do
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Unified visibility",
                    desc: "Real-time cost and usage across all clouds and platforms in one place",
                  },
                  {
                    title: "Allocation & chargeback",
                    desc: "Accurate cost allocation and chargeback models that map to business units",
                  },
                  {
                    title: "Anomalies",
                    desc: "Detected and predicted cost anomalies that alert teams before they impact budgets",
                  },
                  {
                    title: "Automation",
                    desc: "40+ ML-powered automation rules with safety guardrails to optimize spend 24/7",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                  >
                    <h3 className="text-white font-medium text-sm sm:text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                How we work
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Connect once",
                    desc: "One-time secure authentication with read-only, scoped cloud integrations",
                  },
                  {
                    title: "Normalize everything",
                    desc: "Multi-cloud cost data normalized into a unified, queryable data model",
                  },
                  {
                    title: "Automate with guardrails",
                    desc: "Behavioral ML detects patterns and automates optimization safely",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                  >
                    <h3 className="text-white font-medium text-sm sm:text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Trust & security
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Enterprise access controls",
                  "Audit-ready logs & exports",
                  "Private deployment",
                  "Air-gapped option",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                  >
                    <p className="text-white font-medium text-sm sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white/50 font-medium tracking-wider uppercase">
                ISO 27001 • SOC 2 Type II
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-12 sm:py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-8 sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3 sm:mb-4">
                See CloudVerse™ on your data.
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8">
                We'll map your spend structure and the fastest path to measurable savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/demo" onClick={() => track("cta_demo", { location: "company_cta" })}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Book a demo
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => track("cta_contact_sales", { location: "company_cta" })}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Contact sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

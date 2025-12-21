import { BaseLayout } from "@/layouts/BaseLayout";
import { Button } from "@/components/Button";
import { track } from "@/lib/track";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Security() {
  useEffect(() => {
    document.title = "Security — CloudVerse™";
  }, []);

  return (
    <BaseLayout>
      {/* Hero */}
      <section className="py-cv-sec-lg">
        <div className="max-w-[760px] mx-auto px-6 lg:px-12 text-center space-y-4 sm:space-y-6">
          <span className="text-xs uppercase tracking-widest text-cv-muted">Security</span>
          <h1 className="cv-h1">Security and compliance, built in.</h1>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-cv-muted">
            CloudVerse is designed for enterprise environments—from access control to auditability.
          </p>
          <p className="text-sm text-cv-muted/70 pt-2">
            ISO 27001 and SOC 2 Type II alignment.
          </p>
        </div>
      </section>

      {/* Security Principles */}
      <section className="py-cv-sec-md border-t border-cv-line">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="cv-h2 mb-8 text-center">Designed for enterprise trust.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Principle 1 */}
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-cv-ink mb-3">
                Least-privilege by default
              </h3>
              <p className="text-sm text-cv-muted">
                Connections are scoped and read-only wherever possible.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-cv-ink mb-3">
                Auditable actions
              </h3>
              <p className="text-sm text-cv-muted">
                Syncs and automation paths are logged for review.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-cv-ink mb-3">
                Data minimization
              </h3>
              <p className="text-sm text-cv-muted">
                Only the signals needed for reporting and automation are collected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Controls */}
      <section className="py-cv-sec-lg border-t border-cv-line">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="cv-h2 mb-8 text-center">Core security controls</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* SSO and identity */}
            <div className="flex items-start gap-4 py-4 lg:py-5 border-b border-white/10 lg:border-b-0 lg:border-r lg:pr-8">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">SSO and identity</h4>
                <p className="text-sm text-cv-muted">Supports enterprise SSO and directory-based access patterns.</p>
              </div>
            </div>

            {/* Role-based access */}
            <div className="flex items-start gap-4 py-4 lg:py-5 border-b border-white/10 lg:border-b-0 lg:border-l lg:pl-8">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">Role-based access</h4>
                <p className="text-sm text-cv-muted">Fine-grained permissions by org, workspace, and team.</p>
              </div>
            </div>

            {/* Scoped integrations */}
            <div className="flex items-start gap-4 py-4 lg:py-5 border-b border-white/10 lg:border-b-0 lg:border-r lg:pr-8">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">Scoped integrations</h4>
                <p className="text-sm text-cv-muted">Read-only, least-privilege access to billing and usage wherever possible.</p>
              </div>
            </div>

            {/* Audit logs */}
            <div className="flex items-start gap-4 py-4 lg:py-5 border-b border-white/10 lg:border-b-0 lg:border-l lg:pl-8">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">Audit logs</h4>
                <p className="text-sm text-cv-muted">Track sync activity, configuration changes, and automation actions.</p>
              </div>
            </div>

            {/* Data encryption */}
            <div className="flex items-start gap-4 py-4 lg:py-5 border-b border-white/10 lg:border-b-0 lg:border-r lg:pr-8">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">Data encryption</h4>
                <p className="text-sm text-cv-muted">Encryption in transit and at rest.</p>
              </div>
            </div>

            {/* Tenant isolation */}
            <div className="flex items-start gap-4 py-4 lg:py-5 border-b border-white/10 lg:border-b-0 lg:border-l lg:pl-8">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">Tenant isolation</h4>
                <p className="text-sm text-cv-muted">Multi-tenant boundaries by organization.</p>
              </div>
            </div>

            {/* Secure automation */}
            <div className="flex items-start gap-4 py-4 lg:py-5 border-b border-white/10 lg:border-b-0 lg:border-r lg:pr-8 lg:border-b">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">Secure automation</h4>
                <p className="text-sm text-cv-muted">Guardrails and approvals for safe actions.</p>
              </div>
            </div>

            {/* Export controls */}
            <div className="flex items-start gap-4 py-4 lg:py-5 lg:border-l lg:pl-8">
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-cv-ink mb-1">Export controls</h4>
                <p className="text-sm text-cv-muted">Controlled export for reports and billing data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Alignment */}
      <section className="py-cv-sec-lg border-t border-cv-line">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="cv-h2 mb-4">Compliance alignment</h2>
          <p className="text-sm text-cv-muted mb-6">
            CloudVerse is built to support common enterprise security reviews and compliance requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-medium px-3 py-1.5 rounded border border-white/10 bg-white/5 text-cv-muted">
              ISO 27001
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded border border-white/10 bg-white/5 text-cv-muted">
              SOC 2 Type II
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded border border-white/10 bg-white/5 text-cv-muted">
              GDPR-ready
            </span>
          </div>
        </div>
      </section>

      {/* Data Handling & Privacy */}
      <section className="py-cv-sec-lg border-t border-cv-line">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <h2 className="cv-h2 mb-6 text-center">Data handling</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-primary font-semibold mt-1 flex-shrink-0">•</span>
              <span className="text-sm text-cv-muted">Billing and usage signals are ingested to power reporting and automation.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-semibold mt-1 flex-shrink-0">•</span>
              <span className="text-sm text-cv-muted">Access is scoped and designed to be read-only wherever possible.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-semibold mt-1 flex-shrink-0">•</span>
              <span className="text-sm text-cv-muted">Customers control who can view, export, and act on data.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-cv-sec-lg border-t border-cv-line">
        <div className="max-w-[760px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="cv-h2 mb-3">Need a security review?</h2>
          <p className="text-sm text-cv-muted mb-6">
            We can share security documentation and answer vendor questionnaires.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" onClick={() => track("cta_contact_sales", { location: "security_cta" })}>
              <Button size="lg" className="w-full sm:w-auto">
                Contact sales
              </Button>
            </Link>
            <Link href="/demo" onClick={() => track("cta_demo", { location: "security_cta" })}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

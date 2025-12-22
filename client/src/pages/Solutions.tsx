import { BaseLayout } from "@/layouts/BaseLayout";
import { Button } from "@/components/Button";
import { MotionHero } from "@/components/MotionHero";
import { OutcomesWindow } from "@/components/OutcomesWindow";
import { track } from "@/lib/track";
import { Link } from "wouter";
import { useEffect } from "react";

const solutionOutcomes = [
  { title: "Audit-ready allocation", desc: "Showback and chargeback with clear ownership" },
  { title: "Detected + predicted anomalies", desc: "Catch spend spikes before month-end" },
  { title: "Automated optimization with guardrails", desc: "Safe actions with approvals and rollback" },
  { title: "Realized savings tracking", desc: "Measure actual impact, not estimates" },
];

const solutionCards = [
  {
    title: "Finance",
    description: "Control spend. Improve accountability. Close with confidence.",
    bullets: [
      "Audit-ready showback and chargeback",
      "Accurate cost allocation across teams",
      "Detected + predicted anomalies",
      "Realized savings tracking",
    ],
  },
  {
    title: "Engineering",
    description: "Build fast—without breaking the budget.",
    bullets: [
      "Shift-left cost visibility",
      "Actionable recommendations",
      "Fewer cloud/data/AI surprises",
      "Clear ownership mapping",
    ],
  },
  {
    title: "IT & Platform",
    description: "Standardize, govern, and automate at scale.",
    bullets: [
      "Unified taxonomy across clouds",
      "Autonomous tag normalization",
      "Guardrails for safe automation",
      "Enterprise access control",
    ],
  },
];

export default function Solutions() {
  useEffect(() => {
    document.title = "Solutions — CloudVerse";
  }, []);

  return (
    <BaseLayout>
      <MotionHero>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left space-y-4 sm:space-y-6 max-w-[44rem]">
            <span className="cv-cap font-semibold tracking-widest text-cv-muted uppercase">
              CloudVerse™ Solutions
            </span>
            <h1 className="cv-h1">
              Built for Finance, Engineering, and IT.
            </h1>
            <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px] text-cv-muted max-w-[40rem]">
              One platform to see, allocate, detect risk, and automate savings—without slowing teams down.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pt-4">
              <Link href="/demo" onClick={() => track("cta_demo", { location: "solutions_hero" })}>
                <Button size="lg" className="w-full sm:w-auto">
                  Book a demo
                </Button>
              </Link>
              <Link href="/platform" onClick={() => track("cta_explore_platform", { location: "solutions_hero" })}>
                <Button variant="tertiary" size="lg" className="w-full sm:w-auto">
                  Explore platform
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[640px] mx-auto lg:mx-0">
            <OutcomesWindow 
              label="What Teams Get"
              outcomes={solutionOutcomes}
            />
          </div>
        </div>
      </MotionHero>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="cv-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutionCards.map((card, idx) => (
              <div 
                key={idx} 
                className="border border-cv-line rounded-2xl p-6 sm:p-8 bg-cv-surface2 flex flex-col h-full"
              >
                <h3 className="text-xl font-semibold text-cv-ink mb-2">{card.title}</h3>
                <p className="text-sm text-cv-muted mb-6">{card.description}</p>
                <ul className="space-y-3 mt-auto">
                  {card.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3 text-sm text-cv-muted">
                      <span className="text-blue-400 font-semibold mt-0.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14 border-t border-cv-line">
        <div className="cv-container text-center">
          <div className="max-w-[600px] mx-auto space-y-4">
            <h2 className="cv-h2">See CloudVerse™ on your data.</h2>
            <div className="pt-2">
              <Link href="/demo" onClick={() => track("cta_demo", { location: "solutions_bottom" })}>
                <Button size="lg">
                  Book a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

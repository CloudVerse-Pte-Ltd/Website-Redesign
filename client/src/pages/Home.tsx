import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { track } from "@/lib/track";
import { ArrowRight, Check, Shield, BarChart3, PieChart, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <BaseLayout>
      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-48 md:pb-32 text-center">
        <h1 className="max-w-4xl mx-auto mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Cloud financial management for modern engineering.
        </h1>
        <p className="text-[21px] leading-[32px] text-muted-foreground max-w-2xl mx-auto mb-10">
          Real-time visibility, allocation, and AI-driven optimization across AWS, Azure, and GCP—built for Finance and Engineering.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/demo" onClick={() => track("cta_demo", { location: "hero" })}>
            <Button size="lg" className="w-full sm:w-auto">
              Book a demo
            </Button>
          </Link>
          <Link href="/tour" onClick={() => track("cta_watch_tour", { location: "hero" })}>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
              Watch 90-second tour <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        {/* Hero Image/Screenshot Placeholder */}
        <div className="relative mx-auto max-w-[1000px] aspect-[16/9] bg-gradient-to-b from-secondary/50 to-secondary rounded-[24px] border border-border/50 shadow-2xl overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 bg-secondary/10 backdrop-blur-[1px] z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <span className="text-sm font-medium text-muted-foreground">Interactive Demo Preview</span>
          </div>
          <img 
             src="/assets/cloudverse-import/hero-dashboard.png" 
             alt="CloudVerse Dashboard" 
             className="w-full h-full object-cover"
             onError={(e) => {
               // Fallback if image not imported yet
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement!.classList.add('bg-slate-100');
               e.currentTarget.parentElement!.innerHTML += '<div class="text-slate-400 font-medium">Dashboard Screenshot Placeholder</div>';
             }}
          />
        </div>
      </Section>

      {/* Trusted By */}
      <Section className="py-12 border-y border-border/40">
        <p className="text-center text-[13px] font-semibold text-muted-foreground mb-8 uppercase tracking-widest">Trusted by engineering teams at</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
           {/* Placeholders for logos */}
           {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Horizon'].map(company => (
             <div key={company} className="text-xl font-bold font-serif">{company}</div>
           ))}
        </div>
      </Section>

      {/* 3 Pillars */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Visibility</h3>
            <p className="text-muted-foreground">
              See all your cloud costs in one place with real-time dashboards and granular breakdown.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
              <PieChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Allocation</h3>
            <p className="text-muted-foreground">
              Automatically attribute 100% of costs to teams, features, and products with AI tagging.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Optimization</h3>
            <p className="text-muted-foreground">
              Cut waste with automated recommendations for idle resources, rightsizing, and spots.
            </p>
          </Card>
        </div>
      </Section>

      {/* How it works */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">How CloudVerse works</h2>
          <p className="text-muted-foreground">
            We connect to your cloud providers, normalize the billing data, and provide actionable insights in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 text-center">
            {['Connect', 'Normalize', 'Act', 'Automate'].map((step, i) => (
              <div key={step} className="relative">
                 <div className="text-[60px] font-bold text-border/40 mb-2">0{i+1}</div>
                 <h4 className="text-lg font-semibold">{step}</h4>
              </div>
            ))}
        </div>
      </Section>
      
      {/* Security Strip */}
      <Section className="py-24">
        <div className="flex flex-col md:flex-row items-center justify-between bg-zinc-900 text-white rounded-[32px] p-12 overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-semibold mb-4 text-white">Enterprise-grade Security</h2>
            <p className="text-zinc-400 mb-8 text-lg">
              SOC 2 Type II certified and GDPR compliant. Your data is encrypted at rest and in transit.
            </p>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-full">
                 <Shield className="w-4 h-4" /> SOC 2 Type II
               </div>
               <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-full">
                 <Shield className="w-4 h-4" /> ISO 27001
               </div>
            </div>
          </div>
          {/* Abstract Security Graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-indigo-600/20 to-transparent pointer-events-none"></div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center pb-32">
        <h2 className="mb-6">Ready to optimize your cloud spend?</h2>
        <div className="flex justify-center gap-4">
          <Link href="/demo">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Contact Sales</Button>
          </Link>
        </div>
      </Section>
    </BaseLayout>
  );
}

import { BaseLayout } from "@/layouts/BaseLayout";
import { Section } from "@/components/Section";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { track } from "@/lib/track";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <BaseLayout>
      <Section className="pt-32 text-center">
        <h1 className="mb-6">Simple, transparent pricing.</h1>
        <p className="text-xl text-muted-foreground mb-12">Start free, upgrade as you grow.</p>

        {/* Toggle Island */}
        <div className="inline-flex bg-secondary p-1 rounded-full mb-16">
          <button
            onClick={() => { setBilling("monthly"); track("pricing_toggle", { value: "monthly" }); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              billing === "monthly" ? "bg-white shadow-sm" : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => { setBilling("annual"); track("pricing_toggle", { value: "annual" }); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              billing === "annual" ? "bg-white shadow-sm" : "text-muted-foreground"
            }`}
          >
            Annual <span className="text-green-600 text-xs ml-1 font-bold">-20%</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Starter */}
          <Card className="relative">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-6">
              $0 <span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> Up to $10k cloud spend</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> 1 User</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> AWS Only</li>
            </ul>
            <Button className="w-full" variant="outline">Start Free</Button>
          </Card>

          {/* Professional */}
          <Card className="border-primary ring-1 ring-primary/10 bg-primary/5">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl font-medium">
              Popular
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Professional</h3>
            <div className="text-3xl font-bold mb-6">
              {billing === 'annual' ? '$499' : '$599'} <span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> Up to $500k cloud spend</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> 5 Users</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> AWS, Azure, GCP</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> Cost Allocation</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </Card>

          {/* Enterprise */}
          <Card>
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-6">
              Custom
            </div>
            <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> Unlimited spend</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> Unlimited Users</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> SSO & RBAC</li>
               <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary"/> Dedicated Success Manager</li>
            </ul>
            <Button className="w-full" variant="secondary">Contact Sales</Button>
          </Card>
        </div>
      </Section>
    </BaseLayout>
  );
}

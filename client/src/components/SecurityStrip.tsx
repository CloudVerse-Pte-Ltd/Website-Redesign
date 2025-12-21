import { Section } from "./Section";
import { Button } from "./Button";
import { Link } from "wouter";
import { Shield } from "lucide-react";
import { Badge } from "./Badge";

export function SecurityStrip() {
  return (
    <Section padding="primary">
      <div className="bg-cv-ink text-cv-surface rounded-[32px] p-12 lg:p-16 relative overflow-hidden flex flex-col items-center text-center">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-[40px] leading-[46px] font-semibold tracking-tight">
            Security and compliance, built in.
          </h2>
          <p className="text-[17px] leading-[28px] text-zinc-400">
            CloudVerse™ is designed for enterprise security—from access controls to auditability.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 items-center pt-2 grayscale opacity-90">
             <img src="/assets/cloudverse-import/images/aboutUs/iso.png" alt="ISO 27001" className="h-16 w-auto" />
             <img src="/assets/cloudverse-import/images/aboutUs/aicpa.png" alt="SOC 2 Type II" className="h-16 w-auto" />
          </div>
          
          <div className="pt-4">
            <Link href="/security">
               <a className="inline-flex items-center text-primary-foreground hover:opacity-80 transition-opacity font-medium">
                 Visit Security <span className="ml-1">→</span>
               </a>
            </Link>
          </div>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </Section>
  );
}

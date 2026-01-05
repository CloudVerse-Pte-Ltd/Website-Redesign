import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PillarCard({ icon: Icon, title, description }: PillarCardProps) {
  return (
    <div className="rounded-2xl border border-cv-line bg-cv-surface2/50 dark:bg-white/5 p-6 sm:p-7 hover:bg-cv-surface2 dark:hover:bg-white/[0.06] transition-all duration-300 h-full">
      <Icon className="w-10 h-10 text-blue-400 mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-cv-ink mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-cv-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

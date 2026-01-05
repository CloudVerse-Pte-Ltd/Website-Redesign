interface OutcomeTileProps {
  title: string;
  description: string;
}

export function OutcomeTile({ title, description }: OutcomeTileProps) {
  return (
    <div className="rounded-2xl border border-cv-line bg-cv-surface2/50 dark:bg-white/5 p-6 sm:p-8 hover:bg-cv-surface2 dark:hover:bg-white/[0.06] transition-all duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-cv-ink mb-3">
        {title}
      </h3>
      <p className="text-base text-cv-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

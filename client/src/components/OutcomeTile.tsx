interface OutcomeTileProps {
  title: string;
  description: string;
}

export function OutcomeTile({ title, description }: OutcomeTileProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-base text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

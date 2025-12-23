interface StepCardProps {
  number: "01" | "02" | "03";
  title: string;
  body: string;
  bullets: string[];
}

export function StepCard({ number, title, body, bullets }: StepCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="text-sm font-semibold text-blue-400 mb-2">
        STEP {number}
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
        {title}
      </h3>
      <p className="text-base text-white/70 mb-5">
        {body}
      </p>
      <ul className="space-y-3">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
            <span className="text-sm text-white/70">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

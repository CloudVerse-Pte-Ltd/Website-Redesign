interface Outcome {
  title: string;
  desc: string;
}

interface OutcomesWindowProps {
  label: string;
  outcomes: Outcome[];
}

export function OutcomesWindow({ label, outcomes }: OutcomesWindowProps) {
  return (
    <div className="w-full rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
      <div className="bg-white/5 px-5 sm:px-6 py-3 sm:py-4 border-b border-white/10 flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
        </div>
        <span className="text-xs tracking-[0.28em] uppercase text-white/55 font-semibold ml-auto">
          {label}
        </span>
      </div>
      <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
        {outcomes.map((outcome, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="flex-1">
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-blue-400 mb-1">
                {outcome.title}
              </h4>
              <p className="text-[12px] sm:text-[13px] text-gray-400">
                {outcome.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

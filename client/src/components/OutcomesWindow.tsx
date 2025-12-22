import { useEffect, useState } from "react";

interface Outcome {
  title: string;
  desc: string;
}

interface OutcomesWindowProps {
  label: string;
  outcomes: Outcome[];
  outcomeSet2?: Outcome[];
  providers?: Array<{ name: string; src: string }>;
}

export function OutcomesWindow({ label, outcomes, outcomeSet2, providers }: OutcomesWindowProps) {
  const [showSet2, setShowSet2] = useState(false);
  const hasMultipleSets = !!outcomeSet2;
  
  // Respect prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (hasMultipleSets && !prefersReducedMotion) {
      const interval = setInterval(() => {
        setShowSet2(prev => !prev);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleSets, prefersReducedMotion]);

  const currentOutcomes = !prefersReducedMotion && showSet2 && outcomeSet2 ? outcomeSet2 : outcomes;

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

      <div className="p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Outcomes List with crossfade */}
          <div className="flex-1 relative min-h-[280px] sm:min-h-[320px]">
            <div
              className={`absolute inset-0 transition-opacity ${hasMultipleSets ? 'duration-1000' : ''} ${
                showSet2 && hasMultipleSets ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="space-y-4 sm:space-y-5">
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

            {outcomeSet2 && (
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  showSet2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="space-y-4 sm:space-y-5">
                  {outcomeSet2.map((outcome, idx) => (
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
            )}
          </div>

          {/* Right Column: Providers */}
          {providers && providers.length > 0 && (
            <div className="flex-1 flex flex-col border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-6">
              <h5 className="text-[11px] sm:text-[12px] font-semibold tracking-widest text-white/50 uppercase mb-4">
                Supported Platforms
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
                {providers.map((provider) => (
                  <div key={provider.name} className="flex items-center justify-center">
                    <img
                      src={provider.src}
                      alt={provider.name}
                      className="h-6 w-auto grayscale opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

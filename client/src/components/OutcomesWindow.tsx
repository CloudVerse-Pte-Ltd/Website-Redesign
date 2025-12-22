import { useEffect, useState } from "react";

interface Outcome {
  title: string;
  desc: string;
}

interface Provider {
  name: string;
  src: string;
}

interface OutcomesWindowProps {
  label: string;
  outcomes: Outcome[];
  outcomeSet2?: Outcome[];
  cloudProviders?: Provider[];
  aiProviders?: Provider[];
}

export function OutcomesWindow({ 
  label, 
  outcomes, 
  outcomeSet2, 
  cloudProviders = [],
  aiProviders = [],
}: OutcomesWindowProps) {
  const [showSet2, setShowSet2] = useState(false);
  const hasMultipleSets = !!outcomeSet2;
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
  const hasProviders = cloudProviders.length > 0 || aiProviders.length > 0;

  return (
    <div className="w-full rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
      {/* Header - Refined */}
      <div className="bg-white/[0.03] px-6 py-4 border-b border-white/10 flex items-center gap-2">
        {/* Traffic light dots - smaller */}
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
        </div>
        {/* Title on left */}
        <span className="text-xs tracking-[0.24em] uppercase text-white/55 font-semibold">
          {label}
        </span>
      </div>

      {/* Body - 2-column grid */}
      <div className="p-6">
        <div className={`grid ${hasProviders ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-10 lg:gap-12`}>
          {/* Left: Outcomes List */}
          <div className="relative min-h-[260px]">
            {/* Set 1 */}
            <div
              className={`absolute inset-0 transition-opacity ${hasMultipleSets ? 'duration-1000' : ''} ${
                showSet2 && hasMultipleSets ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="space-y-5">
                {currentOutcomes.slice(0, 4).map((outcome, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <h4 className="text-[15px] font-semibold text-[#5b9dff]">
                      {outcome.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-6">
                      {outcome.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Set 2 */}
            {outcomeSet2 && (
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  showSet2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="space-y-5">
                  {(showSet2 ? outcomeSet2 : outcomes).slice(0, 4).map((outcome, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <h4 className="text-[15px] font-semibold text-[#5b9dff]">
                        {outcome.title}
                      </h4>
                      <p className="text-sm text-white/70 leading-6">
                        {outcome.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Supported Platforms & Providers */}
          {hasProviders && (
            <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-6">
              {/* Header */}
              <h5 className="text-xs uppercase tracking-widest text-white/45 font-semibold mb-6">
                Supported
              </h5>

              {/* Cloud Providers Section */}
              {cloudProviders.length > 0 && (
                <div className="mb-6">
                  <h6 className="text-[11px] uppercase tracking-widest text-white/60 font-semibold mb-3">
                    Cloud
                  </h6>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {cloudProviders.map((provider) => (
                      <div
                        key={provider.name}
                        className="rounded-xl border border-white/30 bg-white/[0.12] dark:bg-white/[0.08] h-11 flex items-center justify-center px-3 transition-all hover:bg-white/16 dark:hover:bg-white/12"
                      >
                        <img
                          src={provider.src}
                          alt={provider.name}
                          className="h-5 w-auto brightness-0 dark:brightness-100 dark:invert-0 invert"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AI & Data Providers Section */}
              {aiProviders.length > 0 && (
                <div>
                  <h6 className="text-[11px] uppercase tracking-widest text-white/60 font-semibold mb-3">
                    AI & Data
                  </h6>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    {aiProviders.map((provider) => (
                      <div
                        key={provider.name}
                        className="rounded-xl border border-white/30 bg-white/[0.12] dark:bg-white/[0.08] h-11 flex items-center justify-center px-3 transition-all hover:bg-white/16 dark:hover:bg-white/12"
                      >
                        <img
                          src={provider.src}
                          alt={provider.name}
                          className="h-5 w-auto brightness-0 dark:brightness-100 dark:invert-0 invert"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hint text */}
              <p className="text-xs text-white/35 mt-auto">
                Kubernetes, SaaS, and more available.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

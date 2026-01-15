import { ReactNode } from "react";

interface MotionHeroProps {
  children: ReactNode;
}

export function MotionHero({ children }: MotionHeroProps) {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      <div className="hero-motion-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="cv-container-full relative z-10 pl-[48px] pr-[48px]">
        {children}
      </div>
    </section>
  );
}

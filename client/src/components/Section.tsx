import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 px-6",
        background === "gray" ? "bg-secondary/30" : "bg-background",
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

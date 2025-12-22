interface SolutionPreviewPanelProps {
  eyebrow: string;
  title: string;
  lines: string[];
}

export function SolutionPreviewPanel({ eyebrow, title, lines }: SolutionPreviewPanelProps) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6 md:p-8 flex flex-col h-full">
      {/* Eyebrow */}
      <span className="text-xs uppercase tracking-widest text-cv-muted font-medium mb-4">
        {eyebrow}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold text-cv-ink mb-6">
        {title}
      </h3>

      {/* Lines */}
      <div className="space-y-3 mb-8 flex-1">
        {lines.map((line, idx) => (
          <div key={idx} className="text-sm text-cv-muted">
            {line}
          </div>
        ))}
      </div>

      {/* Subtle preview structure */}
      <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-white/10">
        {[1, 2, 3, 4].map((row) => (
          <div key={row} className="flex gap-3 items-center">
            <div className="h-3 w-3 rounded-sm bg-cv-line/30"></div>
            <div className="flex-1 h-2 bg-cv-line/20 rounded"></div>
            <div className="h-2 w-8 bg-cv-line/25 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

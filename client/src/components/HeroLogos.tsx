export function HeroLogos() {
  const providers = [
    { name: "AWS", color: "#FF9900", src: "/logos/aws-colored.svg" },
    { name: "Azure", color: "#0078D4", src: "/logos/azure-colored.svg" },
    { name: "Google Cloud", color: "#4285F4", src: "/logos/gcp-colored.svg" },
    { name: "Oracle", color: "#F80000", customSvg: true },
    { name: "Alibaba", color: "#FF6B00", src: "/logos/alibaba-colored.svg" },
    { name: "Huawei", color: "#DC143C", src: "/logos/huawei-colored.svg" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-10 w-full">
      {/* Title */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-cv-muted font-semibold mb-4">
          Supported Cloud Providers
        </p>
      </div>

      {/* Logo Grid - 2x3 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-sm">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="flex items-center justify-center h-24 rounded-xl border border-cv-line bg-cv-surface2/50 dark:bg-white/5 hover:border-cv-line hover:bg-cv-surface2 dark:hover:bg-white/[0.12] transition-all backdrop-blur-sm p-3"
          >
            {provider.customSvg ? (
              // Oracle logo - custom SVG
              <svg viewBox="0 0 40 40" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#F80000" fontSize="20" fontWeight="bold" fontFamily="Arial">
                  OC
                </text>
              </svg>
            ) : provider.src ? (
              <img
                src={provider.src}
                alt={provider.name}
                className="h-12 w-12 object-contain"
              />
            ) : (
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: provider.color + "25",
                  border: `2px solid ${provider.color}`,
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: provider.color }}
                >
                  {provider.name[0]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Supporting text */}
      <p className="text-xs text-cv-muted text-center max-w-xs">
        Enterprise cloud coverage across major global providers
      </p>
    </div>
  );
}

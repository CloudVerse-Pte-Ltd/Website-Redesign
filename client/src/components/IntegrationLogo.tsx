interface IntegrationLogoProps {
  name: string;
  logo?: {
    src: string;
    alt: string;
    invert?: boolean;
  };
  size?: number;
}

function getInitials(name: string): string {
  const words = name.replace(/[:\-()]/g, ' ').split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function IntegrationLogo({ name, logo, size = 22 }: IntegrationLogoProps) {
  if (logo?.src) {
    return (
      <img
        src={logo.src}
        alt={logo.alt}
        className={`object-contain opacity-90 ${logo.invert ? 'dark:invert' : ''}`}
        style={{ height: size, width: size }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
        aria-label={`${name} logo`}
      />
    );
  }

  const initials = getInitials(name);

  return (
    <div
      className="rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-semibold text-cv-muted"
      style={{ height: size, width: size }}
      aria-label={`${name} logo`}
    >
      {initials}
    </div>
  );
}

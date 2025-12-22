import { useState } from 'react';

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
  const [imgFailed, setImgFailed] = useState(false);
  const initials = getInitials(name);

  // If no logo or image failed to load, show monogram
  if (!logo?.src || imgFailed) {
    return (
      <div
        className="rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-semibold text-cv-muted"
        style={{ height: size, width: size }}
        aria-label={`${name} logo`}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      className="object-contain dark:brightness-0 dark:invert"
      style={{ height: size, width: size }}
      onError={() => setImgFailed(true)}
      aria-label={`${name} logo`}
    />
  );
}

/**
 * Centralized link configuration for CloudVerse
 * External URLs and internal routes
 */

// External Authentication
export const SIGNIN_URL = "https://id.cloudverse.ai";
export const DEMO_URL = "https://meetings.hubspot.com";

// Internal Routes
export const ROUTES = {
  home: "/",
  platform: "/platform",
  solutions: "/solutions",
  integrations: "/integrations",
  security: "/security",
  resources: "/resources",
  resourcesGuides: "/resources/guides",
  resourcesDocs: "/resources/docs",
  pricing: "/pricing",
  company: "/company",
  contact: "/contact",
  partners: "/partners",
  help: "/help",
  tour: "/tour",
  bookDemo: "/book-demo",
} as const;

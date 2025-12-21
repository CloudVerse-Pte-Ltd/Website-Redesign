# replit.md

## Overview

CloudVerse is a marketing website for a cloud financial management SaaS platform. The site targets enterprise Finance, Engineering, and IT teams, showcasing features like multi-cloud cost visibility, allocation/chargeback, anomaly detection, and automated optimization. Built with a React frontend and Express backend, the site follows Apple Developer-style aesthetics (minimal, calm, product-led) with dark mode as the default theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with custom design tokens for CloudVerse branding
- **Components**: Shadcn/ui components (Radix primitives) with custom CloudVerse components
- **State Management**: TanStack React Query for server state; local React state for UI
- **Theme**: next-themes for dark/light mode toggle (dark mode default)

### Design System
- **Typography tokens**: `cv-h1`, `cv-h2`, `cv-h3`, `cv-body`, `cv-cap` defined in CSS
- **Spacing tokens**: `cv-sec-xl` (88px), `cv-sec-lg` (64px), `cv-sec-md` (44px)
- **Color tokens**: `cv-ink`, `cv-muted`, `cv-line`, `cv-surface`, `cv-surface2`
- **Container utilities**: `cv-container` (1200px max), `cv-container-wide` (1440px), `cv-container-full` (1600px)

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Pattern**: RESTful routes prefixed with `/api`
- **Static Serving**: Express serves the Vite-built frontend from `dist/public`
- **Database**: PostgreSQL via Drizzle ORM (schema in `shared/schema.ts`)
- **Storage Layer**: Abstracted via `IStorage` interface with in-memory fallback

### Build System
- **Client**: Vite builds to `dist/public`
- **Server**: esbuild bundles server to `dist/index.cjs`
- **Scripts**: `npm run dev` for development, `npm run build` for production

### Key Pages
- Home, Platform, Solutions, Integrations, Pricing, Security, Company, Resources (with nested routes for guides/docs), Contact
- Redirects configured for legacy URLs (`/about-us` → `/company`, `/blog` → `/resources`)

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and queries
- **drizzle-kit**: Database migrations (`npm run db:push`)

### Third-Party Services
- **Tracking**: Vendor-agnostic abstraction in `lib/track.ts` (ready for GTM/GA/PostHog integration)
- **Fonts**: `@fontsource/inter` for Inter typeface

### UI Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **cmdk**: Command palette component
- **date-fns**: Date formatting utilities

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner`: Development helpers
- Custom `vite-plugin-meta-images`: Updates OpenGraph meta tags with Replit deployment URLs
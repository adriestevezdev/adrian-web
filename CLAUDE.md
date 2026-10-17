# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for Adrià Estévez's AI community and courses, featuring newsletter subscription, user authentication, and course offerings. The project uses React 19, TypeScript, and Tailwind CSS with a dark theme design.

## Development Commands

```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build            # Build production version
pnpm start            # Start production server
pnpm lint             # Run Next.js linting

# Package manager: Uses pnpm (see pnpm-lock.yaml)
```

## Environment Variables

Required environment variables (see `.env.example`):
- `NEXT_PUBLIC_API_URL` - Django backend API URL (default: `http://127.0.0.1:8000/api`)
- `SITE_URL` - Public URL used in email links
- `DATABASE_URL` - Postgres connection string for the funnel
- `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_REPLY_TO` - Email sending via Resend (without the key, emails are logged to the console)
- `ADMIN_USER`, `ADMIN_PASSWORD` - Basic auth for `/embudo` (password of 24+ characters and not the example one, otherwise `/embudo` answers 503)

## Architecture & Key Systems

### Waitlist (lista de espera + emails a la lista)
- **Flow**: `/` (waitlist landing, email capture) → confirmation email (double opt-in) → `/confirmar` (button that POSTs to `/api/confirm`, so link scanners don't confirm) → welcome email. Emails to the whole list (newsletter, seat openings) are written and sent from `/embudo`. WhatsApp (`/wa`) is only for questions
- **Config**: `src/config/funnel.ts` - member login URL (`/acceso`, placeholder login page in `src/app/acceso/` that does nothing yet; `/login` is taken by the community platform in nginx), hero video, course phases shown on the landing. Keep the courses in sync with the real classroom
- **Landing**: `src/app/page.tsx` + `src/components/Waitlist/` (form, hero video, sections)
- **Database**: `src/lib/db.ts` (Postgres via `pg`, schema created on first query; migrations also kept as SQL in `migrations/` to run before deploying) and `src/lib/leads.ts`. Only leads with `confirmed_at` and no `unsubscribed_at` count as subscribed (count, CSV export, broadcasts). A public signup never undoes an unsubscribe: it sends a "¿quieres volver?" email instead
- **Emails**: `src/emails/confirm.ts` (confirmation / come-back copy, capped per lead in `src/lib/mailing.ts`: 3 confirmations one day apart, 3 come-backs six months apart; sent with `after()` so the response time doesn't reveal who is already on the list), `src/emails/welcome.ts` (welcome copy), `src/emails/render.ts`, `src/lib/mailing.ts` (welcome + broadcasts, batched through Resend in `src/lib/email.ts`). `email_log` has UNIQUE (lead_id, email_key) so nobody gets the same email twice; re-sending a broadcast only retries failures and new people
- **Tracking**: `/wa?src=` logs each WhatsApp click before redirecting; UTMs are stored on signup
- **Unsubscribe**: `/baja` page + `/api/unsubscribe` (also handles one-click List-Unsubscribe)
- **Admin**: `/embudo` (basic auth via `src/middleware.ts`; `/admin` belongs to the community platform in production): stats, "Emails a la lista" editor (test, preview, send) and leads table. Customers and unsubscribed people don't get broadcasts

### Production deployment
- Production does NOT use `docker-compose.prod.yml`/Traefik: nginx (`/etc/nginx/sites-enabled/arquitectos-ia.conf`) proxies the landing on 127.0.0.1:3004 (systemd `arquitectos-ia-landing.service`, code in `/srv/arquitectos-ia/landing/current`, env in `/etc/arquitectos-ia/landing.env`) and a community platform on 3002 for `/login`, `/community`, `/admin`…
- Postgres 16 runs natively on the server (database `embudo`)

### Authentication System
- **Service**: `src/services/auth.ts` - JWT-based authentication with localStorage
- **Components**: Auth modals in `src/components/Auth/`
- **Backend**: Communicates with Django backend via `src/services/api.ts`
- **Features**: Registration, login, profile management, avatar uploads

### Cookie Consent & Analytics Integration
- **Library**: `vanilla-cookieconsent` for GDPR-compliant cookie consent
- **Components**:
  - `src/components/CookieConsent.tsx` - Main consent modal configuration
  - `src/components/MetaPixel.tsx` - Conditionally loads Meta Pixel based on consent
- **Flow**: Meta Pixel only loads after user accepts analytics cookies
- **Custom Styles**: `src/app/cookieconsent-custom.css` for consent modal styling
- **Categories**: Necessary (always enabled) and Analytics (opt-in for Meta Pixel)

### UI Components Structure
```
src/components/
├── Newsletter/           # Landing page sections (modular newsletter components)
│   ├── waitlist/        # Email capture form
│   ├── benefits/        # Features and benefits
│   ├── community/       # Community showcase
│   ├── pricing/         # Pricing tiers
│   └── courses/         # Course offerings
├── Auth/                # Authentication modals and flows
├── magicui/            # Animated UI components (beams, cards, etc.)
└── ui/                 # Base UI components (shadcn/ui style)
```

### Styling System
- **Framework**: Tailwind CSS with custom animations and keyframes
- **Theme**: Dark mode only (`className="dark"` in layout)
- **Animations**: Extensive custom animations defined in `tailwind.config.ts`
- **Fonts**: Geist font family optimized with `next/font`
- **Custom CSS Files**:
  - `src/styles/transitions.css` - Page transition animations
  - `src/app/cookieconsent-custom.css` - Cookie consent modal styling
  - `src/app/globals.css` - Global styles and Tailwind imports

### API Integration Pattern
- **Base Service**: `src/services/api.ts` - centralized API client
- **Route Handlers**: Next.js App Router API routes in `src/app/api/`
- **Error Handling**: Comprehensive error handling with user-friendly messages

### Image Handling
- **Service**: `src/services/imageUpload.ts` - handles local image uploads
- **Configuration**: Remote patterns configured in `next.config.ts` for external images
- **Security**: CSP headers for SVG handling

## Key Development Patterns

### Component Architecture
- **Client Components**: Most components use `"use client"` directive
- **Modular Design**: Newsletter sections are separate, reusable components
- **Type Safety**: Full TypeScript integration with interface definitions

### State Management
- **Local State**: React hooks for component state
- **Auth State**: Event-based system in `authService` with localStorage persistence
- **API State**: Service layer pattern with error handling

### Deployment Configuration
- **Containerization**: Dockerfile and docker-compose.prod.yml for production
- **Reverse Proxy**: Traefik configuration in `/traefik/` directory
- **Environment**: Supports both development and production configurations

## Data Flow
1. **User Actions**: Forms and interactions trigger service calls
2. **API Layer**: Next.js API routes handle external API communication
3. **Services**: Business logic encapsulated in service files
4. **Components**: React components consume services and display UI

## Important Notes
- Uses pnpm as package manager (not npm/yarn)
- Dark theme is hardcoded in layout.tsx
- Funnel data lives in our own Postgres (no Beehiiv)
- Authentication system expects Django backend API
- All animations and transitions are custom-built with Tailwind
- Cookie consent and Meta Pixel components exist but are not currently mounted in layout.tsx
- API service automatically handles trailing slashes to avoid Django 301 redirects
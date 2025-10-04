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
- `BEEHIIV_API_KEY` - Beehiiv API key for newsletter integration
- `BEEHIIV_PUB_ID` - Beehiiv publication ID

## Architecture & Key Systems

### Newsletter System (Beehiiv Integration)
- **API Routes**: `/api/newsletter/beehiiv-subscribe` and `/api/newsletter/beehiiv-count`
- **Service**: `src/services/beehiiv.ts` - handles subscription creation and subscriber counting
- **Environment Variables Required**: `BEEHIIV_API_KEY`, `BEEHIIV_PUB_ID`
- **Key Feature**: Intelligent duplicate handling - treats existing subscribers as success cases

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
- Beehiiv integration includes smart duplicate subscriber handling
- Authentication system expects Django backend API
- All animations and transitions are custom-built with Tailwind
- Cookie consent and Meta Pixel are loaded globally in layout.tsx
- API service automatically handles trailing slashes to avoid Django 301 redirects
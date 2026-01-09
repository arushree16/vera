# Vera - AI-Powered Skincare Compatibility Platform

## Overview

Vera is a modern, production-ready startup landing website for an AI-powered skincare compatibility platform. The application helps users prevent adverse skin reactions by analyzing skin conditions, product ingredients, climate factors, and personal context before product application.

The project is a full-stack TypeScript application with a React frontend and Express backend, featuring a waitlist signup system for early access.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript (non-RSC, client-side rendering)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for scroll reveals and page animations
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx for development, esbuild for production
- **API Pattern**: RESTful endpoints under /api prefix
- **Request Handling**: JSON body parsing with raw body preservation for webhooks

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Migrations**: Drizzle Kit with migrations in /migrations directory

### Shared Code Pattern
The `/shared` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod validation schemas
- `routes.ts`: API route definitions with input/output types for type-safe API calls

### Build System
- **Development**: tsx runs TypeScript directly with Vite dev server for HMR
- **Production**: 
  - Frontend: Vite builds to dist/public
  - Backend: esbuild bundles to dist/index.cjs with selective dependency bundling
- **Database**: `npm run db:push` for schema synchronization

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via DATABASE_URL environment variable
- **connect-pg-simple**: Session storage for Express sessions

### UI/Component Libraries
- **Radix UI**: Full suite of accessible UI primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component system configured in components.json
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **cmdk**: Command palette component
- **vaul**: Drawer component

### Styling & Theming
- **Tailwind CSS**: Utility-first CSS with custom color system using HSL CSS variables
- **class-variance-authority**: Component variant management
- **tailwind-merge + clsx**: Conditional class merging via cn() utility

### Form & Validation
- **Zod**: Schema validation shared between client and server
- **React Hook Form**: Form state management
- **drizzle-zod**: Automatic Zod schema generation from Drizzle tables

### Fonts
- **Google Fonts**: Inter (sans-serif body text), Playfair Display (serif headings)
- Additional fonts loaded: DM Sans, Fira Code, Geist Mono, Architects Daughter

### Development Tools (Replit-specific)
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)
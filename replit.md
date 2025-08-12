# SSR - Selina Stanley Recruitment

## Overview

SSR is a modern recruitment platform specializing in early childhood education placement services. The application is built as a single-page application (SPA) featuring a professional business website that connects early childhood education providers with qualified educators and leadership professionals. The platform showcases services ranging from Certificate III educators to C-level executives, with a focus on the Australian early childhood education sector.

**Recent Changes (January 6, 2025):**
- Updated all content to match the provided markdown content specification
- Implemented actual SSR logo (86px in header, 40px in footer with white filter)
- Removed hero section image per user request
- Updated headlines and messaging to match brand voice from content document
- Ensured navigation changes are reflected across all site components
- Updated color palette to: Navy blue (#1f2b8d), Teal green (#008291), White, Light orange (#f2e1c8), Soft coral (#F88379)
- Applied new brand colors across all components with navy/teal as core colors and coral as pop color for CTAs
- Simplified navigation structure: Logo (home), About & Expertise, Employers, Job Seekers (Job Board, Refer a Friend), Resources, Contact
- Logo serves as clickable home button, single dropdown only for Job Seekers
- Added prominent CTA buttons in header: "Find a Role" (teal) and "Join Our Talent Pool" (coral)
- Updated terminology from "Blog" to "Resources" throughout navigation and content sections
- Implemented multi-page architecture: separate detailed pages for About, Employers, Resources, and Contact
- Updated navigation to use proper routing with Link components instead of scroll-to-section behavior
- Maintained homepage as comprehensive overview with all sections, individual pages provide expanded detail

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring brand colors (navy blue, teal green, white, light orange, soft coral)
- **UI Components**: Radix UI primitives with shadcn/ui components for accessibility and consistency
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development Setup**: Custom Vite integration for SSR-like development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Database Provider**: Neon Database serverless PostgreSQL
- **Development Storage**: In-memory storage implementation for local development
- **Type Safety**: Drizzle-Zod integration for runtime validation

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **User Schema**: Basic user model with username/password authentication
- **Security**: Prepared for credential-based authentication with session persistence

### External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for production PostgreSQL hosting
- **UI Framework**: Comprehensive Radix UI component library for accessible interfaces
- **Form Handling**: React Hook Form with Hookform resolvers for validation
- **Date Management**: date-fns for date formatting and manipulation
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Loading**: Google Fonts (Playfair Display and Inter) for typography
- **Image Assets**: Static assets stored in attached_assets directory for recruitment content
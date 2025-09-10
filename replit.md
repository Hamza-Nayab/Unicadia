# Unicadia - Experience Uni Life

## Overview

Unicadia is a modern single-page website for an educational academy that provides hands-on programming courses with a university-like experience. Built with React 18, Vite, and TypeScript, the application features a responsive design using Tailwind CSS and shadcn/ui components. The site showcases programming fundamentals, object-oriented programming, and data structures courses, along with student life features like clubs, hack nights, and peer study sessions. The application includes a contact form with WhatsApp integration for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a component-based React architecture with TypeScript for type safety. The main structure includes:

- **Component Organization**: Modular components separated by functionality (Navbar, Hero, About, Courses, etc.)
- **Routing**: Simple client-side routing using Wouter for lightweight navigation
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Styling**: Tailwind CSS with custom brand colors (teal: #0ED0D0, navy: #09304F) and shadcn/ui component system
- **Build System**: Vite for fast development and optimized production builds

### UI/UX Design Patterns
- **Design System**: shadcn/ui components with consistent theming through CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: WCAG AA compliance with semantic HTML, keyboard navigation, and focus management
- **Performance**: Optimized fonts loading, image optimization, and motion preferences respect

### Content Management
- **Static Content**: Centralized constants file (`lib/constants.ts`) for navigation links, course data, testimonials, and student life content
- **Brand Assets**: Logo integration with proper alt text for accessibility
- **Form Handling**: Client-side form validation with WhatsApp integration for contact submissions

### Backend Architecture (Express/Node.js)
The application includes a minimal Express.js backend setup with:

- **Development Server**: Vite integration for hot module replacement in development
- **API Structure**: Placeholder routes structure for future API endpoints
- **Storage Interface**: Abstract storage layer with in-memory implementation for user management
- **Middleware**: Request logging, JSON parsing, and error handling

### Database Design
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **User Management**: Basic user schema with username/password authentication structure
- **Migration System**: Drizzle Kit for database schema migrations

## External Dependencies

### Core Frontend Libraries
- **React 18**: Component library with hooks and modern features
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and enhanced development experience
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### UI Component System
- **Radix UI**: Headless UI components (@radix-ui/react-*) for accessibility and behavior
- **shadcn/ui**: Pre-styled component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant handling for components

### State Management & Data Fetching
- **TanStack Query**: Server state management with caching and background updates
- **React Hook Form**: Form handling with validation (@hookform/resolvers)
- **Zod**: Schema validation for form inputs and API responses

### Backend Dependencies
- **Express.js**: Web framework for API routes
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **TSX**: TypeScript execution for development server
- **Replit Integration**: Development environment plugins for Replit platform

### Third-party Integrations
- **WhatsApp API**: Contact form integration for direct messaging
- **Google Fonts**: Web font loading for typography
- **Unsplash**: Stock photography for student life imagery
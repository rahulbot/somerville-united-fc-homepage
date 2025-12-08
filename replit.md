# Somerville United FC Website

## Overview

This is a static website for Somerville United FC, a soccer club in Massachusetts. The site is built using SvelteKit with a static adapter for deployment. It features multiple pages including home, about, board, and team sections, showcasing the club's mission of combining passion, community, and opportunity in soccer.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: SvelteKit 5 with Svelte 5
- **Rationale**: SvelteKit provides a modern, performant framework for building static websites with excellent developer experience and small bundle sizes
- **Rendering Strategy**: Static site generation using `@sveltejs/adapter-static`
- **Output**: Pre-rendered HTML/CSS/JS files output to the `docs` directory for easy deployment

**Component Structure**:
- Route-based file system with pages in `src/routes/`
- Pages include: home (`/`), about (`/about`), board (`/board`), and team (`/team`)
- Layout component (`+layout.svelte`) provides consistent structure across pages

**Styling Approach**:
- Global CSS with CSS custom properties (CSS variables) for theming
- Typography: Inter (sans-serif) and Barlow Condensed (headings)
- Color system based on Somerville branding:
  - Primary: Somerville Red (#C1132E)
  - Secondary: Somerville Blue (#3A6EA6)
- Icon system via `lucide-svelte` for scalable vector icons

### Build System

**Build Tool**: Vite 7
- **Purpose**: Fast development server with hot module replacement and optimized production builds
- **Benefits**: Lightning-fast rebuilds during development, optimized bundling for production

**Custom Vite Plugins**:
1. **Meta Images Plugin** (`vite-plugin-meta-images.js`):
   - Automatically updates OpenGraph and Twitter meta tags with correct deployment URLs
   - Detects opengraph images in multiple formats (PNG, JPG, JPEG)
   - Ensures social media sharing displays proper preview images

2. **Replit Development Plugins** (development only):
   - `@replit/vite-plugin-cartographer`: Project structure visualization
   - `@replit/vite-plugin-dev-banner`: Development environment indicator
   - `@replit/vite-plugin-runtime-error-modal`: Enhanced error reporting

**Path Aliases**:
- `@/`: Maps to `src/` directory
- `@shared/`: Maps to `shared/` directory
- `@assets/`: Maps to `attached_assets/` directory

### Deployment Configuration

**Static Site Generation**:
- Configured via `svelte.config.js` to output to `docs` directory
- Pages and assets both output to the same directory
- No fallback page (all routes pre-rendered)
- Precompression disabled for simplicity

**Development Server**:
- Runs on port 5000
- Bound to `0.0.0.0` for Replit compatibility
- Hot module replacement enabled

### SEO and Social Media

**Meta Tags**:
- OpenGraph tags for Facebook/LinkedIn sharing
- Twitter Card tags for Twitter sharing
- Dynamic image URL generation based on deployment environment
- Responsive viewport configuration with maximum scale limit

## External Dependencies

### Core Framework Dependencies

- **svelte**: Component framework (v5.45.5)
- **@sveltejs/kit**: Application framework (v3.7.6)
- **@sveltejs/vite-plugin-svelte**: Vite integration for Svelte
- **@sveltejs/adapter-static**: Static site generation adapter

### UI Libraries

- **lucide-svelte**: Icon library providing consistent, customizable SVG icons
- Note: `lucide-react` is listed but unused (likely can be removed)

### Development Tools

- **vite**: Build tool and development server
- **esbuild**: JavaScript bundler used by Vite for fast builds
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Fonts

- **Google Fonts**: 
  - Inter: Primary sans-serif font for body text
  - Barlow Condensed: Display font for headings and emphasis

### Optional Dependencies

- **bufferutil**: Native WebSocket performance enhancement (optional optimization)

### Platform Integration

**Replit Environment**:
- Environment variables for Replit deployment (REPL_ID, REPL_OWNER, etc.)
- Custom domain support via REPLIT_DOMAINS
- Database URL available via DATABASE_URL (currently unused)
- Automatic detection of production vs development environment

**Note**: The application currently has no backend, database, or external API integrations. It is a purely static frontend application.
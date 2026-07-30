# ADR 0001: Use Next.js with App Router

## Status

Accepted

## Date

2026-07-29

## Context

LRA Software needs a public institutional website that can begin as a mostly
static website and evolve over time.

Possible future requirements include:

- service-specific pages;
- case studies;
- articles;
- lead generation forms;
- integrations with internal systems;
- dynamic metadata;
- server-side functionality;
- integration with a future LRA API.

A plain HTML implementation would be enough for a single landing page, but it
would provide fewer architectural options as the website grows.

React with Vite would support component-based development, but it would require
additional decisions and tooling for routing, metadata, server rendering and
static generation.

Astro would be a strong alternative for a content-focused website with limited
interactivity, but the LRA website is expected to evolve beyond a purely static
content site.

## Decision

Use Next.js with:

- App Router;
- React;
- TypeScript;
- Server Components by default;
- Tailwind CSS;
- static rendering whenever possible;
- Client Components only where browser interactivity is required.

The initial version will not include:

- a separate backend;
- a database;
- authentication;
- a CMS;
- global state management;
- unnecessary third-party libraries.

Framework-specific behavior must follow the documentation bundled with the
installed Next.js version.

## Consequences

### Positive

- Native routing and layouts.
- Native metadata and SEO support.
- Static generation for institutional pages.
- Server-side capabilities available when needed.
- Incremental evolution without replacing the frontend architecture.
- Strong alignment with the technical portfolio of LRA Software.
- Clear separation between Server Components and interactive Client
  Components.

### Negative

- More framework complexity than a plain static website.
- Framework-specific conventions must be maintained.
- Upgrades may introduce breaking changes.
- The project requires a Node.js toolchain even when producing static pages.

### Risks and mitigations

- Avoid unnecessary dynamic rendering.
- Keep Client Component boundaries small.
- Do not add infrastructure before a real requirement exists.
- Consult the installed Next.js documentation before implementing
  framework-specific behavior.
- Validate every relevant change with linting, type checking and a production
  build.

## Alternatives considered

### Plain HTML and Tailwind CSS

Rejected because it would become harder to maintain as pages and reusable
components increase.

### React with Vite

Rejected because the project would need additional architectural decisions for
routing, metadata, static generation and server-side behavior.

### Astro

Considered a strong option for a mostly static content website. Rejected
because LRA expects the project to evolve into a broader web platform with
integrations and server-side capabilities.

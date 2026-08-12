# LRA Web

[![CI](https://github.com/luissetincruz/lra-web/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/luissetincruz/lra-web/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/luissetincruz/lra-web?display_name=tag)](https://github.com/luissetincruz/lra-web/releases)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![AWS Amplify](https://img.shields.io/badge/AWS-Amplify-FF9900?logo=awsamplify&logoColor=white)](https://aws.amazon.com/amplify/)

Frontend for the [LRA Software](https://www.lrasoftware.com) institutional website.

**Live:** [Português](https://www.lrasoftware.com/) · [English](https://www.lrasoftware.com/en)

---

LRA Web is the public frontend of LRA Software, built with Next.js, React and TypeScript with a focus on performance, accessibility, internationalization, SEO, privacy-aware analytics and real-user observability.

## Table of contents

- [Highlights](#highlights)
- [Tech stack](#tech-stack)
- [Architecture](#architecture)
- [Internationalization](#internationalization)
- [SEO](#seo)
- [Analytics and privacy](#analytics-and-privacy)
- [Real User Monitoring](#real-user-monitoring)
- [Performance and accessibility](#performance-and-accessibility)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Scripts](#scripts)
- [Continuous integration](#continuous-integration)
- [Deployment](#deployment)
- [Development workflow](#development-workflow)
- [Architecture decisions](#architecture-decisions)
- [Releases](#releases)
- [Project scope](#project-scope)

## Highlights

- Responsive institutional website
- Portuguese and English versions
- Typed locale dictionaries
- PT / EN language switcher
- Multilingual SEO
- Canonical URLs and `hreflang`
- Multilingual sitemap
- JSON-LD structured data
- Localized Open Graph and Twitter metadata
- Google Search Console integration
- Consent-based analytics loading
- Google Tag Manager
- Google Analytics 4
- Microsoft Clarity
- Real User Monitoring with Web Vitals
- Accessibility-focused interface
- Automated quality checks with GitHub Actions
- Production deployment with AWS Amplify

## Tech stack

### Frontend

- Next.js 16.2.12
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4

### Analytics and observability

- Google Tag Manager
- Google Analytics 4
- Microsoft Clarity
- `web-vitals`

### Engineering

- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint
- Conventional Commits
- GitHub Actions

## Architecture

The application uses the Next.js App Router and favors static rendering whenever possible.

Portuguese is the default locale:

```text
/
```

English is available at:

```text
/en
```

Locale-specific layouts provide independent language attributes, metadata, canonical URLs and social sharing metadata.

Shared page content is stored in typed locale dictionaries so the same presentation components can be reused across languages.

A simplified project structure is:

```text
src/
├── app/
│   ├── (pt)/
│   ├── (en)/
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── analytics/
│   ├── layout/
│   ├── privacy/
│   ├── sections/
│   ├── seo/
│   └── ui/
│
├── dictionaries/
│   ├── pt-BR.ts
│   └── en.ts
│
└── i18n/
```

Architecture decisions are documented under [`docs/adr`](./docs/adr).

## Internationalization

The website currently supports:

- `pt-BR`
- `en`

Routes:

```text
https://www.lrasoftware.com/
https://www.lrasoftware.com/en
```

Each locale provides its own:

- HTML `lang` attribute
- canonical URL
- metadata
- Open Graph metadata
- Twitter metadata
- structured data
- social sharing images

The sitemap also declares language alternatives for search engines.

## SEO

The project includes:

- canonical URLs
- `hreflang`
- multilingual sitemap
- `robots.txt`
- localized metadata
- Open Graph metadata
- Twitter metadata
- JSON-LD structured data
- Google Search Console integration

SEO-related behavior is implemented using Next.js metadata APIs and route-level metadata files.

## Analytics and privacy

Analytics services are disabled until the visitor explicitly grants analytics consent.

After consent is granted, the application can initialize:

- Google Tag Manager
- Google Analytics 4
- Microsoft Clarity
- Web Vitals RUM

The consent preference is persisted locally and can later be changed through the cookie preferences control in the website footer.

Revoking consent disables analytics for subsequent loads and removes known analytics cookies created by the configured services.

## Real User Monitoring

Real User Monitoring is implemented with the official `web-vitals` package.

The application collects:

| Metric | Description               |
| ------ | ------------------------- |
| LCP    | Largest Contentful Paint  |
| INP    | Interaction to Next Paint |
| CLS    | Cumulative Layout Shift   |
| FCP    | First Contentful Paint    |
| TTFB   | Time to First Byte        |

Each measurement includes:

```text
name
value
delta
id
rating
navigationType
pageLocale
```

Measurements are pushed to the Google Tag Manager `dataLayer` through:

```text
event = web_vitals
```

Google Tag Manager forwards the metrics to Google Analytics 4 for field performance analysis.

Web Vitals monitoring is only initialized after analytics consent has been granted.

## Performance and accessibility

The project is regularly reviewed using Lighthouse and PageSpeed Insights.

The frontend is designed around:

- static rendering whenever possible
- small Client Component boundaries
- low JavaScript overhead
- stable layouts
- accessible color contrast
- semantic HTML
- keyboard accessibility
- responsive navigation
- search engine discoverability

Performance-sensitive changes should be validated before release to avoid regressions in Core Web Vitals.

## Requirements

- Node.js `>=24.12.0 <25`
- npm 11

The supported runtime is declared in `package.json`.

## Getting started

Clone the repository:

```bash
git clone https://github.com/luissetincruz/lra-web.git
cd lra-web
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment variables

Create a local `.env.local` file when analytics integration is required.

Example:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

`NEXT_PUBLIC_GTM_ID` is a public Google Tag Manager container identifier used by the browser.

Never commit credentials, API keys, private tokens or production secrets.

## Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the development server            |
| `npm run build`        | Create a production build               |
| `npm run start`        | Run the production build locally        |
| `npm run lint`         | Run ESLint                              |
| `npm run lint:fix`     | Run ESLint with automatic fixes         |
| `npm run typecheck`    | Run TypeScript validation               |
| `npm run format`       | Format the codebase with Prettier       |
| `npm run format:check` | Validate formatting                     |
| `npm run check`        | Run the complete local quality pipeline |

The complete local validation pipeline runs:

```text
Prettier
→ ESLint
→ TypeScript
→ Next.js production build
```

## Continuous integration

GitHub Actions runs automated quality checks for pushes and pull requests targeting `develop` and `main`.

The CI pipeline performs:

```text
npm ci
npm run check
npm audit --omit=dev --audit-level=critical
```

Changes must pass CI before being integrated.

The current CI status is exposed through the badge at the top of this README.

## Deployment

Production is deployed with AWS Amplify.

The `main` branch represents production-ready code, while `develop` is used as the integration branch for upcoming releases.

Production changes are promoted through the repository's GitFlow release process.

## Development workflow

The repository uses:

- GitFlow
- Conventional Commits
- pull request validation
- semantic version tags
- GitHub Releases
- automated CI checks

### Main branches

- `main` — production-ready code
- `develop` — integration branch for upcoming releases

### Supporting branches

- `feature/*`
- `bugfix/*`
- `release/*`
- `hotfix/*`

Commit messages are written in English and follow Conventional Commits.

For the complete branching, contribution and pull request workflow, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Architecture decisions

Important technical and process decisions are documented as Architecture Decision Records.

See:

[`docs/adr/README.md`](./docs/adr/README.md)

## Releases

Production versions use semantic Git tags:

```text
v0.x.x
```

Published versions and release notes are available in [GitHub Releases](https://github.com/luissetincruz/lra-web/releases).

The latest published version is also displayed dynamically through the release badge at the top of this README.

## Project scope

`lra-web` is responsible for the public frontend experience of LRA Software.

Backend services, infrastructure definitions and cross-project architecture are kept outside this repository so the frontend can remain independently deployable and focused on presentation, browser-side behavior and user experience.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# LRA Web Project

## Project purpose

This repository contains the public institutional website for LRA Software.

The website must:

- present LRA Software's services clearly;
- build technical and commercial credibility;
- generate qualified business opportunities;
- support future service pages, case studies, articles and integrations;
- serve as a real-world technical portfolio.

LRA Software works primarily with:

- custom software development;
- internal business applications;
- process automation;
- system integrations;
- REST APIs and webhooks;
- artificial intelligence integrations;
- WhatsApp automation and chatbots;
- technical consulting;
- software modernization and maintenance.

Never invent clients, testimonials, projects, metrics, certifications,
partnerships, awards or business results.

## Technology stack

Use the versions installed in `package.json` as the source of truth.

The initial stack is:

- Next.js with App Router;
- React;
- TypeScript;
- Tailwind CSS;
- ESLint;
- npm;
- Turbopack during development.

Before implementing Next.js-specific behavior, consult the documentation
available in `node_modules/next/dist/docs/`.

Do not rely on conventions from older Next.js versions without verifying them.

## Architecture principles

Prefer the simplest implementation that satisfies the current requirement.

Do not add the following without a clear requirement and explicit approval:

- database;
- authentication;
- separate backend;
- global state library;
- CMS;
- component library;
- animation library;
- form library;
- HTTP client library;
- analytics platform;
- unnecessary third-party dependencies.

Do not create abstractions or directories for hypothetical future needs.

## Directory organization

Use the following structure as the project grows:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── content/
├── lib/
└── types/

public/
├── icons/
├── images/
└── logo/
```

Responsibilities:

- `src/app`: routes, layouts, metadata and route-specific files;
- `src/components/layout`: structural components such as header and footer;
- `src/components/sections`: complete page sections;
- `src/components/ui`: small reusable presentation components;
- `src/content`: structured institutional content;
- `src/lib`: reusable utilities;
- `src/types`: shared TypeScript types;
- `public`: static assets.

## Next.js conventions

Use the App Router.

Prefer Server Components.

Add `"use client"` only when browser-side behavior is required, such as:

- React state;
- effects;
- event listeners;
- browser APIs;
- interactive controls.

Keep Client Component boundaries as small as possible.

Do not convert an entire page or layout into a Client Component because one
nested element is interactive.

Use:

- `next/link` for internal navigation;
- `next/image` for appropriate image optimization;
- Next.js Metadata APIs for SEO;
- Route Handlers only when a server endpoint is genuinely required.

Do not create API routes for static content.

## TypeScript conventions

Use TypeScript for all application code.

Avoid `any`.

Use `unknown` when a value is genuinely unknown and narrow it safely.

Define appropriate types for component props, structured content, form values,
external data and utility inputs and outputs.

Use the `@/*` alias for application imports.

Prefer named exports for reusable components, utilities, types and content.

Use default exports where required or conventional for Next.js route files,
including `page.tsx`, `layout.tsx`, `loading.tsx` and `error.tsx`.

## React conventions

Keep components focused on one responsibility.

Prefer composition over components with many configuration props.

Do not introduce state when the same result can be produced during rendering.

Do not use `useEffect` for values that can be calculated directly.

Do not add `useMemo`, `useCallback` or memoization without a concrete reason.

Use stable and meaningful keys when rendering lists.

Separate institutional content from JSX when the content is reused or makes
the component difficult to read.

## Styling conventions

Use Tailwind CSS as the primary styling approach.

Follow a mobile-first strategy.

Prefer semantic HTML before adding additional wrappers.

Create reusable layout primitives only when repetition is demonstrated.

Global CSS should be limited to Tailwind imports, design tokens, typography
defaults, browser normalization and truly global behavior.

Do not introduce another styling system without approval.

## Design direction

The visual identity should communicate:

- technical competence;
- clarity;
- reliability;
- maturity;
- modern software development;
- practical business value.

Avoid interfaces that feel excessively futuristic, visually overloaded, like
generic SaaS templates, dependent on decorative animations or based on
exaggerated marketing claims.

Animations must be subtle, purposeful and compatible with reduced-motion
preferences.

The website must work well on mobile, tablet and desktop.

## Accessibility

Use semantic HTML.

Maintain a logical heading hierarchy.

Ensure keyboard accessibility for interactive elements.

Buttons and links must have clear accessible names.

Associate form labels with their fields.

Provide appropriate alternative text for images.

Maintain sufficient color contrast.

Preserve visible focus indicators.

Respect `prefers-reduced-motion`.

## SEO

Each public page should have a clear title, meaningful meta description,
semantic heading structure, descriptive links and appropriate social metadata
when relevant.

Do not repeat the same title and description across all pages.

Write content for people and business decision-makers, not for keyword
stuffing.

The website's primary language is Brazilian Portuguese.

## Content guidelines

Write public content in natural Brazilian Portuguese.

The tone should be professional, direct, mature, clear, human and technically
credible.

Avoid vague expressions such as:

- "soluções revolucionárias";
- "tecnologia de ponta" without context;
- "resultados extraordinários";
- "transformamos o seu negócio";
- "somos apaixonados por tecnologia".

Prefer language that explains the business problem, proposed solution,
implementation context and expected operational benefit.

Never expose private addresses, credentials, customer data or confidential
information.

## Dependency policy

Before adding a dependency:

1. verify whether the requirement can be implemented with the existing stack;
2. explain which problem the dependency solves;
3. explain why the current stack is insufficient;
4. evaluate maintenance and bundle impact;
5. obtain explicit approval.

Use npm as the package manager.

Do not generate lockfiles for other package managers.

## Git workflow

Use GitFlow.

Long-lived branches:

- `main`: stable production code;
- `develop`: integration branch for the next release.

Supporting branches:

- `feature/*`: new functionality created from `develop`;
- `bugfix/*`: non-production bug fixes created from `develop`;
- `release/*`: release stabilization created from `develop`;
- `hotfix/*`: urgent production corrections created from `main`.

Branch names must use lowercase kebab-case.

Examples:

```text
feature/create-home-hero
feature/add-contact-form
bugfix/fix-mobile-navigation
release/0.1.0
hotfix/0.1.1
```

Rules:

- features and bug fixes must return to `develop`;
- releases must be merged into `main` and `develop`;
- hotfixes must be merged into `main` and `develop`;
- `main` must remain stable and deployable;
- branches must focus on one technical or business objective.

Do not create, rename, merge, push or delete branches unless explicitly
requested.

Do not commit, push, merge, tag or open pull requests unless explicitly
requested.

## Commit conventions

Use Conventional Commits.

Commit messages must be written in English.

Format:

```text
<type>(optional-scope): <description>
```

Allowed types:

- `feat`;
- `fix`;
- `docs`;
- `style`;
- `refactor`;
- `perf`;
- `test`;
- `build`;
- `ci`;
- `chore`;
- `revert`.

Examples:

```text
feat(home): create hero section
feat(contact): add lead capture form
fix(header): prevent mobile navigation overflow
refactor(ui): extract container component
docs: document project architecture
chore: configure development tooling
```

Descriptions must use lowercase, use the imperative mood, be concise and
specific, describe one logical change and not end with a period.

Do not use vague messages such as:

```text
update files
changes
fix stuff
adjustments
final version
```

Use `!` and a commit body or footer for breaking changes:

```text
feat(contact)!: change form submission contract
```

Do not combine unrelated changes in the same commit.

## Quality checks

Before considering application code complete, run:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

Run the available test suite when tests exist.

Never claim that a command passed unless it was actually executed.

Review the final diff and remove unused imports, debugging statements,
commented-out code, temporary files, dead code and unapproved placeholder
content.

## Security

Never commit:

- `.env` files containing secrets;
- API keys;
- passwords;
- access tokens;
- private certificates;
- production credentials;
- confidential customer information.

Use `.env.example` to document required environment variables without real
values.

Do not expose secrets through variables prefixed with `NEXT_PUBLIC_`.

Validate and sanitize user-controlled data when server-side functionality is
introduced.

## Change discipline

Do not modify unrelated files.

Do not perform broad refactors while implementing a small feature.

Preserve existing behavior unless the task explicitly requires changing it.

Explain architectural changes before implementing them.

Ask for clarification when ambiguity affects architecture, security, content
accuracy or business behavior.

At the end of a completed task, summarize what changed, which files changed,
which checks were executed and any limitations or pending decisions.

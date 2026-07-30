# Contributing to LRA Web

## Requirements

- Node.js compatible with the version declared in `package.json`;
- npm;
- Git.

## Local setup

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## GitFlow

This repository uses GitFlow.

### Main branches

- `main`: stable production code;
- `develop`: integration branch for upcoming releases.

### Supporting branches

- `feature/*`: new functionality;
- `bugfix/*`: corrections made before a production release;
- `release/*`: preparation and stabilization of a release;
- `hotfix/*`: urgent production fixes.

### Feature workflow

Create a feature branch from `develop`:

```bash
git switch develop
git pull
git switch -c feature/feature-name
```

After implementation and validation, open a pull request targeting `develop`.

### Release workflow

Create a release branch from `develop`:

```bash
git switch develop
git pull
git switch -c release/0.1.0
```

Release branches must contain only stabilization, documentation, versioning and
release-related corrections.

After validation, merge the release into both `main` and `develop`.

Create the corresponding version tag on `main`.

### Hotfix workflow

Create a hotfix from `main`:

```bash
git switch main
git pull
git switch -c hotfix/0.1.1
```

After validation, merge the hotfix into both `main` and `develop`.

## Branch naming

Use lowercase kebab-case.

Examples:

```text
feature/create-home-hero
feature/add-contact-form
bugfix/fix-mobile-navigation
release/0.1.0
hotfix/0.1.1
```

Keep each branch focused on one objective.

## Conventional Commits

Use the following structure:

```text
<type>(optional-scope): <description>
```

Supported types:

- `feat`: new functionality;
- `fix`: bug correction;
- `docs`: documentation;
- `style`: formatting or visual changes without logic changes;
- `refactor`: internal restructuring without behavior changes;
- `perf`: performance improvement;
- `test`: tests;
- `build`: build system or dependency changes;
- `ci`: continuous integration;
- `chore`: maintenance;
- `revert`: revert of a previous commit.

Examples:

```text
feat(home): create hero section
fix(header): prevent mobile navigation overflow
docs: document GitFlow workflow
chore: configure commit validation
```

Commit messages must be written in English.

Keep commits small, focused and logically complete.

## Quality checks

Before opening a pull request, run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Run the existing test suite when tests are available.

## Pull requests

Pull requests must:

- have a clear title;
- explain what changed and why;
- target the correct GitFlow branch;
- contain only related changes;
- pass all automated checks;
- include screenshots when the interface changes;
- describe limitations or pending work.

Feature and bugfix pull requests should normally target `develop`.

Release and hotfix pull requests must follow the GitFlow integration rules.

## Security

Never commit credentials, tokens, passwords, private keys, production
configuration or confidential customer information.

Use `.env.example` to document required environment variables without real
values.

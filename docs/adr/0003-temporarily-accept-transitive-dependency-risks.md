# ADR 0003: Temporarily accept known transitive dependency risks

## Status

Accepted

## Date

2026-07-29

## Context

The initial dependency audit reported high-severity advisories in transitive
dependencies used by the installed Next.js and ESLint toolchain.

The production dependency report identified advisories involving:

- PostCSS bundled through Next.js;
- Sharp bundled through Next.js.

The full development report also identified advisories involving older
transitive versions of `brace-expansion` used by ESLint-related packages.

The automatic remediation proposed by npm requires forced changes that include
a downgrade to an incompatible Next.js version or other breaking dependency
updates.

The current website:

- does not accept user-uploaded CSS;
- does not process user-uploaded images;
- does not expose build tooling to untrusted user input;
- is generated from source code and assets controlled by the project.

## Decision

Temporarily accept the identified transitive dependency risks while no
compatible stable upstream fix is available.

Do not:

- run `npm audit fix --force`;
- downgrade Next.js;
- replace stable packages with canary or preview releases;
- add package overrides without compatibility validation.

The continuous integration workflow will:

- run `npm ci`;
- run all project quality checks;
- audit production dependencies;
- fail on critical production vulnerabilities.

Known high-severity advisories will remain visible in the audit output but will
not currently block pull requests.

The project must reassess this decision when:

- Next.js publishes a compatible stable update;
- the affected transitive packages are updated upstream;
- the website starts accepting untrusted CSS;
- the website starts accepting or processing user-uploaded images;
- the vulnerability severity or exploitability changes;
- a critical production vulnerability is reported.

## Consequences

### Positive

- Avoids an unsafe automated downgrade.
- Preserves compatibility with the selected Next.js architecture.
- Keeps security findings visible in CI.
- Establishes an explicit and reviewable risk decision.
- Prevents `npm audit fix --force` from making unreviewed breaking changes.

### Negative

- The repository will temporarily retain known high-severity advisories.
- Audit output may appear alarming even when CI succeeds.
- The project must actively review future dependency updates.
- The risk assessment depends on the current absence of untrusted CSS and
  image inputs.

### Mitigations

- Do not process user-controlled CSS.
- Do not accept image uploads without a new security review.
- Keep dependencies and the lockfile under version control.
- Use Dependabot after the GitHub repository is configured.
- Review security advisories during dependency updates.
- Re-run `npm audit --omit=dev` regularly.
- Document any change that increases exposure to the affected packages.

## Alternatives considered

### Run `npm audit fix --force`

Rejected because npm proposed breaking and incompatible dependency changes.

### Use dependency overrides

Rejected for now because overriding framework-internal dependencies can create
runtime and build incompatibilities that are not covered by the framework's
declared dependency ranges.

### Upgrade to preview or canary framework releases

Rejected because the public website should use stable framework versions unless
a preview version is explicitly justified and tested.

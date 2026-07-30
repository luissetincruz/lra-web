# ADR 0002: Adopt GitFlow and Conventional Commits

## Status

Accepted

## Date

2026-07-29

## Context

The project should maintain a clear, auditable and professional development
workflow from its beginning.

The repository needs conventions for:

- long-lived branches;
- feature development;
- release preparation;
- urgent production corrections;
- commit message structure;
- pull request targets;
- version history.

A lightweight workflow based only on `main` would be sufficient for a very
small website, but LRA wants to establish engineering practices that can
support future collaboration, releases and deployment environments.

## Decision

Adopt GitFlow with these long-lived branches:

- `main`: stable production code;
- `develop`: integration branch for the next release.

Use these supporting branches:

- `feature/*`: created from `develop` and merged back into `develop`;
- `bugfix/*`: created from `develop` and merged back into `develop`;
- `release/*`: created from `develop` and merged into both `main` and
  `develop`;
- `hotfix/*`: created from `main` and merged into both `main` and `develop`.

Branch names must use lowercase kebab-case.

Adopt Conventional Commits with English commit messages using:

```text
<type>(optional-scope): <description>
```

The repository validates commit messages with Commitlint and Husky.

The repository also uses:

- pull requests;
- automated quality checks;
- branch protection after the repository is connected to GitHub;
- separate commits for logically independent changes.

## Consequences

### Positive

- Clear separation between development and production-ready code.
- Explicit process for releases and hotfixes.
- Easier navigation of project history.
- Consistent commit messages.
- Compatibility with future changelog and release automation.
- Better pull request review and traceability.

### Negative

- More branches and merges than a trunk-based workflow.
- Additional process overhead for a project with a single developer.
- Release and hotfix branches must be merged into more than one long-lived
  branch.
- Poor branch discipline can create unnecessary complexity.

### Mitigations

- Keep supporting branches short-lived.
- Keep each branch focused on one objective.
- Avoid creating release branches until a real release is being prepared.
- Avoid direct commits to `main` and `develop` after branch protection is
  enabled.
- Use automated checks to reduce manual errors.

## Alternatives considered

### GitHub Flow

Considered because it is simpler and well suited to continuous deployment.

Rejected because the project wants an explicit integration branch and a formal
release and hotfix process.

### Trunk-based development

Considered for its simplicity and fast integration.

Rejected for the initial project governance because the desired workflow
includes explicit `develop`, release and hotfix branches.

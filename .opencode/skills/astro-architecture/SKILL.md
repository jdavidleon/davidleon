---
name: astro-architecture
description: "Trigger: Astro architecture, frontend structure, component organization, feature modules, shadcn/ui. Apply the project's domain-oriented Astro architecture."
license: Apache-2.0
metadata:
  author: "jdavidleon"
  version: "1.0"
---

## Activation Contract

Load for Astro feature work, new UI components, frontend folder decisions, or shadcn/ui setup in this project.

## Hard Rules

- Keep shared visual primitives in `src/components/core/`; these components MUST be generated or adapted from shadcn/ui.
- Keep `core` generic: appearance, accessibility, variants, and basic UI interaction only. Never couple it to domains, APIs, tokens, or backend operations.
- Organize business capabilities by domain under `src/modules/<domain>/`, keeping API, components, schemas, types, services, utilities, and public exports together.
- Use Atomic Design pragmatically: `atoms`, `molecules`, and `organisms` compose reusable application UI; do not classify components when the label adds no value.
- Keep routes in `src/pages/`, reusable shells in `src/layouts/`, infrastructure in `src/lib/`, configuration in `src/config/`, and global styling in `src/styles/`.

## Decision Gates

| Need | Location |
| --- | --- |
| shadcn/ui primitive | `src/components/core/<component>/` |
| Small app-specific UI | `src/components/atoms/` |
| Composed reusable UI | `src/components/molecules/` or `organisms/` |
| Domain behavior or domain UI | `src/modules/<domain>/` |
| Route or page composition | `src/pages/` |

## Execution Steps

1. Inspect the existing Astro configuration and package manager before adding dependencies.
2. Initialize shadcn/ui using the project's official Astro integration and configure its component output to `src/components/core/`.
3. Preserve the existing aliases, styling conventions, and build behavior.
4. Verify generated files, dependency manifests, and `astro build`.

## Output Contract

Report changed files, the shadcn/ui configuration, generated component path, verification command and result, and unresolved risks.

## References

- `src/` — current application source tree.
- `DESING.md` — project architecture context.

---
version: "1.0"
name: "Garage Revival Editorial"
source: "STYLE_FORMAT.png"
status: "implementation reference"
---

# Garage Revival Editorial

Use this document with [`DESING.md`](DESING.md) before creating or changing UI. `DESING.md` defines the reusable token foundations; this file specializes their application for the portfolio's current visual direction.

## Precedence

When the documents differ, `STYLE_FORMAT.md` governs composition, surface theme, and display typography for the Header and Hero. `DESING.md` remains authoritative for shared token names, accessibility constraints, spacing, motion, and general component behavior. Therefore, the current experience uses the warm paper surface and condensed display treatment from the reference while retaining the grunge palette and monospaced body typography from `DESING.md`.

## Visual Direction

The reference is a 1990s photocopied concert flyer translated into a deliberate web layout. It combines a warm paper canvas, imperfect print texture, oversized industrial headlines, monospaced supporting copy, monochrome photography, offset color layers, tape, and hand-written notes.

The result should feel assembled by hand, not randomly damaged. Preserve hierarchy, accessibility, and responsive behavior beneath the controlled imperfections.

## Extracted Palette

| Role | Value | Usage |
| --- | --- | --- |
| Paper | `#E9E1D4` | Page background and light panels |
| Ink | `#2E2E2E` | Headlines, borders, dark controls |
| Mustard | `#B5A642` | Brand highlight, primary emphasis, tape notes |
| Oxide Red | `#8C2727` | CTA background, offset layers, rules |
| Concrete | `#7A7A7A` | Tape, metadata, subdued details |
| Paper White | `#F5F1E8` | Photo mats and elevated paper pieces |

Use the existing `--color-*` tokens in `src/styles/global.css`. Add a semantic token only when an extracted role has no existing equivalent.

## Typography

| Role | Direction |
| --- | --- |
| Display | Heavy condensed sans-serif, uppercase, tight leading, wide tracking |
| Body | Courier-style monospaced text with generous line height |
| Navigation | Bold condensed or monospaced uppercase with visible letter spacing |
| Annotation | Rough handwritten treatment used sparingly and never for essential information |

- Display headlines should dominate the composition and may break across lines.
- Supporting copy remains readable at `1rem` or larger.
- Underlines may use imperfect or wavy decoration for navigation emphasis.
- Do not introduce a remote font solely to imitate handwriting; use a local fallback stack or a static decorative treatment.

## Composition

- Use an asymmetric two-column hero: editorial copy on the left and an oversized image treatment on the right.
- Separate navigation from content with a dashed or distressed horizontal rule.
- Use slight rotations between `-1deg` and `1deg` only on paper, photo, tape, or CTA layers.
- Create depth with offset solid-color layers rather than soft modern shadows.
- Allow intentional overlap on large screens, but remove dangerous overlap below `768px`.
- Keep the page within the existing `1280px` content boundary.
- Preserve a clear reading order in the DOM regardless of visual positioning.

## Surface Treatment

- Paper texture should be subtle and implemented with CSS gradients or an optimized local asset.
- Images should use grayscale, high contrast, and a rigid paper frame.
- Tape is a translucent grey rectangle with a slight rotation; it is decorative and must use `aria-hidden="true"`.
- Printed elements use crisp borders between `2px` and `4px`.
- Offset red or mustard layers may appear behind cards, images, and calls to action.
- Avoid glassmorphism, neon glow, glossy gradients, and perfectly polished shadows.

## Core Component Contract

Components in `src/components/core/` are shadcn/ui primitives. Update existing primitives before creating new ones, keep their accessibility behavior, and express this style through reusable CVA variants.

### Button

- `default`: charcoal fill, paper text, mustard accent on hover.
- `poster`: square editorial control with a visible border and offset layer.
- `ticket`: oxide-red CTA with paper text and dark offset shadow.
- `outline`: transparent paper control with a heavy ink border.
- Keep existing semantic variants such as `destructive` when behavior differs from style.
- Active state translates by `1px`; focus remains clearly visible.

### Badge

- `default`: compact ink label with paper text.
- `highlight`: mustard paper label with ink text.
- `stamp`: oxide-red uppercase label with squared corners and slight rotation.

### Alert

- Use paper or ink surfaces with a heavy left rule.
- Add `notice` and `warning` variants only if they represent reusable semantics.
- Keep title and description readable; texture remains decorative.

### Overlay Components

- Alert dialogs and hover cards use paper surfaces, hard borders, restrained rotation, and offset shadows.
- Overlays remain visually stable; do not rotate modal positioning containers.
- Preserve Base UI focus management and keyboard behavior.

## Header Contract

- Use a reusable Astro organism under `src/components/organisms/` if no Header or Navbar already exists.
- Brand mark resembles a pasted black label with mustard and paper text.
- Desktop navigation is centered and uppercase with imperfect underline accents.
- CTA uses the core Button `ticket` or `poster` variant.
- A dashed divider closes the header.
- Mobile navigation may use the existing small browser script; do not hydrate React solely for menu state.
- Header must preserve anchor navigation and GitHub Pages base-path behavior.

## Hero Contract

- Use a reusable Astro organism under `src/components/organisms/` if no Hero already exists.
- Left column owns eyebrow, oversized title, description, and two actions.
- Right column owns the framed monochrome image, offset red layer, decorative tape, and mustard annotation.
- Use existing local imagery; do not add a remote or broken image.
- Primary and secondary actions should use reusable core Button variants where Astro interoperability permits it without unnecessary hydration. Otherwise reuse the exported variant classes in static markup.
- Mobile layout stacks copy before imagery and prevents horizontal overflow.
- Respect `prefers-reduced-motion` and animate only opacity or transform.

## Responsive Rules

- Below `768px`, stack navigation and hero content into one readable column.
- Scale display type with `clamp()` and avoid clipped words.
- Decorative tape and offset layers may shrink or disappear when they obstruct content.
- Use `min-height: 100dvh`, never fixed `100vh` sections.
- Maintain visible focus indicators and at least 44px interactive targets.

## Avoid

- Do not duplicate an existing component under a different name.
- Do not create domain behavior inside `components/core`.
- Do not hydrate static headings, links, imagery, or layout.
- Do not reproduce the reference text or brand literally; apply its visual grammar to the portfolio content.
- Do not sacrifice semantic HTML or contrast to simulate damaged print.

## Acceptance Checklist

- [ ] Existing components were inspected before any new file was introduced.
- [ ] `DESING.md` and this file were read before implementation.
- [ ] Core primitives expose reusable variants rather than page-specific classes.
- [ ] Header and hero are Astro components with no unnecessary hydration.
- [ ] The hero uses local assets and remains valid under `/davidleon/`.
- [ ] Desktop and mobile layouts avoid horizontal overflow.
- [ ] Keyboard focus and reduced-motion behavior remain usable.

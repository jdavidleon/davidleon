---
version: "alpha"
name: "Grunge Rock dos Anos 90"
description: "90s grunge rock landing page. Ideal for landing pages, SaaS. AI-ready template."
colors:
  primary: "#2E2E2E"
  secondary: "#B5A642"
  tertiary: "#8C2727"
  neutral: "#E9E1D4"
  surface: "#6B8E23"
  accent: "#3B5998"
typography:
  h1:
    fontFamily: "Courier New"
    fontSize: "2.5rem"
    fontWeight: 700
  body-md:
    fontFamily: "Courier New"
    fontSize: "1rem"
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: "12px"
---

# Grunge Rock dos Anos 90

## Overview

90s grunge rock landing page. Ideal for landing pages and SaaS. Before grunge had a name, it had a look: photocopied flyers stapled to telephone poles outside Seattle venues, hand-scrawled setlists, and album art that looked like it survived a basement flood. Nirvana's *Nevermind* was polished on purpose, but Pearl Jam's *Vs.*, Alice in Chains' tripod artwork, and Mudhoney's xeroxed chaos carried the real visual DNA. It was not designed. It was assembled.

Then David Carson blew typography apart. *Ray Gun* magazine (1992-2000) treated readability as optional. Columns bled off pages. Photos were scratched, layered, and degraded. Carson was not illustrating grunge; he was proving that destruction was a valid compositional tool.

Distressed textures, torn paper edges, and misregistered ink came from physical processes: bad photocopiers, wheat-paste residue, and rained-on gig posters. The roughness was evidence of lived experience. Anti-design became the honest response to the slick corporate visual language of the 1980s.

| Attribute | Value |
| --- | --- |
| Density | 5/10, balanced |
| Variance | 8/10, expressive |
| Motion | 4/10, subtle |
| Style | Raw, gritty, anti-design |
| Keywords | Grunge, 90s rock, distressed, xerox, zine, chaotic, authentic |
| Era | Early 1990s alternative scene |
| Theme | Full dark theme; no light theme |

## Design Tokens

The implementation source of truth is [`src/styles/global.css`](src/styles/global.css). Prefer the `--color-*`, `--font-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--duration-*`, and `--z-*` custom properties instead of literal values.

## Colors

| Token | Value | Purpose |
| --- | --- | --- |
| Faded Black | `#2E2E2E` | Primary background and dark surfaces |
| Dirty Yellow | `#B5A642` | Attention indicators and primary accent |
| Muted Red | `#8C2727` | Secondary text, borders, and muted elements |
| Off-White | `#E9E1D4` | Text and light surfaces |
| Olive Drab | `#6B8E23` | Decorative surfaces |
| Denim Blue | `#3B5998` | Secondary accent |
| Concrete Grey | `#7A7A7A` | Secondary text, borders, and muted elements |
| Burnt Orange | `#A84700` | Warm accent and secondary calls to action |

## Typography

- **Display / Hero:** Courier New, weight 700, tight tracking.
- **Body:** Courier New, weight 400, `1rem / 1.6`, maximum 72 characters per line.
- **UI labels / Captions:** Courier New, `0.875rem`, weight 500, slight letter spacing.
- **Monospace:** Courier New for code, metadata, and technical values.

| Role | Size |
| --- | --- |
| Hero | `clamp(2.5rem, 5vw, 4rem)` |
| H1 | `2.25rem` |
| H2 | `1.5rem` |
| Body | `1rem / 1.6` |
| Small | `0.875rem` |

## Layout

- Use CSS Grid as the primary layout system.
- Center content within `1280px` and keep `1.5rem` side padding.
- Use a balanced spacing rhythm based on `0.5rem`.
- Use `clamp(4rem, 8vw, 8rem)` for section gaps.
- Keep hero and feature compositions asymmetric; avoid three equal-width columns.
- Collapse multi-column layouts below `768px` without horizontal overflow.
- Follow the z-index contract: base `0`, sticky navigation `100`, overlay `200`, modal `300`, toast `500`.

## Elevation And Depth

Use distressed textures, torn paper, xerox artifacts, chaotic typography, handwritten notes, duct tape elements, grainy photos, and misaligned grids.

- Use ease-out curves with durations between `200ms` and `300ms`.
- Entry animations fade and translate vertically from `16px` over `420ms`.
- Stagger list entries by `80ms`.
- Hover states use a subtle color shift and shadow adjustment over `200ms`.
- Page transitions only fade over `200ms`.
- Animate only `transform` and `opacity`.

## Shapes

Use `8px` as the base corner radius.

## Components

- **Primary button:** `0.5rem` radius, accent fill, weight 600, subtle hover lift, and `-1px` active press. No outer glow.
- **Secondary button:** `1.5px` muted border, primary text, and subtle hover fill.
- **Cards:** `0.5rem` radius, surface background, `0 2px 12px rgba(0, 0, 0, 0.06)` shadow, and `1px` border.
- **Inputs:** Label above field, `1px` border, `2px` accent focus ring with `2px` offset, and error text below. No floating labels.
- **Navigation:** Primary surface with an accent indicator and weight 500 for the active item.
- **Skeletons:** Shimmer matching the final component dimensions. No circular spinner.
- **Empty states:** Icon, descriptive text, and an action button.

## Do

- Use distressed textures and xerox effects.
- Use chaotic typography while preserving essential readability.
- Use torn paper edges and duct tape elements.
- Use zine-style asymmetric layouts.

## Avoid

- Do not use emojis in the UI; use a consistent icon system.
- Do not use pure black (`#000000`).
- Do not use accents above 80% saturation.
- Do not use equal-width three-column feature layouts.
- Do not use fixed viewport-height layouts; prefer `min-height: 100dvh`.
- Do not use AI copywriting cliches such as "Elevate", "Seamless", "Unleash", or "Next-Gen".
- Do not use broken external images or generic lorem ipsum.

## Use Cases

Landing pages and SaaS marketing sites.

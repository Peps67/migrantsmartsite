---
name: Migrant Smart
description: Your launchpad to success in Canada
colors:
  ignition-purple: "#5448f0"
  ignition-purple-light: "#6c60fc"
  ignition-purple-pale: "#8f84ff"
  ignition-purple-deep: "#4438d6"
  beacon-teal: "#2dd4bf"
  signal-pink: "#ff62ac"
  void-ink: "#0b0a12"
  paper: "#ffffff"
  ink: "#17171f"
  midnight-surface: "#141320"
  midnight-ink: "#edebf6"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.125rem, 4.6vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.625rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.97rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  pill: "9999px"
  card: "2rem"
  card-inner: "calc(2rem - 0.5rem)"
  band: "2.5rem"
  hero-cutout: "3rem"
spacing:
  section-x: "1.25rem"
  section-x-sm: "2rem"
  section-y: "4rem"
  section-y-lg: "6rem"
  container-max: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.ignition-purple}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.ignition-purple-deep}"
  button-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ignition-purple}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
  badge-brand:
    backgroundColor: "{colors.ignition-purple}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 1rem"
---

# Design System: Migrant Smart

## Overview

**Creative North Star: "The Waypoint Beacon"**

Migrant Smart is a guidance system dressed as a marketing site: every atmospheric hero is a beacon lighting the next stretch of an unfamiliar journey, not decoration for its own sake. The dominant mood is dusk-to-night — Ignition Purple deepens into Void Ink across the site's fixed-dark hero and CTA sections — with Beacon Teal cutting through as the recurring signal that marks "look here, this is the way forward" on emphasized words, eyebrow labels, and section badges. Newsreader's serif display type gives the brand a warm, considered voice (this is a human guide, not a SaaS dashboard); Hanken Grotesk carries the practical, plain-spoken body copy and UI chrome. Outside the fixed-dark moments, the rest of the site returns to a calm, paper-light (or midnight-surface in dark mode) canvas so the beacon effect reads as a deliberate contrast, not the wallpaper.

Components are confident and tactile: full-pill buttons that lift on hover and press down on click, nested "double-bezel" photo cards that feel machined rather than flat, and a floating glass-pill nav that behaves like a physical object sitting on top of the page rather than a bar bolted to it.

**Key Characteristics:**
- Dusk-to-night purple range (Ignition Purple → Void Ink) reserved for hero and CTA "beacon" moments, not general UI chrome.
- Beacon Teal as the one recurring accent for emphasis — italic headline words, eyebrow labels, badges — never a competing second brand color.
- Serif display (Newsreader) paired with grounded sans body/UI (Hanken Grotesk).
- Confident, tactile components: pill buttons, hover-lift, nested double-bezel cards.
- Atmospheric WebGL backgrounds (beams, prisms, plasma, warped grids, line waves) are load-bearing brand identity, not generic hero filler — each fixed-dark section picks one deliberately.

## Colors

Purple carries the brand and its guidance moments; teal is the one accent that says "this is the important word." Everything else is quiet neutral.

### Primary
- **Ignition Purple** (`#5448f0`): the brand color — primary buttons, links, focus rings, active nav states. In dark mode the active tone shifts to **Ignition Purple Light** (`#6c60fc`) for contrast against dark surfaces, with **Ignition Purple Pale** (`#8f84ff`) as its lightest tint (badges, subtle icon backgrounds) and **Ignition Purple Deep** (`#4438d6`) as the pressed/hover state.

### Secondary
- **Beacon Teal** (`#2dd4bf`): the single recurring accent — italicized emphasis words inside serif headlines, eyebrow labels above headings, and small badges on fixed-dark hero/CTA sections. Reserved for these "pay attention here" moments; it never appears as a competing second brand color for large surfaces.

### Tertiary (decorative, minor use)
- **Signal Pink** (`#ff62ac`): a rare, small decorative accent — soft blurred glow shapes tucked behind hero imagery. Used sparingly enough that it reads as atmosphere, not a third brand color.

### Neutral
- **Paper** (`#ffffff`) / **Ink** (`#17171f`): light-mode background and text.
- **Midnight Surface** (`#141320`) / **Midnight Ink** (`#edebf6`): dark-mode background and text.
- **Void Ink** (`#0b0a12`): the fixed-dark background used for every hero and CTA-band "beacon" section, regardless of the site's light/dark toggle — this is what the WebGL backgrounds (beams, prism, plasma, grid distortion, line waves) render against, and what makes those sections read as deliberately theatrical rather than theme-dependent.

### Named Rules
**The One Beacon Rule.** Beacon Teal marks emphasis, never fills backgrounds or large surfaces. If teal is covering more than a headline word, a label, or a badge, it's being misused.

**The Void Ink Rule.** Hero and CTA-band sections are fixed to Void Ink regardless of the user's light/dark preference — these are theatrical beacon moments, not theme-adaptive content, because the WebGL shaders they host are authored to blend against black.

## Typography

**Display Font:** Newsreader (with Georgia, serif fallback)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif fallback)

**Character:** A warm, editorial serif for the moments that need a human voice (headlines, pull quotes) paired with a plain-spoken grotesk for everything practical (body copy, labels, navigation, buttons) — the pairing reads as "a considered guide," not a corporate template.

### Hierarchy
- **Display** (500 weight, `clamp(2.125rem, 4.6vw, 4rem)`, 1.06 line-height): hero headlines only, set in Newsreader; the emphasized word or phrase within is set in Beacon Teal italic.
- **Headline** (500 weight, `clamp(1.75rem, 3.6vw, 2.625rem)`, 1.12 line-height): section headings throughout the page body.
- **Title** (500 weight, ~1.25rem, 1.2 line-height): card and sub-section titles.
- **Body** (400 weight, ~0.97rem, 1.6 line-height, `muted-foreground` color for secondary copy): paragraph copy, capped around 48–58ch for readability.
- **Label** (700 weight, 0.8125rem, uppercase, 0.14em letter-spacing): eyebrow tags above headings, set in either Ignition Purple (on light/neutral sections) or Beacon Teal (on fixed-dark Void Ink sections).

### Named Rules
**The Italic Descender Rule.** Any italicized Beacon Teal emphasis word containing a descender (g, j, p, q, y) gets `leading-[1.1]` minimum and a `pb-1` reserve, so the descender never clips against the line below.

## Layout

Content sits in a `max-w-[1240px]` centered container with `px-5` mobile / `px-8` tablet-and-up gutters. Standard section rhythm is `py-16` mobile / `py-24` desktop; hero sections instead use `min-h-[100dvh]` with the content flex-centered vertically, so every page opens with a full-viewport first impression regardless of copy length. Two-column heroes and feature rows use a `lg:grid-cols-2` (or slightly asymmetric `[1.05fr_0.95fr]`) split that collapses to a single stacked column below `lg`. Grid feature lists step from `grid-cols-1` (mobile) through `sm:grid-cols-2` to `lg:grid-cols-4` as needed.

## Elevation & Depth

The system is flat-by-default with depth conveyed through soft, large-radius ambient shadows rather than a stepped elevation scale — shadows are tinted toward the page's own ink color (never pure black) and used only under cards that visually float (photo cards, the CTA band, the floating nav pill). On fixed-dark beacon sections, depth instead comes from the WebGL background's own light and motion, not from a drop shadow.

### Shadow Vocabulary
- **Card float** (`0 30px 60px -24px rgba(23,23,31,0.28)`): the standard soft shadow under photo cards and feature cards.
- **Nav float** (`0 20px 50px -20px rgba(23,23,31,0.35)`): under the floating glass-pill navigation.
- **Deep float** (`0 40px 70px -30px rgba(0,0,0,0.6)`): under hero imagery on fixed-dark sections, where the shadow needs to read against Void Ink.

### Named Rules
**The Flat-by-Default Rule.** Nothing has a shadow at rest unless it's meant to look like it's floating above the page (a card, the nav, a CTA band). Plain content sections stay flat.

## Shapes

Corners are consistently soft and generous, never sharp. Buttons, badges, and pills use full radius (9999px). Photo and feature cards use a **double-bezel** construction: an outer wrapper (`rounded-[2rem]`, a hairline border, `bg-black/5` or `bg-white/5`) holds an inner content pane at a mathematically smaller radius (`calc(2rem - 0.5rem)`), so the two curves stay concentric rather than looking like two unrelated rounded boxes stacked together. CTA-band cards use an even larger `rounded-[40px]`. Hero sections use a distinctive **rounded-top "cutout"**: the hero's top-left/top-right corners round into the page background above it (where the floating nav sits), so the hero reads as a card tucked just beneath the nav rather than a straight-edged rectangle.

### Named Rules
**The Concentric Bezel Rule.** Whenever a card nests an image or content pane inside a bordered wrapper, the inner radius is always the outer radius minus the wrapper's own padding — never an independently chosen number — so the curves stay visually concentric.

## Components

### Buttons
- **Shape:** full pill (`rounded-full`, 9999px).
- **Primary:** Ignition Purple background, white text, soft purple-tinted shadow; darkens to Ignition Purple Deep on hover.
- **White:** white background, Ignition Purple text — used for CTAs sitting on fixed-dark Void Ink sections, where a solid purple button would lose contrast against the WebGL background.
- **Ink / Outline / Ghost / Link:** secondary and tertiary actions; outline uses a hairline border that turns purple on hover, ghost is borderless with a subtle accent-tinted hover fill, link is bare text with an arrow that gains a gap on hover.
- **Hover / Focus:** every filled variant lifts `-translate-y-0.5` on hover and presses `scale-[0.98]` on click — this tactile lift-and-press is a signature, not incidental.

### Badges
- **Shape:** full pill, small padding (`px-4 py-2` in larger contexts, tighter inline).
- **Brand:** solid Ignition Purple fill, white text — the "selected/active" state (e.g. an active blog category filter).
- **Soft:** tinted secondary background, purple text — a quieter default state.
- **Outline:** hairline border, transparent fill — used for unselected states; on fixed-dark Void Ink sections this flips to a white/25%-opacity border with white text so it doesn't disappear against the dark background.

### Cards / Containers
- **Corner Style:** double-bezel construction (see Shapes) at `rounded-[2rem]` outer / concentric inner for photo and feature cards; `rounded-[40px]` for CTA bands.
- **Background:** `bg-black/5` (light mode) or `bg-white/5` (dark mode) for the outer wrapper; the inner pane carries the actual photo or content.
- **Shadow Strategy:** see Elevation & Depth's Card Float / Deep Float tokens.
- **Border:** a hairline border (`border-black/10` light, `border-white/15` dark) traces the outer wrapper only.

### Navigation
- Floating glass pill, `sticky top-4`, centered, with a translucent blurred background and a hairline border — behaves like a physical object resting on the page rather than a bar spanning it. Active route gets a filled pill background; the "Our Offering" item expands a glass dropdown panel on hover. On mobile, the pill's hamburger morphs into an X and opens a full-screen blurred overlay with its own explicit close button (not just the morphed icon, which the overlay would otherwise cover).

### Fixed-Dark "Beacon" Sections
Every page's hero, and the CTA band just above its footer, is a **Void Ink** section that stays dark regardless of the site's light/dark toggle, hosting one deliberately chosen WebGL background: warped beams, a raymarched prism, plasma, a grid-distorted photo, or line waves, each tuned to the Ignition Purple / Beacon Teal palette. These are the site's signature moments — treat them as brand identity, not as a generic "dark hero" template, and never default a new page's hero to a flat color when a beacon treatment would fit the pattern.

### Footer
A bold, fixed Ignition Purple band (not theme-adaptive) with rounded top corners that nest into the page above it, mirroring the hero's cutout in reverse. White logo, white/light text and links, and a white pill CTA button for contrast against the solid purple fill.

## Do's and Don'ts

### Do:
- **Do** reserve Beacon Teal for emphasis only — an italic word, a label, a badge — never a background or large fill.
- **Do** keep hero and CTA-band sections fixed to Void Ink regardless of the site theme toggle; they're theatrical beacon moments, not theme-adaptive content.
- **Do** use the double-bezel construction (concentric outer/inner radius) for any card that nests a photo or content pane inside a bordered wrapper.
- **Do** give filled buttons the hover-lift + press-scale treatment; it's a signature interaction, not optional polish.
- **Do** use the white button/badge variants on Void Ink sections instead of the purple-on-purple combination that disappears against certain WebGL backgrounds.

### Don't:
- **Don't** introduce a second competing brand color alongside Ignition Purple and Beacon Teal; Signal Pink stays a rare, minor decorative accent.
- **Don't** give plain content sections a resting shadow; shadows are reserved for things that should look like they're floating (cards, nav, CTA bands).
- **Don't** default a new hero section to a flat, static gradient or solid color when the pattern across the site is a deliberately chosen WebGL "beacon" background.
- **Don't** let a hamburger-morphed close icon be the only way to close the mobile nav overlay — always include an explicit, reachable close control inside the overlay itself.

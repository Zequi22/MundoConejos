---
name: boho-vibrant-web
description: Design system for bright, colorful, playful, bohemian/artistic websites (marketing, content, brand sites). Use when the user asks to build or restyle a site in a vibrant boho/artsy style, with flat colors and NO gradients, SVG decorative shapes, hard offset shadows, thick ink borders, custom SVG logo/branding, and playful typography. Stack React + Vite + Tailwind CSS v4.
---

# Boho Vibrant Web — design system

A reusable style for bright, happy, colorful, artistic, "boho/artsy", creative,
vibrant and playful websites. It is a flat, editorial-poster aesthetic: solid
color blocks, organic shapes, thick outlines and hard offset shadows — never
gradients.

Result reference: `MundoConejos` (React + Vite + Tailwind v4).

## When to use

Use when the user wants a site that feels bright / happy / colorful / artistic /
boho / vibrant / playful, or asks for branding, a logo, graphic-design touches
on a marketing or content site. Do NOT use for corporate/fintech/minimal styles.

## Hard rules (non-negotiable)

1. **NO gradients.** Never use `linear-gradient`, `radial-gradient`,
   `conic-gradient`, `bg-gradient-*`, `from-*/via-*/to-*`, or gradient text
   (`bg-clip-text`). Shadows are flat offsets, not blurred color fades (a soft
   neutral shadow is allowed only for depth on big blocks).
2. **NO emojis.** Replace every emoji with an SVG icon (`lucide-react`).
3. Flat, saturated colors on warm cream. No transparency tricks for brand color.
4. Thick borders (`border-2`/`border-4`) in warm ink `#3b2a1f`.
5. Hard offset shadows (`shadow-hard`), playful rotation (`-rotate-2`,
   `rotate-1`), organic blobs, arch frames (`rounded-t-full`).
6. Generous rounding (`rounded-2xl` → `rounded-[2.5rem]`), bold weight, fun.

## Design tokens

### Palette (boho flat)

| Token | Hex | Use |
| --- | --- | --- |
| cream | `#fff8ee` | page background |
| ink | `#3b2a1f` | text + borders |
| terracotta | `#e76f51` | primary |
| coral | `#f4a261` | warm accent |
| mustard | `#e9c46a` | highlight / CTA |
| sage | `#6a994e` | nature accent |
| lime | `#a7c957` | success / checks |
| teal | `#2a9d8f` | secondary |
| berry | `#9b5de5` | playful accent |
| rose | `#e08ea6` | soft accent |
| sky | `#6fb3d9` | info / water |

Soft tint backgrounds for sections: `sand #fbeedd`, `mint #e4f1e0`,
`blush #fde8e4`, `butter #fdf3d6`, `cloud #e6f2f1`.

Semantic mapping: `--primary` terracotta, `--secondary` teal, `--accent`
mustard (dark foreground), `--foreground` ink, `--background` cream.

### Typography

- Display/headings: **Fraunces** (organic serif, weight 700).
- Body/UI: **Nunito** (rounded sans, 400–800).
- Accent labels: **Caveat** (handwritten script) for eyebrows, badges, stickers.

### Shadows & radius

- `--shadow-hard: 4px 4px 0 0 #3b2a1f`
- `--shadow-hard-lg: 8px 8px 0 0 #3b2a1f`
- radius: `--radius: 1.25rem`.

## Setup (Tailwind CSS v4)

Fonts — `src/styles/fonts.css` (imported first):

```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:opsz,wght@9..144,400..900&family=Nunito:wght@400..800&display=swap');
```

Theme — `src/styles/theme.css`. Put brand colors and shadows in `@theme inline`
so utilities like `bg-terracotta`, `shadow-hard`, `font-script` are generated:

```css
@theme inline {
  --font-sans: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  --font-display: 'Fraunces', ui-serif, Georgia, serif;
  --font-script: 'Caveat', ui-serif, cursive;

  --color-cream: #fff8ee;
  --color-ink: #3b2a1f;
  --color-terracotta: #e76f51;
  --color-coral: #f4a261;
  --color-mustard: #e9c46a;
  --color-sage: #6a994e;
  --color-lime: #a7c957;
  --color-teal: #2a9d8f;
  --color-berry: #9b5de5;
  --color-rose: #e08ea6;
  --color-sky: #6fb3d9;
  --color-sand: #fbeedd;
  --color-mint: #e4f1e0;
  --color-blush: #fde8e4;
  --color-butter: #fdf3d6;
  --color-cloud: #e6f2f1;

  --shadow-hard: 4px 4px 0 0 #3b2a1f;
  --shadow-hard-lg: 8px 8px 0 0 #3b2a1f;

  --radius-lg: 1.25rem;
}

@layer base {
  body { @apply bg-background text-foreground font-sans antialiased; }
  h1, h2, h3 { font-family: var(--font-display); letter-spacing: -0.02em; font-weight: 700; }
}

@utility card-boho {
  border-radius: 1.5rem;
  border: 2px solid var(--color-ink);
  background-color: var(--card);
  transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s cubic-bezier(.22,1,.36,1);
}
```

Motion keyframes + utilities: `float-slow`, `wiggle`, `fade-up`, `marquee`,
`spin-slow` → `animate-float`, `animate-wiggle`, `animate-fade-up`,
`animate-marquee`, `animate-spin-slow`. Always wrap them in a
`@media (prefers-reduced-motion: reduce)` guard that disables animation.

## Decorative SVG kit (`components/Decor.jsx`)

Pure-SVG, `fill="currentColor"`, no gradients. Color them with text utilities
(`text-mustard`, `text-teal/25`). Build these:

- `Blob` — one organic path (viewBox 200, translate(100 100)). Size with
  `h-* w-*`, rotate with `rotate-45`.
- `Sparkle` — 4-point star path.
- `SunBurst` — center circle + generated rays (`Array.from({length:16})` with
  `rotate(angle 50 50)`).
- `Daisy` — 4 rotated ellipses + mustard center circle.
- `Squiggle` — hand-drawn underline stroke (use under a highlighted word).
- `WaveDivider` — `<svg preserveAspectRatio="none">`; place at a section edge
  with `absolute bottom-0 ... text-<next-section-color>`; use `rotate-180` at a
  top edge.
- `Rainbow` — 3 concentric stroked arcs (terracotta/mustard/teal).

## Branding / logo (`components/Logo.jsx`)

SVG built from primitives: a filled **arch** (`M8 66V34a28 28 0 0 1 56 0v32Z`)
in terracotta with an ink stroke, a white bunny silhouette (two ear ellipses +
circle head) with ink eyes/nose. Wordmark: `font-display font-bold`, second word
in `text-primary`. Reuse the mark in the navbar, footer and as a favicon.

## Layout patterns

- **Navbar (fixed):** top 6-color stripe (one `flex h-1.5` of `flex-1` color
  spans), cream bar with `border-b-2 border-ink`, `Logo`, pill nav links
  (active = `border-2 border-ink bg-primary text-primary-foreground shadow-hard`),
  mustard CTA, animated mobile menu. Because it is `fixed`, the first section
  must have top padding ≥ navbar height (use `pt-24 md:pt-28`).
- **Page hero (`components/Hero.jsx`):** tint background (`bg-butter` etc.) +
  blobs + `SunBurst`/`Sparkle`/`Daisy`; two columns — text (rotated script
  eyebrow, big Fraunces title with a colored highlight + `Squiggle` underline,
  paragraph, buttons) and an **arch-framed** image (`rounded-t-full border-4
  border-ink shadow-hard-lg`) with a rotated script sticker badge; finish with a
  bottom `WaveDivider` in `text-cream`.
- **Buttons:** `rounded-full border-2 border-ink px-8 py-4 font-bold shadow-hard
  transition hover:-translate-y-0.5 hover:shadow-hard-lg`. Primary = terracotta
  bg, secondary = cream/card bg.
- **Cards:** `card-boho ... shadow-hard hover:-translate-y-1.5 hover:shadow-hard-lg`.
  Give cards a colored header block (`border-b-2 border-ink`) with an icon chip
  (`grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink`).
- **Colored sections:** alternate solid tints (`bg-cloud`, `bg-mint`, `bg-butter`,
  `bg-blush`, `bg-mustard`, `bg-terracotta`, `bg-ink`, `bg-destructive`) between
  cream sections, separated by `WaveDivider`s.
- **Marquee ticker:** full-width `border-y-2 border-ink bg-primary` strip with
  `flex w-max animate-marquee` and the words duplicated twice for a seamless
  loop, separated by `Daisy` icons.
- **Footer:** `bg-ink text-cream`, top `WaveDivider` in `text-cream`, blobs,
  mustard column headings, spectrum stripe, `Heart` icon (SVG).

## Accessibility & polish

- Decorative SVGs: `aria-hidden="true" focusable="false"`.
- Keep text contrast: light accents (mustard, coral, sky, lime) need ink text;
  dark accents use cream text.
- Use `font-script` sparingly (labels/stickers), never for body copy.
- Add `overflow-hidden` to any section containing absolutely-positioned blobs
  that could cause horizontal scroll.
- Verify with `npm run build`; re-read the output to confirm no errors.

## Checklist before finishing

- [ ] Zero gradients anywhere (`rg "gradient|from-\[|via-|to-\[" src`).
- [ ] Zero emojis (all replaced by lucide SVG icons).
- [ ] Brand tokens present in `@theme inline`; `shadow-hard`, `card-boho`,
      `font-script` compile.
- [ ] Fixed navbar + first-section top padding.
- [ ] Every hero/section ends with the correct wave/section color transition.
- [ ] `npm run build` passes.

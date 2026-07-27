# Namami Law Offices — Design System

A design system for **Namami Law Offices LLP**, a boutique, creator- and inventor-first
**IP & Entertainment law firm** in New Delhi, India. The firm works at the intersection of
intellectual-property law, media, and the Indian creator economy.

> **Namami** (नमामि) is Sanskrit, first person — *"I bow," "I revere."* The brand mark draws the
> Anjali mudra (palms joined) as a single unbroken saffron line that also reads as a lotus. The
> idea: protecting what people create is an act of reverence for the work.

## Source material
- `uploads/Namami-Brand-Guidelines.html` — the firm's official brand guidelines deck (17 slides).
  Everything here is derived from it. Logos were extracted from that file into `assets/`.

No codebase or Figma was provided; the live site referenced is **namamilaw.com**.

---

## CONTENT FUNDAMENTALS
**Voice: precise, plain, quietly certain.** Authority is *shown, not announced.*
- **Precise over persuasive** — state the position and its basis; let accuracy carry the weight.
- **Plain over performative** — explain the law in language a founder understands; no Latin for its own sake.
- **Authoritative, never loud** — no superlatives, no urgency, no exclamation marks. Confidence is in the calm.
- **Fluent in the client's world** — speaks film, music and the creator economy as naturally as statute.

**Casing & punctuation:** Section **headlines end on a full stop** — deliberate, signals certainty
(e.g. *"Intellectual property, protected."*). Eyebrows are **UPPERCASE, tracked**. "We"/"the firm",
addressing the reader as "you". **No emoji.** A single saffron `★`/`✓`/`✕` may mark do/don't lists.

**Sounds like us:** *"A franchise is, at its core, an IP licensing arrangement."*
**Doesn't:** *"India's #1 most trusted IP firm — guaranteed results!"*

**Compliance (Bar Council of India):** all outward copy is informational/educational — it presents
expertise, it does not solicit. No promises of results, no superlatives ("best", "No.1"), no
comparative claims or solicitation testimonials. A standing disclaimer appears at public entry points.

---

## VISUAL FOUNDATIONS
- **Colour.** Charcoal `#1C1C1E` + cream `#F9F5EF` do ~85% of the work; **saffron `#EF8922`** (the mark
  colour, canonical accent) earns attention precisely because it is rare. **Warm gold `#C8841A`** is a
  deeper variant for large print fills where bright saffron vibrates. Proportion rule of thumb:
  **Cream 55 / Charcoal 30 / Stone 8 / Saffron 7.** Never fill large blocks with saffron; never run two
  accents in one layout. Off-black `#1A1A1A` for body on light; warm grey `#737370` for captions/meta.
- **Type.** One typeface, held with discipline: **Neue Haas Grotesk Display Pro** (licensed). This
  system substitutes **Hanken Grotesk** (free, nearest neo-grotesk match) — *see Caveats*. Set tight at
  display (-3% tracking, 0.98 leading), light (300) and open at text. Headlines semibold (600) with a
  tracked uppercase eyebrow above and a short gold rule below.
- **Layout.** Left-weighted, editorial, unhurried. Web uses a **fixed 320px charcoal sidebar** on the
  left; content hangs from a shared left margin — **never centred.**
- **Backgrounds.** Flat fields only — charcoal, cream, or stone. **No gradients on UI surfaces.** The one
  signature flourish is a **single semi-transparent gold ellipse** (`--ellipse-glow`, a radial fade)
  bleeding off one corner — used **once per view, never repeated.**
- **Cards.** Bordered, **no fill**, with a **bold 3px charcoal top edge** (saffron when on dark).
  Editorial, not "feature grid". Corners are **gently rounded — 8px default** (12px `--radius-md` for larger surfaces); pill only for chips.
- **Shadows.** Used sparingly. The mark gets a warm saffron drop-glow (`--shadow-mark`); UI is otherwise
  near-flat. No coloured-left-border cards, no bluish-purple gradients, no emoji cards.
- **Borders & rules.** Hairline `rgba(28,28,30,.14)` on light / `rgba(249,245,239,.16)` on dark. A short
  **64px gold rule** sits under headlines as a signature.
- **Motion.** Restrained. Smooth scroll, gentle fades, link/nav hovers shift colour (cream → gold) and
  nudge padding-left ~8px. No bounces, no infinite loops.
- **Hover / press.** Primary button darkens to near-black; accent saffron darkens to gold; ghost border
  darkens to charcoal; links drop to ~70% opacity. Inputs turn their bottom rule saffron on focus.
- **Imagery.** Documentary register — real texture over stock gloss, natural light, generous negative
  space, a subtle **warm grade**. Avoid cool/blue corporate tones. Where no image exists, the charcoal
  field + gold ellipse carry the page.

---

## ICONOGRAPHY
The brand guidelines define **no icon set** — the system is deliberately icon-light and editorial.
Meaning is carried by **type, rules, and the single brand mark**, not UI glyphs. Where a glyph is
genuinely needed:
- The **brand mark** (`assets/mark-saffron.png`) is the one proprietary symbol — used for avatars and
  favicons (isolated saffron mark on charcoal), never as decoration.
- A small set of **Unicode marks** is sanctioned for editorial lists: `★` (saffron accent star),
  `✓` / `✕` for do/don't, `—` em dashes, `↓`/arrows for nav hints.
- **No emoji, ever.** No PNG/SVG icon sprite ships with the brand.
- If a future product genuinely needs a UI icon set, use a **thin, single-weight line set** (e.g. Lucide
  at ~1.5px stroke, charcoal) to stay consistent with the editorial line of the mark — and flag it.

---

## Index / manifest
**Root**
- `styles.css` — entry point; `@import`s the four token files. Consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `readme.md` — this file. `SKILL.md` — portable Agent-Skill manifest.

**Assets** (`assets/`)
- `mark-saffron.png` — the Anjali-mudra / lotus mark.
- `wordmark-dark.png` — full horizontal lockup for light surfaces.
- `wordmark-reversed.png` — full horizontal lockup for charcoal/dark surfaces.

**Components** (`components/core/`) — `Button`, `Eyebrow`, `Card`, `Tag`, `Badge`, `Input`.
Each has `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` is the directory specimen.
Namespace at runtime: `window.NamamiLawOfficesDesignSystem_*` (run `check_design_system` for the exact suffix).

**Guidelines / specimen cards** (`guidelines/`) — colour, type, spacing and brand cards for the Design System tab.

**UI kits** (`ui_kits/website/`) — interactive recreation of the namamilaw.com marketing site.

**Slides** (`slides/`) — `title-slide`, `content-slide`, `quote-slide` (1280×720), matching the brand deck.

---

## CAVEATS
- **Font substitution.** Neue Haas Grotesk Display Pro is licensed and not redistributable, so the system
  ships **Hanken Grotesk** as the nearest free match. Provide the licensed Neue Haas webfonts to swap in
  (replace the `@import` in `tokens/fonts.css` and `--font-grotesk` in `tokens/typography.css`).
- **Saffron vs Gold.** The guidelines leave one open decision: the mark is saffron `#EF8922`, the web
  system uses gold `#C8841A`. This system treats **saffron as the canonical accent** (it must match the
  mark) and gold as the deeper large-fill variant. Nominate a single unified value if you prefer.

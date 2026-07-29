# Namami Law Offices — Website

Marketing website for Namami Law Offices, a boutique IP and media law firm. Static, no-build-step site: plain HTML pages with in-browser React (via CDN + Babel standalone) for the interactive bits.

**Pages:** Home, The Firm, Team, Practice Areas (+ detail view), Insights, Contact, Thank You.

## How it's built

There's no bundler, no `npm install`, no build step. Each HTML page loads three scripts from a CDN and then its own inline JSX, transformed in the browser at page-load:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
<script src="data.js"></script>
<script type="text/babel" src="Layout.jsx"></script>
<script type="text/babel">/* page content */</script>
```

This keeps the site trivially easy to host and edit (any text editor, no toolchain), at the cost of a Babel transform happening on every visitor's device. That trade-off is fine at this site's traffic and complexity, but worth knowing if the site grows.

### File structure

| Path | What it is |
|---|---|
| `index.html`, `about.html`, `team.html`, `practice.html`, `insights.html`, `contact.html`, `thank-you.html` | The pages. Each is self-contained: CDN scripts + inline JSX for that page's content. |
| `Layout.jsx` | Shared shell — logo, sidebar nav (desktop) / top bar + drawer (mobile), footer, the Bar Council disclaimer modal, and a few shared building blocks (`SECTION`, `H2`, corner marks, etc.). Loaded by every page as `window.Shell`. |
| `PracticeDetail.jsx` | The slide-in detail panel for a practice area, opened from `practice.html?area=<slug>`. Loaded as `window.PracticeDetail`. |
| `data.js` | All shared content: nav links, practice areas, industries, team bios, testimonials, insights articles. Edit this file to change site copy without touching layout code. |
| `site.css` | Global stylesheet — CSS variables (colors, spacing), the responsive sidebar/mobile-bar breakpoint (880px), and shared component classes. |
| `assets/` | Logo marks and wordmarks (PNG). |
| `_ds/` | Design system export: design tokens (`tokens/*.css`) and a compiled component reference bundle (`_ds_bundle.js`) documenting `Button`, `Card`, `Eyebrow`, etc. Reference material, not directly imported by the live pages. |
| `design_handoff_namami_website/` | Original design handoff — design tokens and source files from the design tool. Reference only. |
| `.nojekyll` | Tells GitHub Pages to serve the site as-is, without running it through Jekyll. |

## Running locally

Any static file server works — the site has no server-side logic.

```bash
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```

or, with Node:

```bash
npx serve .
```

Opening `index.html` directly via `file://` will **not** work — the browser blocks the module-style script loading over the `file://` protocol, and the JSX scripts need to resolve relative paths (`data.js`, `Layout.jsx`) via HTTP.

## Editing content

Most day-to-day changes (adding a team member, a practice area, an insights article, changing a phone number) only require editing **`data.js`** — it's plain JavaScript objects, no JSX.

Layout, navigation, and page structure changes require editing `Layout.jsx`, `PracticeDetail.jsx`, or the individual page `.html` files.

## Deployment

The site is set up for **GitHub Pages**: push to the branch Pages is configured to serve, and it's live. `.nojekyll` is required — without it, GitHub's Jekyll processing will ignore files/folders starting with an underscore, which would break the `_ds/` folder.

## Mobile support

The site is responsive down to small phone widths (tested at 375–430px). Layout switches from a fixed sidebar (desktop) to a top bar with a slide-out drawer (≤880px width) via `site.css`. If you're extending the layout, keep in mind the shell's root element (`.nm-shell` in `Layout.jsx`) is a flex container — any width-related change there should be checked at both a desktop and a mobile viewport, since the two use different `flex-direction` values.

## Legal disclaimer

The Bar Council of India does not permit advertisement or solicitation by advocates. The site displays a disclaimer modal on first visit (see `DisclaimerModal` in `Layout.jsx`) and repeats the notice in the footer. Don't remove or alter this without sign-off from the firm.

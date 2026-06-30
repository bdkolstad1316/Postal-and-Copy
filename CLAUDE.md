# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing website for **Postal & Copy +** (a pack/ship/print/notary + gift storefront in Clarkston, WA). Plain semantic HTML + CSS + vanilla JS — no framework, no build step, no tests, and **zero npm dependencies**.

## Commands

```bash
npm start          # runs server.js on $PORT (default 3000) → http://localhost:3000
```

There is no build, lint, or test step. `node` ≥ 18 is the only requirement (`npm install` does nothing useful — there are no deps). For verification, run the server and load the page; the static files under `public/` are the entire app.

## Architecture (the important part)

The site is **content-driven from one config object**, populated into static HTML at runtime:

1. **`public/config.js`** defines `window.BUSINESS` — the **single source of truth** for all business content: phone, address, hours, `services[]`, `gifts{}`, social. To change site content, edit this file, not the HTML.
2. **`public/index.html`** is static markup with placeholder fallback text. Dynamic spots are marked with `data-field="..."` attributes and container IDs (e.g. `#services-grid`, `#hours-table`, `#gifts-chips`).
3. **`public/site.js`** reads `window.BUSINESS` and fills the page on load: `setText()` populates `[data-field]` elements; it builds the services grid, the hours table (auto-highlighting today), the gift chips, the mobile nav toggle, the logo scroll-to-top, and injects `LocalBusiness` JSON-LD. It computes `telHref` and `mapsUrl` once and reuses them for all call/directions links.

So a typical content change touches `config.js` only; a structural change touches `index.html` + `site.js` + `styles.css` together.

`public/styles.css` holds all styling. Design tokens live in `:root` (navy `--navy: #1c4e80`, red accent `--accent: #e8472b`). There's a `prefers-reduced-motion` block and responsive breakpoints at 900px and 640px (the mobile hamburger appears ≤640px).

## Conventions and gotchas

- **The Featured Gifts section is feature-flagged.** `config.gifts.enabled` (currently `false`). The `#gifts` section and its `Gifts` nav link carry the `hidden` attribute in the markup; `site.js` removes `hidden` only when `enabled` is true. To launch it, set `enabled: true` and supply real `categories`/`photos`. The `photos[]` array, when non-empty, auto-renders an image gallery.

- **Caching is deliberate.** `server.js` sends `Cache-Control: no-cache` for editable text files (html/js/css/json/xml/txt) and `max-age=86400` for binary assets. Don't "optimize" this — content updates rely on the text files revalidating.

- **Raster brand assets are generated from HTML sources, not hand-drawn.** `og-image.png` ← `og.html`, and `apple-touch-icon.png` / `favicon-32.png` ← `icon.html`. They're rendered by pointing the gstack `browse` binary at the running server: `browse viewport <WxH>` then `browse screenshot --viewport <out.png>`. The `*.html` sources are not linked from the site; regenerate the PNG if you change the source.

- **`llms.txt`, `robots.txt`, `sitemap.xml`** exist for search/AI discoverability — keep them in sync with real content changes.

## Deploy

Hosting is **Railway**, and the owner commits/pushes via **GitHub Desktop** (not the git CLI). Railway auto-detects Node, runs `npm start`, and redeploys on every push. **Do not commit or push unless explicitly asked** — leave changes in the working tree for the owner to ship through GitHub Desktop.

DNS runs through **Cloudflare (proxied)**. After a push, Cloudflare may edge-cache `*.js`/`*.css` at the edge; if the live site looks stale after a redeploy, do a one-time Cloudflare **Purge Everything**.

## Local preview note

When iterating with a browser preview, the preview browser can hold a stale `styles.css`/`site.js` across reloads. Cache-bust by swapping the stylesheet/script element with a `?v=<n>` query string rather than trusting a plain reload.

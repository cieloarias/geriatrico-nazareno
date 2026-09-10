# Geriátrico Señor de Nazareno

Website for **Casa de Reposo y Residencia Geriátrica Señor de Nazareno**, a geriatric residence with two locations in San Borja, Lima, Peru.

**Live site:** deployed via Netlify, auto-published on every push to `main`.

## What this is

A plain static site — HTML, CSS, and JavaScript, no build step, no framework, no `npm install`. Open any `.html` file in a browser (or serve the folder locally) and it runs as-is.

- **Bilingual**: Spanish (default) / English toggle, no page reload.
- **Pages**: `index.html` (home), `nosotros.html` (about), `servicios.html` (services), `residencias.html` (locations), `staff.html` (medical staff), `galeria.html` (gallery), `blog.html` + `blog-articulo.html`, `contacto.html`.

## How content works

All real content lives in one place: **`assets/js/data.js`**. Staff bios, service descriptions, testimonials, gallery captions, addresses, phone numbers — it's all there as plain JavaScript objects. To update a fact (a phone number, a doctor's credential, a testimonial), edit it there; every page that shows it updates automatically.

All **on-screen text/labels** (headings, buttons, nav labels) live in **`assets/js/i18n.js`**, with a Spanish block and an English block. Every key must exist in both — the site does not fall back gracefully if one is missing.

## File structure

```
index.html, nosotros.html, ...   → one file per page, mostly markup + a small
                                    inline script wiring that page's data
assets/
  css/styles.css                 → the entire design system (tokens, layout,
                                    every component) — one file, no preprocessor
  js/
    data.js                      → SITE_DATA — all real facts and content
    i18n.js                      → I18N — all ES/EN UI text
    partials.js                  → renders the shared header/footer
    render.js                    → builds dynamic sections from SITE_DATA
    main.js                      → all interactions/animations, one boot
                                    sequence on DOMContentLoaded
    sonar-grid.js                → the animated dot-field background effect
  images/, videos/               → real photography and video assets
```

## Editing

No build step means no compiling — edit a file, refresh the browser. To preview locally with working relative paths:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening the HTML files directly via `file://` mostly works too, but some things — fetches, certain video behaviors — need a real server.)

## Deployment

Netlify is connected to this GitHub repo and rebuilds automatically on every push to `main`. There's no separate deploy step — `git push` is the deploy.

## Non-negotiables for future edits

- **No fabricated content.** Every name, number, quote, and claim traces back to something real. Don't invent staff, statistics, or testimonials.
- **No framework/build-step creep.** This stays plain HTML/CSS/JS on purpose.
- **Keep ES and EN in sync** in `i18n.js` — every key needs both languages.
- **Accessibility and responsiveness** are part of the design, not an afterthought — check both when changing layout.

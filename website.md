# Website pages (OM-038)

Sources: PROJECT_SPEC AC-12.2, AC-12.3; ARCHITECTURE D6; brand tokens in this repo.

## Stack

Static HTML/CSS under `website/site/`, published as a GitHub Pages project site. No Next.js/shadcn in this path. Mirror `tokens/brand.css` into `website/site/brand.css` when tokens change.

## Page inventory (OM-038)

| Page | Path | Job |
|---|---|---|
| Product | `index.html` | Brand-first product overview; roles; screenshot policy |
| Workflow | `workflow.html` | Matchday journey steps; control vs media |
| Downloads | `downloads.html` | Source repo links; honest release status |
| Docs | `docs.html` | Entry stub to `OpenMatchday/docs` |
| Privacy | `privacy.html` | Local-first, registry, contact stub |
| Takedown | `takedown.html` | Public takedown stub; no Git-history erasure promise |

Deferred to later tasks: generated catalogs, registry browser, contribution wizard, SEO budget (OM-039+).

## Rules

- Skip link to `#main` on every page.
- Brand name is a hero-level signal on marketing pages.
- Real screenshots only; never fabricate device-frame UI shots (AC-12.3).
- No unmeasured latency/bitrate/capability numbers.
- Tally red is not decorative chrome on the marketing site.
- Honor `prefers-reduced-motion`; no `backdrop-filter: blur`.

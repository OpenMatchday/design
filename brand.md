# Brand identity (OM-037)

Sources: PROJECT_SPEC AC-12.1; WCAG 2.2 SC 1.4.3.

## Identity

**Open Matchday** is a pitch-side control room brand: precise grid, restrained turf chrome, chalk type, amber warnings, and red reserved for on-air tally. It is original sports-broadcast UI, not a network pastiche.

Machine tokens: [`tokens/brand.tokens.v0.json`](tokens/brand.tokens.v0.json) and [`tokens/brand.css`](tokens/brand.css). Mark: [`icons/mark.svg`](icons/mark.svg).

## Surfaces

| Mode | Use | Tokens |
|---|---|---|
| Dark director | Director, Event Operator, Graphics, Social, Program Monitor chrome | `director.*` |
| Daylight camera | Camera capture controls and Scoreboard Reader calibration panels | `camera_daylight.*` |

Daylight controls sit on light panels inside the shared dark app shell when needed; camera role pages may use the daylight surface tokens for the control plane so outdoor glare remains readable.

## Tally

Unmistakable Program indicator. See [`tally.md`](tally.md). Saturated red is never decorative chrome.

## Grid and type

- 8px spacing unit; scale 4 / 8 / 16 / 24 / 32 / 48 / 64.
- Display tracking slightly tight; tally label tracking wide (`ON AIR` / `TALLY OFF`).
- Generic font stacks until a redistributable license is cited under `fonts/`.

## Banned patterns (AC-12.1)

Absent from brand assets and product UI:

- Generic purple gradients
- Blobs as primary decoration
- Glassmorphism
- Stock clutter
- Fake numbers or engagement metrics
- Copied broadcaster looks or glyph sets
- Emoji

`scripts/check-design.mjs` refuses banned hex values and required guideline markers.

## Consumers

- `app` mirrors tokens in Dart (`lib/design/`).
- `website` mirrors CSS custom properties under `site/` (page inventory in [`website.md`](website.md)).
- Broadcast `themes` packages remain separate declarative data (see [`themes.md`](themes.md)).

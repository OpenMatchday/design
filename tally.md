# Tally indicator guidelines

Sources: PROJECT_SPEC AC-2.3 and AC-12.1; brand tokens `tally.*`.

## Purpose

The camera currently on Program must show an unmistakable on-air tally on that device. Operators must never confuse tally with decorative chrome.

## Rules

- On-air: solid high-contrast red field (`tally.on_air_bg` = `#B00020`) with bright border (`tally.on_air_border` = `#FF4D4D`) and `ON AIR` label in `tally.on_air_text`.
- Off-air: subdued field (`tally.off_bg`) with `TALLY OFF` label; never use on-air red when off Program.
- Minimum tally region height `tally.min_height_px` (88).
- Tally state is driven only by Program source identity after an explicit Cut/Take (AC-2.2). Preview selection alone never lights tally.
- Saturated red is reserved for on-air tally (and explicit danger). Director accent green must never substitute for tally.

## Layout rules

- Spacing on an 8px grid: 8 / 16 / 24.
- Focus and semantics labels required (`Tally on air for <source>` / `Tally off for <source>`).
- Prefer semantic containers over non-focusable ornament.

## Brand

Canonical colors live in [`tokens/brand.tokens.v0.json`](tokens/brand.tokens.v0.json). See [`brand.md`](brand.md).

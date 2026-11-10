# Tally indicator guidelines (OM-015)

Guidelines only until the design system lands (OM-037). Sources: PROJECT_SPEC AC-2.3 and AC-12.1.

## Purpose

The camera currently on Program must show an unmistakable on-air tally on that device. Operators must never confuse tally with decorative chrome.

## Rules

- On-air: solid high-contrast red field (`#B00020`) with bright border (`#FF4D4D`) and `ON AIR` label in white.
- Off-air: subdued dark field with `TALLY OFF` label; never use red when off Program.
- Minimum tally region height 88px; touch/read target clearly larger than adjacent controls.
- Tally state is driven only by Program source identity after an explicit Cut/Take (AC-2.2). Preview selection alone never lights tally.
- No purple gradients, glow stacks, emoji, or copied broadcaster glyph sets (AC-12.1).

## Layout rules (using-ui-stack)

- Spacing on an 8px grid: 8 / 16 / 24.
- Focus and semantics labels required (`Tally on air for <source>` / `Tally off for <source>`).
- Prefer semantic containers over non-focusable ornament.

## Brand note

Full brand tokens ship in OM-037. Until then, keep director green-on-dark chrome (`#1B4D3E` seed) and reserve saturated red exclusively for on-air tally.

# Role shell guidelines

Sources: PROJECT_SPEC roles and AC-12.1; [`brand.md`](brand.md); [`guidelines.md`](guidelines.md).

## Purpose

Seven production roles must each be assignable as a shell. Combinations on one device are capacity-gated by the capability matrix (AC-1.5, AC-1.6).

## Roles

| Role | Shell tone | Responsibility cue |
|---|---|---|
| Director | Dark director workspace | Approvals, Preview/Program, health |
| Camera | Daylight controls + tally | Capture, tally receive |
| Scoreboard Reader | Daylight calibration panels | Board capture, OCR |
| Event Operator | Dark dense numeric | Clocks, scores, authority |
| Graphics Operator | Dark layout grid | Scenes, themes, drafts |
| Social Operator | Dark draft desk | Templates, export, connected accounts, publish approval |
| Program Monitor | Dark view-only | Program (optional Preview), no control |

## Layout rules

- Spacing on an 8px grid: 8 / 16 / 24.
- Touch targets at least 44x44.
- Interactive chips and buttons expose default, hover/focus, pressed, and disabled states.
- Focus rings remain visible on keyboard navigation.
- Prefer `FilterChip` / `FilledButton` semantics over non-focusable containers.

## Visual bans (AC-12.1)

Do not use purple gradients, blobs, glassmorphism, stock clutter, fake numbers, copied broadcaster looks, or emoji.

## Combination gate copy

When a multi-role set is `unverified` or `out of scope`, release builds must refuse enablement and state the matrix cell. Partial cells may enable only with the documented limits string shown to the operator.

## Brand

Use `director.*` and `camera_daylight.*` from [`tokens/brand.tokens.v0.json`](tokens/brand.tokens.v0.json). Active-shell borders use `director.border_active`.

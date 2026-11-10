# Role shell guidelines (OM-012)

Guidelines only until the design system lands (OM-037). Sources: PROJECT_SPEC roles and AC-12.1.

## Purpose

Seven production roles must each be assignable as a shell. Combinations on one device are capacity-gated by the capability matrix (AC-1.5, AC-1.6).

## Roles

| Role | Shell tone | Responsibility cue |
|---|---|---|
| Director | Dark workspace | Approvals, Preview/Program, health |
| Camera | Daylight-leaning controls on dark chrome | Capture, tally receive |
| Scoreboard Reader | Calibration-first | Board capture, OCR |
| Event Operator | Dense numeric | Clocks, scores, authority |
| Graphics Operator | Layout grid | Scenes, themes, drafts |
| Social Operator | Draft desk | Templates, export, publish approval |
| Program Monitor | View-only | Program (optional Preview), no control |

## Layout rules (using-ui-stack)

- Spacing on an 8px grid: 8 / 16 / 24.
- Touch targets at least 44x44.
- Interactive chips and buttons expose default, hover/focus, pressed, and disabled states.
- Focus rings remain visible on keyboard navigation.
- Prefer `FilterChip` / `FilledButton` semantics over non-focusable containers.

## Visual bans (AC-12.1)

Do not use purple gradients, blobs, glassmorphism, stock clutter, fake numbers, copied broadcaster looks, or emoji.

## Combination gate copy

When a multi-role set is `unverified` or `out of scope`, release builds must refuse enablement and state the matrix cell. Partial cells may enable only with the documented limits string shown to the operator.

## Brand note

Full brand tokens ship in OM-037. Until then, keep restrained green-on-dark chrome consistent with the app seed (`#1B4D3E`) and unmistakable active-shell borders.

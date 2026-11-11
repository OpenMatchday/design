# UI guidelines (OM-037)

Sources: PROJECT_SPEC AC-12.1; using-ui-stack; Vercel Web Interface Guidelines (fetched 2026-11-11).

## Dark director workspace

- Background `director.bg`; panels `director.surface` / `director.surface_raised`.
- Active shell border `director.border_active`; idle border `director.border`.
- Body text `director.text`; secondary `director.text_muted`.
- Accent for primary actions `director.accent`; pressed `director.accent_pressed`.
- Focus ring `director.focus` on `:focus-visible` / Flutter focus; never remove outline without replacement.
- Touch targets at least 44x44; spacing on the 8px grid.
- Honor `prefers-reduced-motion`; animate opacity/transform only when motion is used.

## Daylight camera controls

- Control plane uses `camera_daylight.*` so outdoor glare stays readable.
- Accent and active borders use deep turf (`camera_daylight.accent`), not tally red.
- Tally region remains the sole high-saturation red surface on camera devices.
- Labels and status text meet WCAG 2.2 AA against their panel backgrounds.

## Interaction states

Every interactive control exposes default, hover, pressed/active, focus-visible, and disabled.

## Accessibility

- Contrast pairs listed in `tokens/brand.tokens.v0.json` must pass AA (4.5:1 normal text).
- Icon-only controls need accessible names.
- Semantic buttons/links; skip link on multi-section website pages (see [`website.md`](website.md)).
- `color-scheme: dark` on dark website chrome.

## Related role notes

- Roles: [`role-shells.md`](role-shells.md)
- Tally: [`tally.md`](tally.md)
- Connected accounts: [`connected-accounts.md`](connected-accounts.md)

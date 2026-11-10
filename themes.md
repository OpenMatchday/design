# Theme packages (OM-024)

Guidance for declarative broadcast themes consumed by graphics. Product UI design system remains OM-037.

## Rules

- Themes are data only: colors, typography, logo slots, tokens, motion intensity.
- No executable code in a theme package ([REPOS.md](https://github.com/OpenMatchday/docs) / themes validator).
- Text/panel and text/accent pairs must meet [WCAG 2.2 SC 1.4.3](https://www.w3.org/TR/WCAG22/#contrast-minimum) Level AA (4.5:1 normal text).
- Prefer CSS generic font families unless a redistributable font license is cited in `fonts.json`.
- Support aspects `16:9`, `9:16`, and `1:1`.
- Long and non-ASCII names must declare an overflow strategy (`ellipsis`, `shrink`, or `wrap`).

## Token contract

Graphics resolves these keys (contract `0.1.0`):

- `color.panel`
- `color.accent`
- `color.text`
- `font.family`

Ship values via the `themes` repo. Do not import `graphics` from theme packages.

## Contribution

PR workflow, import/export CLI, and schema details live in [OpenMatchday/themes docs](https://github.com/OpenMatchday/themes/blob/main/docs/contributing.md).

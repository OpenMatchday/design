# Connected accounts guidelines

Sources: PROJECT_SPEC AC-11.1, AC-11.2; [`brand.md`](brand.md).

## Purpose

Operators manage social publishing connections separately from app sign-in, stream destinations, and the contribution service. The Connected accounts screen belongs to the Social Operator shell.

## Credential planes (AC-11.1)

Show that these stores stay separate:

| Plane | Concern |
|---|---|
| `app_sign_in` | Operator device/session identity |
| `social_connections` | OAuth tokens for official social adapters |
| `stream_destinations` | Raw live output credentials |
| `contribution_service` | Community / GitHub App credentials |

Connected accounts read and write **only** `social_connections`.

## Connection row (AC-11.2)

Each connection lists:

1. **Provider** — display name from the D8 registry
2. **Capabilities** — use cases and least-privilege scopes
3. **Status** — `connected`, `connected_runtime_disabled`, or empty/`not_connected`
4. **Revoke** — removes the encrypted token / opaque ref

Never show access tokens, refresh tokens, or passphrases.

## Layout rules

- Spacing on an 8px grid: 8 / 16 / 24.
- Touch targets at least 44x44 for Connect and Revoke.
- Focusable controls: dropdown, text field, filled/outlined buttons.
- Status and capability text remain readable without cards-as-decoration overload; a single row container is allowed because revoke is an interaction.

## Visual bans (AC-12.1)

No purple gradients, glassmorphism, fake engagement metrics, emoji, or invented provider badges.

## Brand

Use dark director tokens from [`tokens/brand.tokens.v0.json`](tokens/brand.tokens.v0.json).

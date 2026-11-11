import { readFileSync, statSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

const required = [
  "README.md",
  "LICENSE",
  "brand.md",
  "guidelines.md",
  "tally.md",
  "role-shells.md",
  "connected-accounts.md",
  "themes.md",
  "website.md",
  "tokens/brand.tokens.v0.json",
  "tokens/brand.css",
  "icons/mark.svg",
]

for (const rel of required) {
  const path = join(root, rel)
  if (!statSync(path, { throwIfNoEntry: false })?.isFile()) {
    console.error(`missing required file: ${rel}`)
    process.exit(1)
  }
}

const tokens = JSON.parse(
  readFileSync(join(root, "tokens/brand.tokens.v0.json"), "utf8"),
)

const HEX_RE = /^#[0-9A-Fa-f]{6}$/

const channelToLinear = (c8) => {
  const c = c8 / 255
  if (c <= 0.04045) return c / 12.92
  return ((c + 0.055) / 1.055) ** 2.4
}

const relativeLuminance = (hex) => {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  return (
    0.2126 * channelToLinear(r) +
    0.7152 * channelToLinear(g) +
    0.0722 * channelToLinear(b)
  )
}

const contrastRatio = (a, b) => {
  const l1 = relativeLuminance(a)
  const l2 = relativeLuminance(b)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

const resolveToken = (path) => {
  const [group, key] = path.split(".")
  const value = tokens[group]?.[key]
  if (typeof value !== "string" || !HEX_RE.test(value)) {
    throw new Error(`contrast token missing or not hex: ${path}`)
  }
  return value
}

for (const pair of tokens.contrast_pairs) {
  const fg = resolveToken(pair.fg)
  const bg = resolveToken(pair.bg)
  const ratio = contrastRatio(fg, bg)
  if (ratio < pair.min_ratio) {
    console.error(
      `contrast fail ${pair.fg}/${pair.bg}: ${ratio.toFixed(3)} < ${pair.min_ratio}`,
    )
    process.exit(1)
  }
}

const css = readFileSync(join(root, "tokens/brand.css"), "utf8")
const requiredCss = [
  "--om-director-bg",
  "--om-camera-bg",
  "--om-tally-on-bg",
  tokens.tally.on_air_bg.toLowerCase(),
]
for (const needle of requiredCss) {
  if (!css.toLowerCase().includes(needle.toLowerCase())) {
    console.error(`brand.css missing ${needle}`)
    process.exit(1)
  }
}

const brandMd = readFileSync(join(root, "brand.md"), "utf8")
const guidelines = readFileSync(join(root, "guidelines.md"), "utf8")
const tally = readFileSync(join(root, "tally.md"), "utf8")
const websiteMd = readFileSync(join(root, "website.md"), "utf8")
const mark = readFileSync(join(root, "icons/mark.svg"), "utf8")

const markers = [
  [brandMd, "AC-12.1"],
  [brandMd, "Banned patterns"],
  [guidelines, "Dark director"],
  [guidelines, "Daylight camera"],
  [tally, "ON AIR"],
  [tally, "AC-2.3"],
  [tally, tokens.tally.on_air_bg],
  [websiteMd, "AC-12.2"],
  [websiteMd, "AC-12.3"],
  [websiteMd, "index.html"],
  [mark, "MIT"],
  [mark, "Open Matchday"],
  [mark, tokens.tally.on_air_bg],
]

for (const [text, needle] of markers) {
  if (!text.includes(needle)) {
    console.error(`marker missing: ${needle}`)
    process.exit(1)
  }
}

const scanTargets = [
  ["tokens/brand.tokens.v0.json", JSON.stringify(tokens)],
  ["tokens/brand.css", css],
  ["icons/mark.svg", mark],
  ["brand.md", brandMd],
  ["guidelines.md", guidelines],
]

const bannedHexes = ["#7C3AED", "#8B5CF6", "#A855F7", "#6366F1", "#4F46E5"]
for (const bannedHex of bannedHexes) {
  for (const [name, text] of scanTargets) {
    if (text.toUpperCase().includes(bannedHex.toUpperCase())) {
      console.error(`banned hex ${bannedHex} found in ${name}`)
      process.exit(1)
    }
  }
}

for (const [name, text] of scanTargets) {
  if (/backdrop-filter\s*:\s*blur/i.test(text)) {
    console.error(`glassmorphism pattern in ${name}`)
    process.exit(1)
  }
}

if (tokens.tally.on_air_bg.toUpperCase() === tokens.director.accent.toUpperCase()) {
  console.error("tally red must differ from director accent")
  process.exit(1)
}

console.log("DESIGN_CHECK_OK")

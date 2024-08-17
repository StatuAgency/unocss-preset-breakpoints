<h1 align="center">Breakpoints Badge Preset for UnoCSS</h1>
<p align="center">
  Shows which UnoCSS breakpoint state the page is in with a badge
</p>
<p align="center">
  <a href="https://statu.co"><img src="https://img.shields.io/badge/Author-Statu-black?style=for-the-badge" alt="Author"></a>
  <a href="https://www.npmjs.com/package/unocss-preset-breakpoints"><img src="https://img.shields.io/npm/v/unocss-preset-breakpoints?style=for-the-badge" alt="Versio"></a>
  <a href="https://github.com/StatuAgency/unocss-preset-breakpoints/blob/dev/LICENSE"><img src="https://img.shields.io/github/license/StatuAgency/unocss-preset-breakpoints?sanitize=true&style=for-the-badge" alt="License"></a>
  <a href="https://www.npmjs.com/package/unocss-preset-breakpoints"><img src="https://img.shields.io/maintenance/yes/2024?style=for-the-badge" alt="Maintained"></a>
</p>

---

## Install

```sh
# Using npm
npm install unocss-preset-breakpoints

# Using yarn
yarn add unocss-preset-breakpoints

# Using pnpm
pnpm add unocss-preset-breakpoints

# Using bun
bun add unocss-preset-breakpoints
```

## Usage

```js
// unocss.config.js
import { defineConfig } from "unocss"
import { presetBreakpoints } from "unocss-preset-breakpoints"

export default defineConfig({
  presets: [
    // ...
    presetBreakpoints()
  ]
})
```

## Type of `BreakpointsOptions`

```ts
export interface BreakpointsOptions {
  /**
   * The prefix to use for the badge
   * @default "statu-"
   */
  prefix?: string

  /**
   * Determines whether the breakpoints badge should be shown or not.
   * @default false
   */
  show?: boolean
}
```

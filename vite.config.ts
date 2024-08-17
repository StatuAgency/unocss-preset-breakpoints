import { defineConfig } from "vite"
import unocss from "unocss/vite"
import dts from "vite-plugin-dts"

import { presetBreakpoints } from "./src"

export default defineConfig({
  plugins: [
    unocss({
      presets: [presetBreakpoints()]
    }),
    dts()
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: () => "index.js"
    },
    rollupOptions: {
      external: ["unocss"]
    }
  }
})

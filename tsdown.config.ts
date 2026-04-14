import { defineConfig } from "tsdown"

export default defineConfig({
  dts: true,
  entry: ["./src/index.ts", "./src/solid.ts"],
  external: ["@fairyhunter13/opentui-core", "@fairyhunter13/opentui-solid"],
  format: ["esm"],
  minify: true,
})

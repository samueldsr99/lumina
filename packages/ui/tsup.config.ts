import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts"],
  esbuildPlugins: [vanillaExtractPlugin()],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));

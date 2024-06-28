import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts", "src/theme/index.ts", "src/tokens/index.ts"],
  esbuildPlugins: [vanillaExtractPlugin()],
  // minify: true,
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: false,
  external: ["react"],
  ...options,
}));

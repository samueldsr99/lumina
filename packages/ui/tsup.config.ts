import { defineConfig, type Options } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

/**
 * NOTE: It looks like there's an incompatibility between esbuild
 * `Plugin` from tsup and `vanillaExtractPlugin`
 */
type Plugin = NonNullable<Options["esbuildPlugins"]>[number];

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts", "src/theme/index.ts", "src/tokens/index.ts"],
  esbuildPlugins: [vanillaExtractPlugin() as Plugin],
  minify: true,
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));

import { dirname, join, resolve } from "path";
import { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../stories/our-foundations.mdx",
    "../stories/*.mdx",
    "../stories/**/*.mdx",
    "../stories/*.stories.tsx",
    "../stories/**/*.stories.tsx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  staticDirs: [resolve(__dirname, "../public")],

  framework: "@storybook/react-vite",

  core: {},

  async viteFinal(config) {
    // customize the Vite config here
    const { plugins = [], ...restConfig } = config;

    return {
      ...restConfig,
      plugins: [...plugins, vanillaExtractPlugin()],
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },

  docs: {
    autodocs: true,
  },
};

export default config;

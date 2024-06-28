import { dirname, join, resolve } from "path";
import { StorybookConfig } from "@storybook/react-vite";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  staticDirs: [resolve(__dirname, "../public")],
  framework: "@storybook/react-vite",
  core: {},

  docs: {
    docsMode: true,
  },
};

export default config;

import { tokens } from "@lumina/ui/tokens";
import { create } from "@storybook/theming/create";
import { themes } from "@storybook/theming";

export default create({
  ...themes.light,
  fontBase: '"Soehne", helvetica, sans-serif',
  fontCode: '"Soehne Mono", monospace',

  brandTitle: "Lumina",
  brandUrl: "https://github.com/samueldsr99/lumina",

  colorPrimary: tokens.color["gold-700"],
  colorSecondary: tokens.color["openai-green"],

  // // UI
  appBg: tokens.color["gray-0"],
  // appContentBg: tokens.color["gray-350"],
  appPreviewBg: tokens.color["gray-300"],
  // appBorderColor: "#585C6D",
  // appBorderRadius: 4,

  // // Text colors
  // textColor: "#10162F",
  // textInverseColor: tokens.color["openai-green"],

  // // Toolbar default and active colors
  // barTextColor: "#9E9E9E",
  // barSelectedColor: "#585C6D",
  // barHoverColor: "#585C6D",
  // barBg: "#ffffff",

  // // Form colors
  // // inputBg: "#ffffff",
  // inputBorder: "#10162F",
  // inputTextColor: "#10162F",
  // inputBorderRadius: 2,
});

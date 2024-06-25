import { createTheme } from "@vanilla-extract/css";
import { tokens } from "../tokens";

const [themeClass, vars] = createTheme({
  button: {
    "focus-ring": {
      primary: `0px 0px 0px 2px ${tokens.color.openAI.white},0px 0px 0px 4px ${tokens.color.openAI.green}`,
    },
    border: {
      radius: tokens.border.radius.full,
      "radius-small": tokens.border.radius[30],
      "radius-large": tokens.border.radius[40],
    },
    disabled: {
      default: tokens.color.gray[75],
      "contrast-text": tokens.color.gray[300],
    },
    primary: {
      default: tokens.color.openAI.green,
      hover: tokens.color.green[700],
      "contrast-text": tokens.color.openAI.white,
      "focus-shadow": tokens.color.green[100],
    },
    secondary: {
      default: tokens.color.gray[100],
      hover: tokens.color.gray[200],
      "contrast-text": tokens.color.gray[800],
      "focus-shadow": tokens.color.gray[50],
    },
    destructive: {
      default: tokens.color.red[500],
      hover: tokens.color.red[700],
      "contrast-text": tokens.color.gray[50],
      "focus-shadow": tokens.color.red[50],
    },
  },
  text: {
    heading: tokens.color.gray[950],
  },
});

export const lightTheme = {
  themeClass,
  vars,
};

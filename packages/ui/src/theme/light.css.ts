import { createTheme } from "@vanilla-extract/css";
import { tokens } from "../tokens";

const [themeClass, vars] = createTheme({
  color: {
    "border-default": tokens.color["gray-200"],
    "border-active": tokens.color["openai-green"],
    "border-error": tokens.color["red-500"],
    "border-gold": tokens.color["gold-700"],
    "border-dark": tokens.color["gray-800"],

    "button-disabled-default": tokens.color["gray-75"],
    "button-disabled-contrast-text": tokens.color["gray-300"],

    "button-primary-default": tokens.color["openai-green"],
    "button-primary-hover": tokens.color["green-700"],
    "button-primary-contrast-text": tokens.color["openai-white"],
    "button-primary-focus-shadow": tokens.color["green-100"],

    "button-secondary-default": tokens.color["gray-100"],
    "button-secondary-hover": tokens.color["gray-200"],
    "button-secondary-contrast-text": tokens.color["gray-800"],
    "button-secondary-focus-shadow": tokens.color["gray-50"],

    "button-destructive-default": tokens.color["red-500"],
    "button-destructive-hover": tokens.color["red-700"],
    "button-destructive-contrast-text": tokens.color["gray-50"],
    "button-destructive-focus-shadow": tokens.color["red-50"],

    "badge-gray-default": tokens.color["gray-100"],
    "badge-gray-contrast-text": tokens.color["gray-700"],

    "badge-success-default": tokens.color["green-100"],
    "badge-success-contrast-text": tokens.color["green-800"],

    "badge-warning-default": tokens.color["gold-100"],
    "badge-warning-contrast-text": tokens.color["gold-700"],

    "badge-danger-default": tokens.color["red-100"],
    "badge-danger-contrast-text": tokens.color["red-700"],

    "text-heading": tokens.color["gray-950"],
    "text-paragraph": tokens.color["gray-950"],
    "text-help": tokens.color["gray-600"],
    "text-error": tokens.color["red-500"],
    "text-label": tokens.color["gray-800"],

    "Input-default": tokens.color["gray-0"],
    "Input-placeholder-text": tokens.color["gray-500"],
    "Input-contrast-text": tokens.color["gray-800"],
    "Input-error-default": tokens.color["red-50"],
    "text-disabled-default": tokens.color["gray-75"],

    "card-background": tokens.color["gray-0"],
  },
  border: {
    "radius-small": tokens.border.radius[30],
    "radius-large": tokens.border.radius[40],
    "radius-full": tokens.border.radius.full,
  },
});

export type Colors = keyof typeof vars.color;

export const lightTheme = {
  themeClass,
  vars,
};

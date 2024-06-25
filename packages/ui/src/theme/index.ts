import { lightTheme } from "./light.css";

export const theme = {
  light: lightTheme,
} as const;

export type Theme = keyof typeof theme;

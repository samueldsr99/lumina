import { style } from "@vanilla-extract/css";
import { lightTheme } from "../../theme/light.css";
import { tokens } from "../../tokens";

export const root = style({
  padding: `${tokens.spacing["space-8"]} ${tokens.spacing["space-30"]}`,
  borderRadius: tokens.spacing["space-8"],
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: tokens.spacing["space-4"],

  fontFamily: tokens.font.family.sans,

  fontWeight: tokens.font.weight.medium,
  fontSize: tokens.font.size[30],
  lineHeight: tokens.font.lineHeight[60],

  transition: "box-shadow .2s, background-color .2s, color .2s, border .2s",
  ":focus": {
    outline: "none",
  },
});

export const primary = style({
  backgroundColor: lightTheme.vars.button.primary.default,
  color: lightTheme.vars.button.primary["contrast-text"],
  ":hover": {
    backgroundColor: lightTheme.vars.button.primary.hover,
  },
  ":focus": {
    boxShadow: `${lightTheme.vars.button.primary["focus-shadow"]} 0 0 0 3px`,
  },
  ":focus-visible": {
    boxShadow: `0px 0px 0px 2px ${tokens.color.openAI.white},0px 0px 0px 4px ${lightTheme.vars.button.primary.default}`,
  },
});

export const secondary = style({
  backgroundColor: lightTheme.vars.button.secondary.default,
  color: lightTheme.vars.button.secondary["contrast-text"],
  ":hover": {
    backgroundColor: lightTheme.vars.button.secondary.hover,
  },
  ":focus": {
    boxShadow: `${lightTheme.vars.button.secondary["focus-shadow"]} 0 0 0 3px`,
  },
  ":focus-visible": {
    boxShadow: `0px 0px 0px 2px ${tokens.color.openAI.white},0px 0px 0px 4px ${lightTheme.vars.button.secondary.default}`,
  },
});

export const destructive = style({
  backgroundColor: lightTheme.vars.button.destructive.default,
  color: lightTheme.vars.button.destructive["contrast-text"],
  ":hover": {
    backgroundColor: lightTheme.vars.button.destructive.hover,
  },
  ":focus": {
    boxShadow: `${lightTheme.vars.button.destructive["focus-shadow"]} 0 0 0 3px`,
  },
  ":focus-visible": {
    boxShadow: `0px 0px 0px 2px ${tokens.color.openAI.white},0px 0px 0px 4px ${lightTheme.vars.button.destructive.default}`,
  },
});

export const disabled = style({
  backgroundColor: lightTheme.vars.button.disabled.default,
  color: lightTheme.vars.button.disabled["contrast-text"],
  cursor: "not-allowed",
});

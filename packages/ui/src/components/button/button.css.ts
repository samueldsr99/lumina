import { tokens } from "../../tokens";
import { sprinkles } from "../../css/sprinkles.css";

export const root = sprinkles({
  paddingY: "space-8",
  paddingX: "space-30",
  borderRadius: 40,
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "space-4",
  fontFamily: tokens.font.family.sans,

  fontWeight: "medium",
  fontSize: 30,
  lineHeight: 60,

  transition: "box-shadow .2s, background-color .2s, color .2s, border .2s",
  outline: {
    focus: "none",
  },
});

export const primary = sprinkles({
  backgroundColor: {
    default: "button-primary-default",
    hover: "button-primary-hover",
  },
  color: "button-primary-contrast-text",
  boxShadow: {
    focus: "button-primary-focus-shadow",
    focusVisible: "button-primary-focus-visible-shadow",
  },
});

export const secondary = sprinkles({
  backgroundColor: {
    default: "button-secondary-default",
    hover: "button-secondary-hover",
  },
  color: "button-secondary-contrast-text",
  boxShadow: {
    focus: "button-secondary-focus-shadow",
    focusVisible: "button-secondary-focus-visible-shadow",
  },
});

export const destructive = sprinkles({
  backgroundColor: {
    default: "button-destructive-default",
    hover: "button-destructive-hover",
  },
  color: "button-destructive-contrast-text",
  boxShadow: {
    focus: "button-destructive-focus-shadow",
    focusVisible: "button-destructive-focus-visible-shadow",
  },
});

export const disabled = sprinkles({
  backgroundColor: "button-disabled-default",
  color: "button-disabled-contrast-text",
  cursor: "not-allowed",
});

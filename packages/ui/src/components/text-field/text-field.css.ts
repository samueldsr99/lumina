import { sprinkles } from "../../css/sprinkles.css";
import { tokens } from "../../tokens";

export const root = sprinkles({
  boxSizing: "border-box",
  width: "100%",
  position: "relative",
  fontFamily: tokens.font.family.sans,
  paddingY: "space-8",
  paddingX: "space-10",
  border: "solid",
  color: {
    default: "textfield-contrast-text",
    placeholder: "textfield-placeholder-text",
  },
  borderRadius: 40,
  outline: "none",

  transition: "box-shadow .2s, background-color .2s, color .2s, border .2s",
});

export const variant = {
  defaulted: sprinkles({
    backgroundColor: "textfield-default",
    borderColor: {
      default: "border-default",
      focus: "border-active",
    },
    boxShadow: {
      focus: "textfield-default-focus-shadow",
    },
  }),
  error: sprinkles({
    backgroundColor: "textfield-error-default",
    borderColor: "border-error",
  }),
  disabled: sprinkles({
    backgroundColor: "text-disabled-default",
    borderColor: "border-default",
    cursor: "not-allowed",
  }),
};

export const withStartIcon = sprinkles({
  paddingLeft: "space-60",
});

export const withEndIcon = sprinkles({
  paddingRight: "space-60",
});

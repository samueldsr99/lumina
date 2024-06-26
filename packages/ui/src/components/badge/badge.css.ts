import { tokens } from "../../tokens";
import { sprinkles } from "../../css/sprinkles.css";

export const root = sprinkles({
  borderRadius: 40,
  display: "inline-flex",
  paddingY: "space-4",
  paddingX: "space-8",

  fontFamily: tokens.font.family.sans,
  fontWeight: "medium",
});

export const variant = {
  gray: sprinkles({
    backgroundColor: "badge-gray-default",
    color: "badge-gray-contrast-text",
  }),
  success: sprinkles({
    backgroundColor: "badge-success-default",
    color: "badge-success-contrast-text",
  }),
  warning: sprinkles({
    backgroundColor: "badge-warning-default",
    color: "badge-warning-contrast-text",
  }),
  danger: sprinkles({
    backgroundColor: "badge-danger-default",
    color: "badge-danger-contrast-text",
  }),
};

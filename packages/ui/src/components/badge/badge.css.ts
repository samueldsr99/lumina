import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "../../tokens";

export const root = style({
  borderRadius: tokens.border.radius[40],
  display: "inline-flex",
  padding: `${tokens.spacing["space-4"]} ${tokens.spacing["space-8"]}`,

  fontFamily: tokens.font.family.sans,
  fontWeight: tokens.font.weight.medium,
});

export const variant = styleVariants({
  success: {
    backgroundColor: tokens.color.green[100],
    color: tokens.color.green[800],
  },
  warning: {
    backgroundColor: tokens.color.gold[100],
    color: tokens.color.gold[700],
  },
  error: {
    backgroundColor: tokens.color.red[100],
    color: tokens.color.red[700],
  },
});

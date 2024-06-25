import { style, styleVariants } from "@vanilla-extract/css";
import { lightTheme } from "../../theme/light.css";
import { toPx } from "../../tokens/utils";
import { tokens } from "../../tokens";

export const h1 = style({
  fontSize: tokens.font.size[110],
  lineHeight: toPx(tokens.size["size-140"]),
  fontWeight: tokens.font.weight.bold,
  color: lightTheme.vars.text.heading,
});

export const h2 = style({
  fontSize: tokens.font.size[70],
  lineHeight: toPx(tokens.size["size-110"]),
  fontWeight: tokens.font.weight.bold,
  color: lightTheme.vars.text.heading,
});

export const h3 = style({
  fontSize: tokens.font.size[60],
  lineHeight: toPx(tokens.size["size-90"]),
  fontWeight: tokens.font.weight.bold,
  color: lightTheme.vars.text.heading,
});

export const h4 = style({
  fontSize: tokens.font.size[50],
  lineHeight: toPx(tokens.size["size-70"]),
  fontWeight: tokens.font.weight.bold,
  color: lightTheme.vars.text.heading,
});

export const withMargin = styleVariants({
  true: {
    marginBottom: tokens.spacing["space-70"],
  },
  false: {
    margin: 0,
  },
});

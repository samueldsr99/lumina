import { styleVariants } from "@vanilla-extract/css";
import { tokens } from "../../tokens";
import { toPx } from "../../tokens/utils";

export const size = styleVariants({
  xsmall: {
    fontSize: tokens.font.size[20],
    fontWeight: tokens.font.weight.normal,
    lineHeight: toPx(tokens.size["size-40"]),
  },
  small: {
    fontSize: tokens.font.size[30],
    fontWeight: tokens.font.weight.normal,
    lineHeight: toPx(tokens.size["size-50"]),
  },
  regular: {
    fontSize: tokens.font.size[40],
    fontWeight: tokens.font.weight.normal,
    lineHeight: toPx(tokens.size["size-70"]),
  },
  large: {
    fontSize: tokens.font.size[50],
    fontWeight: tokens.font.weight.normal,
    lineHeight: toPx(tokens.size["size-80"]),
  },
  xlarge: {
    fontSize: tokens.font.size[70],
    fontWeight: tokens.font.weight.normal,
    lineHeight: toPx(tokens.size["size-120"]),
  },
});

export const withMargin = styleVariants({
  true: {
    marginBottom: tokens.spacing["space-4"],
  },
  false: {
    margin: 0,
  },
});

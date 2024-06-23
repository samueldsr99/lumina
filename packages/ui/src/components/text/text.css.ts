import { style } from "@vanilla-extract/css";
import { fontTokens } from "../../tokens/fonts";

// NOTE: Define tokens for all values

export const h1 = style({
  fontFamily: fontTokens.family.sans,
  fontSize: fontTokens.size[110],
  lineHeight: "40px",
  fontWeight: fontTokens.weight.bold,
});

export const h2 = style({
  fontFamily: fontTokens.family.sans,
  fontSize: fontTokens.size[70],
  lineHeight: fontTokens.lineHeight[110],
  fontWeight: fontTokens.weight.bold,
});

export const h3 = style({
  fontFamily: fontTokens.family.sans,
  fontSize: fontTokens.size[60],
  lineHeight: "28px",
  fontWeight: fontTokens.weight.bold,
});

export const h4 = style({
  fontFamily: fontTokens.family.sans,
  fontSize: fontTokens.size[50],
  lineHeight: fontTokens.lineHeight[70],
  fontWeight: fontTokens.weight.bold,
});

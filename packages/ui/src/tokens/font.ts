import { sizeTokens } from "./size";
import { toPx } from "./utils";

export const fontTokens = {
  family: {
    sans: '"Soehne", helvetica, sans-serif',
    mono: '"Soehne Mono", monospace',
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  size: {
    10: toPx(sizeTokens["size-10"]),
    20: toPx(sizeTokens["size-20"]),
    30: toPx(sizeTokens["size-30"]),
    40: toPx(sizeTokens["size-40"]),
    50: toPx(sizeTokens["size-50"]),
    60: toPx(sizeTokens["size-60"]),
    70: toPx(sizeTokens["size-70"]),
    80: toPx(sizeTokens["size-80"]),
    90: toPx(sizeTokens["size-90"]),
    100: toPx(sizeTokens["size-100"]),
    110: toPx(sizeTokens["size-110"]),
    140: toPx(sizeTokens["size-140"]),
    200: toPx(sizeTokens["size-200"]),
  },
  lineHeight: {
    10: toPx(sizeTokens["size-10"]),
    20: toPx(sizeTokens["size-20"]),
    30: toPx(sizeTokens["size-30"]),
    40: toPx(sizeTokens["size-40"]),
    50: toPx(sizeTokens["size-50"]),
    60: toPx(sizeTokens["size-60"]),
    70: toPx(sizeTokens["size-70"]),
    80: toPx(sizeTokens["size-80"]),
    90: toPx(sizeTokens["size-90"]),
    100: toPx(sizeTokens["size-100"]),
    110: toPx(sizeTokens["size-110"]),
    120: toPx(sizeTokens["size-120"]),
    130: toPx(sizeTokens["size-130"]),
    140: toPx(sizeTokens["size-140"]),
    180: toPx(sizeTokens["size-180"]),
    200: toPx(sizeTokens["size-200"]),
  },
} as const;

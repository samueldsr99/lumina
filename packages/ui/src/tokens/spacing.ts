import { sizeTokens } from "./size";
import { toPx } from "./utils";

export const spacingTokens = {
  "space-0": toPx(sizeTokens["size-0"]),
  "space-1": toPx(sizeTokens["size-1"]),
  "space-2": toPx(sizeTokens["size-2"]),
  "space-3": toPx(sizeTokens["size-3"]),
  "space-4": toPx(sizeTokens["size-4"]),
  "space-5": toPx(sizeTokens["size-5"]),
  "space-6": toPx(sizeTokens["size-6"]),
  "space-8": toPx(sizeTokens["size-8"]),
  "space-10": toPx(sizeTokens["size-10"]),
  "space-20": toPx(sizeTokens["size-20"]),
  "space-30": toPx(sizeTokens["size-40"]),
  "space-40": toPx(sizeTokens["size-60"]),
  "space-50": toPx(sizeTokens["size-70"]),
  "space-60": toPx(sizeTokens["size-110"]),
  "space-70": toPx(sizeTokens["size-140"]),
  "space-80": toPx(sizeTokens["size-160"]),
  "space-90": toPx(sizeTokens["size-200"]),
  "space-100": toPx(sizeTokens["size-220"]),
  "space-110": toPx(sizeTokens["size-230"]),
  "space-120": toPx(sizeTokens["size-240"]),
} as const;

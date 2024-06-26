import { spacingTokens } from "./spacing";

export const borderTokens = {
  style: {
    none: "none",
    solid: "1px solid",
  },
  radius: {
    0: spacingTokens["space-0"],
    10: spacingTokens["space-2"],
    20: spacingTokens["space-4"],
    30: spacingTokens["space-6"],
    40: spacingTokens["space-8"],
    50: spacingTokens["space-20"],
    full: "999999px",
  },
} as const;

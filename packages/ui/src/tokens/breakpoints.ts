import { toPx } from "./utils";

export const breakpointTokens = {
  xsmall: toPx(420),
  small: toPx(640),
  medium: toPx(768),
  large: toPx(1024),
  xlarge: toPx(1280),
  "2xlarge": toPx(1536),
} as const;

export type BreakpointValues = keyof typeof breakpointTokens;

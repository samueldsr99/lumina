import type { ReactNode } from "react";
import type { spacingTokens } from "../../tokens/spacing";
import { Box } from "../box";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import type { SpacingProperties } from "../types";

export interface StackProps
  extends Pick<SprinklesProperties, SpacingProperties> {
  orientation?: "horizontal" | "vertical";
  as?: "div" | "ul";
  gap?: keyof typeof spacingTokens;
  children: ReactNode;
}

export function Stack(props: StackProps): JSX.Element {
  const {
    as,
    orientation = "vertical",
    gap = "space-4",
    children,
    ...restProps
  } = props;

  return (
    <Box
      as={as}
      sx={{
        display: "flex",
        flexDirection: orientation === "horizontal" ? "row" : "column",
        gap,
        ...restProps,
      }}
    >
      {children}
    </Box>
  );
}
Stack.displayName = "Stack";

import type { ReactNode } from "react";
import { Box } from "../box";
import type { SprinklesProperties } from "../../css/sprinkles.css";

export interface ContainerProps
  extends Pick<
    SprinklesProperties,
    | "maxWidth"
    | "marginX"
    | "paddingX"
    | "paddingY"
    | "marginY"
    | "margin"
    | "padding"
  > {
  center?: boolean;
  children?: ReactNode;
}

export function Container({
  center = true,
  maxWidth = "medium",
  children,
  ...props
}: ContainerProps) {
  return (
    <Box
      as="div"
      sx={{ ...props, maxWidth, ...(center ? { marginX: "auto" } : {}) }}
    >
      {children}
    </Box>
  );
}

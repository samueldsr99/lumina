import type { ReactNode } from "react";
import { Box } from "../box";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import type { SpacingProperties } from "../types";

export interface ContainerProps
  extends Pick<SprinklesProperties, SpacingProperties> {
  center?: boolean;
  children?: ReactNode;
  widthFull?: boolean;
}

export function Container({
  center = true,
  maxWidth = "medium",
  children,
  widthFull = false,
  ...props
}: ContainerProps) {
  return (
    <Box
      as="div"
      sx={{
        ...props,
        maxWidth,
        ...(center ? { marginX: "auto" } : {}),
        ...(widthFull ? { width: "100%" } : {}),
      }}
    >
      {children}
    </Box>
  );
}
Container.displayName = "Container";

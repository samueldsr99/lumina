import type { SprinklesProperties } from "../../css/sprinkles.css";
import { Box } from "../box";

interface FlexContainerProps {
  container: true;
  children: React.ReactNode;
  gap?: SprinklesProperties["gap"];
  wrap?: boolean;
  orientation?: "horizontal" | "vertical";
  alignItems?: SprinklesProperties["alignItems"];
  alignContent?: SprinklesProperties["alignContent"];
  justifyContent?: SprinklesProperties["justifyContent"];
}

interface FlexItemProps {
  container?: false;
  children: React.ReactNode;
  grow?: boolean;
  shrink?: boolean;
}

export type FlexProps = FlexContainerProps | FlexItemProps;

const isContainer = (props: FlexProps): props is FlexContainerProps =>
  (props as FlexContainerProps).container;

export function Flex(props: FlexProps) {
  if (isContainer(props)) {
    return (
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: props.orientation === "horizontal" ? "row" : "column",
          gap: props.gap,
          ...(props.wrap ? { flexWrap: "wrap" } : {}),
          ...(props.alignItems ? { alignItems: props.alignItems } : {}),
          ...(props.alignContent ? { alignContent: props.alignContent } : {}),
          ...(props.justifyContent
            ? { justifyContent: props.justifyContent }
            : {}),
        }}
      >
        {props.children}
      </Box>
    );
  }

  return (
    <Box
      as="div"
      sx={{
        ...(props.grow ? { flexGrow: 1 } : {}),
        ...(props.shrink ? { flexShrink: 1 } : {}),
      }}
    >
      {props.children}
    </Box>
  );
}
Flex.displayName = "Flex";

import type { SprinklesProperties } from "../../css/sprinkles.css";
import { tokens } from "../../tokens";
import { Box } from "../box";
import { sizeStyles as paragraphSizeStyles } from "../paragraph/paragraph";

export interface ListItemProps {
  variant?: "dot" | "check";
  margin?: boolean;
  children: React.ReactNode;
}

export function ListItem({ variant, margin, children }: ListItemProps) {
  const textStyles =
    variant === "check"
      ? paragraphSizeStyles.large
      : paragraphSizeStyles.regular;

  return (
    <Box
      as="li"
      sx={{
        ...root,
        ...textStyles,
        ...marginStyles[margin ? "true" : "false"],
        ...variantStyles[variant ?? "dot"],
      }}
    >
      {children}
    </Box>
  );
}
ListItem.displayName = "ListItem";

const root: SprinklesProperties = {
  fontFamily: tokens.font.family.sans,
  position: "relative",
};

export const marginStyles: Record<"true" | "false", SprinklesProperties> = {
  true: {
    marginBottom: "space-70",
  },
  false: {
    marginBottom: "space-0",
  },
};

const variantStyles: Record<"dot" | "check", SprinklesProperties> = {
  dot: {},
  check: {
    listStyle: "none",
    background: "list-item-check",
    paddingLeft: "space-60",
  },
};

import type { ReactNode } from "react";
import { Box } from "../box";
import {
  sizeStyles as paragraphSizeStyles,
  strongStyles as paragraphStrongStyles,
} from "../paragraph/paragraph";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import { tokens } from "../../tokens";

export type BadgeVariant = "gray" | "success" | "warning" | "danger";

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: ReactNode;
}

export function Badge({ variant = "success", children }: BadgeProps) {
  return (
    <Box
      as="span"
      sx={{
        ...root,
        ...variantStyles[variant],
        ...paragraphSizeStyles.xsmall,
        ...paragraphStrongStyles.true,
      }}
    >
      {children}
    </Box>
  );
}
Badge.displayName = "Badge";

const root: SprinklesProperties = {
  borderRadius: 40,
  display: "inline-flex",
  paddingY: "space-4",
  paddingX: "space-8",

  fontFamily: tokens.font.family.sans,
  fontWeight: "medium",
};

const variantStyles: Record<BadgeVariant, SprinklesProperties> = {
  gray: {
    backgroundColor: "badge-gray-default",
    color: "badge-gray-contrast-text",
  },
  success: {
    backgroundColor: "badge-success-default",
    color: "badge-success-contrast-text",
  },
  warning: {
    backgroundColor: "badge-warning-default",
    color: "badge-warning-contrast-text",
  },
  danger: {
    backgroundColor: "badge-danger-default",
    color: "badge-danger-contrast-text",
  },
};

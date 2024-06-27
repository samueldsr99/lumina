import type { ReactNode } from "react";
import { Box } from "../box";
import type { BaseComponentProps } from "../types";
import { Paragraph } from "../paragraph";
import type { SprinklesProperties } from "../../css/sprinkles.css";

type CheckboxSize = "small" | "medium" | "large";

export interface CheckboxProps extends BaseComponentProps<"input"> {
  children: ReactNode;
  size?: CheckboxSize;
}

export function Checkbox({
  children,
  size = "medium",
  ...props
}: CheckboxProps) {
  return (
    <Box
      as="label"
      sx={{ display: "flex", alignItems: "center", gap: "space-8" }}
    >
      <Box
        as="input"
        sx={{ ...root, ...sizeStyles[size] }}
        type="checkbox"
        {...props}
      />
      <Paragraph margin={false} size="small">
        {children}
      </Paragraph>
    </Box>
  );
}

const root: SprinklesProperties = {
  border: "solid",
  margin: "space-0",
  borderRadius: 20,
  cursor: {
    disabled: "not-allowed",
  },
  accentColor: {
    default: "checkbox-default",
    hover: "checkbox-hover",
    disabled: "checkbox-disabled",
    checked: "primary-default",
  },
  borderColor: {
    default: "checkbox-border-default",
    hover: "primary-default",
    disabled: "border-default",
  },
  boxSizing: "border-box",
};

export const sizeStyles: Record<CheckboxSize, SprinklesProperties> = {
  small: {
    size: "size-30",
  },
  medium: {
    size: "size-40",
  },
  large: {
    size: "size-50",
  },
};

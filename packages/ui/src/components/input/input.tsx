import type { ReactNode } from "react";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import { tokens } from "../../tokens";
import { Box } from "../box";
import { sizeStyles as paragraphSizeStyles } from "../paragraph/paragraph";

export interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  type?: "text" | "number" | "password" | "email" | "tel" | "url" | "search";
  icon?: ReactNode;
  iconPosition?: "start" | "end";
}

function IconContainer({
  children,
  left,
}: {
  children: React.ReactNode;
  left?: boolean;
}) {
  return (
    <Box
      as="span"
      sx={{
        display: "flex",
        position: "absolute",
        zIndex: 10,
        ...(left ? { left: "space-10" } : { right: "space-10" }),
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      {children}
    </Box>
  );
}

export function Input({
  placeholder,
  icon,
  iconPosition = "start",
  disabled = false,
  type = "text",
  error = false,
}: InputProps) {
  // eslint-disable-next-line no-nested-ternary -- This ternary is readable
  const variant = disabled ? "disabled" : error ? "error" : "defaulted";

  return (
    <Box as="div" sx={{ position: "relative" }}>
      {icon && iconPosition === "start" ? (
        <IconContainer left>{icon}</IconContainer>
      ) : null}
      <Box
        as="input"
        disabled={disabled}
        placeholder={placeholder}
        sx={{
          ...root,
          ...variantStyles[variant],
          ...(icon ? withIcon[iconPosition] : null),
          ...paragraphSizeStyles.small,
        }}
        type={type}
      />
      {icon && iconPosition === "end" ? (
        <IconContainer left={false}>{icon}</IconContainer>
      ) : null}
    </Box>
  );
}
Input.displayName = "Input";

export const root: SprinklesProperties = {
  boxSizing: "border-box",
  width: "100%",
  position: "relative",
  fontFamily: tokens.font.family.sans,
  paddingY: "space-8",
  paddingX: "space-10",
  border: "solid",
  color: {
    default: "Input-contrast-text",
    placeholder: "Input-placeholder-text",
  },
  borderRadius: 40,
  outline: "none",

  transition: "box-shadow .2s, background-color .2s, color .2s, border .2s",
};

export const variantStyles: Record<
  "defaulted" | "error" | "disabled",
  SprinklesProperties
> = {
  defaulted: {
    backgroundColor: "Input-default",
    borderColor: {
      default: "border-default",
      focus: "border-active",
    },
    boxShadow: {
      focus: "Input-default-focus-shadow",
    },
  },
  error: {
    backgroundColor: "Input-error-default",
    borderColor: "border-error",
  },
  disabled: {
    backgroundColor: "text-disabled-default",
    borderColor: "border-default",
    cursor: "not-allowed",
  },
};

export const withIcon: Record<"start" | "end", SprinklesProperties> = {
  start: {
    paddingLeft: "space-60",
  },
  end: {
    paddingRight: "space-60",
  },
};

import type { SprinklesProperties } from "../../css/sprinkles.css";
import { tokens } from "../../tokens";
import { Box } from "../box/box";

type ButtonVariant = "primary" | "secondary" | "destructive";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "secondary",
  disabled = false,
  type = "button",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <Box
      as="button"
      sx={{
        ...root,
        ...(disabled ? disabledStyles : variantStyles[variant]),
      }}
      type={type}
      {...props}
    >
      {children}
    </Box>
  );
}

const root: SprinklesProperties = {
  paddingY: "space-8",
  paddingX: "space-30",
  borderRadius: 40,
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "space-4",
  fontFamily: tokens.font.family.sans,

  fontWeight: "medium",
  fontSize: 30,
  lineHeight: 60,

  transition: "box-shadow .2s, background-color .2s, color .2s, border .2s",
  outline: {
    focus: "none",
  },
};

const variantStyles: Record<ButtonVariant, SprinklesProperties> = {
  primary: {
    backgroundColor: {
      default: "button-primary-default",
      hover: "button-primary-hover",
    },
    color: "button-primary-contrast-text",
    boxShadow: {
      focus: "button-primary-focus-shadow",
      focusVisible: "button-primary-focus-visible-shadow",
    },
  },
  secondary: {
    backgroundColor: {
      default: "button-secondary-default",
      hover: "button-secondary-hover",
    },
    color: "button-secondary-contrast-text",
    boxShadow: {
      focus: "button-secondary-focus-shadow",
      focusVisible: "button-secondary-focus-visible-shadow",
    },
  },
  destructive: {
    backgroundColor: {
      default: "button-destructive-default",
      hover: "button-destructive-hover",
    },
    color: "button-destructive-contrast-text",
    boxShadow: {
      focus: "button-destructive-focus-shadow",
      focusVisible: "button-destructive-focus-visible-shadow",
    },
  },
};

const disabledStyles: SprinklesProperties = {
  backgroundColor: "button-disabled-default",
  color: "button-disabled-contrast-text",
  cursor: "not-allowed",
};

Button.displayName = "Button";

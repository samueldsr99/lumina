import { clsx } from "../../utils/clsx";
import { Box } from "../box/box";
import * as styles from "./button.css";

type ButtonVariant = "primary" | "secondary" | "destructive";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  destructive: styles.destructive,
};

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
      className={clsx(
        styles.root,
        disabled ? styles.disabled : variantStyles[variant]
      )}
      type={type}
      {...props}
    >
      {children}
    </Box>
  );
}

Button.displayName = "Button";

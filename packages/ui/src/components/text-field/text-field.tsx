import { clsx } from "../../utils/clsx";
import { Box } from "../box";
import { ErrorText } from "../error-text";
import { HelpText } from "../help-text";
import { Label } from "../label";
import { Stack } from "../stack";
import * as paragraphStyles from "../paragraph/paragraph.css";
import * as styles from "./text-field.css";

export interface TextFieldProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  type?: "text" | "number" | "password" | "email" | "tel" | "url" | "search";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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

export function TextField({
  label,
  helperText,
  errorMessage,
  placeholder,
  disabled = false,
  error = false,
  type = "text",
  startIcon,
  endIcon,
}: TextFieldProps) {
  // eslint-disable-next-line no-nested-ternary -- This ternary is readable
  const variant = disabled ? "disabled" : error ? "error" : "defaulted";

  return (
    <Stack gap="space-4">
      {label ? <Label>{label}</Label> : null}
      {helperText ? <HelpText>{helperText}</HelpText> : null}
      <Box as="div" sx={{ position: "relative" }}>
        {startIcon ? <IconContainer left>{startIcon}</IconContainer> : null}
        <Box
          as="input"
          className={clsx(
            styles.root,
            styles.variant[variant],
            paragraphStyles.size.small,
            startIcon ? styles.withStartIcon : null,
            endIcon ? styles.withEndIcon : null
          )}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
        />
        {endIcon ? <IconContainer left={false}>{endIcon}</IconContainer> : null}
      </Box>
      {error && errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Stack>
  );
}

TextField.displayName = "TextInput";

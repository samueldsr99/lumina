import { ErrorText } from "../error-text";
import { HelpText } from "../help-text";
import { Label } from "../label";
import { Stack } from "../stack";

export interface FormFieldProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}

export function FormField({
  label,
  helperText,
  errorMessage,
  children,
  required = false,
  htmlFor,
}: FormFieldProps) {
  return (
    <Stack gap="space-4">
      {label ? (
        <Label htmlFor={htmlFor}>
          {label} {required ? "*" : null}
        </Label>
      ) : null}
      {helperText ? <HelpText>{helperText}</HelpText> : null}
      {children}
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Stack>
  );
}
FormField.displayName = "FormField";

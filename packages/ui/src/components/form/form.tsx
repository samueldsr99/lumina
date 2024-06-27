import { Box } from "../box";

export interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export function Form({ onSubmit, children }: FormProps) {
  return (
    <Box as="form" onSubmit={onSubmit}>
      {children}
    </Box>
  );
}
Form.displayName = "Form";

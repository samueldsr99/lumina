import type { ReactNode } from "react";
import { Text } from "../text";

type HeadingVariants = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps {
  variant: HeadingVariants;
  children?: ReactNode;
}

export function Heading({ children, variant }: HeadingProps): JSX.Element {
  return (
    <Text as={variant} variant={variant}>
      {children}
    </Text>
  );
}

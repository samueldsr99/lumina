import type { ReactNode } from "react";
import { Text } from "../text";
import type { SprinklesProperties } from "../../css/sprinkles.css";

type HeadingVariants = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps {
  children?: ReactNode;
  variant?: HeadingVariants;
  as?: HeadingVariants;
  margin?: boolean;
}

const root: SprinklesProperties = {
  color: "text-heading",
  fontWeight: "bold",
};

const variantStyles: Record<HeadingVariants, SprinklesProperties> = {
  h1: {
    fontSize: 110,
    lineHeight: 140,
  },
  h2: {
    fontSize: 70,
    lineHeight: 110,
  },
  h3: {
    fontSize: 60,
    lineHeight: 90,
  },
  h4: {
    fontSize: 50,
    lineHeight: 70,
  },
};

export function Heading({
  children,
  as = "h1",
  variant = "h1",
  margin = true,
}: HeadingProps): JSX.Element {
  return (
    <Text
      as={as}
      sx={{
        ...root,
        ...variantStyles[variant],
        ...(margin ? { marginBottom: "space-70" } : { margin: "space-0" }),
      }}
    >
      {children}
    </Text>
  );
}
Heading.displayName = "Heading";

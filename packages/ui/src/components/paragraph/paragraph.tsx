import type { ReactNode } from "react";
import { Text } from "../text";
import type { SprinklesProperties } from "../../css/sprinkles.css";

export type ParagraphSize = "xsmall" | "small" | "regular" | "large" | "xlarge";

type ParagraphVariants = "body" | "caption";

export interface ParagraphProps {
  children?: ReactNode;
  size?: ParagraphSize;
  margin?: boolean;
  strong?: boolean;
  variant?: ParagraphVariants;
}

export function Paragraph({
  children,
  size = "regular",
  margin = true,
  strong = false,
  variant = "body",
}: ParagraphProps): JSX.Element {
  return (
    <Text
      as="p"
      sx={{
        ...root,
        ...sizeStyles[size],
        ...marginStyles[margin ? "true" : "false"],
        ...strongStyles[strong ? "true" : "false"],
        ...variantStyles[variant],
      }}
    >
      {children}
    </Text>
  );
}
Paragraph.displayName = "Paragraph";

const root: SprinklesProperties = {
  color: "text-paragraph",
};

export const strongStyles: Record<"true" | "false", SprinklesProperties> = {
  true: {
    fontWeight: "medium",
  },
  false: {
    fontWeight: "normal",
  },
};

export const marginStyles: Record<"true" | "false", SprinklesProperties> = {
  true: {
    marginBottom: "space-4",
  },
  false: {
    margin: "space-0",
  },
};

export const sizeStyles: Record<ParagraphSize, SprinklesProperties> = {
  xsmall: {
    fontSize: 20,
    lineHeight: 40,
  },
  small: {
    fontSize: 30,
    lineHeight: 50,
  },
  regular: {
    fontSize: 40,
    lineHeight: 70,
  },
  large: {
    fontSize: 50,
    lineHeight: 80,
  },
  xlarge: {
    fontSize: 70,
    lineHeight: 120,
  },
};

const variantStyles: Record<ParagraphVariants, SprinklesProperties> = {
  body: {},
  caption: {
    color: "text-help",
  },
};

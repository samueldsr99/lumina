import type { ReactNode } from "react";
import { Text } from "../text";
import { clsx } from "../../utils/clsx";
import * as styles from "./heading.css";

type HeadingVariants = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps {
  children?: ReactNode;
  variant?: HeadingVariants;
  margin?: boolean;
}

export function Heading({
  children,
  variant = "h1",
  margin = true,
}: HeadingProps): JSX.Element {
  return (
    <Text
      as={variant}
      className={clsx(
        styles.root,
        styles[variant],
        styles.withMargin[margin ? "true" : "false"]
      )}
    >
      {children}
    </Text>
  );
}

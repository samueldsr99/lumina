import type { ReactNode } from "react";
import { Text } from "../text";
import { clsx } from "../../utils/clsx";
import * as styles from "./paragraph.css";

export type ParagraphSize = "xsmall" | "small" | "regular" | "large" | "xlarge";

export interface ParagraphProps {
  children?: ReactNode;
  size?: ParagraphSize;
  margin?: boolean;
  strong?: boolean;
}

export function Paragraph({
  children,
  size = "regular",
  margin = true,
  strong = false,
}: ParagraphProps): JSX.Element {
  return (
    <Text
      as="p"
      className={clsx(
        styles.root,
        styles.size[size],
        styles.margin[margin ? "true" : "false"],
        styles.strong[strong ? "true" : "false"]
      )}
    >
      {children}
    </Text>
  );
}

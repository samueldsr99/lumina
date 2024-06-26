import type { ReactNode } from "react";
import { clsx } from "../../utils/clsx";
import { Box } from "../box";
import * as paragraphStyles from "../paragraph/paragraph.css";
import * as styles from "./badge.css";

export type BadgeVariant = "gray" | "success" | "warning" | "danger";

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: ReactNode;
}

export function Badge({ variant = "success", children }: BadgeProps) {
  return (
    <Box
      as="span"
      className={clsx(
        styles.root,
        paragraphStyles.size.xsmall,
        paragraphStyles.strong.true,
        styles.variant[variant]
      )}
    >
      {children}
    </Box>
  );
}

import type { ReactNode } from "react";
import { clsx } from "../../utils/clsx";
import { Box } from "../box";
import { size as paragraphSize } from "../paragraph/paragraph.css";
import * as styles from "./badge.css";

export type BadgeVariant = "success" | "warning" | "error";

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: ReactNode;
}

export function Badge({ variant = "success", children }: BadgeProps) {
  return (
    <Box
      as="span"
      className={clsx(
        paragraphSize.xsmall,
        styles.root,
        styles.variant[variant]
      )}
    >
      {children}
    </Box>
  );
}

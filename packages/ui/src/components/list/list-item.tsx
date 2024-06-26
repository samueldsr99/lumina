import { clsx } from "../../utils/clsx";
import { Box } from "../box";
import * as paragraphStyles from "../paragraph/paragraph.css";
import * as styles from "./list-item.css";

export interface ListItemProps {
  variant?: "dot" | "check";
  margin?: boolean;
  children: React.ReactNode;
}

export function ListItem({ variant, margin, children }: ListItemProps) {
  const textStyles =
    variant === "check"
      ? paragraphStyles.size.large
      : paragraphStyles.size.regular;

  return (
    <Box
      as="li"
      className={clsx(
        styles.root,
        textStyles,
        styles.margin[margin ? "true" : "false"],
        styles.variant[variant ?? "dot"],
        variant === "check" && styles.withCheckIcon
      )}
    >
      {children}
    </Box>
  );
}

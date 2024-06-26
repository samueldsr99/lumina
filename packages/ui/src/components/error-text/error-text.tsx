import type { ReactNode } from "react";
import { Text } from "../text";
import { clsx } from "../../utils/clsx";
import * as paragraphStyles from "../paragraph/paragraph.css";
import * as styles from "./error-text.css";

export interface ErrorTextProps {
  children: ReactNode;
}

export function ErrorText({ children }: ErrorTextProps) {
  return (
    <Text
      as="p"
      className={clsx(
        styles.root,
        styles.withIcon,
        paragraphStyles.size.xsmall,
        paragraphStyles.margin.false
      )}
    >
      {children}
    </Text>
  );
}

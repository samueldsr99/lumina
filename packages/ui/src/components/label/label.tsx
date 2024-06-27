import type { ReactNode } from "react";
import { Text } from "../text";
import * as paragraphStyles from "../paragraph/paragraph.css";
import { clsx } from "../../utils/clsx";
import * as styles from "./label.css";

export interface LabelProps {
  children?: ReactNode;
}

export function Label({ children }: LabelProps) {
  return (
    <Text
      as="label"
      className={clsx(
        styles.root,
        paragraphStyles.size.regular,
        paragraphStyles.strong.true
      )}
    >
      {children}
    </Text>
  );
}
Label.displayName = "Label";

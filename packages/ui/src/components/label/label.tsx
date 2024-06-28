import type { ReactNode } from "react";
import { Text } from "../text";
import * as paragraphStyles from "../paragraph/paragraph.css";
import { clsx } from "../../utils/clsx";
import * as styles from "./label.css";

export interface LabelProps {
  htmlFor?: string;
  children?: ReactNode;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <Text
      as="label"
      className={clsx(
        styles.root,
        paragraphStyles.size.regular,
        paragraphStyles.strong.true
      )}
      htmlFor={htmlFor}
    >
      {children}
    </Text>
  );
}
Label.displayName = "Label";

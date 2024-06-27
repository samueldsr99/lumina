import type { ReactNode } from "react";
import { Text } from "../text";
import { clsx } from "../../utils/clsx";
import * as paragraphStyles from "../paragraph/paragraph.css";
import * as styles from "./help-text.css";

export interface HelpTextProps {
  children: ReactNode;
}

export function HelpText({ children }: HelpTextProps) {
  return (
    <Text
      as="p"
      className={clsx(
        styles.root,
        paragraphStyles.size.xsmall,
        paragraphStyles.margin.false
      )}
    >
      {children}
    </Text>
  );
}
HelpText.displayName = "HelpText";

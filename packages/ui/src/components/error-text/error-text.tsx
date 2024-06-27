import type { ReactNode } from "react";
import { Text } from "../text";
import { clsx } from "../../utils/clsx";
import {
  sizeStyles as paragraphSizeStyles,
  marginStyles as paragraphMarginStyles,
} from "../paragraph/paragraph";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import * as styles from "./error-text.css";

export interface ErrorTextProps {
  children: ReactNode;
}

export function ErrorText({ children }: ErrorTextProps) {
  return (
    <Text
      as="p"
      className={clsx(styles.withIcon)}
      sx={{
        ...paragraphSizeStyles.xsmall,
        ...paragraphMarginStyles.false,
      }}
    >
      {children}
    </Text>
  );
}
ErrorText.displayName = "ErrorText";

export const root: SprinklesProperties = {
  color: "text-error",
};

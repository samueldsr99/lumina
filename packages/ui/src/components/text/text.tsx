import type { ReactNode } from "react";
import { clsx } from "../../utils/clsx";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import { sprinkles } from "../../css/sprinkles.css";
import * as styles from "./text.css";

export type TextAs =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "a"
  | "span"
  | "label";

export interface TextProps {
  as: TextAs;
  children?: ReactNode;
  sx?: SprinklesProperties;
  margin?: boolean;
  className?: string;
}

export function Text(props: TextProps): JSX.Element {
  const { as: Tag, sx, className, ...restProps } = props;

  return (
    <Tag
      className={clsx(styles.root, className, sprinkles({ ...sx }))}
      {...restProps}
    />
  );
}

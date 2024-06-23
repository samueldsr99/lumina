import type { ReactNode } from "react";
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
  | "span";

export type TextVariant = "h1" | "h2" | "h3" | "h4";

export interface TextProps {
  as: TextAs;
  variant: TextVariant;
  children?: ReactNode;
}

export function Text(props: TextProps): JSX.Element {
  const { as: Tag, variant, ...restProps } = props;

  return <Tag className={styles[variant]} {...restProps} />;
}

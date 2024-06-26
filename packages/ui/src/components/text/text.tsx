import type { ReactNode } from "react";
import { clsx } from "../../utils/clsx";
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
  margin?: boolean;
  className?: string;
}

export function Text(props: TextProps): JSX.Element {
  const { as: Tag, className, ...restProps } = props;

  return <Tag className={clsx(styles.root, className)} {...restProps} />;
}

import type { ReactNode } from "react";
import { clsx } from "../../utils/clsx";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import { sprinkles } from "../../css/sprinkles.css";
import { tokens } from "../../tokens";
import type { AsProp, PropsToOmit } from "../box/box";

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

export type TextProps<T extends React.ElementType> = AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, AsProp<T>>> & {
    sx?: SprinklesProperties;
  };

export function Text<T extends React.ElementType>(
  props: TextProps<T>
): JSX.Element {
  const { as: Tag = "p", sx, className, ...restProps } = props;

  return (
    <Tag
      className={clsx(sprinkles({ ...root, ...sx }), className)}
      {...restProps}
    />
  );
}
Text.displayName = "Text";

export const root: SprinklesProperties = {
  marginTop: "space-0",
  fontFamily: tokens.font.family.sans,
};

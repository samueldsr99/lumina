import type { ElementType } from "react";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import { sprinkles } from "../../css/sprinkles.css";

interface AsProp<T extends ElementType> {
  as?: T;
}

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);

export type BoxProps<T extends React.ElementType> = AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, AsProp<T>>> & {
    sx?: SprinklesProperties;
  };

export function Box<T extends ElementType>(props: BoxProps<T>): JSX.Element {
  const { as: Tag = "div", children, sx, ...rest } = props;

  return (
    <Tag className={sprinkles({ ...sx })} {...rest}>
      {children}
    </Tag>
  );
}
Box.displayName = "Box";

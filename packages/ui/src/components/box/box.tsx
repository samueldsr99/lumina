import type { ElementType } from "react";

interface AsProp<T extends ElementType> {
  as?: T;
}

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);

export type BoxProps<T extends React.ElementType> = AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, AsProp<T>>>;

export function Box<T extends ElementType>(props: BoxProps<T>): JSX.Element {
  const { as: Tag = "div", children, ...rest } = props;

  return <Tag {...rest}>{children}</Tag>;
}

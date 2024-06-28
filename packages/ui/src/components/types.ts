export type BaseComponentProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  "className" | "size" | "children"
>;

export type SpacingProperties =
  | "maxWidth"
  | "marginX"
  | "paddingX"
  | "paddingY"
  | "marginY"
  | "margin"
  | "padding"
  | "marginTop"
  | "marginBottom"
  | "marginLeft"
  | "marginRight"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight";

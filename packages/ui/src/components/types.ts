export type BaseComponentProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  "className" | "size" | "children"
>;

import * as styles from "./text-input.css";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sz: "small" | "medium" | "large";
}

export function Box(props: TextInputProps): JSX.Element {
  return <input className={styles.root} type="text" {...props} />;
}

Box.displayName = "TextInput";

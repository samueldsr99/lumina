import * as styles from "./button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className={styles.root} type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";

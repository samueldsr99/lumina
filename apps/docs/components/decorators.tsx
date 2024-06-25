import type { ReactNode } from "react";
import { theme } from "@acme/ui/theme";

export function ThemeDecorator({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className={theme.light.themeClass}>{children}</div>;
}

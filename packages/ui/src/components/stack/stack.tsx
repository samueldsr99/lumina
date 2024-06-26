import type { spacingTokens } from "../../tokens/spacing";
import { Box } from "../box";

export interface StackProps {
  orientation?: "horizontal" | "vertical";
  gap?: keyof typeof spacingTokens;
}

export function Stack(props: StackProps): JSX.Element {
  const { orientation = "vertical", gap = "space-4" } = props;

  return (
    <Box
      as="div"
      sx={{
        display: "flex",
        flexDirection: orientation === "horizontal" ? "row" : "column",
        gap,
      }}
    />
  );
}

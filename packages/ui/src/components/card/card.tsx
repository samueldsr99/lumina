import { Box } from "../box";
import { Container } from "../container";

export interface CardProps {
  children?: React.ReactNode;
  size?: "small" | "large";
}

export function Card({ children, size = "small" }: CardProps) {
  return (
    <Box
      as="article"
      sx={{
        backgroundColor: "card-background",
        paddingX: size === "small" ? "space-60" : "space-120",
        paddingY: size === "small" ? "space-80" : "space-120",
        boxSizing: "border-box",
        borderRadius: 30,
        ...(size === "large" ? {} : { maxWidth: "xsmall" }),
      }}
    >
      <Container maxWidth="medium">{children}</Container>
    </Box>
  );
}

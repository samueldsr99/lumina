import { styleVariants } from "@vanilla-extract/css";
import { tokens } from "../../tokens";
import { sprinkles } from "../../css/sprinkles.css";

export const root = sprinkles({
  color: "text-heading",
  fontWeight: "bold",
});

export const h1 = sprinkles({
  fontSize: 110,
  lineHeight: 140,
});

export const h2 = sprinkles({
  fontSize: 70,
  lineHeight: 110,
});

export const h3 = sprinkles({
  fontSize: 60,
  lineHeight: 90,
});

export const h4 = sprinkles({
  fontSize: 50,
  lineHeight: 70,
});

export const withMargin = styleVariants({
  true: {
    marginBottom: tokens.spacing["space-70"],
  },
  false: {
    margin: 0,
  },
});

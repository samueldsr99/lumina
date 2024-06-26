import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../css/sprinkles.css";
import { tokens } from "../../tokens";

export const root = sprinkles({
  fontFamily: tokens.font.family.sans,
  position: "relative",
});

export const margin = {
  true: sprinkles({
    marginBottom: "space-70",
  }),
  false: sprinkles({
    marginBottom: "space-0",
  }),
};

export const variant = {
  dot: sprinkles({}),
  check: sprinkles({
    paddingTop: {
      marker: "space-10",
    },
  }),
};

export const withCheckIcon = style({
  listStyleImage: "url('../../icons/check-icon.svg')",
});

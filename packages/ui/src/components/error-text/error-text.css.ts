import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../css/sprinkles.css";

export const root = sprinkles({
  color: "text-error",
});

export const withIcon = style({
  ":before": {
    display: "inline-block",
    verticalAlign: "middle",
    paddingRight: 4,
    content: "url('../../icons/error-icon.svg')",
  },
});

import { style } from "@vanilla-extract/css";

export const withIcon = style({
  ":before": {
    display: "inline-block",
    verticalAlign: "middle",
    paddingRight: 4,
    content: "url('../../icons/error-icon.svg')",
  },
});

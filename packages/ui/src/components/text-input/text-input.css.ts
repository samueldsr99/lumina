import { style } from "@vanilla-extract/css";

export const root = style({
  padding: "8px",
  fontSize: "16px",
  lineHeight: "24px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  ":focus": {
    outline: "none",
    borderColor: "#0070f3",
    boxShadow: "0 0 0 2px #0070f3",
  },
});

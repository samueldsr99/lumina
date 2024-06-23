import { style } from "@vanilla-extract/css";

export const root = style({
  padding: "10px 20px",
  borderRadius: 4,
  border: "none",
  backgroundColor: "rebeccapurple",
  color: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "indigo",
  },
});

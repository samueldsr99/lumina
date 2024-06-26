import { sprinkles } from "../../css/sprinkles.css";

export const root = sprinkles({
  color: "text-paragraph",
});

export const size = {
  xsmall: sprinkles({
    fontSize: 20,
    lineHeight: 40,
  }),
  small: sprinkles({
    fontSize: 30,
    lineHeight: 50,
  }),
  regular: sprinkles({
    fontSize: 40,
    lineHeight: 70,
  }),
  large: sprinkles({
    fontSize: 50,
    lineHeight: 80,
  }),
  xlarge: sprinkles({
    fontSize: 70,
    lineHeight: 120,
  }),
};

export const margin = {
  true: sprinkles({
    marginBottom: "space-4",
  }),
  false: sprinkles({
    margin: "space-0",
  }),
};

export const strong = {
  true: sprinkles({
    fontWeight: "medium",
  }),
  false: sprinkles({
    fontWeight: "normal",
  }),
};

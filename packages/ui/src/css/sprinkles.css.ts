import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { spacingTokens } from "../tokens/spacing";
import { borderTokens } from "../tokens/border";
import { fontTokens } from "../tokens/font";
import { sizeTokens } from "../tokens/size";
import { lightTheme } from "../theme/light.css";
import { tokens } from "../tokens";

const flexProperties = {
  display: [
    "block",
    "inline-block",
    "inline",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid",
  ],
  flexDirection: ["row", "row-reverse", "column", "column-reverse"],
  alignContent: [
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ],
  alignItems: ["center", "flex-start", "flex-end", "baseline", "stretch"],
  justifyContent: [
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ],
  flexWrap: ["wrap", "nowrap"],
  flexShrink: [0, 1],
  flexGrow: [0, 1],
} as const;

const borderProperties = {
  border: borderTokens.style,
  borderRadius: borderTokens.radius,
} as const;

const spacingProperties = {
  gap: spacingTokens,
  rowGap: spacingTokens,
  columnGap: spacingTokens,
  margin: spacingTokens,
  marginTop: spacingTokens,
  marginRight: spacingTokens,
  marginBottom: spacingTokens,
  marginLeft: spacingTokens,
  padding: spacingTokens,
  paddingTop: spacingTokens,
  paddingRight: spacingTokens,
  paddingBottom: spacingTokens,
  paddingLeft: spacingTokens,
} as const;

const sizeProperties = {
  width: sizeTokens,
  height: sizeTokens,
} as const;

const semanticColors = lightTheme.vars.color;

const colorProperties = {
  backgroundColor: semanticColors,
  color: semanticColors,
} as const;

const fontProperties = {
  fontFamily: [fontTokens.family.sans],
  fontWeight: fontTokens.weight,
  fontSize: fontTokens.size,
  lineHeight: fontTokens.lineHeight,
};

const allProperties = defineProperties({
  conditions: {
    default: {},
    hover: {
      selector: "&:hover",
    },
    focus: {
      selector: "&:focus",
    },
    focusVisible: {
      selector: "&:focus-visible",
    },
    before: {
      selector: "&::before",
    },
    marker: {
      selector: "&::marker",
    },
  },
  defaultCondition: "default",

  properties: {
    content: [""],

    position: ["relative", "absolute", "fixed", "sticky"],
    left: spacingTokens,
    right: spacingTokens,
    top: spacingTokens,
    bottom: spacingTokens,

    backgroundRepeat: ["no-repeat", "repeat", "repeat-x", "repeat-y"],
    backgroundImage: ["none"],

    cursor: ["pointer", "not-allowed"],

    transition: ["box-shadow .2s, background-color .2s, color .2s, border .2s"],
    boxShadow: {
      "button-primary-focus-shadow": `${lightTheme.vars.color["button-primary-focus-shadow"]} 0 0 0 3px`,
      "button-secondary-focus-shadow": `${lightTheme.vars.color["button-secondary-focus-shadow"]} 0 0 0 3px`,
      "button-destructive-focus-shadow": `${lightTheme.vars.color["button-destructive-focus-shadow"]} 0 0 0 3px`,
      "button-primary-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-primary-default"]}`,
      "button-secondary-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-secondary-default"]}`,
      "button-destructive-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-destructive-default"]}`,
    },
    outline: ["none"],

    ...fontProperties,
    ...flexProperties,
    ...borderProperties,
    ...spacingProperties,
    ...sizeProperties,
    ...colorProperties,
  },
  shorthands: {
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],

    size: ["width", "height"],
  },
});

export const sprinkles = createSprinkles(allProperties);

export type SprinklesProperties = Parameters<typeof sprinkles>[0];

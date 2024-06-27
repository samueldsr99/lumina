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

const spacingTokensWithAuto = { ...spacingTokens, auto: "auto" };

const spacingProperties = {
  gap: spacingTokens,
  rowGap: spacingTokens,
  columnGap: spacingTokens,
  margin: spacingTokensWithAuto,
  marginTop: spacingTokensWithAuto,
  marginRight: spacingTokensWithAuto,
  marginBottom: spacingTokensWithAuto,
  marginLeft: spacingTokensWithAuto,
  padding: spacingTokens,
  paddingTop: spacingTokens,
  paddingRight: spacingTokens,
  paddingBottom: spacingTokens,
  paddingLeft: spacingTokens,
} as const;

const sizeProperties = {
  width: { ...sizeTokens, "100%": "100%" },
  height: { ...sizeTokens, "100%": "100%" },
} as const;

const semanticColors = lightTheme.vars.color;

const colorProperties = {
  backgroundColor: semanticColors,
  color: semanticColors,
} as const;

const borderProperties = {
  border: borderTokens.style,
  borderRadius: borderTokens.radius,
  borderColor: semanticColors,
} as const;

const fontProperties = {
  fontFamily: [fontTokens.family.sans],
  fontWeight: fontTokens.weight,
  fontSize: fontTokens.size,
  lineHeight: fontTokens.lineHeight,
};

const positionTokens = { ...spacingTokens, "50%": "50%" };

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
    placeholder: {
      selector: "&::placeholder",
    },
  },
  defaultCondition: "default",

  properties: {
    content: [""],
    boxSizing: ["border-box"],
    maxWidth: tokens.breakpoint,

    position: ["relative", "absolute", "fixed", "sticky"],
    left: positionTokens,
    right: positionTokens,
    top: positionTokens,
    bottom: positionTokens,
    zIndex: ["auto", 10, 20, 30, 40, 50],

    backgroundRepeat: ["no-repeat", "repeat", "repeat-x", "repeat-y"],
    backgroundImage: ["none"],

    cursor: ["pointer", "not-allowed"],

    transition: ["box-shadow .2s, background-color .2s, color .2s, border .2s"],
    transform: ["translateY(-50%)"],
    boxShadow: {
      "button-primary-focus-shadow": `${lightTheme.vars.color["button-primary-focus-shadow"]} 0 0 0 3px`,
      "button-secondary-focus-shadow": `${lightTheme.vars.color["button-secondary-focus-shadow"]} 0 0 0 3px`,
      "button-destructive-focus-shadow": `${lightTheme.vars.color["button-destructive-focus-shadow"]} 0 0 0 3px`,
      "button-primary-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-primary-default"]}`,
      "button-secondary-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-secondary-default"]}`,
      "button-destructive-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-destructive-default"]}`,

      "textfield-default-focus-shadow": `0 0 0 1px ${lightTheme.vars.color["border-active"]}`,
      "textfield-error-focus-shadow": `0 0 0 1px ${lightTheme.vars.color["border-error"]}`,
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
    insetY: ["top", "bottom"],
    insetX: ["left", "right"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],

    size: ["width", "height"],
  },
});

export const sprinkles = createSprinkles(allProperties);

export type SprinklesProperties = Parameters<typeof sprinkles>[0];

export type SpacingValues = keyof typeof spacingTokens;

import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { spacingTokens } from "../tokens/spacing";
import { borderTokens } from "../tokens/border";
import { fontTokens } from "../tokens/font";
import { sizeTokens } from "../tokens/size";
import { lightTheme } from "../theme/light.css";
import { tokens } from "../tokens";

export type GridValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

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
  accentColor: semanticColors,
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
    disabled: {
      selector: "&:disabled",
    },
    checked: {
      selector: "&:checked",
    },
    after: {
      selector: "&::after",
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

    textAlign: ["left", "center", "right"],

    cursor: ["pointer", "not-allowed"],

    clipPath: {
      "rounded-checkbox":
        "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
    },

    appearance: ["none"],

    gridTemplateColumns: {
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
    },

    gridColumn: {
      "1": "span 1 / span 1",
      "2": "span 2 / span 2",
      "3": "span 3 / span 3",
      "4": "span 4 / span 4",
      "5": "span 5 / span 5",
      "6": "span 6 / span 6",
      "7": "span 7 / span 7",
      "8": "span 8 / span 8",
      "9": "span 9 / span 9",
      "10": "span 10 / span 10",
      "11": "span 11 / span 11",
      "12": "span 12 / span 12",
    },

    transition: ["box-shadow .2s, background-color .2s, color .2s, border .2s"],
    transform: ["translateY(-50%)"],
    boxShadow: {
      "button-primary-focus-shadow": `${lightTheme.vars.color["button-primary-focus-shadow"]} 0 0 0 3px`,
      "button-secondary-focus-shadow": `${lightTheme.vars.color["button-secondary-focus-shadow"]} 0 0 0 3px`,
      "button-destructive-focus-shadow": `${lightTheme.vars.color["button-destructive-focus-shadow"]} 0 0 0 3px`,
      "button-primary-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-primary-default"]}`,
      "button-secondary-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-secondary-default"]}`,
      "button-destructive-focus-visible-shadow": `0px 0px 0px 2px ${tokens.color["openai-white"]},0px 0px 0px 4px ${lightTheme.vars.color["button-destructive-default"]}`,

      "Input-default-focus-shadow": `0 0 0 1px ${lightTheme.vars.color["border-active"]}`,
      "Input-error-focus-shadow": `0 0 0 1px ${lightTheme.vars.color["border-error"]}`,
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

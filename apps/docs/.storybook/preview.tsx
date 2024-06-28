import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../components/decorators";
import theme from "../theme";

import "@lumina/ui/styles.css";
import "../styles.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Welcome"],
      },
    },
    backgrounds: {
      default: "Lumina",
      values: [{ name: "Lumina", value: "#f7f7f8" }],
    },
    docs: {
      theme,
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export default preview;

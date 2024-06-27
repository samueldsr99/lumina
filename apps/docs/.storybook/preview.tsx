import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../components/decorators";

import "@lumina/ui/styles.css";
import "../styles.css";
import { tokens } from "@lumina/ui/tokens";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Lumina",
      values: [
        {
          name: "Lumina",
          value: tokens.color["gray-50"],
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export default preview;

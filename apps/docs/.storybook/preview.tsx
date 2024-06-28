import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../components/decorators";

import "@lumina/ui/styles.css";
import "../styles.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Lumina",
      values: [
        {
          name: "Lumina",
          value: "#f7f7f8",
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

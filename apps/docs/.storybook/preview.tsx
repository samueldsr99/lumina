import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../components/decorators";

import "../styles.css";
import "@lumina/ui/styles.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export default preview;

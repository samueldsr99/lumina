import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../components/decorators";

import "@acme/ui/styles.css";
import "@acme/ui/fonts.css";

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

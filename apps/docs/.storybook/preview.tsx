import React from "react";
import type { Preview } from "@storybook/react";
import { theme } from "@acme/ui/theme";

// import "@acme/ui/styles.css";
// import "@acme/ui/fonts.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={theme.light.themeClass}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

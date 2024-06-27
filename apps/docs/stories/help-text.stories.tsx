import type { Meta, StoryObj } from "@storybook/react";
import { HelpText } from "@lumina/ui";

const meta: Meta<typeof HelpText> = {
  component: HelpText,
  title: "Text/HelpText",
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HelpText>;

export const Default: Story = {
  render: (props) => <HelpText {...props} />,
  args: {
    children: "This aims to contain hints to help the user",
  },
};

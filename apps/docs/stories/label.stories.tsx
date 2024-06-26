import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@acme/ui";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Text/Label",
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (props) => <Label {...props} />,
  args: {
    children: "Label",
  },
};

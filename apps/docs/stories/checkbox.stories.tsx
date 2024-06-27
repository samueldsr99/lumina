import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@lumina/ui";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Checkbox",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Small: Story = {
  render: (props) => <Checkbox {...props} />,
  args: {
    children: "Small",
    size: "small",
  },
};

export const Medium: Story = {
  render: (props) => <Checkbox {...props} />,
  args: {
    children: "Medium",
    size: "medium",
  },
};

export const Large: Story = {
  render: (props) => <Checkbox {...props} />,
  args: {
    children: "Large",
    size: "large",
  },
};

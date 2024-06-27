import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@lumina/ui";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Badge",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["gray", "success", "warning", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Gray: Story = {
  render: (props) => <Badge {...props} />,
  args: {
    children: "Gray",
    variant: "gray",
  },
};

export const Success: Story = {
  render: (props) => <Badge {...props} />,
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  render: (props) => <Badge {...props} />,
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Danger: Story = {
  render: (props) => <Badge {...props} />,
  args: {
    children: "Danger",
    variant: "danger",
  },
};

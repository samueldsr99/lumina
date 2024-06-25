import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@acme/ui";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Badge",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["success", "warning", "error"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

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

export const Error: Story = {
  render: (props) => <Badge {...props} />,
  args: {
    children: "Error",
    variant: "error",
  },
};

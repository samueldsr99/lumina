import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "@lumina/ui";

const meta: Meta<typeof Callout> = {
  component: Callout,
  title: "Components/Callout",
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["gray", "success", "warning", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  render: (props) => <Callout {...props} />,
  args: {
    children: "This is a callout",
    variant: "gray",
  },
};

export const Success: Story = {
  render: (props) => <Callout {...props} />,
  args: {
    children: "This is a success callout",
    variant: "success",
  },
};

export const Warning: Story = {
  render: (props) => <Callout {...props} />,
  args: {
    children: "This is a warning callout",
    variant: "warning",
  },
};

export const Danger: Story = {
  render: (props) => <Callout {...props} />,
  args: {
    children: "This is a danger callout",
    variant: "danger",
  },
};

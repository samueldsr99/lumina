import type { Meta, StoryObj } from "@storybook/react";
import { ErrorText } from "@lumina/ui";

const meta: Meta<typeof ErrorText> = {
  component: ErrorText,
  title: "Text/ErrorText",
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorText>;

export const Default: Story = {
  render: (props) => <ErrorText {...props} />,
  args: {
    children: "This field is required",
  },
};

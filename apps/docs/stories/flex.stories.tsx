import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@acme/ui";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Layout/Flex",
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (props) => <></>,
  name: "Flex",
};

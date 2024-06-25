import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@acme/ui";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Components/Text Input",
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  render: (props) => <TextInput {...props} />,
  name: "Text Input",
};

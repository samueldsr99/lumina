import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@acme/ui";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <TextInput {...props} />,
  name: "Text Input",
};

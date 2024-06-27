import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@lumina/ui";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Primitives/Text",
  argTypes: {
    as: {
      control: {
        type: "select",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (props) => <Text {...props} />,
  args: {
    children: "Hello, world!",
    as: "p",
  },
};

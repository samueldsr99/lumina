import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@acme/ui";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Primitives/Box",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: (props) => <Box {...props} />,
  name: "Box",
};

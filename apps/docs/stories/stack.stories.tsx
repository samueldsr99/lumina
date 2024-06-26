import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@acme/ui";
import { tokens } from "@acme/ui/tokens";

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: "Layout/Stack",
  argTypes: {
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    gap: {
      control: {
        type: "select",
      },
      options: Object.keys(tokens.spacing),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: (props) => (
    <Stack {...props}>
      <Box
        sx={{
          size: "size-200",
          backgroundColor: "gray-200",
          borderRadius: 40,
        }}
      />
      <Box
        sx={{
          size: "size-200",
          backgroundColor: "gray-200",
          borderRadius: 40,
        }}
      />
      <Box
        sx={{
          size: "size-200",
          backgroundColor: "gray-200",
          borderRadius: 40,
        }}
      />
    </Stack>
  ),
  name: "Stack",
  args: {
    gap: "space-40",
    orientation: "vertical",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "@lumina/ui";
import { tokens } from "@lumina/ui/tokens";

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

function Item(): JSX.Element {
  return (
    <Box
      sx={{
        size: "size-200",
        backgroundColor: "button-primary-default",
        borderRadius: 40,
      }}
    />
  );
}

export const Default: Story = {
  render: (props) => (
    <Stack {...props}>
      <Item />
      <Item />
      <Item />
    </Stack>
  ),
  name: "Stack",
  args: {
    gap: "space-40",
    orientation: "vertical",
  },
};

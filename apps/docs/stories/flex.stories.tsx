import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex } from "@acme/ui";
import { tokens } from "@acme/ui/tokens";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Layout/Flex",
  args: {
    container: true,
  },
  argTypes: {
    container: {
      control: {
        type: "boolean",
        disable: true,
      },
    },
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
    justifyContent: {
      control: {
        type: "select",
      },
      options: ["flex-start", "center", "flex-end"],
    },
    alignItems: {
      control: {
        type: "select",
      },
      options: ["flex-start", "center", "flex-end"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

function Item(): JSX.Element {
  return (
    <Box
      sx={{
        size: "size-200",
        backgroundColor: "gray-200",
        borderRadius: 40,
      }}
    />
  );
}

export const Default: Story = {
  render: (props) => (
    <Flex container {...props}>
      <Flex>
        <Item />
      </Flex>
      <Flex>
        <Item />
      </Flex>
      <Flex>
        <Item />
      </Flex>
    </Flex>
  ),
  name: "Flex",
  args: {
    gap: "space-40",
    orientation: "vertical",
  },
};

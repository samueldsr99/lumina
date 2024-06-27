import type { Meta, StoryObj } from "@storybook/react";
import { Container, Heading, Stack, Input } from "@lumina/ui";
import { tokens } from "@lumina/ui/tokens";

const meta: Meta<typeof Container> = {
  component: Container,
  title: "Layout/Container",
  args: {
    center: true,
    maxWidth: "small",
  },
  argTypes: {
    center: {
      control: "boolean",
    },
    maxWidth: {
      control: {
        type: "select",
      },
      options: Object.keys(tokens.breakpoint),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (props) => (
    <Container {...props}>
      <Heading variant="h1">Sign in</Heading>
      <Stack gap="space-40">
        <Input placeholder="john@doe.gmail.com" type="email" />
        <Input placeholder="********" type="password" />
      </Stack>
    </Container>
  ),
};

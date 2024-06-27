import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "@lumina/ui";

const meta: Meta<typeof List> = {
  component: List,
  title: "Components/List",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof List>;

export const Dot: Story = {
  render: (props) => (
    <List {...props}>
      <ListItem>This is a normal paragraph for the OpenAI website.</ListItem>
      <ListItem>This is a normal paragraph for the OpenAI website.</ListItem>
      <ListItem>This is a normal paragraph for the OpenAI website.</ListItem>
    </List>
  ),
};

export const Check: Story = {
  render: (props) => (
    <List {...props}>
      <ListItem variant="check">
        This is a normal paragraph for the OpenAI website.
      </ListItem>
      <ListItem variant="check">
        This is a normal paragraph for the OpenAI website.
      </ListItem>
      <ListItem variant="check">
        This is a normal paragraph for the OpenAI website.
      </ListItem>
    </List>
  ),
};

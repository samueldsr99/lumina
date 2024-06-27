import type { Meta, StoryObj } from "@storybook/react";
import { Container, Form, FormField, Heading, Stack, Input } from "@acme/ui";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Forms/Form",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Container maxWidth="small">
      <Form>
        <Heading>Sign in</Heading>
        <Stack gap="space-50">
          <FormField
            helperText="Hint text to guide the user"
            label="Your email"
          >
            <Input placeholder="john.doe@gmail.com" type="email" />
          </FormField>
          <FormField helperText="Minimum 8 characters" label="Your password">
            <Input placeholder="********" type="password" />
          </FormField>
        </Stack>
      </Form>
    </Container>
  ),
};

export const Error: Story = {
  render: () => (
    <Container maxWidth="small">
      <Form>
        <Heading>Sign in</Heading>
        <Stack gap="space-50">
          <FormField
            errorMessage="Invalid email"
            helperText="Hint text to guide the user"
            label="You email"
          >
            <Input error placeholder="Your email" type="email" />
          </FormField>
          <FormField
            errorMessage="Invalid password"
            helperText="Minimum 8 characters"
            label="Your password"
          >
            <Input error placeholder="********" type="password" />
          </FormField>
        </Stack>
      </Form>
    </Container>
  ),
};

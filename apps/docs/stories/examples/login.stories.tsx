import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  Container,
  Flex,
  Form,
  FormField,
  Heading,
  Input,
  Stack,
} from "@lumina/ui";
import { useState } from "react";

const meta: Meta = {
  title: "Examples/Login Form",
};

export default meta;

type Story = StoryObj<typeof Container>;

function LoginPage(): JSX.Element {
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setEmailError("The email is invalid.");
    setPasswordError("The password is invalid.");
  };

  return (
    <Container center maxWidth="small" paddingY="space-120">
      <Card>
        <Heading variant="h1">Log In</Heading>
        <Form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <Stack gap="space-60">
            <Stack gap="space-50">
              <FormField
                errorMessage={emailError}
                htmlFor="email"
                label="Your email"
                required
              >
                <Input
                  autoComplete="email"
                  error={Boolean(emailError)}
                  id="email"
                  placeholder="john.doe@gmail.com"
                  required
                  type="email"
                />
              </FormField>
              <FormField
                errorMessage={passwordError}
                helperText="Must be at least 8 characters long."
                htmlFor="password"
                label="Your password"
                required
              >
                <Input
                  autoComplete="current-password"
                  error={Boolean(passwordError)}
                  id="password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </FormField>
            </Stack>
            <Flex
              container
              gap="space-20"
              justifyContent="flex-end"
              orientation="horizontal"
            >
              <Button>Go Back</Button>
              <Button type="submit" variant="primary">
                Log In
              </Button>
            </Flex>
          </Stack>
        </Form>
      </Card>
    </Container>
  );
}

export const Default: Story = {
  render: () => {
    return <LoginPage />;
  },
};

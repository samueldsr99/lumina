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
  Paragraph,
  Stack,
} from "@lumina/ui";

const meta: Meta = {
  title: "Examples/2FA Form",
};

export default meta;

type Story = StoryObj<typeof Container>;

function TwoFactorAuthPage(): JSX.Element {
  return (
    <Container center maxWidth="small" paddingY="space-120">
      <Card>
        <Heading center variant="h1">
          Verify it&apos;s you
        </Heading>
        <Stack gap="space-40">
          <Paragraph>
            In order to confirm your identity, please enter the code sent to
            your email account.
          </Paragraph>
          <Form>
            <Stack gap="space-60">
              <FormField htmlFor="code" label="Code" required>
                <Input
                  id="code"
                  name="code"
                  placeholder="123456"
                  required
                  type="text"
                />
              </FormField>
              <Flex
                container
                gap="space-20"
                justifyContent="flex-end"
                orientation="horizontal"
              >
                <Button variant="primary">Confirm</Button>
              </Flex>
            </Stack>
          </Form>
        </Stack>
      </Card>
    </Container>
  );
}

export const Default: Story = {
  render: () => <TwoFactorAuthPage />,
};

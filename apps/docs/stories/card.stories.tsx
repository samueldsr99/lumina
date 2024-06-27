import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Card, Flex, Heading, Paragraph, Stack } from "@lumina/ui";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

function AIIcon(): JSX.Element {
  return (
    <svg
      className="icon"
      fill="#6e6e80"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.398 1.355a.4.4 0 0 0-.795 0c-.123 1.064-.44 1.802-.943 2.305-.503.503-1.241.82-2.306.943a.4.4 0 0 0 .001.794c1.047.119 1.801.436 2.317.942.512.504.836 1.241.93 2.296a.4.4 0 0 0 .796 0c.09-1.038.413-1.792.93-2.308.515-.516 1.269-.839 2.306-.928a.4.4 0 0 0 .001-.797c-1.055-.094-1.792-.418-2.296-.93-.506-.516-.823-1.27-.941-2.317Z" />
      <path
        clipRule="evenodd"
        d="M11 3a1 1 0 0 1 .984.821c.48 2.64 1.295 4.419 2.536 5.66 1.24 1.24 3.02 2.055 5.659 2.535a1 1 0 0 1 0 1.968c-2.64.48-4.419 1.295-5.66 2.536-1.24 1.24-2.055 3.02-2.535 5.659a1 1 0 0 1-1.968 0c-.48-2.64-1.295-4.419-2.536-5.66-1.24-1.24-3.02-2.055-5.659-2.535a1 1 0 0 1 0-1.968c2.64-.48 4.419-1.295 5.66-2.536 1.24-1.24 2.055-3.02 2.535-5.659A1 1 0 0 1 11 3ZM5.666 13c1.259.523 2.332 1.209 3.229 2.105.896.897 1.582 1.97 2.105 3.229.523-1.259 1.209-2.332 2.105-3.229.897-.896 1.97-1.582 3.229-2.105-1.259-.523-2.332-1.209-3.229-2.105-.896-.897-1.582-1.97-2.105-3.229-.523 1.259-1.209 2.332-2.105 3.229-.897.896-1.97 1.582-3.229 2.105Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

function DocIcon(): JSX.Element {
  return (
    <svg
      className="icon"
      fill="#6e6e80"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2a1 1 0 1 1 0-2v-2a1 1 0 1 1 0-2V9a1 1 0 0 1 0-2V5Zm2 4a1 1 0 0 0 0-2V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 1 0 0-2v-2a1 1 0 1 0 0-2V9Zm3-1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export const Default: Story = {
  render: (props) => {
    const features = [
      {
        icon: <AIIcon />,
        text: "Text and image input, text output",
      },
      {
        icon: <DocIcon />,
        text: "128kb context length",
      },
      {
        icon: <DocIcon />,
        text: "Input: $5 | Output: $15*",
      },
    ];

    return (
      <Card {...props}>
        <Stack gap="space-40">
          <Flex
            alignItems="center"
            container
            gap="space-20"
            orientation="horizontal"
          >
            <Heading as="h4" margin={false} variant="h3">
              GPT-4o
            </Heading>
            <Badge variant="success">New</Badge>
          </Flex>

          <Paragraph>Our fastest and most affordable flagship model</Paragraph>

          <Stack gap="space-4">
            {features.map((feature) => (
              <Stack gap="space-8" key={feature.text} orientation="horizontal">
                {feature.icon}
                <Paragraph size="small" variant="caption">
                  {feature.text}
                </Paragraph>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Card>
    );
  },
};

export const FullWidth: Story = {
  render: (props) => (
    <Card {...props}>
      <Heading variant="h1">Title</Heading>
      <Paragraph size="large">Some paragraph</Paragraph>
    </Card>
  ),
  args: {
    size: "large",
  },
};

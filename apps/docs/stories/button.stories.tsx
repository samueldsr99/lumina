import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@lumina/ui";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "destructive"],
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => <Button {...props}>Primary</Button>,
  args: {
    children: "Primary",
    type: "button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  render: (props) => <Button {...props}>Secondary</Button>,
  args: {
    children: "Secondary",
    type: "button",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  render: (props) => <Button {...props}>Destructive</Button>,
  args: {
    children: "Destructive",
    type: "button",
    variant: "destructive",
  },
};

export const Disabled: Story = {
  render: (props) => <Button {...props}>Disabled</Button>,
  args: {
    children: "Disabled",
    type: "button",
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (props) => (
    <Button {...props}>
      <svg
        fill="none"
        height="10"
        viewBox="0 0 11 10"
        width="11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_178_520)">
          <path
            d="M1.5 9L9.5 1M9.5 1H3M9.5 1V7.22222"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
        </g>
        <defs>
          <clipPath id="clip0_178_520">
            <rect
              fill="currentColor"
              height="10"
              transform="translate(0.5)"
              width="10"
            />
          </clipPath>
        </defs>
      </svg>
      {props.children}
    </Button>
  ),
  args: {
    children: "With Icon",
    variant: "primary",
    type: "button",
  },
};

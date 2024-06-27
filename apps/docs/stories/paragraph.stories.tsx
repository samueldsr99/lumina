import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "@lumina/ui";

const meta: Meta<typeof Paragraph> = {
  title: "Text/Paragraph",
  component: Paragraph,
  args: {
    children: "Lorem ipsum dolor sit amet",
    margin: true,
    strong: false,
  },
  argTypes: {
    margin: {
      control: { type: "boolean" },
    },
    strong: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Paragraph1: Story = {
  render: (props) => {
    const { size: _, children, ...restProps } = props;

    const sizes = [
      { size: "xlarge", name: "XLarge" },
      { size: "large", name: "Large" },
      { size: "regular", name: "Regular" },
      { size: "small", name: "Small" },
      { size: "xsmall", name: "XSmall" },
    ] as const;

    return (
      <>
        {sizes.map((size) => (
          <Paragraph key={size.size} size={size.size} {...restProps}>
            {size.name}: {children}
          </Paragraph>
        ))}
      </>
    );
  },
  name: "Paragraphs",
};

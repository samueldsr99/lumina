import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@acme/ui";

const meta: Meta<typeof Heading> = {
  title: "Text/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  render: (props) => {
    const { variant: _, children, ...restProps } = props;

    const variants = [
      { tag: "h1", name: "Heading 1" },
      { tag: "h2", name: "Heading 2" },
      { tag: "h3", name: "Heading 3" },
      { tag: "h4", name: "Heading 4" },
    ] as const;

    return (
      <>
        {variants.map((variant) => (
          <Heading key={variant.tag} variant={variant.tag} {...restProps}>
            {variant.name}: {children}
          </Heading>
        ))}
      </>
    );
  },
  name: "Headings",
};

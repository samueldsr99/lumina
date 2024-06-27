import type { ReactNode } from "react";
import { Box } from "../box";
import type { SprinklesProperties } from "../../css/sprinkles.css";
import { Paragraph } from "../paragraph";
import { Flex } from "../flex";

export type CalloutVariant = "gray" | "success" | "warning" | "danger";

function Icon() {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3333 10C11.3333 9.779 11.2455 9.56703 11.0892 9.41075C10.933 9.25447 10.721 9.16668 10.5 9.16668C10.279 9.16668 10.067 9.25447 9.91072 9.41075C9.75444 9.56703 9.66665 9.779 9.66665 10V13.3333C9.66665 13.5544 9.75444 13.7663 9.91072 13.9226C10.067 14.0789 10.279 14.1667 10.5 14.1667C10.721 14.1667 10.933 14.0789 11.0892 13.9226C11.2455 13.7663 11.3333 13.5544 11.3333 13.3333V10ZM10.5 7.91668C10.7762 7.91668 11.0412 7.80693 11.2365 7.61158C11.4319 7.41623 11.5416 7.15128 11.5416 6.87501C11.5416 6.59874 11.4319 6.33379 11.2365 6.13844C11.0412 5.94309 10.7762 5.83334 10.5 5.83334C10.2237 5.83334 9.95876 5.94309 9.76341 6.13844C9.56806 6.33379 9.45831 6.59874 9.45831 6.87501C9.45831 7.15128 9.56806 7.41623 9.76341 7.61158C9.95876 7.80693 10.2237 7.91668 10.5 7.91668Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M10.5 1.66666C5.89752 1.66666 2.16669 5.39749 2.16669 9.99999C2.16669 14.6025 5.89752 18.3333 10.5 18.3333C15.1025 18.3333 18.8334 14.6025 18.8334 9.99999C18.8334 5.39749 15.1025 1.66666 10.5 1.66666ZM3.83335 9.99999C3.83335 8.23188 4.53573 6.53619 5.78598 5.28594C7.03622 4.0357 8.73191 3.33332 10.5 3.33332C12.2681 3.33332 13.9638 4.0357 15.2141 5.28594C16.4643 6.53619 17.1667 8.23188 17.1667 9.99999C17.1667 11.7681 16.4643 13.4638 15.2141 14.714C13.9638 15.9643 12.2681 16.6667 10.5 16.6667C8.73191 16.6667 7.03622 15.9643 5.78598 14.714C4.53573 13.4638 3.83335 11.7681 3.83335 9.99999Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export interface CalloutProps {
  children?: ReactNode;
  variant?: CalloutVariant;
}

export function Callout({ children, variant = "gray" }: CalloutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        paddingX: "space-40",
        paddingY: "space-30",
        border: "solid",
        borderRadius: 40,
        ...variantStyles[variant],
      }}
    >
      <Flex
        alignItems="center"
        container
        gap="space-20"
        orientation="horizontal"
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            ...iconColorStyles[variant],
          }}
        >
          <Icon />
        </Box>
        <Paragraph margin={false} size="regular">
          {children}
        </Paragraph>
      </Flex>
    </Box>
  );
}

const iconColorStyles: Record<CalloutVariant, SprinklesProperties> = {
  gray: {
    color: "icon-dark",
  },
  success: {
    color: "icon-emphasis-green",
  },
  danger: {
    color: "icon-emphasis-destructive",
  },
  warning: {
    color: "icon-emphasis-gold",
  },
};

const variantStyles: Record<CalloutVariant, SprinklesProperties> = {
  gray: {
    borderColor: "border-default",
    backgroundColor: "callout-gray-default",
  },
  success: {
    borderColor: "border-active",
    backgroundColor: "callout-success-default",
  },
  danger: {
    borderColor: "border-error",
    backgroundColor: "callout-danger-default",
  },
  warning: {
    borderColor: "border-gold",
    backgroundColor: "callout-warning-default",
  },
};

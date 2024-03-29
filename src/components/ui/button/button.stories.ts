import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { onClick: { action: "clicked" } },
  args: {
    children: "Button",
    "aria-label": "button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};
export const Text: Story = {
  args: {
    variant: "text",
  },
};
export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Button } from "./Button";

type Story = StoryObj<typeof Button >;

/**
 * Button component
 */
export default {
  component: Button,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "Button",
} satisfies Meta<typeof Button>;

export const Primary: Story = {
  args: {
    children: "button",
    styleColor: "primary"
  },
};
export const Secondary: Story = {
  args: {
    children: "button",
    styleColor: "secondary"
  },
};

export const Large: Story = {
  args: {
  },
};

export const Small: Story = {
  args: {
  },
};

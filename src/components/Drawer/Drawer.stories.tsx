import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Drawer from "./Drawer";

import React from "react";

type Story = StoryObj<typeof Drawer>;

/**
 * Modal component
 */
export default {
  component: Drawer,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export const Default: Story = {
  args: {},
};

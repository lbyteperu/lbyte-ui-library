import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Modal from "./Modal";

import React from "react";

type Story = StoryObj<typeof Modal>;

/**
 * Modal component
 */
export default {
  component: Modal,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export const Default: Story = {
  args: {},
};

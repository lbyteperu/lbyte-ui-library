import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import AddCircle from "./AddCircle";
import React from "react";

type Story = StoryObj<typeof AddCircle>;

/**
 * Button component
 */
export default {
  component: AddCircle,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "Icons",
} satisfies Meta<typeof AddCircle>;

export const AddCircleStory: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import MenuMobile from "./MenuMobile";
import React from "react";

type Story = StoryObj<typeof MenuMobile>;

/**
 * Menu component
 */
export default {
  component: MenuMobile,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof MenuMobile>;

export const Default: Story = {
  args: {
    children: (
      <>
        <MenuMobile />
      </>
    ),
  },
};

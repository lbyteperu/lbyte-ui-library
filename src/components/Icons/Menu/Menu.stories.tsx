import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Menu from "./Menu";
import { IconSizes } from "../IconSizes";
import React from "react";

type Story = StoryObj<typeof Menu>;

/**
 * Button component
 */
export default {
  component: Menu,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "components/Icons",
} satisfies Meta<typeof Menu>;

export const MenuSizes: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Menu size={IconSizes.xxSmall} />
        <Menu size={IconSizes.xSmall} />
        <Menu size={IconSizes.small} />
        <Menu size={IconSizes.large} />
        <Menu size={IconSizes.xLarge} />
        <Menu size={IconSizes.xxLarge} />
      </div>
    );
  },
};

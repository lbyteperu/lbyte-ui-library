import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import MenuGrid, { IconSizes } from "./MenuGrid";
import React from "react";

type Story = StoryObj<typeof MenuGrid>;

/**
 * Button component
 */
export default {
  component: MenuGrid,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "components/Icons",
} satisfies Meta<typeof MenuGrid>;

export const MenuGridSizes: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <MenuGrid size={IconSizes.xxSmall} />
        <MenuGrid size={IconSizes.xSmall} />
        <MenuGrid size={IconSizes.small} />
        <MenuGrid size={IconSizes.large} />
        <MenuGrid size={IconSizes.xLarge} />
        <MenuGrid size={IconSizes.xxLarge} />
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import MenuGrid from "./MenuGrid";
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
        <MenuGrid width={8} height={8} />
        <MenuGrid width={16} height={16} />
        <MenuGrid width={24} height={24} />
        <MenuGrid width={32} height={32} />
        <MenuGrid width={40} height={40} />
        <MenuGrid width={48} height={48} />
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import AddCircle from "./AddCircle";
import { IconSizes } from "../IconSizes";
import React from "react";

type Story = StoryObj<typeof AddCircle>;

/**
 * Button component
 */
export default {
  component: AddCircle,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "components/Icons",
} satisfies Meta<typeof AddCircle>;

export const AddCircleSizes: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <AddCircle size={IconSizes.xxSmall} />
        <AddCircle size={IconSizes.xSmall} />
        <AddCircle size={IconSizes.small} />
        <AddCircle size={IconSizes.large} />
        <AddCircle size={IconSizes.xLarge} />
        <AddCircle size={IconSizes.xxLarge} />
      </div>
    );
  },
};

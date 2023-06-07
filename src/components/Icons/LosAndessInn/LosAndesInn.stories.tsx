import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import LosAndesInn, { IconSizes } from "./LosAndesInn";
import React from "react";

type Story = StoryObj<typeof LosAndesInn>;

/**
 * Button component
 */
export default {
  component: LosAndesInn,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "components/Icons",
} satisfies Meta<typeof LosAndesInn>;

export const LosAndesInnSizes: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <LosAndesInn size={IconSizes.xxSmall} />
        <LosAndesInn size={IconSizes.xSmall} />
        <LosAndesInn size={IconSizes.small} />
        <LosAndesInn size={IconSizes.large} />
        <LosAndesInn size={IconSizes.xLarge} />
        <LosAndesInn size={IconSizes.xxLarge} />
      </div>
    );
  },
};

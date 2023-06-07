import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import IconButton from "./IconButton";
import { AddCircle, IconSizes, Menu, MenuGrid } from "../Icons";

import React from "react";

type Story = StoryObj<typeof IconButton>;

/**
 * IconButton component
 */
export default {
  component: IconButton,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export const StyledIconButton: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <IconButton
          styleColor="primary"
          size="medium"
          href="#"
          icon={<AddCircle size={IconSizes.small} />}
        />
        <IconButton
          styleColor="secondary"
          size="medium"
          href="#"
          icon={<Menu size={IconSizes.small} />}
        />
        <IconButton
          styleColor="success"
          size="medium"
          href="#"
          icon={<MenuGrid size={IconSizes.small} />}
        />
        <IconButton
          styleColor="danger"
          size="medium"
          href="#"
          icon={<AddCircle size={IconSizes.small} />}
        />
        <IconButton
          styleColor="warning"
          size="medium"
          href="#"
          icon={<Menu size={IconSizes.small} />}
        />
        <IconButton
          styleColor="info"
          size="medium"
          href="#"
          icon={<MenuGrid size={IconSizes.small} />}
        />
        <IconButton
          styleColor="light"
          size="medium"
          href="#"
          icon={<MenuGrid size={IconSizes.small} />}
        />
        <IconButton
          styleColor="dark"
          size="medium"
          href="#"
          icon={<Menu size={IconSizes.small} />}
        />
      </div>
    );
  },
};

export const ButtonOutlines: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <IconButton
          styleColor="primary"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="secondary"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="success"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="danger"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="warning"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="info"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="light"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="dark"
          size="medium"
          icon={<MenuGrid size={IconSizes.small} />}
          outline
          href="#"
        />
      </div>
    );
  },
};

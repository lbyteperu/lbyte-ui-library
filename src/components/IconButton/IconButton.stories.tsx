import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import IconButton from "./IconButton";
import { AddCircleIcon, MenuIcon, MenuGridIcon } from "../Icons";

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
          icon={<AddCircleIcon width={32} height={32} />}
        />
        <IconButton
          styleColor="secondary"
          size="medium"
          href="#"
          icon={<MenuIcon width={32} height={32} />}
        />
        <IconButton
          styleColor="success"
          size="medium"
          href="#"
          icon={<MenuGridIcon width={32} height={32} />}
        />
        <IconButton
          styleColor="danger"
          size="medium"
          href="#"
          icon={<AddCircleIcon width={32} height={32} />}
        />
        <IconButton
          styleColor="warning"
          size="medium"
          href="#"
          icon={<MenuIcon width={32} height={32} />}
        />
        <IconButton
          styleColor="info"
          size="medium"
          href="#"
          icon={<MenuGridIcon width={32} height={32} />}
        />
        <IconButton
          styleColor="light"
          size="medium"
          href="#"
          icon={<MenuGridIcon width={32} height={32} />}
        />
        <IconButton
          styleColor="dark"
          size="medium"
          href="#"
          icon={<MenuIcon width={32} height={32} />}
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
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="secondary"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="success"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="danger"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="warning"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="info"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="light"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
        <IconButton
          styleColor="dark"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
        />
      </div>
    );
  },
};

export const ButtonQuiet: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <IconButton
          styleColor="primary"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
        <IconButton
          styleColor="secondary"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
        <IconButton
          styleColor="success"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
        <IconButton
          styleColor="danger"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
        <IconButton
          styleColor="warning"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
        <IconButton
          styleColor="info"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
        <IconButton
          styleColor="light"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
        <IconButton
          styleColor="dark"
          size="medium"
          icon={<MenuGridIcon width={32} height={32} />}
          outline
          href="#"
          quiet
        />
      </div>
    );
  },
};

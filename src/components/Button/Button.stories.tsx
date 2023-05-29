import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Button from "./Button";
import React from "react";

type Story = StoryObj<typeof Button>;

/**
 * Button component
 */
export default {
  component: Button,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "Button",
} satisfies Meta<typeof Button>;

export const StyledButton: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button styleColor="primary" size="medium" children="Primary" />
        <Button styleColor="secondary" size="medium" children="Secondary" />
        <Button styleColor="success" size="medium" children="Success" />
        <Button styleColor="danger" size="medium" children="Danger" />
        <Button styleColor="warning" size="medium" children="Warning" />
        <Button styleColor="info" size="medium" children="Info" />
        <Button styleColor="light" size="medium" children="Light" />
        <Button styleColor="dark" size="medium" children="Dark" />
        <Button styleColor="link" size="medium" children="Link" />
      </div>
    );
  },
};

export const ButtonSizes: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button styleColor="primary" size="small" children="Small" />
        <Button styleColor="secondary" size="medium" children="Medium" />
        <Button styleColor="success" size="large" children="Large" />
      </div>
    );
  },
};

export const LongTextNoWrap: Story = {
  args: {
    children: "really long text not to be wrapped",
    styleColor: "secondary",
    size: "medium",
  },
};

export const LongTextWrapped: Story = {
  args: {
    children: "really long text not to be wrapped",
    styleColor: "secondary",
    size: "medium",
    wrap: true,
  },
};

export const LinkButton: Story = {
  args: {
    children: "Link",
    styleColor: "link",
    size: "medium",
  },
};

export const Medium: Story = {
  args: {
    children: "button",
    styleColor: "secondary",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "button",
    styleColor: "secondary",
    size: "small",
  },
};

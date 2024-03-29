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
} satisfies Meta<typeof Button>;

export const Default: Story = {
  args: {
    onClick: () => {
      console.log("testing");
    },
    children: "default",
  },
};

export const StyledButton: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button
          color="primary"
          size="medium"
          children="Primary"
          type="button"
          onClick={() => {
            console.log("testing");
          }}
        />
        <Button
          color="secondary"
          size="medium"
          children="Secondary"
          type="button"
        />
        <Button
          color="success"
          size="medium"
          children="Success"
          type="button"
        />
        <Button color="danger" size="medium" children="Danger" type="button" />
        <Button
          color="warning"
          size="medium"
          children="Warning"
          type="button"
        />
        <Button color="info" size="medium" children="Info" type="button" />
        <Button color="light" size="medium" children="Light" type="button" />
        <Button color="dark" size="medium" children="Dark" type="button" />
        <Button color="link" size="medium" children="Link" type="button" />
      </div>
    );
  },
};

export const ButtonTags: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button color="primary" size="medium" children="Button" type="button" />
        <Button color="primary" size="medium" type="button" children="link" />
      </div>
    );
  },
};

export const ButtonOutlines: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button
          color="primary"
          size="medium"
          children="Primary"
          type="button"
          outline
        />
        <Button
          color="secondary"
          size="medium"
          children="Secondary"
          type="button"
          outline
        />
        <Button
          color="success"
          size="medium"
          children="Success"
          type="button"
          outline
        />
        <Button
          color="danger"
          size="medium"
          children="Danger"
          type="button"
          outline
        />
        <Button
          color="warning"
          size="medium"
          children="Warning"
          type="button"
          outline
        />
        <Button
          color="info"
          size="medium"
          children="Info"
          type="button"
          outline
        />
        <Button
          color="light"
          size="medium"
          children="Light"
          type="button"
          outline
        />
        <Button
          color="dark"
          size="medium"
          children="Dark"
          type="button"
          outline
        />
        <Button
          color="link"
          size="medium"
          children="Link"
          type="button"
          outline
        />
      </div>
    );
  },
};

export const ButtonSizes: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button color="primary" size="small" children="Small" type="button" />
        <Button
          color="secondary"
          size="medium"
          children="Medium"
          type="button"
        />
        <Button color="success" size="large" children="Large" type="button" />
      </div>
    );
  },
};

export const LongTextNoWrap: Story = {
  args: {
    children: "really long text not to be wrapped",
    color: "secondary",
    size: "medium",
    type: "button",
  },
};

export const LongTextWrapped: Story = {
  args: {
    children: "really long text not to be wrapped",
    color: "secondary",
    size: "medium",
    wrap: true,
    type: "button",
  },
};

export const LinkButton: Story = {
  args: {
    children: "Link",
    color: "link",
    size: "medium",
    type: "button",
  },
};

export const Outline: Story = {
  args: {
    children: "outline",
    color: "primary",
    size: "medium",
    type: "button",
    outline: true,
  },
};

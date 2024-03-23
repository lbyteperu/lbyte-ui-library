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
  render: () => {
    return (
      <div>
        <Button
          color="primary"
          size="medium"
          type="button"
          onClick={() => {
            console.log("testing");
          }}
        >
          {"primary"}
        </Button>
        <Button color="secondary" size="medium" type="button">
          {"Secondary"}
        </Button>
        <Button color="success" size="medium" type="button">
          {"Success"}
        </Button>
        <Button color="danger" size="medium" type="button">
          {"Danger"}
        </Button>
        <Button color="warning" size="medium" type="button">
          {"Warning"}
        </Button>
        <Button color="info" size="medium" type="button">
          {"Info"}
        </Button>
        <Button color="light" size="medium" type="button">
          {"Dark"}
        </Button>
        <Button color="dark" size="medium" type="button">
          {"Dark"}
        </Button>
        <Button color="link" size="medium" type="button">
          {"Link"}
        </Button>
      </div>
    );
  },
};

export const ButtonTags: Story = {
  render: () => {
    return (
      <div>
        <Button color="primary" size="medium" type="button">
          {"Button"}
        </Button>
        <Button color="primary" size="medium" type="button">
          {"Link"}
        </Button>
      </div>
    );
  },
};

export const ButtonOutlines: Story = {
  render: () => {
    return (
      <div>
        <Button color="primary" size="medium" type="button" outline>
          {"Primary"}
        </Button>
        <Button color="secondary" size="medium" type="button" outline>
          {"Secondary"}
        </Button>
        <Button color="success" size="medium" type="button" outline>
          {"Success"}
        </Button>
        <Button color="danger" size="medium" type="button" outline>
          {"Danger"}
        </Button>
        <Button color="warning" size="medium" type="button" outline>
          {"Warning"}
        </Button>
        <Button color="info" size="medium" type="button" outline>
          {"Info"}
        </Button>
        <Button color="light" size="medium" type="button" outline>
          {"Light"}
        </Button>
        <Button color="dark" size="medium" type="button" outline>
          {"Dark"}
        </Button>
        <Button color="link" size="medium" type="button" outline>
          {"Link"}
        </Button>
      </div>
    );
  },
};

export const ButtonSizes: Story = {
  render: () => {
    return (
      <div>
        <Button color="primary" size="small" type="button">
          {"Small"}
        </Button>
        <Button color="secondary" size="medium" type="button">
          {"Medium"}
        </Button>
        <Button color="success" size="large" type="button">
          {"Large"}
        </Button>
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

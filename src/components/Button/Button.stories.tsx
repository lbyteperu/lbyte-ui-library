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
    children:"default"
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
          buttonTag="button"
          onClick={()=> {console.log('testing')}}
        />
        <Button
          color="secondary"
          size="medium"
          children="Secondary"
          buttonTag="button"
        />
        <Button
          color="success"
          size="medium"
          children="Success"
          buttonTag="button"
        />
        <Button
          color="danger"
          size="medium"
          children="Danger"
          buttonTag="button"
        />
        <Button
          color="warning"
          size="medium"
          children="Warning"
          buttonTag="button"
        />
        <Button
          color="info"
          size="medium"
          children="Info"
          buttonTag="button"
        />
        <Button
          color="light"
          size="medium"
          children="Light"
          buttonTag="button"
        />
        <Button
          color="dark"
          size="medium"
          children="Dark"
          buttonTag="button"
        />
        <Button
          color="link"
          size="medium"
          children="Link"
          buttonTag="link"
        />
      </div>
    );
  },
};

export const ButtonTags: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button
          color="primary"
          size="medium"
          children="Button"
          buttonTag="button"
        />
        <Button
          color="primary"
          size="medium"
          buttonTag="link"
          children="link"
        />
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
          buttonTag="button"
          outline
        />
        <Button
          color="secondary"
          size="medium"
          children="Secondary"
          buttonTag="button"
          outline
        />
        <Button
          color="success"
          size="medium"
          children="Success"
          buttonTag="button"
          outline
        />
        <Button
          color="danger"
          size="medium"
          children="Danger"
          buttonTag="button"
          outline
        />
        <Button
          color="warning"
          size="medium"
          children="Warning"
          buttonTag="button"
          outline
        />
        <Button
          color="info"
          size="medium"
          children="Info"
          buttonTag="button"
          outline
        />
        <Button
          color="light"
          size="medium"
          children="Light"
          buttonTag="button"
          outline
        />
        <Button
          color="dark"
          size="medium"
          children="Dark"
          buttonTag="button"
          outline
        />
        <Button
          color="link"
          size="medium"
          children="Link"
          buttonTag="link"
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
        <Button
          color="primary"
          size="small"
          children="Small"
          buttonTag="button"
        />
        <Button
          color="secondary"
          size="medium"
          children="Medium"
          buttonTag="button"
        />
        <Button
          color="success"
          size="large"
          children="Large"
          buttonTag="button"
        />
      </div>
    );
  },
};

export const LongTextNoWrap: Story = {
  args: {
    children: "really long text not to be wrapped",
    color: "secondary",
    size: "medium",
    buttonTag: "button",
  },
};

export const LongTextWrapped: Story = {
  args: {
    children: "really long text not to be wrapped",
    color: "secondary",
    size: "medium",
    wrap: true,
    buttonTag: "button",
  },
};

export const LinkButton: Story = {
  args: {
    children: "Link",
    color: "link",
    size: "medium",
    buttonTag: "link",
  },
};

export const Outline: Story = {
  args: {
    children: "outline",
    color: "primary",
    size: "medium",
    buttonTag: "button",
    outline: true,
  },
};

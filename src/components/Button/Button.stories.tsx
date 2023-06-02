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

export const StyledButton: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button
          styleColor="primary"
          size="medium"
          children="Primary"
          buttonTag="button"
        />
        <Button
          styleColor="secondary"
          size="medium"
          children="Secondary"
          buttonTag="button"
        />
        <Button
          styleColor="success"
          size="medium"
          children="Success"
          buttonTag="button"
        />
        <Button
          styleColor="danger"
          size="medium"
          children="Danger"
          buttonTag="button"
        />
        <Button
          styleColor="warning"
          size="medium"
          children="Warning"
          buttonTag="button"
        />
        <Button
          styleColor="info"
          size="medium"
          children="Info"
          buttonTag="button"
        />
        <Button
          styleColor="light"
          size="medium"
          children="Light"
          buttonTag="button"
        />
        <Button
          styleColor="dark"
          size="medium"
          children="Dark"
          buttonTag="button"
        />
        <Button
          styleColor="link"
          size="medium"
          children="Link"
          buttonTag="button"
        />
      </div>
    );
  },
};

export const ButtonTags: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Button styleColor="primary" size="medium" children="Link" buttonTag="link" />
        <Button styleColor="primary" size="medium" children="Button" buttonTag="button"/>
        <Button styleColor="primary" size="medium" value="Input" buttonTag="input"/>
        <Button styleColor="primary" size="medium" value="Submit" buttonTag="submit"/>
        <Button styleColor="primary" size="medium" value="Reset" buttonTag="reset"/>
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

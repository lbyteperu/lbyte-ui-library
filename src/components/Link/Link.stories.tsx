import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Link from "./Link";
import React from "react";

type Story = StoryObj<typeof Link>;

/**
 * Link component
 */
export default {
  component: Link,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export const StyledLink: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Link styleColor="primary" size="medium" children="Primary" href="#" />
        <Link
          styleColor="secondary"
          size="medium"
          children="Secondary"
          href="#"
        />
        <Link styleColor="success" size="medium" children="Success" href="#" />
        <Link styleColor="danger" size="medium" children="Danger" href="#" />
        <Link styleColor="warning" size="medium" children="Warning" href="#" />
        <Link styleColor="info" size="medium" children="Info" href="#" />
        <Link styleColor="light" size="medium" children="Light" href="#" />
        <Link styleColor="dark" size="medium" children="Dark" href="#" />
        <Link styleColor="link" size="medium" children="Link" href="#" />
      </div>
    );
  },
};

export const ButtonOutlines: Story = {
  render: ({ ...args }) => {
    return (
      <div>
        <Link
          styleColor="primary"
          size="medium"
          children="Primary"
          outline
          href="#"
        />
        <Link
          styleColor="secondary"
          size="medium"
          children="Secondary"
          outline
          href="#"
        />
        <Link
          styleColor="success"
          size="medium"
          children="Success"
          outline
          href="#"
        />
        <Link
          styleColor="danger"
          size="medium"
          children="Danger"
          outline
          href="#"
        />
        <Link
          styleColor="warning"
          size="medium"
          children="Warning"
          outline
          href="#"
        />
        <Link
          styleColor="info"
          size="medium"
          children="Info"
          outline
          href="#"
        />
        <Link
          styleColor="light"
          size="medium"
          children="Light"
          outline
          href="#"
        />
        <Link
          styleColor="dark"
          size="medium"
          children="Dark"
          outline
          href="#"
        />
        <Link
          styleColor="link"
          size="medium"
          children="Link"
          outline
          href="#"
        />
      </div>
    );
  },
};

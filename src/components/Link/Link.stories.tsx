import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Link from "./Link";
import React from "react";

type Story = StoryObj<typeof Link>;

/**
 * Button component
 */
export default {
  component: Link,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export const LinkButton: Story = {
  args: {
    children: "Link",
    href: "#"
  },
};

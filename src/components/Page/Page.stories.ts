import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { within, userEvent } from "@storybook/testing-library";

import Page from "./Page";

type Story = StoryObj<typeof Page>;

/**
 * Page component
 */
export default {
  component: Page,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "Page",
} satisfies Meta<typeof Page>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

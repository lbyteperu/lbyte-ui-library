import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Header, { User } from "./Header";

type Story = StoryObj<typeof Header>;

const userIn: User = {
  name: "user test",
};

/**
 * Button component
 */
export default {
  component: Header,
  decorators: [withRouter],
  tags: ["autodocs"],
  title: "components/Header",
} satisfies Meta<typeof Header>;

export const Basic: Story = {
  args: {
    user: userIn,
    onLogin: () => {
      console.log("on login");
    },
    onLogout: () => {
      console.log("on logout");
    },
    onCreateAccount: () => {
      console.log("on create account");
    },
  },
};

export const LoggedIn: Story = {
  args: {
    user: userIn,
    onLogin: () => {
      console.log("on login");
    },
    onLogout: () => {
      console.log("on logout");
    },
    onCreateAccount: () => {
      console.log("on create account");
    },
  },
};

export const LoggedOut: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Colors from "./Colors";
import React from "react";

type Story = StoryObj<typeof Colors>;

export default {
  component: Colors,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Colors>;

export const Default: Story = {
  args: {
    color: "primary",
    title: "default",
    children: <>#7367f0</>,
  },
};

export const PrimaryColors: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-around",
        }}
      >
        <Colors color="primary" tone="lightest" title="Light">
          {"#c7c2f9"}
        </Colors>
        <Colors color="primary" tone="lighter" title="Lighter">
          {"#aba4f6"}
        </Colors>
        <Colors color="primary" tone="light" title="Lightest">
          {"#8f85f3"}
        </Colors>
        <Colors color="primary" tone="regular-light" title="Regular">
          {"#8f85f3"}
        </Colors>
        <Colors color="primary" tone="regular" title="Regular-Light">
          {"#7367f0"}
        </Colors>
        <Colors color="primary" tone="regular-dark" title="Regular-Lighter">
          {"#675dd8"}
        </Colors>
        <Colors color="primary" tone="dark" title="Dark">
          {"#6258cc"}
        </Colors>
        <Colors color="primary" tone="darker" title="Darker">
          {"#5c52c0"}
        </Colors>
        <Colors color="primary" tone="darkest" title="Darkest">
          {"#564db4"}
        </Colors>
      </div>
    );
  },
};

export const OpacityColors: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-around",
        }}
      >
        <Colors opacity="lighter" title="Lighter">
          {"#7367f008 (8%)"}
        </Colors>
        <Colors opacity="light" title="Light">
          {"#7367f016 (16%)"}
        </Colors>
        <Colors opacity="main" title="Main">
          {"#7367f024 (24%)"}
        </Colors>
        <Colors opacity="dark" title="Dark">
          {"#7367f032 (32%)"}
        </Colors>
        <Colors opacity="darker" title="Darker">
          {"#7367f038 (38%)"}
        </Colors>
      </div>
    );
  },
};

export const SecondaryColors: Story = {
  render: () => {
    return (
      <div>
        <Colors color="secondary" title="Light" />
      </div>
    );
  },
};

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Drawer, { DrawerProps } from "./Drawer";
import Button from "../Button";
type Story = StoryObj<typeof Drawer>;

/**
 * Modal component
 */
export default {
  component: Drawer,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export const Basic: Story = {
  parameters: {
    open: false,
  },
  args: {},
  render: () => <Drawer open={true} />,
};
/**
 * Examples with state
 */
const DrawerWithState = ({ appearFrom }: DrawerProps) => {
  const [open, setOpen] = useState(true);
  const handleOnChange = () => {};
  return (
    <div
      style={{ display: "flex", flexFlow: "row", justifyContent: "flex-end" }}
    >
      <Drawer
        open={open}
        mountOnEnter
        unmountOnExit
        setOpen={setOpen}
        appearFrom={appearFrom}
      />
      <Button
        onClick={() => {
          setOpen(false);
        }}
        color="primary"
      >
        cerrar
      </Button>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        color="secondary"
      >
        abrir
      </Button>
    </div>
  );
};

export const FromLeft: Story = {
  render: () => <DrawerWithState appearFrom="left" open={true} />,
};

export const FromRight: Story = {
  render: () => <DrawerWithState appearFrom="right" open={true} />,
};

export const FromAbove: Story = {
  render: () => <DrawerWithState appearFrom="above" open={true} />,
};

export const FromBelow: Story = {
  render: () => <DrawerWithState appearFrom="below" open={true} />,
};

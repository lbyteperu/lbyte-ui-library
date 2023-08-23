import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Drawer, { DrawerProps } from "./Drawer";
import Button from "../Button";
type Story = StoryObj<typeof Drawer>;

/**
 * Modal component
 */
export default {
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export const Default: Story = {
  render: () => <Drawer />,
};
/**
 * Examples with state
 */
const DrawerWithState = ({ appear }: DrawerProps) => {
  const [open, setOpen] = useState(false);
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
        appear={appear}
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
  render: () => <DrawerWithState appear="fromLeft" />,
};

export const FromRight: Story = {
  render: () => <DrawerWithState appear="fromRight" />,
};

export const FromAbove: Story = {
  render: () => <DrawerWithState appear="fromAbove" />,
};

export const FromBelow: Story = {
  render: () => <DrawerWithState appear="fromBelow" />,
};

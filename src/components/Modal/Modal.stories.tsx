import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Modal, { useModal } from "./Modal";

import React from "react";

type Story = StoryObj<typeof Modal>;

/**
 * Modal component
 */
export default {
  component: Modal,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export const Default: Story = {
  args: {},
  render: () => {
    const { ref, onOpen, onClose } = useModal();

    return (
      <div className="App">
        <button onClick={onOpen}>open modal</button>
        <Modal ref={ref} onClose={onClose}>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </Modal>
      </div>
    );
  },
};

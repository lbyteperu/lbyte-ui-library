// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

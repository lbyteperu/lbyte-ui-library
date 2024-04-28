// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
//import React from "react";
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
    placeholder: "testing",
    fontSize: "small",
    onClick: () => {},
    value: "test",
  },
};

//export const ManyItems: Story = {
//  render: (args) => (
//    <>
//      <TextInput {...args} />
//      <TextInput {...args} />
//      <TextInput {...args} />
//    </>
//  ),
//};

//export const Size: Story = {
//  render: (args) => (
//    <>
//      <TextInput {...args} />
//      <TextInput {...args} />
//      <TextInput {...args} />
//    </>
//  ),
//};

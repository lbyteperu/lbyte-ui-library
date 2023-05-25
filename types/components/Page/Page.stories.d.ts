/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import Page from "./Page";
type Story = StoryObj<typeof Page>;
/**
 * Page component
 */
declare const _default: {
    component: import("react").FC<{}>;
    decorators: import("@storybook/preview-api/dist/storybook-channel-mock-a19cd233").M[];
    tags: string[];
    title: string;
};
export default _default;
export declare const LoggedOut: Story;
export declare const LoggedIn: Story;

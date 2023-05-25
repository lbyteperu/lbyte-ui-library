/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import Header from "./Header";
type Story = StoryObj<typeof Header>;
/**
 * Button component
 */
declare const _default: {
    component: ({ user, onLogin, onLogout, onCreateAccount }: import("./Header").HeaderProps) => import("react").JSX.Element;
    decorators: import("@storybook/preview-api/dist/storybook-channel-mock-a19cd233").M[];
    tags: string[];
    title: string;
};
export default _default;
export declare const Basic: Story;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;

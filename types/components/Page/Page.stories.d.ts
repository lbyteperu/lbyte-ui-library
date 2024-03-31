import type { StoryObj } from "@storybook/react";
import Page from "./Page";
type Story = StoryObj<typeof Page>;
/**
 * Page component
 */
declare const _default: {
    component: import("react").FC<{}>;
    decorators: _storybook_preview_api_dist_addons.MakeDecoratorResult[];
    tags: string[];
    title: string;
};
export default _default;
export declare const LoggedOut: Story;
export declare const LoggedIn: Story;

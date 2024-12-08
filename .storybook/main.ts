import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
};
export default config;

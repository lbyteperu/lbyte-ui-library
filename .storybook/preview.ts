import { Decorator } from "@storybook/react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import { decorateWithContrastMode } from './decorators/contrast-mode'
import './styles/preview-setup.css'

export const decorators = [
  decorateWithContrastMode,
 ]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

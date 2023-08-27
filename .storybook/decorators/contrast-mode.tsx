import { Decorator } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import React, { useEffect } from "react";

// Add a custom decorator that makes the `storybook-dark-mode` addon manipulate
// the <html> tag's `data-high-contrast` attribute. This mimics the behavior of
// the Bridge application.
// See: https://github.com/hipstersmoothie/storybook-dark-mode/issues/168#issuecomment-970757299
export const decorateWithContrastMode: Decorator = (Story) => {
  const isDarkMode = useDarkMode();
  console.log({ isDarkMode });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-high-contrast", "");
    } else {
      document.documentElement.removeAttribute("data-high-contrast");
    }
  }, [isDarkMode]);

  return <Story />;
};

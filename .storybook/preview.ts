import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#212121" }],
    },
  },

  tags: ["autodocs"]
};

export default preview;

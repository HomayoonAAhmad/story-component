import type { Preview } from "@storybook/react";
import "../gcui-main/styles/tailwind/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  tags: ["autodocs", "autodocs", "autodocs", "autodocs", "autodocs"],
};

// Apply the body styles
if (typeof document !== "undefined") {
  document.body.classList.add("bg-slate-800", "text-slate-100");
}

export default preview;

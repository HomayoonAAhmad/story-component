import type { Preview } from "@storybook/react";
import "../gcui-main/styles/tailwind/globals.css";
import { create } from "@storybook/theming";

const customTheme = create({
  base: "dark", // Use 'dark' as the base to align with the slate theme
  appBg: "#1e293b", // slate-800 background
  appContentBg: "#1e293b", // Content background matching slate-800
  textColor: "#f1f5f9", // slate-100 text color
  barBg: "#1e293b", // Toolbar background
  barTextColor: "#f1f5f9", // Toolbar text color
  barSelectedColor: "#94a3b8", // Optional: slate-400 for selected tab color
  brandTitle: "My Custom Storybook",
  brandUrl: "https://example.com",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    docs: {
      theme: customTheme, // Apply custom theme to DocsPage
    },
  },
  tags: ["autodocs", "autodocs", "autodocs", "autodocs", "autodocs", "autodocs"],
};

if (typeof document !== "undefined") {
  document.body.setAttribute("dir", "rtl");
  document.body.classList.add("bg-slate-800", "text-slate-100");
}

export default preview;

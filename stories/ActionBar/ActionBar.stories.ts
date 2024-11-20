// ActionBar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ActionBar from "./ActionBar";

const meta: Meta<typeof ActionBar> = {
  title: "Components/ActionBar",
  component: ActionBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Navigation action bar component that provides top-level navigation with active state indicators.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPath: {
      control: "text",
      description:
        "Current active path for highlighting the active navigation item",
    },
    onNavigate: {
      action: "navigated",
      description:
        "Callback function triggered when a navigation item is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionBar>;

// Default state
export const Default: Story = {
  args: {
    currentPath: "/dashboard",
  },
};

// Active Invoices Tab
export const InvoicesActive: Story = {
  args: {
    currentPath: "/dashboard/invoices",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the action bar with the Invoices tab as active.",
      },
    },
  },
};

// Active Settings Tab
export const SettingsActive: Story = {
  args: {
    currentPath: "/dashboard/settings",
  },
};

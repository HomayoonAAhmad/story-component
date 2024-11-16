// components/Block/Block.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Block from "./Blocks";

const meta = {
  title: "Components/Block",
  component: Block.Dark,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    particular: {
      control: "boolean",
      description: "Adds special styling and decorative elements",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    children: {
      control: "text",
      description: "Content to display inside the block",
    },
  },
} satisfies Meta<typeof Block.Dark>;

export default meta;
type Story = StoryObj<typeof meta>;

// Dark Block Stories
export const DarkBlock: Story = {
  args: {
    children: "Dark Block Content",
  },
};

export const DarkBlockParticular: Story = {
  args: {
    children: "Dark Block with Particular Styling",
  },
};

// Gradient Block Stories
export const GradientBlock: Story = {
  render: (args) => <Block.Gradient {...args} />,
  args: {
    children: "Gradient Block Content",
    particular: false,
  },
};

export const GradientBlockParticular: Story = {
  render: (args) => <Block.Gradient {...args} />,
  args: {
    children: "Gradient Block with Particular Styling",
    particular: true,
    className: "text-white",
  },
};

// Bordered Block Stories
export const BorderedBlock: Story = {
  render: (args) => <Block.Bordered {...args} />,
  args: {
    children: "Bordered Block Content",
    particular: false,
  },
};

export const BorderedBlockParticular: Story = {
  render: (args) => <Block.Bordered {...args} />,
  args: {
    children: "Bordered Block with Particular Styling",
    particular: true,
  },
};

// Example with custom className
export const CustomStyledBlock: Story = {
  render: (args) => <Block.Dark {...args} />,
  args: {
    children: "Custom Styled Block",
    className: "p-8 bg-opacity-75",
    particular: false,
  },
};

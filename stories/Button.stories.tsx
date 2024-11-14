import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ComponentProps } from "./Button";
import ColorTypes from "../gcui-main/functions/ColorTypes";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          ColorTypes.default,
          ColorTypes.primary,
          ColorTypes.danger,
          ColorTypes.success,
          ColorTypes.dark,
          "custom",
        ],
      },
    },
    tag: {
      control: { type: "select", options: ["button", "a"] },
    },
    particular: { control: "boolean" },
    href: { control: "text" },
    icon: { control: "text" },
  },
} as Meta;

const Template: StoryFn<ComponentProps> = (
  args: React.JSX.IntrinsicAttributes & ComponentProps
) => <Button {...args}>Click Me</Button>;

// Default Button
export const Default = Template.bind({});
Default.args = {
  color: ColorTypes.default,
};

// Primary Button
export const Primary = Template.bind({});
Primary.args = {
  color: ColorTypes.primary,
};

// Danger Button
export const Danger = Template.bind({});
Danger.args = {
  color: ColorTypes.danger,
};

// Success Button
export const Success = Template.bind({});
Success.args = {
  color: ColorTypes.success,
};

// Dark Button
export const Dark = Template.bind({});
Dark.args = {
  color: ColorTypes.dark,
};

// Button with Icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  color: ColorTypes.primary,
  icon: (
    <span role="img" aria-label="icon">
      🚀
    </span>
  ),
};

// Particular Button
export const Particular = Template.bind({});
Particular.args = {
  color: ColorTypes.primary,
  particular: true,
};

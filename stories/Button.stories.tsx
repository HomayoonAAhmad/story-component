import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button"; // Update the path as needed
import ColorTypes from "../gcui-main/functions/ColorTypes";
import { ComponentProps } from "./Button"; // Reuse the existing types

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tag: { control: "text" },
    particular: { control: "boolean" },
    icon: { control: "text" },
    color: {
      control: { type: "select" },
      options: [
        ColorTypes.default,
        ColorTypes.primary,
        ColorTypes.danger,
        ColorTypes.success,
        ColorTypes.dark,
      ],
    },
    href: { control: "text" },
    type: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ComponentProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  color: ColorTypes.default,
  loading: false,
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  color: ColorTypes.primary,
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger Button",
  color: ColorTypes.danger,
};

export const Success = Template.bind({});
Success.args = {
  children: "Success Button",
  color: ColorTypes.success,
};

export const Dark = Template.bind({});
Dark.args = {
  children: "Dark Button",
  color: ColorTypes.dark,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Loading Button",
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Button with Icon",
  icon: <span>🚀</span>,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Link Button",
  href: "https://example.com",
  tag: "a",
};

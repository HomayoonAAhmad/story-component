import { Meta, StoryFn } from "@storybook/react";
import TextArea, { inputProps } from "./TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,

  argTypes: {
    ltr: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    className: { control: "text" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} as Meta<typeof TextArea>;

const text: StoryFn<inputProps> = (args) => <TextArea {...args} />;

export const Default = text.bind({});
Default.args = {
  placeholder: "Type here...",
  className: "",
  ltr: false,
  loading: false,
  disabled: false,
};

// Story with an icon
export const WithIcon = text.bind({});
WithIcon.args = {
  placeholder: "Search...",
  icon: <span className="text-slate-400">@</span>,
  ltr: false,
  loading: false,
  disabled: false,
};

// Story for loading state
export const Loading = text.bind({});
Loading.args = {
  placeholder: "Loading...",
  loading: true,
};

// Story for disabled state
export const Disabled = text.bind({});
Disabled.args = {
  placeholder: "Disabled...",
  disabled: true,
};

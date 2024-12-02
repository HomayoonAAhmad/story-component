// AvatarSelector.stories.jsx
import React from "react";
import AvatarSelector from "@/stories/AvatarSelector/AvatarSelector";

export default {
  title: "Components/AvatarSelector",
  component: AvatarSelector,
  argTypes: {
    w: {
      control: { type: "number" },
      defaultValue: 1080,
    },
    h: {
      control: { type: "number" },
      defaultValue: 1080,
    },
    onChange: { action: "onChange" },
    realsize: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

const avatarSelector = (args) => (
  <div className="flex justify-center">
    <AvatarSelector {...args} />
  </div>
);
export const Default = avatarSelector.bind({});
Default.args = {
  w: 1080,
  h: 1080,
  realsize: false,
};

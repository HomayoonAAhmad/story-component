import React from "react";
import ActionBarDesktop from "@/gcui-main/ActionBarDesktop";

export default {
  title: "Components/ActionBarDesktop",
  component: ActionBarDesktop,
};

const actionbardesktop = (args) => <ActionBarDesktop {...args} />;

export const Default = actionbardesktop.bind({});
Default.args = {};

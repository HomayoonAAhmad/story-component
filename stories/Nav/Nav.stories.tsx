import React from "react";
import Nav from "./Nav"; // Adjust the path to where your Nav component is located

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {
    isMobile: {
      control: "boolean",
      description: "Toggle between mobile and desktop views",
    },
  },
};

// Template for the Nav component
const Template = (args) => {
  // Override the isMobile logic for testing
  global.isMobile = args.isMobile; // Mock the isMobile global variable
  return <Nav {...args} />;
};

export const DesktopView = Template.bind({});
DesktopView.args = {
  Language: "fa",

  isMobile: false,
};

export const MobileView = Template.bind({});
MobileView.args = {
  Language: "fa",
  isMobile: true,
};

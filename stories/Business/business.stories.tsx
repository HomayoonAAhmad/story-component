import React from "react";
import Business from "@/gcui-main/cards/Business";

export default {
  title: "Cards/Business",
  component: Business,
  argTypes: {
    editable: { control: "boolean" },
    business: {
      control: "object",
      defaultValue: {
        id: "123",
        name: "نوآوران فناوری",

        website: "https://techinnovators.com",
        _status: 3, // Under review
      },
    },
  },
};

const Template = (args) => <Business {...args} />;

export const Default = Template.bind({});
Default.args = {
  business: {
    id: "123",
    name: "نوآوران فناوری",

    website: "https://techinnovators.com",
    _status: 3, // Under review
  },
  editable: true,
};

export const NotEditable = Template.bind({});
NotEditable.args = {
  business: {
    id: "124",
    name: "فناوری‌های آینده",

    website: "https://futuretech.com",
    _status: 2, // Cog spinning
  },
  editable: false,
};

export const UnderReview = Template.bind({});
UnderReview.args = {
  business: {
    id: "125",
    name: "آزمایشگاه‌های خلاق",

    website: "https://creativelabs.com",
    _status: 3, // Under review
  },
  editable: true,
};

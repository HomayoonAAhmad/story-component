import { Meta, StoryFn } from "@storybook/react";
import Empty from "./Empty";

export default {
  title: "Components/Empty",
  component: Empty,
  argTypes: {
    frequency: { control: "number" },
    amplitude: { control: "number" },
    message: { control: "text" },
  },
} as Meta<typeof Empty>;

const empty: StoryFn = (args) => (
  <Empty amplitude={undefined} frequency={undefined} {...args} />
);

export const Default = empty.bind({});
Default.args = {
  frequency: 20,
  amplitude: 1.2,
  message: "No data available",
};

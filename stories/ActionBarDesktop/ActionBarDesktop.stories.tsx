import { Meta, StoryObj } from "@storybook/react";
import ActionBarDesktop from "./ActionBarDesktop";

const meta: Meta<typeof ActionBarDesktop> = {
  title: "Components/ActionBarDesktop",
  component: ActionBarDesktop,
};

export default meta;

type Story = StoryObj<typeof ActionBarDesktop>;

export const Default: Story = {};

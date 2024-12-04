import React from "react";
import Confirm from "./Confirm";
import Button from "@/stories/Button/Button";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

export default {
  title: "Components/Confirm",
  component: Confirm,
  argTypes: {
    message: {
      control: "text",
      description: "Message to display in the confirmation dialog",
    },
    onConfirm: {
      action: "confirmed",
      description: "Callback triggered when the confirm button is clicked",
    },
    children: {
      control: "text",
      description: "Content to trigger the confirmation dialog",
    },
  },
};

const confirm = (args) => <Confirm {...args} />;

export const Default = confirm.bind({});
Default.args = {
  message: "Are you sure you want to continue?",
  onConfirm: () => alert("Confirmed!"),
  children: <Button color={ColorTypes.default}>Click Me</Button>,
};

export const CustomMessage = confirm.bind({});
CustomMessage.args = {
  message: "This action is irreversible. Proceed?",
  onConfirm: () => alert("Confirmed with custom message!"),
  children: <Button color={ColorTypes.primary}>Delete</Button>,
};

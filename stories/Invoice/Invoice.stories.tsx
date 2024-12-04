import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Invoice from "./Invoice";

interface InvoiceProps {
  invoice: {
    invoice_number: string;
    created_at: string;
    expired_at: string;
    total: number;
  };
}

export default {
  title: "Cards/Invoice",
  component: Invoice,
} as Meta;

const invoice: StoryFn<{ invoice: InvoiceProps["invoice"] }> = (args) => (
  <Invoice {...args} />
);

export const Default = invoice.bind({});
Default.args = {
  invoice: {
    invoice_number: "INV-123456",
    created_at: new Date().toISOString(),
    expired_at: new Date(
      new Date().getTime() + 5 * 24 * 60 * 60 * 1000
    ).toISOString(),
    total: 1500,
  },
};

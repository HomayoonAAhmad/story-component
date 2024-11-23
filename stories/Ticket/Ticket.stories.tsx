import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Ticket from "./Ticket";

export default {
  title: "Cards/Ticket",
  component: Ticket,
} as Meta<typeof Ticket>;

const Template: StoryFn<typeof Ticket> = (args) => <Ticket {...args} />;

export const LowPriority = Template.bind({});
LowPriority.args = {
  ticket: {
    id: "1",
    title: "General Inquiry",
    priority: "low",
    messages_count: 3,
    business: { name: "Retail Inc." },
    _status: 0,
    created_at: new Date().toISOString(),
  },
};

export const MediumPriority = Template.bind({});
MediumPriority.args = {
  ticket: {
    id: "2",
    title: "Payment Issue",
    priority: "medium",
    messages_count: 7,
    business: { name: "E-Commerce Co." },
    _status: 1,
    created_at: new Date().toISOString(),
  },
};

export const HighPriority = Template.bind({});
HighPriority.args = {
  ticket: {
    id: "3",
    title: "Shipping Delay",
    priority: "high",
    messages_count: 12,
    business: { name: "Logistics Ltd." },
    _status: 2,
    created_at: new Date().toISOString(),
  },
};

export const UrgentPriority = Template.bind({});
UrgentPriority.args = {
  ticket: {
    id: "4",
    title: "System Outage",
    priority: "urgent",
    messages_count: 20,
    business: { name: "Cloud Services" },
    _status: 3,
    created_at: new Date().toISOString(),
  },
};

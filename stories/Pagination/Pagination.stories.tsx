import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Pagination, { PaginationProps } from "@/gcui-main/Pagination"; // Adjust path as needed

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: "number" },
      defaultValue: 1,
      description: "The current active page.",
    },
    totalPages: {
      control: { type: "number" },
      defaultValue: 10,
      description: "The total number of pages.",
    },
    onPageChange: {
      action: "pageChanged",
      description: "Callback for page changes.",
    },
  },
} as Meta;

const Template: StoryFn<PaginationProps> = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page); // Trigger Storybook action
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
};

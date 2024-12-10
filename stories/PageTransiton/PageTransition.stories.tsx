import { Meta, StoryFn } from "@storybook/react";
import PageTransition from "./PageTransition";
import { useState } from "react";
import Pagination, { PaginationProps } from "../Pagination/Pagination";
import { H1 } from "../Typo/Typo";

export default {
  title: "Components/PageTransition",
  component: PageTransition,
} as Meta;

const PageTransitionStory: StoryFn<PaginationProps> = (
  args: PaginationProps
) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  const [showTransition, setShowTransition] = useState(false);

  const handlePageChange = (page: number) => {
    setShowTransition(true);

    setTimeout(() => {
      setCurrentPage(page);
      setShowTransition(false);
    }, 1000);
  };

  return (
    <div dir="ltr" className="relative">
      {showTransition && <PageTransition />}

      <div className="text-center py-4">
        <H1 className="text-xl font-bold">Current Page: {currentPage}</H1>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={args.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export const Default = PageTransitionStory.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
};

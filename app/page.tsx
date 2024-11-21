"use client";

import React, { useState } from "react";
import Pagination from "@/gcui-main/Pagination"; // Adjust the path to your Pagination component

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); // Track the current page
  const totalPages = 10; // Define total number of pages (example value)

  // Handler for page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Changed to page ${page}`);
    // You can add additional logic here (e.g., fetching data for the selected page)
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-2xl font-bold mb-6">
        Pagination Example
      </h1>
      {/* Render the Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className="mt-8 text-center">
        <p>Currently viewing page {currentPage}</p>
      </div>
    </div>
  );
};

export default Page;

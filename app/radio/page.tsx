"use client";

import React, { useState } from "react";
import Confirm from "@/stories/Confirm/Confirm";
import Button from "@/stories/Button/Button"; // Adjust the import path as needed

export default function ConfirmPage() {
  const [deletedItem, setDeletedItem] = useState<string | null>(null);

  const handleDelete = (item: string) => {
    // Simulating an action that requires confirmation
    console.log(`Deleting ${item}`);
    setDeletedItem(item);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Confirm Action Example</h1>

      <div className="space-y-4">
        {/* Example 1: Deleting a user */}
        <Confirm
          message="Are you sure you want to delete this user?"
          onConfirm={() => handleDelete("user")}
        >
          <Button color="danger">Delete User</Button>
        </Confirm>

        {/* Example 2: Logging out */}
        <Confirm
          message="Are you sure you want to log out?"
          onConfirm={() => {
            // Handle logout logic
            console.log("Logging out");
          }}
        >
          <Button color="default">Logout</Button>
        </Confirm>

        {/* Example 3: Cancelling a subscription */}
        <Confirm
          message="Are you sure you want to cancel your subscription? This cannot be undone."
          onConfirm={() => {
            // Handle subscription cancellation
            console.log("Cancelling subscription");
          }}
        >
          <Button color="danger">Cancel Subscription</Button>
        </Confirm>

        {deletedItem && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
            Successfully deleted {deletedItem}!
          </div>
        )}
      </div>
    </div>
  );
}

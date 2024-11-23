"use client";

import React from "react";
import Toast from "@/gcui-main/Toast";
import { ToastStores } from "../gcui-main/stores/ToastStore"; // Adjust the path as needed
import ColorTypes from "@/gcui-main/functions/ColorTypes"; // Adjust the path as needed

export default function Page() {
  const triggerToast = () => {
    ToastStores.setToast({
      message: "This is a success message!",
      title: "Success",
      type: ColorTypes.success,
      icon: "check-circle",
    });
  };

  const triggerErrorToast = () => {
    ToastStores.setToast({
      message: "This is an error message!",
      title: "Error",
      type: ColorTypes.danger,
      icon: "exclamation-circle",
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Toast Demo</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={triggerToast}
      >
        Show Success Toast
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={triggerErrorToast}
      >
        Show Error Toast
      </button>

      {/* Include the Toast component */}
      <Toast />
    </div>
  );
}

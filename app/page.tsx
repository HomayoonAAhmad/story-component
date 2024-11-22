import React from "react";
import AlertMessage from "@/stories/AlertMessage/AlertMessage";

const Page = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AlertMessage
        title="System Update"
        short_description="We are performing scheduled maintenance."
        meta={JSON.stringify({
          menu: [
            {
              url: "https://example.com/updates",
              icon: "exclamation-circle",
              btn_title: "View Updates",
            },
          ],
        })}
      />
    </div>
  );
};

export default Page;

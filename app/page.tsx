"use client";

import Quote from "@/gcui-main/cards/Quote";

const contentData = {
  avatar: null,
  title: "Inspiring Title",
  short_description: "A short and impactful description.",
  description: "<p>This is a detailed description with <b>HTML</b>.</p>",
};

export default function Page() {
  return (
    <div dir="rtl" className="flex mx-auto mt-10 justify-center items-center">
      {/* <BlogPost blog={null} compact={false} /> */}
      <Quote data={contentData} />
      {/* <Confirm message={undefined} onConfirm={undefined} children={undefined} /> */}
      {/* <Share /> */}
      {/* <Radio name={"undefined"} children={"aausdhvasd"} /> */}
      {/* <AvatarSelector /> */}
    </div>
  );
}

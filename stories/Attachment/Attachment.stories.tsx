import React, { useState } from "react";
import Attachment from "@/gcui-main/Attachment";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import Blocks from "../Blocks/Blocks";

export default {
  title: "Components/Attachment",
  component: Attachment,
  argTypes: {
    inputName: { control: "text" },
    loading: { control: "boolean" },
  },
};

const attachment = (args) => {
  const [files, setFiles] = useState([]);
  return (
    <Attachment
      {...args}
      setFilesInForm={(uploadedFiles) => setFiles(uploadedFiles)}
    >
      <Blocks.Bordered particular={"particular"} className="mb-5">
        Drag and drop files here or click the clip icon below to upload
      </Blocks.Bordered>
    </Attachment>
  );
};

export const Default = attachment.bind({});
Default.args = {
  inputName: "defaultAttachment",
  loading: false,
};

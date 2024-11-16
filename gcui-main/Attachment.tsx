import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

interface AttachmentProps {
  inputName?: string | "";
  setFilesInForm: (files: File[]) => void;
  children?: React.ReactNode;
  loading?: boolean;
}

const Attachment: React.FC<AttachmentProps> = ({
  inputName,
  setFilesInForm,
  children,
  loading,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setFilesInForm(files);
  }, [files, setFilesInForm]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []).filter(
      (newFile) => !files.some((file) => file.name === newFile.name)
    );
    setFiles([...files, ...newFiles]);
    e.target.value = ""; // Reset file input
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="attachment-container w-full">
      <input
        type="file"
        id={`file-input-${inputName}`}
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
      />
      <div className="relative">
        {children}
        <div className="absolute left-2 bottom-2 flex gap-2">
          <Button
            type="button"
            onClick={() =>
              document.getElementById(`file-input-${inputName}`).click()
            }
          >
            <span className="fa fa-paperclip" />
          </Button>
          <Button type="submit" color={ColorTypes.primary} loading={loading}>
            <span className="far fa-paper-plane-top rotate-180" />
          </Button>
        </div>
      </div>
      <div className="attachment-files flex gap-2 flex-wrap pt-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="attachment-file-item flex items-center gap-2 bg-indigo-800 p-2 text-xs rounded"
          >
            <span>{file.name}</span>
            <span
              className="fa fa-times cursor-pointer"
              onClick={() => removeFile(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachment;

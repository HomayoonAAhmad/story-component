"use client";
import Button from "../Button/Button";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

interface CallProps {
  phone: string; // Specify the expected type of the phone prop
}

const Call: React.FC<CallProps> = ({ phone }) => {
  return (
    <Button
      color={ColorTypes.default}
      tag={"a"}
      href={`tel:${phone}`}
      icon={<span className={"far fa-phone"} />}
    >
      {phone}
    </Button>
  );
};
export default Call;

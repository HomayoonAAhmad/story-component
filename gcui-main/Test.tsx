"use client";
import Button from "@/stories/Button/Button";
import { Auth_logout } from "./functions/Auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const checkLoginStatus = async () => {
  let status = await Auth_logout();
  //if done redirect to login page
  if (status) {
  }
};
const Test = () => {
  let router = useRouter();

  return (
    <div>
      <h1>Test</h1>
      <Button
        onClick={() => {
          checkLoginStatus();
        }}
      >
        Start
      </Button>
    </div>
  );
};

export default Test;

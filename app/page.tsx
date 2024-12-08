"use client";

import Confirm from "@/stories/Confirm/Confirm";
import Map from "@/gcui-main/Map";
import Nav from "@/stories/Nav/Nav";
import SearchForm from "@/stories/SearchFrom/SearchForm";
import Basket from "@/stories/Basket/Basket";
import Empty from "@/stories/Empty/Empty";
import Login from "@/stories/Login/Login";
import NotificationBox from "@/stories/NotificationBox/NotificationBox";
import ActionBarDesktop from "@/stories/ActionBarDesktop/ActionBarDesktop";
import NavStories from "@/stories/Nav/Nav.stories";

export default function Page() {
  return (
    <div
      dir="rtl"
      className="relative flex mx-auto mt-10 justify-center items-center"
    >
      <ActionBarDesktop />
      {/* <NotificationBox /> */}
      {/* <Login /> */}
      {/* <Nav Language={""} menu={undefined} /> 
       <SearchForm /> */}
      {/* <Confirm message={"undefined"} onConfirm={"/"} children={"undefined"} /> */}
    </div>
  );
}

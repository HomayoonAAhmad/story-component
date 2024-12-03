import Basket from "@/gcui-main/Basket";
import Empty from "@/stories/Empty/Empty";
import Login from "@/gcui-main/forms/Login";
import NotificationBox from "@/gcui-main/NotificationBox";
import TransitionLink from "@/gcui-main/TransitionLink";
import Nav from "@/stories/Nav/Nav";

export default function Page() {
  return (
    <div dir="ltr" className="flex mx-auto mt-10 justify-center items-center">
      {/* <Nav Language={"fa"} menu={undefined} /> */}
      <Empty amplitude={30} frequency={1.5} message={"emptyBasket"} />
    </div>
  );
}

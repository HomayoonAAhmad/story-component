import ActionBarBasket from "@/gcui-main/ActionBarBasket";
import AvatarBox from "@/gcui-main/AvatarBox";
import AvatarSelector from "@/gcui-main/AvatarSelector";
import Basket from "@/gcui-main/Basket";
import BlogPost from "@/gcui-main/cards/BlogPost";
import Quote from "@/gcui-main/cards/Quote";
import Confirm from "@/gcui-main/Confirm";
import Image from "@/gcui-main/Image";
import ImageSlider from "@/gcui-main/ImageSlider";
import Loader from "@/gcui-main/Loader";
import MenuItem from "@/gcui-main/MenuItem";
import Nav from "@/gcui-main/Nav";
import Plans from "@/gcui-main/Plans";
import SearchForm from "@/gcui-main/SearchForm";
import Share from "@/gcui-main/Share";
import SideMenu from "@/gcui-main/SideMenu";

{
  /*const contentData = {
  avatar: null,
  title: "Inspiring Title",
  short_description: "A short and impactful description.",
  description: "<p>This is a detailed description with <b>HTML</b>.</p>",
};*/
}

export default function Page() {
  return (
    <div dir="rtl" className="flex mx-auto mt-10 justify-center items-center">
      {/* <Confirm message={undefined} onConfirm={undefined} children={undefined} /> */}
      {/* <Nav Language={undefined} menu={undefined} /> */}
      {/* <AvatarBox /> */}
      {/* <Basket /> */}
      <SearchForm />
    </div>
  );
}

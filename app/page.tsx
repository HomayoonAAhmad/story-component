import ActionBar from "@/gcui-main/ActionBar";
import Business from "@/gcui-main/cards/Business";
import Nav from "@/gcui-main/Nav";
import Service from "@/gcui-main/Service";
import SideMenu from "@/gcui-main/SideMenu";
import SideMenuPeer from "@/gcui-main/SideMenuPeer";
import Ticket from "@/stories/Ticket/Ticket";

export default function Page() {
  return (
    <div dir="rtl">
      <Business
        business={{
          id: "123",
          name: "Tech Innovators Inc.",

          website: "https://techinnovators.com",
          _status: 3, // Under review
        }}
        editable={true}
      />
    </div>
  );
}

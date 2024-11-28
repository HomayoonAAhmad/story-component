"use client";

import { usePathname } from "next/navigation";
import Badge from "@/stories/Badge/Badge";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import Language from "@/gcui-main/locales/Language";
import ActionBarBasket from "./ActionBarBasket";
import { useEffect, useState, useRef /*useSyncExternalStore*/ } from "react";
// import { AuthStores } from "./stores/AuthStore";
import Blocks from "@/stories/Blocks/Blocks";

const ActionBar = () => {
  const language = Language("common");
  const currentPath = usePathname();
  //const [authStatus, setAuthStatus] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  // const auth = useSyncExternalStore(
  //   AuthStores.subscribe,
  //   AuthStores.getSnapshot,
  //   AuthStores.getServerSnapshot
  // );

  // useEffect(() => {
  //   setAuthStatus(auth);
  // }, [auth]);

  const handleToggleNotif = () => {
    setIsNotifOpen((prev) => !prev);
  };

  // Handle click outside to close the notification submenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setIsNotifOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const items = [
    {
      path: "/dashboard/businesses",
      icon: "fa fa-briefcase",
      label: language.businesses,
    },
    {
      path: "/dashboard/invoices",
      icon: "fa fa-credit-card",
      label: language.invoices,
    },
    {
      path: "/dashboard/invoices",
      icon: "fa fa-bell",
      label: language.events,
      hasBadge: true,
      badgeCount: 2,
    },
    {
      path: "/dashboard/support",
      icon: "fa fa-headset",
      label: language.support,
    },
  ];

  // if (authStatus) {
  return (
    <div className="fixed bottom-2 left-4 rounded-2xl w-[calc(100dvw-2rem)] bg-violet-900 bg-opacity-20 backdrop-blur-3xl h-16 text-slate-300 z-40">
      <ul className="flex justify-stretch">
        {items.map((item, index) => (
          <li
            key={index}
            className="w-1/5 border-l border-slate-300 border-opacity-10 relative"
            ref={item.icon === "fa fa-bell" ? notifRef : undefined} // Assign ref to the notification icon
          >
            <a
              href={item.path}
              className={`flex gap-2 flex-col items-center justify-center h-16 ${
                currentPath === item.path ? "border-b-4 border-violet-400" : ""
              }`}
              onClick={
                item.icon === "fa fa-bell"
                  ? (e) => {
                      e.preventDefault();
                      handleToggleNotif();
                    }
                  : undefined
              }
            >
              <span
                className={`${item.icon} ${
                  currentPath === item.path
                    ? "text-violet-400"
                    : "text-slate-400"
                }`}
              ></span>
              <span className="text-xs">{item.label}</span>
            </a>
            {item.hasBadge && (
              <div className="absolute -top-2 left-1/2">
                <Badge color={ColorTypes.danger}>{item.badgeCount}</Badge>
              </div>
            )}
            {/* Notification submenu */}
            {isNotifOpen && item.icon === "fa fa-bell" && (
              <div
                className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 shadow-lg rounded-lg transition-transform duration-500 ease-out ${
                  isNotifOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <div className="bg-slate-800 rounded-2xl p-4">
                  <div className="p-4 border-b">
                    <p className="font-semibold text-slate-800">
                      Notifications
                    </p>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
        <li className="w-1/5 border-l border-slate-300 border-opacity-10 relative">
          <ActionBarBasket />
        </li>
      </ul>
    </div>
  );
  // } else {
  //   return <></>;
  // }
};

export default ActionBar;

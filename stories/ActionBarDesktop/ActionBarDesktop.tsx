"use client";
import { useSyncExternalStore } from "react";
import { AuthStores } from "@/gcui-main/stores/AuthStore";
import MenuBasketButton from "../MenuBasketButton/MenuBasketButton";
import Button from "../Button/Button";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import Badge from "../Badge/Badge";
import Language from "@/gcui-main/locales/Language";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NotificationBox from "../NotificationBox/NotificationBox";
import { getNotificationCount } from "@/gcui-main/models/NotificationModel";

const ActionBarDesktop = () => {
  const [loading, setLoading] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);
  // const authStatus = useSyncExternalStore(
  //   AuthStores.subscribe,
  //   AuthStores.getSnapshot,
  //   AuthStores.getServerSnapshot
  // );
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close notification submenu when full URL changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    const currentUrl = window.location.href; // Full URL including query parameters
    const observer = new MutationObserver(() => {
      if (window.location.href !== currentUrl) {
        handleRouteChange();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // const fetchNotificationCount = async () => {
  //   setLoading(true);
  //   try {
  //     const dbNotif = await getNotificationCount();
  //     if (dbNotif !== null) {
  //       setNotificationCount(dbNotif);
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch notification count:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // fetchNotificationCount();
    // // Set an interval to fetch notifications every 3 minutes
    // const intervalId = setInterval(() => {
    //   fetchNotificationCount();
    // }, 180000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // if (!isClient) {
  //   return null;
  // }

  // const menuRef = [""];
  // const toggleMenu = ["/"];
  // const notificationCount = 2;
  // const [isOpen] = useState(false);

  return (
    <div className="flex gap-2">
      {
        <div className="flex gap-2">
          <MenuBasketButton />
          <div className="relative" ref={menuRef}>
            <Button
              color={ColorTypes.default}
              tag="button"
              onClick={toggleMenu}
              icon={<span className="far fa-bell" />}
            />
            {notificationCount > 0 && (
              <div
                onClick={toggleMenu}
                className="absolute cursor-pointer -top-2 left-1/2"
              >
                <Badge color={ColorTypes.primary}>{notificationCount}</Badge>
              </div>
            )}
            {/* Animated Notification Box */}
            <div
              className={`absolute left-0 top-12 w-64 shadow-lg rounded-lg bg-slate-800 bg-opacity-100 transition-all duration-500 ease-out overflow-hidden transform ${
                isOpen
                  ? "max-h-96 opacity-100 scale-100 translate-y-0"
                  : "max-h-0 opacity-0 scale-95 -translate-y-4"
              }`}
            >
              <NotificationBox isOpen={isOpen} />
            </div>
          </div>
          <div>
            <Button
              color={ColorTypes.default}
              onClick={() => {
                console.log("/management");
              }}
              icon={<span className="far fa-user-gear" />}
            />
          </div>
        </div>
      }

      {/* {!authStatus && (
        <div>
          <Button color={ColorTypes.primary} tag="a" href="/auth">
            <span>{Language().login_to_panel}</span>
            <span className="far fa-users ms-2" />
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default ActionBarDesktop;

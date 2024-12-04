"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const PageTransition = () => {
  const pathname = usePathname();
  useEffect(() => {
    try {
      document.querySelector(".page-transition").classList.add("bye");
      setTimeout(() => {
        document
          .querySelector(".page-transition")
          .classList.replace("bye", "bying");
      }, 100);
      setTimeout(() => {
        document.querySelector(".page-transition").classList.remove("bying");
        document.querySelector(".page-transition").classList.remove("bye");
      }, 600);
    } catch (e) {
      console.log(e);
    }
  }, [pathname]);

  return (
    <div className={"page-transition bye group"}>
      <div
        className={
          "absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20"
        }
      >
        <div className={`relative  rounded-full particular  w-56 h-56  `}>
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div
          className={
            " w-40 h-40 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
          }
        >
          <div
            className={
              "group-[.bying]:animate-bounceToBottom animate-bounceFromBottom animation-fill-forwards"
            }
          >
            <div className={"animate-dampingSwing"}>
              <div>
                <img src={"/assets/images/gilace-logo.svg"} alt={"earth"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "group-[.bying]:opacity-0 group-[.bye]:opacity-100 opacity-0 transition-all duration-500 top-0 left-2 w-full h-full z-10 bg-slate-950 bg-opacity-10 backdrop-blur-3xl"
        }
      ></div>
    </div>
  );
};
export default PageTransition;

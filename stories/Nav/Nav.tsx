import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";
import SearchForm from "../SearchFrom/SearchForm";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import Image from "../Imagee/Image";
import NavbarBars from "../NavbarBars/NavbarBars";
import ActionBarDesktop from "../ActionBarDesktop/ActionBarDesktop";
import Link from "next/link";

// Development-only cache setting
// export const fetchCache = "force-no-store";

// Toggle isMobile for development
let isMobile = false; // Change this to true or false for testing

type authBlockProps = {
  [Language: string]: any;
};

const AuthBlock = () => {
  if (isMobile) {
    return (
      <div className={"flex gap-2"}>
        <div>
          <Button
            color={ColorTypes.default}
            tag={"a"}
            href={"/management"}
            icon={<span className={"far fa-user-gear"} />}
          />
        </div>
      </div>
    );
  }
  return <ActionBarDesktop />;
};

const Nav = ({ Language, menu }) => {
  let menuItems = [];
  let activeId = 1;

  // Sample menu logic for testing
  // try {
  //   let data = JSON.parse(menu.meta);
  //   menuItems = data.menu;
  // } catch (e) {
  //   console.log(e);
  // }

  if (isMobile) {
    return (
      <div className={"container mx-auto z-20 sticky top-0"}>
        <div className={"flex h-16 w-screen"}>
          <div className={"flex justify-between items-center w-full px-2"}>
            <ul className={"flex gap-2 items-center"}>
              <li>
                <NavbarBars />
              </li>
              <li>
                <h1 className={"relative overflow-hidden"}>
                  <a href={"/"} className={"relative h-12 w-12 block"}>
                    <Image
                      type={"contain"}
                      src={"/assets/images/gilace-logo.svg"}
                      alt={"gilace logo"}
                    />
                    <span className={"absolute top-40"}>گیلاس</span>
                  </a>
                </h1>
              </li>
            </ul>
            <ul className={"flex gap-2 items-center"}>
              <li>
                <AuthBlock Language={Language} />
              </li>
              <li className={"ms-2"}>
                <SearchForm />
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            "backdrop-blur-3xl v-mask w-full h-full absolute top-0 left-0 -z-10"
          }
        />
      </div>
    );
  }

  return (
    <div className={"container mx-auto z-20 sticky top-0"}>
      <nav className={"flex gap-3"}>
        <h1 className={"overflow-hidden h-20 w-20"}>
          <Link href={"/"} className={"relative h-20 w-auto"}>
            <Image
              type={"contain"}
              src={"/assets/images/gilace-logo.svg"}
              alt={"gilace logo"}
            />
            <span className={"absolute top-40"}>گیلاس</span>
          </Link>
        </h1>
        <div
          className={
            "flex justify-between h-16 w-full border-b border-slate-700 mt-2"
          }
        >
          <ul className={"flex items-center gap-2"}>
            {menuItems.map((item, index) => (
              <div key={item.id}>
                <MenuItem item={item} />
              </div>
            ))}
          </ul>
          <ul className={"flex items-center"}>
            <li>
              <AuthBlock Language={Language} />
            </li>
            <li className={"ms-2"}>
              <SearchForm />
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={
          "backdrop-blur-3xl v-mask w-full h-full absolute top-0 left-0 -z-10"
        }
      />
    </div>
  );
};

export default Nav;

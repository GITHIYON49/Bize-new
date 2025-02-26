import React from "react";
import { Link, useNavigate } from "react-router";
import { CircleUserRound } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { menus } from "../../data/MenuBar";
import { logo } from "../../assets/images";

const Navbar = () => {
  const navigation = useNavigate();
  function handleClick(route) {
    navigation(route);
  }

  const filteredMenus =
    window.innerWidth >= 768 ? menus.filter((menu) => !menu.singin) : menus;

  return (
    <>
      <header className="w-full h-28 md:h-32 lg:h-36 bg-white z-[999]">
        <nav className="w-[90%] md:w-[80%] h-full mx-auto flex justify-between items-center py-3">
          <div className="w-28 md:w-32 lg:w-36 h-auto">
            <Link to="/" className="outline-none">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover bg-transparent"
              />
            </Link>
          </div>
          <ul className="flex gap-8 capitalize z-[999]">
            {filteredMenus?.map((menu, i) => {
              return <DesktopMenu key={i} menu={menu} />;
            })}
          </ul>
          <div className="hidden md:flex items-center justify-center gap-2">
            <button
              className="capitalize px-5 py-2 rounded-3xl text-base text-tertiary  cursor-pointer outline-none flex gap-1 items-center justify-center"
              onClick={() => {
                handleClick("/login");
              }}
            >
              <CircleUserRound className="h-8 w-8" />
              <span className="text-lg font-semibold">login</span>
            </button>
            <button
              className="capitalize px-5 py-2 rounded-3xl text-base bg-secondary hover:bg-secondaryLight transform transition-all ease-in-out text-white cursor-pointer outline-none z-50"
              onClick={() => {
                handleClick("/registration");
              }}
            >
              register
            </button>
          </div>
          <div className="flex lg:hidden">
            <MobileMenu menus={menus} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

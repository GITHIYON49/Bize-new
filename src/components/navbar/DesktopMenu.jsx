import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);
  const { pathname } = useLocation();
  const hasSubMenu = menu?.subMenu?.length > 0;
  function toogleMouseHove() {
    setIsHover(!isHover);
  }

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  return (
    <>
      <motion.li
        className={`${pathname === menu.route && "bg-primary text-white"} ${
          menu.singin ? "hidden" : ""
        } rounded-lg hover:bg-primary hover:text-white transform transition-all ease-in-out duration-100 hidden lg:flex items-center justify-center gap-1 cursor-pointer group/link relative`}
        onHoverStart={toogleMouseHove}
        onHoverEnd={toogleMouseHove}
      >
        <Link className="outline-none px-5 py-2 block" to={menu.route}>
          {menu.name || menu.singin}
        </Link>
        {hasSubMenu && (
          <ChevronDown className="group-hover/link:rotate-180 duration-200 transform transition-all ease-in-out" />
        )}
        {hasSubMenu && (
          <motion.div
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subMenuAnimate}
            className="absolute top-10 z-[999]"
          >
            <ul className="bg-white shadow-xl flex flex-col gap-3 p-2 w-40 rounded-md ">
              {menu?.subMenu?.map((submenu, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={submenu.route}
                      className={`${
                        pathname === submenu.route && "bg-primary text-white"
                      } w-full p-3 block hover:bg-primary text-black hover:text-white transform transition-all duration-100 rounded-lg z-[999]`}
                    >
                      {submenu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </motion.li>
    </>
  );
};

export default DesktopMenu;

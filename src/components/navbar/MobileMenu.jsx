import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const MobileMenu = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const subMenuAnimate = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  const toogleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (isClicked, i) => {
    setClicked(isClicked ? null : i);
    toogleDrawer();
  };
  return (
    <>
      <div>
        <button className="cursor-pointer" onClick={toogleDrawer}>
          {isOpen ? (
            <X className="w-7 h-7 md:w-8 md:h-8" />
          ) : (
            <Menu className="w-7 h-7 md:w-8 md:h-8" />
          )}{" "}
        </button>
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        className="fixed left-0 right-0 top-28 md:top-32 w-full h-full overflow-y-auto backdrop-blur-2xl z-[999] bg-white/50 p-6"
      >
        <ul>
          {menus?.map((menu, i) => {
            const hasSubMenu = menu?.subMenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <li key={i}>
                <Link
                  to={menu.route}
                  onClick={() => {
                    hasSubMenu
                      ? setClicked(isClicked ? null : i)
                      : handleClick(isClicked, i);
                  }}
                  className="flex items-center justify-between p-4 capitalize rounded-md hover:bg-primary hover:text-white outline-none transform ease-in-out transition-all duration-100 relative"
                >
                  {menu.name}
                  <span className="block md:hidden">{menu.singin}</span>
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </Link>
                {hasSubMenu && (
                  <motion.ul
                    className="ml-5"
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuAnimate}
                  >
                    {menu?.subMenu.map((sm, i) => {
                      return (
                        <li
                          key={i}
                          className="capitalize p-2 flex items-center  rounded-md cursor-pointer hover:bg-primary hover:text-white outline-none transform ease-in-out transition-all duration-100"
                          onClick={toogleDrawer}
                        >
                          <Link to={sm.route}>{sm.name}</Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
};

export default MobileMenu;

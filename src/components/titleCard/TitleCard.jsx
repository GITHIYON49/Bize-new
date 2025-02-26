import React from "react";
import { useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { titleCardData } from "../../data/TitleCard";

const TitleCard = () => {
  const navigation = useNavigate();

  function handleClick(route) {
    navigation(route);
  }
  return (
    <>
      <div className="w-full bg-tertiary sm:py-10 flex flex-col gap-3  sm:flex-row items-center justify-around p-5 sm:px-0">
        {titleCardData.map((data, i) => {
          return (
            <div
              key={i}
              className="w-full border-[1px] py-5 sm:py-0 border-gray-200 group/link sm:border-0 md:w-auto flex  gap-7 items-center justify-center cursor-pointer"
              onClick={() => handleClick(data.pageLink)}
            >
              <div className="flex items-center justify-between text-secondary group-hover/link:bg-secondary group-hover/link:text-white rounded-full p-2 transform transition-all ease-in-out duration-300">
                <data.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 " />
              </div>
              <div className="text-center text-white">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
                  {data.title}
                </h2>
                <span className="text-sm lg:text-base capitalize text-gray-300">
                  {data.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TitleCard;

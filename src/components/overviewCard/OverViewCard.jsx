import React from "react";
import { useNavigate } from "react-router";

const OverViewCard = ({ data, className }) => {
  const navigation = useNavigate();
  function handleClick(route) {
    navigation(route);
  }
  return (
    <>
      <section className="w-full flex items-center justify-center my-20">
        <div
          className={
            className
              ? `w-11/12 flex  flex-col md:flex-row-reverse items-start lg:items-center justify-center gap-5`
              : `w-11/12 flex flex-col md:flex-row items-start lg:items-center justify-center gap-5`
          }
        >
          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-3 h-[400px] rounded-xs overflow-hidden">
            <div className="row-span-3 rounded-xs overflow-hidden ">
              <img
                src={data.picture.one}
                alt="image-one"
                className="w-full h-full object-cover hover:scale-125 transform transition-all duration-200"
              />
            </div>
            <div className="row-span-3 flex flex-col gap-3">
              <div className="h-1/2 rounded-xs overflow-hidden ">
                <img
                  src={data.picture.two}
                  alt="image-two"
                  className="w-full h-full object-cover hover:scale-125 transform transition-all duration-200"
                />
              </div>
              <div className="h-1/2 rounded-xs overflow-hidden">
                <img
                  src={data.picture.three}
                  alt="image-three"
                  className="w-full h-full object-cover hover:scale-125 transform transition-all duration-200"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start justify-center  gap-5 md:gap-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">{data.heading}</h2>
            <p className="text-base">{data.description}</p>
            {data?.description2 && <p>{data.description2}</p>}
            <button
              className={
                data.buttonName &&
                `bg-secondary hover:bg-secondaryLight transform transition-all duration-100 ease-in-out text-white px-5 py-2 text-base capitalize rounded-lg outline-none cursor-pointer`
              }
              onClick={() => {
                handleClick(
                  data.buttonName === "Read More" ? "/about" : "/registration"
                );
              }}
            >
              {data.buttonName}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverViewCard;

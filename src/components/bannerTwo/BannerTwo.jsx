import React from "react";
import { bannerOne } from "../../assets/images";

const BannerTwo = ({ data }) => {
  return (
    <>
      <section
        className={`w-full h-[500px] flex items-center justify-center md:justify-start relative`}
        style={{
          backgroundImage: `url(${bannerOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>
        <div className="w-4/5 md:w-1/2 text-white flex flex-col items-start justify-center  gap-5 md:ml-20 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {data.heading}
          </h1>
          {data?.description && (
            <p className="text-sm md:text-base leading-6">{data.description}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default BannerTwo;

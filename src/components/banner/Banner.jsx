import React from "react";

const Banner = ({ data }) => {
  return (
    <>
      <section
        className={`w-full h-auto md:h-[450px] flex flex-col md:flex-row items-center justify-center`}
        style={{
          backgroundColor: data?.color ? data.color : "#12cad6",
        }}
      >
        <div className="w-full md:w-1/2 lg:w-[55%] h-full flex items-center justify-center py-10 md:py-0">
          <div className="w-11/12 lg:w-[70%] text-white flex flex-col items-start justify-center gap-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {data.heading}
            </h1>
            {data?.description && (
              <p className="text-xs md:text-sm leading-6">{data.description}</p>
            )}
          </div>
        </div>
        <div className="w-full h-auto md:w-1/2 md:h-[80%] lg:h-full lg:w-[45%]">
          <img
            src={data.picture}
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;

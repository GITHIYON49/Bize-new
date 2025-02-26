import React, { useState } from "react";
import { servicesOverviewData } from "../../data/ServicesOverviewCard";

const ServicesOverview = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center mt-5 lg:my-10 gap-5 py-10">
        <div className="w-11/12 flex flex-col items-center justify-center gap-10">
          <div className="w-full flex items-center justify-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl text-start sm:text-start uppercase font-bold   relative after:content-[''] after:w-full  sm:after:w-2/5 hover:after:w-full hover:after:transition-all hover:after:ease-in-out hover:after:duration-300 cursor-default after:h-1 after:bg-secondary after:block after:mt-2">
              What makes us different
            </h2>
          </div>

          <div className="w-full flex flex-wrap md:grid md:grid-cols-3 justify-center gap-5 items-stretch">
            {servicesOverviewData.map((data, i) => (
              <ServicesCard key={i} data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOverview;

export const ServicesCard = ({ data }) => {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow((prev) => !prev);
  }
  return (
    <div className="w-11/12 sm:w-2/5 md:w-full min-h-[400px] flex flex-col rounded-lg border group/cards shadow-sm overflow-hidden bg-white border-stone-200 shadow-stone-950/5 p-2 ">
      <img
        src={data.picture}
        alt="image"
        className="w-full h-[200px] object-cover rounded"
      />
      <div className="flex-grow px-3.5 py-2.5 flex flex-col justify-between">
        <div>
          <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
            {data.heading}
          </h6>
          <p
            className={`font-sans antialiased text-base my-1 text-stone-600 ${
              isShow ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            {data.summary}
          </p>
        </div>
        <div className="w-full pt-2 pb-3.5">
          <button
            className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-secondary hover:bg-secondaryLight relative bg-gradient-to-b from-secondaryLight to-secondary border-secondary text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-secondary hover:to-secondary hover:border-secondary after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"
            onClick={() => handleShow()}
          >
            {isShow ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { servicesOverviewData } from "../../data/ServicesOverviewCard";

const ServicesOverview = () => {
  return (
    <>
      <section className="w-full bg-yellow-50-50 flex flex-col items-center justify-center mt-5 lg:my-10 gap-5 py-10">
        <h2 className="text-3xl font-bold capitalize">
          What makes us different
        </h2>

        <div className="w-11/12 flex flex-wrap justify-center gap-5 items-stretch">
          {servicesOverviewData.map((data, i) => (
            <div
              key={i}
              className="w-11/12 sm:w-2/5 lg:w-[30%] min-h-[400px] flex flex-col rounded-lg border shadow-sm overflow-hidden bg-white border-stone-200 shadow-stone-950/5 p-2"
            >
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
                  <p className="font-sans antialiased text-base my-1 text-stone-600">
                    {data.summary}
                  </p>
                </div>
                <div className="w-full pt-2 pb-3.5">
                  <button className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-secondary hover:bg-secondaryLight relative bg-gradient-to-b from-secondaryLight to-secondary border-secondary text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-secondary hover:to-secondary hover:border-secondary after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesOverview;
